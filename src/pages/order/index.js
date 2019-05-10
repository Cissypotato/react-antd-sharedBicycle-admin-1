import React from 'react'
import  {Button, Card,Table,Form,message, }  from 'antd'



export default class Order extends React.Component{
    state={}
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
          },{
            title: '运营模式',
            dataIndex: 'op_mode',
            render(op_mode){
                return op_mode===1 ? "自营":"加盟"
            }
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
          }, {
            title: '行驶时常',
            dataIndex: 'total_time',
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
        return(
            <div>

            </div>
        )
    }
}


class FilterForm extends React.Component{
    render(){
        return(
            <div>

            </div>
        )
    }
}
