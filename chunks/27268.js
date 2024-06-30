n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(481060), l = n(278297), u = n(689938), c = n(262931);
function d(e) {
    let {
            onPlay: t,
            className: n,
            inactive: a
        } = e, d = i.useRef(null), _ = (0, r.jsx)('div', {
            className: c.iconWrapper,
            ref: d,
            children: (0, r.jsx)(s.PlayIcon, {
                size: 'xs',
                color: 'currentColor',
                className: o()(c.icon)
            })
        });
    return (0, r.jsx)(l.G.Consumer, {
        children: e => a || null == t ? (0, r.jsx)('div', {
            className: c.cover,
            children: _
        }) : (0, r.jsx)(s.Clickable, {
            className: o()(n, c.cover, { [c.active]: !e.disableInteractions }),
            onClick: t,
            tabIndex: 0,
            'aria-label': u.Z.Messages.PLAY,
            focusProps: { ringTarget: d },
            children: _
        })
    });
}
