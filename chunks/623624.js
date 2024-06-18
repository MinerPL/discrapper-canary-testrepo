"use strict";
n.d(t, {
  f: function() {
    return I
  }
});
var i = n(735250);
n(470079);
var r = n(512722),
  s = n.n(r),
  o = n(442837),
  a = n(100527),
  l = n(906732),
  u = n(430824),
  _ = n(594174),
  d = n(725568),
  c = n(443002);
let E = e => {
  let {
    guildId: t,
    close: n,
    location: r
  } = e, d = (0, o.e7)([_.default], () => _.default.getCurrentUser());
  s()(null != d, "PremiumGuildPerksModalConnected: currentUser cannot be undefined");
  let E = (0, o.e7)([u.Z], () => u.Z.getGuild(t), [t]),
    {
      analyticsLocations: I
    } = (0, l.ZP)(a.Z.BOOSTED_GUILD_PERKS_MODAL);
  return null == E ? null : (0, i.jsx)(l.Gt, {
    value: I,
    children: (0, i.jsx)(c.Z, {
      analyticsLocation: r,
      onClose: n,
      guild: E
    })
  })
};

function I(e) {
  let {
    guildId: t,
    location: n
  } = e;
  (0, d.q4)(e => {
    let {
      closeLayer: r
    } = e;
    return (0, i.jsx)(E, {
      close: r,
      guildId: t,
      location: n
    })
  }, {
    layerKey: "BoostedGuildPerksModalConnected"
  })
}