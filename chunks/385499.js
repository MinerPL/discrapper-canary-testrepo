var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(981729),
  o = n(481060),
  l = n(674563),
  u = n(689938),
  c = n(982803);
let d = e => {
  let t, {
  invertColor: n = !1,
  type: i = l.Hb.BOT,
  className: d,
  verified: _,
  hideIcon: E = !1,
  useRemSizes: f = !1,
  children: h = []
} = e,
p = null,
m = u.Z.Messages.VERIFIED_BOT_TOOLTIP;
  switch (i) {
case l.Hb.SYSTEM_DM:
case l.Hb.OFFICIAL:
  _ = !0, m = u.Z.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP_OFFICIAL, p = u.Z.Messages.SYSTEM_DM_TAG_OFFICIAL;
  break;
case l.Hb.SERVER:
  p = u.Z.Messages.BOT_TAG_SERVER;
  break;
case l.Hb.ORIGINAL_POSTER:
  p = u.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
  break;
case l.Hb.STAFF_ONLY_DM:
  p = u.Z.Messages.STAFF_BADGE_TOOLTIP;
  break;
case l.Hb.AI:
  _ = !0, m = u.Z.Messages.AI_GENERATED_TOOLTIP, p = u.Z.Messages.AI_TAG;
  break;
case l.Hb.REMIX:
  _ = !1, p = u.Z.Messages.REMIXING_TAG;
  break;
case l.Hb.BOT:
default:
  p = u.Z.Messages.APP_TAG;
  }
  let I = i === l.Hb.ORIGINAL_POSTER,
T = i === l.Hb.REMIX,
g = null;
  _ && (g = (0, r.jsx)(s.u, {
text: m,
align: 'center',
position: 'top',
children: e => (0, r.jsx)(o.CheckmarkSmallBoldIcon, {
  ...e,
  className: c.botTagVerified,
  color: o.tokens.colors.WHITE
})
  })), t = i === l.Hb.AI ? c.botTagAI : n ? c.botTagInvert : c.botTagRegular;
  let S = e => (0, r.jsxs)('span', {
...e,
className: a()(d, t, f ? c.rem : c.px, {
  [c.botTagOP]: I,
  [c.botTagRemix]: T
}),
children: [
  E ? null : g,
  h,
  (0, r.jsx)('span', {
    className: c.botText,
    children: p
  })
]
  });
  switch (i) {
case l.Hb.REMIX:
  return (0, r.jsx)(s.u, {
    text: u.Z.Messages.REMIXING_DOWNLOAD_APP,
    position: 'top',
    children: e => S(e)
  });
case l.Hb.ORIGINAL_POSTER:
  return (0, r.jsx)(s.u, {
    text: u.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
    position: 'top',
    children: e => S(e)
  });
default:
  return S();
  }
};
d.Types = l.Hb, t.Z = d;