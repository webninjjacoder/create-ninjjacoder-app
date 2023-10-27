/**
 * From root,
 * `pnpm run sync` to format all package.json files in a certain order
 *
 * `pnpm run sync:fix` to control versions of packages that are the same in every project
 */

module.exports = {
  semverRange: '^',
  source: ['package.json', 'react-apps/*/package.json'],
  // we only look at devDependencies and dependencies aka prod
  dependencyTypes: ['dev', 'prod'],

  // we control versions for packages that are the same in every project.
  versionGroups: [
    {
      label: 'sass',
      packages: ['**'],
      dependencies: ['sass'],
      dependencyTypes: ['dev'],
      pinVersion: '^1.68.0',
    },
    {
      label: 'MSK DSM packages',
      packages: ['**'],
      dependencies: [
        '@mskcc/fundamentals',
        '@mskcc/components',
        '@mskcc/icons',
        '@mskcc/carbon-react',
      ],
      dependencyTypes: ['dev', 'prod'],
      pinVersion: '^2.1.0',
    },
  ],

  // sort packages inside each of these sections
  sortAz: [
    'scripts',
    'dependencies',
    'peerDependencies',
    'devDependencies',
    'keywords',
  ],

  // the order of sections in package.json
  sortFirst: [
    'name',
    'version',
    'private',
    'description',
    'author',
    'license',
    'main',
    'module',
    'modules',
    'jsnext:main',
    'types',
    'module',
    'files',
    'exports',
    'scripts',
    'dependencies',
    'peerDependencies',
    'devDependencies',
  ],
};
