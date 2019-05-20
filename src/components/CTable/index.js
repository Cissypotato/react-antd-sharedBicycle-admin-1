import React from 'react'
import {Table} from 'antd'
import Utils from '../../utils/utils';


export default class CTable extends React.Component{
    state = {
        // selectedRowKeys: [], // Check here to configure the default column
      };

    initTable=()=>{
        const { selectedRowKeys } = this.state;
        let row_selection= this.props.rowSelection
        const rowSelection = {
            type:"radio",
            // selectedRowKeys:this.state.selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                
            //  this.selectedRowKeys=selectedRowKeys
            console.log(this.state.selectedRowKeys)
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            }
        }
        if(row_selection===false || row_selection===null){
            row_selection=false
        }else if(row_selection==="checkbox"){
            rowSelection.type="checkbox"
        }else{
            row_selection='radio'
        }
        return <Table 
        bordered
        {...this.props}
        rowSelection={row_selection?rowSelection:null}
        onRow={(record,index) => {
            return {
              onClick: () => {
                this.setState({
                    selectedRowKeys:[index]
                })
                console.log(record,index)
              }, // 点击行
            };
          }}
        // dataSource={this.state.dataSource} 
        // columns={columns} 
        // bordered={true}
        // pagination={this.state.pagination}
    />

    }

    render(){
        return (<div>

            {this.initTable()}
             
        </div>)
    }
}