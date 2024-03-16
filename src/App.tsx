import {Nav, Avatar} from '@douyinfe/semi-ui';
import {IconSemiLogo, IconFeishuLogo, IconHelpCircle, IconBell} from '@douyinfe/semi-icons';
import {IconIntro, IconHeart, IconCalendar, IconRadio} from '@douyinfe/semi-icons-lab';
import styles from './index.module.scss';
import {Route, Routes, useNavigate} from 'react-router-dom';
import HomePage from "./pages/HomePage.tsx";
import UserPage from "./pages/UserPage.tsx";
import DashBoardPage from "./pages/DashBoardPage.tsx";
import ExternalPage from "./pages/ExternalPage.tsx";

const App = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.rootSidenavTab}>
            <Nav
                mode="horizontal"
                header={{
                    logo: (
                        <div className={styles.navigationHeaderLogo}>
                            <IconSemiLogo className={styles.semiIconsSemiLogo}/>
                        </div>
                    ),
                    text: "Semi Templates",
                }}
                footer={
                    <div className={styles.dIV}>
                        <IconFeishuLogo size="large" className={styles.semiIconsFeishuLogo}/>
                        <IconHelpCircle size="large" className={styles.semiIconsHelpCircle}/>
                        <IconBell size="large" className={styles.semiIconsBell}/>
                        <Avatar
                            size="small"
                            src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/avatarDemo.jpeg"
                            color="blue"
                            className={styles.avatar}
                        >
                            示例
                        </Avatar>
                    </div>
                }
                className={styles.nav}
            >
                <Nav.Item itemKey="Home" text="Home" onClick={() => navigate('/home')}/>
                <Nav.Item itemKey="Project" text="Project" onClick={() => navigate("/project")}/>
                <Nav.Item itemKey="Board" text="Board" onClick={() => navigate("/board")}/>
                <Nav.Item itemKey="Forms" text="Forms" onClick={() => navigate("/forms")}/>
            </Nav>
            <div className={styles.main}>
                <Nav
                    defaultOpenKeys={["user", "union"]}
                    bodyStyle={{height: 918}}
                    mode="vertical"
                    footer={{collapseButton: true}}
                    className={styles.left}
                >
                    <Nav.Item
                        itemKey="Home"
                        text="Home"
                        icon={<IconIntro className={styles.iconIntro}/>}
                        className={styles.navItem}
                        onClick={() => navigate('/home')}
                    />
                    <Nav.Item
                        itemKey="Dashboard"
                        text="Dashboard"
                        icon={<IconHeart className={styles.iconHeart}/>}
                        className={styles.navItem1}
                        onClick={() => navigate('/dashboard')}
                    />
                    <Nav.Item
                        itemKey="Project"
                        text="Project"
                        icon={<IconCalendar className={styles.iconCalendar}/>}
                        className={styles.navItem2}
                        onClick={() => navigate('/project')}
                    />
                    <Nav.Item
                        itemKey="Users"
                        text="Users"
                        icon={<IconRadio className={styles.iconRadio}/>}
                        className={styles.navItem5}
                        // onClick={() => navigate('/users')}

                    />
                </Nav>
                <div id="main_panal" className={styles.mainRight}>
                    <Routes>
                        <Route path="/home" element={<HomePage/>}/>
                        <Route path="/dashboard" element={<DashBoardPage/>}/>
                        <Route path="/forms" element={<UserPage/>}/>
                        <Route path="/users" element={<ExternalPage/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;