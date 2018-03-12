import { observable, action, useStrict, runInAction, autorun, computed } from 'mobx';
import hostUser from './hostUseStore.js';
import http from '../common/utils/http.js';

useStrict(true);

class Notice {
    @observable noticeList = [];
    @action init = () => {
        console.log(hostUser);
        console.log(hostUser['user']);
        hostUser.user && this.getNoticeList();
    }
    @action getNoticeList = async () => {
        const data = await http.get('mock/noticeList.json');
        runInAction(() => {
            this.noticeList = data;
        });
    };
}

export default new Notice();