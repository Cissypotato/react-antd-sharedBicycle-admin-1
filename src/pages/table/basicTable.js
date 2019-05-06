import React from 'react'
import {Card ,Table,Modal,Button,message,pagination} from 'antd'
import Axios from './../../axios'
import Utils from './../../utils/utils'




export default class BasicTable extends React.Component{

  state={
    dataSource1:[],
    dataSource2:[],
    seletedItem:{},
    selectedRowKeys:[]
  }
params={
  page:1
}
  componentDidMount(){
    const dataSource = [{
      id: '0',
      name: 'zyl',
      gender:1,
      state:'4',
      hobbies:2,
      birthday: '1988-4-16',
      address: '西湖区湖底公园1号'
    }, 
    {
      id: '1',
      name: 'lyx',
      gender:1,
      state:3,
      hobbies:2,
      birthday: 32,
      address: '西湖区湖底公园1号'
    }]
    dataSource.map((item,index)=>{
      item.key=index
    })
    this.setState({
      dataSource1:dataSource
    })
    this.request()

  }

  request=()=>{
    let _this=this
    Axios.ajax({
      url:'/table/list',
      data:{
        params:{
          page:_this.params.page
        }
      }
    }).then((res)=>{
      res.result.list.map((item,index)=>{
        item.key=index
      })
      this.setState({
        dataSource2:res.result.list,
        selectedRowKeys:[],
        selectedRows:null,
        pagination:Utils.pagination(res,(current)=>{
            _this.params.page=current
            this.request()
        })
      })
    })
    
  }

  onClickRow=(record,index)=>{
    let rowkeys=[index]
    this.setState({
      seletedItem:record,
      selectedRowKeys:rowkeys
    })

    Modal.info({
      title:'提示信息',
      content:`您选择了：${this.state.seletedItem.name}`
    })
  }

  clearCheckbox=()=>{
    let ids=this.state.selectedRowKeys
    Modal.info({
      title:'取消选择',
      content:`您即将取消${ids.join(',')}项`,
      onOk:()=>{
        message.success(
          "取消成功"
        )
        this.request()
      }

    })
  }

    render(){
        
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
            render(gender){
              return gender===1 ?'男':'女'
            }
          }, {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
            render(state){
              let config={
                1:'咸鱼一条',
                2:'应届小白',
                3:'多年油条',
                4:'资深大神'
              }
              return config[state]
            }
          }, {
            title: '爱好',
            dataIndex: 'hobbies',
            key: 'hobbies',
            render(hobbies){
              let config={
                1:'看书',
                2:'烹饪',
                3:'麦霸',
                4:'蓝球',
                5:'画画',
                6:'吉他',
                7:'游戏',
                8:'桌球'
              }
              return config[hobbies]
            }
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

          const {selectedRowKeys}=this.state
          const rowSelection={
            type:"radio",
            selectedRowKeys

          }
          const checkboxRowSelection={
            type:'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys, selectedRows)=>{
              this.setState({
                selectedRowKeys
              })


            }
          }
        return(
            <div style={{background:"#f1f3f5"}}>
                <Card title="基础表格">
                    <Table dataSource={this.state.dataSource1} columns={columns} bordered={true} pagination={false}/>
                </Card>
                <Card title="动态表格" style={{marginTop:'10px'}}>
                    <Table dataSource={this.state.dataSource2} columns={columns} bordered={true} pagination={false}/>
                </Card>
                <Card title="表格-radio" style={{marginTop:'10px'}}>
                    <Table 
                    rowSelection={rowSelection}
                    onRow={(record,index) => {
                      return {
                        onClick: () => {
                          this.onClickRow(record,index)             
                        },       // 点击行
                        
                      };
                    }}
                    dataSource={this.state.dataSource2} 
                    columns={columns} 
                    bordered={true}
                    pagination={false}
                    />
                </Card>
                <Card title="表格-checkbox" style={{marginTop:'10px'}}>
                    <Button onClick={this.clearCheckbox}> 清除</Button>
                    <Table 
                    rowSelection={checkboxRowSelection}
                    dataSource={this.state.dataSource2} 
                    columns={columns} 
                    bordered={true}
                    pagination={false}
                    />
                </Card>
                <Card title="表格-pagination" style={{marginTop:'10px'}}>
                    <Table 
                    dataSource={this.state.dataSource2} columns={columns} bordered={true} pagination={this.state.pagination}/>
                </Card>
            </div>
        )
    }
}