import {useEffect, useState} from 'react';
import {Button} from 'antd';
import config from '../../commons/config';


export default config({
        ajax: true,
        title: '管理员',
        route: true
    },
    function User() {
        const [loading, setLoading] = useState(false);
        useEffect(() => {
            setLoading(true);
        });

        return (
            <Button loading={loading} type="primary">管理员</Button>
        );
    });
