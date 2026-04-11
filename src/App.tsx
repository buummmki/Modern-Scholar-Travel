/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import InquiryPage from './pages/InquiryPage';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'inquiry'>('landing');

  return (
    <LanguageProvider>
      {currentPage === 'landing' && <LandingPage onNavigate={() => setCurrentPage('inquiry')} />}
      {currentPage === 'inquiry' && <InquiryPage onNavigate={() => setCurrentPage('landing')} />}
    </LanguageProvider>
  );
}
