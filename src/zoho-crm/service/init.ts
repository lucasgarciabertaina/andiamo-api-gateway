require('dotenv').config();
const {
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
} = process.env;
const ZohoImporter: Function = require('@zohocrm/nodejs-sdk-5.0/lib/index.cjs');
const location = `${__dirname}/../../../documents/nodejssdk-tokens.txt`;

export default async function init(): Promise<void> {
  const ZohoCRMClient = await ZohoImporter();

  const { USDataCenter, OAuthBuilder, InitializeBuilder: BuildSetupInitializer, FileStore } = ZohoCRMClient;

  const environment = USDataCenter.PRODUCTION();
  const token = new OAuthBuilder()
    .clientId(CLIENT_ID)
    .clientSecret(CLIENT_SECRET)
    .refreshToken(REFRESH_TOKEN)
    .build();  
  const store = new FileStore(location);

  const setupInitializer = await new BuildSetupInitializer();
  const initializer = setupInitializer
    .environment(environment)
    .token(token)
    .store(store);

  await initializer.initialize();

  return ZohoCRMClient;
}