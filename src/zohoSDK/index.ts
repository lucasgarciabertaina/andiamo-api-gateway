require('dotenv').config()
const {
  USER_EMAIL,
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
  REDIRECT_URL,
} = process.env;

const {MasterModel: ZohoCRM} = require( "@zohocrm/nodejs-sdk-2.0/routes/initializer");
const UserSignature = require( "@zohocrm/nodejs-sdk-2.0/routes/user_signature").UserSignature;
const AUDataCenter = require( "@zohocrm/nodejs-sdk-2.0/routes/dc/au_data_center").AUDataCenter;
// const {AUDataCenter} = require( "@zohocrm/nodejs-sdk-2.0/routes/dc/au_data_center");
const {OAuthToken} = require( "@zohocrm/nodejs-sdk-2.0/models/authenticator/oauth_token");
const FileStore = require( "@zohocrm/nodejs-sdk-2.0/models/authenticator/store/file_store").FileStore;
// const RequestProxy = require("@zohocrm/nodejs-sdk-2.0/routes/request_proxy").RequestProxy;
const {SDKConfigBuilder} = require("@zohocrm/nodejs-sdk-2.0/routes/sdk_config_builder");
const {Levels} = require("@zohocrm/nodejs-sdk-2.0/routes/logger/logger");
const {LogBuilder} = require("@zohocrm/nodejs-sdk-2.0/routes/logger/log_builder");
const RESOURCE_PATH = `${__dirname}/..`;

export default class Zoho {
  static async initialize() {
  try {
    const user = new UserSignature(USER_EMAIL);
    const environment = AUDataCenter.PRODUCTION();

    const grantToken = null;

    const token = new OAuthToken(
      CLIENT_ID,
      CLIENT_SECRET,
      grantToken,
      REFRESH_TOKEN,
      REDIRECT_URL,
    );

    const tokenStore = new FileStore(`${__dirname}/../../documents/nodejssdk-tokens.txt`);

    const sdkConfig = new SDKConfigBuilder()
      .pickListValidation(false)
      .autoRefreshFields(true)
      .build();

    const logger = new LogBuilder()
      .level(Levels.INFO)
      .filePath(`${__dirname}/../../documents/nodejs_sdk_log.log`)
      .build();

    console.log('ZohoCRM before init =>', ZohoCRM);

    await ZohoCRM.initialize(
      user,
      environment,
      token,
      tokenStore,
      sdkConfig,
      RESOURCE_PATH,
      logger,
    );

    console.log('ZohoCRM after init =>', ZohoCRM.LOCAL);

    } catch(e) {
      console.log('ERRORINIO', e);
    }
  }
}
