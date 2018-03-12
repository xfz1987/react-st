import React from 'react';
import { observer } from 'mobx-react';
import hostUser from '../stores/hostUseStore.js';

@observer
export default class User extends React.Component {
   	render() {
        return (
          <div> { hostUser.user.name } - { hostUser.user.email } </div>
        )
    }
}