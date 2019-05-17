import React from 'react'
import {Select} from 'antd'


const {Option} =Select

export default {
    formatDate(time){
        if(!time) return '';
        let date=new Date(time)
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDay()+' '+date.getHours()+':'+date.getMinutes()
    },
    pagination(data,callBack){
        return{
            onChange:(current)=>{
                callBack(current)
            },
            current:data.result.page,
            pageSize:data.result.page_size,
            total:data.result.total,
            showToal:()=>{
                return `共${data.result.total}条`
            },
            showQuickJumper:true

        }
    },
    getOptionList(data){
        if(!data){
            return []
        }
        const optionLists=[]
        data.map((item)=>{
            optionLists.push(<Option value={item.id}>{item.name}</Option>) 
        })
    }

}