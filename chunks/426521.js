n.d(t, {
    U: function () {
        return D;
    }
});
var i = n(735250), a = n(470079), s = n(481060), l = n(99690), r = n(906732), o = n(336197), c = n(454585), d = n(171368), u = n(695346), _ = n(598077), E = n(594174), m = n(626135), I = n(709054), T = n(591759), h = n(833592), N = n(497089), f = n(178480), p = n(418316), C = n(526146), g = n(400565), S = n(148789), A = n(11825), x = n(981631), O = n(689938), R = n(749967), M = n(756688), v = n(886765);
function L(e) {
    var t, n, a;
    let {item: r} = e, o = null === (t = r.message) || void 0 === t ? void 0 : t.content;
    if (null == o)
        return (0, i.jsx)('div', {});
    let d = null !== (a = E.default.getUser(null === (n = r.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== a ? a : new _.Z(r.other_user), u = c.Z.parse(o);
    return (0, i.jsxs)('div', {
        className: R.messagePreviewContainer,
        children: [
            (0, i.jsx)(l.Z, {
                user: d,
                size: s.AvatarSizes.SIZE_24
            }),
            (0, i.jsx)(s.Text, {
                className: R.messagePreviewText,
                variant: 'text-sm/normal',
                lineClamp: 2,
                children: u
            })
        ]
    });
}
function Z(e) {
    let {
        item: {callout: t}
    } = e;
    if (null == t)
        return null;
    let n = c.Z.parse(t);
    return (0, i.jsx)('div', {
        className: R.calloutContainer,
        children: (0, i.jsx)(s.Text, {
            variant: 'text-sm/normal',
            lineClamp: 2,
            children: n
        })
    });
}
function P(e) {
    let {item: t} = e, n = v, a = O.Z.Messages.NOTIFICATION_CENTER_TODO;
    return t.completed && (n = M, a = O.Z.Messages.NOTIFICATION_CENTER_DONE), (0, i.jsxs)('div', {
        className: R.lifecycleContainer,
        children: [
            (0, i.jsx)('img', {
                className: R.checkbox,
                alt: '',
                src: n
            }),
            (0, i.jsx)(s.Text, {
                className: R.lifecycleText,
                variant: 'text-xs/bold',
                color: 'header-secondary',
                children: a
            })
        ]
    });
}
let b = a.memo(function (e) {
        var t;
        let {
                item: l,
                ackedBeforeId: u
            } = e, {analyticsLocations: _} = (0, r.ZP)(), E = (0, C.I)(l, u), O = a.useCallback(async () => {
                if (!E && (0, h.wt)(l), null != l.item_enum && l.item_enum === N.AM.FIND_FRIENDS) {
                    (0, s.openModalLazy)(async () => {
                        let {default: e} = await n.e('6074').then(n.bind(n, 443189));
                        return t => (0, i.jsx)(e, {
                            source: 'Notification Center',
                            ...t
                        });
                    });
                    return;
                }
                if (null != l.deeplink) {
                    let t = T.Z.safeParseWithQuery(l.deeplink);
                    if (null == t)
                        return;
                    let n = t.hostname, i = t.path;
                    if (null == n || null == i)
                        return;
                    if (T.Z.isDiscordHostname(n)) {
                        let t = i.match('^/users/(\\d+)');
                        if (null != t && 2 === t.length) {
                            var e;
                            (0, d.openUserProfileModal)({
                                userId: t[1],
                                messageId: null === (e = l.message) || void 0 === e ? void 0 : e.id,
                                sourceAnalyticsLocations: _,
                                analyticsLocation: { section: x.jXE.NOTIFICATION_CENTER }
                            });
                        } else
                            await (0, o.Z)(i);
                    }
                    m.default.track(x.rMx.NOTIFICATION_CENTER_ACTION, {
                        action_type: N.ud.CLICKED,
                        notification_center_id: l.id,
                        item_type: l.type,
                        acked: E
                    });
                }
            }, [
                l,
                E,
                _
            ]), M = null;
        l.type === N.O7.INCOMING_FRIEND_REQUESTS && null != l.other_user && (M = (0, i.jsx)(S.Z, { userId: l.other_user.id }));
        let v = null != l.local_id, b = (0, p.Z)(l);
        return (0, i.jsxs)('div', {
            className: R.row,
            children: [
                (0, i.jsxs)(s.ClickableContainer, {
                    className: R.rowContent,
                    focusProps: { offset: 4 },
                    'aria-label': b,
                    onClick: O,
                    children: [
                        E ? null : (0, i.jsx)('div', { className: R.unread }),
                        (0, i.jsx)(g.U, { item: l }),
                        (0, i.jsxs)('div', {
                            className: R.body,
                            children: [
                                'lifecycle_item' === l.type && null != l.item_enum && (0, i.jsx)(P, { item: l }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-md/normal',
                                    color: E ? 'text-muted' : 'text-normal',
                                    children: 'string' != typeof b ? b : c.Z.parse(b)
                                }),
                                (null === (t = l.message) || void 0 === t ? void 0 : t.content) != null ? (0, i.jsx)(L, { item: l }) : null,
                                null != l.callout ? (0, i.jsx)(Z, { item: l }) : null,
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/medium',
                                    color: E ? 'text-muted' : 'header-secondary',
                                    children: (0, f.a3)(I.default.extractTimestamp(l.id))
                                }),
                                M
                            ]
                        })
                    ]
                }),
                v ? null : (0, i.jsx)(A.z, { item: l })
            ]
        });
    }), D = a.memo(function (e) {
        let {items: t} = e, n = u.d$.useSetting();
        return (0, i.jsx)(i.Fragment, {
            children: t.map(e => (0, i.jsx)(b, {
                item: e,
                ackedBeforeId: n
            }, e.id))
        });
    });
