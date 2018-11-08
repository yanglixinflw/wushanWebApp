import { getMonitorList } from '../services/api';
export default {
    namespace: 'monitor',
    state:{},
    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
          const data = yield call(getMonitorList, payload)
          yield put({ type: 'fetchOk', payload: data })
          // console.log('connect成功')
        },
      },
    
      reducers: {
        fetchOk (state, { payload }) {
          // console.log(payload)
          return { ...state, ...payload }
        },
        clear(){
          return 1
        }
      }
}