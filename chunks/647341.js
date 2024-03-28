"use strict";
a.r(t), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("481060"),
  i = a("415119"),
  d = a("898140"),
  r = a("502568"),
  u = a("689938");
t.default = function(e) {
  let {
    guildId: t
  } = e, [a, o] = n.useState(!1), c = n.useCallback(() => {
    o(e => !e)
  }, []);
  return (0, l.jsx)(s.Popout, {
    shouldShow: a,
    animation: s.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    ignoreModalClicks: !0,
    onRequestClose: () => o(!1),
    renderPopout: function(e) {
      return (0, l.jsx)(i.default, {
        guildId: t,
        ...e
      })
    },
    children: (e, t) => {
      let {
        isShown: a
      } = t;
      return (0, l.jsx)(r.Icon, {
        ...e,
        onClick: c,
        tooltip: a ? null : u.default.Messages.GUILD_FEED_FEATURED_ITEMS,
        icon: d.default,
        "aria-label": u.default.Messages.GUILD_FEED_FEATURED_ITEMS,
        selected: a
      })
    }
  })
}