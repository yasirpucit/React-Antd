import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Input, Icon, Upload } from 'antd';

const { TextArea } = Input;
function WritePostModal(props) {
  return (
    <Modal
      title="Write a Post"
      visible={props.modalVisible}
      onOk={props.postPosts}
      confirmLoading={props.modalLoading}
      onCancel={props.handleModalCancel}
    >
      <div style={{ marginBottom: 16 }}>
        <Input placeholder="Title" onChange={props.onChangeTitle} value={props.title} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <TextArea rows={4} placeholder="Write some text..." onChange={props.onChangeText} value={props.text} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Upload
          onRemove={props.onChangeDelPhoto}
          beforeUpload={props.onChangeAddPhoto}
          fileList={props.photo}
          accept="image/*"
        >
          <Button>
            <Icon type="upload" /> Select a Photo
          </Button>
        </Upload>
      </div>
    </Modal>
  );
}

WritePostModal.propTypes = {
  modalVisible: PropTypes.bool,
  modalLoading: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  photo: PropTypes.array,
  postPosts: PropTypes.func,
  handleModalCancel: PropTypes.func,
  onChangeTitle: PropTypes.func,
  onChangeText: PropTypes.func,
  onChangeAddPhoto: PropTypes.func,
  onChangeDelPhoto: PropTypes.func,
};

export default WritePostModal;
