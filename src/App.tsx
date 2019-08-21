import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';
import {
  Layout,
} from 'antd';
import './App.css';
import { HeaderContainer, SiderContainer } from './containers';
import { StartPage, EURPage, USDPage, RURPage } from './pages';

const App = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <Router>
      <Layout
        style={{ minHeight: '100vh', background: '#fff' }}
      >
        <SiderContainer
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <Layout>
          <HeaderContainer
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          />
        <Route exact={true} path='/' component={StartPage}/>
        <Route path='/USD' component={USDPage}/>
        <Route path='/EUR' component={EURPage}/>
        <Route path='/RUR' component={RURPage}/>

        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
