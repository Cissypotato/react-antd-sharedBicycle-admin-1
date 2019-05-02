import React from "react"
import  { Card, Carousel} from 'antd'
import './ui.less'


export default class Carousels extends React.Component{

    render(){
        return(
        <div className="uiWrap">
            <Card title="今天的主打菜" className="cardWrap">
                 <Carousel autoplay={true}>
                    <div><h3>泡椒兔</h3></div>
                    <div><h3>鲜椒鱼</h3></div>
                    <div><h3>芋儿鸡</h3></div>
                    <div><h3>干锅排骨</h3></div>
                </Carousel>
            </Card>

            <Card title="美丽风景">
                <Carousel>
                    <div><img src="/carousel-img/carousel-1.jpg" style={{width:"100%",height:"100%"}}/></div>
                    <div><img src="/carousel-img/carousel-2.jpg" style={{width:"100%"}}/></div>
                    <div><img src="/carousel-img/carousel-3.jpg" style={{width:"100%"}}/></div>
                </Carousel>
            </Card>
        </div>
        )
    }
}