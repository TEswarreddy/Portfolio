// Import necessary modules and dependencies
// Import React and hooks for state and side effects
import React, { useEffect, useState } from "react"; 

//import Navbar from "@/components/shared/Navbar"; 

// Import footer component
//import Footer from "@/components/shared/Footer";
const Home = () => {


  return (
    <>
      <Navbar /> {/* Display the navigation bar */}

      {/* Main content area with Hero section and latest job listings */}
      <div className="bg-white">
        <HeroSection
          searchInfo={{
            titleKeyword,
            setTitleKeyword,
            location,
            setLocation,
          }}
        />
        <LatestJobs /> {/* Display latest job postings */}
      </div>

      <Footer /> {/* Display the footer */}
    </>
  );
};

export default Home; // Export the Home component
