import React from 'react';
import { render } from 'react-dom';
import { observer } from 'mobx-react';
import User from './components/User.js';
import NoticeList from './components/NoticeList.js';
import Test from './components/Test.js';
import TodoList from './components/toList';
import Footer from './components/footer';

@observer
class App extends React.Component {
    render() {
        return (
          <div>
              <User />
              <NoticeList />
              <Test />
              <hr color="red"/>
              <h1>TODO LIST</h1>
              <TodoList />
              <Footer />
          </div>
        )
    }
}

render(
    <App />,
    document.getElementById('app')
);