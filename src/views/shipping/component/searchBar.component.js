// React
import React from 'react';
// Style
import Style from '../styles/searchBar.style';

export const searchBar = props => (
	<input 
	style={Style.searchBarStyle}
	type="text" 
	placeholder='Cherchez ce que vous voulez'
	/>
	);
export default searchBar;