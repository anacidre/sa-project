!(function (e) {
  var o = {}
  function n (t) {
    if (o[t]) return o[t].exports
    var r = (o[t] = { i: t, l: !1, exports: {} })
    return e[t].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
  }
  ;(n.m = e),
  (n.c = o),
  (n.d = function (e, o, t) {
    n.o(e, o) || Object.defineProperty(e, o, { enumerable: !0, get: t })
  }),
  (n.r = function (e) {
    typeof Symbol !== 'undefined' &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
    Object.defineProperty(e, '__esModule', { value: !0 })
  }),
  (n.t = function (e, o) {
    if ((1 & o && (e = n(e)), 8 & o)) return e
    if (4 & o && typeof e === 'object' && e && e.__esModule) return e
    var t = Object.create(null)
    if (
      (n.r(t),
      Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
      2 & o && typeof e !== 'string')
    ) {
      for (var r in e) {
        n.d(
          t,
          r,
          function (o) {
            return e[o]
          }.bind(null, r)
        )
      }
    }
    return t
  }),
  (n.n = function (e) {
    var o =
        e && e.__esModule
          ? function () {
            return e.default
          }
          : function () {
            return e
          }
    return n.d(o, 'a', o), o
  }),
  (n.o = function (e, o) {
    return Object.prototype.hasOwnProperty.call(e, o)
  }),
  (n.p = ''),
  n((n.s = 0))
})({
  0: function (e, o, n) {
    e.exports = n('zUnb')
  },
  '0S4P': function (e, o) {
    e.exports = ng.common
  },
  'g/Wr': function (e, o) {
    e.exports = ng.elements
  },
  'vG+p': function (e, o) {
    e.exports = ng.platformBrowser
  },
  vOrQ: function (e, o) {
    e.exports = ng.core
  },
  zUnb: function (e, o, n) {
    'use strict'
    n.r(o)
    var t = n('vOrQ')

    var r = n('g/Wr')
    class l {
      constructor () {
        this.text = '<no text set>'
      }
    }
    class a {
      constructor (e) {
        this.injector = e
        const o = Object(r.createCustomElement)(l, { injector: this.injector })
        customElements.define('sa-button', o)
      }
      ngDoBootstrap () {}
    }
    var u = t['\u0275crt']({
      encapsulation: 3,
      styles: [
        [
          '.btn{display:block;font-weight:var(--font-weight,200);font-size:var(--font-size,24px);background-color:var(--background-color,#cd5c5c);border:0;border-radius:5px;color:var(--color,#fff);padding:var(--padding,10px);text-transform:uppercase}'
        ]
      ],
      data: {}
    })
    function c (e) {
      return t['\u0275vid'](
        0,
        [
          (e()(),
          t['\u0275eld'](
            0,
            0,
            null,
            null,
            1,
            'button',
            [['class', 'btn'], ['id', 'text']],
            null,
            null,
            null,
            null,
            null
          )),
          (e()(), t['\u0275ted'](1, null, ['', '']))
        ],
        null,
        function (e, o) {
          e(o, 1, 0, o.component.text)
        }
      )
    }
    function i (e) {
      return t['\u0275vid'](
        0,
        [
          (e()(),
          t['\u0275eld'](
            0,
            0,
            null,
            null,
            1,
            'sa-button',
            [],
            null,
            null,
            null,
            c,
            u
          )),
          t['\u0275did'](1, 49152, null, 0, l, [], null, null)
        ],
        null,
        null
      )
    }
    var p = t['\u0275ccf']('sa-button', l, i, { text: 'text' }, {}, [])

    var s = n('0S4P')

    var d = n('vG+p')

    var m = t['\u0275cmf'](a, [], function (e) {
      return t['\u0275mod']([
        t['\u0275mpd'](
          512,
          t.ComponentFactoryResolver,
          t['\u0275CodegenComponentFactoryResolver'],
          [[8, [p]], [3, t.ComponentFactoryResolver], t.NgModuleRef]
        ),
        t['\u0275mpd'](
          5120,
          t.LOCALE_ID,
          t['\u0275angular_packages_core_core_k'],
          [[3, t.LOCALE_ID]]
        ),
        t['\u0275mpd'](4608, s.NgLocalization, s.NgLocaleLocalization, [
          t.LOCALE_ID,
          [2, s['\u0275angular_packages_common_common_a']]
        ]),
        t['\u0275mpd'](4608, t.Compiler, t.Compiler, []),
        t['\u0275mpd'](
          5120,
          t.APP_ID,
          t['\u0275angular_packages_core_core_f'],
          []
        ),
        t['\u0275mpd'](
          5120,
          t.IterableDiffers,
          t['\u0275angular_packages_core_core_i'],
          []
        ),
        t['\u0275mpd'](
          5120,
          t.KeyValueDiffers,
          t['\u0275angular_packages_core_core_j'],
          []
        ),
        t['\u0275mpd'](4608, d.DomSanitizer, d['\u0275DomSanitizerImpl'], [
          s.DOCUMENT
        ]),
        t['\u0275mpd'](6144, t.Sanitizer, null, [d.DomSanitizer]),
        t['\u0275mpd'](
          4608,
          d.HAMMER_GESTURE_CONFIG,
          d.HammerGestureConfig,
          []
        ),
        t['\u0275mpd'](
          5120,
          d.EVENT_MANAGER_PLUGINS,
          function (e, o, n, t, r, l, a, u) {
            return [
              new d['\u0275DomEventsPlugin'](e, o, n),
              new d['\u0275KeyEventsPlugin'](t),
              new d['\u0275HammerGesturesPlugin'](r, l, a, u)
            ]
          },
          [
            s.DOCUMENT,
            t.NgZone,
            t.PLATFORM_ID,
            s.DOCUMENT,
            s.DOCUMENT,
            d.HAMMER_GESTURE_CONFIG,
            t['\u0275Console'],
            [2, d.HAMMER_LOADER]
          ]
        ),
        t['\u0275mpd'](4608, d.EventManager, d.EventManager, [
          d.EVENT_MANAGER_PLUGINS,
          t.NgZone
        ]),
        t['\u0275mpd'](
          135680,
          d['\u0275DomSharedStylesHost'],
          d['\u0275DomSharedStylesHost'],
          [s.DOCUMENT]
        ),
        t['\u0275mpd'](
          4608,
          d['\u0275DomRendererFactory2'],
          d['\u0275DomRendererFactory2'],
          [d.EventManager, d['\u0275DomSharedStylesHost']]
        ),
        t['\u0275mpd'](6144, t.RendererFactory2, null, [
          d['\u0275DomRendererFactory2']
        ]),
        t['\u0275mpd'](6144, d['\u0275SharedStylesHost'], null, [
          d['\u0275DomSharedStylesHost']
        ]),
        t['\u0275mpd'](4608, t.Testability, t.Testability, [t.NgZone]),
        t['\u0275mpd'](1073742336, s.CommonModule, s.CommonModule, []),
        t['\u0275mpd'](
          1024,
          t.ErrorHandler,
          d['\u0275angular_packages_platform_browser_platform_browser_a'],
          []
        ),
        t['\u0275mpd'](
          1024,
          t.APP_INITIALIZER,
          function (e) {
            return [
              d['\u0275angular_packages_platform_browser_platform_browser_j'](
                e
              )
            ]
          },
          [[2, t.NgProbeToken]]
        ),
        t['\u0275mpd'](
          512,
          t.ApplicationInitStatus,
          t.ApplicationInitStatus,
          [[2, t.APP_INITIALIZER]]
        ),
        t['\u0275mpd'](131584, t.ApplicationRef, t.ApplicationRef, [
          t.NgZone,
          t['\u0275Console'],
          t.Injector,
          t.ErrorHandler,
          t.ComponentFactoryResolver,
          t.ApplicationInitStatus
        ]),
        t['\u0275mpd'](1073742336, t.ApplicationModule, t.ApplicationModule, [
          t.ApplicationRef
        ]),
        t['\u0275mpd'](1073742336, d.BrowserModule, d.BrowserModule, [
          [3, d.BrowserModule]
        ]),
        t['\u0275mpd'](1073742336, a, a, [t.Injector]),
        t['\u0275mpd'](256, t['\u0275APP_ROOT'], !0, [])
      ])
    })
    Object(t.enableProdMode)(),
    d
      .platformBrowser()
      .bootstrapModuleFactory(m)
      .catch(e => console.error(e))
  }
})
