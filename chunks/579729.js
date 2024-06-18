"use strict";
n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(367907),
  a = n(10718),
  l = n(69626),
  u = n(556084),
  _ = n(626135),
  d = n(659101),
  c = n(981631),
  E = n(689938),
  I = n(648659),
  T = n(379916);

function h(e) {
  let {
    applicationId: t,
    commandIds: n,
    channel: h,
    guildId: S,
    onClick: f
  } = e;
  (0, u.j)({
    channelId: h.id
  });
  let {
    commands: N
  } = a.Qm(h, t, n), A = r.useMemo(() => null == N ? void 0 : N.filter(e => !0 !== e.nsfw), [N]), m = r.useCallback(e => {
    null == f || f(), _.default.track(c.rMx.POPULAR_APPLICATION_COMMAND_CLICKED, {
      application_id: t,
      command_id: e,
      guild_id: S,
      ...(0, o.JS)(h.id)
    })
  }, [t, h.id, S, f]);
  return null == A || 0 === A.length ? null : (0, i.jsxs)(d.Z, {
    children: [(0, i.jsx)(s.Heading, {
      variant: "eyebrow",
      className: T.title,
      children: E.Z.Messages.BOT_PROFILE_SLASH_COMMANDS
    }), (0, i.jsx)("ul", {
      className: I.popularApplicationCommandsList,
      children: A.map(e => (0, i.jsx)("li", {
        children: (0, i.jsx)(l.wz, {
          commandId: e.id,
          commandName: e.displayName,
          commandDescription: e.displayDescription,
          onClick: m,
          guildId: S,
          channelId: h.id
        })
      }, e.id))
    })]
  })
}