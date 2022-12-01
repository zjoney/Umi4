import { history } from '@umijs/max';
import { message, notification } from 'antd';
import { decode } from 'jsonwebtoken';

enum ErrorShowType {
  SILENT = 0,//无动作
  WARN_MESSAGE = 1,//警告
  ERROR_MESSAGE = 2,//错误
  NOTIFICATION = 3,//提示
}
const errorThrower = (res) => {
  //说明HTTP请求是成功的，但是从业务来说是出错了
  const { success, data, errorCode, showType, errorMessage } = res;
  if (!success) {
    const error: any = new Error(errorMessage);
    error.name = '业务错误';
    error.info = { errorCode, errorMessage, showType, data }
    throw error;
  }
}
const errorHandler = (error) => {
  if (error.name === '业务错误') {
    const errorInfo = error.info;
    if (errorInfo) {
      const { errorCode, errorMessage, showType } = errorInfo;
      switch (showType) {
        case ErrorShowType.SILENT:
          break;
        case ErrorShowType.WARN_MESSAGE:
          message.warn(errorMessage);
          break;
        case ErrorShowType.ERROR_MESSAGE:
          message.error(errorMessage);
          break;
        case ErrorShowType.NOTIFICATION:
          notification.open({
            message: errorCode,
            description: errorMessage
          });
        default:
          message.error(errorMessage);
          break;
      }
    } else if (error.response) {//有响应但是状态码不是200
      message.error(`响应状态码:${error.response.status}`);
    } else if (error.request) {
      message.error(`没有收到响应`);
    } else {
      message.error(`请求发送失败`);
    }
  }
}
export const request = {
  timeout: 3000,
  headers: {
    ['Content-Type']: 'application/json',
    'Accept': 'application/json',
    credential: 'include'
  },
  //错误配置
  errorConfig: {
    errorHandler,
    //抛出业务异常
    errorThrower
  },
  //请求拦截器
  requestInterceptors: [
    (url, options) => {
      options.headers = (options.headers || {})
      //每次请求接口的时候，都需要把本地存的token发回服务器
      const token = localStorage.getItem('token');
      if (token) {
        options.headers.authorization = token
      }
      return { url, options }
    }
  ],
  //响应拦截器
  responseInterceptors: [(response, options) => {
    //在就行拦截器里可以直接返回响应体里的data字段
    return response.data;// success
  }]
};
//获取初始的状态
export async function getInitialState() {
  let initialState: any = {
    currentUser: null
  }
  const token = localStorage.getItem('token');
  if (token) {
    initialState.currentUser = decode(token)
  }
  return initialState;
}
export const layout = ({ initialState }) => {
  return {
    title: 'UMI4',
    onPageChange() {
      const { currentUser } = initialState;
      if (!currentUser) {
        history.push('/signin')
      }
    }
  }
}