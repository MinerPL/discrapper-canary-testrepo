n.d(t, {
  Z: function() {
return I;
  }
});
var i = n(735250);
n(470079);
var s = n(990547),
  a = n(399606),
  r = n(213609),
  l = n(434404),
  o = n(970731),
  c = n(430824),
  d = n(594174),
  u = n(981631),
  _ = n(689938),
  h = n(583134),
  E = n(217110);

function I(e) {
  let {
guildId: t,
markAsDismissed: n
  } = e, I = (0, a.e7)([
c.Z,
d.default
  ], () => {
let e = d.default.getCurrentUser(),
  n = c.Z.getGuild(t);
return (null == n ? void 0 : n.isOwner(e)) === !0;
  });
  return (0, r.Z)({
type: s.ImpressionTypes.POPOUT,
name: s.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
properties: {
  guild_id: t,
  is_owner: I
}
  }), (0, i.jsx)('div', {
className: h.container,
children: (0, i.jsx)(o.ZP, {
  header: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_HEADER,
  content: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_BODY,
  asset: (0, i.jsx)('div', {
    className: h.image,
    children: (0, i.jsx)('img', {
      alt: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_IMG_ALT,
      src: E,
      className: h.image
    })
  }),
  buttonCTA: _.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_UPSELL_CTA,
  onClick: () => {
    l.Z.open(t, u.pNK.ROLE_SUBSCRIPTIONS);
  },
  secondaryButtonCTA: _.Z.Messages.DISMISS,
  markAsDismissed: n
})
  });
}