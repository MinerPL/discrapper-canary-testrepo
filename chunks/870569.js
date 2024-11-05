n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(686546),
    s = n(904297);
function c(e) {
    let { tooltipText: t, children: n, onContextMenu: l, onClick: c, disabled: u, icon: d, iconForeground: h, innerClassName: p, tooltipClassName: f, onMouseEnter: m, onMouseLeave: g, 'aria-label': C, 'aria-checked': _, role: x, tooltipColor: v, tooltipForceOpen: I, tooltipContentClassName: b } = e,
        S =
            'function' == typeof d
                ? (0, i.jsx)(d, {
                      width: 20,
                      height: 20,
                      size: 'custom',
                      colorClass: null != h ? h : '',
                      color: 'currentColor'
                  })
                : d;
    return (0, i.jsx)(a.Tooltip, {
        tooltipClassName: f,
        text: t,
        'aria-label': C,
        color: v,
        tooltipContentClassName: b,
        forceOpen: I,
        children: (e) => {
            let { onClick: t, onMouseEnter: d, onMouseLeave: h, ...f } = e;
            return (0, i.jsxs)(a.Button, {
                ...f,
                look: a.Button.Looks.BLANK,
                size: a.Button.Sizes.NONE,
                disabled: u,
                innerClassName: p,
                wrapperClassName: s.button,
                className: r()(s.button, {
                    [s.disabled]: u,
                    [s.enabled]: !u
                }),
                onClick: (e) => {
                    null != t && t(), null != c && c(e);
                },
                onMouseEnter: () => {
                    null == d || d(), null == m || m();
                },
                onMouseLeave: () => {
                    null == h || h(), null == g || g();
                },
                onContextMenu: l,
                role: x,
                'aria-checked': _,
                children: [
                    null != n
                        ? (0, i.jsx)(o.ZP, {
                              width: 20,
                              height: 20,
                              mask: o.ZP.Masks.PANEL_BUTTON,
                              children: S
                          })
                        : S,
                    n
                ]
            });
        }
    });
}
