import React,{Component} from 'react'
import {NavLink } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import {Row} from 'antd';
import {Col} from 'antd';

import "antd/dist/antd.css";
import "./style/common.less"

class Common extends Component{
    render(){
        return(
            <div>
                <Row className="common-page">
                    <Header menuType="second"/>
                </Row>
                <Row className="content">
                    {this.props.children}
                </Row>

            </div>
        )
        
    }
}

export default Common