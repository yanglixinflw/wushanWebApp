import React from "react";
import AutoControl from '../../components/distributedControl/autoControl';
// import { connect } from 'dva';
// import { Spin } from 'antd'
// @connect(({ autoControl, loading }) => ({
//     autoControl,
//     loading: loading.models.autoControl
// }))
export default class extends React.Component{
    componentDidMount() {
        // const { dispatch } = this.props;
        // dispatch({
        //     type: 'autoControl/fetch',
        //     payload:{
        //         "name": "",
        //         "mobile": "",
        //         "roleId": 0,
        //         "pageIndex": 0,
        //         "pageSize":10
        //       }
        // });//type来选择请求的接口，payload为传给后台的参数
        // console.log(this.props)
    }
    render(){
        // let { autoControl, loading } = this.props;
        // let arr = Object.keys(autoControl);
        // if (arr.length === 0) return farmersInfo = null;
        return (
            <div>
                {/* <Spin size='large' spinning={loading}> */}
                    <AutoControl
                        // {...this.props}
                    /> 
                {/* </Spin> */}
            </div>
        )
    }
}