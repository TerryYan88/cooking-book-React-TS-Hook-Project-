import { TabBar } from 'antd-mobile';
import {useState} from "react";
import CookBook from './Cookbook';
const Home = () => {
    const [fullScreen,setFullScreen] = useState(true);
    const [hidden,setHidden] = useState(false);
    const [selectedTab,setSelectedTab] = useState("cookbook");//设定默认高亮显示
    return (
        <div style={fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#000"
                barTintColor="white"
                hidden={hidden}
            >
                <TabBar.Item
                    title="美食大全"
                    key="cookbook"
                    icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selected={selectedTab === 'cookbook'}
                    onPress={() => {
                        setSelectedTab('cookbook');//设置默认值
                    }}
                    data-seed="logId"
                >
                    <CookBook/>
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    title="分类"
                    key="category"
                    selected={selectedTab === 'category'}
                    onPress={() => {
                        setSelectedTab('category')
                    }}
                    data-seed="logId1"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    title="美食地图"
                    key="map"
                    selected={selectedTab === 'map'}
                    onPress={() => {
                        setSelectedTab('map')
                    }}
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    title="更多"
                    key="more"
                    selected={selectedTab === 'more'}
                    onPress={() => {
                        setSelectedTab('more');
                    }}
                >
                </TabBar.Item>
            </TabBar>
        </div>
    )
}

export default Home;