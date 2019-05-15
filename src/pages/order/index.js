import React from 'react'
import  {Button, Card,Table,Form,message,DatePicker,Select }  from 'antd'
import Axios from './../../axios'
import Utils from './../../utils/utils'

const { Option } = Select;
export default class Order extends React.Component{
    state={}
    params={
        page:1
    }
    componentDidMount(){
        this.requestList()
    }
    requestList=()=>{
        let  _this=this
        Axios.ajax({
            url:"order/list",
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
    render(){
        const columns=[{
            title: '订单编号',
            dataIndex: 'order_sn',
          },{
            title: '车辆编号',
            dataIndex: 'bike_sn',
          }, {
            title: '用户名',
            dataIndex: 'user_name'
          }, {
            title: '手机号',
            dataIndex: 'mobile'
          }, {
            title: '里程',
            dataIndex: 'distance'
          }, {
            title: '行驶时长',
            dataIndex: 'total_time'
          },{
            title: '状态',
            dataIndex: 'status'
          }, {
            title: '开始时间',
            dataIndex: 'start_time',
          },{
            title: '结束时间',
            dataIndex: 'end_time'
          },{
            title: '订单金额',
            dataIndex: 'total_fee'
          },{
            title: '实付金额',
            dataIndex: 'user_pay'
          },];
        return (
            <div>
                <Card>
                    <FilterForm/>
                </Card>
                <Card>
                    <Button>订单详情</Button>
                    <Button>删除订单</Button>
                </Card>
                <div>
                    <Table 
                        dataSource={this.state.dataSource} 
                        columns={columns} 
                        bordered={true}
                        pagination={this.state.pagination}
                        />
                </div>
            </div>
        )
    }
}


class FilterForm extends React.Component{
    render(){
    const { getFieldDecorator }=this.props.form
        return(
            <div>
                
                <Form layout="inline">
                    <Form.Item label="城市">
                        {
                            getFieldDecorator('city_id',{
                                initialValue:'0'
                            })(<Select style={{width:100}}>
                                <Option value="0">全部</Option>
                                <Option value="1">北京</Option>
                                <Option value="2">成都</Option>
                            </Select>)
                        }
                        
                    </Form.Item>
                    <Form.Item label="订单时间">
                     {getFieldDecorator('start-time')(<DatePicker style={{marginRight:10}}/>)}
                     {getFieldDecorator('end-time')(<DatePicker />)}
                    </Form.Item>
                    <Form.Item label="订单状态">
                        {
                            getFieldDecorator('city_id',{
                                initialValue:'0'
                            })(<Select style={{width:100}}>
                                <Option value="0">全部</Option>
                                <Option value="1">进行中</Option>
                                <Option value="2">结束行程</Option>
                            </Select>)
                        }
                        
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary"style={{marginRight:20}}>查询</Button>
                        <Button >重置</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
FilterForm = Form.create({})(FilterForm)

// class FilterForm extends React.Component{
//     render(){
//         return(
//             <div>

//             </div>
//         )
//     }
// }
