import {useState, useEffect} from 'react';
import {Divider, Table, Input, Button, Form, Tooltip} from "@douyinfe/semi-ui";
import {columns, data} from "../mocks/mockData.tsx";
import {IconHelpCircle} from "@douyinfe/semi-icons";

const ProjectPage = () => {
    // 筛选条件
    const [filter, setFilter] = useState('');
    // 数据
    const [tableData, setTableData] = useState(data);
    // 标题
    const [title, setTitle] = useState('');
    // 作者
    const [author, setAuthor] = useState('');

    // 监听筛选条件的变化
    useEffect(() => {
        setTableData(data.filter(item => item.name.includes(filter)));
    }, [filter]);

    // 提交按钮的点击事件处理函数
    const handleSubmit = async () => {
        try {
            // 定义你要发送的数据
            const data = {
                title: title,
                author: author
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
            setTableData(newData.concat(newData));
        } catch (error) {
            // handle error
        }
    };

    return (
        <div>
            <Divider></Divider>
            <Form layout='horizontal' onValueChange={values=>console.log(values)}>
                <Form.Input field='UserName' label='用户名' style={{ width: 80 }}/>
                <Form.Input
                    field='Password'
                    label={{
                        text: '密码',
                        extra: <Tooltip content='详情11111'><IconHelpCircle style={{ color: 'var(--semi-color-text-2)' }}/></Tooltip>
                    }}
                    style={{ width: 176 }}
                />
                {/*<Form.Select field="Role" label={{ text: '角1111色', optional: true }} style={{ width: 176 }}>*/}
                {/*    <Option value="admin">管理员</Option>*/}
                {/*    <Option value="user">普通用户</Option>*/}
                {/*    <Option value="guest">访客</Option>*/}
                {/*</Form.Select>*/}
            </Form>
            <Divider></Divider>
            <Table columns={columns} dataSource={tableData} pagination={false}/>
            <Divider></Divider>
        </div>
    );
};

export default ProjectPage;