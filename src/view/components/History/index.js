import React from 'react';
import './style.scss';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';

const groups = [
  { id: 1, title: 'group 1' },
  { id: 2, title: 'group 2' },
  { id: 3, title: 'group 3' },
  { id: 4, title: 'group 4' },
  { id: 5, title: 'group 5' },
  { id: 6, title: 'group 6' },
  { id: 7, title: 'group 7' },
]
const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment(),
    end_time: moment().add(5, 'hour')
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-12, 'hour'),
    end_time: moment().add(12, 'hour')
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment().add(6, 'hour'),
    end_time: moment().add(9, 'hour')
  }
]

export default (props) => {
  return (
    <div id='history'>
      <div className='atmosphere'></div>
      <div className='concrete'>
        <p className='caption'>
          歩み。
        </p>
        <div className='contents'>
          <br />
          〜覚書〜<br />
          仕事の履歴を表で作る<br />
          なるべくシンプルに作る<br />
          ガントチャートだといい感じになる？実験中<br />
          <br />
          <br />
          <br />
          <ul>
            <li>zzz</li>
            <li>yyy</li>
            <li>xxx</li>
            <li>www</li>
            <li>vvv</li>
          </ul>
          <div className='gnchart' >
            <Timeline
              groups={groups}
              items={items}
              defaultTimeStart={moment().add(-12, 'hour')}
              defaultTimeEnd={moment().add(12, 'hour')}
            />
          </div>
          <br />
          <br />
          <br />          
        </div>
      </div>
      <div className='subtitle'>History</div>
    </div>
  );
};