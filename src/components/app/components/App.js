import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';

const { Content } = Layout;

class App extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <Layout>
                <Content>{children}</Content>
            </Layout>
        );
    }
}

export default withRouter(App);
