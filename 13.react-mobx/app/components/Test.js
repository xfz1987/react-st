import React from 'react';
import { observer } from 'mobx-react';
import hostUser from '../stores/hostUseStore.js';

@observer
export default class Test extends React.Component {
   	render() {
        return (
          <div>我与User共享数据，用户ID: { hostUser.userId }</div>
        )
    }
}