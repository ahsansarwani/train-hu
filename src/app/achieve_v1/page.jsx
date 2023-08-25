import React from "react";
import "./styles.css";
function achievement_info_v2() {
  return (
    <div className="achievement_info">
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

      <div className="banner-achievement banner-ach-2 position-relative py-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-sm-6 col-lg-6">
              <p className="text-white fs-4">
                四川及西南区耕地资源遥感精准监测关键技术与应用
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-lg-12 p-0">
            <div className="content bg-white py-3">
              <h3>基本信息</h3>
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

        <div className="row">
          <div className="col-12">
            <h2>成果介绍</h2>
            <img
              className="w-50 m-auto d-flex mt-5"
              src="/images/pamplet.jpg"
              alt=""
            />
            <div className="bg-white mt-4 p-2">
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
      <div className="container-fluid bg-grey p-0">
        <div className="row mt-3">
          <div className="col-lg-12 p-0">
            <h3 className="ms-5">联系方式</h3>
            <div className="content bg-white">
              <ul className="list-items list-unstyled ms-2 ach-lists">
                <li>
                  <span class="label">单位名称</span>{" "}
                  <span>四川省农业科学院遥感应用研究所</span>
                </li>
                <li>
                  <span class="label">单位地址</span>{" "}
                  <span>四川省成都市锦江区静居 寺路20号附102号</span>
                </li>
                <li>
                  <span class="label">联系电话</span> <span>028-61190019</span>
                </li>
                <li>
                  <span class="label">联系人</span> <span> 萧红</span>
                </li>

                <li>
                  <span class="label">电子邮箱</span>{" "}
                  <span> 1209182@gq.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default achievement_info_v2;
