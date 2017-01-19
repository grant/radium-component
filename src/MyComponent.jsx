import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';

/**
 * A custom component.
 */
@Radium
export default class MyComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return <div style={{
      color: 'blue'
    }}>
      <div>My Blue Component</div>
    </div>;
  }
}
