import React from "react";
import "./styles.css";

function achievement_info() {
  return (
    <div className="achievement_info">
      <div className="header-wrapper-achievement bg-white py-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 d-flex justify-content-between">
              <a className="color-dark-arrow" href="#">
                <img src="/images/chevron-left.svg" alt="" />
              </a>
            </div>
            <div className="col-8">
              <h4 className="mb-0">成果转化</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-achievement banner-ach position-relative py-3">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-8 pe-0">
              <div className="image-wrapper-ach d-flex gap-3 align-items-center">
                <img
                  className="person-img-ach"
                  src="/images/person.jpg"
                  alt=""
                />
                <div className="description-ach">
                  <h2 className="text-white fs-5">田晓光</h2>
                  <span className="d-flex align-items-center gap-2 verify-badge">
                    <img
                      className="verify-img"
                      src="/images/check.png"
                      alt=""
                    />
                    <b className="fs-6 text-light">认证专家</b>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <a className="plus-green-btn-wrapper text-decoration-none fs-5 d-flex gap-3 align-items-center justify-content-end">
                <div>
                  <img src="/images/plus-green.png" alt="" />
                  <span className="fs-6">关注</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-2">
        <div className="row">
          <div className="col-lg-12">
            <div className="content">
              <ul className="list-items list-unstyled">
                <li>
                  <span class="label">所在机构:</span>{" "}
                  四川省农业科学院水产研究所
                </li>
                <li>
                  <span class="label">专家职称:</span> 助理研究员
                </li>
                <li>
                  <span class="label">研究方向:</span> 鱼类健康养殖
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2>成果介绍</h2>
            <div className="bg-white mt-4 p-2">
              <p>
                研发以遥感为核心的耕地资源精准监
                测技术与系统，实现耕地资源“人-地-作
                物-时间”的精准监测，全面及时准确掌握。
                四川川及西南区耕地资源分布、种植结构
                利用强度等信息，对实施“藏粮于地”、推
                进数字农业建设、服务乡村振兴和农业高
                质量发展等具有重大战略意义。研究成果
                针对四川及西南区快速、准确获取耕地资
                源信息的迫切需求，以“数据获取-数据分
                析-数据服务”为主线，重点突破了耕地资
                源精准监测中“数据保障率低，监测精度
                差，服务体系不健全”等三大难题，成果
                整体处于国际先进，众包地面数据采集与
                标报技术、耕地利用强度精准监测技术达 到国际领先水平。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="btn-component-fixed-btm bg-white position-fixed p-3 w-100">
        <div className="container">
          <button className="btn btn-primary w-100 border-0 p-3 fs-5 fw-light">
            立即咨询
          </button>
        </div>
      </div>
    </div>
  );
}

export default achievement_info;
