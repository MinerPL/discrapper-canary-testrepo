r.r(n);
var i = r(735250);
r(470079);
var s = r(481060), a = r(239091), t = r(883385), l = r(108843), d = r(911969), o = r(947440), u = r(100527), c = r(441061), Z = r(167675), m = r(737013), f = r(145474), M = r(299206), h = r(819403), g = r(777658), E = r(858488), v = r(185457), _ = r(570870), x = r(389052), I = r(24311), p = r(915193), C = r(332576), N = r(710631), S = r(297047), j = r(88966), R = r(397616), A = r(558924), U = r(991307), T = r(725119), O = r(700994), P = r(332031), G = r(981631), b = r(689938);
n.default = (0, l.Z)((0, t.Z)(function (e) {
    var n;
    let {
            user: r,
            channel: t,
            context: l,
            showChatItems: u = !0,
            showMediaItems: G = !1,
            showChannelCallItems: F = !1,
            showModalItems: L = !0,
            onSelect: w,
            onHeightUpdate: k
        } = e, y = (0, T.Z)(r.id, null), V = (0, S.Z)(r, null, l), z = (0, A.Z)(r.id, t.id), D = (0, j.Z)(r.id, l), W = (0, I.Z)({
            user: r,
            context: l
        }), H = (0, v.Z)({
            user: r,
            context: l
        }), K = (0, E.Z)({ user: r }), B = (0, O.Z)(r.id), Y = (0, R.Z)(r.id, t.id), X = (0, U.Z)(r.id), q = (0, f.P)({
            userId: r.id,
            channelId: t.id,
            location: 'GroupDMUserContextMenu'
        }), J = (0, C.Z)(r.id, t.id), Q = (0, N.Z)({ user: r }), $ = (0, o.Z)(null, r), ee = (0, g.Z)(r), en = (0, x.Z)({ user: r }), er = (0, M.Z)({
            id: r.id,
            label: b.Z.Messages.COPY_ID_USER
        }), ei = (0, P.Z)(r.id), es = (0, Z.Z)(r.id), ea = (0, c.Z)(t.id), et = (0, h.Z)(r), el = (0, m.Z)(r.id), ed = (0, _.Z)({
            commandType: d.yU.USER,
            commandTargetId: r.id,
            channel: t,
            guildId: void 0,
            onHeightUpdate: k
        }), eo = (0, p.Z)(r, t), eu = r.isNonUserBot(), ec = t.isManaged(), eZ = null === (n = t.recipients) || void 0 === n ? void 0 : n.includes(r.id);
    return (0, i.jsxs)(s.Menu, {
        navId: 'user-context',
        onClose: a.Zy,
        'aria-label': b.Z.Messages.USER_ACTIONS_MENU_LABEL,
        onSelect: w,
        children: [
            !eu && (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.MenuGroup, { children: et }),
                    (0, i.jsxs)(s.MenuGroup, {
                        children: [
                            L && y,
                            u && V,
                            D,
                            W,
                            !ec && z,
                            L && H,
                            L && K,
                            ei
                        ]
                    }),
                    G && (0, i.jsx)(s.MenuGroup, { children: B }),
                    eZ && (0, i.jsxs)(s.MenuGroup, {
                        children: [
                            !ec && Y,
                            eo
                        ]
                    }),
                    (0, i.jsx)(s.MenuGroup, { children: L && $ }),
                    (0, i.jsxs)(s.MenuGroup, {
                        children: [
                            G && X,
                            G && q,
                            G && J,
                            ed,
                            L && Q,
                            ee,
                            L && en,
                            G && el
                        ]
                    }),
                    F && (0, i.jsxs)(s.MenuGroup, {
                        children: [
                            ea,
                            es
                        ]
                    })
                ]
            }),
            (0, i.jsx)(s.MenuGroup, { children: er })
        ]
    });
}, { object: G.qAy.CONTEXT_MENU }), [
    u.Z.CONTEXT_MENU,
    u.Z.GROUP_DM_USER_MENU
]);
