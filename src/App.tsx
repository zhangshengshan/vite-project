import React from "react";
import { Nav, Avatar, Tabs, TabPane } from '@douyinfe/semi-ui';
import { IconSemiLogo, IconFeishuLogo, IconHelpCircle, IconBell } from '@douyinfe/semi-icons';
import { IconIntro, IconHeart, IconCalendar, IconCheckbox, IconRadio, IconList, IconToast } from '@douyinfe/semi-icons-lab';
import styles from './index.module.scss';

const App = () => {
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
                <Nav.Item itemKey="Home" text="Home" />
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
                    />
                    <Nav.Item
                        itemKey="Dashboard"
                        text="Dashboard"
                        icon={<IconHeart className={styles.iconHeart} />}
                        className={styles.navItem1}
                    />
                    <Nav.Item
                        itemKey="Project"
                        text="Project"
                        icon={<IconCalendar className={styles.iconCalendar} />}
                        className={styles.navItem2}
                    />
                    <Nav.Item
                        itemKey="Tasks"
                        text="Tasks"
                        icon={<IconCheckbox className={styles.iconCheckbox} />}
                        className={styles.navItem3}
                    />
                    <Nav.Item
                        itemKey="Reporting"
                        text="Reporting"
                        icon={<IconCalendar className={styles.iconCalendar} />}
                        className={styles.navItem4}
                    />
                    <Nav.Item
                        itemKey="Users"
                        text="Users"
                        icon={<IconRadio className={styles.iconRadio} />}
                        className={styles.navItem5}
                    />
                    <Nav.Item
                        itemKey="Support"
                        text="Support"
                        icon={<IconList className={styles.iconList} />}
                        className={styles.navItem6}
                    />
                    <Nav.Item
                        itemKey="Settings"
                        text="Settings"
                        icon={<IconToast className={styles.iconToast} />}
                        className={styles.navItem7}
                    />
                </Nav>
                <div className={styles.mainRight}>
                    <p className={styles.item}>Reporting</p>
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
                            <TabPane tab="Billing" itemKey="4" />
                            <TabPane tab="Email" itemKey="5" />
                            <TabPane tab="Notifications" itemKey="6" />
                            <TabPane tab="Integrations" itemKey="7" />
                            <TabPane tab="API" itemKey="8" />
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
