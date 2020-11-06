import React from 'react';
import { Form, Input, Button, Typography, Card, Col, Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { verificationRequest } from '../actions';
const { Title } = Typography;

const Verifications = () =>{

  const dispatch = useDispatch();
  const { isLoading, error  } = useSelector(state => state.verifications);
  const handleSubmit = (values) => {
    const signinValues = {
      firstname: values.firstname,
      surname: values.surname,
      phone: values.phone,
      email: values.email,
      frsc: values.frsc,
      dob: values.dob,
      callbackURL: values.callbackURL,
    };
    dispatch(verificationRequest(signinValues));
  };

  const handleFailure = (err) => {
    err = error
    console.log(err)
  }

  return (
    <div className="card_background">
      <Row type="flex" justify="center" align="middle">
          <Col xs={18} md={12} lg={8}>
              <Card className="center_card">
                  <Title level={2}>
                      BVN VERIFICATION
                  </Title>
                  <Form
                    name="signin"
                    onFinish={handleSubmit}
                    onFinishFailed={handleFailure}
                    initialValues={{
                      remember: true,
                    }}
                  >
                    <Form.Item
                      label="Firstname"
                      name="firstname"
                      rules={[{ required: true, message: 'Please input your firstname!' }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Surname"
                      name="surname"
                      rules={[{ required: true, message: 'Please input your surname!' }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Phone number"
                      name="phone"
                      rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="FRSC"
                      name="frsc"
                      rules={[{ required: true, message: 'Please input your frsc!' }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Date of Birth"
                      name="dob"
                      rules={[{ required: true, message: 'Please input your date of birth!' }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="callbackURL"
                      name="callbackURL"
                      rules={[{ required: true, message: 'Please input your callbackURL!' }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        shape="round"
                        loading={isLoading}
                      >
                        Sign in
                      </Button>
                    </Form.Item>
                  </Form>
              </Card>
          </Col>
      </Row>
    </div>
  );
}

export default Verifications;
