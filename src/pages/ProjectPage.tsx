import {Divider, Table} from "@douyinfe/semi-ui";
import {columns, data} from "../mock/mockData.tsx";

const ProjectPage = () => {
    return (
        <div>
            <Divider></Divider>
            <Table columns={columns} dataSource={data} pagination={false}/>
            <Divider></Divider>
        </div>
    )
}
export default ProjectPage;
