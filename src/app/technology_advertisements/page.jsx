import "./styles.css";

function technology_advertisements() {
  return (
    <div className="technology-wrapper">
      <div className="header-wrapper-achievement bg-white py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-between">
              <a className="color-dark-arrow" href="#">
                <img src="/images/chevron-left.svg" alt="" />
              </a>
              <h4 className="mb-0">成果转化</h4>
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

      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="post-item">
              <img className="post-img w-100" src="/images/post-1.png" alt="" />
              <div className="post-description p-3 bg-white">
                <h3>柑橘田间管理</h3>
                <span className="d-flex gap-2 text-secondary">
                  <img src="/images/play-btn.svg" alt="" />
                  65次播放
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="post-item">
              <img className="post-img w-100" src="/images/post-2.png" alt="" />
              <div className="post-description p-3 bg-white">
                <h3>柑橘田间管理</h3>
                <span className="d-flex gap-2 text-secondary">
                  <img src="/images/play-btn.svg" alt="" />
                  65次播放
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="post-item">
              <img className="post-img w-100" src="/images/post-3.png" alt="" />
              <div className="post-description p-3 bg-white">
                <h3>柑橘田间管理</h3>
                <span className="d-flex gap-2 text-secondary">
                  <img src="/images/play-btn.svg" alt="" />
                  65次播放
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="post-item">
              <img className="post-img w-100" src="/images/post-4.png" alt="" />
              <div className="post-description p-3 bg-white">
                <h3>柑橘田间管理</h3>
                <span className="d-flex gap-2 text-secondary">
                  <img src="/images/play-btn.svg" alt="" />
                  65次播放
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="post-item">
              <img className="post-img w-100" src="/images/post-5.png" alt="" />
              <div className="post-description p-3 bg-white">
                <h3>柑橘田间管理</h3>
                <span className="d-flex gap-2 text-secondary">
                  <img src="/images/play-btn.svg" alt="" />
                  65次播放
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="post-item">
              <img className="post-img w-100" src="/images/post-6.png" alt="" />
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
      </div>
    </div>
  );
}

export default technology_advertisements;
