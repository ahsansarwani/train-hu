import "./styles.css";

function Header() {
  return (
    <div className="btm-minus container-fluid py-2">
      <div className="row align-items-center">
        <div className="col-10 ps-0">
          <div className="wrapper-field d-flex position-relative">
            <input
              className="form-control rounded-5 bg-white py-2 px-3"
              type="text"
              placeholder="搜索成果/专家/需求/供给"
            />
            <button className="submit border-0 bg-transparent">搜索</button>
          </div>
        </div>
        <div className="col-2 d-flex justify-content-end">
          <div className="avatar">
            <a href="#">
              <img className="person-avatar" src="/images/person.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
