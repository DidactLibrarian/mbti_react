import React from 'react';
import { Button } from 'react-bootstrap';

function TestReady({ history }) {
  const moveToProcess = (e) => history.push('/process');
  
  return (
    <div className="index-wrapper">
      <div className="container mt-5">
        <h1>
          당신에게 어울리는 <br /> <span>히어로는</span> 누구인가요?
        </h1>
        <h6>마블 히어로로 알아보는 나의 성향 테스트</h6>
        <Button className="startbtn mt-5" variant="primary" onClick={moveToProcess}>
          테스트 시작
        </Button>
      </div>
    </div>
  );
}

export default TestReady;
