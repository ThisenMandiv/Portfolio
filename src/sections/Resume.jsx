const Resume = () => (
  <section id="resume" className="c-space section-spacing flex flex-col items-center justify-center min-h-screen">
    <h2 className="text-heading mb-6">My Resume</h2>
    <div className="w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center">
      <object
        data="/assets/ThisenMandivResume.pdf"
        type="application/pdf"
        className="w-full h-full"
      >
        <p className="text-black p-4">
          Unable to display PDF.{' '}
          <a href="/assets/ThisenMandivResume.pdf" download className="underline text-blue-600">Download Resume</a>
        </p>
      </object>
    </div>
  </section>
);

export default Resume; 