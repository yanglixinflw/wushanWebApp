import { queryWarningDetail,getUserList } from '../services/api';
export default {
    namespace: 'warningDetail',
    state:{},
    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
          const data = yield call(queryWarningDetail, payload)
          yield put({ type: 'fetchOk', payload: data })
        //   console.log('connect成功')
        },
        // 获取通知人列表
        *getUserList({payload},{call,put}){
          const list =yield call(getUserList,payload)
          yield put ({
              type:'fetchUserlList',
              payload:list
          })
        }
      },
      reducers: {
        fetchOk (state, { payload }) {
          return { ...state, ...payload }
        },
        fetchUserlList(state,{payload}){
          state.userList = payload
          return {...state}
        }
      }
}