import React from "react";
import ExLogo from "../icons/Ex-Logo";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Youtube from "../icons/Youtube";
import Twitter from "../icons/Twitter";
import Year from "../icons/Year";

function Footer(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "638px",
        display: "flex",
        background: "linear-gradient(155deg, #383638 2.06%, #0B0B0B 33.08%)",
        justifyContent: "space-evenly",
        alignItems: "center",
        boxShadow: "2px 4px 12px 0px solid red ",
        // top: "0",
        // bottom: "0",
        // flexShrink: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "392px",
          padding: "32px 24px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          color: "white",
          borderRadius: "16px",
          backgroundColor: "#17181C",
          height: "65%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <span
            style={{
              color: "#3858D6",
              fontFamily: "Inter",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: `700`,
              lineHeight: "140%" /* 14px */,
              letterSpacing: "0.4px",
              textTransform: "uppercase",
            }}
          >
            Feedback
          </span>
          <span
            style={{
              color: "rgba(255, 255, 255, 0.40)",
              fontFamily: "Inter",
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "130%" /* 36.4px */,
              letterSpacing: "-0.56px",
            }}
          >
            Seeking personalized support? Request a call from our team
          </span>
          <input
            style={{
              display: "flex",
              padding: "9px 12px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
              alignSelf: "stretch",
              width: "320px",
            }}
            type="text"
            placeholder="Your Name"
          />
          <input
            style={{
              display: "flex",
              padding: "9px 12px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
              alignSelf: "stretch",
              width: "320px",
            }}
            type="tel"
            placeholder="Phone Number"
          />
          <button style={{ width: "151px", height: "44px", margin: "0" }}>
            Send request
          </button>
          <span
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "140%" /* 14px */,
            }}
          >
            Privacy
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "704px",
          padding: "32px 24px",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          backgroundColor: "#17181C",
          borderRadius: "16px",
          color: "white",

          height: "65%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",

            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#3858D6",
                fontFamily: "Inter",
                fontSize: "10px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "140%" /* 14px */,
                letterSpacing: "0.4px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              INFO
            </span>
            <span
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "140%" /* 19.6px */,
              }}
            >
              Company
            </span>
            <span
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "140%" /* 19.6px */,
                marginBottom: "3px",
              }}
            >
              Product
            </span>
            <span
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "140%" /* 19.6px */,
                marginBottom: "3px",
              }}
            >
              Engineering
            </span>
            <span
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "140%" /* 19.6px */,
                marginBottom: "3px",
              }}
            >
              Services
            </span>
            <span
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "140%" /* 19.6px */,
                marginBottom: "3px",
              }}
            >
              Productions
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#3858D6",
                fontFamily: "Inter",
                fontSize: "10px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "140%" /* 14px */,
                letterSpacing: "0.4px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              ABOUT US
            </span>
            <span
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "140%" /* 19.6px */,
                marginBottom: "3px",
              }}
            >
              Gallery
            </span>
            <span
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "140%" /* 19.6px */,
                marginBottom: "3px",
              }}
            >
              Technologies
            </span>
            <span
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "140%" /* 19.6px */,
              }}
            >
              Contacts
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ExLogo />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#3858D6",
              fontFamily: "Inter",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "140%" /* 14px */,
              letterSpacing: "0.4px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            CONTACT US
          </span>
          <span
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "140%" /* 19.6px */,
            }}
          >
            +2069999999
          </span>
          <span
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "140%" /* 19.6px */,
              marginBottom: "3px",
            }}
          >
            help@bek.com
          </span>
          <span
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "140%" /* 19.6px */,
              marginBottom: "3px",
            }}
          >
            Seattle,WA USA
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "35%",
              cursor: "pointer",
            }}
          >
            <Facebook />
            <Instagram />
            <Youtube />
            <Twitter />
          </div>
          <div>
            <Year />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
