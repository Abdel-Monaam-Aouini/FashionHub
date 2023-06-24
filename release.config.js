module.exports = {
  branches: ["master"],
  release: {
    verifyConditions: ["@semantic-release/github"],
    publish: ["@semantic-release/github"],
  },
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: [
          "CHANGELOG.md",
          "dist/**",
          "package.json",
          "package-lock.json",
        ],
        message:
          "chore(release): set version to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
