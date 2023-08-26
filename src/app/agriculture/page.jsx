import React from "react";
import "./styles.css";
function agriculture() {
  return (
    <div className="agriculture">
      <div className="btm-min">
        <div className="container-fluid py-2">
          <div className="row">
            <div className="d-flex align-items-center justify-content-between">
              <div class="arrow">
                <div className="agriculture-wrapper">
                  <img src="/images/chevron-left.svg" alt="" />
                </div>
              </div>
              <div class="title">
                <h2 className="text-white mb-0">农科服务</h2>
              </div>
              <div class="arrow"></div>
            </div>
          </div>
        </div>
      </div>
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
                src="/images/banner-image.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-md-block">
                <h5 className="fw-bold display-3">技术服务</h5>
                <p className="fs-3">聚焦农业技术支持提高服务核心竞争力</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/banner-image.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-md-block">
                <h5 className="fw-bold display-3">更广泛的农业知识传播</h5>
                <p className="fs-3">服务广大农民朋友</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/banner-image.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-md-block">
                <h5 className="fw-bold display-3">更广泛的农业知识传播</h5>
                <p className="fs-3">服务广大农民朋友</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-4 d-flex justify-content-center">
            <div className="iconbox-cs text-center d-inline-flex flex-column gap-3">
              <div className="iconbox-img">
                <img src="/images/icon-img-1.png" alt="" />
              </div>
              <h4>查新</h4>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <div className="iconbox-cs text-center d-inline-flex flex-column gap-3">
              <div className="iconbox-img">
                <img src="/images/icon-img-2.png" alt="" />
              </div>
              <h4>咨询</h4>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <div className="iconbox-cs text-center d-inline-flex flex-column gap-3">
              <div className="iconbox-img">
                <img src="/images/icon-img-3.png" alt="" />
              </div>
              <h4>规划</h4>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-4 d-flex justify-content-center">
            <div className="iconbox-cs text-center d-inline-flex flex-column gap-3">
              <div className="iconbox-img">
                <img src="/images/icon-img-4.png" alt="" />
              </div>
              <h4>检测</h4>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <div className="iconbox-cs text-center d-inline-flex flex-column gap-3">
              <div className="iconbox-img">
                <img src="/images/icon-img-5.png" alt="" />
              </div>
              <h4>加工</h4>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <div className="iconbox-cs text-center d-inline-flex flex-column gap-3">
              <div className="iconbox-img">
                <img src="/images/icon-img-6.png" alt="" />
              </div>
              <h4>其他服务</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default agriculture;
