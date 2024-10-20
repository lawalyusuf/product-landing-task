import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const productData = {
  productName: "Awesome Product",
  description: "This is the best product for all your needs.",
  ctaText: "Get Started",

  features: [
    { title: "Fast", description: "Blazing fast performance for all users." },
    { title: "Secure", description: "Top-notch security for your peace of mind." },
    { title: "Reliable", description: "Available 24/7 with 99.9% uptime." }
  ],

  testimonials: [
    { name: "John Doe", photo: "john.jpg", text: "This product changed my life!" },
    { name: "Jane Smith", photo: "jane.jpg", text: "I love using this product every day." }
  ],

  pricingPlans: [
    { name: "Basic", price: "$10/month", description: "For personal use." },
    { name: "Pro", price: "$30/month", description: "For professionals." },
    { name: "Enterprise", price: "Contact Us", description: "For large businesses." }
  ],

  links: [
    { name: "Terms of Service", url: "/terms" },
    { name: "Privacy Policy", url: "/privacy" }
  ],

  socialMedia: [
    { platform: "Facebook", url: "https://facebook.com" },
    { platform: "Twitter", url: "https://twitter.com" }
  ]
};

// productData.features.map(product => console.log(product.name));

// Parent LandingPage component
function LandingPage() {

  return (
    <div className="landing-page">
      <Header
        productName={productData.productName}
        description={productData.description}
        ctaText={productData.ctaText}
      />
      <Features features={productData.features} />
      <Testimonials testimonials={productData.testimonials} />
      <Pricing pricingPlans={productData.pricingPlans} />
      <Footer links={productData.links} socialMedia={productData.socialMedia} />
    </div>
  );
}

// Header component
function Header({ productName, description, ctaText }) {
  return (
    <header className="header">
      <h1>{productName}</h1>
      <p>{description}</p>
      <button>{ctaText}</button>
    </header>
  );
}

// Features component
function Features({ features }) {
  return (
    <section className="features">
      <h2>Features</h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Testimonials component
function Testimonials({ testimonials }) {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img src={testimonial.photo} alt={testimonial.name} />
            {/* <img src={testimonial.photo} alt={`${testimonial.name}'s photo`} /> */}
            <p>"{testimonial.text}"</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

// Pricing component
function Pricing({ pricingPlans }) {
  return (
    <section className="pricing">
      <h2>Pricing</h2>
      <div className="pricing-list">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="pricing-item">
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <p>{plan.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Footer component
function Footer({ links, socialMedia }) {
  return (
    <footer className="footer">
      <div className="footer-links">
        {links.map((link, index) => (
          <a key={index} href={link.url}>
            {link.name}
          </a>
        ))}
      </div>
      <div className="social-media">
        {socialMedia.map((social, index) => (
          <a key={index} href={social.url}>
            {social.platform}
          </a>
        ))}
      </div>
    </footer>
  );
}


// Render to root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);

