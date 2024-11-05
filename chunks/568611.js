n.d(t, {
    VK: function () {
        return c;
    },
    rU: function () {
        return m;
    }
});
var r = n(512969),
    i = n(919499),
    a = n(192379),
    s = n(539528);
n(476400);
var o = n(599295),
    l = n(781212),
    u = n(568895),
    c = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return ((t = e.call.apply(e, [this].concat(r)) || this).history = (0, s.lX)(t.props)), t;
        }
        return (
            (0, i.Z)(t, e),
            (t.prototype.render = function () {
                return a.createElement(r.F0, {
                    history: this.history,
                    children: this.props.children
                });
            }),
            t
        );
    })(a.Component);
a.Component;
var d = function (e, t) {
        return 'function' == typeof e ? e(t) : e;
    },
    f = function (e, t) {
        return 'string' == typeof e ? (0, s.ob)(e, null, null, t) : e;
    },
    _ = function (e) {
        return e;
    },
    h = a.forwardRef;
void 0 === h && (h = _);
var p = h(function (e, t) {
        var n = e.innerRef,
            r = e.navigate,
            i = e.onClick,
            s = (0, l.Z)(e, ['innerRef', 'navigate', 'onClick']),
            u = s.target,
            c = (0, o.Z)({}, s, {
                onClick: function (e) {
                    var t;
                    try {
                        i && i(e);
                    } catch (t) {
                        throw (e.preventDefault(), t);
                    }
                    if (!e.defaultPrevented && 0 === e.button && (!u || '_self' === u) && !((t = e).metaKey || t.altKey || t.ctrlKey || t.shiftKey)) e.preventDefault(), r();
                }
            });
        return _ !== h ? (c.ref = t || n) : (c.ref = n), a.createElement('a', c);
    }),
    m = h(function (e, t) {
        var n = e.component,
            i = void 0 === n ? p : n,
            s = e.replace,
            c = e.to,
            m = e.innerRef,
            g = (0, l.Z)(e, ['component', 'replace', 'to', 'innerRef']);
        return a.createElement(r.s6.Consumer, null, function (e) {
            e || (0, u.Z)(!1);
            var n = e.history,
                r = f(d(c, e.location), e.location),
                l = r ? n.createHref(r) : '',
                p = (0, o.Z)({}, g, {
                    href: l,
                    navigate: function () {
                        var t = d(c, e.location);
                        (s ? n.replace : n.push)(t);
                    }
                });
            return _ !== h ? (p.ref = t || m) : (p.innerRef = m), a.createElement(i, p);
        });
    }),
    g = function (e) {
        return e;
    },
    E = a.forwardRef;
void 0 === E && (E = g);
E(function (e, t) {
    var n = e['aria-current'],
        i = void 0 === n ? 'page' : n,
        s = e.activeClassName,
        c = void 0 === s ? 'active' : s,
        _ = e.activeStyle,
        h = e.className,
        p = e.exact,
        v = e.isActive,
        I = e.location,
        S = e.sensitive,
        T = e.strict,
        b = e.style,
        y = e.to,
        A = e.innerRef,
        N = (0, l.Z)(e, ['aria-current', 'activeClassName', 'activeStyle', 'className', 'exact', 'isActive', 'location', 'sensitive', 'strict', 'style', 'to', 'innerRef']);
    return a.createElement(r.s6.Consumer, null, function (e) {
        e || (0, u.Z)(!1);
        var n = I || e.location,
            s = f(d(y, n), n),
            l = s.pathname,
            C = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
            R = C
                ? (0, r.LX)(n.pathname, {
                      path: C,
                      exact: p,
                      sensitive: S,
                      strict: T
                  })
                : null,
            O = !!(v ? v(R, n) : R),
            D = O
                ? (function () {
                      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                      return t
                          .filter(function (e) {
                              return e;
                          })
                          .join(' ');
                  })(h, c)
                : h,
            L = O ? (0, o.Z)({}, b, {}, _) : b,
            x = (0, o.Z)(
                {
                    'aria-current': (O && i) || null,
                    className: D,
                    style: L,
                    to: s
                },
                N
            );
        return g !== E ? (x.ref = t || A) : (x.innerRef = A), a.createElement(m, x);
    });
});
