import React from "react";
import { Helmet } from "react-helmet";
const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery of Hotel Ramay Palace - Ram Janmbhoomi Ayodhya</title>
        <link rel="canonical" href="https://ramaypalace.com/gallery" />
        <meta
          name="description"
          content="Images of Comfortable and Spacious Rooms of Hotel Ramay Palace near Ram Janmbhoomi Ayodhya. Visit our hotel to enjoy our amenities."
        />
      </Helmet>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Gallery</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">{/* <h2>gallery</h2> */}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img animated fadeInUp">
                <figure>
                  <img
                    src="images/Images/Gallery/hotel-ramay-palace-gallery-1.jpeg"
                    alt="spacious room"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img animated fadeInUp">
                <figure>
                  <img
                    src="images/new-images/img-1.jpeg"
                    alt="reception"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img animated fadeInUp">
                <figure>
                  <img
                    src="images/new-images/img-2.jpeg"
                    alt="bed room"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img animated fadeInUp">
                <figure>
                  <img
                    src="images/new-images/img-3.jpeg"
                    alt="hotel night view"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img animated fadeInUp">
                <figure>
                  <img
                    src="images/new-images/img-4.jpeg"
                    alt="day view"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img animated fadeInUp">
                <figure>
                  <img
                    src="images/Images/Gallery/hotel-ramay-palace-gallery-5.jpg"
                    alt="big bed room"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img animated fadeInUp">
                <figure>
                  <img
                    src="images/new-images/img-5.jpeg"
                    alt="Spacious Room"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img animated fadeInUp">
                <figure>
                  <img
                    src="images/new-images/img-7.jpeg"
                    alt="Spacious Room"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img animated fadeInUp adjust">
                <figure>
                  <img
                    src="images/new-images/img-8.jpeg"
                    alt="Entrance(Main door)"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img animated fadeInUp adjust">
                <figure>
                  <img
                    src="images/new-images/img-9.jpeg"
                    alt="bath room"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img animated fadeInUp adjust">
                <figure>
                  <img
                    src="images/new-images/img-10.jpeg"
                    alt="open area"
                  />
                </figure>
              </div>
            </div>
            {/* <div className="col-md-3 col-sm-6 ">
            <div className="gallery_img animated fadeInUp adjust">
               <figure><img src="images/Images/Gallery/WhatsApp Image 2023-04-27 at 11.01.40 (1).jpeg" alt="Spacious Room"/></figure>
            </div>
         </div> */}
            <div className="col-md-3 col-sm-6 ">
              <div className="gallery_img animated fadeInUp adjust">
                <figure>
                  <img
                    src="images/new-images/img-11.jpeg"
                    alt="Spacious Room"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 ">
              <div className="gallery_img animated fadeInUp adjust">
                <figure>
                  <img
                    src="images/new-images/img-12.jpeg"
                    alt="Spacious Room"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 ">
              <div className="gallery_img animated fadeInUp adjust">
                <figure>
                  <img
                    src="images/new-images/img-13.jpeg"
                    alt="Spacious Room"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 ">
              <div className="gallery_img animated fadeInUp adjust">
                <figure>
                  <img
                    src="images/new-images/img-14.jpeg"
                    alt="Spacious Room"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
