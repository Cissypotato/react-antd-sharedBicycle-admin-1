import React from 'react'
import {Form,Select,Input,Checkbox,Button,DatePicker,} from 'antd'
import Utils from '../../utils/utils';

const { Option } = Select;


class FilterForm extends React.Component{

    handleFilterSubmit=()=>{
        let fieldsValue=this.props.form.getFieldsValue()
        this.props.filterSubmit(fieldsValue)
    }
    reset=()=>{
        this.props.form.resetFields()
    }
    initialForm=()=>{
        const { getFieldDecorator }=this.props.form
        const optionList=this.props.optionList
        const optionLists=[]

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
                        initialValue:initialValue
                    })(<Input placeholder={placeholder} type="text"/>)
                }
                
                </Form.Item>
                optionLists.push(INPUT)

            }else if(type==='SELECT'){
                const SELECT= <Form.Item label={label} key={field}>
                {
                    getFieldDecorator([field],{
                        initialValue:initialValue
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
                        initialValue:initialValue//true/false
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
                        {getFieldDecorator("start_time")(<DatePicker showTime={true} placeholder="选择开始时间"/>)}
                    </Form.Item>  
                optionLists.push(START_DATE)
                const END_DATE=<Form.Item label="~" colon={false}>
                        {getFieldDecorator("end_time")(<DatePicker showTime={true} placeholder="选择结束时间"/>)}
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
                    <Button type="primary"style={{marginRight:20}} onClick={this.handleFilterSubmit}>查询</Button>
                    <Button onClick={this.reset}>重置</Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create({})(FilterForm)