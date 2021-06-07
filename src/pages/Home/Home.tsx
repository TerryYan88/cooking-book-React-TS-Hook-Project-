/* eslint-disable react-hooks/rules-of-hooks */
import { TabBar } from 'antd-mobile';
import { useState } from "react";
import { CookBook } from './Cookbook/index';
import { Category } from "./Category";
import { Map } from "./Map";
import { More } from "./More";


import { useSelector,useDispatch } from 'react-redux';
import {ActionsCate} from "@/redux/Category/models/actions-type";
import { AppState } from "@/redux/rootStore";

import useAnimate from "@/hooks/useAnimate";

import cookbook from '@/assets/images/cookbook.png'
import cookbookActive from '@/assets/images/cookbook-active.png'
import menu from '@/assets/images/menu.png'
import menuActive from '@/assets/images/menu-active.png'
import location from '@/assets/images/location.png'
import locationActive from '@/assets/images/location-active.png'
import more from '@/assets/images/more.png'
import moreActive from '@/assets/images/more-active.png'



const Home = () => {
    const [fullScreen] = useState(true);
    const [hidden] = useState(false);
    const selected = useSelector((state: AppState) => state.cateReducer.routeInfo.selectedTab);
    
    const [selectedTab, setSelectedTab] = useState(selected);//设定默认高亮显示
    const checked = useSelector((state: AppState) => state.moreReducers.checked);
    const dispatch = useDispatch();
   
    const changeSelectedTab = (selectedTab: string) =>dispatch({type:ActionsCate.SELECTED_TAB,selectedTab});

    const tabItems = [
        <TabBar.Item
            title="美食大全"
            key="cookbook"
            icon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${cookbook}) center center /  26px 26px no-repeat`
            }}
            />
            }
            selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${cookbookActive}) center center /  26px 26px no-repeat`
            }}
            />
            }
            selected={selectedTab === 'cookbook'}
            onPress={() => {
                setSelectedTab('cookbook');//设置默认值
            }}
            data-seed="logId"
        >
            <CookBook />
        </TabBar.Item>,
        <TabBar.Item
            icon={
                <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${menu}) center center /  21px 21px no-repeat`
                }}
                />
            }
            selectedIcon={
                <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${menuActive}) center center /  21px 21px no-repeat`
                }}
                />
            }
            title="分类"
            key="category"
            selected={selectedTab === 'category'}
            onPress={() => {
                setSelectedTab('category')
                changeSelectedTab('category')
            }}
            data-seed="logId1"
        >
            <Category />
        </TabBar.Item>,
        <TabBar.Item
            icon={
                <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${location}) center center /  21px 21px no-repeat`
                }}
                />
            }
            selectedIcon={
                <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${locationActive}) center center /  21px 21px no-repeat`
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
            <Map />
        </TabBar.Item>,
        <TabBar.Item
            icon={{ uri: more }}
            selectedIcon={{ uri: moreActive }}
            title="更多"
            key="more"
            selected={selectedTab === 'more'}
            onPress={() => {
                setSelectedTab('more');
            }}
        >
            <More />
        </TabBar.Item>
    ]
    
    return (
        <div style={fullScreen ? { position: 'fixed', height: '100%',zIndex:2, width: '100%', top: 0 } : { height: 400 }}>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#000"
                barTintColor="white"
                hidden={hidden}
                // noRenderContent={true}
                prerenderingSiblingsNumber={Infinity}
            >
                {
                    checked 
                    ? tabItems.map(item=>item)
                    : tabItems.filter((v,i)=>i!==2)
                }
            </TabBar>
        </div>
    )
}

export default useAnimate(Home);