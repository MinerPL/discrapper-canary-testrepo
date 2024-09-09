n.d(t, {
    Z: function () {
        return R;
    },
    a: function () {
        return i;
    }
});
var r,
    i,
    a = n(735250),
    s = n(470079),
    o = n(120356),
    l = n.n(o),
    u = n(873546),
    c = n(442837),
    d = n(481060),
    _ = n(607070),
    E = n(100527),
    f = n(906732),
    h = n(385499),
    p = n(979264),
    m = n(372900),
    I = n(477734),
    T = n(184301),
    g = n(768581),
    S = n(463396),
    A = n(944192),
    N = n(981631),
    v = n(438379);
function O(e) {
    let { compact: t } = e;
    return (0, a.jsx)(h.Z, {
        className: t ? v.botTagCompact : v.botTagCozy,
        type: h.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function R(e) {
    var t;
    let n,
        { author: r, message: i, channel: o, userOverride: h, compact: R = !1, withMentionPrefix: C = !1, showPopout: y = !1, className: D, onClick: L, onContextMenu: b, onPopoutRequestClose: M, renderPopout: P, renderRemixTag: U = !1, decorations: w } = e,
        x = s.useContext(m.Z),
        G = null !== (t = null == o ? void 0 : o.guild_id) && void 0 !== t ? t : x,
        { analyticsLocations: k } = (0, f.ZP)(E.Z.USERNAME),
        { nick: B, colorString: F, colorRoleName: V } = r,
        H = null != i.messageReference && null != i.webhookId && i.hasFlag(N.iLy.IS_CROSSPOST),
        Z = (0, c.e7)([_.Z], () => _.Z.roleStyle),
        Y = (0, I.X$)(),
        j = s.useMemo(
            () => ({
                source: N.jXE.CHANNEL,
                messageId: i.id,
                tagUserId: i.author.id
            }),
            [i.id, i.author.id]
        ),
        W = {
            className: v.username,
            style: 'username' === Z && null != F ? { color: F } : void 0,
            onClick: L,
            onContextMenu: b,
            children: (0, a.jsx)(a.Fragment, { children: (C ? '@' : '') + B })
        },
        K = s.useMemo(
            () =>
                R
                    ? (0, a.jsx)(p.ZP, {
                          clan: r.clan,
                          userId: i.author.id,
                          contextGuildId: G,
                          className: v.clanTagChiplet,
                          profileViewedAnalytics: j
                      })
                    : null,
            [R, j, r.clan, G, i.author.id]
        );
    n =
        null != P && null != y
            ? (0, a.jsx)(d.Popout, {
                  preload: H
                      ? void 0
                      : function () {
                            let e = null != h ? h : i.author;
                            return (0, T.Z)(
                                e.id,
                                null != r.guildMemberAvatar && null != G
                                    ? (0, g.JM)({
                                          guildId: G,
                                          userId: e.id,
                                          avatar: r.guildMemberAvatar,
                                          size: 80
                                      })
                                    : e.getAvatarURL(G, 80),
                                {
                                    guildId: G,
                                    channelId: i.channel_id
                                }
                            );
                        },
                  renderPopout: P,
                  shouldShow: y,
                  position: u.tq ? 'window_center' : 'right',
                  onRequestClose: M,
                  children: (e) => {
                      let { onClick: t, ...n } = e;
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
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(d.Clickable, {
                          ...W,
                          className: l()(W.className, D)
                      }),
                      K
                  ]
              });
    let z = null != w ? w[0] : null,
        q = null != w ? w[1] : null;
    return (0, a.jsxs)(f.Gt, {
        value: k,
        children: [
            null != z && R
                ? (0, a.jsxs)(a.Fragment, {
                      children: [' ', z, ' ']
                  })
                : null,
            'dot' === Z
                ? (0, a.jsx)(d.RoleDot, {
                      color: F,
                      name: V,
                      className: v.roleDot
                  })
                : null,
            n,
            !R &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(p.ZP, {
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
            null != i && (0, S.f)(i) && Y && U ? (0, a.jsx)(O, {}) : null
        ]
    });
}
((r = i || (i = {}))[(r.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (r[(r.BADGES = 1)] = 'BADGES');
