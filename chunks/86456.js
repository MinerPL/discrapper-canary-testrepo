"use strict";
n.r(t), n.d(t, {
  PrivateChannelIntegrationAddedSystemMessage: function() {
    return p
  },
  PrivateChannelIntegrationRemovedSystemMessage: function() {
    return S
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("77078"),
  i = n("272030"),
  r = n("574073"),
  o = n("232259"),
  u = n("506885"),
  d = n("981601"),
  c = n("697218"),
  E = n("304198"),
  f = n("315102"),
  _ = n("441823"),
  T = n("140596"),
  I = n("950576"),
  m = n("49111");

function N(e, t) {
  return l.useCallback(l => (r, o) => {
    var E;
    let I = f.default.getApplicationIconURL({
        id: l.id,
        icon: l.icon,
        bot: l.bot,
        botIconFirst: !0
      }),
      m = c.default.getUser(null === (E = l.bot) || void 0 === E ? void 0 : E.id),
      N = T.default.getIntegration(e.id, l.id),
      p = e.isPrivate() && null != N ? t => {
        (0, i.openContextMenuLazy)(t, async () => {
          let {
            default: t
          } = await n.el("348866").then(n.bind(n, "348866"));
          return n => (0, s.jsx)(t, {
            ...n,
            channel: e,
            integration: N
          })
        })
      } : null != m ? t => (0, _.openUserContextMenu)(t, m, e) : void 0,
      {
        bot: S
      } = l;
    return null == S ? r : (0, s.jsx)(a.Popout, {
      position: "right",
      preload: () => (0, u.default)(S.id, I, {
        guildId: e.guild_id,
        channelId: e.id
      }),
      renderPopout: n => (0, s.jsx)(d.default, {
        ...n,
        userId: S.id,
        guildId: e.guild_id,
        channelId: e.id,
        messageId: t.id
      }),
      children: e => (0, s.jsx)(a.Anchor, {
        ...e,
        onContextMenu: p,
        children: r
      })
    }, o)
  }, [e, t.id])
}

function p(e) {
  let {
    message: t,
    channel: l,
    compact: a
  } = e, i = (0, r.default)(t), u = t.application, d = (0, o.useUsernameHook)({
    user: t.author,
    channelId: l.id,
    guildId: l.guild_id,
    messageId: t.id
  }), c = N(l, t);
  return (0, s.jsx)(E.default, {
    icon: n("127067"),
    timestamp: t.timestamp,
    compact: a,
    children: (0, I.getPrivateChannelIntegrationAddedSystemMessageContent)({
      application: u,
      username: i.nick,
      usernameHook: d(i),
      applicationNameHook: null != u ? c(u) : m.NOOP
    })
  })
}

function S(e) {
  let {
    message: t,
    channel: l,
    compact: a
  } = e, i = (0, r.default)(t), u = t.application, d = (0, o.useUsernameHook)({
    user: t.author,
    channelId: l.id,
    guildId: l.guild_id,
    messageId: t.id
  }), c = N(l, t);
  return (0, s.jsx)(E.default, {
    icon: n("226315"),
    timestamp: t.timestamp,
    compact: a,
    children: (0, I.getPrivateChannelIntegrationRemovedSystemMessageContent)({
      application: u,
      username: i.nick,
      usernameHook: d(i),
      applicationNameHook: null != u ? c(u) : m.NOOP
    })
  })
}