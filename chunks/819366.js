n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(512722),
    s = n.n(a),
    o = n(873546),
    l = n(442837),
    u = n(481060),
    c = n(239091),
    d = n(100527),
    _ = n(906732),
    E = n(797610),
    f = n(927723),
    h = n(124072),
    p = n(184301),
    m = n(103575),
    I = n(592125),
    T = n(271383),
    g = n(430824),
    S = n(699516),
    A = n(594174),
    N = n(5192),
    v = n(51144),
    O = n(377668);
function R(e) {
    let { userId: t, className: a, children: s } = e,
        o = i.useCallback(() => {
            (0, f.k)({ kind: 'user' });
        }, []),
        l = i.useCallback(
            (e) => {
                if (null != t)
                    (0, c.jW)(e, async () => {
                        let { default: e } = await n.e('25073').then(n.bind(n, 80742));
                        return (n) =>
                            (0, r.jsx)(e, {
                                ...n,
                                userId: t
                            });
                    });
            },
            [t]
        );
    return (0, r.jsx)(h.Z, {
        className: a,
        onClick: o,
        onContextMenu: l,
        children: s
    });
}
function C(e) {
    let { className: t, userId: i, channelId: a, parsedUserId: f, content: C, inlinePreview: y = !1, viewingChannelId: D } = e,
        { analyticsLocations: L } = (0, _.ZP)(d.Z.USER_MENTION),
        b = (0, l.e7)([A.default], () => A.default.getUser(i)),
        M = (0, l.e7)([I.Z], () => I.Z.getChannel(a)),
        P = null != M ? M.getGuildId() : null,
        U =
            y || null == b || null == P || null == a
                ? void 0
                : (e) => {
                      null != M &&
                          (0, c.jW)(e, async () => {
                              let { default: e } = await Promise.all([n.e('79695'), n.e('70474'), n.e('12435'), n.e('62348')]).then(n.bind(n, 757387));
                              return (t) =>
                                  (0, r.jsx)(e, {
                                      ...t,
                                      viewingChannelId: D,
                                      user: b,
                                      channel: M,
                                      guildId: P
                                  });
                          });
                  },
        w = v.ZP.useName(b),
        x = (0, l.e7)([I.Z, T.ZP, S.Z], () => N.ZP.getNickname(P, a, b)),
        G = g.Z.getGuild(P),
        k = (0, E.Ib)(G, M) && i === O.fL ? O.jM : null;
    if (null == b)
        return (0, r.jsx)(R, {
            userId: f,
            className: t,
            children: C
        });
    let B = (e) =>
        (0, r.jsx)(h.Z, {
            className: t,
            onContextMenu: U,
            color: k,
            ...e,
            children: '@'.concat(null != x ? x : w)
        });
    return y
        ? (0, r.jsx)(_.Gt, {
              value: L,
              children: B()
          })
        : (0, r.jsx)(_.Gt, {
              value: L,
              children: (0, r.jsx)(u.Popout, {
                  preload:
                      null == b
                          ? void 0
                          : () =>
                                (0, p.Z)(b.id, b.getAvatarURL(P, 80), {
                                    guildId: null != P ? P : void 0,
                                    channelId: null != a ? a : void 0
                                }),
                  renderPopout: (e) => (
                      s()(null != b, 'Unexpected missing user'),
                      (0, r.jsx)(m.Z, {
                          location: 'UserMention',
                          userId: b.id,
                          guildId: null != P ? P : void 0,
                          channelId: a,
                          ...e
                      })
                  ),
                  position: o.tq ? 'top' : 'right',
                  children: (e) => B(e)
              })
          });
}
