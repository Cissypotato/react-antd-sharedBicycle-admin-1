import React from "react"
import {Card ,Button,notification} from 'antd'
import './ui.less'


export default class Notifications extends React.Component{

    changeNotification=(type,direction)=>{
        if(direction){
            notification[type]({
                message: '土豆做法',
                description: '狼牙土豆，锅巴土豆，土豆丝，拔丝土豆，薯条',
                placement:direction,
                onClick: () => {
                  console.log('Notification Clicked!');
                },
            })
        }else{
            notification[type]({
                message: '土豆做法',
                description: '狼牙土豆，锅巴土豆，土豆丝，拔丝土豆，薯条',
                onClick: () => {
                  console.log('Notification Clicked!');
                },
            })
        }
        
    }
    render(){
        return(
            <div className="uiWrap">
                <Card title="notification" className="cardWrap">
                    <Button type="primary" onClick={()=>this.changeNotification('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.changeNotification('error')}>error</Button>
                    <Button type="primary" onClick={()=>this.changeNotification('info')}>info</Button>
                    <Button type="primary" onClick={()=>this.changeNotification('warning')}>warning</Button>
                </Card>
                <Card title="notification 上下左右" className="cardWrap">
                    <Button type="primary" onClick={()=>this.changeNotification('success','topLeft')}>success</Button>
                    <Button type="primary" onClick={()=>this.changeNotification('error','topRight')}>error</Button>
                    <Button type="primary" onClick={()=>this.changeNotification('info','bottomLeft')}>info</Button>
                    <Button type="primary" onClick={()=>this.changeNotification('warning','bottomRight')}>warning</Button>
                </Card>
            </div>
        )
    }
}