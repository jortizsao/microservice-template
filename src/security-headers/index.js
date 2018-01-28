import compose from 'lodash.compose';
import DnsPrefetchControl from './dns-prefetch-control';
import Frameguard from './frameguard';

const dnsPrefetchControl = DnsPrefetchControl({ allow: false });
const frameguard = Frameguard();

export default () => compose(frameguard, dnsPrefetchControl);
