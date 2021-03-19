import Amplify from 'aws-amplify';
import config from './aws-config';
Amplify.configure({
    ...config, ssr: true
});
