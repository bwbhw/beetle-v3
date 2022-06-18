const { defineConfig } = require('@vue/cli-service');
const  path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].title = '越秀设计族库';
			return args;
		});
	},
	configureWebpack: {
		devtool: 'source-map',
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            }
        }
	},
	publicPath: './',
	devServer: {
		host: 'localhost',
		port: 8080,
		open: true,
		proxy: {
			'/api': {
				target: 'https://iam-uat.yuexiuproperty.cn',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		},
	}
})
