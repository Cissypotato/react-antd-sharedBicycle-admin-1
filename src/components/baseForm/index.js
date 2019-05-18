import React from 'react'
import {Form,Select,Input,Checkbox,Button,DatePicker,} from 'antd'
import Utils from '../../utils/utils';

const { Option } = Select;


class FilterForm extends React.Component{

    initialForm=()=>{
        const { getFieldDecorator }=this.props.form
        const optionList=this.props.optionList
        const optionLists=[]

        console.log(optionList)
        optionList.forEach((item,index)=>{
            let type=item.type
            let label=item.label
            let field=item.field
            let width=item.width
            let initialValue=item.initialValue || ''
            let placeholder=item.placeholder
            let list=item.list
  
            if(type==='INPUT'){
                const INPUT= <Form.Item label={label} key={field}>
                {
                    getFieldDecorator([field],{
                        initialValue:{initialValue}
                    })(<Input placeholder={placeholder} type="text"/>)
                }
                
                </Form.Item>
                optionLists.push(INPUT)

            }else if(type==='SELECT'){
                const SELECT= <Form.Item label={label} key={field}>
                {
                    getFieldDecorator([field],{
                        initialValue:[initialValue]
                    })(<Select style={{width:100}}>

                                {/* <Option value="0">全部</Option>
                                <Option value="1">北京</Option>
                                <Option value="2">成都</Option> */}

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
            }else if(type==='订单时间'){
                const START_DATE=<Form.Item label={label}>
                        {getFieldDecorator([field])(<DatePicker placeholder="选择开始时间"/>)}
                    </Form.Item>  
                optionLists.push(START_DATE)
                const END_DATE=<Form.Item label="~" colon={false}>
                        {getFieldDecorator([field])(<DatePicker placeholder="选择结束时间"/>)}
                    </Form.Item>  
                optionLists.push(END_DATE)
            }
            
        })
        
        return optionLists

    }


    render(){

        return (
            <Form layout="inline">
                {this.initialForm()}
                <Form.Item >
                    <Button type="primary"style={{marginRight:20}}>查询</Button>
                    <Button >重置</Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create({})(FilterForm)