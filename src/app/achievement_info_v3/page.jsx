import React from "react";
import "./styles.css";
function achievement_info_v2() {
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

      <div className="banner-achievement banner-ach-2 position-relative py-5">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-sm-6 col-lg-6">
              <p className="text-white fs-4">
                四川及西南区耕地资源遥感精准监测关键技术与应用
              </p>
              <div className="image-wrapper-ach d-flex gap-3 align-items-center">
                <img
                  className="person-img-ach"
                  src="/images/person.jpg"
                  alt=""
                />
                <div className="description-ach">
                  <h2 className="text-white fs-5">田晓光</h2>
                  <p className="text-white">2023-07-23 12:02</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-lg-12 p-0">
            <div className="content bg-white">
              <ul className="list-items list-unstyled">
                <li>
                  <span class="label">关键词:</span>{" "}
                  <span className="badge-orange-tb">中草药</span>{" "}
                  <span className="badge-orange-tb"> 生态</span>
                </li>
                <li>
                  <span class="label">投入预算:</span> <span>56.0 万元</span>
                </li>
                <li>
                  <span class="label">需求截至日期</span>{" "}
                  <span>2022-07-31 12:00</span>
                </li>
                <li>
                  <span class="label">需求类别:</span>{" "}
                  <span className="orange-span"> 中药材</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-3">交易公示</h3>
              <div className="content bg-white mt-3">
                <ul className="list-items list-unstyled">
                  <li>
                    <span class="label">关键词:</span>{" "}
                    <span className="badge-orange-tb">中草药</span>{" "}
                    <span className="badge-orange-tb"> 生态</span>
                  </li>
                  <li>
                    <span class="label">交易方</span>{" "}
                    <span>四川省农业科学院水产研究所</span>
                  </li>
                  <li>
                    <span class="label">交易金额</span> <span>51.0 万元</span>
                  </li>
                  <li>
                    <span class="label">交易详情</span>{" "}
                    <span className="orange-span"> --</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2>成果介绍</h2>
            <img className="w-100 mt-3" src="/images/slide-1.jpg" alt="" />
            <div className="bg-white mt-4 p-2 pb-5 h-10">
              <p>
                研发以遥感为核心的耕地资源精准监
                测技术与系统，实现耕地资源“人-地-作
                物-时间”的精准监测，全面及时准确掌握。
              </p>
              <p>
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
        <div className="container-fluid p-0">
          <button className="btn btn-primary w-100 border-0 p-3 fs-5 fw-light">
            立即咨询
          </button>
        </div>
      </div>
    </div>
  );
}

export default achievement_info_v2;
