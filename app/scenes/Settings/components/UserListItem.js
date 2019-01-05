// @flow
import * as React from 'react';
import styled from 'styled-components';

import UserMenu from 'menus/UserMenu';
import Avatar from 'components/Avatar';
import ListItem from 'components/List/Item';
import Time from 'shared/components/Time';
import User from 'models/User';

type Props = {
  user: User,
  showMenu: boolean,
};

const UserListItem = ({ user, showMenu }: Props) => {
  return (
    <ListItem
      key={user.id}
      title={user.name}
      image={<Avatar src={user.avatarUrl} size={40} />}
      subtitle={
        <React.Fragment>
          {user.email ? `${user.email} · ` : undefined}
          <Time dateTime={user.createdAt} /> 前加入
          {user.isAdmin && <Badge admin={user.isAdmin}>管理员</Badge>}
          {user.isSuspended && <Badge>已冻结</Badge>}
        </React.Fragment>
      }
      actions={showMenu ? <UserMenu user={user} /> : undefined}
    />
  );
};

const Badge = styled.span`
  margin-left: 10px;
  padding: 2px 6px 3px;
  background-color: ${({ admin, theme }) =>
    admin ? theme.primary : theme.smokeDark};
  color: ${({ admin, theme }) => (admin ? theme.white : theme.text)};
  border-radius: 2px;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  user-select: none;
`;

export default UserListItem;
