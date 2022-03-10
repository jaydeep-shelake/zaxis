import { Link,useHistory} from 'react-router-dom'
import React from 'react'

const Privcy = () => {

    const history=useHistory();
    const path =history.location.pathname;


    return (
        <div className="privacy-header">
            <div className="nav-header">
                <Link to="/privacy-policy"><h1 className={`${path==='/privacy-policy'&& 'active'}`}>Privacy Policy</h1></Link>
                <Link to="/terms"><h1 className={`${path==='/terms'&& 'active'}`}>Terms of Service</h1></Link>
                <Link to="/return-policy"><h1 className={`${path==='/return-policy'&& 'active'}`}>Return Policy</h1></Link>
            </div>
        </div>
    )
}

export default Privcy
