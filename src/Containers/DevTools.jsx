import React from 'react';
import { fromJS } from 'immutable';
import { createDevTools } from 'redux-devtools';
import FilterMonitor from 'redux-devtools-filter-actions';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const immutableSelect = (state = {}) => fromJS(state).toJS();

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-z"
    defaultIsVisible={false}
  >
    <FilterMonitor
      blacklist={[
        'EFFECT_TRIGGERED',
        'EFFECT_RESOLVED',
      ]}
    >
      <LogMonitor select={immutableSelect} />
    </FilterMonitor>
  </DockMonitor>
);

export default DevTools;
