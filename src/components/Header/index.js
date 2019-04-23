import React from 'react'
import utils from '../../utils/utils'
import Axios from '../../axios/index'
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
        this.getWeather()
    }
    getWeather(){
        let city="北京"
        Axios.jsonp({url:'http://api.map.baidu.com/telematics/v3/weather?location=北京&output=json&ak=2a5UOWOm7lPcqaewMUErpZELpGoGRBRg'})
             .then((response)=>{
                 console.log(response)
                //  this.setState({
                //      city:response.currentCity,

                //  })
             }).catch(err => {
                console.log(err) // 这里catch到错误timeout
              })

    }
    render(){
        return(
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>hello,cissy</span>
                        <a href="#">退出</a>
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