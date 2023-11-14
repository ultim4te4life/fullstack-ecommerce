import React from "react";

import "../HomePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideScrollingMenu from "../components/Sidescroll";
import Sidescroll2 from "../components/Sidescroll2";
import { useState } from "react";
import { useLocation, Link, Outlet, useNavigate } from "react-router-dom";

function HomePage(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to the Products page with the search query as a URL parameter
    navigate(`/product?query=${searchQuery}`);
  };
  return (
    <div>
      <div className="main-container">
        <Header user={props.user} darkMode={true} />
        <div className="content-container">
          <div className="text-content">
            <h1 className="main-title">
              Discover Most Affordable Apple products
            </h1>

            <h2 className="sub-title">
              Find the best, reliable and affordable apple products here. We
              focus on the product quality. Here you can find all the products
              apple ever made. Even the products apple officially stopped
              selling. So why you are waiting? Just order now!
            </h2>
            <div className="input-container ">
              <div className="search-input-container">
                <input
                  type="text"
                  placeholder="Find the best product"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <button onClick={handleSearch} className="search-button">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img
              className="home-image"
              src="https://s3-alpha-sig.figma.com/img/fc26/57b6/d0eb878086e0c38adfa66ff641c5f1fe?Expires=1700438400&Signature=MKJxFmTUFpri2cBCH9HT0A7kkR0Rih5LlGJH4IAU3MTkO5SwwFkyHpifQlVyljcYbKo1NQn6Tfj-l-aNpQrZ5ytvGB6GH8sZP8tjeVNIW~3jBa~LArjsg50dJcLmYqBdQcEsBKUjR6Xa20HevnZf59vZ7H9MzzPOclHFixoFKeNKqHC22WpHLS7LfT4vW-5pBUtFBeCVmtEF6~QDokITOL~8UdXkFMoycbOX3dvXaZtUUHov0P0wDiVGJYD1-I01qm0DPqNZVSBl3TgBE52~9jFoEl~m4UPl~pGar-pTkGBpJgGuibpWg7Jo-oHBh4qu0Mjm5kCCSgfTEEB4hbUPIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="homepage"
            />
          </div>
        </div>
      </div>
      <Link to="/product" className="home-link">
        <div className="collection-container">
          <h1>Newest Collection Avalaible</h1>
          <div className="product-container">
            <div className="product">
              <img
                className="product-image"
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670959891635"
                alt="Product"
              />
              <span>Mac</span>
            </div>
            <div className="product">
              <img
                className="product-image"
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSq6Ot9-CzgR5uw1FlBVnWIZIPX3YRzU_vFw9z13SQcLt38Rdca"
                alt="macbook"
              />
              <span>Iphone</span>
            </div>
            <div className="product">
              <img
                className="product-image"
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_jsCHtCRDOhiJMqYWmurKO3sXUG1GkCU3W0S6VLxM2ucNNq9K"
                alt="iphone"
              />
              <span>Ipad</span>
            </div>
            <div className="product">
              <img
                className="product-image"
                src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-apple-watch-ultra-2/tile/Apple-Watch-Ultra-2-hero-230912.jpg.og.jpg?202310191704"
                alt="ipad"
              />
              <span>Apple Watches</span>
            </div>
            <div className="product">
              <img
                className="product-image"
                src="https://t3.gstatic.com/images?q=tbn:ANd9GcRjRaQhYVTQ_j_EyjlkHXd9swHJ6YyrDYrUNg6KG9m6D5V17aQX"
                alt="iwatch"
              />
              <span>Airpods</span>
            </div>
            <div className="product">
              <img
                className="product-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqjX-O5EyTMbHnWpReclFHceIFvNWbNORzhVeaWwsjHpvEvKP"
                alt="airpod"
              />
              <span>Air Tags</span>
            </div>
            <div className="product">
              <img
                className="product-image"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJS-jHF8U8GBdCGto91xp_pRASCICvtBm-6YUi7RRizdOWp65Q"
                alt="airtag"
              />
              <span>HomePod</span>
            </div>
            <div className="product">
              <img
                className="product-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJih-CeM7Jr80wIdZqD9OLyF0PPXHjXWSAMwqVA-WGTK95Ueu"
                alt="homepod"
              />
              <span>Accesories</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="footer-container">
        <h1 className="footer-title">Ex.iphones.</h1>
        <h2 className="footer-subtitle">
          From $250-$1000. Every Model Ever Built
        </h2>
        <div>
          <Link to="/product">
            <button>Buy</button>
          </Link>{" "}
          <Link to="/product">
            <button>Learn more</button>
          </Link>{" "}
        </div>
        <div>
          {" "}
          <img
            className="footer-image"
            alt="footerimage"
            src="https://images.macrumors.com/t/9FQICYFKnWxSQyO0VnssqXjtCs4=/1600x0/article-new/2023/03/iphone-14-india.jpg"
          />
        </div>
      </div>
      <SideScrollingMenu />
      <div className="footer-container">
        <h1 className="footer-title">Ex.iwatches.</h1>
        <h2 className="footer-subtitle">
          From $100-200$. Every Model Ever Built
        </h2>
        <div>
          <Link to="/product">
            <button>Buy</button>
          </Link>{" "}
          <Link to="/product">
            <button>Learn more</button>
          </Link>{" "}
        </div>
        <div>
          {" "}
          <img
            className="footer-image"
            alt="footerimages"
            src="https://www.apple.com/v/watch/bf/images/overview/series-9/tile_s9_avail__h13v168dzseq_large_2x.jpg"
          />
        </div>
      </div>
      // <Sidescroll2 />
      <Footer />
    </div>
  );
}

export default HomePage;
