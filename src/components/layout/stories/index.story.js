import React from 'react';

import { storiesOf } from '@storybook/react';
import Layout from '../';

const items = [
  {
    item: 'Dashboard',
    active: false,
    url: 'https://www.workray.com/en/dashboard',
  },
  {
    item: 'Jobs',
    active: false,
    url: 'https://www.workray.com/en/dashboard/jobs',
  },
  {
    item: 'Applications',
    active: false,
    url: 'https://www.workray.com/en/dashboard/applications',
  },
  {
    item: 'Career Advice',
    active: true,
    url: 'https://www.workray.com/en/dashboard/careeradvice',
  },
  {
    item: 'Services',
    active: false,
    url: 'https://www.workray.com/en/dashboard/services',
  },
  {
    item: 'Activity',
    active: false,
    url: 'https://www.workray.com/en/dashboard/activity',
  },
];

storiesOf('Test Layout', module).add('Layout Component', () => (
  <Layout navigation={items}>
    <p>
      This is where all your/our content goes once you npm install
      @workray/layout
    </p>
    <p>
      This is where all your/our content goes once you npm install
      @workray/layout
    </p>
    <p>
      This is where all your/our content goes once you npm install
      @workray/layout
    </p>
    <p>
      This is where all your/our content goes once you npm install
      @workray/layout
    </p>
    <p>
      This is where all your/our content goes once you npm install
      @workray/layout
    </p>
    <p>
      This is where all your/our content goes once you npm install
      @workray/layout
    </p>
    <p>
      This is where all your/our content goes once you npm install
      @workray/layout
    </p>
    <p>
      This is where all your/our content goes once you npm install
      @workray/layout
    </p>
    <p>
      This is where all your/our content goes once you npm install
      @workray/layout
    </p>
    <p>
      This is where all your/our content goes once you npm install
      @workray/layout
    </p>
    <p>
      This is where all your/our content goes once you npm install
      @workray/layout
    </p>
    <p>
      This is where all your/our content goes once you npm install
      @workray/layout
    </p>
    <p>
      This is where all your/our content goes once you npm install
      @workray/layout
    </p>
  </Layout>
));
