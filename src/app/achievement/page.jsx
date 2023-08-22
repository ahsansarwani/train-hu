import React from "react";
import "./styles.css";
function achievement() {
  return (
    <div className="achievement-wrapper">
      <div className="header-wrapper-achievement bg-white py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-between">
              <a className="color-dark-arrow" href="#">
                <img src="/images/chevron-left.svg" alt="" />
              </a>
              <h4 className="mb-0">农科服务</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-achievement position-relative py-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-sm-6 col-lg-6">
              <h2 className="mb-0 text-white">查新</h2>
            </div>
            <div className="col-sm-6 col-lg-6">
              <img
                className="img-search ms-auto d-flex"
                src="/images/icon-img-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="list-items-wrapper bg-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <ul className="list-items list-unstyled">
                <li>
                  <span class="label">收费标准:</span> <span>230 元 / 次</span>
                </li>
                <li>
                  <span class="label">联系单位:</span>
                  <span>四川省农业科学院水产研究所</span>
                </li>
                <li>
                  <span class="label">联系人:</span> <span>陈伟</span>
                </li>
                <li>
                  <span class="label">联系电话:</span> <span>028-84504190</span>
                </li>
                <li>
                  <span class="label">电子邮箱:</span>{" "}
                  <span>qinbaoso@163.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="service-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>服务内容</h3>
              <div className="bg-white mt-3 p-3">
                <p>
                  科技查新，简称查新，是指查新机构
                  根据查新委托人提供的需要查证其新颖性
                  的科学技术内容，按照《科技查新规范》
                  (国科发计字[2000]544号)操作，经过
                  文献检索与对比分析，并作出结论。科技
                  查新是科学研究、产品开发和科技管理等
                  活动中的一项重要基础工作。 科技查新是文献检索和情报调研相结
                  合的情报研究工作，它以文献为基础，以
                  文献检索和情报调研为手段，以检出结果
                  为依据，通过综合分析，对查新项目的新
                  颖性进行情报学审查，写出有依据、有分
                  析、有对比、有结论的查新报告。也就是
                  说查新是以通过检出文献的客观事实来对
                  项目的新颖性做出结论。因此，查新有较
                  严格的年限、范围和程序规定，有查全、
                  查准的严格要求，要求给出明确的结论
                  查新结论具有客观性和鉴证性，但不是全
                  面的成果评审结论。这些都是单纯的文献
                  检索所不具备的，也有别于专家评审。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default achievement;
