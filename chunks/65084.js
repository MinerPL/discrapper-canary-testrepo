var r =
        (this && this.__createBinding) ||
        (Object.create
            ? function (e, t, n, r) {
                  void 0 === r && (r = n);
                  var i = Object.getOwnPropertyDescriptor(t, n);
                  (!i || ('get' in i ? !t.__esModule : i.writable || i.configurable)) &&
                      (i = {
                          enumerable: !0,
                          get: function () {
                              return t[n];
                          }
                      }),
                      Object.defineProperty(e, r, i);
              }
            : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
              }),
    i =
        (this && this.__exportStar) ||
        function (e, t) {
            for (var n in e) 'default' !== n && !Object.prototype.hasOwnProperty.call(t, n) && r(t, e, n);
        };
Object.defineProperty(t, '__esModule', { value: !0 }), (t.MessageLoader = t.waitForAllDefaultIntlMessagesLoaded = t.loadAllMessagesInLocale = t.createLoader = t.DEFAULT_LOCALE = t.IntlManager = t.runtimeHashMessageKey = void 0), i(n(755429), t);
var a = n(94651);
Object.defineProperty(t, 'runtimeHashMessageKey', {
    enumerable: !0,
    get: function () {
        return a.runtimeHashMessageKey;
    }
});
var s = n(800467);
Object.defineProperty(t, 'IntlManager', {
    enumerable: !0,
    get: function () {
        return s.IntlManager;
    }
}),
    Object.defineProperty(t, 'DEFAULT_LOCALE', {
        enumerable: !0,
        get: function () {
            return s.DEFAULT_LOCALE;
        }
    });
var o = n(703879);
Object.defineProperty(t, 'createLoader', {
    enumerable: !0,
    get: function () {
        return o.createLoader;
    }
}),
    Object.defineProperty(t, 'loadAllMessagesInLocale', {
        enumerable: !0,
        get: function () {
            return o.loadAllMessagesInLocale;
        }
    }),
    Object.defineProperty(t, 'waitForAllDefaultIntlMessagesLoaded', {
        enumerable: !0,
        get: function () {
            return o.waitForAllDefaultIntlMessagesLoaded;
        }
    }),
    Object.defineProperty(t, 'MessageLoader', {
        enumerable: !0,
        get: function () {
            return o.MessageLoader;
        }
    });
