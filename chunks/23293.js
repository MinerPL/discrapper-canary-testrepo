"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(158776),
  o = n(78675),
  a = n(438163),
  l = n(513099),
  u = n(228168),
  _ = n(981631),
  d = n(170022);

function c(e) {
  let {
    user: t,
    displayProfile: n,
    guildId: c,
    channelId: E,
    onOpenProfile: I
  } = e, T = (0, r.e7)([s.Z], () => s.Z.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t === _.IIU.CUSTOM_STATUS
  }));
  return (0, i.jsxs)("header", {
    className: d.header,
    children: [(0, i.jsx)(o.Z, {
      user: t,
      displayProfile: n,
      guildId: c,
      profileType: u.y0.BITE_SIZE,
      hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
    }), (0, i.jsx)(l.Z, {
      user: t,
      displayProfile: n,
      guildId: c,
      channelId: E,
      onOpenProfile: I
    }), (0, i.jsx)(a.J, {
      statusActivity: T,
      profileType: u.y0.BITE_SIZE
    })]
  })
}