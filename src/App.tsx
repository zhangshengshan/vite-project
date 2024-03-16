import './App.css'
import {Excalidraw} from "@excalidraw/excalidraw";
import {Button, Flex} from 'antd';


function App() {

    return (
        <>
            {/*<Flex vertical gap="small" style={{width: '100%'}}>*/}
            {/*    <Button type="primary" block>*/}
            {/*        Primary*/}
            {/*    </Button>*/}
            {/*    <Button block>Default</Button>*/}
            {/*    <Button type="dashed" block>*/}
            {/*        Dashed*/}
            {/*    </Button>*/}
            {/*    <Button disabled block>*/}
            {/*        disabled*/}
            {/*    </Button>*/}
            {/*    <Button type="text" block>*/}
            {/*        text*/}
            {/*    </Button>*/}
            {/*    <Button type="link" block>*/}
            {/*        Link*/}
            {/*    </Button>*/}
            {/*</Flex>*/}
            <div id="board">
                <Excalidraw/>
                <Button/>
            </div>
        </>
    )
}

export default App
