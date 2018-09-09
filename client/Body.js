import { bind, wire, Component } from 'hypermorphic';
import { p } from './PropFactory';

class Body extends Component {
  render() {
    return this.html`
      <tbody>
        ${(p.props.data).map(obj => wire(obj) `<tr><td>${obj.label}</td><td>${obj.value}</td></tr>`)}
      </tbody>
    `;
  }
}

export {
  Body
};
