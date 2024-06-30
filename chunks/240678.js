n.r(e), n.d(e, {
    default: function () {
        return O;
    }
});
var T = n(735250);
n(470079);
var I = n(374470), i = n(481060), E = n(239091), r = n(911969), N = n(299206), o = n(26737), s = n(905041), S = n(89013), a = n(570870), _ = n(449751), p = n(601184), c = n(168405), d = n(689938);
function O(t) {
    var e;
    let n, O, A, {
            channel: u,
            message: G,
            target: h,
            mediaItem: l,
            onSelect: y,
            onHeightUpdate: R
        } = t, Z = h;
    if (null != l)
        O = n = l.url;
    else
        for (; (0, I.k)(Z);)
            (0, I.k)(Z, HTMLImageElement) && null != Z.src && (O = Z.src), (0, I.k)(Z, HTMLAnchorElement) && null != Z.href && (n = Z.href, A = Z.textContent), Z = Z.parentNode;
    let M = null === (e = document.getSelection()) || void 0 === e ? void 0 : e.toString(), f = (0, o.Z)(M), C = (0, S.Z)(M), m = (0, a.Z)({
            commandType: r.yU.MESSAGE,
            commandTargetId: G.id,
            channel: u,
            guildId: void 0,
            onHeightUpdate: R
        }), g = (0, c.Z)(G, u), P = (0, _.Z)(G, u), D = (0, p.Z)(G, u), U = (0, s.Z)(null != n ? n : O, A), H = (0, N.Z)({
            id: G.id,
            label: d.Z.Messages.COPY_ID_MESSAGE,
            shiftId: ''.concat(G.channel_id, '-').concat(G.id)
        });
    return (0, T.jsxs)(i.Menu, {
        navId: 'message',
        onClose: E.Zy,
        'aria-label': d.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
        onSelect: y,
        children: [
            (0, T.jsx)(i.MenuGroup, { children: f }),
            (0, T.jsx)(i.MenuGroup, { children: C }),
            (0, T.jsxs)(i.MenuGroup, {
                children: [
                    m,
                    g,
                    P,
                    D
                ]
            }),
            (0, T.jsx)(i.MenuGroup, { children: U }),
            (0, T.jsx)(i.MenuGroup, { children: H })
        ]
    });
}
