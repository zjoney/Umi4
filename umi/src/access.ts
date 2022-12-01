import { RoleCodes } from '@/constants';
export default function (initialState) {
  const currentRole = initialState?.currentUser?.role;
  console.log('currentRole', currentRole);
  console.log('[RoleCodes.root, RoleCodes.admin, RoleCodes.member]', [RoleCodes.root, RoleCodes.admin, RoleCodes.member]);
  return {
    rootCan: currentRole === RoleCodes.root,
    adminCan: [RoleCodes.root, RoleCodes.admin].includes(currentRole),
    memberCan: [RoleCodes.root, RoleCodes.admin, RoleCodes.member].includes(currentRole),
  };
}