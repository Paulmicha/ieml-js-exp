// client side, ESM
// See https://github.com/WebReflection/hypermorphic

import './style.css';
import { bind } from 'hypermorphic';
import { Table } from './Table';

bind(document.body)`${new Table()}`;
