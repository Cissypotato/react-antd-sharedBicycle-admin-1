import React,{Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'

import {Row} from 'antd';
import {Col} from 'antd';

import "antd/dist/antd.css";


class Admin extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col span={4}>
                        <NavLeft></NavLeft>
                    </Col>
                    <Col span={20}>
                        <Header></Header>
                        <div>contents</div>
                        <Footer></Footer>
                    </Col>
                </Row>

            </div>
        )
        
    }
}

export default Admin