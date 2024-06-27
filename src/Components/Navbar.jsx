
const Navbar = ({setCategory, setCountry}) => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsArticles</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <div className="nav-link" onClick={()=>{setCategory("technology")}}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>{setCategory("business")}}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>{setCategory("health")}}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>{setCategory("science")}}>Science</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>{setCategory("sports")}}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>{setCategory("entertainment")}}>Entertainment</div>
        </li>
      </ul>

      <select className="form-select ms-auto" onChange={(e) => setCountry(e.target.value)} style={{ width: '200px' }}>
              <option value="us">United States</option>
              <option value="gb">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
              <option value="in">India</option>

            </select>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;