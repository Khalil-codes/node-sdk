import { CoreSdk } from '../types';
import withUser from './user';
import withTenant from './tenant';
import withJWT from './jwt';
import withPermission from './permission';

/** Constructs a higher level Management API that wraps the functions from code-js-sdk */
const withManagement = (sdk: CoreSdk, managementKey?: string) => ({
  user: withUser(sdk, managementKey),
  tenant: withTenant(sdk, managementKey),
  jwt: withJWT(sdk, managementKey),
  permission: withPermission(sdk, managementKey),
});

export default withManagement;
