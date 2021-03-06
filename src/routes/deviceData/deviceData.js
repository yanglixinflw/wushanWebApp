import React, { Component ,Fragment} from 'react';
import DeviceData from '../../components/DeviceData/deviceData';
import { connect } from 'dva';
import { Spin } from 'antd';
import { parse } from 'qs';
import {getMenuData} from '../../common/menu'
import { urlToList } from '../../components/_utils/pathTools';
@connect(({ deviceData, loading }) => ({
    deviceData,
    loading: loading.models.deviceData,
}))
export default class extends Component {
    constructor(props){
        super(props)
        this.state={
            deviceTypeId:''
        }
    }
    componentDidMount() {
        // 初始化
        const deviceTypeId = parse(window.location.href.split(':'))[3]
        // console.log(deviceTypeId)
        const { dispatch } = this.props;
        dispatch({
            type: 'deviceData/fetch',
            payload: {
                 deviceTypeId,
                "deviceId": "",
                "name": "",
                "installAddrId":"",
                "showColumns": [],
                "pageIndex": 0,
                "pageSize": 10
            }
        });
        // 获取安装地列表
        dispatch({
        type: 'deviceData/getInstallAddrList',
        })
        // 获取name
        let pathName=this.props.location.pathname
        const pathSnippets = urlToList(pathName);
        let breadcrumbData = getMenuData().filter(
            (item) => {
            let res = item.children.filter(item => item.path.indexOf(pathSnippets[0])!==-1);
            if(res.length){
                return item
            }
            }
        )
        // 获取到匹配的children
        let childrenName=breadcrumbData[0].children
        // 匹配到name
        let title=childrenName.filter(item=>item.path===pathName)
        // console.log(title[0].name)
        this.setState({
            deviceTypeId,
            pageTitle:title[0].name
        })
        this._getTitle()
    }
    // 获取title
    _getTitle(){
        const deviceTypeId = parse(window.location.href.split(':'))[3]
        const { dispatch } = this.props;
        dispatch({
            type: 'deviceData/fetchTitle',
            payload: {
                deviceTypeId,
            }
        });
    }
    componentWillUpdate(nextProps) {
        // 根据不同的设备ID获取不同的数据
        if (this.props.location !== nextProps.location) {
            // 路由变化
            const { dispatch } = this.props;
            const deviceTypeId = parse(window.location.href.split(':'))[3]
            dispatch({
                type: 'deviceData/clear',
            })
            dispatch({
                type: 'deviceData/fetchTitle',
                payload: {
                    "deviceTypeId": deviceTypeId,
                }
            });
            dispatch({
                type: 'deviceData/fetch',
                payload: {
                    "deviceTypeId": deviceTypeId,
                    "deviceId": "",
                    "name": "",
                    "installAddrId": '',
                    "showColumns": [],
                    "pageIndex": 0,
                    "pageSize": 10
                }
            });
            // 获取安装地列表
            dispatch({
            type: 'deviceData/getInstallAddrList',
            })
            // 获取name
            let pathName = nextProps.location.pathname
            const pathSnippets = urlToList(pathName);
            let breadcrumbData = getMenuData().filter(
                (item) => {
                    let res = item.children.filter(item => item.path.indexOf(pathSnippets[0]) !== -1);
                    if (res.length) {
                        return item
                    }
                }
            )
            // 获取到匹配的children
            let childrenName = breadcrumbData[0].children
            // console.log(childrenName)
            // 匹配到name
            let title = childrenName.filter(item => item.path === pathName)
            // console.log(title[0].name)
            this.setState({
                deviceTypeId,
                pageTitle:title[0].name
            })
        }
    }
    render() {
        let { deviceData, loading } = this.props;
        let {deviceTypeId,pageTitle}=this.state
        let arr = Object.keys(deviceData);
        if (arr.length <= 2) return false;
        if(!deviceTypeId&&!pageTitle) {
            return false
        }
        return (
            <Fragment>
                <Spin size='large' spinning={loading}>
                    <DeviceData
                    {...{...deviceData,deviceTypeId,pageTitle}}
                    />
                </Spin>
            </Fragment>
        )

    }
}