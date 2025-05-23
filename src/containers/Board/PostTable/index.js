import React from 'react';
import PropTypes from 'prop-types';
import { Table, Avatar } from 'antd';
import urljoin from 'url-join';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Text',
    dataIndex: 'text',
    key: 'text',
    render: text => <pre style={{ marginBottom: 0, maxHeight: 100 }}>{text}</pre>,
  },
  {
    title: 'Photo',
    dataIndex: 'photo',
    key: 'photo',
    render: photo =>
      photo ? (
        <Avatar src={`${urljoin(process.env.REACT_APP_BASE_URL, photo)}`} shape="square" />
      ) : (
        <Avatar icon="file-image" shape="square" />
      ),
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: time => <span>{time}</span>,
  },
  {
    title: 'Updated At',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    render: time => <span>{time}</span>,
  },
];

function PostTable(props) {
  return (
    <Table
      dataSource={props.postList}
      columns={columns}
    />
  )
}

PostTable.propTypes = {
  postList: PropTypes.array,
};

export default PostTable;
