import React from 'react';
import Slider from 'react-slick';

export default class CaseStudies extends React.Component {
	render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrow: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000,
      swipe: false
    };
		return (
		<section className="main">
      <div className="slider">
        <Slider {...settings}>
          <div className="case--studies-carousel">
            <img src="http://lorempixel.com/1351/547/technics/2/Dummy-Text/" />
            <div className="case--studies-carousel-content">
              <div className="case--studies-carousel-content-inner">
                <h2>Case Studies 1</h2>
                <p>Nam id porta est. In at magna ornare, facilisis orci ac, interdum eros. Phasellus lacinia libero eget sapien tincidunt, eget porta arcu congue. Proin placerat ligula quis mattis pharetra. Aliquam nec lacinia massa. Duis mattis orci vitae nunc condimentum, at convallis neque ornare. Curabitur imperdiet orci ut dapibus pulvinar. Praesent nec velit ut lorem ultrices placerat. Pellentesque feugiat mollis condimentum. Aenean cursus vitae velit sed consectetur.</p>
              </div>
            </div>
          </div>
          <div className="case--studies-carousel">
            <img src="http://lorempixel.com/1351/547/technics/3/Dummy-Text/" />
            <div className="case--studies-carousel-content">
              <div className="case--studies-carousel-content-inner">
                <h2>Case Studies 2</h2>
                <p>Nam id porta est. In at magna ornare, facilisis orci ac, interdum eros. Phasellus lacinia libero eget sapien tincidunt, eget porta arcu congue. Proin placerat ligula quis mattis pharetra. Aliquam nec lacinia massa. Duis mattis orci vitae nunc condimentum, at convallis neque ornare. Curabitur imperdiet orci ut dapibus pulvinar. Praesent nec velit ut lorem ultrices placerat. Pellentesque feugiat mollis condimentum. Aenean cursus vitae velit sed consectetur.</p>
              </div>
            </div>
          </div>
          <div className="case--studies-carousel">
            <img src="http://lorempixel.com/1351/547/technics/6/Dummy-Text/" />
            <div className="case--studies-carousel-content">
              <div className="case--studies-carousel-content-inner">
                <h2>Case Studies 3</h2>
                <p>Nam id porta est. In at magna ornare, facilisis orci ac, interdum eros. Phasellus lacinia libero eget sapien tincidunt, eget porta arcu congue. Proin placerat ligula quis mattis pharetra. Aliquam nec lacinia massa. Duis mattis orci vitae nunc condimentum, at convallis neque ornare. Curabitur imperdiet orci ut dapibus pulvinar. Praesent nec velit ut lorem ultrices placerat. Pellentesque feugiat mollis condimentum. Aenean cursus vitae velit sed consectetur.</p>
              </div>
            </div>
          </div>
          <div className="case--studies-carousel">
            <img src="http://lorempixel.com/1351/547/technics/10/Dummy-Text/" />
            <div className="case--studies-carousel-content">
              <div className="case--studies-carousel-content-inner">
                <h2>Case Studies 1</h2>
                <p>Nam id porta est. In at magna ornare, facilisis orci ac, interdum eros. Phasellus lacinia libero eget sapien tincidunt, eget porta arcu congue. Proin placerat ligula quis mattis pharetra. Aliquam nec lacinia massa. Duis mattis orci vitae nunc condimentum, at convallis neque ornare. Curabitur imperdiet orci ut dapibus pulvinar. Praesent nec velit ut lorem ultrices placerat. Pellentesque feugiat mollis condimentum. Aenean cursus vitae velit sed consectetur.</p>
              </div>
            </div>
          </div>
          
        </Slider>
      </div>
			<div className="main--inner">
        <div className="quote">
          <div className="quote--inner">
            <h2>You have a new or existing project?</h2>
            <h3>Get a free quote</h3>
          </div>
          <a href="#" className="button success">Get A Free Quote</a>
        </div>
			</div>
		</section>
		);
	}
}