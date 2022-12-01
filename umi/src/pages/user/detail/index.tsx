import { useLocation } from '@umijs/max';
import { Descriptions } from 'antd';
export default function () {
  const location = useLocation();
  let user = location.state as API.User;
  return (
    <Descriptions>
      <Descriptions.Item label="用户ID">{user.id}</Descriptions.Item>
      <Descriptions.Item label="用户名">{user.username}</Descriptions.Item>
      <Descriptions.Item label="手机号">{user.phone}</Descriptions.Item>
    </Descriptions>
  )
}
