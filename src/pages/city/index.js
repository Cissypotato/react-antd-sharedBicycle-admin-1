
import React from 'react'
import {Card ,Table,Modal,Button,message,pagination,Badge,Form,Select} from 'antd'
import Axios from './../../axios'
import Utils from './../../utils/utils'

const { Option } = Select;


export default class City extends React.Component{
    state={
        showOpenCity:false,
    }

    params={
        page:1
    }

    componentDidMount(){
        this.requestList()
    }
    
    
    requestList=()=>{
      let  _this=this
        Axios.ajax({
            url:'/city_open',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            this.setState({
                dataSource:res.result.item_list.map((item,index)=>{
                    item.key=index
                    return item
                }),
                pagination:Utils.pagination(res,(current)=>{
                    _this.params.page=current;
                    _this.requestList()
                })
            })
        })
    }


    handleOpenCity=()=>{
        this.setState({
            showOpenCity:true
        })
    }
    handleSubmit=()=>{

    }
    render(){

        const columns= [{
            title: '城市Id',
            dataIndex: 'id',
          },{
            title: '城市名称',
            dataIndex: 'name',
          }, {
            title: '用车模式',
            dataIndex: 'mode',
          },{
            title: '运营模式',
            dataIndex: 'op_mode',
          }, {
            title: '授权加盟商',
            dataIndex: 'franchisee'
          }, {
            title: '城市管理员',
            dataIndex: 'city_admins',
            render(arr){
                return arr.map((item)=>{
                    return item.user_name
                }).join(',')
            }
          },, {
            title: '城市开通时间',
            dataIndex: 'open_time',
          },, {
            title: '操作时间',
            dataIndex: 'update_time',
          },, {
            title: '操作人',
            dataIndex: 'sys_user_name',
          }];
        return (
            <div>
                <Card>
                    
                </Card>
                <Card>
                    <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
                </Card>
                <div>
                    <Table 
                        dataSource={this.state.dataSource} 
                        columns={columns} 
                        bordered={true}
                        pagination={this.state.pagination}
                        />
                </div>
                <Modal
                title="开通城市"
                 visible={this.state.showOpenCity}
                 onCancel={()=>{this.setState({showOpenCity:false})}}
                 onOk={this.handleSubmit}
                >
                    <OpenCityForm/>

                </Modal>
            </div>
        )
    }

}

class FilterForm extends React.Component{
    render(){
        return (
            <div>


            </div>
        )
    }
}

class OpenCityForm extends React.Component{
    render(){
        return(
            <div>
                <Form>
                        <Form.Item label="开通城市">
                            <Select>
                                <Option value="1">全部</Option>
                                <Option value="2">北京</Option>
                                <Option value="3">成都</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="运营模式">
                            <Select>
                                <Option value="1">自营</Option>
                                <Option value="3">加盟</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="用车模式">
                            <Select>
                                <Option value="1">指定停车点</Option>
                                <Option value="2">禁停区</Option>
                            </Select>
                        </Form.Item>
                    </Form>
            </div>
        )
        
    }
}

OpenCityForm = Form.create({})(OpenCityForm)