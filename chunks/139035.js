t.r(n);
var a = t(735250);
t(470079);
var i = t(481060), s = t(239091), r = t(108843), l = t(100527), u = t(299206), d = t(916069), o = t(697229), c = t(212205), _ = t(423589), Z = t(411567), E = t(672824), M = t(3689), C = t(323597), A = t(852245), N = t(461535), g = t(776568), h = t(218035), f = t(775666), I = t(442754), O = t(623483), T = t(689938);
function p(e) {
    let {
            channel: n,
            onSelect: t
        } = e, r = (0, N.Z)(n), l = (0, g.ZP)(n), d = (0, h.Z)(n), M = (0, E.Z)(n), C = (0, Z.Z)(n), A = (0, c.Z)(n), I = (0, o.Z)(n), p = (0, O.Z)(n), L = (0, u.Z)({
            id: n.id,
            label: T.Z.Messages.COPY_ID_CHANNEL
        }), G = (0, _.Mn)('ChannelCategoryFavoritesMenu'), x = (0, f.ZP)(n);
    return (0, a.jsxs)(i.Menu, {
        navId: 'channel-context',
        onClose: s.Zy,
        'aria-label': T.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
        onSelect: t,
        children: [
            (0, a.jsxs)(i.MenuGroup, {
                children: [
                    r,
                    I,
                    A
                ]
            }),
            (0, a.jsxs)(i.MenuGroup, {
                children: [
                    l,
                    G ? x : d
                ]
            }),
            (0, a.jsxs)(i.MenuGroup, {
                children: [
                    M,
                    C
                ]
            }),
            (0, a.jsx)(i.MenuGroup, { children: p }),
            (0, a.jsx)(i.MenuGroup, { children: L })
        ]
    });
}
function L(e) {
    let {
            channel: n,
            guild: t,
            onSelect: r
        } = e, l = (0, N.Z)(n), d = (0, g.ZP)(n), o = (0, h.Z)(n), O = (0, E.Z)(n), p = (0, Z.Z)(n), L = (0, A.Z)(n), G = (0, c.Z)(n), x = (0, M.Z)(n, t), j = (0, C.Z)(n), P = (0, u.Z)({
            id: n.id,
            label: T.Z.Messages.COPY_ID_CHANNEL
        }), R = (0, I.Z)(n), v = (0, _.Mn)('ChannelCategoryNormalMenu'), m = (0, f.ZP)(n);
    return (0, a.jsxs)(i.Menu, {
        navId: 'channel-context',
        onClose: s.Zy,
        'aria-label': T.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
        onSelect: r,
        children: [
            (0, a.jsx)(i.MenuGroup, { children: l }, 'mark-as-read'),
            (0, a.jsxs)(i.MenuGroup, {
                children: [
                    R,
                    O,
                    p
                ]
            }, 'channel-actions'),
            (0, a.jsxs)(i.MenuGroup, {
                children: [
                    d,
                    v ? m : o
                ]
            }, 'notifications'),
            (0, a.jsxs)(i.MenuGroup, {
                children: [
                    L,
                    G,
                    x,
                    j
                ]
            }, 'admin-actions'),
            (0, a.jsx)(i.MenuGroup, { children: P }, 'developer-actions')
        ]
    });
}
n.default = (0, r.Z)(function (e) {
    return (0, d.Z)() ? (0, a.jsx)(p, { ...e }) : (0, a.jsx)(L, { ...e });
}, [
    l.Z.CONTEXT_MENU,
    l.Z.CHANNEL_CATEGORY_MENU
]);
