/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import InquiryPage from './pages/InquiryPage';
import SamplePlanPage from './pages/SamplePlanPage';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'inquiry' | 'sample'>('landing');

  return (
    <LanguageProvider>
      {currentPage === 'landing' && <LandingPage onNavigate={() => setCurrentPage('inquiry')} onViewSample={() => setCurrentPage('sample')} />}
      {currentPage === 'inquiry' && <InquiryPage onNavigate={() => setCurrentPage('landing')} />}
      {currentPage === 'sample' && <SamplePlanPage onNavigate={() => setCurrentPage('landing')} />}
    </LanguageProvider>
  );
}
