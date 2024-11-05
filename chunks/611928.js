n.d(t, {
    ZP: function () {
        return h;
    },
    aV: function () {
        return u;
    },
    z6: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(100621),
    o = n(481060),
    c = n(25912);
function d(e) {
    let { scrollPosition: t, minOpacity: n = 0 } = e;
    return (0, i.jsx)(s.animated.div, {
        className: c.backdrop,
        style: {
            opacity: null == t ? void 0 : t.to([0, 100], [n, 1])
        }
    });
}
function u(e) {
    let { onClick: t, icon: n } = e,
        [a, s] = r.useState(!1),
        d = r.useCallback(() => s(!0), []),
        u = r.useCallback(() => s(!1), []);
    return null != t
        ? (0, i.jsx)(o.Clickable, {
              className: l()(c.clickable, c.icon),
              onClick: t,
              onMouseEnter: d,
              onMouseLeave: u,
              children: (0, i.jsx)(n, {
                  color: a ? o.tokens.colors.INTERACTIVE_HOVER : o.tokens.colors.INTERACTIVE_NORMAL,
                  size: 'md'
              })
          })
        : (0, i.jsx)(n, {
              className: c.icon,
              color: o.tokens.colors.HEADER_PRIMARY,
              size: 'md'
          });
}
function h(e) {
    let { className: t, children: n } = e;
    return (0, i.jsx)('div', {
        className: l()(c.headerBar, t),
        children: n
    });
}
