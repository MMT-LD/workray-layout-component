import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options'
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

addDecorator((story) => (
  <div>
    {story()}
  </div>
));

// stories.pattern is needed here so that the glob works correctly
const loadStories = () => require(`glob-loader!./stories.pattern`);

setOptions({
  name: 'Workray stuff',
  url: '#',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: false,
  sortStoriesByKind: false,
})

configure(loadStories, module);
