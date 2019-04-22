import React from 'react'
import utils from '../../utils/utils'
import './index.less'
import {Row,Col} from 'antd'

export default class Header extends React.Component{
    state={}
    componentWillMount(){
        setInterval(()=>{
            let sysTime=utils.formatDate(new Date().getTime())
            this.setState({
                sysTime
            })
        },1000)
    }
    render(){
        return(
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>hello,cissy</span>
                        <a hre="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">首页</Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}