import { Link } from 'react-router-dom';
// import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome';

function Footer() {
    return(
        <footer className="footer bg-dark">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-lg-4 mt-5 text-warning" style={{borderRadius:"10px"}}>
                        <ul style={{listStyle:"none"}}>
                            <li> <h3>Services</h3></li>
                            <li><Link className="dropdown-item text-white">E-catalogue</Link></li>
                            <li><Link className="dropdown-item text-white">Business</Link></li>
                            <li><Link className="dropdown-item text-white">Hosting</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-lg-4 mt-5 text-warning" style={{borderRadius:"10px"}}>
                        <ul style={{listStyle:"none"}}>
                            <li><h3>About</h3></li>
                            <li><Link className="dropdown-item text-white" to="/sellerLogin">Company</Link></li>
                            <li><Link className="dropdown-item text-white" to="/sellerLogin">Team</Link></li>
                            <li><Link className="dropdown-item text-white" to="/sellerLogin">Legacy </Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-lg-4 mt-5 text-warning" style={{borderRadius:"10px"}}>
                        <ul style={{listStyle:"none"}}>
                            <li><h3>Careers</h3></li>
                            <li><Link className="dropdown-item text-white" to="/sellerLogin">Job openings</Link></li>
                            <li><Link className="dropdown-item text-white" to="/sellerLogin">Employee success</Link></li>
                            <li><Link className="dropdown-item text-white" to="/sellerLogin">Benifits</Link></li>
                        </ul>
                    </div>
                    <div className='row justify-content-center'>
                        <div className="col-lg-3 text-white">
                            {/* <Link><FontAwesomeIcon  icon="fa-brands fa-twitter"/></Link>
                            <Link><FontAwesomeIcon  icon="fa-solid fa-coffee"/></Link>
                            <Link><FontAwesomeIcon  icon="fa-solid fa-coffee"/></Link>
                            <Link><FontAwesomeIcon  icon="fa-solid fa-coffee"/></Link> */}
                            <p className="copyright">Pilla Amazon © 2022</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer