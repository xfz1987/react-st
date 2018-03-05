# npm install
# npm start

## 组件间通信
> 使用了pubsub-js
> 用法如下
```
import Pubsub from 'pubsub-js';
//组件A，订阅事件(建立监听)
PubSub.subscribe('PLAY_MUSIC', (msg, item) => {
    this.playMusic(item);
});
//组件B，事件发布(事件触发)
PubSub.publish('PLAY_MUSIC', item);
```