import { List, Button } from 'antd';
import { Link, useModel, useAccess } from '@umijs/max';
import { useRequest } from 'ahooks';
import { deleteUser } from '@/services/user';
export default function () {
  const { data, loading, refresh } = useModel('user.model');
  const { run } = useRequest(deleteUser, {
    manual: true,
    onSuccess: refresh
  });
  const access = useAccess();
  return (
    <List
      header={<div>用户列表</div>}
      footer={<div>共计{data?.list?.length}条</div>}
      bordered
      dataSource={data?.list}
      loading={loading}
      renderItem={
        (user: any) => {
          return (
            <List.Item>
              <Link
                to={`/user/detail/${user.id}`}
                state={user}
              >{user.username}</Link>
              <Button
                type="primary"
                size="small"
                disabled={!access.adminCan}
                loading={loading}
                onClick={() => run(user.id)}
              >
                删除
              </Button>
            </List.Item>
          )
        }
      }
    />
  )
}
