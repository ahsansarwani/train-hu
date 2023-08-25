import "./styles.css";
function Experts() {
  return (
    <div className="gradient-experts py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="wrapper-txt-gradient">
              <h2>
                <span className="me-3"></span>专家智库
              </h2>
            </div>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end">
            <a
              className="text-decoration-none txt-success d-flex align-items-center gap-2 fs-5"
              href="/agriculture"
            >
              更多 <img src="/images/chevron-right.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-12 col-lg-4">
            <div className="expert-item d-flex gap-2  p-3 align-items-center justify-content-center">
              <div className="img-expert">
                <img src="/images/expert-img.jpg" alt="" />
              </div>
              <div className="description-expert">
                <div className="expert-title d-flex justify-content-between">
                  <h3>刘拓</h3>
                  <span>助理研究员</span>
                </div>
                <div className="expertise mt-2">
                  <ul className="list-unstyled">
                    <li>
                      <b>正文色/正文色:</b> 鱼类健康养殖
                    </li>
                    <li>
                      <b>所在机构:</b> 四川省农业科学院水产研究所
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="expert-item d-flex gap-2 p-3 align-items-center justify-content-center">
              <div className="img-expert">
                <img src="/images/expert-img.jpg" alt="" />
              </div>
              <div className="description-expert">
                <div className="expert-title d-flex justify-content-between">
                  <h3>刘拓</h3>
                  <span>助理研究员</span>
                </div>
                <div className="expertise mt-2">
                  <ul className="list-unstyled">
                    <li>
                      <b>正文色/正文色:</b> 鱼类健康养殖
                    </li>
                    <li>
                      <b>所在机构:</b> 四川省农业科学院水产研究所
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-sm-12 col-lg-4">
            <div className="expert-item d-flex gap-2 bg-white p-3 align-items-center justify-content-center">
              <div className="img-expert">
                <img src="/images/expert-img.jpg" alt="" />
              </div>
              <div className="description-expert">
                <div className="expert-title d-flex justify-content-between">
                  <h3>刘拓</h3>
                  <span>助理研究员</span>
                </div>
                <div className="expertise mt-2">
                  <ul className="list-unstyled">
                    <li>
                      <b>正文色/正文色:</b> 鱼类健康养殖
                    </li>
                    <li>
                      <b>所在机构:</b> 四川省农业科学院水产研究所
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="expert-item d-flex gap-2 bg-white p-3 align-items-center justify-content-center">
              <div className="img-expert">
                <img src="/images/expert-img.jpg" alt="" />
              </div>
              <div className="description-expert">
                <div className="expert-title d-flex justify-content-between">
                  <h3>刘拓</h3>
                  <span>助理研究员</span>
                </div>
                <div className="expertise mt-2">
                  <ul className="list-unstyled">
                    <li>
                      <b>正文色/正文色:</b> 鱼类健康养殖
                    </li>
                    <li>
                      <b>所在机构:</b> 四川省农业科学院水产研究所
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experts;
