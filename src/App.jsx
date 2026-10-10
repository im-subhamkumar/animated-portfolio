import React, { useEffect } from 'react'
import CinematicCursor from './components/CinematicCursor'
import CinematicNavbar from './components/CinematicNavbar2'
import CinematicHero from './components/CinematicHero2'
import CinematicWork from './components/CinematicWork2'
import CinematicAbout from './components/CinematicAbout'
import CinematicExperience from './components/CinematicExperience'
import CinematicCredentials from './components/CinematicCredentials'
import CinematicContact from './components/CinematicContact2'
import CinematicFooter from './components/CinematicFooter2'
import VideoScrub from './components/VideoScrub'

export default function App() {
  useEffect(() => {
    // Basic smooth scrolling setup for lenis/locomotive feel (without the heavy library)
    document.documentElement.classList.add('scroll-smooth')
  }, [])

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative selection:bg-[#ff6b1a] selection:text-black">
      {/* Global cinematic film grain overlay */}
      <div className="grain-overlay pointer-events-none" />

      {/* Cinematic Scroll-Linked Video Scrub Background */}
      <VideoScrub />
      
      {/* Subtle grid mesh background */}
      <div className="fixed inset-0 pointer-events-none cinematic-grid opacity-50 z-0" />

      {/* Fluid custom cursor for Desktop */}
      <CinematicCursor />

      {/* Cinematic Navigation */}
      <CinematicNavbar />

      {/* Master Spatial Scenes Progression */}
      <main className="relative z-10">
        {/* SCENE 01: Hero */}
        <CinematicHero />

        {/* Section Divider */}
        <div className="w-full section-divider" />

        {/* SCENE 02: Works */}
        <CinematicWork />

        {/* Section Divider */}
        <div className="w-full section-divider" />

        {/* SCENE 03: About */}
        <CinematicAbout />

        {/* Section Divider */}
        <div className="w-full section-divider" />

        {/* SCENE 04: Experience Timeline */}
        <CinematicExperience />

        {/* Section Divider */}
        <div className="w-full section-divider" />

        {/* SCENE 05: Credentials & Honors */}
        <CinematicCredentials />

        {/* SCENE 06: Contact Hub */}
        <CinematicContact />
      </main>

      {/* Footer */}
      <CinematicFooter />
    </div>
  )
}
