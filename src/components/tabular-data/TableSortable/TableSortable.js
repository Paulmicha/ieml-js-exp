
// TODO [wip] Architecture evaluation stage.
// @see https://github.com/WebReflection/create-viperhtml-app

import { bind, wire, Component } from 'hypermorphic';
import { TableSortableHeader } from './TableSortableHeader';
import { TableSortableBody } from './TableSortableBody';
import { TableSortableFooter } from './TableSortableFooter';
import { p } from './TableSortablePropFactory';

class TableSortable extends Component {
  constructor() {
    super();
    this.body = new TableSortableBody();
    p.subscribe((props) => {
      this.render()
    })
  }
  render() {
    let model = p;
    model.header = new TableSortableHeader;
    model.footer = new TableSortableFooter;
    model.body = this.body.render();
    // TODO [wip] how to load template markup from :
    // src/components/tabular-data/TableSortable/TableSortable.html ?
    return this.html`
      <table id="${model.id}" class="${model.class}">
        ${model.header}
        ${model.footer}
        ${model.body}
      </table>
    `;
  }
}

export {
  TableSortable
};
