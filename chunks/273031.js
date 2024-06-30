n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(481060), l = n(404975), u = n(53959);
function c(e) {
    let {
        onClick: t,
        children: n,
        tooltip: a,
        dangerous: c = !1,
        className: d,
        'aria-label': _
    } = e;
    return (0, r.jsx)(s.Tooltip, {
        text: a,
        hideOnClick: !0,
        children: e => {
            let {
                onMouseEnter: s,
                onMouseLeave: E,
                onClick: f
            } = e;
            return (0, r.jsx)(l.zx, {
                onMouseEnter: s,
                onMouseLeave: E,
                onClick: e => {
                    e.stopPropagation(), null == f || f(), t(e);
                },
                dangerous: c,
                'aria-label': null != _ ? _ : a,
                className: d,
                children: i.Children.map(n, e => i.isValidElement(e) ? i.cloneElement(e, { className: o()(e.props.className, u.actionBarIcon) }) : e)
            });
        }
    });
}
