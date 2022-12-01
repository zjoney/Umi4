import { PageContainer } from '@ant-design/pro-components';
import { Button, Descriptions } from 'antd';
import { useModel, history } from '@umijs/max';
export default function Page() {
  const { initialState, setInitialState } = useModel('@@initialState');
  const logout = () => {
    localStorage.removeItem('token');
    setInitialState({ currentUser: null })
    history.push('/signin');
  }
  console.log('initialState', initialState);

  return (
    <PageContainer>
      <Descriptions>
        <Descriptions.Item label="用户ID">{initialState?.currentUser?.id}</Descriptions.Item>
        <Descriptions.Item label="用户名">{initialState?.currentUser?.username}</Descriptions.Item>
        <Descriptions.Item label="手机号">{initialState?.currentUser?.phone}</Descriptions.Item>
      </Descriptions>
      <Button type='primary' onClick={logout}>退出</Button>
    </PageContainer>
  );
}