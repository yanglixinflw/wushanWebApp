import { getValveList } from '../services/api';
export default {
  namespace: 'valveControl',
  state: {},
  effects: {
    *fetch({ payload }, { call, put }) {
      const data = yield call(getValveList, payload)
      yield put({ type: 'fetchOk', payload: data })
    },
    *fetchWell({ payload }, { call, put }) {
      const data = yield call(getValveList, payload)
      yield put({ type: 'fetchWellOk', payload: data })
    },
  },

  reducers: {
    fetchOk(state, { payload }) {
      return { ...state, ...payload }
    },
    fetchWellOk(state, { payload }) {
      state.wellEle = payload
      return {...state}
    }
  }
}