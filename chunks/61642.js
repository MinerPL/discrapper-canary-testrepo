"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("735250");
n("470079");
var a = n("239091"),
  s = n("396828"),
  i = n("703656"),
  r = n("434479"),
  o = n("981631"),
  u = n("176505"),
  d = n("689938");

function c(e) {
  let {
    guild: t,
    selected: c
  } = e;
  return (0, l.jsx)(r.default, {
    renderIcon: e => (0, l.jsx)(s.default, {
      className: e
    }),
    text: d.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
    selected: c,
    onClick: () => {
      (0, i.transitionTo)(o.Routes.CHANNEL(t.id, u.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
    },
    onContextMenu: e => {
      null != t && (0, a.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.e("28249").then(n.bind(n, "613329"));
        return n => (0, l.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }
  })
}