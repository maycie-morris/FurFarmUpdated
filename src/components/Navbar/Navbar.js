import React, { useContext, Component } from "react";

/* import Context from "../../Context/ReactContext"; */
import catlogo from "../../images/cat.gif";

//temp
import { useWallet } from 'use-wallet'
import { Switch } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css'
//style
import "./NavbarStyle.scss";



//logo
import logophoto from "../../images/logophoto.png";

//react router dom
import { BrowserRouter as Router, Link } from "react-router-dom";
/* import MetaMaskButton from "../MetaMaskButton/MetaMaskButton"; */
//
const Navbar = (props) => {
  const { isNight, setNight } = props;
  /*  var { maskProvider, maskAccount, maskName, parent } = props; */

  /* var myContext = useContext(Context); */
  const { account, reset } = useWallet()





  return (

    <nav>
    <div class="nav-wrapper position-relative">
      
      
      <nav-links style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
        <ul>
        
          <li>
            <Link style={{color: "rgb(15, 224, 15)"}} to="/">HELLO</Link>
          </li>
          
         
        

          <li>
            <a
              style={{color: "rgb(15, 224, 15)"}}
              target="_blank"
              rel="noopener noreferrer"
              href={`https://app.uniswap.org/#/swap?outputCurrency=${process.env.REACT_APP_FUR_ADDRESS}`}
            >
              TRADE
            </a>
          </li>
          <li>
            <Link style={{color: "rgb(15, 224, 15)"}} className="stakeBTN" to="/stake">
            VAULT
            </Link>
          </li>
          <li>
            <a style={{color: "rgb(15, 224, 15)"}} className="stakeBTN" href="https://app.fur.finance">
              FARMS
            </a>
          </li>
          
          <Switch onClick={e => setNight(!isNight)} className="onoffswitch">
            <input name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" />
            <label className="onoffswitch-label" htmlFor="myonoffswitch">
              <span className="onoffswitch-inner"></span>
              <span className="onoffswitch-switch"></span>
            </label>
          </Switch>

          {/* </>
          )}
          <li>
            <MetaMaskButton />
          </li> */}
        </ul>
      </nav-links>
    </div>
    {/* <ul><label className="account-address">{account}</label></ul> */}
  </nav>
  
    

    
  );
};

export default Navbar;
