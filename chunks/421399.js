n.d(t, {
    Z: function () {
        return A;
    },
    a: function () {
        return i;
    }
});
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(873546),
    c = n(442837),
    d = n(481060),
    f = n(607070),
    _ = n(100527),
    h = n(906732),
    p = n(385499),
    m = n(979264),
    g = n(372900),
    E = n(477734),
    v = n(184301),
    I = n(768581),
    S = n(463396),
    T = n(981631),
    b = n(825193);
function y(e) {
    let { compact: t } = e;
    return (0, a.jsx)(p.Z, {
        className: t ? b.botTagCompact : b.botTagCozy,
        type: p.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function A(e) {
    var t;
    let n,
        { author: r, message: i, channel: o, userOverride: p, compact: A = !1, withMentionPrefix: N = !1, showPopout: C = !1, className: R, onClick: O, onContextMenu: D, onPopoutRequestClose: L, renderPopout: x, renderRemixTag: w = !1, decorations: M } = e,
        P = s.useContext(g.Z),
        k = null !== (t = null == o ? void 0 : o.guild_id) && void 0 !== t ? t : P,
        { analyticsLocations: U } = (0, h.ZP)(_.Z.USERNAME),
        { nick: G, colorString: B, colorRoleName: Z } = r,
        F = null != i.messageReference && null != i.webhookId && i.hasFlag(T.iLy.IS_CROSSPOST),
        V = (0, c.e7)([f.Z], () => f.Z.roleStyle),
        j = (0, E.X$)(),
        H = s.useMemo(
            () => ({
                source: T.jXE.CHANNEL,
                messageId: i.id,
                tagUserId: i.author.id
            }),
            [i.id, i.author.id]
        ),
        Y = {
            className: b.username,
            style: 'username' === V && null != B ? { color: B } : void 0,
            onClick: O,
            onContextMenu: D,
            children: (0, a.jsx)(a.Fragment, { children: (N ? '@' : '') + G })
        },
        W = s.useMemo(
            () =>
                A
                    ? (0, a.jsx)(m.ZP, {
                          clan: r.clan,
                          userId: i.author.id,
                          contextGuildId: k,
                          className: b.clanTagChiplet,
                          profileViewedAnalytics: H
                      })
                    : null,
            [A, H, r.clan, k, i.author.id]
        );
    n =
        null != x && null != C
            ? (0, a.jsx)(d.Popout, {
                  preload: F
                      ? void 0
                      : function () {
                            let e = null != p ? p : i.author;
                            return (0, v.Z)(
                                e.id,
                                null != r.guildMemberAvatar && null != k
                                    ? (0, I.JM)({
                                          guildId: k,
                                          userId: e.id,
                                          avatar: r.guildMemberAvatar,
                                          size: 80
                                      })
                                    : e.getAvatarURL(k, 80),
                                {
                                    guildId: k,
                                    channelId: i.channel_id
                                }
                            );
                        },
                  renderPopout: x,
                  shouldShow: C,
                  position: u.tq ? 'window_center' : 'right',
                  onRequestClose: L,
                  children: (e) => {
                      let { onClick: t, ...n } = e;
                      return (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(d.Clickable, {
                                  tag: 'span',
                                  ...n,
                                  ...Y,
                                  className: l()(Y.className, b.clickable, R)
                              }),
                              W
                          ]
                      });
                  }
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(d.Clickable, {
                          ...Y,
                          className: l()(Y.className, R)
                      }),
                      W
                  ]
              });
    let K = null != M ? M[0] : null,
        z = null != M ? M[1] : null;
    return (0, a.jsxs)(h.Gt, {
        value: U,
        children: [
            null != K && A
                ? (0, a.jsxs)(a.Fragment, {
                      children: [' ', K, ' ']
                  })
                : null,
            'dot' === V
                ? (0, a.jsx)(d.RoleDot, {
                      color: B,
                      name: Z,
                      className: b.roleDot
                  })
                : null,
            n,
            !A &&
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(m.ZP, {
                        clan: r.clan,
                        userId: i.author.id,
                        contextGuildId: k,
                        className: b.clanTagChiplet,
                        profileViewedAnalytics: H
                    })
                }),
            null != z ? (0, a.jsx)(a.Fragment, { children: z }) : null,
            null == K || A ? null : K,
            null != i && (0, S.f)(i) && j && w ? (0, a.jsx)(y, {}) : null
        ]
    });
}
((r = i || (i = {}))[(r.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (r[(r.BADGES = 1)] = 'BADGES');
