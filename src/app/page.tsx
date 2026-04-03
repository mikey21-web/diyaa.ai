'use client';

import { Button, Card, SectionHeading, NavBar, Footer, ScrollReveal } from '@/components';

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="pt-24 pb-16">
        <section className="container section-padding">
          <SectionHeading
            level="h1"
            centered
            subtitle="Testing design system components"
          >
            Component Library
          </SectionHeading>

          {/* Button Examples */}
          <div className="mt-12 space-y-4">
            <h2 className="text-4xl font-bold mb-6">Buttons</h2>
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="primary" size="lg">Large Button</Button>
              <Button variant="primary" size="sm">Small Button</Button>
            </div>
          </div>

          {/* Card Examples */}
          <div className="mt-12">
            <h2 className="text-4xl font-bold mb-6">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <h3 className="text-2xl font-semibold mb-2">Card Title</h3>
                <p>This is a sample card with hover effects.</p>
              </Card>
              <Card>
                <h3 className="text-2xl font-semibold mb-2">Another Card</h3>
                <p>Hover to see the scale and shadow effects.</p>
              </Card>
              <Card>
                <h3 className="text-2xl font-semibold mb-2">Third Card</h3>
                <p>All components are responsive and accessible.</p>
              </Card>
            </div>
          </div>

          {/* Scroll Animation Demo */}
          <div className="mt-24 mb-12">
            <SectionHeading level="h2" centered>
              Scroll Animation Demo
            </SectionHeading>
            <p className="text-center text-[#999999] mt-4 max-w-2xl mx-auto">
              Scroll down to see the animations trigger when elements come into view
            </p>
          </div>

          {/* Scroll Reveal Examples - Single animations */}
          <div className="mt-16 space-y-12">
            <ScrollReveal direction="up" delay={0}>
              <Card>
                <h3 className="text-2xl font-semibold mb-2 text-[#00ff88]">Fade + Slide Up</h3>
                <p>This card animates up when it scrolls into view. Perfect for sequential reveals.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <Card>
                <h3 className="text-2xl font-semibold mb-2 text-[#00ff88]">Fade + Slide Left</h3>
                <p>This card slides in from the right side. Great for side-by-side layouts.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <Card>
                <h3 className="text-2xl font-semibold mb-2 text-[#00ff88]">Fade + Slide Right</h3>
                <p>This card slides in from the left side. Creates dynamic visual flow.</p>
              </Card>
            </ScrollReveal>
          </div>

          {/* Staggered Animation Demo */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold mb-8">Staggered Animations</h2>
            <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <h3 className="text-2xl font-semibold mb-2 text-[#00ff88]">Item 1</h3>
                <p>First item animates in with slight delay.</p>
              </Card>
              <Card>
                <h3 className="text-2xl font-semibold mb-2 text-[#00ff88]">Item 2</h3>
                <p>Second item follows after the first.</p>
              </Card>
              <Card>
                <h3 className="text-2xl font-semibold mb-2 text-[#00ff88]">Item 3</h3>
                <p>Third item completes the sequence.</p>
              </Card>
            </ScrollReveal>
          </div>

          {/* Spacing for scroll demo */}
          <div className="mt-24 h-48 flex items-center justify-center bg-[#111111] rounded-lg">
            <p className="text-[#999999] text-lg">Keep scrolling to see more animations...</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
