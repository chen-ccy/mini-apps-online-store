module.exports = {
  publicPath:'./',
  configureWebpack:{
    resolve:{
      alias:{
				"@": "src",
        'assets': '@/assets',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views',
				'static': '@/static',
        'components': '@/components'
      }
    }
  }

}
