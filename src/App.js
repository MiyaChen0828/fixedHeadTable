import React from 'react';
import './App.css';
import { FixHeaderTable } from "./FixHeadTable"
import zh_CN from 'antd/es/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
let tableOption = {

}

//表格勾选的回调事件
function onSelect(selectkeys,selectedRows){
  console.log(selectkeys);
  console.log(selectedRows);
}

//行点击事件
function onRowClick(rowData, colCode){
  console.log(123456789);
}

//分页点击的回调
function onChange(page, pageSize){
  console.log("page"+page);
  console.log("pageSize"+pageSize);
}
function App() {
  let dataSource = [
    {
      dataIndex:'a',
      "column1":"fr000000029",
      "column2":"纸质运单",
      "column3":"中都行达",
      "column4":"￥123456",
      "column5":"￥123456",
      "column6":"待确认",
      "column7":"12.00%",
      "column8":1,
      "column9":2,
      "column10":"1.00%",
      "column11":"2020/2/14",
      "column12":"2019/8/21",
      "column13":"查看运单",
      "column14":"关联合同"
    },
    {
      dataIndex:'b',
      "column1":"fr000000029",
      "column2":"纸质运单",
      "column3":"中都行达",
      "column4":"￥123456",
      "column5":"￥123456",
      "column6":"待确认",
      "column7":"12.00%",
      "column8":1,
      "column9":2,
      "column10":"1.00%",
      "column11":"2020/2/14",
      "column12":"2019/8/21",
      "column13":"查看运单",
      "column14":"关联合同"
    },
    {
      dataIndex:'c',
      "column1":"fr000000029",
      "column2":"纸质运单",
      "column3":"中都行达",
      "column4":"￥123456",
      "column5":"￥123456",
      "column6":"待确认",
      "column7":"12.00%",
      "column8":1,
      "column9":2,
      "column10":"1.00%",
      "column11":"2020/2/14",
      "column12":"2019/8/21",
      "column13":"查看运单",
      "column14":"关联合同"
    },
    {
      dataIndex:'d',
      "column1":"fr000000029",
      "column2":"纸质运单",
      "column3":"中都行达",
      "column4":"￥123456",
      "column5":"￥123456",
      "column6":"待确认",
      "column7":"12.00%",
      "column8":1,
      "column9":2,
      "column10":"1.00%",
      "column11":"2020/2/14",
      "column12":"2019/8/21",
      "column13":"查看运单",
      "column14":"关联合同"
    },
    {
      dataIndex:'e',
      "column1":"fr000000029",
      "column2":"纸质运单",
      "column3":"中都行达",
      "column4":"￥123456",
      "column5":"￥123456",
      "column6":"待确认",
      "column7":"12.00%",
      "column8":1,
      "column9":2,
      "column10":"1.00%",
      "column11":"2020/2/14",
      "column12":"2019/8/21",
      "column13":"查看运单",
      "column14":"关联合同"
    },
    {
      dataIndex:'f',
      "column1":"fr000000029",
      "column2":"纸质运单",
      "column3":"中都行达",
      "column4":"￥123456",
      "column5":"￥123456",
      "column6":"待确认",
      "column7":"12.00%",
      "column8":1,
      "column9":2,
      "column10":"1.00%",
      "column11":"2020/2/14",
      "column12":"2019/8/21",
      "column13":"查看运单",
      "column14":"关联合同"
    },
    {
      dataIndex:'g',
      "column1":"fr000000029",
      "column2":"纸质运单",
      "column3":"中都行达",
      "column4":"￥123456",
      "column5":"￥123456",
      "column6":"待确认",
      "column7":"12.00%",
      "column8":1,
      "column9":2,
      "column10":"1.00%",
      "column11":"2020/2/14",
      "column12":"2019/8/21",
      "column13":"查看运单",
      "column14":"关联合同"
    },
    {
      dataIndex:'h',
      "column1":"fr000000029",
      "column2":"纸质运单",
      "column3":"中都行达",
      "column4":"￥123456",
      "column5":"￥123456",
      "column6":"待确认",
      "column7":"12.00%",
      "column8":1,
      "column9":2,
      "column10":"1.00%",
      "column11":"2020/2/14",
      "column12":"2019/8/21",
      "column13":"查看运单",
      "column14":"关联合同"
    },
    {
      dataIndex:'i',
      "column1":"fr000000029",
      "column2":"纸质运单",
      "column3":"中都行达",
      "column4":"￥123456",
      "column5":"￥123456",
      "column6":"待确认",
      "column7":"12.00%",
      "column8":1,
      "column9":2,
      "column10":"1.00%",
      "column11":"2020/2/14",
      "column12":"2019/8/21",
      "column13":"查看运单",
      "column14":"关联合同"
    },
  ];
  return (
    <LocaleProvider locale={zh_CN}>
      <div className="App">
        <FixHeaderTable isSelect={ true } isPaging={ true } onSelect={ onSelect } total={ 20 } pagesize={10} pageNo={1}  dataSource={ dataSource } onRowClick={onRowClick} onChange={ onChange } ></FixHeaderTable>
      </div>
    </LocaleProvider>
  );
}

export default App;
