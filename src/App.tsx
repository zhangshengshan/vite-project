import {Nav, Avatar, Button} from '@douyinfe/semi-ui';
import {IconSemiLogo, IconFeishuLogo, IconHelpCircle, IconBell} from '@douyinfe/semi-icons';
import {IconIntro, IconHeart, IconCalendar, IconRadio} from '@douyinfe/semi-icons-lab';
import styles from './index.module.scss';
import {Route, Routes, useNavigate} from 'react-router-dom';
import HomePage from "./pages/HomePage.tsx";
import DashBoardPage from "./pages/DashBoardPage.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import {useEffect, useState} from "react";
import GitHubReposPage from "./pages/GitHubReposPage.tsx";


const App = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [showLoginPopup, setShowLoginPopup] = useState(true);  // 添加这一行


    const handleLoginSuccess = () => {
        console.log("onLoginSuccess called");
        setShowLoginPopup(false);
    };

    useEffect(() => {

    }, []);

    return (
        <div>
            {!showLoginPopup &&
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
                                onClick={() => navigate('/users')}

                            />
                            <Nav.Item
                                itemKey="Login"
                                text="Login"
                                icon={<IconRadio className={styles.iconRadio}/>}
                                className={styles.navItem5}
                                onClick={() => navigate('/login')}

                            />
                        </Nav>
                        <div id="main_panal" className={styles.mainRight}>
                            <Routes>
                                <Route path="/home" element={<HomePage/>}/>
                                <Route path="/dashboard" element={<DashBoardPage/>}/>
                                <Route path="/project" element={<ProjectPage/>}/>
                                <Route path="/users" element={<GitHubReposPage/>}/>
                                <Route path="/login" element={<LoginPage
                                    onLoginSuccess={() => setShowLoginPopup(false)}/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            }
            {showLoginPopup && <LoginPage onLoginSuccess={handleLoginSuccess}/>}
            <Button onClick={() => {
                console.log("button clicked")
                console.log("before showLoginPopup:", showLoginPopup)
                console.log("after showLoginPopup:", showLoginPopup)

            }}>TOGGLE_LOGIN_SHOW</Button>
        </div>
    )
        ;
}

export default App;