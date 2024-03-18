import {Divider, Table} from '@douyinfe/semi-ui';
import {useState, useEffect} from 'react';
import axios from 'axios';

const ProjectPage = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            const response = await axios.get('https://api.github.com/users/zhangshengshan/repos');
            setRepos(response.data);
        };
        fetchRepos().then(r => {
            console.log(r);
        });
    }, []);

    const columns = [
        {
            title: '项目名称', dataIndex: 'name', key: 'name', render: (text, record, index) => {
                return <a href={record.html_url} target="_blank" rel="noopener noreferrer">{text}</a>;
            }
        },
    ];

    return (
        <div>
            {/* Other components */}

            <h2>My GitHub Projects</h2>
            <Divider/>

            <Table dataSource={repos} columns={columns} rowKey="id" pagination={true}/>

            {/* Other components */}
        </div>
    );
};

export default ProjectPage;