import React from 'react'
import  { Button, Card, Table, Form, message, DatePicker, Modal, Select}  from 'antd'
import Axios from './../../axios'
import Utils from './../../utils/utils'
import BaseForm from '../../components/baseForm'

const { Option } = Select;
export default class Order extends React.Component{
    state={
    }
    params={
        page:1
    }
    optionList=[
        {
            type:"SELECT",
            label:"城市",
            field:'city_id',
            // width:100,
            initialValue:"0",
            list:[{id:"0",name:'全部'},{id:"1",name:'北京'},{id:"2",name:'成都'}]

        },
        {
            type:"SELECT",
            label:"订单状态",
            field:'state',
            // width:100,
            initialValue:"1",
            list:[{id:"0",name:'全部'},{id:"1",name:'进行中'},{id:"2",name:'结束行程'}]

        },
        {
            type:"订单时间",
            label:"订单时间",
            placeholder:"选择时间"
        }

    ]
    componentDidMount(){
        this.requestList()
    }
    handleFilter=(params)=>{
        this.params=params
        this.requestList()
    }
    requestList=()=>{
        let  _this=this
        Axios.requestList(this,"order/list",this.params,true)
        // Axios.ajax({
        //     url:"order/list",
        //     data:{
        //         params:this.params
        //     }
        // }).then((res)=>{
        //     this.setState({
        //         dataSource:res.result.item_list.map((item,index)=>{
        //             item.key=index
        //             return item
        //         }),
        //         pagination:Utils.pagination(res,(current)=>{
        //             _this.params.page=current;
        //             _this.requestList()
        //         })
        //     })
        // })
    }
    handleOrderDetails=()=>{
        let item =this.state.selectedItem
        if(!item){
            Modal.info({
                title:'信息',
                content:"请先选择一条订单"
            })
        }
        window.open(`/#/common/order/detail/${item.id}`,'_blank')

    }
    handleChangeRow=(selectedRowKeys, selectedRows)=>{
        this.setState({
            selectedItem:selectedRows[0]
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
        //   const {selectedRowKeys}=this.state
        //   const rowSelection={
        //     type:"radio",
        //     selectedRowKeys

        //   }

          const rowSelection = {
            type:"radio",
            onChange: (selectedRowKeys, selectedRows) => {
                
             this.handleChangeRow(selectedRowKeys, selectedRows)
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
              console.log(this.state)
            },
            // getCheckboxProps: record => ({
            //   disabled: record.name === 'Disabled User', // Column configuration not to be checked
            //   name: record.name,
            // }),
          };
        return (
            <div>
                <Card>
                    <BaseForm optionList={this.optionList} filterSubmit={this.handleFilter}/>
                </Card>
                <Card>
                    <Button onClick={this.handleOrderDetails}>订单详情</Button>
                    <Button>删除订单</Button>
                </Card>
                <div>
                    <Table 
                        rowSelection={rowSelection}
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
                            getFieldDecorator('state',{
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
