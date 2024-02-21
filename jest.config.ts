module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/Solution/$1",
        "^@modules/(.*)$": "<rootDir>/Solution/Modules/$1"
    },
    moduleDirectories: ["node_modules", "Solution"],
    transform: {
        "^.+\\.(ts|tsx)$": ["ts-jest", {
            tsconfig: "tsconfig.json"
        }],
    },
};