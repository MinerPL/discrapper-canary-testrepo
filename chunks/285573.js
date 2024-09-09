var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(239091),
    c = n(146773),
    u = n(592125),
    d = n(984933),
    h = n(496675),
    p = n(98597),
    _ = n(473403),
    f = n(981631),
    g = n(490897),
    m = n(391463);
let C = (0, c.B)(function (e) {
    let { guild: t, selectedChannelId: r, position: c, disableManageChannels: C, sorting: I, sortingType: E, sortingPosition: N, connectChannelDragSource: x, connectChannelDropTarget: S, tabIndex: v } = e,
        Z = (0, s.e7)([u.Z, d.ZP], () => {
            let e = d.ZP.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : u.Z.getChannel(e[0]);
        }),
        T = (0, s.e7)([u.Z], () => u.Z.getChannel(null == Z ? void 0 : Z.parent_id)),
        L = r === (null == Z ? void 0 : Z.id),
        A = (0, s.e7)([h.Z], () => (null != T ? h.Z.can(f.Plq.MANAGE_CHANNELS, T) : null != t && h.Z.can(f.Plq.MANAGE_CHANNELS, t))),
        b = l.useCallback(
            (e) => {
                null != Z &&
                    (0, o.jW)(e, async () => {
                        let { default: e } = await n.e('70623').then(n.bind(n, 99334));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                channel: Z
                            });
                    });
            },
            [Z]
        );
    if (null == Z) return null;
    let M = (0, p.jo)(c, N),
        R = (0, p.CN)(Z, I, E),
        O = (0, i.jsx)('div', {
            className: a()(M, {
                [m.disabled]: R,
                [m.selected]: L
            }),
            'data-dnd-name': Z.name,
            children: (0, i.jsxs)(_.Z, {
                className: m.iconVisibility,
                channel: Z,
                guild: t,
                selected: L,
                onContextMenu: b,
                forceInteractable: !0,
                resolvedUnreadSetting: g.i.ONLY_MENTIONS,
                children: [
                    (0, i.jsx)(p.eP, {
                        channel: Z,
                        tabIndex: v
                    }),
                    (0, i.jsx)(p.hR, {
                        channel: Z,
                        disableManageChannels: C,
                        tabIndex: v
                    })
                ]
            })
        });
    return A && (O = S(x(O))), O;
});
t.Z = C;
