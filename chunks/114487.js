"use strict";
n.d(t, {
  b: function() {
    return E
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(451478),
  u = n(806519),
  _ = n(768581),
  d = n(624138),
  c = n(545866);

function E(e) {
  let {
    guildId: t,
    guildName: n,
    guildIcon: r,
    iconSize: s,
    className: E,
    animate: I
  } = e, T = (0, a.e7)([l.Z], () => l.Z.isFocused()), h = _.ZP.getGuildIconURL({
    id: t,
    icon: r,
    size: s,
    canAnimate: I && T
  });
  if (null == h) {
    let e = (0, d.Zg)(n);
    return (0, i.jsx)(u.ZP, {
      mask: u.ZP.Masks.CLAN_ICON,
      width: s,
      height: s,
      className: E,
      children: (0, i.jsx)("div", {
        className: o()(c.guildIconImage, c.acronym),
        children: e
      })
    })
  }
  return (0, i.jsx)(u.ZP, {
    mask: u.ZP.Masks.CLAN_ICON,
    width: s,
    height: s,
    className: E,
    children: (0, i.jsx)("img", {
      src: h,
      alt: n,
      className: c.guildIconImage
    })
  })
}
t.Z = r.memo(function(e) {
  let {
    guild: t,
    iconSize: n,
    className: r,
    animate: s
  } = e;
  return (0, i.jsx)(E, {
    guildName: t.name,
    guildId: t.id,
    guildIcon: t.icon,
    iconSize: n,
    className: r,
    animate: s
  })
})