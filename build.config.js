import { resolve } from 'node:path';
import CSSLoader from 'bun-loader-css';
import YamlLoader from 'bun-loader-yaml';

const isRelease = Bun.env.BUN_ENV === 'production';

const PROJECT_ROOT = import.meta.dir;
const SRC_DIR = resolve(PROJECT_ROOT, 'src');
const DIST_DIR = resolve(PROJECT_ROOT, 'dist');

const checkEnvOn = (env) => ['yes', 'on', 'enable'].indexOf(`${env}`.toLowerCase()) !== -1;
const checkEnvOff = (env) => ['no', 'off', 'disable'].indexOf(`${env}`.toLowerCase()) === -1;

export default {
  entrypoints: [resolve(SRC_DIR, 'index.js')],
  root: SRC_DIR,
  outdir: DIST_DIR,
  minify: isRelease,
  naming: {
    asset: 'assets/[name]-[hash].[ext]',
  },
  plugins: [CSSLoader(), YamlLoader()],
  define: {
    DEVELOPMENT: JSON.stringify(Bun.env.BUN_ENV !== 'production'),
    IDEAL: JSON.stringify(checkEnvOn(Bun.env.IDEAL)), // default off
  },
  external: [
    'preact',
    'preact/hooks',
    `preact/jsx-${isRelease ? '' : 'dev-'}runtime`,
    '@blockcode/core',
    '@blockcode/ui',
  ],
};
