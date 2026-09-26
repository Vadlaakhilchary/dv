import React, { Suspense } from 'react';

// Lazy-load the existing registration app entry to avoid loading on every page
const RegistrationApp = React.lazy(() =>
  import('../registration/App').catch(() => ({
    default: () => (
      <div className="text-center text-white">
        Failed to load registration app
      </div>
    ),
  }))
);

const OllaverseRegistration = () => {
  return (
    <div className="min-h-screen">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-white">
            Loading Ollaverse Registration...
          </div>
        }
      >
        <RegistrationApp />
      </Suspense>
    </div>
  );
};

export default OllaverseRegistration;