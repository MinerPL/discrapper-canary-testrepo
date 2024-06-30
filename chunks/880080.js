n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(920906), s = n(90004);
let l = Object.freeze({
        tension: 400,
        friction: 30
    }), u = Object.freeze({
        opacity: 0,
        height: 8,
        x: -4
    });
function c(e) {
    let {
        selected: t = !1,
        hovered: n = !1,
        unread: i = !1,
        disabled: c = !1,
        className: d
    } = e;
    t = !c && t, n = !c && n, i = !c && i;
    let _ = {
            opacity: 1,
            height: t ? 40 : n ? 20 : 8,
            x: 0
        }, E = (0, o.useTransition)(t || n || i, {
            config: l,
            keys: e => e ? 'pill' : 'empty',
            immediate: !n && !document.hasFocus(),
            initial: t || n || i ? _ : null,
            from: u,
            leave: u,
            enter: _,
            update: _
        });
    return (0, r.jsx)('div', {
        className: a()(d, s.wrapper),
        'aria-hidden': !0,
        children: E((e, t) => t && (0, r.jsx)(o.animated.span, {
            className: s.item,
            style: e
        }))
    });
}
