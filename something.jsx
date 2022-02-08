import {Auth} from '@aws-amplify/auth';
import config from './config.json';

const oauth = {
    domain: config.USER_POOL_DOMAIN,
    scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user'],
    redirectSignIn: window.location.protocol + '//' + window.location.host,
    redirectSignout: window.location.protocol + '//' + window.location.host,
    repsonseType: 'code',
    options: {
        AdvancedSecurityDataCollection: false,
    },
};

const amplify = {
    Auth: {
        //REQUIRED - Amazon Cognito Region
    region:config.USER_POOL_REGION,
    //optional - Amazon Cognito Pool
    userpoolId: config.USER_POOL_ID,
    //optional - Amazon Cognito WebClient ID
    userpoolWebClientId: config.USER_POOL_APP,
    //optional - Amazon Enforce user authentication prior to accessing aws resources
    mandatorySignIn: false,
    //optional - Configuration for cookie storage
    cookieStorage: {
        //REQUIRED Cookie domain (cookie only required if cookie storage is present)
        domain: `${window.location.hostname}`
        //OPTIONAL - Cookie path
        path: '/'
        //OPTIONAL - Cookie expiration in days
    }



    }
}