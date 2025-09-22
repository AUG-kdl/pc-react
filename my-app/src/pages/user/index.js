import config from '../../commons/config';
import React, { useState} from 'react';
import {Tag, TimePicker} from 'antd';
import dayjs from 'dayjs';
import {v4 as uuid} from 'uuid'
import TimeSelect from '../../components/timeSelect/index'


export default config({
        ajax: true,
        title: '用户',
        route: true,
    },
    function TimeSliderMulti() {
    return <TimeSelect/>
    });






