import "./styles.css";

function Carousel() {
  return (
    <div className="carousel-wrapper">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/slide-1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fw-bold display-3">更广泛的农业知识传播</h5>
              <p className="fs-3">服务广大农民朋友</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/images/slide-1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fw-bold display-3">更广泛的农业知识传播</h5>
              <p className="fs-3">服务广大农民朋友</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/images/slide-1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fw-bold display-3">更广泛的农业知识传播</h5>
              <p className="fs-3">服务广大农民朋友</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
