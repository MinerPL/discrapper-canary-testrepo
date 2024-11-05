n.d(t, {
    Z: function () {
        return f;
    }
});
var r,
    i,
    a = n(200651);
n(192379);
var s = n(120356),
    o = n.n(s),
    l = n(873546),
    u = n(481060),
    c = n(388032),
    d = n(619558);
function f(e) {
    let { closeAction: t, variant: n = '', keybind: r, className: i } = e;
    return (0, a.jsxs)('div', {
        className: o()(d.container, i),
        children: [
            (0, a.jsx)(u.Clickable, {
                className: o()(d.closeButton, {
                    [d.closeButtonBold]: 'Bold' === n,
                    [d.closeButtonSolid]: 'Solid' === n
                }),
                onClick: t,
                'aria-label': c.intl.string(c.t.cpT0Cg),
                children:
                    'Solid' === n
                        ? (0, a.jsx)(u.CircleXIcon, {
                              size: 'md',
                              color: 'currentColor',
                              'aria-hidden': !0
                          })
                        : (0, a.jsx)(u.XSmallIcon, {
                              size: 'sm',
                              color: 'currentColor',
                              'aria-hidden': !0
                          })
            }),
            l.tq
                ? null
                : (0, a.jsx)('div', {
                      className: o()(d.keybind),
                      'aria-hidden': !0,
                      children: r
                  })
        ]
    });
}
((r = i || (i = {})).DEFAULT = ''), (r.BOLD = 'Bold'), (r.SOLID = 'Solid'), (f.Variants = i);
