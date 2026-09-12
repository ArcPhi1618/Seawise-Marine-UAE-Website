/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ShipManagementView } from './views/ShipManagementView';
import { MaritimeTradingView } from './views/MaritimeTradingView';
import { MarineServicesView } from './views/MarineServicesView';
import { ContactView } from './views/ContactView';

import { ArrowUp, Anchor, Compass } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [navResetKey, setNavResetKey] = useState(0);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [modalDefaultService, setModalDefaultService] = useState('Ship Management');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync with browser hash on load and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '');
      if (rawHash === 'why-seawise') {
        setCurrentPage('about');
        setNavResetKey(k => k + 1);
        setTimeout(() => {
          const el = document.getElementById('why-seawise');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }

      const hash = rawHash as PageId;
      const validPages: PageId[] = [
        'home', 
        'about', 
        'ship-management', 
        'maritime-trading', 
        'marine-services', 
        'contact'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
        setNavResetKey(k => k + 1);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Monitor scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: PageId) => {
    // 1. Instantly reset scroll to top so scrolling past intermediate sections does not trigger animations
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = '';
    });

    // 2. Increment navResetKey to force re-mounting with pristine animation triggers
    setNavResetKey(k => k + 1);

    if (page === 'why-seawise') {
      setCurrentPage('about');
      window.location.hash = 'why-seawise';
      setTimeout(() => {
        const el = document.getElementById('why-seawise');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
      return;
    }
    setCurrentPage(page);
    window.location.hash = page;
  };

  const openConsultationModal = (service?: string) => {
    if (service) {
      setModalDefaultService(service);
    }
    setIsConsultationModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#060B18] text-slate-100 antialiased font-sans overflow-x-hidden">
      {/* Sticky Header */}
      <Header 
        currentPage={currentPage}
        onNavigate={navigateTo}
        onRequestConsultation={() => openConsultationModal()}
      />

      {/* Main Page Content */}
      <main className="flex-grow overflow-x-hidden">
        {currentPage === 'home' && (
          <HomeView 
            key={`home-${navResetKey}`}
            onNavigate={navigateTo} 
            onRequestConsultation={openConsultationModal} 
          />
        )}

        {currentPage === 'about' && (
          <AboutView 
            key={`about-${navResetKey}`}
            onNavigate={navigateTo} 
            onRequestConsultation={() => openConsultationModal()} 
          />
        )}

        {currentPage === 'ship-management' && (
          <ShipManagementView 
            onNavigate={navigateTo} 
            onRequestConsultation={openConsultationModal} 
          />
        )}

        {currentPage === 'maritime-trading' && (
          <MaritimeTradingView 
            onNavigate={navigateTo} 
            onRequestConsultation={openConsultationModal} 
          />
        )}

        {currentPage === 'marine-services' && (
          <MarineServicesView 
            onNavigate={navigateTo} 
            onRequestConsultation={openConsultationModal} 
          />
        )}

        {currentPage === 'contact' && (
          <ContactView 
            onNavigate={navigateTo} 
          />
        )}
      </main>

      {/* Corporate Dark Footer */}
      <Footer 
        onNavigate={navigateTo}
        onRequestConsultation={() => openConsultationModal()}
      />

      {/* Request a Consultation Dialog */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        defaultService={modalDefaultService}
      />

      {/* Back to Top Floating Action Button */}
      {showBackToTop && (
        <button
          id="back-to-top-btn"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white rounded-sm border border-slate-700 shadow-xl backdrop-blur-md transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
