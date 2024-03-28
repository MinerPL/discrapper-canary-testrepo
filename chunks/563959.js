"use strict";
n.r(t), n.d(t, {
  PrivateChannelIntegrationAddedSystemMessage: function() {
    return h
  },
  PrivateChannelIntegrationRemovedSystemMessage: function() {
    return N
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("481060"),
  i = n("239091"),
  r = n("739566"),
  o = n("942951"),
  u = n("484459"),
  d = n("103575"),
  c = n("594174"),
  f = n("702346"),
  E = n("768581"),
  _ = n("91047"),
  T = n("628566"),
  m = n("693912"),
  I = n("981631");

function p(e, t) {
  return a.useCallback(a => (r, o) => {
    var f;
    let m = E.default.getApplicationIconURL({
        id: a.id,
        icon: a.icon,
        bot: a.bot,
        botIconFirst: !0
      }),
      I = c.default.getUser(null === (f = a.bot) || void 0 === f ? void 0 : f.id),
      p = T.default.getIntegration(e.id, a.id),
      h = e.isPrivate() && null != p ? t => {
        (0, i.openContextMenuLazy)(t, async () => {
          let {
            default: t
          } = await n.e("37969").then(n.bind(n, "496281"));
          return n => (0, s.jsx)(t, {
            ...n,
            channel: e,
            integration: p
          })
        })
      } : null != I ? t => (0, _.openUserContextMenu)(t, I, e) : void 0,
      {
        bot: N
      } = a;
    return null == N ? r : (0, s.jsx)(l.Popout, {
      position: "right",
      preload: () => (0, u.default)(N.id, m, {
        guildId: e.guild_id,
        channelId: e.id
      }),
      renderPopout: n => (0, s.jsx)(d.default, {
        ...n,
        location: "PrivateChannelIntegrationSystemMessage",
        userId: N.id,
        guildId: e.guild_id,
        channelId: e.id,
        messageId: t.id
      }),
      children: e => (0, s.jsx)(l.Anchor, {
        ...e,
        onContextMenu: h,
        children: r
      })
    }, o)
  }, [e, t.id])
}

function h(e) {
  let {
    message: t,
    channel: a,
    compact: l
  } = e, i = (0, r.default)(t), u = t.application, d = (0, o.useUsernameHook)({
    user: t.author,
    channelId: a.id,
    guildId: a.guild_id,
    messageId: t.id
  }), c = p(a, t);
  return (0, s.jsx)(f.default, {
    icon: n("570111"),
    timestamp: t.timestamp,
    compact: l,
    children: (0, m.getPrivateChannelIntegrationAddedSystemMessageContent)({
      application: u,
      username: i.nick,
      usernameHook: d(i),
      applicationNameHook: null != u ? c(u) : I.NOOP
    })
  })
}

function N(e) {
  let {
    message: t,
    channel: a,
    compact: l
  } = e, i = (0, r.default)(t), u = t.application, d = (0, o.useUsernameHook)({
    user: t.author,
    channelId: a.id,
    guildId: a.guild_id,
    messageId: t.id
  }), c = p(a, t);
  return (0, s.jsx)(f.default, {
    icon: n("474019"),
    timestamp: t.timestamp,
    compact: l,
    children: (0, m.getPrivateChannelIntegrationRemovedSystemMessageContent)({
      application: u,
      username: i.nick,
      usernameHook: d(i),
      applicationNameHook: null != u ? c(u) : I.NOOP
    })
  })
}