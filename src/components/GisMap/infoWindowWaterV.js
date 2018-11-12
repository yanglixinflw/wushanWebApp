import React, { Component } from 'react';
import styles from './index.less';
import { Switch } from 'antd';
// import { Link } from 'dva/router';
export default class extends Component {
    constructor(props) {
        super(props)
        //console.log(props)
        // const map = props.__map__;

        // console.log(map)
    }
    render() {
        const { isWarningMsg } = this.props;
        console.log(isWarningMsg)
        return (
            <div>
                <div className={styles.infoTitle}>
                    <p className={styles.deviceName}>设备名称</p>
                </div>
                {isWarningMsg ?
                    <div className={styles.infoContent}>
                        <p className={styles.warinngMsg}>设备网络断开，请重新连接网络</p>
                        <p className={styles.checkMore}><a>点击查看更多信息<span>>></span></a></p>
                    </div>
                    :
                    <div className={styles.infoContent}>
                        <p className={styles.labelName}>实时数据<span>0.99m3/h</span></p>
                        <p className={styles.labelName}>
                            控制开关
                        <Switch defaultChecked />
                        </p>
                        <p className={styles.checkMore}><a>点击查看更多信息<span>>></span></a></p>
                    </div>
                }
            </div>
        )
    }
}