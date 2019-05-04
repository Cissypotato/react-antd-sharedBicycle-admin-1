
import Jsonp from 'jsonp'
import axios from 'axios'
import {Modal} from 'antd'

export default class Axios{
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
        const baseApi=' https://www.easy-mock.com/mock/5cccf95e8b7ca91bf19ca79a/potato'
        return new Promise((resolve,reject)=>{
            axios({
                baseURL:baseApi,
                url:options.url,
                method:'get',
                timeout:5000,
                params:(options.data && options.dara.params) || ''
     
             }).then((response)=>{
                if(response.status===200){
                    let res=response.data
                    if(res.code===0){
                        resolve(res)
                    }else{
                        Modal.info({
                            title:'提示',
                            content:res.data.msg

                        })
                    }
                }else{
                    reject(response.data)
                }
             })

        })
        
    }
}