import _ from 'lodash';
import path from 'path';

let config = {
	'viewDir': path.join(__dirname, '..', 'views'),
	'staticDir': path.join(__dirname, '..', 'assets'),
	'env': process.env.NODE_ENV// "development" production
};

if(process.env.NODE_ENV == 'development'){
    config = _.extend(config, { 'port': 3000 });
}

if(process.env.NODE_ENV == 'production'){
	config = _.extend(config, { 'port': 80 });
}

export default config;