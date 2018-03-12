import React from 'react';
import noticeStore from '../stores/noticeStore.js';
import { observer } from 'mobx-react';

@observer
class NoticeList extends React.Component {
    constructor(){
        super();
        noticeStore.init();
    }
    render(){
        return (
            <ul>
              {
                 !!noticeStore.noticeList.length
                 && !this.props.show
                 && noticeStore.noticeList.map((notice, index) => <li key={ index }> { notice.subject } </li>)
              }
            </ul>
        )
    }
}

NoticeList.defaultProps = {
    show: false
};
export default NoticeList;