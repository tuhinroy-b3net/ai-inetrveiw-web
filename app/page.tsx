import Image from "next/image";
import AboutSlider from "@/components/client/AboutSlider";
import ClientSlider from "@/components/client/ClientSlider";
import MobileSlider from "@/components/client/MobileSlider";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="main-content">

        <div className="banner-top">
          <div className="container">
            <div className="banner-text">
              <h1>Pill Identifier & Drug LIST</h1>
              <h2>Patient Care Edition</h2>
              <div className="downld">
                <h4>Available for</h4>
                <h3>Download!</h3>
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
                    Information About Thousands <br />of Branded & Generic Drugs
                    <br />
                    at Your Fingertips!
                  </h2>

                  <p>
                    Pill Identifier and Drug List – Patient Care Edition is a
                    comprehensive drug and pill information app specially designed
                    for patients and consumers. Be it Prescription or OTC,
                    information about drugs and medicines is something you will
                    always need.
                  </p>

                  <p>
                    Pill Identifier and Drug List is a utility healthcare app that
                    lets you find everything you need to know about generic and
                    branded drugs. If you are using a branded drug, you can find
                    the generic alternative for that drug or vice versa, with this
                    app.
                  </p>

                  <p>
                    The app provides genuine information about 60,000+ drugs, and
                    you can access the details about any medicine instantly.
                    Search a drug, bookmark, pull it up and use the given bar code
                    for your pharmacist to locate the medication. If you are using
                    a branded drug, you can find the generic alternative for that
                    drug or vice versa, with this app.
                  </p>
                </div>

                <AboutSlider />

                <p className="note">
                  <strong>***</strong> Please note that the information about
                  pills and drugs in this app applies to the
                  <span>U.S.</span> only.
                </p>
              </div>
            </div>
          </div>
        </section>


        <MobileSlider />

        <section className="news">
          <div className="container">
            <h3>Featured On</h3>

            <div className="row">
              <div className="col">
                <img src="images/news-1.png" alt="" className="img-fluid" />
              </div>
              <div className="col">
                <img src="images/health-care-drive.png" alt="" className="img-fluid" />
              </div>
              <div className="col">
                <img src="images/news-3.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

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

        <section id="fn_features">
          <div className="container">
            <div className="upper-text">
              <h2>What Our Users Are Saying</h2>
            </div>

            <ClientSlider />
          </div>
        </section>

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
    </div>
  );
}
