import {useState, useEffect} from 'react';
import {Divider, Table, Input, Button, Notification} from "@douyinfe/semi-ui";
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
        setFilter('');
        setTableData([]);

        try {
            // 模拟向后端服务器发送请求并获取数据
            const response = await fetch('https://localhost:8080/data');
            const newData = await response.json();

            Notification.open({
                title: 'Success',
                content: newData.beautify(),
                duration: 3,
            });  //

            setTableData(newData);
        } catch (error) {
            console.error('Error:', error);
            Notification.open({
                title: 'Error',
                content: error.message,
                duration: 3,
            });
            setTableData(tableData);
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
