import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "../components/navbar";

import HomePage from "../websitepages/homepage";
import OurWorks from "../websitepages/ourworks";
import Services from "../websitepages/services";
import ContactPage from "../websitepages/Contact";
import AboutPage from "../components/Aboutpage";
import PrivacyPolicy from "../components/Privacypolicy";
import TermsOfService from "../components/Termsofservice";
import WebDevelopment from "../services/WebDevelopment";

// Lazy-loaded heavy pages
const ProjectDetail = lazy(() => import("../websitepages/ProjectDetail"));
const SoftwareCompanyMysore = lazy(() => import("../locations/SoftwareCompanyMysore"));

const MainRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<OurWorks />} />
        <Route
          path="/works/:slug"
          element={
            <Suspense fallback={<div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", color: "#aaa" }}>Loading…</div>}>
              <ProjectDetail />
            </Suspense>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />

        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route
          path="/software-company-mysore"
          element={
            <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
              <SoftwareCompanyMysore />
            </Suspense>
          }
        />
        {/* <Route path='/web-development' element={<WebDevelopment />} /> */}
      </Routes>
    </>
  );
};

export default MainRouter;
