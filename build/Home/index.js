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
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "header"
	      ],
	      "children": [
	        {
	          "type": "swiper",
	          "attr": {},
	          "children": [
	            {
	              "type": "block",
	              "attr": {},
	              "repeat": function () {return this.newEvents},
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "swiper-item"
	                  ],
	                  "children": [
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": function () {return this.$item.imgurl}
	                      },
	                      "classList": [
	                        "swiper-img"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "container"
	      ],
	      "children": [
	        {
	          "type": "list",
	          "attr": {},
	          "classList": [
	            "publish-list"
	          ],
	          "events": {
	            "scrollbottom": "loadMoreData"
	          },
	          "children": [
	            {
	              "type": "block",
	              "attr": {},
	              "repeat": function () {return this.funnyList},
	              "children": [
	                {
	                  "type": "list-item",
	                  "attr": {},
	                  "classList": [
	                    "publish-list-item"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "publish-info"
	                      ],
	                      "children": [
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "publish-head"
	                          ],
	                          "children": [
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": function () {return this.$item.headImg}
	                              },
	                              "classList": [
	                                "publisher-head-img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "base-info"
	                          ],
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": function () {return this.$item.nickName}
	                              },
	                              "classList": [
	                                "nickName"
	                              ]
	                            },
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": function () {return this.$item.publishTime}
	                              },
	                              "classList": [
	                                "publish-time"
	                              ]
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  ".demo-page": {
	    "flexDirection": "column",
	    "flexWrap": "nowrap",
	    "justifyContent": "flex-start",
	    "backgroundColor": "rgba(189,189,189,0.52)"
	  },
	  ".header": {
	    "paddingTop": "0px",
	    "paddingRight": "0px",
	    "paddingBottom": "0px",
	    "paddingLeft": "0px",
	    "marginTop": "0px",
	    "marginRight": "0px",
	    "marginBottom": "0px",
	    "marginLeft": "0px",
	    "width": "100%"
	  },
	  ".header swiper": {
	    "width": "750px",
	    "height": "240px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "header"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "swiper"
	        }
	      ]
	    }
	  },
	  ".swiper-item": {
	    "width": "750px",
	    "height": "240px"
	  },
	  ".swiper-img": {
	    "width": "750px",
	    "height": "240px"
	  },
	  ".swiper-title": {
	    "width": "100%",
	    "bottom": "10px",
	    "left": "20px",
	    "zIndex": 1,
	    "color": "#000000"
	  },
	  ".container": {
	    "paddingTop": "0px",
	    "paddingRight": "0px",
	    "paddingBottom": "0px",
	    "paddingLeft": "0px",
	    "marginTop": "0px",
	    "marginRight": "0px",
	    "marginBottom": "0px",
	    "marginLeft": "0px",
	    "width": "100%"
	  },
	  ".publish-list-item": {
	    "paddingTop": "10px",
	    "paddingRight": "20px",
	    "paddingBottom": "10px",
	    "paddingLeft": "20px",
	    "marginTop": "14px",
	    "marginRight": "0px",
	    "marginBottom": "0px",
	    "marginLeft": "0px",
	    "width": "100%",
	    "backgroundColor": "#ffffff"
	  },
	  ".publish-info": {
	    "paddingTop": "0px",
	    "paddingRight": "0px",
	    "paddingBottom": "0px",
	    "paddingLeft": "0px",
	    "marginTop": "0px",
	    "marginRight": "0px",
	    "marginBottom": "0px",
	    "marginLeft": "0px",
	    "width": "100%"
	  },
	  ".publish-list": {
	    "height": "100%"
	  },
	  ".publisher-info": {
	    "height": "100px",
	    "boxSizing": "border-box",
	    "display": "flex",
	    "flexDirection": "row"
	  },
	  ".publish-head": {
	    "height": "100%",
	    "paddingTop": "10px",
	    "paddingRight": "20px",
	    "paddingBottom": "10px",
	    "paddingLeft": "0px",
	    "boxSizing": "border-box"
	  },
	  ".publisher-head-img": {
	    "width": "80px",
	    "height": "80px",
	    "borderRadius": "50px",
	    "verticalAlign": "middle"
	  },
	  ".base-info": {
	    "height": "100%",
	    "width": "550px",
	    "paddingTop": "10px",
	    "paddingRight": "0px",
	    "paddingBottom": "10px",
	    "paddingLeft": "0px",
	    "boxSizing": "border-box"
	  },
	  ".base-info text": {
	    "width": "100%",
	    "height": "100px",
	    "lineHeight": "40px",
	    "float": "left",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "base-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".nickName": {
	    "fontSize": "30px",
	    "color": "#ff6c00"
	  },
	  ".publish-time": {
	    "color": "#4CAF50",
	    "fontSize": "24px"
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
	        title: '示例页面',
	        newEvents: [{
	            id: 'sp0001',
	            imgurl: "/Common/images/swiper1.jpg",
	            title: "哈哈哈哈，这是啥..."
	        }, {
	            id: 'sp0002',
	            imgurl: "/Common/images/swiper2.jpg",
	            title: "别人家的..."
	        }, {
	            id: 'sp0003',
	            imgurl: "https://raw.githubusercontent.com/wxmid/happyTime/master/assets/img/swiper3.jpg",
	            title: "是不是有点冷..."
	        }],
	        funnyList: [{
	            id: 'fn0001',
	            isOriginal: true,
	            headImg: '/Common/images/head1.jpg',
	            nickName: 'GirlLog',
	            publishTime: '2018-04-19 10:52',
	            abstract: '老婆不喜欢家里的画眉鸟，所以平时鸟笼挂在阳台上，她不在家时我就拿进屋里逗一下。刚刚在家逗鸟，看到她下班回来了，我很自觉的把鸟笼拿去阳台，然后她说：“留意你很久了，每次我到家你就往阳台挂鸟笼，给谁发信号呢？！”我。。。',
	            thumbnailList: ['/Common/images/gx1.jpg', '/Common/images/gx2.jpg', '/Common/images/gx3.jpg']
	        }, {
	            id: 'fn0002',
	            isOriginal: false,
	            headImg: '/Common/images/head1.jpg',
	            nickName: '开心一刻',
	            publishTime: '2018-04-10 19:46',
	            abstract: '老爸给老妈买了一个特别好看的项链，我羡慕的不要不要的，一直夸赞项链好看。老妈说道：“虽然好看，你也不要买，这东西不适合你。”我问道：“怎么不适合我？”老妈答：“太贵，你买了你老公会骂你的。”',
	            thumbnailList: ['/Common/images/gx7.jpg', '/Common/images/gx5.jpg']
	        }, {
	            id: 'fn0003',
	            isOriginal: false,
	            headImg: '/Common/images/head1.jpg',
	            nickName: '开心一刻',
	            publishTime: '2018-04-10 19:46',
	            abstract: '门庭若市：门，脑门；庭，天庭，额头。形容人的脑门大得就像市场一样，宽阔无边，也就是平常所说的发际线后移。',
	            thumbnailList: ['/Common/images/gx6.jpg']
	        }, {
	            id: 'fn0004',
	            isOriginal: true,
	            headImg: '/Common/images/head2.jpg',
	            nickName: 'MR.Mercury',
	            publishTime: '2018-04-10 19:46',
	            abstract: '今天跟一个熟客小姐姐按摩时聊天。聊着聊着她问我是不是单身？ 我说是。她又问我想不想找女友。刚准备说想，看到她左手上的婚戒，这尼玛是送命题啊。然后她说本来打算介绍一个闺蜜给我，既然不想就算了。。。',
	            thumbnailList: ['/Common/images/gx7.jpg', '/Common/images/gx8.jpg', '/Common/images/gx9.jpg', '/Common/images/gx10.jpg']
	        }, {
	            id: 'fn0005',
	            isOriginal: true,
	            headImg: '/Common/images/head3.jpg',
	            nickName: 'O°MyへLove',
	            publishTime: '2018-04-18 23:58',
	            abstract: '小王半夜找到他的铁哥们儿：哥，快来，我老婆给我带绿帽了，打一个人。这哥们儿来句：这时候你还有心情猜灯谜？！',
	            thumbnailList: ['/Common/images/gx11.jpg', '/Common/images/gx12.jpg']
	        }, {
	            id: 'fn0006',
	            isOriginal: false,
	            headImg: '/Common/images/head4.jpg',
	            nickName: '开心一刻',
	            publishTime: '2018-04-10 19:46',
	            abstract: '早上，我爸出差半个月回来，回到家之后就往沙发上一躺：“唉，这段时间可累死我了！回到家连杯水都没得喝！”',
	            thumbnailList: ['/Common/images/gx13.jpg', '/Common/images/gx14.jpg', '/Common/images/gx15.jpg']
	        }]
	    },
	    routeDetail: function routeDetail() {
	        _system2.default.push({
	            uri: '/DemoDetail'
	        });
	    },
	    onReady: function onReady() {
	        this.title = '首页';
	    },
	    loadMoreData: function loadMoreData() {}
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