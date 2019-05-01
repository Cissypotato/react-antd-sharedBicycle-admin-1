import React from "react"
import {Card ,Button,Tabs,Icon} from 'antd'
import './ui.less'

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

export default class Tabsi extends React.Component{
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
          { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
          { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
          {
            title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false,
          },
        ];
        this.state = {
          activeKey: panes[0].key,
          panes,
        };
      }
    
    onChange = (activeKey) => {
        this.setState({ activeKey });
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
      }
    
    add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
    }
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
      }

    
    render(){
        return(
            <div className="uiWrap">
                <Card title="一般tab" className="cardWrap">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Tab 1" key="1">土豆烧排骨</TabPane>
                        <TabPane tab="Tab 2" key="2">可乐鸡翅</TabPane>
                        <TabPane tab="Tab 3" key="3">番茄牛腩</TabPane>
                    </Tabs>
                </Card>
                <Card title="图标tab" className="cardWrap">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">土豆烧排骨</TabPane>
                        <TabPane tab={<span><Icon type="yuque" />Tab 1</span>}>可乐鸡翅</TabPane>
                        <TabPane tab={<span><Icon type="chrome" />Tab 1</span>}key="3">番茄牛腩</TabPane>
                    </Tabs>
                </Card>

                <Card title="增删tab" className="cardWrap">
                    <Tabs
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
                    </Tabs>
                </Card>
                
            </div>
        )
    }
}