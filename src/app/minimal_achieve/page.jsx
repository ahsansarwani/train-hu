import React from "react";
import "./styles.css";

function minimal_achieve() {
  return (
    <div className="achievement_info">
      <div className="header-wrapper-achievement bg-white py-3">
        <div className="container-fluid">
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

      <div className="py-4">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-sm-6 col-lg-6">
              <p className="text-dark fs-5">
                乐山市农业科学研究院王贵清院长一 行到我所交流财务管理工作经验
              </p>
            </div>
            <div className="text-wrapper-banner d-flex justify-content-between">
              <span className="left">院作物所</span>
              <span className="right-date">2023-07-12</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-12 p-4">
            <p>
              2022年5月11日，乐山市农业科学研
              究院院长王贵清、计财科科长陈晓丹等一
              行5人到我所交流新形势下的财务管理工
              作经验，所党委书记杨俊品和所党委副书
              记、所长蒲宗君及相关人员11人参会。
            </p>
            <p>
              会上，蒲宗君所长就我所的基本情况
              及财务管理包括内控制度建设、财务软件
              使用情况等进行了介绍。王贵清院长表示
              在政府会计制度改革、财务信息化建设的
              大背景下，科研单位之间应该加强沟通交
              流，财务人员要与时俱进学习相关政策文
              件，不断提升自身能力，为单位领导当好 参谋助手。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default minimal_achieve;
