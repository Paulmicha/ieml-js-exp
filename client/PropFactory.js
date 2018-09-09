import { compose, withProps, withState } from 'proppy';

const P = compose(
  withProps({id: 'myid'}),
  withState('sorted', 'setSorted'),
  withState('asc', 'setAsc', false),
  withState('data', 'setData', [{
      label: 'one',
      value: 1
    }, {
      label: 'two',
      value: 2
    }, {
      label: 'three',
      value: 3
    }]
  )
);

const p = P();

export {
  p
}
