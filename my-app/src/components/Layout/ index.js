import {Menu} from 'antd';
import {
    ContainerOutlined,
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { useState} from 'react';
import routes from '../../page-hoc-route';
import { useNavigate } from 'react-router-dom';


export default function Layout({children}){
    const navigate = useNavigate();
    console.log(111);
    const items = [
        {
            key: routes[0]?.dirPath,
            icon:  <PieChartOutlined />,
            label: 'Option1',
        },
        {
            key: routes[1]?.dirPath,
            icon:  <DesktopOutlined />,
            label: 'Option2',
        },
        {
            key: routes[2]?.dirPath,
            icon:  <ContainerOutlined />,
            label: 'Option3',
        },
    ];


    return (
        <div style={{ display: 'flex'}}>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={false}
                style={{ width: 400}}
                items={items}
                onClick={(e)=>{
                    console.log(43343);
                    navigate(e?.key);
                }}
            />
            <div>{children}</div>
        </div>
    )
}
