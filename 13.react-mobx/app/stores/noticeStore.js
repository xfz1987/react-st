import { observable, action, useStrict, runInAction, toJS } from 'mobx';
import hostUser from './hostUseStore.js';
import http from '../common/utils/http.js';

useStrict(true);

class Notice {
    @observable noticeList = [];
    @action init = () => {
        hostUser.user && this.getNoticeList();
    }
    @action getNoticeList = async () => {
        alert(`用户 ${hostUser.user.name} 上线啦`);
        const data = await http.get('mock/noticeList.json');
        runInAction(() => {
            this.noticeList = data;
        });
    };
}

export default new Notice();