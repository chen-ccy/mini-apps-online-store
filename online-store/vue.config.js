module.exports = {
  publicPath:'./',
  configureWebpack:{
    resolve:{
      alias:{
				"@": "src",
        'assets': 'src/assets',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views',
				'static': '../../static',
        'components': '@/components'
      }
    }
  }

}
