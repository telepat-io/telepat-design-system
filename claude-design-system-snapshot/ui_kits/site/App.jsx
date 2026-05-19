// Telepat landing page — recreation of the 1280px viewport mock.
// All section components are loaded as separate Babel scripts and
// export themselves to window. Here we just compose them.
function App() {
  return (
    <div style={{ width: 1280, margin: "0 auto", background: "#000" }}>
      <Hero />
      <ServicesSection />
      <CustomersSection />
      <VisionSection />
      <ContactSection />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
