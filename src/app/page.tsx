"use client"
import { ThemeProvider } from "@/providers/ThemeProvider";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div className="min-h-screen w-full">
        
        {/* Hero Section */}
        <div id="hero" data-section="hero" className="mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Welcome to Webild
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground/80 max-w-2xl">
              The future of web design is here.
            </p>
            <button className="primary-button text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
              Learn More
            </button>
          </div>
        </div>

        {/* About Section */}
        <div id="about" data-section="about" className="mx-auto px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Who We Are
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Webild is a cutting-edge digital agency that specializes in modern web design and development. Our team of experts brings innovative solutions to bring your ideas to life.
            </p>
          </div>
        </div>

        {/* Feature Section */}
        <div id="feature" data-section="feature" className="mx-auto px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 rounded-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-cta/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary-cta" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Fast & Reliable
                </h3>
                <p className="text-foreground/80">
                  Experience lightning-fast performance with our optimized web designs and robust code.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div id="product" data-section="product" className="mx-auto px-4 md:px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-8 rounded-lg">
                <div className="w-16 h-16 bg-primary-cta/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary-cta" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Web Development
                </h3>
                <p className="text-foreground/80">
                  Create dynamic, user-friendly websites that are built to perform.
                </p>
              </div>
              <div className="card p-8 rounded-lg">
                <div className="w-16 h-16 bg-primary-cta/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary-cta" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Responsive Design
                </h3>
                <p className="text-foreground/80">
                  Our designs adapt seamlessly across all devices for a perfect user experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" data-section="pricing" className="mx-auto px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="card p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Starter
              </h3>
              <div className="text-4xl font-bold mb-6 text-primary-cta">
                $10<span className="text-lg text-foreground/60">/month</span>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 text-primary-cta" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Basic Website</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 text-primary-cta" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 000 2v9a2 2 0 002 2h1a1 1 0 100-2H5a1 1 0 01-1-1V6a1 1 0 000-2zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">5 Pages</span>
                </div>
              </div>
              <button className="primary-button text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Metric Section */}
        <div id="metric" data-section="metric" className="mx-auto px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl md:text-8xl font-bold text-primary-cta mb-4">
              200
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Projects Completed
            </h3>
            <p className="text-foreground/80">
              Since our inception in 2018, we've delivered over 200 projects.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div id="team" data-section="team" className="mx-auto px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="card p-8 rounded-lg">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="/placeholders/placeholder1.webp" 
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                John Doe
              </h3>
              <p className="text-lg text-primary-cta mb-4">
                Lead Developer
              </p>
              <p className="text-foreground/80">
                John is a seasoned developer with over 10 years of experience in web development. He leads our team with his expertise and passion.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div id="testimonial" data-section="testimonial" className="mx-auto px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="card p-8 rounded-lg">
              <blockquote className="text-xl md:text-2xl text-foreground/90 mb-6 italic">
                "Webild exceeded my expectations with their innovative design and exceptional customer service. Highly recommend!"
              </blockquote>
              <div>
                <div className="font-bold text-foreground">Jane Smith</div>
                <div className="text-foreground/60">ABC Corp</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div id="socialproof" data-section="socialproof" className="mx-auto px-4 md:px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Trusted By
            </h2>
            <p className="text-lg text-foreground/80 mb-12">
              See what our clients have to say about us.
            </p>
            <div className="flex justify-center items-center gap-12">
              <img 
                src="/placeholders/placeholder1.webp" 
                alt="Client Logo"
                className="h-12 opacity-60 hover:opacity-100 transition-opacity"
              />
              <img 
                src="/placeholders/placeholder1.webp" 
                alt="Client Logo"
                className="h-12 opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" data-section="faq" className="mx-auto px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  How do I get started with Webild?
                </h3>
                <p className="text-foreground/80">
                  Simply contact us to discuss your project and we'll create a customized plan for you.
                </p>
              </div>
              <div className="card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  What is included in the starter plan?
                </h3>
                <p className="text-foreground/80">
                  The starter plan includes 5 pages of basic website design and development. Additional features are available at an extra cost.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" data-section="contact" className="mx-auto px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Get in touch
                </h2>
                <p className="text-lg text-foreground/80 mb-8">
                  We'd love to hear from you. Send us a message.
                </p>
                <form className="space-y-6">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    required
                    className="w-full p-4 rounded-lg border border-card bg-card text-foreground placeholder-foreground/60 focus:outline-none focus:border-primary-cta"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    className="w-full p-4 rounded-lg border border-card bg-card text-foreground placeholder-foreground/60 focus:outline-none focus:border-primary-cta"
                  />
                  <textarea 
                    placeholder="Type your message..." 
                    rows={5} 
                    required
                    className="w-full p-4 rounded-lg border border-card bg-card text-foreground placeholder-foreground/60 focus:outline-none focus:border-primary-cta resize-none"
                  ></textarea>
                  <button 
                    type="submit" 
                    className="primary-button text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img 
                  src="/placeholders/placeholder1.webp" 
                  alt="Contact us"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div id="newsletter" data-section="newsletter" className="mx-auto px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary-cta/10 text-primary-cta px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Newsletter
            </div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Stay updated with our latest news
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Subscribe to our newsletter for weekly updates and exclusive content.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 p-4 rounded-lg border border-card bg-card text-foreground placeholder-foreground/60 focus:outline-none focus:border-primary-cta"
                />
                <button 
                  type="submit" 
                  className="primary-button text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <div id="footer" data-section="footer" className="mx-auto px-4 md:px-6 py-20 border-t border-card">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Webild</h3>
                <p className="text-foreground/80 max-w-md">
                  Building the future of web design with innovative solutions and exceptional service.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-foreground/80 hover:text-primary-cta transition-colors">Features</a></li>
                  <li><a href="#pricing" className="text-foreground/80 hover:text-primary-cta transition-colors">Pricing</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-card pt-8 text-center text-foreground/60">
              <p>© 2025 | Company</p>
            </div>
          </div>
        </div>

      </div>
    </ThemeProvider>
  );
}