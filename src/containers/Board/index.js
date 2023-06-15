import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'antd';

import WritePostModal from './WritePostModal';
import PostTable from './PostTable';
function Board() {
  console.log('\n\n\n\n board is \n\n\n\n\n');
  return (
    <>
      <Helmet>
        <title>Board</title>
        <meta name="description" content="Description of Board" />
      </Helmet>
      <WritePostModal />
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => { }}>
          Write
        </Button>
      </div>
      <PostTable />
    </>
  );
}

export default Board;
