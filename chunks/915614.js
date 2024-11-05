n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    l = n(481060),
    s = n(96685);
function a(e) {
    let { onClick: t, keybind: n, className: o, IconComponent: a } = e;
    return (0, i.jsxs)('div', {
        className: r()(s.buttonContainer, o),
        children: [
            (0, i.jsx)(l.Clickable, {
                className: s.button,
                onClick: t,
                'aria-hidden': !0,
                children: (0, i.jsx)(a, {
                    size: 'md',
                    color: 'currentColor',
                    'aria-hidden': !0
                })
            }),
            null != n
                ? (0, i.jsx)(l.Text, {
                      className: r()(s.keybind),
                      'aria-hidden': !0,
                      variant: 'text-xxs/bold',
                      color: 'interactive-normal',
                      children: n
                  })
                : null
        ]
    });
}
