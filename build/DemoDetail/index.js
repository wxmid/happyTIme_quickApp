(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(7)
	var $app_style$ = __webpack_require__(8)
	var $app_script$ = __webpack_require__(9)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "demo-page"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.text}
	      },
	      "classList": [
	        "title"
	      ]
	    },
	    {
	      "type": "input",
	      "attr": {
	        "type": "button",
	        "value": "返回上一页"
	      },
	      "classList": [
	        "btn"
	      ],
	      "events": {
	        "click": "backToHome"
	      }
	    }
	  ]
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  ".demo-page": {
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  ".title": {
	    "fontSize": "40px",
	    "textAlign": "center"
	  },
	  ".btn": {
	    "width": "550px",
	    "height": "86px",
	    "marginTop": "75px",
	    "borderRadius": "43px",
	    "backgroundColor": "#09ba07",
	    "fontSize": "30px",
	    "color": "#ffffff"
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  private: {
	    text: '欢迎打开详情页',
	    lcList: [] },
	  onCreate: function onCreate() {
	    console.info('Application onCreate');
	    console.info('\u83B7\u53D6\uFF1AAPP\u6587\u4EF6\u4E2D\u7684\u6570\u636E\uFF1A' + this.$app.$def.data1.name);
	    console.info('\u6267\u884C\uFF1AAPP\u6587\u4EF6\u4E2D\u7684\u65B9\u6CD5', this.$app.$def.method1());
	    console.info('\u83B7\u53D6\uFF1Amanifest.json\u7684\u5E94\u7528\u540D\u79F0\uFF1A' + this.$app.$def.manifest.name);
	    console.info('\u83B7\u53D6\uFF1Amanifest.json\u7684config.data\u7684\u6570\u636E\uFF1A' + this.$app.$data.name);
	  },
	  onShow: function onShow() {
	    var a = this.$visible;
	  },
	  onReady: function onReady() {
	    this.lcList.push('onReady');
	  },
	  onMenuPress: function onMenuPress() {
	    this.$app.$def.showMenu();
	  },
	  onDestroy: function onDestroy() {
	    this.lcList.push('onDestroy');
	
	    console.info('DemoDetail\u9875\u9762\u5DF2\u9500\u6BC1');
	  },
	  onBackPress: function onBackPress() {
	    this.lcList.push('onBackPress');
	    console.info('\u89E6\u53D1\uFF1AonBackPress');
	  },
	  backToHome: function backToHome() {
	    this.lcList.push('backToHome');
	    console.info('=====+++++\u8FD4\u56DE\u4E0A\u4E00\u9875+++++=====');
	    _system2.default.back();
	  },
	  onHide: function onHide() {
	    this.lcList.push('onHide');
	    console.info('\u89E6\u53D1\uFF1AonHide');
	    console.info('\u6267\u884C\uFF1A\u83B7\u53D6\u9875\u9762\u663E\u793A\u72B6\u6001\u5C5E\u6027\uFF1A' + this.$visible);
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map