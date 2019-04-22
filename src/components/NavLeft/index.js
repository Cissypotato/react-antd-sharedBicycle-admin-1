import React from 'react'
import { Menu} from 'antd';
import './index.less'
import menuList from '../../config/menuConfig.js'
const SubMenu = Menu.SubMenu;


export default class NavLeft extends React.Component{
    componentWillMount(){
        
        let menuTreeNode=this.renderMenu(menuList)
        this.setState({menuTreeNode})
    }
    renderMenu=(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (<Menu.Item title={item.title} key={item.key}> {item.title}</Menu.Item>)
        })

    }


    render(){
        return(
            <div>
                <div className="logo">
                    <img />
                    <p>cissy bg</p>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}