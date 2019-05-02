import React from "react"
import  { Card, Form,Input,Button,Icon,Checkbox} from 'antd'

import './form.less'

  class LoginForm extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        })
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
               <Card title="水平表单">
                    <Form layout="inline">
                        <Form.Item>
                            <Input placeholder="Username" />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Username" />
                        </Form.Item>
                        
                        <Form.Item>
                            <Button>
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
               </Card>

               <Card title="常规表单" className="normalFormWrap">
                    <Form className="login-form">
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </Form.Item>
                        
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">忘记密码</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            Or <a href="#">马上注册</a>
                        </Form.Item>
                    </Form>
               </Card>

            </div>
        )
    }


}


const HorizontalLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
export default HorizontalLoginForm