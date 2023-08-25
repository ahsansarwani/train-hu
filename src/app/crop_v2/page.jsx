import React from "react";
import "./styles.css";
function crop_v2() {
  return (
    <div className="crop-layout py-3">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-5">
            <ul className="icons_head list-unstyled d-flex align-items-end gap-5 ps-3">
              <li>
                <span>
                  <img src="/images/clock.svg" alt="" /> 2022-05-23
                </span>
              </li>
              <li>
                <span>
                  <img src="/images/person-circle.svg" alt="" /> 四川农科院
                </span>
              </li>
              <li>
                <p className="text-dark">农业转基因生物</p>
                <span className="d-block">
                  <img src="/images/play-btn.svg" alt="" /> 615次播放
                </span>
              </li>
            </ul>
            <div className="banner-img">
              <img className="w-100" src="/images/banner-image.png" alt="" />
            </div>
            <div className="mt-5 mx-4 d-flex gap-5">
              <div className="w-45">
                <div className="product-item">
                  <img className="w-100" src="/images/product-1.png" alt="" />
                  <div className="product-item-txt">
                    <h3 className="mt-3">稻花香优质大米</h3>
                    <div className="price d-flex justify-content-between align-items-end">
                      <h4>¥ 68.00</h4>
                      <span>
                        <del>¥ 98.00</del>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-55">
                <div className="post-item">
                  <img
                    className="post-img w-100 post-img-search"
                    src="/images/post-1.png"
                    alt=""
                  />
                  <div className="post-description p-3 bg-white">
                    <h3>柑橘田间管理</h3>
                    <span className="d-flex gap-2 text-secondary">
                      <img src="/images/play-btn.svg" alt="" />
                      65次播放
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 mx-4">
              <div className="card-item px-3 py-5">
                <div className="wrapper-card-description">
                  <h3>香菇智能化生产技术研究及品种选育</h3>
                  <p>
                    香菇菌棒生产数字化技术，研究香菇设施化栽培环境参数的
                    监控系统
                  </p>
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
              </div>
              <div className="card-item px-3 py-5">
                <div className="wrapper-card-description">
                  <h3>香菇智能化生产技术研究及品种选育</h3>
                  <p>
                    香菇菌棒生产数字化技术，研究香菇设施化栽培环境参数的
                    监控系统
                  </p>
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
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-7">
            <div className="search-bar py-3">
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
              <img className="w-100 pe-3" src="/images/fade.png" alt="" />
              <img className="w-100 ps-3 mt-4" src="/images/green.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default crop_v2;
