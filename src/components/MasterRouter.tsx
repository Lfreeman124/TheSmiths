import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import FAQ from "../pages/FAQ";
import Venue from "../pages/Venue";
import OnTheDay from "../pages/OnTheDay";
import RSVP from "../pages/RSVP";
import Edinburgh from "../pages/Edinburgh";
import Registry from "../pages/Registry";
import Accomodation from "../pages/Accomodation";

const MasterRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/ontheday" element={<OnTheDay />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/edinburgh" element={<Edinburgh />} />
        <Route path="/registry" element={<Registry />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MasterRouter;
