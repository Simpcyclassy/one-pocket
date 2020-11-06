import React from 'react';
import { Table, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

const Statements = () => {
  const dispatch = useDispatch();
  const { dataSource } = useSelector(state => state.statements);
  const { code } = useSelector(state => state.monoConnect);
  const value = {
    code
  }

  const columns = [
    {
        width: '10%',
        dataIndex: 'type',
        key: 'type',
        title: 'Transaction type',
    },
    {
        width: '15%',
        dataIndex: 'date',
        key: 'date',
        title: 'Transaction Date',
    },
    {
      width: '15%',
      dataIndex: 'amount',
      key: 'amount',
      title: 'NGN Amount',
    },

    {
        width: '20%',
        dataIndex: 'narration',
        key: 'narration',
        title: 'Narration',
    },
];
  return (
      <div className="card_background">
        <Table
            columns={columns}
            dataSource={dataSource}
            size="middle"
            scroll={{ x: 1000, y: 350 }}
          />
    </div>
  );
}

export default Statements;
