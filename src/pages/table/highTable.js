import React from 'react'
import {Card ,Table,Modal,Button,message,pagination,Badge} from 'antd'
import Axios from './../../axios'
import Utils from './../../utils/utils'




export default class HighTable extends React.Component{
    state={
        dataSource2:[],
      }
    params={
      page:1
    }
    componentDidMount(){
        this.request()
    }
    request=()=>{
        let _this=this
        Axios.ajax({
          url:'/hightable/list',
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
          })
        })
        
      }
    
    handleChange=(pagination, filters, sorter)=>{
        this.setState({
            sortOrder:sorter.order
        })
    }
    handleDelete=(item)=>{
        let id =item.id
        Modal.confirm({
            title:"确认",
            content:"您确定要删除此条吗",
            onOk:()=>{
                message.success('删除成功')
                this.request()
            }


        })
    }
    render(){
        const columns = [{
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            width:80
          },{
            title: '用户名',
            dataIndex: 'name',
            key: 'name',
            width:80
          }, {
            title: '性别',
            dataIndex: 'gender',
            key: 'gender',
            width:80,
            render(gender){
              return gender===1 ?'男':'女'
            }
          }, {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
            width:120,
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
            width:80,
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
            width:120
          },, {
            title: '地址',
            dataIndex: 'address',
            key: 'address',
            width:120
          },, {
            title: '早起时间',
            dataIndex: 'getup',
            key: 'getup',
            width:80
          },];



        const columns2 = [
            {
              title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left',
            },
            {
              title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left',
            },
            { title: 'Column 1', dataIndex: 'address', key: '1' },
            { title: 'Column 2', dataIndex: 'address', key: '2' },
            { title: 'Column 3', dataIndex: 'address', key: '3' },
            { title: 'Column 4', dataIndex: 'address', key: '4' },
            { title: 'Column 5', dataIndex: 'address', key: '5' },
            { title: 'Column 6', dataIndex: 'address', key: '6' },
            { title: 'Column 7', dataIndex: 'address', key: '7' },
            { title: 'Column 8', dataIndex: 'address', key: '8' },
            {
                title: 'Action',
                key: 'operation',
                fixed: 'right',
                width: 100,
                render: () => <a href="javascript:;">action</a>,
              },
            ];
            const data2= [{
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York Park',
              }, {
                key: '2',
                name: 'Jim Green',
                age: 40,
                address: 'London Park',
            }];


        const columns3= [{
                title: 'id',
                dataIndex: 'id',
              },{
                title: '用户名',
                dataIndex: 'name',
              }, {
                title: '性别',
                dataIndex: 'gender',
                render(gender){
                  return gender===1 ?'男':'女'
                }
              },{
                title: '年龄',
                dataIndex: 'age',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
                sortOrder:this.state.sortOrder
              }, {
                title: '状态',
                dataIndex: 'state',
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
              },, {
                title: '地址',
                dataIndex: 'address',
              },, {
                title: '早起时间',
                dataIndex: 'getup',
        }];
           
        const columns4= [{
            title: 'id',
            dataIndex: 'id',
          },{
            title: '用户名',
            dataIndex: 'name',
          }, {
            title: '性别',
            dataIndex: 'gender',
            render(gender){
              return gender===1 ?'男':'女'
            }
          },{
            title: '年龄',
            dataIndex: 'age',
          }, {
            title: '状态',
            dataIndex: 'state',
            render(state){
              let config={
                1:<Badge status="success" text="success" />,
                2:<Badge status="error" text="error" />,
                3:<Badge status="warning" text="warning" />,
                4:<Badge status="default" text="default" />
              }
              return config[state]
            }
          }, {
            title: '爱好',
            dataIndex: 'hobbies',
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
          },, {
            title: '地址',
            dataIndex: 'address',
          },, {
            title: '操作',
            render:(text,item)=>{return <a onClick={(item)=>{this.handleDelete(item)}}>删除</a>}
           
          }];
        return (
            <div>

                <Card title="表格-顶部固定" >
                    <Table 
                    dataSource={this.state.dataSource2} 
                    columns={columns} 
                    bordered={true}
                    pagination={false}
                    scroll={{y:240}}
                    />
                </Card>
                {/* <Card title="表格-左侧固定"> */}
                    <Table 
                    dataSource={data2} 
                    with={1000}
                    columns={columns2} 
                    scroll={{ x: 1300 }} 
                    />
                {/* </Card> */}


                <Card title="表格-升序降序" style={{marginTop:10}}>
                    <Table 
                    dataSource={this.state.dataSource2} 
                    columns={columns3} 
                    bordered={true}
                    pagination={false}
                    onChange={this.handleChange}
                    />
                </Card>
                <Card title="表格-升序降序" style={{marginTop:10}}>
                    <Table 
                    dataSource={this.state.dataSource2} 
                    columns={columns4} 
                    bordered={true}
                    pagination={false}
                    />
                </Card>
            </div>
            
        )
    }
}