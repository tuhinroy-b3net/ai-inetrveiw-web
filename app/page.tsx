import Image from "next/image";
import AboutSlider from "@/components/client/AboutSlider";
import ClientSlider from "@/components/client/ClientSlider";
import MobileSlider from "@/components/client/MobileSlider";
import Link from "next/link";
export default function Home() {
  return (
    <div className="main-content">
      <div className="banner-top">
        <div className="container">
          <div className="banner-text">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
              <img src="/images/Ai.png"  className="h-28 w-36"/>
              <h1>INTERVIEW COPILOT</h1>
              </div>
              <div className="flex flex-col">
              <h4 className="m-0">Available for</h4>
              <h3 className="m-0">Download!</h3>
              </div>
              <div className="play-store flex">
                <a className="up-down-hover" href="https://itunes.apple.com/us/app/pill-identifier-and-drug-list/id1106829188?mt=8"><img src="/images/play-store.png" alt="playstore" /></a>
                <a className="up-down-hover" href="https://play.google.com/store/apps/details?id=com.PillIdentifierandDrugList.app"><img src="/images/play-store-1.png" alt="Appstore" /></a>
              </div>
            </div>
          </div>  
        </div>
      </div>

      <section id="quote">
        <div className="container">
          <div className="flex">
            <div data-aos="fade-up" data-aos-duration="2000" className="">
              <img
                className="mob_port img-fluid"
                src="images/iphone.png"
                alt="Mobile App Screenshot"
              />
            </div>

            <div className="col-lg-7  ps-sm-5">
              <div data-aos="fade-down" data-aos-duration="3000" className="subtext_box">
                <h2>
                  AI Interview Copilot <br />Your Smart Partner for Confident Interviews
                  <br />

                </h2>

                <p>
                  Step into every interview with clarity, confidence, and a real advantage. AI Interview Copilot is designed to support you before and during interviews with intelligent, real-time guidance tailored to your role, industry, and experience level. From practicing common questions to receiving structured prompts during live conversations, the app helps you think faster, respond better, and present yourself with impact—without sounding robotic or rehearsed.
                </p>

                <p>
                  Whether you're a fresher preparing for your first opportunity or a professional aiming for your next big move, this app adapts to your needs. It analyzes your responses, refines your communication, and helps you highlight your strengths in the most effective way. With AI-powered insights and a user-friendly experience, you’re not just preparing for interviews—you’re mastering them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <MobileSlider />

      <section className="scanner-section-1">
        <div className="container">
          <div className="scanner-section">
            <div className="bg-half pe-lg-3 pe-0 mb-4 mb-lg-0">
              <div className="scanner-text">
                <div className="inpart inpact-text">
                  <div className="iconbox">
                    <a className="up-down-hover" href="https://play.google.com/store/apps/details?id=com.PillIdentifierandDrugList.app"><img src="images/scanner-1.png" alt="" /></a>
                  </div>
                  <div className="textbox">
                    <img src="images/playstore-icon.png" alt="" />
                    <div className="text-box-content">
                      <h4><a href="https://play.google.com/store/apps/details?id=com.PillIdentifierandDrugList.app">To Download This Android App</a></h4>
                      <p>1. Fire up QR Code Reader on your mobile device</p>
                      <p>2. Point your QR Code scanner on the QR Code</p>
                      <p>3. SCAN NOW and download the app</p>
                      <p>4. Enjoy this FREE APP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-half">
              <div className="scanner-text">
                <div className="inpart inpact-text">
                  <div className="iconbox">
                    <a className="up-down-hover" href="https://itunes.apple.com/us/app/pill-identifier-and-drug-list/id1106829188?mt=8"><img src="images/scanner-2.png" alt="" /></a>
                  </div>
                  <div className="textbox">
                    <img src="images/itunes-icon.png" alt="" />
                    <div className="text-box-content">
                      <h4><a href="https://itunes.apple.com/us/app/pill-identifier-and-drug-list/id1106829188?mt=8">To Download This iTunes App</a></h4>
                      <p>1. Fire up QR Code Reader on your mobile device</p>
                      <p>2. Point your QR Code scanner on the QR Code</p>
                      <p>3. SCAN NOW and download the app</p>
                      <p>4. Enjoy this FREE APP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="fn_features">
        <div className="container">
          <div className="upper-text">
            <h2>What Our Users Are Saying</h2>
          </div>

          <ClientSlider />
        </div>
      </section> */}

      <section className="bottom">
        <div className="container">
          <div className="bottom-text">
            <div className="left-text">
              <p>info (at) mobixed (dot) com | All rights reserved</p>
              <p>Website Development by <a href="https://www.b3net.com/" className="text-white bnet">B3NET</a></p>
            </div>
            <div className="right-text mt-3 mt-md-0">
              <p><Link href="/privacypolicy">Privacy Policy</Link> | <Link href="/terms">Terms and condition</Link></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
