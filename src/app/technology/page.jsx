import React from "react";
import "./styles.css";
function technology() {
  return (
    <div className="technology-wrapper">
      <div className="header-wrapper-achievement bg-white py-3">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between">
              <div class="arrow">
                <a className="color-dark-arrow" href="#">
                  <img src="/images/chevron-left.svg" alt="" />
                </a>
              </div>
              <div class="title">
                <h4 className="mb-0">成果转化</h4>
              </div>
              <div class="arrow"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-btm-thin bg-white pt-3 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="btn-custom-group btn-group  gap-5 justify-content-center d-flex">
                <button className="btn active-btn position-relative">
                  技术需求
                </button>
                <button className="btn ">技术需求</button>
                <button className="btn ">技术需求</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-bar bg-white py-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="search_field position-relative d-flex">
                <input
                  className="form-control border-0"
                  type="search"
                  id="search"
                  placeholder=""
                />
                <button type="button" class="btn">
                  <img
                    className="svg-search-icon"
                    src="/images/search-icon.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-sm-12 col-lg-6">
            <div className="expert-item d-flex gap-3 bg-white rounded-4 mb-3 p-3 align-items-center justify-content-center">
              <div className="description-expert">
                <div className="expert-title d-flex justify-content-between">
                  <h3 className="fs-5">
                    西南区农业生产遥感动态监测关键技术研发
                  </h3>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <span className="d-flex gap-2 align-items-center text-secondary">
                    <img src="/images/clock.svg" alt="" />
                    2022-05-23
                  </span>
                  <span className="d-flex gap-2 align-items-center text-secondary">
                    <img src="/images/person-circle.svg" alt="" />
                    四川农科院
                  </span>
                </div>
              </div>
              <div className="img-expert space-img">
                <img src="/images/space-img.png" alt="" />
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-6">
            <div className="expert-item d-flex gap-3 bg-white rounded-4 mb-4 p-3 align-items-center justify-content-center">
              <div className="description-expert mb-2">
                <div className="expert-title d-flex justify-content-between">
                  <h3 className="fs-5">
                    西南区农业生产遥感动态监测关键技术研发
                  </h3>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="d-flex gap-2 align-items-center text-secondary">
                    <img src="/images/clock.svg" alt="" />
                    2022-05-23
                  </span>
                  <span className="d-flex gap-2 align-items-center text-secondary">
                    <img src="/images/person-circle.svg" alt="" />
                    四川农科院
                  </span>
                </div>
              </div>
              <div className="img-expert space-img">
                <img src="/images/space-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default technology;
