
import React from 'react'
import {Card ,Table,Modal,Button,message,pagination,Badge} from 'antd'
import Axios from './../../axios'
import Utils from './../../utils/utils'




export default class City extends React.Component{
    state={

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
                <Card  style={{marginTop:10}}>
                    
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