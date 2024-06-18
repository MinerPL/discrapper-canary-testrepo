"use strict";
n.d(t, {
  VK: function() {
    return l
  },
  rU: function() {
    return g
  }
});
var r = n(266067),
  i = n(919499),
  a = n(470079),
  o = n(539528);
n(476400);
var s = n(599295),
  u = n(781212),
  c = n(568895),
  l = function(e) {
    function t() {
      for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
      return (t = e.call.apply(e, [this].concat(r)) || this).history = (0, o.lX)(t.props), t
    }
    return (0, i.Z)(t, e), t.prototype.render = function() {
      return a.createElement(r.F0, {
        history: this.history,
        children: this.props.children
      })
    }, t
  }(a.Component);
a.Component;
var d = function(e, t) {
    return "function" == typeof e ? e(t) : e
  },
  f = function(e, t) {
    return "string" == typeof e ? (0, o.ob)(e, null, null, t) : e
  },
  p = function(e) {
    return e
  },
  h = a.forwardRef;
void 0 === h && (h = p);
var m = h(function(e, t) {
    var n = e.innerRef,
      r = e.navigate,
      i = e.onClick,
      o = (0, u.Z)(e, ["innerRef", "navigate", "onClick"]),
      c = o.target,
      l = (0, s.Z)({}, o, {
        onClick: function(e) {
          var t;
          try {
            i && i(e)
          } catch (t) {
            throw e.preventDefault(), t
          }
          if (!e.defaultPrevented && 0 === e.button && (!c || "_self" === c) && !((t = e).metaKey || t.altKey || t.ctrlKey || t.shiftKey)) e.preventDefault(), r()
        }
      });
    return p !== h ? l.ref = t || n : l.ref = n, a.createElement("a", l)
  }),
  g = h(function(e, t) {
    var n = e.component,
      i = void 0 === n ? m : n,
      o = e.replace,
      l = e.to,
      g = e.innerRef,
      _ = (0, u.Z)(e, ["component", "replace", "to", "innerRef"]);
    return a.createElement(r.s6.Consumer, null, function(e) {
      e || (0, c.Z)(!1);
      var n = e.history,
        r = f(d(l, e.location), e.location),
        u = r ? n.createHref(r) : "",
        m = (0, s.Z)({}, _, {
          href: u,
          navigate: function() {
            var t = d(l, e.location);
            (o ? n.replace : n.push)(t)
          }
        });
      return p !== h ? m.ref = t || g : m.innerRef = g, a.createElement(i, m)
    })
  }),
  _ = function(e) {
    return e
  },
  b = a.forwardRef;
void 0 === b && (b = _);
b(function(e, t) {
  var n = e["aria-current"],
    i = void 0 === n ? "page" : n,
    o = e.activeClassName,
    l = void 0 === o ? "active" : o,
    p = e.activeStyle,
    h = e.className,
    m = e.exact,
    v = e.isActive,
    y = e.location,
    E = e.sensitive,
    S = e.strict,
    x = e.style,
    w = e.to,
    C = e.innerRef,
    T = (0, u.Z)(e, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
  return a.createElement(r.s6.Consumer, null, function(e) {
    e || (0, c.Z)(!1);
    var n = y || e.location,
      o = f(d(w, n), n),
      u = o.pathname,
      D = u && u.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
      M = D ? (0, r.LX)(n.pathname, {
        path: D,
        exact: m,
        sensitive: E,
        strict: S
      }) : null,
      O = !!(v ? v(M, n) : M),
      A = O ? function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t.filter(function(e) {
          return e
        }).join(" ")
      }(h, l) : h,
      k = O ? (0, s.Z)({}, x, {}, p) : x,
      R = (0, s.Z)({
        "aria-current": O && i || null,
        className: A,
        style: k,
        to: o
      }, T);
    return _ !== b ? R.ref = t || C : R.innerRef = C, a.createElement(g, R)
  })
})