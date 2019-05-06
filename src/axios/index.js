
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
        let loading
        if(options.isShowLoading !==false){
            loading=document.getElementById('loadEffect')
            loading.style.display="block"
        }
        const baseApi=' https://www.easy-mock.com/mock/5cccf95e8b7ca91bf19ca79a/potato'
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