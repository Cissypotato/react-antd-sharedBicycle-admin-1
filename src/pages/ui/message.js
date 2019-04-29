import React from "react"
import {Card ,Button,message} from 'antd'
import './ui.less'

const success=()=>{
    message.success('土豆购买成功')
}
const error=()=>{
    message.error('土豆购买失败')
}
const info=()=>{
    message.info('亲，土豆上架了哦')
}
const warning=()=>{
    message.warning('土豆库存已不足')
}

export default class Messages extends React.Component{

    changeMessage=(type)=>{
        message[type]()
    }
    render(){
        return(
            <div className="uiWrap">
                <Card title="全局message" className="cardWrap">
                    <Button type="primary" onClick={success}>success</Button>
                    <Button type="primary" onClick={error}>error</Button>
                    <Button type="primary" onClick={info}>info</Button>
                    <Button type="primary" onClick={warning}>warning</Button>
                </Card>
            </div>
        )
    }
}