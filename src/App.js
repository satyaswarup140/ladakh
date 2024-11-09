import React from 'react';
import Header from './components/Header'; // Import Header component
import BookingSection from './components/BookingSection';
import DiscoverSection from './components/DiscoverSection';
import ServicesSection from './components/ServicesSection';
import OrderConfirmation from './components/OrderConfirmation';
import Footer from './components/Footer';
import ErrorBoundary from './ErrorBoundary';  // Import the error boundary

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Header /> {/* Use the Header component here */}
        <main>
          <section id="booking">
            <BookingSection />
          </section>

          <section id="discover">
            <DiscoverSection />
          </section>

          <section id="services">
            <ServicesSection />
          </section>

          <section id="order-confirmation">
            <OrderConfirmation />
          </section>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
