import { motion } from "motion/react";

const ResumeModal = ({ closeModal }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <motion.div
        className="relative w-full max-w-4xl h-[90vh] border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="absolute top-5 right-5 flex gap-2 z-10">
          <a
            href="/assets/mandiv.pdf"
            download
            className="p-2 rounded-sm bg-midnight hover:bg-gray-500"
          >
            <img src="assets/download.svg" className="w-6 h-6" alt="Download" />
          </a>
          <button
            onClick={closeModal}
            className="p-2 rounded-sm bg-midnight hover:bg-gray-500"
          >
            <img src="assets/close.svg" className="w-6 h-6" alt="Close" />
          </button>
        </div>
        <div className="w-full h-full p-5">
          <object
            data="/assets/mandiv.pdf"
            type="application/pdf"
            className="w-full h-full rounded-lg"
          >
            <p>
              Unable to display PDF file.{" "}
              <a href="/assets/mandiv.pdf" download>
                Download
              </a>{" "}
              instead.
            </p>
          </object>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeModal; 