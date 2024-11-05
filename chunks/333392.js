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
Object.defineProperty(t, '__esModule', { value: !0 }), (t.MessageLoader = t.waitForAllDefaultIntlMessagesLoaded = t.loadAllMessagesInLocale = t.createLoader = t.DEFAULT_LOCALE = t.IntlManager = t.runtimeHashMessageKey = t.bindFormatValues = t.FormatBuilder = void 0), i(n(562721), t);
var a = n(757672);
Object.defineProperty(t, 'FormatBuilder', {
    enumerable: !0,
    get: function () {
        return a.FormatBuilder;
    }
}),
    Object.defineProperty(t, 'bindFormatValues', {
        enumerable: !0,
        get: function () {
            return a.bindFormatValues;
        }
    });
var s = n(93034);
Object.defineProperty(t, 'runtimeHashMessageKey', {
    enumerable: !0,
    get: function () {
        return s.runtimeHashMessageKey;
    }
});
var o = n(464720);
Object.defineProperty(t, 'IntlManager', {
    enumerable: !0,
    get: function () {
        return o.IntlManager;
    }
}),
    Object.defineProperty(t, 'DEFAULT_LOCALE', {
        enumerable: !0,
        get: function () {
            return o.DEFAULT_LOCALE;
        }
    });
var l = n(957725);
Object.defineProperty(t, 'createLoader', {
    enumerable: !0,
    get: function () {
        return l.createLoader;
    }
}),
    Object.defineProperty(t, 'loadAllMessagesInLocale', {
        enumerable: !0,
        get: function () {
            return l.loadAllMessagesInLocale;
        }
    }),
    Object.defineProperty(t, 'waitForAllDefaultIntlMessagesLoaded', {
        enumerable: !0,
        get: function () {
            return l.waitForAllDefaultIntlMessagesLoaded;
        }
    }),
    Object.defineProperty(t, 'MessageLoader', {
        enumerable: !0,
        get: function () {
            return l.MessageLoader;
        }
    });
