n.d(t, {
    Z: function () {
        return R;
    },
    a: function () {
        return i;
    }
});
var r, i, a = n(735250), o = n(470079), s = n(120356), l = n.n(s), u = n(873546), c = n(442837), d = n(481060), _ = n(607070), E = n(100527), f = n(906732), h = n(979264), p = n(372900), m = n(463396), I = n(477734), T = n(484459), g = n(467679), S = n(768581), A = n(51063), N = n(981631), v = n(250050);
function O(e) {
    let {compact: t} = e;
    return (0, a.jsx)(g.Z, {
        className: t ? v.botTagCompact : v.botTagCozy,
        type: g.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function R(e) {
    var t;
    let n, {
            author: r,
            message: i,
            channel: s,
            userOverride: g,
            compact: R = !1,
            withMentionPrefix: C = !1,
            showPopout: y = !1,
            className: D,
            onClick: L,
            onContextMenu: b,
            onPopoutRequestClose: M,
            renderPopout: P,
            renderRemixTag: U = !1,
            decorations: w
        } = e, x = o.useContext(p.Z), G = null !== (t = null == s ? void 0 : s.guild_id) && void 0 !== t ? t : x, {analyticsLocations: k} = (0, f.ZP)(E.Z.USERNAME), {
            nick: B,
            colorString: F,
            colorRoleName: V
        } = r, H = null != i.messageReference && null != i.webhookId && i.hasFlag(N.iLy.IS_CROSSPOST), Z = (0, c.e7)([_.Z], () => _.Z.roleStyle), Y = (0, I.X$)(), j = o.useMemo(() => ({
            source: N.jXE.CHANNEL,
            messageId: i.id,
            tagUserId: i.author.id
        }), [
            i.id,
            i.author.id
        ]), W = {
            className: v.username,
            style: 'username' === Z && null != F ? { color: F } : void 0,
            onClick: L,
            onContextMenu: b,
            children: (0, a.jsx)(a.Fragment, { children: (C ? '@' : '') + B })
        }, K = o.useMemo(() => R ? (0, a.jsx)(h.ZP, {
            clan: r.clan,
            userId: i.author.id,
            contextGuildId: G,
            className: v.clanTagChiplet,
            profileViewedAnalytics: j
        }) : null, [
            R,
            j,
            r.clan,
            G,
            i.author.id
        ]);
    n = null != P && null != y ? (0, a.jsx)(d.Popout, {
        preload: H ? void 0 : function () {
            let e = null != g ? g : i.author;
            return (0, T.W)(e.id, null != r.guildMemberAvatar && null != G ? (0, S.JM)({
                guildId: G,
                userId: e.id,
                avatar: r.guildMemberAvatar,
                size: 80
            }) : e.getAvatarURL(G, 80), {
                guildId: G,
                channelId: i.channel_id
            });
        },
        renderPopout: P,
        shouldShow: y,
        position: u.tq ? 'window_center' : 'right',
        onRequestClose: M,
        children: e => {
            let {
                onClick: t,
                ...n
            } = e;
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(d.Clickable, {
                        tag: 'span',
                        ...n,
                        ...W,
                        className: l()(W.className, v.clickable, D)
                    }),
                    K
                ]
            });
        }
    }) : (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(d.Clickable, {
                ...W,
                className: l()(W.className, D)
            }),
            K
        ]
    });
    let z = null != w ? w[0] : null, q = null != w ? w[1] : null;
    return (0, a.jsxs)(f.Gt, {
        value: k,
        children: [
            null != z && R ? (0, a.jsxs)(a.Fragment, {
                children: [
                    ' ',
                    z,
                    ' '
                ]
            }) : null,
            'dot' === Z ? (0, a.jsx)(d.RoleDot, {
                color: F,
                name: V,
                className: v.roleDot
            }) : null,
            n,
            !R && (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(h.ZP, {
                        clan: r.clan,
                        userId: i.author.id,
                        contextGuildId: G,
                        className: v.clanTagChiplet,
                        profileViewedAnalytics: j
                    }),
                    (0, a.jsx)(A.Z, { message: i })
                ]
            }),
            null != q ? (0, a.jsx)(a.Fragment, { children: q }) : null,
            null == z || R ? null : z,
            null != i && (0, m.f)(i) && Y && U ? (0, a.jsx)(O, {}) : null
        ]
    });
}
(r = i || (i = {}))[r.SYSTEM_TAG = 0] = 'SYSTEM_TAG', r[r.BADGES = 1] = 'BADGES';
