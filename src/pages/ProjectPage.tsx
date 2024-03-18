import {useState, useEffect} from 'react';
import {Divider, Table, Input, Button} from "@douyinfe/semi-ui";
import {columns, data} from "../mocks/mockData.tsx";

const ProjectPage = () => {
    // 筛选条件
    const [filter, setFilter] = useState('');
    // 数据
    const [tableData, setTableData] = useState(data);

    // 监听筛选条件的变化
    useEffect(() => {
        setTableData(data.filter(item => item.name.includes(filter)));
    }, [filter]);

    // 提交按钮的点击事件处理函数
    const handleSubmit = async () => {

        try {
            // 模拟向后端服务器发送请求并获取数据
            // const response = await fetch('https://localhost:8080/data');
            const data = {
                key1: 'value1',
                key2: 'value2',
                // ...其他参数
            };

            // 发送POST请求
            const response = await fetch('https://localhost:8080/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const newData = await response.json();
            console.log(newData)
            setTableData(newData.concat(newData));
            console.log(tableData);
        } catch (error) {
            // setTableData(tableData);
        }
    };

    return (
        <div>
            <Divider></Divider>
            <Input value={filter} onChange={e => setFilter(e)} placeholder="Filter"/>
            <Divider></Divider>
            <Button onClick={handleSubmit}>Submit</Button>
            <Divider></Divider>
            <Table columns={columns} dataSource={tableData} pagination={false}/>
            <Divider></Divider>
        </div>
    );
};

export default ProjectPage;
