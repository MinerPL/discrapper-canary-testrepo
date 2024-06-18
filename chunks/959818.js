"use strict";
r.d(t, {
  Ni: function() {
    return l
  }
});
var n = r(470079);
r(476400);
var i = r(26095),
  o = r.n(i);

function s(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}

function a() {
  return (a = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  }).apply(this, arguments)
}
r(314401);

function u(e) {
  if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}
var l = (0, n.createContext)(),
  c = function(e) {
    var t, r, i;
    return {
      context: e,
      withTheme: (t = e, function(e) {
        var r = n.forwardRef(function(r, i) {
          return n.createElement(t.Consumer, null, function(t) {
            return n.createElement(e, a({
              theme: t,
              ref: i
            }, r))
          })
        });
        return o()(r, e), r
      }),
      useTheme: (r = e, function() {
        return n.useContext(r)
      }),
      ThemeProvider: (i = e, function(e) {
        function t() {
          for (var t, r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
          return s(u(u(t = e.call.apply(e, [this].concat(o)) || this)), "cachedTheme", void 0), s(u(u(t)), "lastOuterTheme", void 0), s(u(u(t)), "lastTheme", void 0), s(u(u(t)), "renderProvider", function(e) {
            var r = t.props.children;
            return n.createElement(i.Provider, {
              value: t.getTheme(e)
            }, r)
          }), t
        }
        r = t, o = e, r.prototype = Object.create(o.prototype), r.prototype.constructor = r, r.__proto__ = o;
        var r, o, l = t.prototype;
        return l.getTheme = function(e) {
          if (this.props.theme !== this.lastTheme || e !== this.lastOuterTheme || !this.cachedTheme) {
            if (this.lastOuterTheme = e, this.lastTheme = this.props.theme, "function" == typeof this.lastTheme) {
              var t = this.props.theme;
              this.cachedTheme = t(e)
            } else {
              var r = this.props.theme;
              this.cachedTheme = e ? a({}, e, r) : r
            }
          }
          return this.cachedTheme
        }, l.render = function() {
          return this.props.children ? n.createElement(i.Consumer, null, this.renderProvider) : null
        }, t
      }(n.Component))
    }
  }(l);
c.withTheme, c.ThemeProvider, c.useTheme