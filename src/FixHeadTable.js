import * as React from 'react';
import { Checkbox, Pagination } from 'antd';
import './FixHeaderTable.css';

class FixHeaderTable extends React.Component {
    state = {
        isSelectAll:false,   //全选标志
        statusMap:{}
    }
    componentDidMount() {
        let tab_head = document.getElementById("fixHeadTab_head");
        let tab_body = document.getElementById("fixHeadTab_body");
        tab_body.onscroll = () => {
            tab_head.scrollLeft = tab_body.scrollLeft+2;
        }
    }
    formatColumn1 = (text, record) => {
        if (text) {
            return <span>{text}</span>
        }
    }
    formatColumn2 = (text, record) => {
        if (text) {
            return <div onClick={(e) => { e.stopPropagation();/** 冒泡处理 */ alert("Good") }}>{text}</div>
        }
    }
    formatColumn5 = (text,record) =>{
        if(text){
            return <span>{ text }</span>;
        }
    }
    /**表格的头 */
    dataColumn = [
        { dataIndex: "column1", title: "融资申请编号", width: 70, render: this.formatColumn1 },
        { dataIndex: "column2", title: "运单载体", width: 70, render: this.formatColumn2 },
        { dataIndex: "column3", title: "承运商", width: 70, render: this.formatColumn1 },
        { dataIndex: "column4", title: "运单金额", width: 70, render: this.formatColumn1 },
        { dataIndex: "column5", title: "融资金额", width: 70, render: this.formatColumn5 },
        { dataIndex: "column6", title: "融资状态", width: 70, render: this.formatColumn1 },
        { dataIndex: "column7", title: "融资利率(年化)", width: 70, render: this.formatColumn1 },
        { dataIndex: "column8", title: "融资运单数", width: 70, render: this.formatColumn1 },
        { dataIndex: "column9", title: "融资车辆书", width: 70, render: this.formatColumn1 },
        { dataIndex: "column10", title: "平台费率", width: 70, render: this.formatColumn1 },
        { dataIndex: "column11", title: "融资款到期日", width: 70, render: this.formatColumn1 },
        { dataIndex: "column12", title: "提交时间", width: 70, render: this.formatColumn1 },
        { dataIndex: "column13", title: "融资运单", width: 70, render: this.formatColumn1 },
        { dataIndex: "column14", title: "关联合同", width: 70, render: this.formatColumn1 }
    ];

    /**一键选中所有*/
    onSelectAll = () => {
        let { isSelectAll,statusMap } = this.state;
        for (var key in statusMap) {
            if (statusMap.hasOwnProperty(key)){
                statusMap[key]["status"] = isSelectAll?false:true;
            }
        }
        this.setState({
            isSelectAll:!isSelectAll,
            statusMap:statusMap
        },() =>{
            let { selectkeys,selectedRows } = this.getselectedKey();
            this.props.onSelect(selectkeys,selectedRows);
        })
    }

    /**选中单个 */
    onSelectSingle = (dataIndex) => {
        let { statusMap} = this.state;
        statusMap[dataIndex].status = !statusMap[dataIndex].status;
        let isSelected = this.judgeToSelectAll()?true:false;
        this.setState({
            isSelectAll:isSelected,
            statusMap:statusMap
        },() =>{
            let { selectkeys,selectedRows } = this.getselectedKey();
            this.props.onSelect(selectkeys,selectedRows);
        })
    }

    /*****判断数据有没有被全部选中*******/
    judgeToSelectAll = () =>{
        let { statusMap } = this.state,flag = true;
        for (var key in statusMap) {
            if (statusMap.hasOwnProperty(key)){
                if(!statusMap[key]["status"]){
                    flag = false;
                };
            }
        }
        return flag;
    }

    /**通过statusMap挑出选中数据的key,转换成数组格式返回到父组件 */
    getselectedKey = ()=>{
        let { statusMap } = this.state,selectkeys = [],selectedRows = [];
        let { dataSource } = this.props;
        for (var key in statusMap) {
            if (statusMap.hasOwnProperty(key)){
                if(statusMap[key].status){
                    selectkeys.push(key);
                    dataSource.map((item,index) => {
                        if(item["dataIndex"] == key){
                            selectedRows.push(item);
                        }
                    })
                }
            }
        }
        return { selectkeys, selectedRows };
    }

    /**表格行数据 */
    getTableRows= () => {
        let { dataSource,isSelect } = this.props;
        let { statusMap } = this.state;
        let dataColumn = this.dataColumn;
        let result = [];
        dataSource.map((item, index) => {
            let column = [];
            dataColumn.map((items, indexs) => {
                if(indexs === 0 && isSelect){
                    if(!statusMap[item.dataIndex]){
                        statusMap[item.dataIndex] = {status:false};
                    }
                    column.push(<td key={ indexs + "status"}><Checkbox onChange={ () => this.onSelectSingle(item.dataIndex)} checked={statusMap[item.dataIndex].status}/></td>);
                }
                let data = items.render(item[items.dataIndex] || null, items);
                column.push(<td key={indexs} onClick={()=>{this.onRowClick(item, item.dataIndex)}}>{ data }</td>) 
            })
            result.push(<tr key={index}  >{ column }</tr>)
        })
        return result;
    }

    //行点击事件
    onRowClick = (rowData)=>{
        this.props.onRowClick && this.props.onRowClick(rowData);
    }

    //
    onChange = (page, pageSize) => {
        this.props.onChange(page, pageSize);
    }

    render() {
        let dataColumn = this.dataColumn;
        let { isSelect,total,isPaging } = this.props;
        let { isSelectAll } = this.state;
        return <div className="tab_box" id="fixHeadTab_box">
            <div className="white_box"></div>
            <div className="tab_head" id="fixHeadTab_head">
                <table>
                    <thead>
                        <tr>
                            {
                                isSelect?<th>
                                    <Checkbox onChange={ this.onSelectAll } checked={isSelectAll}/>
                                </th>:null
                            }
                            {
                                dataColumn.map((item,index) => {
                                    return <th key={index}>{item.title}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.getTableRows()
                        }
                    </tbody>
                </table>
            </div>
            <div className="tab_body" id="fixHeadTab_body">
                <table>
                    <thead>
                    <tr>
                            {
                                isSelect?<th>
                                    <Checkbox onChange={ this.onSelectAll } checked={isSelectAll}/>
                                </th>:null
                            }
                            {
                                dataColumn.map((item,index) => {
                                    return <th key={index}>{item.title}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.getTableRows()
                        }
                    </tbody>
                </table>
            </div>
            <div className="pagnation">
                共搜索到{ total }条数据
                <Pagination showQuickJumper={ {goButton: "页" }} defaultCurrent={2} total={500} onChange={ this.onChange } />
            </div>
            
        </div>
    }
}
export {
    FixHeaderTable
}