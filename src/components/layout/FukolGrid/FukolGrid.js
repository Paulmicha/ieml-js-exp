import { bind, wire, Component } from 'hypermorphic';

class FukolGrid extends Component {
  render() {
    // TODO [wip] how to load template markup from :
    // src/components/layout/FukolGrid/FukolGrid.html ?
    return this.html`
      <ul class="o-fukol-grid">
        ${(model.items).map(obj => wire(obj) `<li>${obj.content}</li>`)}
      </ul>
    `;
  }
}

export {
  FukolGrid
};
