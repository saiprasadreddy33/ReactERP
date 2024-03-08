import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="flex-container">
      <div className="max-w-3xl text-center">
        <h1 className="title">Welcome to the Future of ERP</h1>
        <p className="description">Transform your business operations with our state-of-the-art ERP solution. Experience unparalleled efficiency and innovation.</p>
        <button
          className="button"
          onClick={() => window.location.href='/dashboard'}
        >
          Enter the Future
        </button>
      </div>
      <div className="extra-options mt-8">
        <p className="text-lg mb-4">Still not convinced?</p>
        <div className="button-container">
        <a
            href="https://saiprasadreddy33.github.io/Portfolio/"
            className="buttonw"
            target="_blank"
            rel="noopener noreferrer"
            >
            <span>Know about Me</span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
