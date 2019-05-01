import React from "react"
import  { Card, Button, Row, Icon,Col } from 'antd'
import './ui.less'


export default class Gallerys extends React.Component{



    render(){
        const imgs=[
            ['1.png','2.png','3.png','4.png','5.png'],
            ['6.png','7.png','8.png','9.png','10.png'],
            ['11.png','12.png','13.png','14.png','15.png'],
            ['16.png','17.png','18.png','19.png','20.png'],
            ['1.png','2.png','3.png','4.png','25.png'],
        ]
        const imgList=imgs
        return (
            <div>
                <Row>
                    <Col md={5}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                            title="Europe Street beat"
                            description="www.instagram.com"
                            />
                        </Card>
                    </Col>
                    <Col md={5}>

                    </Col>
                    <Col md={5}>

                    </Col>
                    <Col md={5}>

                    </Col>
                    <Col md={4}>

                    </Col>
                </Row>

            </div>
        )
    }
}