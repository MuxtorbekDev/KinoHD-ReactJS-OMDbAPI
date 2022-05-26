import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const TopMovies = () => {
  const [kino, setKino] = React.useState([]);

  React.useEffect(() => {
    fetch("https://imdb-api.com/en/API/Top250Movies/k_a3kolt4h")
      .then((response) => response.json())
      .then((data) => setKino(data.items.slice(0, 20)))
      .catch((error) => console.log(error));
  }, []);

  // let kinoItems = kino.;
  console.log(kino);

  return (
    <div id="topMovies">
      <div className="container">
        <div className="text">
          <h3>Top 20 Movies</h3>
        </div>
        <div className="swiper">
          <Swiper
            slidesPerView={6}
            spaceBetween={10}
            slidesPerGroup={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper topMovie"
          >
            {kino.map((k) => {
              return (
                <SwiperSlide>
                  <Link>
                    <div className="slide">
                      <img src={k.image} />
                      <b className="top">{k.rank}</b>
                      <div className="slide-text">
                        <h4>{k.title}</h4>
                        <button>More...</button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopMovies;
