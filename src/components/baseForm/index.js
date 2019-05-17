import React from 'react'
import {Form,Select,Input,Checkbox} from 'antd'
import { Utils } from 'handlebars';
import Utils from '../../utils/utils';

const { Option } = Select;


class FilterForm extends React.Component{
    initialForm=()=>{
        const { getFieldDecorator }=this.props.form
        const optionList=this.props.optionList
        const optionLists=[]

        optionList.forEach((item,index)=>{
            let type=item.type
            let babel=item.babel
            let field=item.field
            let width=item.width
            let intialValue=item.intialValue || ''
            let placeHolder=item.placeHolder
            let list=item.list
  
            if(type==='INPUT'){
                const INPUT= <Form.Item label={label} key={field}>
                {
                    getFieldDecorator([field],{
                        initialValue:{initialValue}
                    })(<Input placeholder={placeHolder} type="text"/>)
                }
                
                </Form.Item>
                optionLists.push(INPUT)

            }else if(type==='SELECT'){
                const SELECT= <Form.Item label={label} key={field}>
                {
                    getFieldDecorator([field],{
                        initialValue:{initialValue}
                    })(<Select style={{width:width}}>
                        {Utils.getOptionList(list)}
                    </Select>)
                }
                
                </Form.Item>
                optionLists.push(SELECT)
            }else if(type==='CHECKBOX'){
                const CHECKBOX= <Form.Item label={label} key={field}>
                {
                    getFieldDecorator([field],{
                        valuePropName:'checked',
                        initialValue:{initialValue}//true/false
                    })(
                        <Checkbox>
                            {label}
                        </Checkbox>
                    )
                }
                
                </Form.Item>
                optionLists.push(CHECKBOX)
            }
            
        })
        
        

    }
    render(){

        return (
            <Form>
                {this.initialForm()}
                    <Form.Item >
                        <Button type="primary"style={{marginRight:20}}>查询</Button>
                        <Button >重置</Button>
                    </Form.Item>
            </Form>
        )
    }
}

export default FilterForm = Form.create({})(OpenCityForm)