const hyperHTML = require('viperhtml');

// TODO [wip] Match component path -> component (view) ?
const asyncRenderView = (namePath, wire, model) =>
  import(`../${namePath}.js`).then(renderFn => renderFn(wire, model));

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
