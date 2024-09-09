n.d(t, {
    P: function () {
        return C;
    },
    e: function () {
        return f;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(481060),
    r = n(239091),
    l = n(739566),
    o = n(942951),
    c = n(834129),
    u = n(184301),
    d = n(347475),
    _ = n(594174),
    E = n(768581),
    I = n(91047),
    m = n(628566),
    T = n(693912),
    h = n(981631);
function N(e, t) {
    return s.useCallback(
        (s) => (l, o) => {
            var c;
            let T = E.ZP.getApplicationIconURL({
                    id: s.id,
                    icon: s.icon,
                    bot: s.bot,
                    botIconFirst: !0
                }),
                h = _.default.getUser(null === (c = s.bot) || void 0 === c ? void 0 : c.id),
                N = m.Z.getIntegration(e.id, s.id),
                C =
                    e.isPrivate() && null != N
                        ? (t) => {
                              (0, r.jW)(t, async () => {
                                  let { default: t } = await n.e('30887').then(n.bind(n, 496281));
                                  return (n) =>
                                      (0, i.jsx)(t, {
                                          ...n,
                                          channel: e,
                                          integration: N
                                      });
                              });
                          }
                        : null != h
                          ? (t) => (0, I.Pv)(t, h, e)
                          : void 0,
                { bot: f } = s;
            return null == f
                ? l
                : (0, i.jsx)(
                      a.Popout,
                      {
                          position: 'right',
                          preload: () =>
                              (0, u.Z)(f.id, T, {
                                  guildId: e.guild_id,
                                  channelId: e.id
                              }),
                          renderPopout: (n) =>
                              (0, i.jsx)(d.Z, {
                                  ...n,
                                  userId: f.id,
                                  guildId: e.guild_id,
                                  channelId: e.id,
                                  messageId: t.id
                              }),
                          children: (e) =>
                              (0, i.jsx)(a.Anchor, {
                                  ...e,
                                  onContextMenu: C,
                                  children: l
                              })
                      },
                      o
                  );
        },
        [e, t.id]
    );
}
function C(e) {
    let { message: t, channel: s, compact: a } = e,
        r = (0, l.ZP)(t),
        u = t.application,
        d = (0, o.l)({
            user: t.author,
            channelId: s.id,
            guildId: s.guild_id,
            messageId: t.id
        }),
        _ = N(s, t);
    return (0, i.jsx)(c.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: a,
        children: (0, T.DS)({
            application: u,
            username: r.nick,
            usernameHook: d(r),
            applicationNameHook: null != u ? _(u) : h.dG4
        })
    });
}
function f(e) {
    let { message: t, channel: s, compact: a } = e,
        r = (0, l.ZP)(t),
        u = t.application,
        d = (0, o.l)({
            user: t.author,
            channelId: s.id,
            guildId: s.guild_id,
            messageId: t.id
        }),
        _ = N(s, t);
    return (0, i.jsx)(c.Z, {
        icon: n(474019),
        timestamp: t.timestamp,
        compact: a,
        children: (0, T.nh)({
            application: u,
            username: r.nick,
            usernameHook: d(r),
            applicationNameHook: null != u ? _(u) : h.dG4
        })
    });
}
