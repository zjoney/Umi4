enum RoleCodes {
  root = 'root',//超级管理员
  admin = 'admin',//普通管理员
  member = 'member'//普通会员
}
const ROLES = [
  {
    code: RoleCodes.root,
    name: '超级管理员'
  },
  {
    code: RoleCodes.admin,
    name: '普通管理员'
  },
  {
    code: RoleCodes.member,
    name: '普通会员'
  }
]
export {
  ROLES,
  RoleCodes
}