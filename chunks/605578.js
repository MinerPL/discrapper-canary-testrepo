n.d(t, {
    k: function () {
        return s;
    }
});
var r = n(735250), i = n(470079), a = n(1561), o = n(101817);
function s(e) {
    let {
            tag: t = 'div',
            children: n,
            className: s,
            focusProps: l,
            onClick: u,
            onDoubleClick: c,
            onContextMenu: d,
            onKeyDown: _,
            onFocus: E,
            onBlur: f,
            onMouseOver: h,
            onMouseDown: p,
            onMouseLeave: m,
            buttonProps: I,
            'aria-label': T
        } = e, g = i.useRef(null);
    return (0, r.jsxs)(t, {
        ref: g,
        className: s,
        onClick: u,
        onMouseOver: h,
        onMouseLeave: m,
        onDoubleClick: c,
        onContextMenu: d,
        children: [
            (0, r.jsx)(a.P, {
                ...I,
                focusProps: {
                    ringTarget: g,
                    ...l
                },
                className: o.focusTarget,
                'aria-label': T,
                onClick: e => {
                    e.stopPropagation(), null == u || u(e);
                },
                onKeyDown: _,
                onFocus: E,
                onBlur: f,
                onMouseDown: p
            }),
            n
        ]
    });
}
