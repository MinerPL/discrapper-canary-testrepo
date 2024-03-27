"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("77078"),
  u = n("503021"),
  d = n("757414"),
  r = n("246060");

function o(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: o,
    ...c
  } = e, {
    unavailable: h,
    guild: f
  } = (0, s.useStateFromStoresObject)([d.default], () => ({
    guild: d.default.getGuild(t),
    unavailable: d.default.hasFetchFailed(t)
  }), [t]), g = null != f, m = a.useCallback(async () => {
    try {
      !g && await (0, u.fetchGuildForPopout)(t)
    } catch {}
  }, [g, t]);
  return h ? (0, l.jsx)(i.Popout, {
    position: "right",
    renderPopout: e => (0, l.jsx)(r.GuildUnavilableDialog, {}),
    ...c
  }) : (0, l.jsx)(i.Popout, {
    position: "right",
    preload: m,
    renderPopout: e => null == f ? (0, l.jsx)(l.Fragment, {}) : (0, l.jsx)(r.GuildDialog, {
      ...e,
      guild: f,
      channelId: n,
      messageId: o
    }),
    ...c
  })
}