import React from "react"
import {Card ,Alert,Spin,Icon} from 'antd'
import './ui.less'

const Iconi=<Icon type="loading" />

export default class Loadings extends React.Component{

   
    
    

    render(){
        return(
            <div className="uiWrap">
                <Card title="简单spin" className="cardWrap">
                    <Spin size="small" />
                    <Spin style={{margin:'0px 10px'}}/>
                    <Spin size="large" />
                </Card> 
                <Card title="内容遮罩" className="cardWrap">
                    <Spin tip="Loading...">
                        <Alert
                        message="土豆警告"
                        description="你真的不买土豆吗."
                        type="info"
                        />
                    </Spin>
                    <Spin tip="加载中..." indicator={Iconi}>
                        <Alert
                        message="土豆警告"
                        description="你真的不买土豆吗."
                        type="info"
                        />
                    </Spin>
                </Card> 
            </div>
        )
    }
}