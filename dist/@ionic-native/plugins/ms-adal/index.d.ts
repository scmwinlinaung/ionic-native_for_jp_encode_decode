import { IonicNativePlugin } from '@ionic-native/core';
export interface AuthenticationResult {
    accessToken: string;
    accessTokenType: string;
    expiresOn: Date;
    idToken: string;
    isMultipleResourceRefreshToken: boolean;
    status: string;
    statusCode: number;
    tenantId: string;
    userInfo: UserInfo;
    /**
     * Creates authorization header for web requests.
     * @returns {String} The authorization header.
     */
    createAuthorizationHeader(): string;
}
export interface TokenCache {
    clear(): void;
    readItems(): Promise<TokenCacheItem[]>;
    deleteItem(item: TokenCacheItem): void;
}
export interface TokenCacheItem {
    accessToken: string;
    authority: string;
    clientId: string;
    displayableId: string;
    expiresOn: Date;
    isMultipleResourceRefreshToken: boolean;
    resource: string;
    tenantId: string;
    userInfo: UserInfo;
}
export interface UserInfo {
    displayableId: string;
    userId: string;
    familyName: string;
    givenName: string;
    identityProvider: string;
    passwordChangeUrl: string;
    passwordExpiresOn: Date;
    uniqueId: string;
}
/**
 * @name MS ADAL
 * @description
 * Active Directory Authentication Library (ADAL) plugin.
 * Active Directory Authentication Library ([ADAL](https://docs.microsoft.com/en-us/dotnet/api/microsoft.identitymodel.clients.activedirectory?view=azure-dotnet))
 * plugin provides easy to use authentication functionality for your Apache Cordova apps by taking advantage of
 * Windows Server Active Directory and Windows Azure Active Directory. Here you can find the source code for the library.
 * @usage
 * ```typescript
 * import { MSAdal, AuthenticationContext, AuthenticationResult } from '@ionic-native/ms-adal/ngx';
 *
 *
 * constructor(private msAdal: MSAdal) {}
 *
 * ...
 *
 * let authContext: AuthenticationContext = this.msAdal.createAuthenticationContext('https://login.windows.net/common');
 *
 * authContext.acquireTokenAsync('https://graph.windows.net', 'a5d92493-ae5a-4a9f-bcbf-9f1d354067d3', 'http://MyDirectorySearcherApp')
 *   .then((authResponse: AuthenticationResult) => {
 *     console.log('Token is' , authResponse.accessToken);
 *     console.log('Token will expire on', authResponse.expiresOn);
 *   })
 *   .catch((e: any) => console.log('Authentication failed', e));
 *
 *
 * ```
 *
 * @classes
 * AuthenticationContext
 * @interfaces
 * AuthenticationResult
 * TokenCache
 * TokenCacheItem
 * UserInfo
 */
export declare class MSAdalOriginal extends IonicNativePlugin {
    createAuthenticationContext(authority: string, validateAuthority?: boolean): AuthenticationContext;
}
/**
 * @hidden
 */
export declare class AuthenticationContext {
    private _objectInstance;
    authority: string;
    validateAuthority: boolean;
    tokenCache: any;
    constructor(_objectInstance: any);
    /**
     * Acquires token using interactive flow. It always shows UI and skips token from cache.
     *
     * @param   {String}  resourceUrl Resource identifier
     * @param   {String}  clientId    Client (application) identifier
     * @param   {String}  redirectUrl Redirect url for this application
     * @param   {String}  userId      User identifier (optional)
     * @param   {String}  extraQueryParameters
     *                                Extra query parameters (optional)
     *                                Parameters should be escaped before passing to this method (e.g. using 'encodeURI()')
     * @param   {String}  claims      Claim parameter. Parameter should be used under conditional access scenarios (optional)
     * @returns {Promise} Promise either fulfilled with AuthenticationResult object or rejected with error
     */
    acquireTokenAsync(resourceUrl: string, clientId: string, redirectUrl: string, userId?: string, extraQueryParameters?: any, claims?: string): Promise<AuthenticationResult>;
    /**
     * Acquires token WITHOUT using interactive flow. It checks the cache to return existing result
     * if not expired. It tries to use refresh token if available. If it fails to get token without
     * displaying UI it will fail. This method guarantees that no UI will be shown to user.
     *
     * @param   {String}  resourceUrl Resource identifier
     * @param   {String}  clientId    Client (application) identifier
     * @param   {String}  userId      User identifier (optional)
     * @returns {Promise} Promise either fulfilled with AuthenticationResult object or rejected with error
     */
    acquireTokenSilentAsync(resourceUrl: string, clientId: string, userId?: string): Promise<AuthenticationResult>;
}
export declare class AuthenticationSettings {
    /**
     * Sets flag to use or skip authentication broker.
     * By default, the flag value is false and ADAL will not talk to broker.
     *
     * @param useBroker Flag to use or skip authentication broker
     *
     * @returns {Promise} Promise either fulfilled or rejected with error
     */
    static setUseBroker(useBroker: boolean): Promise<void>;
}

export declare const MSAdal: MSAdalOriginal;