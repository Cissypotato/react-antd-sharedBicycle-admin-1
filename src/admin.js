import React,{Component} from 'react'
import {NavLink } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import Home from './pages/home'

import {Row} from 'antd';
import {Col} from 'antd';

import "antd/dist/antd.css";
import "./style/common.less"

class Admin extends Component{
    render(){
        return(
            <div>
                <Row className="container">
                    <Col span={4} className="nav-left">
                        <NavLeft></NavLeft>
                    </Col>
                <Col span={20} className="main">
                        <Header></Header>
                        <Row className="content">
                            {this.props.children}
                        </Row>
                        <Footer></Footer>
                    </Col>
                </Row>

            </div>
        )
        
    }
}

export default Admin