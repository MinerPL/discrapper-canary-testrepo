"use strict";
a.r(l), a.d(l, {
  default: function() {
    return r
  }
});
var s = a("735250"),
  t = a("470079"),
  i = a("442837"),
  n = a("481060"),
  d = a("249842"),
  u = a("838367"),
  c = a("83474");

function r(e) {
  let {
    guildId: l,
    channelId: a,
    messageId: r,
    ...o
  } = e, {
    unavailable: h,
    guild: m
  } = (0, i.useStateFromStoresObject)([u.default], () => ({
    guild: u.default.getGuild(l),
    unavailable: u.default.hasFetchFailed(l)
  }), [l]), f = null != m, g = t.useCallback(async () => {
    try {
      !f && await (0, d.fetchGuildForPopout)(l)
    } catch {}
  }, [f, l]);
  return h ? (0, s.jsx)(n.Popout, {
    position: "right",
    renderPopout: e => (0, s.jsx)(c.GuildUnavilableDialog, {}),
    ...o
  }) : (0, s.jsx)(n.Popout, {
    position: "right",
    preload: g,
    renderPopout: e => null == m ? (0, s.jsx)(s.Fragment, {}) : (0, s.jsx)(c.GuildDialog, {
      ...e,
      guild: m,
      channelId: a,
      messageId: r
    }),
    ...o
  })
}