import { bind, wire, Component } from 'hypermorphic';
import { p } from './PropFactory';

class Header extends Component {
  onclick(e) {
    //stop the regular link behaviour
    e.preventDefault();
    //get the current link
    const link = e.target;
    //read the attribute data-target, this will tell use how to sort the array
    const attr = link.dataset.target;
    //check if the user clicked on the same attr
    let asc = p.props.sorted === attr;
    //update sorted state
    p.props.setAsc(asc && p.props.asc ? false : asc);
    p.props.setSorted(attr);
    p.props.setData(p.props.data.sort((a, b) => (''+a[attr]).localeCompare(''+b[attr]) * (p.props.asc ? 1 : -1)));
  }
  render() {
    return this.html`
      <thead>
        <tr>
          <th><a onclick="${this}" data-target="label" href="#">Label</a></th>
          <th><a onclick="${this}" data-target="value" href="#">Value</a></th>
        </tr>
      </thead>
    `;
  }
}

export {
  Header
};
