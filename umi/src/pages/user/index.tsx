import { PageContainer } from '@ant-design/pro-components';
import { Outlet } from '@umijs/max';
export default function Page() {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  )
}
