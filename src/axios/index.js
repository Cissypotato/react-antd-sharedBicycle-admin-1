
import Jsonp from 'jsonp'

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
   
}