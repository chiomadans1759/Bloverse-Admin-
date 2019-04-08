module.exports = {
  "roots": [
    '<rootDir>/src'
  ],
  "moduleFileExtensions": [
    "js",
    "json",
    "vue"
  ],
  "transform": {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  "collectCoverage": true,
  "collectCoverageFrom": ["src/**/*.vue"],
  "coveragePathIgnorePatterns": ['/node_modules'],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.(jpg|jpeg|gif|png|mp4|mkv|avi|webm|swf|wav|mid|svg|css)$": "<rootDir>/src/__mocks__/fileMock.js",
  },
  "snapshotSerializers": [
    "<rootDir>/node_modules/jest-serializer-vue"
  ]
}