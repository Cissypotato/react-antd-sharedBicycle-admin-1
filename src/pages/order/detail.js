import React from 'react'
import  {  Card}  from 'antd'
import Axios from './../../axios'
import './detail.less'
export default class OrderDetail extends React.Component{
    state={}
    componentDidMount(){
        const orderId=this.props.match.params.orderId
        console.log(orderId)
        this.requestDetails(orderId)
    }
    requestDetails=(orderId)=>{
        Axios.ajax({
            url:"order/detail",
            data:{
                params:{
                    orderId:orderId
                }
            }
        }).then((res)=>{
                this.setState({
                    detailInfo:res.result
                })
        })
    }
    render(){
        const info=this.state.detailInfo ||{}
        return(
            <div>
                <Card bodyStyle={{display:"flex",flexDirection:"column"}}>
                    <div className="order-map"></div>
                    <div className="detail-items">
                        <div className="item-title">基础信息</div>
                        <ul className="detail-form">
                            <li>
                                <div className="detail-form-left">用车模式</div>
                                <div className="detail-form-content">{info.mode===1?"服务区":"停车点"}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">订单编号</div>
                                <div className="detail-form-content">{info.order_sn}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">车辆编号</div>
                                <div className="detail-form-content">{info.bike_sn}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">用户姓名</div>
                                <div className="detail-form-content">{info.user_name}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">手机号码</div>
                                <div className="detail-form-content">{info.mobile}</div>
                            </li>
                        </ul>
                    </div>
                    <div className="detail-items">
                        <div className="item-title">行驶轨迹</div>
                        <ul className="detail-form">
                            <li>
                                <div className="detail-form-left">行程起点</div>
                                <div className="detail-form-content">{info.start_time}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">行程终点</div>
                                <div className="detail-form-content">{info.end_time}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">行驶里程</div>
                                <div className="detail-form-content">{info.total_time}</div>
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>
        )
    }

}