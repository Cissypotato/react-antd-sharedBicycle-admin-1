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
                this.renderMap(res.result)
        })
    }
    renderMap=(result)=>{
        this.map = new window.BMap.Map("order-map");
        // 创建地图实例  
        // var point = new window.BMap.Point(116.404, 39.915);
        // 创建点坐标  
        this.map.addControl(new window.BMap.NavigationControl());    
        this.map.addControl(new window.BMap.ScaleControl());    
        this.map.addControl(new window.BMap.OverviewMapControl());    
        this.map.addControl(new window.BMap.MapTypeControl());
        // map.setCurrentCity("成都")  
        this.drawTracjLine(result.position_list) 
        this.drawServiceArea(result.area)
    }
    drawTracjLine=(list)=>{
        let map=this.map
        let startPoint=''
        let endPoint=''
        let first=list[0]
        let last=list[list.length-1]
    
       startPoint = new window.BMap.Point(first.lon, first.lat)
       var startIcon = new window.BMap.Icon("assets/start_point.png", new window.BMap.Size(36, 42), {    
         
        imageSize: new window.BMap.Size(36, 42),     
        anchor: new window.BMap.Size(36, 42),    
        });       
        var startMarker = new window.BMap.Marker(startPoint, {icon: startIcon}); 
        map.addOverlay(startMarker);  
        // 起点图标

        endPoint = new window.BMap.Point(last.lon, last.lat)
        var endIcon = new window.BMap.Icon("assets/end_point.png", new window.BMap.Size(36, 42), {    
         
        imageSize: new window.BMap.Size(36, 42),     
        anchor: new window.BMap.Size(36, 42),    
        });       
        var endMarker = new window.BMap.Marker(endPoint, {icon: endIcon}); 
        map.addOverlay(endMarker);  
        //终点图标
        this.map.centerAndZoom(endPoint, 11); 

        let trackPoint=[]
        for(let i=0;i<list.length;i++){
            trackPoint.push(new window.BMap.Point(list[i].lon, list[i].lat))
        }
        var polyline = new window.BMap.Polyline(trackPoint, {strokeColor:"blue", strokeWeight:3, strokeOpacity:1});
        map.addOverlay(polyline)
    }

    drawServiceArea=(area_list)=>{
        let map=this.map
        let trackPoint=[]
        for(let i=0;i<area_list.length;i++){
            trackPoint.push(new window.BMap.Point(area_list[i].lon, area_list[i].lat))
        }
        var polygon = new window.BMap.Polygon(trackPoint,
             {strokeColor:"#ce0000", strokeWeight:4, strokeOpacity:0.8,fillColor:'#ff8605',fillOpacity:0.4});  //创建多边形
        map.addOverlay(polygon)

    }

    render(){
        
        const info=this.state.detailInfo ||{}
        return(
            <div>
                <Card bodyStyle={{display:"flex",flexDirection:"column"}}>
                    <div className="order-map"id="order-map"></div>
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