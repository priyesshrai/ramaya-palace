import React from "react";
import Helmet from "react-helmet";

const Tariff = () => {
  return (
    <>
      <Helmet>
        <title>
          Room Rates for Hotel Ramay Palace - Ram Janmbhoomi Ayodhya
        </title>
        <link rel="canonical" href="https://ramaypalace.com/Prices" />
        <meta
          name="description"
          content="Affordable and Reasonable Room Tariff rate for stay in Ayodhya, near Ram Janmbhoomi. Best Hotel Rates in Ayodhya with so many facilities."
        />
      </Helmet>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Tariff</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog2 ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                {/* <h2>Standard Room</h2> */}
                {/* <p>Best tariff rooms in Ayodhya </p> */}
              </div>
            </div>
          </div>
          {/* <div className="row animated fadeInUp">
               <div className="col-md-4 listing-item">
                  <div className="blog_box">
                     <div className="blog_img">
                        <figure><img src="images/Images/Tariff/tariff1.jpeg" alt="Room 1"/></figure>
                     </div>
                     <div className="blog_room text-center">
                        <h3 className='tariffSuite'>SUITE ROOM</h3>
                        <div className='listing'>
                           <h4><span>Double</span> <br />Rs. 2259</h4>
                           <h4><span>Single</span> <br />Rs. 1930</h4>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 listing-item">
                  <div className="blog_box room">
                     <div className="blog_img">
                        <figure><img src="images/Images/Tariff/tariff2.jpeg" alt="Room 2"/></figure>
                     </div>
                     <div className="blog_room text-center">
                        <h3  className='tariffSuite'>PREMIUM ROOM</h3>
                        <div className='listing'>
                           <h4><span>Double</span> <br />Rs. 2259</h4>
                           <h4><span>Single</span> <br />Rs. 1930</h4>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 listing-item">
                  <div className="blog_box room">
                     <div className="blog_img ">
                        <figure><img src="images/Images/Tariff/tariff3.jpeg" alt="Room 3"/></figure>
                     </div>
                     <div className="blog_room text-center">
                        <h3 className='tariffSuite'>STANDARD ROOM</h3>
                        <div className='listing'>
                           <h4><span>Double</span> <br />Rs. 2259</h4>
                           <h4><span>Single</span> <br />Rs. 1930</h4>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}
          <div className="row animated fadeInUp">
            <div className="col-md-6 listing-item">
              <div className="about_img">
                <figure>
                  <img src="images/new-images/img-1.jpeg" alt="Room 3" />
                </figure>
              </div>
            </div>
            <div className="col-md-6 listing-item">
              <div className="blog_box">
                <div className="blog_room text-center titlepage ">
                  <h2 className="tariffSuite listing pt-5">Executive Room</h2>
                  <div className="listing">
                    <h3 className="pb-3">
                      Our Executive Rooms offer a perfect blend of luxury and
                      functionality, designed for both relaxation and
                      productivity. Each room features a spacious king-size bed,
                      an elegant private bathroom stocked with premium
                      toiletries, and a large flat-screen TV for your
                      entertainment. A dedicated work desk and ergonomic chair
                      provide an ideal setup for business travelers, while the
                      tasteful décor and plush furnishings create a welcoming
                      atmosphere. Enjoy complimentary Wi-Fi and other amenities
                      that cater to your every need, making your stay both
                      comfortable and productive.
                    </h3>
                    <h4 className="price">
                      <span>Rs. 5500</span>
                    </h4>
                    {/* <h4><span>Single</span> <br />Rs. 1930</h4> */}
                    {/* <h4><span>Single</span> <br />Rs. 1930</h4> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row animated fadeInUp rev">
            <div className="col-md-6 listing-item">
              <div className="blog_box">
                <div className="blog_room text-center titlepage ">
                  <h2 className="tariffSuite listing pt-5">
                    Premium Luxury Room
                  </h2>
                  <div className="listing">
                    <h3 className="pb-3">
                      Our Premium Luxury Rooms redefine elegance and comfort,
                      providing a serene retreat for discerning travelers. Each
                      room boasts a sumptuous king-size bed dressed in
                      high-quality linens, ensuring a restful night's sleep. The
                      expansive private bathroom features a soaking tub, a
                      separate rain shower, and premium toiletries to elevate
                      your experience. Enjoy a state-of-the-art flat-screen TV
                      and a cozy seating area, perfect for relaxation or
                      entertaining guests. A spacious work desk and plush chair
                      cater to your professional needs, while the chic décor and
                      ambient lighting create an inviting atmosphere. With
                      complimentary Wi-Fi and attentive service, our Premium
                      Luxury Rooms offer an unparalleled stay.
                    </h3>
                    <h4 className="price">
                      <span>Rs. 6500</span>
                    </h4>
                    {/* <h4><span>Single</span> <br />Rs. 1930</h4> */}
                    {/* <h4><span>Single</span> <br />Rs. 1930</h4> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 listing-item">
              <div className="about_img">
                <figure>
                  <img src="images/Images/Tariff/tariff1.jpeg" alt="Room 3" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tariff;
