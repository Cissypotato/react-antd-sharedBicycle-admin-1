
import Jsonp from 'jsonp'
import axios from 'axios'
import {Modal} from 'antd'
import Utils from './../utils/utils'

export default class Axios{

    static requestList(_this,url,params,isMock){

        this.ajax({
            url:url,
            data:{
                params:params,
                isMock
            }
        }).then((data)=>{
            if(data && data.result){
                _this.setState({
                    dataSource:data.result.item_list.map((item,index)=>{
                        item.key=index
                        return item
                    }),
                    pagination:Utils.pagination(data,(current)=>{
                        _this.params.page=current;
                        _this.requestList()
                    })
                })
            }

            })
           
    }

    static jsonp(options){
        return new Promise((resolve,reject)=>{
            Jsonp(
                options.url,
                {param:'callback'},
                function(err,response){
                    if(!err){
                        resolve(response)
                    }else{
                        reject(err)
                    }
                }
            )
        })
    }
   
    static ajax(options){
        let loading
        if(options.isShowLoading !==false){
            loading=document.getElementById('loadEffect')
            loading.style.display="block"
        }
        let baseApi=''
        if (options.isMock){
            baseApi=' https://www.easy-mock.com/mock/5cccf95e8b7ca91bf19ca79a/potato'
        }else{
            baseApi=' https://www.easy-mock.com/mock/5cccf95e8b7ca91bf19ca79a/potato'//自己公司服务端api
        }
        
        return new Promise((resolve,reject)=>{
            axios({
                baseURL:baseApi,
                url:options.url,
                method:'get',
                timeout:5000,
                params:(options.data && options.data.params) || ''
     
             }).then((response)=>{
                if(options.isShowLoading !==false){
                    loading=document.getElementById('loadEffect')
                    loading.style.display="none"
                }
                if(response.status===200){
                    let res=response.data
                    if(res.code===0){
                        resolve(res)
                    }else{
                        Modal.info({
                            title:'提示',
                            content:res.msg

                        })
                    }
                }else{
                    reject(response.data)
                }
             })

        })
        
    }
}