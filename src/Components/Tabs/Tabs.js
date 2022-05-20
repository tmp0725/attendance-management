import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Tabs.css';
import Card from '../Card/Card';
import Calendars from '../Calendars/Calendars';

export default () => (
  <>
    <Tabs>
      <TabList>
        <Tab>Attendance Cards</Tab>
        <Tab>Calendar</Tab>
      </TabList>

      <TabPanel>
        <div className="Position">
          <h3>Director</h3>
        </div >
        <div className="Card">
          <Card name="Test user" />
          <Card name="Test user" />
        </div>
      </TabPanel>

      <TabPanel>
        <Calendars />
      </TabPanel>
    </Tabs>
  </>
);