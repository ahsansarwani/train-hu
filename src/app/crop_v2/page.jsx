import React from "react";

function crop_v2() {
  return (
    <div className="crop-layout py-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <ul className="list-unstyled d-flex align-items-end gap-5">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default crop_v2;
