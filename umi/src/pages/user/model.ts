import { useRequest } from 'ahooks';
import { getUser } from '@/services/user';

export default () => {
  /**
   * data 接口返回的数据
   * loading请求中为true,请求前后为false
   * refresh 调用此方法可以重新发起请求，刷新data
   */
  const { data, loading, refresh } = useRequest<API.Data<API.User>, any>
    (getUser);
  return {
    data,
    refresh,
    loading
  }
}