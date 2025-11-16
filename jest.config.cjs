module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",

    transform: {
        "^.+\\.(ts|tsx)$": "babel-jest",
    },

    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy",
    },

    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
