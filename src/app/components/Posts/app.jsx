import "./styles.css";

function Posts() {
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="wrapper-txt-gradient">
            <h2>
              <span className="me-3"></span>科技微视
            </h2>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-end">
          <a
            className="text-decoration-none txt-success d-flex align-items-center gap-2 fs-5"
            href="#"
          >
            更多 <img src="/images/chevron-right.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="row mt-3">
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
  );
}

export default Posts;
