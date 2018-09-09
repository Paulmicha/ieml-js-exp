import { bind, wire, Component } from 'hypermorphic';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
import { p } from './PropFactory';


class Table extends Component {
  constructor() {
    super();
    //new body
    this.body = new Body();
    p.subscribe((props) => {
      this.render()
    })
  }
  render() {
    return this.html`
      <table id="${p.props.id}" class="table table-striped table-bordered table-sm">
        ${new Header}
        ${new Footer}
        ${this.body.render()}
      </table>
    `;
  }
}

export {
  Table
};
