import React, {useState} from 'react';
import {Tag, TimePicker} from 'antd';
import dayjs from 'dayjs';
import {v4 as uuid} from 'uuid';

export default function TimeSelect() {
    const [open, setOpen] = useState(false);
    const [tagValues, setTagValues] = useState([]);
    return (
        <div style={{ position: 'relative' }}>
            <div
                style={{ border: '1px solid #000000', display: 'flex', flexWrap: 'wrap', width: 800, height: 40 }}
                onClick={() => {
                    setOpen(true);
                }
                }
            >
                {
                    tagValues.map((v, index) => {
                        return (
                            <Tag
                                key={v?.id || index}
                                closable
                                onClose={() => {
                                    const filterList = (tagValues || [])?.filter((i) => i?.id !== v?.id) || [];
                                    setTagValues(filterList);
                                }}
                            >
                                {v?.time}
                            </Tag>
                        );
                    })
                }
            </div>
            <TimePicker
                open={open}
                format={'HH:mm'}
                onOpenChange={() => setOpen(false)}
                style={{ opacity: 0, zIndex: -1, position: 'absolute', top: 6 }}
                popupStyle={{ zIndex: 1000 }}
                onChange={(v) => {
                    const time = dayjs(v).format('HH:mm');
                    setTagValues([...tagValues, { time, id: uuid() }]);
                    setOpen(false);
                }}
            />
        </div>
    );
}






