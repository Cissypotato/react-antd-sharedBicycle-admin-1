import React from "react"
import {Card ,Button,Radio,Icon} from 'antd'
import './ui.less'
const RadioGroup = Radio.Group;

export default class Buttons extends React.Component{
    state={
        size:'default',
        loading:true
    }
    handleCloseLoading=()=>{
        this.setState({
            loading:false
        })
    }
    handleChangeSize=(e)=>{
        this.setState({
            size:e.target.value
        })
    }

    render(){
        return(
            <div className="buttons uiWrap">
                <Card title="一般按钮" className="cardWrap">
                    <Button type="primary">potato</Button>
                    <Button>potato</Button>
                    <Button type="dashed">potato</Button>
                    <Button type="danger">potato</Button>
                </Card>
                <Card title="图形按钮" className="cardWrap">
                    <Button type="primary" shape="circle" icon="search"></Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button icon="search">search</Button>
                    <Button type="dashed"icon="search"></Button>
                    <Button type="dashed"icon="download">下载</Button>
                </Card>
                <Card title="loading 按钮" className="cardWrap">
                    <Button type="primary" loading={this.state.loading}>loading</Button>
                    <Button  size="small" loading={this.state.loading}>loading</Button>
                    <Button type="circle" loading={this.state.loading}></Button>
                    <Button type="dashed" loading={this.state.loading}>loading</Button>
                    <Button type="dashed"onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组" className="cardWrap">
                    <Button.Group >
                        <Button type="primary" style={{marginRight:0}}>
                            <Icon type="left" />Backward
                        </Button>
                        <Button type="primary">
                            Forward<Icon type="right" />
                        </Button>
                    </Button.Group>
                </Card>
                <Card title="改变按钮大小" className="cardWrap">
                    <RadioGroup name="radiogroup" onChange={this.handleChangeSize} value={this.state.size}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </RadioGroup>
                    <Button type="primary" size={this.state.size}>potato</Button>
                    <Button size={this.state.size}>potato</Button>
                    <Button type="dashed"size={this.state.size}>potato</Button>
                    <Button type="danger"size={this.state.size}>potato</Button>
                </Card>
            </div>
        )
    }
}