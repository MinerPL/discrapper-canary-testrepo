"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("239091"),
  s = n("920440"),
  i = n("470900");
t.default = e => {
  let {
    connection: t,
    user: r,
    theme: o
  } = e, {
    guild: u,
    nick: d
  } = t;
  return (0, a.jsx)(i.GuildRow, {
    guild: u,
    nick: d,
    theme: o,
    user: r,
    onContextMenu: function(e, t) {
      (0, l.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("24267"), n.e("33053"), n.e("51238"), n.e("75475"), n.e("85093"), n.e("16114"), n.e("85552"), n.e("58227"), n.e("43502"), n.e("95003"), n.e("69760"), n.e("33213"), n.e("70173")]).then(n.bind(n, "545135"));
        return n => (0, a.jsx)(e, {
          ...n,
          guild: t
        })
      })
    },
    onSelect: s.transitionToGuild
  })
}