t.r(n);
var i = t(735250);
t(470079);
var a = t(481060), s = t(239091), u = t(108843), r = t(100527), l = t(299206), d = t(895563), o = t(32750), c = t(109764), M = t(323597), _ = t(461535), E = t(438536), Z = t(251746), N = t(193987), O = t(933793), f = t(13736), T = t(732393), A = t(214906), U = t(612856), h = t(137591), g = t(689938);
n.default = (0, u.Z)(function (e) {
    let {
            channel: n,
            onSelect: t
        } = e, u = (0, c.Z)(n), r = (0, _.Z)(n), S = (0, A.Z)(n), m = (0, o.Z)(n), R = (0, N.Z)(n), I = (0, M.Z)(n), C = (0, l.Z)({
            id: n.id,
            label: g.Z.Messages.COPY_ID_THREAD
        }), G = (0, E.Z)(n, 'Context Menu'), L = (0, O.Z)(n), p = (0, U.Z)(n), v = (0, f.Z)(n), b = (0, T.Z)(n.id), P = (0, Z.Z)(n), j = (0, h.Z)(n), x = (0, d.l)(n), D = (0, d.P)(n);
    return (0, i.jsxs)(a.Menu, {
        navId: 'thread-context',
        onClose: s.Zy,
        'aria-label': g.Z.Messages.THREAD_ACTIONS_MENU_LABEL,
        onSelect: t,
        children: [
            (0, i.jsxs)(a.MenuGroup, {
                children: [
                    r,
                    x
                ]
            }, 'mark-as-read-or-favorite'),
            (0, i.jsxs)(a.MenuGroup, {
                children: [
                    G,
                    P,
                    m,
                    R,
                    v,
                    b,
                    u
                ]
            }, 'thread-actions'),
            (0, i.jsxs)(a.MenuGroup, {
                children: [
                    S,
                    p
                ]
            }, 'notifications'),
            (0, i.jsx)(a.MenuGroup, { children: D }),
            (0, i.jsxs)(a.MenuGroup, {
                children: [
                    j,
                    L,
                    I
                ]
            }, 'admin-actions'),
            (0, i.jsx)(a.MenuGroup, { children: C }, 'developer-actions')
        ]
    });
}, [
    r.Z.CONTEXT_MENU,
    r.Z.CHANNEL_LIST_THREAD_MENU
]);
