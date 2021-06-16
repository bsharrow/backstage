/**
 * CHANGELOG generation; exists only to exclude @backstage-namespaced package dependency bumps
 * since they're too noisy. Otherwise copied from:
 * https://github.com/atlassian/changesets/blob/main/packages/cli/src/changelog/index.ts
 */

// No changes from original source; would rather require('@changesets/cli/changelog') and re-export
// the default from there, but couldn't get that working 🤔
function getReleaseLine(changeset, type) {
  const [firstLine, ...futureLines] = changeset.summary
    .split('\n')
    .map(l => l.trimRight());

  let returnVal = `- ${
    changeset.commit ? `${changeset.commit}: ` : ''
  }${firstLine}`;

  if (futureLines.length > 0) {
    returnVal += `\n${futureLines.map(l => `  ${l}`).join('\n')}`;
  }

  return returnVal;
}

async function getDependencyReleaseLine(changesets, dependenciesUpdated) {
  // Exclude @backstage-namespaced packages from CHANGELOG; too noisy
  const externalDependenciesUpdated = dependenciesUpdated.filter(
    dep => !dep.name.startsWith('@backstage/'),
  );

  if (externalDependenciesUpdated.length === 0) return '';

  const updatedDepenenciesList = externalDependenciesUpdated.map(
    dependency => `  - ${dependency.name}@${dependency.newVersion}`,
  );

  // Return one `Updated dependencies` bullet instead of repeating for each changeset; this
  // sacrifices the commit shas for brevity.
  return ['- Updated dependencies', ...updatedDepenenciesList].join('\n');
}

module.exports = {
  getReleaseLine,
  getDependencyReleaseLine,
};
