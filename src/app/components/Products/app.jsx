"use client";
import Carousel from "react-elastic-carousel";
import "./styles.css";

function Product() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="wrapper-txt-gradient">
            <h2>
              <span className="me-3"></span>农品优选
            </h2>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-end">
          <a
            className="text-decoration-none txt-success d-flex align-items-center gap-2 fs-5"
            href="#"
          >
            标绿 <img src="/images/chevron-right.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="row mt-3">
        <Carousel
          itemPadding={[0, 0]}
          itemsToShow={4}
          outerSpacing={0}
          easing="cubic-bezier(1,.15,.55,1.54)"
          tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
          transitionMs={700}
        >
          <div className="product-item">
            <img src="/images/product-1.png" alt="" />
            <div className="product-item-txt">
              <h3 className="mt-3">稻花香优质大米</h3>
              <div className="price d-flex justify-content-between align-items-end">
                <h4>¥ 68.00</h4>
                <span>
                  <del>¥ 98.00</del>
                </span>
              </div>
            </div>
          </div>
          <div className="product-item">
            <img src="/images/product-1.png" alt="" />
            <div className="product-item-txt">
              <h3 className="mt-3">稻花香优质大米</h3>
              <div className="price d-flex justify-content-between align-items-end">
                <h4>¥ 68.00</h4>
                <span>
                  <del>¥ 98.00</del>
                </span>
              </div>
            </div>
          </div>
          <div className="product-item">
            <img src="/images/product-1.png" alt="" />
            <div className="product-item-txt">
              <h3 className="mt-3">稻花香优质大米</h3>
              <div className="price d-flex justify-content-between align-items-end">
                <h4>¥ 68.00</h4>
                <span>
                  <del>¥ 98.00</del>
                </span>
              </div>
            </div>
          </div>
          <div className="product-item">
            <img src="/images/product-1.png" alt="" />
            <div className="product-item-txt">
              <h3 className="mt-3">稻花香优质大米</h3>
              <div className="price d-flex justify-content-between align-items-end">
                <h4>¥ 68.00</h4>
                <span>
                  <del>¥ 98.00</del>
                </span>
              </div>
            </div>
          </div>
          <div className="product-item">
            <img src="/images/product-1.png" alt="" />
            <div className="product-item-txt">
              <h3 className="mt-3">稻花香优质大米</h3>
              <div className="price d-flex justify-content-between align-items-end">
                <h4>¥ 68.00</h4>
                <span>
                  <del>¥ 98.00</del>
                </span>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Product;
