const getEnv = require("get-env");

const env = getEnv({
    staging: "staging",
    test: ["test", "testing"],
    dev: ["development", "dev", "develop"],
    prod: ["production", "prod"]
});

export type configType = {
    env: string,
    name: string,
    port: number,
    version?: string
};

const baseConfig = require("../config/baseConfig.json");
const overridingConfig = require(`../config/${env}Config`);

const config: configType = baseConfig;
Object.assign(config, baseConfig, overridingConfig);
config.env = env;

export default config;