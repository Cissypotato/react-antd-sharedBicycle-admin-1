import React from "react"
import  { Card, Button, Row, Icon,Col ,Modal} from 'antd'
import './ui.less'

const { Meta } = Card;
export default class Gallerys extends React.Component{
    state={
        visible:false
    }
    openImg=(item)=>{
        this.setState({
            visible:true,
            imgSrc:'/gallery/'+item
        })
    }
    handleCancel=()=>{
        this.setState({
            visible:false
        })
    }
    render(){
        const imgs=[
            ['1.png','2.png','3.jpg','4.jpg','5.jpeg'],
            ['6.png','7.png','8.jpg','9.jpeg','10.jpeg'],
            ['11.jpeg','12.jpeg','13.jpeg','14.jpg','15.jpg'],
            ['16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'],
            ['21.jpg','22.jpg','23.jpg','24.jpg','25.jpg'],
        ]
        const imgList=imgs.map((img)=>img.map((item)=>

                    <Card style={{marginBottom:"5px"}}
                        // hoverable
                        // style={{ width: 240 }}
                        cover={<img src={"/gallery/"+item} onClick={()=>this.openImg(item)}/>}
                    >
                        <Meta
                        title="Europe Street beat"
                        description="2333"
                        />
                    </Card>
                )
        )
        console.table(imgList)
        return (
            <div>
                <Row gutter={10} style={{backgroundColor:'#f1f3f5'}}>
                    <Col md={5}>
                        {imgList[0]}
                    </Col>
                    <Col md={5}>
                        {imgList[1]}
                    </Col>
                    <Col md={5}>
                        {imgList[2]}
                    </Col>
                    <Col md={5}>
                        {imgList[3]}
                    </Col>
                    <Col md={4}>
                        {imgList[4]}
                    </Col>
                </Row>
                
                <Modal 
                    with={300}
                    footer={null}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                >
                    {<img src={this.state.imgSrc} style={{width:'100%',marginTop:'20px'}}/>}
                </Modal>
            </div>
        )
    }
}