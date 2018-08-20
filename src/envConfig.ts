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

const baseConfig = require("./config/baseConfig").baseConfig;
const overridingConfig = require(`./config/${env}Config`)[`${env}Config`];
const config: Partial<configType> = baseConfig;
Object.assign(config, baseConfig, overridingConfig);
config.env = env;

export default config;