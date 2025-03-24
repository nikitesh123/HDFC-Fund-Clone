import React from "react";
import './App.css'
import Navbar from "./components/genaral/header/Navbar";
import Home from "./components/landing/home/Home"
import QuickLinks from "./components/landing/quickLinks/QuickLinks";
import Carousel from "./components/landing/ourFunds/Carousel";
import InvestmentPlanner from "./components/landing/investmentPlanner/InvestmentPlanner";
import ShortsSection from "./components/landing/latestShorts/ShortsSection";
import DiscoverMore from "./components/landing/discoverMore/DiscoverMore";
import LatestPost from './components/landing/latestPost/LatestPost';
import CEOInsights from "./components/landing/InsightsCEO/CEOInsights";
import Investments from "./components/landing/investment/Investments";
import Footer from "./components/genaral/footer/Footer";
import FooterBelow from "./components/genaral/footer/FooterBelow";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <QuickLinks/>
      <Carousel/>
      <InvestmentPlanner/>
      <ShortsSection  />
      <DiscoverMore/>
      <LatestPost />
      <CEOInsights/>
      <Investments/>
      <Footer/>
      <FooterBelow />
    </div>
  );
}

export default App;
