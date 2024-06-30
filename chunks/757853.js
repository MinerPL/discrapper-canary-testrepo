n.d(t, {
    F: function () {
        return F;
    }
});
var l = n(735250), a = n(470079), i = n(120356), s = n.n(i), r = n(913527), c = n.n(r), o = n(91192), u = n(442837), d = n(481060), _ = n(700582), h = n(724757), E = n(212819), f = n(933557), S = n(266076), g = n(448486), I = n(987509), A = n(592125), p = n(430824), m = n(158776), b = n(306680), C = n(699516), L = n(594174), N = n(104175), T = n(55935), Z = n(823379), y = n(51144), x = n(784384), v = n(490897), R = n(971892);
function M(e) {
    let {
            destination: t,
            icon: n,
            label: i,
            subLabel: r,
            selected: c,
            disabled: u,
            onPressDestination: _,
            'aria-setsize': h,
            'aria-posinset': E
        } = e, f = a.useCallback(() => {
            null == _ || _(t);
        }, [
            _,
            t
        ]), S = (0, o.JA)(t.id);
    return (0, l.jsxs)(d.Clickable, {
        className: s()(R.destinationRow, { [R.disabled]: u }),
        onClick: u ? void 0 : f,
        'aria-selected': c,
        'aria-setsize': h,
        'aria-posinset': E,
        ...S,
        children: [
            (0, l.jsxs)('div', {
                className: R.identity,
                children: [
                    (0, l.jsx)('div', {
                        className: R.iconWrapper,
                        children: n
                    }),
                    (0, l.jsxs)('div', {
                        className: R.labels,
                        children: [
                            (0, l.jsx)(d.Text, {
                                tag: 'strong',
                                className: R.label,
                                variant: 'text-md/semibold',
                                lineClamp: 1,
                                children: i
                            }),
                            (0, l.jsx)(d.Text, {
                                className: R.subLabel,
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: r
                            })
                        ]
                    })
                ]
            }),
            !u && (0, l.jsx)(d.Checkbox, {
                type: d.Checkbox.Types.INVERTED,
                displayOnly: !0,
                size: 24,
                value: c,
                className: R.checkbox
            })
        ]
    });
}
function P(e) {
    let {
            user: t,
            subLabel: n,
            ...a
        } = e, i = y.ZP.useName(t), s = y.ZP.useUserTag(t, { decoration: 'never' }), r = (0, u.e7)([C.Z], () => C.Z.getNickname(t.id)), c = (0, u.e7)([m.Z], () => m.Z.getStatus(t.id));
    return (0, l.jsx)(M, {
        ...a,
        icon: (0, l.jsx)(_.Z, {
            'aria-hidden': !0,
            size: d.AvatarSizes.SIZE_32,
            user: t,
            status: c
        }),
        label: null != r ? r : i,
        subLabel: null != n ? n : s
    });
}
function D(e) {
    let {
            channel: t,
            subLabel: n,
            ...a
        } = e, i = (0, f.ZP)(t), s = (0, g._)(t);
    return (0, l.jsx)(M, {
        ...a,
        icon: (0, l.jsx)(S.Z, {
            'aria-hidden': !0,
            size: d.AvatarSizes.SIZE_32,
            channel: t,
            experimentLocation: 'forward-modal'
        }),
        label: i,
        subLabel: null != n ? n : s
    });
}
function O(e) {
    let {
            channel: t,
            subLabel: n,
            ...a
        } = e, i = (0, u.e7)([p.Z], () => p.Z.getGuild(null == t ? void 0 : t.guild_id)), s = (0, f.ZP)(t), r = (0, u.e7)([
            A.Z,
            L.default,
            C.Z
        ], () => {
            let e = A.Z.getChannel(t.parent_id);
            return null == e ? null : (0, f.F6)(e, L.default, C.Z, !1);
        }), o = (0, u.e7)([b.ZP], () => b.ZP.lastMessageTimestamp(t.id, v.W.CHANNEL)), _ = null == i ? void 0 : i.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? d.ForumIcon : d.TextIcon;
        _ = (0, l.jsxs)('div', {
            className: R.threadSubLabel,
            children: [
                (0, l.jsx)(e, {
                    color: d.tokens.colors.TEXT_SECONDARY,
                    className: R.subLabelIcon
                }),
                (0, l.jsx)(d.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: r
                }),
                null != o ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(d.Text, {
                            className: R.subLabelSeparator,
                            variant: 'text-xs/medium',
                            color: 'text-secondary',
                            children: '\u2022'
                        }),
                        (0, l.jsx)(d.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-secondary',
                            children: (0, T.Xf)(c()(o))
                        })
                    ]
                }) : null
            ]
        });
    }
    return (0, l.jsx)(M, {
        ...a,
        icon: (0, l.jsx)(N.Z, {
            size: N.E.SMALL_32,
            guild: i,
            channel: t
        }),
        label: s,
        subLabel: null != n ? n : _
    });
}
function F(e) {
    let {
            rowData: t,
            message: n,
            originChannel: i,
            selectedDestinations: s,
            handleToggleDestination: r,
            disableSelection: c,
            ...u
        } = e, _ = a.useMemo(() => [t.length], [t.length]), f = a.useCallback(() => 48, []), S = a.useMemo(() => {
            var e;
            return null !== (e = null == s ? void 0 : s.map(I.hC)) && void 0 !== e ? e : [];
        }, [s]), g = a.useCallback(e => {
            let {
                section: a,
                row: s
            } = e;
            if (a > 0)
                return;
            let {
                type: o,
                record: u
            } = t[s];
            if (o === E.h8.HEADER)
                return;
            let d = o === E.h8.USER ? {
                    type: 'user',
                    id: u.id
                } : {
                    type: 'channel',
                    id: u.id
                }, _ = (0, I.hC)(d), h = (0, x.H)(n, i, u), f = S.includes(_), g = {
                    key: _,
                    destination: d,
                    subLabel: null != h ? h.label : void 0,
                    disabled: c && !f || null != h,
                    selected: f,
                    onPressDestination: r,
                    'aria-posinset': s + 1,
                    'aria-setsize': t.length
                };
            if (o === E.h8.USER)
                return (0, l.jsx)(P, {
                    user: u,
                    ...g
                });
            if (o === E.h8.GROUP_DM)
                return (0, l.jsx)(D, {
                    channel: u,
                    ...g
                });
            if (o === E.h8.TEXT_CHANNEL || o === E.h8.VOICE_CHANNEL)
                return (0, l.jsx)(O, {
                    channel: u,
                    ...g
                });
            else
                (0, Z.vE)(o);
        }, [
            c,
            r,
            n,
            i,
            t,
            S
        ]), A = a.useRef(null), p = (0, h.Z)('forward-modal', A);
    return (0, l.jsx)(o.bG, {
        navigator: p,
        children: (0, l.jsx)(o.SJ, {
            children: e => {
                let {
                    ref: t,
                    ...n
                } = e;
                return (0, l.jsx)(d.ModalListContent, {
                    scrollerRef: e => {
                        var n;
                        A.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
                    },
                    ...n,
                    ...u,
                    sections: _,
                    sectionHeight: 0,
                    renderRow: g,
                    rowHeight: f
                });
            }
        })
    });
}
