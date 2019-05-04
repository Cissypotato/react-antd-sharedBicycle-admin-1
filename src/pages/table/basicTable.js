import React from 'react'
import {Card ,Table} from 'antd'
import Axios from './../../axios'
export default class BasicTable extends React.Component{

  state={
    dataSource2:[]
  }

  componentDidMount(){
    this.request()

  }
  request(){
    Axios.ajax({
      url:'/table/list'
    }).then((res)=>{
      this.setState({
        dataSource2:res.result
      })
    })
    
  }

    render(){
        const dataSource = [{
            id: '0',
            name: 'zyl',
            gender:'男',
            state:'未婚',
            hobbies:'233',
            birthday: '1988-4-16',
            address: '西湖区湖底公园1号'
          }, 
          {
            id: '1',
            name: 'lyx',
            gender:'男',
            state:'未婚',
            hobbies:'233',
            birthday: 32,
            address: '西湖区湖底公园1号'
          }, 
          
        ]
        const columns = [{
            title: 'id',
            dataIndex: 'id',
            key: 'id',
          },{
            title: '用户名',
            dataIndex: 'name',
            key: 'name',
          }, {
            title: '性别',
            dataIndex: 'gender',
            key: 'gender',
          }, {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
          }, {
            title: '爱好',
            dataIndex: 'hobbies',
            key: 'hobbies',
          },, {
            title: '生日',
            dataIndex: 'birthday',
            key: 'birthday',
          },, {
            title: '地址',
            dataIndex: 'address',
            key: 'address',
          },, {
            title: '早起时间',
            dataIndex: 'getup',
            key: 'getup',
          },];
        return(
            <div style={{background:"#f1f3f5"}}>
                <Card title="基础表格">
                    <Table dataSource={dataSource} columns={columns} bordered={true}/>
                </Card>
                <Card title="动态表格" style={{marginTop:'10px'}}>
                    <Table dataSource={this.state.dataSource2} columns={columns} bordered={true}/>
                </Card>
            </div>
        )
    }
}