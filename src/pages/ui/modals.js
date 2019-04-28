import React from "react"
import {Card ,Button,Modal} from 'antd'
import './ui.less'


export default class Modals extends React.Component{
    state={
        modal1:false,
        modal2:false,
        modal3:false,
        modal4:false,
    }
    handleModal=(type)=>{
        this.setState({
            [type]:true
        })
    }
    handleCancel=(type)=>{
        this.setState({
            [type]:false
        })
    }
    handleOk=(type)=>{
        this.setState({
            [type]:false
        })
    }
    render(){
        return(
            <div>
                <Card title="基础弹框">
                    <Button type="primary" onClick={()=>this.handleModal('modal1')}>open</Button>
                    <Button type="primary" onClick={()=>this.handleModal('modal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleModal('modal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={()=>this.handleModal('modal4')}>水平垂直居中</Button>
                </Card>
                <Modal
                    title="Hello Modal"
                    visible={this.state.modal1}
                    onOk={()=>this.handleOk('modal1')}
                    onCancel={()=>this.handleCancel('modal1')}
                    >
                    <p>opennnnnnn</p>
                </Modal>
                <Modal
                    title="自定义页脚 Modal"
                    visible={this.state.modal2}
                    onOk={()=>this.handleOk('modal2')}
                    onCancel={()=>this.handleCancel('modal2')}
                    footer={[
                        <Button key="back" onClick={()=>this.handleCancel('modal2')}>不买</Button>,
                        <Button key="submit" type="primary"  onClick={()=>this.handleOk('modal2')}>
                          买
                        </Button>,
                      ]}
                    >
                    <p>你要买橘子吗</p>
                </Modal>
                <Modal
                    title="离顶部20px Modal"
                    visible={this.state.modal3}
                    style={{ top: 20 }}
                    onOk={()=>this.handleOk('modal3')}
                    onCancel={()=>this.handleCancel('modal3')}
                    footer={[
                        <Button key="back" onClick={()=>this.handleCancel('modal3')}>不了</Button>,
                        <Button key="submit" type="primary"  onClick={()=>this.handleOk('modal3')}>
                          好
                        </Button>,
                      ]}
                    >
                    <p>要离顶部近一点吗</p>
                </Modal>
                <Modal
                    title="垂直居中 Modal"
                    visible={this.state.modal4}
                    centered
                    onOk={()=>this.handleOk('modal4')}
                    onCancel={()=>this.handleCancel('modal4')}
                    footer={[
                        <Button key="back" onClick={()=>this.handleCancel('modal4')}>不了</Button>,
                        <Button key="submit" type="primary"  onClick={()=>this.handleOk('modal4')}>
                          好
                        </Button>,
                      ]}
                    >
                    <p>垂直居中吗</p>
                </Modal>
            </div>
        )
    }
}