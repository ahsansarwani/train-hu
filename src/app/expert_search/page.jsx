import "./styles.css";

function expert_search() {
  function addSpacing(input) {
    input.value = " " + input.value.trim();
  }
  return (
    <div>
      <div className="technology-wrapper">
        <div className="header-wrapper-achievement bg-white py-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-5 d-flex justify-content-between pe-0">
                <a className="color-dark-arrow" href="#">
                  <img src="/images/chevron-left.svg" alt="" />
                </a>
              </div>
              <div className="col-7 ps-0">
                <h4 className="mb-0">关键字</h4>
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
                    oninput="addSpacing(this)"
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
            <div className="col-sm-12 col-lg-4">
              <div className="expert-item d-flex gap-3 bg-white p-3 align-items-center justify-content-center">
                <div className="img-expert">
                  <img src="/images/expert-img.jpg" alt="" />
                </div>
                <div className="description-expert">
                  <div className="expert-title d-flex justify-content-between">
                    <h3>刘拓</h3>
                    <span>助理研究员</span>
                  </div>
                  <div className="expertise mt-2">
                    <ul className="list-unstyled lh-lg">
                      <li>
                        <b>正文色/正文色:</b> <span>鱼类健康养殖</span>
                      </li>
                      <li>
                        <b>所在机构:</b> <span>四川省农业科学院水产研究所</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="expert-item d-flex gap-3 bg-white p-3 align-items-center justify-content-center">
                <div className="img-expert">
                  <img src="/images/expert-img.jpg" alt="" />
                </div>
                <div className="description-expert">
                  <div className="expert-title d-flex justify-content-between">
                    <h3>刘拓</h3>
                    <span>助理研究员</span>
                  </div>
                  <div className="expertise mt-2">
                    <ul className="list-unstyled lh-lg">
                      <li>
                        <b>正文色/正文色:</b> <span>鱼类健康养殖</span>
                      </li>
                      <li>
                        <b>所在机构:</b> <span>四川省农业科学院水产研究所</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="expert-item d-flex gap-3 bg-white p-3 align-items-center justify-content-center">
                <div className="img-expert">
                  <img src="/images/expert-img.jpg" alt="" />
                </div>
                <div className="description-expert">
                  <div className="expert-title d-flex justify-content-between">
                    <h3>刘拓</h3>
                    <span>助理研究员</span>
                  </div>
                  <div className="expertise mt-2">
                    <ul className="list-unstyled lh-lg">
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
    </div>
  );
}

export default expert_search;
