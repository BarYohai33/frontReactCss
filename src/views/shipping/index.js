// React
import React, { Component } from 'react';
import SearchBar from './component/searchBar.component';
import MiniCircle from './component/miniCircle.component';
import ButtonGo from './component/buttonGo.component';
import VerticalNav from './component/verticalNav.component';
import Style from './styles/containerShipping.style';
import Background from './img/background1.png';
var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  resizeMode: 'cover',

};

class Shipping extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return(
			<div id="container"
			style={  Style.containerShippingStyle }>
		 <section style={ sectionStyle }>
	    		</section>

			<VerticalNav
			/>



	
			<SearchBar
			/>

			<MiniCircle
			/>
			<ButtonGo
			/>
	
			</div>
		);
	}

}

export default Shipping;