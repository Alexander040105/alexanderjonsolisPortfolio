import { useState, useRef, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import './CertificationCarousel.css'

function CertificationCarousel({ certifications }) {
  const trackRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const isDragging = useRef(false)
  const isJumping = useRef(false)
  const startX = useRef(0)
  const startScrollLeft = useRef(0)

  const n = certifications.length
  const trackCerts = [
    certifications[n - 1],
    ...certifications,
    certifications[0]
  ]

  const getCardWidth = () => {
    if (!trackRef.current || !trackRef.current.firstElementChild) return 0
    return trackRef.current.firstElementChild.getBoundingClientRect().width
  }

  const getGap = () => {
    if (!trackRef.current) return 0
    return parseInt(window.getComputedStyle(trackRef.current).gap || 0, 10)
  }

  const getTargetLeft = (trackIndex) => {
    const track = trackRef.current
    const card = track ? track.children[trackIndex] : null
    if (!track || !card) return 0
    const cardWidth = card.getBoundingClientRect().width
    return card.offsetLeft - (track.clientWidth - cardWidth) / 2
  }

  const scrollToTrackIndex = (trackIndex, smooth = true) => {
    const track = trackRef.current
    if (!track || !track.children[trackIndex]) return
    track.style.scrollBehavior = smooth ? 'smooth' : 'auto'
    track.scrollTo({ left: getTargetLeft(trackIndex) })
    if (!smooth) track.style.scrollBehavior = 'smooth'
  }

  const jumpToReal = useCallback((trackIndex) => {
    const track = trackRef.current
    if (!track) return
    let realTrackIndex
    if (trackIndex === 0) {
      realTrackIndex = n
      setCurrentIndex(n - 1)
    } else if (trackIndex === n + 1) {
      realTrackIndex = 1
      setCurrentIndex(0)
    } else {
      realTrackIndex = trackIndex
      setCurrentIndex(trackIndex - 1)
    }
    track.classList.add('is-jumping')
    track.style.scrollBehavior = 'auto'
    track.scrollTo({ left: getTargetLeft(realTrackIndex) })
    track.classList.remove('is-jumping')
    track.style.scrollBehavior = 'smooth'
  }, [n])

  const goToPrevious = () => {
    if (isJumping.current) return
    const trackIndex = currentIndex + 1
    if (currentIndex === 0) {
      isJumping.current = true
      setCurrentIndex(n - 1)
      scrollToTrackIndex(0, true)
      setTimeout(() => {
        jumpToReal(0)
        isJumping.current = false
      }, 350)
    } else {
      const newIndex = currentIndex - 1
      setCurrentIndex(newIndex)
      scrollToTrackIndex(trackIndex - 1, true)
    }
  }

  const goToNext = () => {
    if (isJumping.current) return
    const trackIndex = currentIndex + 1
    if (currentIndex === n - 1) {
      isJumping.current = true
      setCurrentIndex(0)
      scrollToTrackIndex(n + 1, true)
      setTimeout(() => {
        jumpToReal(n + 1)
        isJumping.current = false
      }, 350)
    } else {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      scrollToTrackIndex(trackIndex + 1, true)
    }
  }

  const handlePointerDown = (e) => {
    if (isJumping.current) return
    isDragging.current = true
    startX.current = e.clientX
    startScrollLeft.current = trackRef.current ? trackRef.current.scrollLeft : 0
    if (trackRef.current) trackRef.current.classList.add('is-dragging')
  }

  const handlePointerMove = (e) => {
    if (!isDragging.current || !trackRef.current) return
    const delta = e.clientX - startX.current
    trackRef.current.scrollLeft = startScrollLeft.current - delta
  }

  const getNearestTrackIndex = () => {
    const track = trackRef.current
    if (!track) return 1
    const cardWidth = getCardWidth()
    const gap = getGap()
    if (!cardWidth) return 1
    const center = track.scrollLeft + track.clientWidth / 2
    const firstCard = track.children[0]
    const firstCenter = firstCard.offsetLeft + firstCard.getBoundingClientRect().width / 2
    const trackIndex = Math.round((center - firstCenter) / (cardWidth + gap))
    return Math.max(0, Math.min(trackIndex, n + 1))
  }

  const handlePointerUp = () => {
    if (!isDragging.current || !trackRef.current) return
    isDragging.current = false
    trackRef.current.classList.remove('is-dragging')
    const nearest = getNearestTrackIndex()
    if (nearest === 0 || nearest === n + 1) {
      jumpToReal(nearest)
    } else {
      setCurrentIndex(nearest - 1)
      scrollToTrackIndex(nearest, true)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (trackRef.current) jumpToReal(1)
    }, 0)
    return () => clearTimeout(timer)
  }, [jumpToReal])

  return (
    <div className="certification-carousel">
      <div
        className="certification-track"
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {trackCerts.map((cert, trackIndex) => {
          const realIndex =
            trackIndex === 0 ? n - 1 : trackIndex === n + 1 ? 0 : trackIndex - 1
          return (
            <div
              key={trackIndex}
              className={`certification-card ${realIndex === currentIndex ? 'active' : ''}`}
            >
              <h3>{cert.certTitle}</h3>
              {cert.certTagline && <p className="certification-tagline">{cert.certTagline}</p>}
              <figure className="certification-figure">
                <img src={cert.certImage} alt={cert.certTitle} draggable="false" />
              </figure>
              <p className="certification-description">{cert.certDescription}</p>
              {cert.certLink && (
                <a href={cert.certLink} className="certification-link" target="_blank" rel="noopener noreferrer">
                  View Credential <span aria-hidden="true">&rarr;</span>
                </a>
              )}
            </div>
          )
        })}
      </div>

      <div className="certification-controls">
        <button type="button" className="carousel-arrow" onClick={goToPrevious} aria-label="Previous certification">
          <i className="fas fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button type="button" className="carousel-arrow" onClick={goToNext} aria-label="Next certification">
          <i className="fas fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  )
}

CertificationCarousel.propTypes = {
  certifications: PropTypes.array.isRequired
}

export default CertificationCarousel
