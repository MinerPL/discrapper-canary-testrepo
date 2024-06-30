n.d(t, {
    m: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var l = n(120356), r = n.n(l), a = n(91192), s = n(589440), o = n(481060), c = n(595954), u = n(47705), d = n(359123);
function h(e) {
    var t;
    let {
            id: n,
            className: l,
            innerClassName: h,
            renderIcon: p,
            text: _,
            selected: f,
            trailing: m,
            showUnread: g = !1,
            ...C
        } = e, I = (0, a.JA)(n), E = null !== (t = (0, s.q)(_)) && void 0 !== t ? t : '';
    return (0, i.jsx)('li', {
        children: (0, i.jsxs)(o.ClickableContainer, {
            ...C,
            buttonProps: {
                ...I,
                id: n,
                role: 'button'
            },
            tag: 'div',
            'aria-label': E,
            focusProps: {
                offset: {
                    top: 1,
                    bottom: 1,
                    right: 4
                }
            },
            onContextMenu: null != C.onContextMenu ? C.onContextMenu : e => {
                e.stopPropagation();
            },
            className: r()(u.containerDefault, d.wrapper, { [d.modeSelected]: f }, l),
            children: [
                g ? (0, i.jsx)('div', { className: r()(d.unread, d.unreadImportant) }) : null,
                (0, i.jsx)('div', {
                    className: r()([
                        d.link,
                        d.basicChannelRowLink,
                        h
                    ]),
                    children: (0, i.jsxs)('div', {
                        className: c.content,
                        children: [
                            (0, i.jsx)('div', {
                                className: d.iconContainer,
                                children: p(d.icon)
                            }),
                            (0, i.jsx)('div', {
                                className: d.name,
                                'aria-hidden': !0,
                                children: _
                            }),
                            m
                        ]
                    })
                })
            ]
        })
    });
}
