import React from "react";
import { Nav, Avatar, Tabs, TabPane } from '@douyinfe/semi-ui';
import { IconSemiLogo, IconFeishuLogo, IconHelpCircle, IconBell } from '@douyinfe/semi-icons';
import { IconIntro, IconHeart, IconCalendar, IconCheckbox, IconRadio, IconList, IconToast } from '@douyinfe/semi-icons-lab';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

const App = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.rootSidenavTab}>
            <Nav
                mode="horizontal"
                header={{
                    logo: (
                        <div className={styles.navigationHeaderLogo}>
                            <IconSemiLogo className={styles.semiIconsSemiLogo} />
                        </div>
                    ),
                    text: "Semi Templates",
                }}
                footer={
                    <div className={styles.dIV}>
                        <IconFeishuLogo size="large" className={styles.semiIconsFeishuLogo} />
                        <IconHelpCircle size="large" className={styles.semiIconsHelpCircle} />
                        <IconBell size="large" className={styles.semiIconsBell} />
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
                <Nav.Item itemKey="Home" text="Home" onClick={() => navigate.push('/home')} />
                <Nav.Item itemKey="Project" text="Project" />
                <Nav.Item itemKey="Board" text="Board" />
                <Nav.Item itemKey="Forms" text="Forms" />
            </Nav>
            <div className={styles.main}>
                <Nav
                    defaultOpenKeys={["user", "union"]}
                    bodyStyle={{ height: 918 }}
                    mode="vertical"
                    footer={{ collapseButton: true }}
                    className={styles.left}
                >
                    <Nav.Item
                        itemKey="Home"
                        text="Home"
                        icon={<IconIntro className={styles.iconIntro} />}
                        className={styles.navItem}
                        onClick={() => navigate('/home')}
                    />
                    <Nav.Item
                        itemKey="Dashboard"
                        text="Dashboard"
                        icon={<IconHeart className={styles.iconHeart} />}
                        className={styles.navItem1}
                        onClick={() => navigate('/dashboard')}
                    />
                    <Nav.Item
                        itemKey="Project"
                        text="Project"
                        icon={<IconCalendar className={styles.iconCalendar} />}
                        className={styles.navItem2}
                        onClick={() => navigate('/project')}
                    />
                    <Nav.Item
                        itemKey="Users"
                        text="Users"
                        icon={<IconRadio className={styles.iconRadio} />}
                        className={styles.navItem5}
                        onClick={() => navigate('/users')}
                    />
                </Nav>
                <div className={styles.mainRight}>
                    <p className={styles.item}>Page</p>
                    <div className={styles.content}>
                        <Tabs
                            tabPosition="top"
                            defaultActiveKey="1"
                            size="small"
                            className={styles.tabs}
                        >
                            <TabPane tab="Detail" itemKey="1" />
                            <TabPane tab="Profile" itemKey="2" />
                            <TabPane tab="Security" itemKey="3" />
                        </Tabs>
                        <div className={styles.yourContent}>
                            <p className={styles.yourContentHere}>Your Content Here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App ;