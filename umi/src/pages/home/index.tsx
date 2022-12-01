import { Link, history, useNavigate } from '@umijs/max'
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
export default function Page() {
  //此hooks来自于react-router-domV6
  const navigate = useNavigate();
  return (
    <PageContainer>
      <h1 className={`text-lg text-red-600`}>首页</h1>
      <Link to="/profile">个人中心</Link>
      <Button type="primary" onClick={() => history.push('/profile')}>个人中心</Button>
      <Button type="dashed" onClick={() => navigate('/profile')}>个人中心</Button>
    </PageContainer>
  );
}
