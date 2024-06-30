n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(693789), s = n(481060), l = n(717633);
function u(e) {
    let {
            variant: t,
            text: n,
            icon: i,
            tooltipDelay: u,
            tooltipClassName: c,
            tooltipContainerClassName: d,
            className: _,
            innerClassName: E,
            ...f
        } = e, h = {
            [l.text]: 'text' === t,
            [l.icon]: 'icon' === t,
            [l.banner]: 'banner' === t
        };
    return (0, r.jsx)(s.TooltipContainer, {
        text: n,
        'aria-label': f['aria-label'],
        delay: u,
        className: d,
        tooltipClassName: c,
        shouldShow: 'text' !== t,
        children: (0, r.jsxs)(o.zx, {
            className: a()(l.button, h, _),
            innerClassName: a()(l.buttonInner, h, E),
            color: a()(o.Tt.PRIMARY, l.color, h),
            look: o.zx.Looks.FILLED,
            size: 'text' === t ? o.zx.Sizes.SMALL : o.zx.Sizes.NONE,
            grow: 'text' === t,
            ...f,
            children: [
                null != i && (0, r.jsx)(i, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                'text' === t && n
            ]
        })
    });
}
