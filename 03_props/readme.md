## props
> 就是定义在父组件标签上面的值，就是props，当props改变的时候，会引发Virtual DOM 改变，从而引起页面的重绘
> 子组件就可以使用this.props.x来枚举传入的属性
> 如果要在构造函数中使用props，constructor(props),此时系统会将props作为构造函数的第一个参数传入
> 在子组件中，props为只读，不能修改props的值，如果要修改，用state来接收

### props属性可以被验证有效性
> 安装 cnpm install --save-dev prop-types
```
import {PropTypes} from 'prop-types'; 
//组件名.propTypes
MyCompon.propTypes = {
  a: PropTypes.string.isRequired,
  b: PropTypes.number,
  c: PropTypes.string.isRequired
}
```
> 如果非要从子组件把数据返回给父组件，此时只能用奇淫技巧
> 父组件传一个函数给子组件，子组件通过传参数将数据返回给父组件的函数，父组件的函数接受参数改变父组件中的state等值
> 看起来特别像 Vue2.0 的 $emit 吧