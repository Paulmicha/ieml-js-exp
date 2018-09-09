const hyperHTML = require('hyperhtml/cjs');

// TODO [wip] Match component path -> component (view) ?
const asyncRenderView = (componentNamePath, wire, model) =>
  import(`../components/${componentNamePath}.js`).then(renderFn => renderFn(wire, model));

const view = {
  about: (wire, model) => asyncRenderView('about', wire, model),
};

const wire = {
  main: hyperHTML.bind(document.querySelector('main'))
};

module.exports = {
  main: (model) => wire.main`${model}`,

  about: (model) => view.about(
    wire.main,
    model
  )
};
