import React,{Component} from 'react';
// const Header=function(props){
//     return(
//         <div style={{textAlign:'center',textTransform:'uppercase',backgroundColor:'black',color:'white',padding:20}}>
//         {props.heading}
//         </div>
//     )
    
// }

class Header extends Component{

    render(){
        return(
            <div style={{textAlign:'center',textTransform:'uppercase',backgroundColor:'black',color:'white',padding:20}}>
         {this.props.heading}
       </div>
        )
    }

}

export default Header;