'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/home/hero-section';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Suspense, lazy } from 'react';

// Lazy load heavy components
const PopularAuctions = lazy(() => import('@/components/home/popular-auctions').then(mod => ({ default: mod.PopularAuctions })));
const BrowseLotsTab = lazy(() => import('@/components/gallery/browse-lots-tab').then(mod => ({ default: mod.BrowseLotsTab })));
const CTASection = lazy(() => import('@/components/home/cta-section').then(mod => ({ default: mod.CTASection })));

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col h-full overflow-y-auto overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* <TrendingNFTs /> */}
        
        <section className="w-full px-4 sm:px-6 lg:px-8 pb-20">
          <div className="w-full bg-white pt-6 sm:pt-10 mt-4 sm:mt-8 max-w-7xl mx-auto px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8">
               <h2
            className="font-extrabold uppercase text-black"
            style={{
              fontFamily: '"Playfair Display"',
              fontSize: 'clamp(24px, 5vw, 40px)',
              lineHeight: 'clamp(30px, 6vw, 50px)',
            }}
          >
            LIVE NOW
          </h2>

          <Button
            variant="outline"
            className="px-4 sm:px-6 py-2 uppercase text-xs sm:text-sm w-full sm:w-auto"
            style={{
              fontFamily: '"Be Vietnam"',
              fontWeight: 500,
              fontSize: 'clamp(16px, 2.5vw, 14px)',
              lineHeight: 'clamp(24px, 3vw, 20px)',
              letterSpacing: '-0.1px',
              textAlign: 'center',
              background: '#14151A',
              color: 'white',
            }}
          >
            EXPLORE ALL
          </Button>
            </div>
            <div>
              <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="animate-pulse bg-gray-200 h-64 rounded-lg" />
                ))}
              </div>}>
                <BrowseLotsTab limit={3} onlyLive />
              </Suspense>
            </div>
          </div>
        </section>
        
        <div className="flex-1">
          <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg mx-4" />}>
            <PopularAuctions />
          </Suspense>
        </div>
        
        <Suspense fallback={<div className="animate-pulse bg-gray-200 h-64 rounded-lg mx-4" />}>
          <CTASection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
