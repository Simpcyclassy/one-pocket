import React from 'react';
import { Card, Col, Row, Typography, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { accountRequest } from '../actions';

const { Title } = Typography;
const Accounts = () => {
  const dispatch = useDispatch();
  const {
    name,
    accountNumber,
    currency,
    balance,
    type,
    institutionName
  } = useSelector(state => state.accounts);
  const { code } = useSelector(state => state.monoConnect);
  const value = {
    "code": code
  }

  const handleSubmit = () => {
    dispatch(accountRequest(value));  
  };
  return (
      <div className="card_background">
      <Row type="flex" justify="center" align="middle">
          <Col xs={18} md={12} lg={8}>
              <Card
                className="center_card"
                actions={[
                  !accountNumber && (<Button
                      size="large"
                      shape="round"
                      type="primary"
                      onClick={() => handleSubmit()}
                    >
                      Show Account
                  </Button>)
                ]}
              >
                  <Title level={2}>
                      {`Welcome ${name}`}
                  </Title>
                  <p>{`Account number: ${accountNumber}`}</p>
                  <p>{`Balance: ${currency} ${balance}`}</p>
                  <p>{type}</p>
                  <p>{institutionName}</p>
              </Card>
          </Col>
      </Row>
    </div>
  );
}

export default Accounts;
