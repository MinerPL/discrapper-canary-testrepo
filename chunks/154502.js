n.d(t, {
    Z: function () {
        return l;
    }
});
var s = n(735250);
n(470079);
var a = n(481060), i = n(556012), r = n(780781);
function l(e) {
    var t;
    let {
            action: n,
            actionType: l,
            triggerType: o
        } = e, c = (0, i.c)(null !== (t = null == n ? void 0 : n.type) && void 0 !== t ? t : l, n, o);
    if (null == c)
        return null;
    let {
        headerText: d,
        helperText: u,
        icon: _
    } = c;
    return (0, s.jsxs)('div', {
        className: r.actionContainer,
        children: [
            (0, s.jsx)('div', {
                className: r.actionIconContainer,
                children: (0, s.jsx)(_, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 14,
                    height: 14,
                    className: r.actionIcon
                })
            }),
            (0, s.jsx)('div', {
                className: r.actionTextContainer,
                children: (0, s.jsxs)(a.Text, {
                    className: r.actionTextHeader,
                    variant: 'text-xs/medium',
                    color: 'interactive-normal',
                    children: [
                        d,
                        null != u && (0, s.jsx)(a.Text, {
                            className: r.actionTextHelper,
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            tag: 'span',
                            children: u
                        })
                    ]
                })
            })
        ]
    });
}
