require('dotenv').config();

export default {
	ssr: false,
	loading: false,
	subdirectory: '/',
	target: 'static',
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Test IKBO - Pedro Camacaro',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
		],
	},
	gzip: {
		enabled: true
	},
	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/scss/font-awesome.scss',
		'~/assets/scss/plugins.scss',
		'~/assets/scss/app.scss',
	],
	extractCSS: true,
	
	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/front.js', ssr: false },
		{ src: '~/plugins/axios.js' }
	],
	
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,
	
	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],
	generate: {
	},
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		'bootstrap-vue/nuxt',
		'nuxt-precompress',
		['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
		'@nuxtjs/axios',
		['cookie-universal-nuxt', { parseJSON: true }],
		['@nuxtjs/dotenv', { path: './' }]
	],
	bootstrapVue: {
		icons: false,
		bootstrapCSS: false,
		bootstrapVueCSS: false,
		components: [
			'BRow',
			'BCol',
			'BContainer',
			
			'BCard',
			'BCardHeader',
			'BCardFooter',
			'BCardBody',
			'BCardText',
			
			'BButton',
			'BButtonGroup',
			
			'BCollapse',
			
			'BForm',
			'BFormGroup',
			'BFormInput',
			'BFormTextarea',
			'BFormRadio',
			'BFormRadioGroup',
			'BFormCheckbox',
			'BFormFile',
			'BFormDatepicker',
			'BFormSelect',
			'BFormSelectOption',
			
			'BInputGroup',
			'BInputGroupPrepend',
			'BInputGroupAppend',
			
			'BListGroup',
			'BListGroupItem',
			
			'BModal',
			
			'BPagination',
			
			'BTabs',
			'BTab',
			
			'BSpinner',
			
			'BBadge',
			
			'BTable',
			'BTableSimple',
			'BTbody',
			'BThead',
			'BTfoot',
			'BTr',
			'BTd',
			'BTh',
			
			'BCarousel',
			'BCarouselSlide',
		],
		directivePlugins: ['VBTooltipPlugin', 'VBTogglePlugin', 'VBModal']
	},
	nuxtPrecompress: {
		enabled: true, // Enable in production
		report: false, // set true to turn one console messages during module init
		test: /\.(js|css|html|txt|xml|svg)$/, // files to compress on build
		// Serving options
		middleware: {
			// You can disable middleware if you serve static files using nginx...
			enabled: true,
			// Enable if you have .gz or .br files in /static/ folder
			enabledStatic: true, 
			// Priority of content-encodings, first matched with request Accept-Encoding will me served
			encodingsPriority: ['br', 'gzip'],
		},
		// build time compression settings
		gzip: {
			// should compress to gzip?
			enabled: true,
			// compression config
			// https://www.npmjs.com/package/compression-webpack-plugin
			filename: '[path].gz[query]', // middleware will look for this filename
			threshold: 10240,
			minRatio: 0.8,
			compressionOptions: { level: 9 },
		},
		brotli: {
			// should compress to brotli?
			enabled: true,
			// compression config
			// https://www.npmjs.com/package/compression-webpack-plugin
			filename: '[path].br[query]', // middleware will look for this filename
			compressionOptions: { level: 11 },
			threshold: 10240,
			minRatio: 0.8,
		},
	},
	axios: {
		// Configuración por defecto, por ejemplo:
		baseURL: process.env.VUE_APP_TEST_API_URL,
	},
	publicRuntimeConfig: {
		apiTest: {
			baseURL: process.env.VUE_APP_TEST_API_URL,
			headers:{
				common:{
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					timeout: 15000
				}
			},
			defaultToken: process.env.VUE_APP_TEST_API_TOKEN
		}
	},
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		hotMiddleware: {
			client: {
				// overlay: false, // Asegúrate de que overlay esté configurado en false para deshabilitar las notificaciones de HMR en producción
			},
		},
		minify: {
			collapseWhitespace: true,
			removeComments: true
		},
		splitChunks: {
		// 	async: true,
		// 	minSize: 30000, // Establece el tamaño mínimo en bytes
		// 	maxSize: 244000,
		// 	cacheGroups: {
		// 		styles: {
		// 			priority: 1,
		// 			name: 'styles',
		// 			test: /\.(css|vue)$/,
		// 			chunks: 'all',
		// 			enforce: true
		// 		},
		// 		vendor: {
		// 			priority: -10,
		// 			name: 'vendor',
		// 			test: /[\\/]node_modules[\\/]/,
		// 			chunks: 'all',
		// 		},
		// 		common: {
		// 			priority: -20,
		// 			minChunks: 2,
		// 			reuseExistingChunk: true,
		// 		}
		// 	},
		},
		cssSourceMap: true,
		extractCSS: true,
		optimizeCSS: true,
		optimization: {
			minimize: true,
			splitChunks: {
				chunks: 'all',
				automaticNameDelimiter: '.',
				name: true,
				minSize: 30000,
				maxSize: 0,
				minChunks: 1,
				maxAsyncRequests: 6,
				maxInitialRequests: 4,
				cacheGroups: {
					styles: {
						priority: 1,
						name: 'styles',
						test: /\.(css|vue)$/,
						chunks: 'all',
						enforce: true
					},
					vendor: {
						priority: -10,
						name: 'vendor',
						test: /[\\/]node_modules[\\/]/,
						chunks: 'all',
					},
					common: {
						priority: -20,
						minChunks: 2,
						reuseExistingChunk: true,
					}
				}
			}
		},
		'html.minify': {
			collapseBooleanAttributes: true,
			decodeEntities: true,
			minifyCSS: true,
			minifyJS: true,
			processConditionalComments: true,
			removeEmptyAttributes: true,
			removeRedundantAttributes: true,
			trimCustomFragments: true,
			useShortDoctype: true
		},
		transpile: [
			"vee-validate/dist/rules"
		],
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
			
			if (ctx.isClient && process.env.NODE_ENV === 'production') {
				
				config.devtool = 'source-map';
			}
		}
	},
	babel: { 
		compact: true,
		minified: true
	}
}
