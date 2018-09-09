import { bind, wire, Component } from 'hypermorphic';
import { p } from './TableSortablePropFactory';

class TableSortableFooter extends Component {
  render() {
    return this.html`
      <tfoot>
        <tr><th colspan="2" class="text-right">Total: ${(p.props.data).length}</th></tr>
      </tfoot>
    `;
  }
}

export {
  TableSortableFooter
};
