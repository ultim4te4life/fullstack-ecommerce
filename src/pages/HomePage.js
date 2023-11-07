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
      <div
        style={{
          width: "100vw",
          height: "100vh",

          position: "relative",
          background: "linear-gradient(155deg, #383638 2.06%, #0B0B0B 33.08%)",
          overflow: "hidden",
        }}
      >
        <Header user={props.user} darkMode={true} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "457px",
              marginLeft: "192px",
              display: "flex",
              height: "100vh",
              color: "white",
              marginTop: "200px",
              // justifyContent: "center",
              flexDirection: "column",
              alignContent: "center",
            }}
          >
            <h1
              style={{
                color: "#F5F5F7",
                fontFamily: "Poppins",
                fontSize: "50px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "125.5%", // Note that we include the percentage as a string
              }}
            >
              Discover Most Affordable Apple products
            </h1>

            <h2
              style={{
                color: "#8B8E99",
                fontFamily: "Poppins",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "125.5%",
                marginBottom: "10px", // Note that we include the percentage as a string
              }}
            >
              Find the best, reliable and affordable apple products here. We
              focus on the product quality. Here you can find all the products
              apple ever made. Even the products apple officially stopped
              selling. So why you are waiting? Just order now!
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "10px",
              }}
            >
              <div style={{ position: "relative", flex: 1 }}>
                <input
                  type="text"
                  placeholder="Find the best product"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    padding: "12px",
                    marginRight: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    width: "100%",
                  }}
                />
                <button
                  onClick={handleSearch}
                  style={{
                    position: "absolute",
                    right: "-35px",
                    top: "27%",
                    transform: "translateY(-50%)",
                    backgroundColor: "blue",
                    color: "white",
                    padding: "12px 16px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div style={{ width: "300px" }}>
            <img
              style={{ height: "100vh" }}
              src="https://s3-alpha-sig.figma.com/img/fc26/57b6/d0eb878086e0c38adfa66ff641c5f1fe?Expires=1700438400&Signature=MKJxFmTUFpri2cBCH9HT0A7kkR0Rih5LlGJH4IAU3MTkO5SwwFkyHpifQlVyljcYbKo1NQn6Tfj-l-aNpQrZ5ytvGB6GH8sZP8tjeVNIW~3jBa~LArjsg50dJcLmYqBdQcEsBKUjR6Xa20HevnZf59vZ7H9MzzPOclHFixoFKeNKqHC22WpHLS7LfT4vW-5pBUtFBeCVmtEF6~QDokITOL~8UdXkFMoycbOX3dvXaZtUUHov0P0wDiVGJYD1-I01qm0DPqNZVSBl3TgBE52~9jFoEl~m4UPl~pGar-pTkGBpJgGuibpWg7Jo-oHBh4qu0Mjm5kCCSgfTEEB4hbUPIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "100px", marginTop: "100px" }}>
        <h1>Newest Collection Avalaible</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            // flexWrap: "wrap",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "18px",
              cursor: "pointer",
            }}
          >
            <img
              style={{ width: "120px", height: "78px" }}
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670959891635"
              alt="Product Image"
            />
            <span>Mac</span>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "18px",
              cursor: "pointer",
            }}
          >
            <img
              style={{ width: "120px", height: "78px" }}
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSq6Ot9-CzgR5uw1FlBVnWIZIPX3YRzU_vFw9z13SQcLt38Rdca"
              alt="Product Image"
            />
            <span>Iphone</span>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "18px",
              cursor: "pointer",
            }}
          >
            <img
              style={{ width: "120px", height: "78px" }}
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_jsCHtCRDOhiJMqYWmurKO3sXUG1GkCU3W0S6VLxM2ucNNq9K"
              alt="Product Image"
            />
            <span>Ipad</span>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "18px",
              cursor: "pointer",
            }}
          >
            <img
              style={{ width: "120px", height: "78px" }}
              src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-apple-watch-ultra-2/tile/Apple-Watch-Ultra-2-hero-230912.jpg.og.jpg?202310191704"
              alt="Product Image"
            />
            <span>Apple Watches</span>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "18px",
              cursor: "pointer",
            }}
          >
            <img
              style={{ width: "120px", height: "78px" }}
              src="https://t3.gstatic.com/images?q=tbn:ANd9GcRjRaQhYVTQ_j_EyjlkHXd9swHJ6YyrDYrUNg6KG9m6D5V17aQX"
              alt="Product Image"
            />
            <span>Airpods</span>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "18px",
              cursor: "pointer",
            }}
          >
            <img
              style={{ width: "120px", height: "78px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqjX-O5EyTMbHnWpReclFHceIFvNWbNORzhVeaWwsjHpvEvKP"
              alt="Product Image"
            />
            <span>Air Tags</span>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "18px",
              cursor: "pointer",
            }}
          >
            <img
              style={{ width: "120px", height: "78px" }}
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJS-jHF8U8GBdCGto91xp_pRASCICvtBm-6YUi7RRizdOWp65Q"
              alt="Product Image"
            />
            <span>HomePod</span>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "18px",
              cursor: "pointer",
            }}
          >
            <img
              style={{ width: "120px", height: "78px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJih-CeM7Jr80wIdZqD9OLyF0PPXHjXWSAMwqVA-WGTK95Ueu"
              alt="Product Image"
            />
            <span>Accesories</span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          color: "#F5F5F7",
          padding: "130px 239.5px 0px 239.5px",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          background: "black",
        }}
      >
        <h1
          style={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "42px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "52.008px",
            letterSpacing: "-0.144px",
          }}
        >
          Ex.iphones.
        </h1>
        <h2
          style={{
            color: "#F5F5F7",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "19px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "29.001px",
            letterSpacing: "0.231px",
          }}
        >
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
            style={{ width: "961px", height: "393px", marginTop: "89px" }}
            src="https://images.macrumors.com/t/9FQICYFKnWxSQyO0VnssqXjtCs4=/1600x0/article-new/2023/03/iphone-14-india.jpg"
          />
        </div>
      </div>
      <SideScrollingMenu />
      <div
        style={{
          display: "flex",
          color: "#F5F5F7",
          padding: "130px 239.5px 0px 239.5px",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          background: "black",
        }}
      >
        <h1
          style={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "42px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "52.008px",
            letterSpacing: "-0.144px",
          }}
        >
          Ex.iwatches.
        </h1>
        <h2
          style={{
            color: "#F5F5F7",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "19px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "29.001px",
            letterSpacing: "0.231px",
          }}
        >
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
            style={{ width: "961px", height: "393px", marginTop: "89px" }}
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
