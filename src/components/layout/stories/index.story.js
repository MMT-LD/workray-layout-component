import React from 'react'

import { storiesOf } from '@storybook/react'
import Layout from '../';

storiesOf('Test Layout', module).add('Layout Component', () => (
  <Layout>
    <div>This is a child or main</div>
  </Layout>
))
