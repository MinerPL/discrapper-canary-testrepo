"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var s = n("759843"),
  l = n("65597"),
  i = n("428958"),
  r = n("592407"),
  o = n("5667"),
  u = n("305961"),
  d = n("697218"),
  c = n("49111"),
  f = n("782340"),
  E = n("919876"),
  h = n("936775");

function _(e) {
  let {
    guildId: t,
    markAsDismissed: n
  } = e, _ = (0, l.useStateFromStores)([u.default, d.default], () => {
    let e = d.default.getCurrentUser(),
      n = u.default.getGuild(t);
    return (null == n ? void 0 : n.isOwner(e)) === !0
  });
  return (0, i.default)({
    type: s.ImpressionTypes.POPOUT,
    name: s.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
    properties: {
      guild_id: t,
      is_owner: _
    }
  }), (0, a.jsx)("div", {
    className: E.container,
    children: (0, a.jsx)(o.default, {
      header: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_HEADER,
      content: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_BODY,
      asset: (0, a.jsx)("div", {
        className: E.image,
        children: (0, a.jsx)("img", {
          alt: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_IMG_ALT,
          src: h,
          className: E.image
        })
      }),
      buttonCTA: f.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_UPSELL_CTA,
      onClick: () => {
        r.default.open(t, c.GuildSettingsSections.ROLE_SUBSCRIPTIONS)
      },
      secondaryButtonCTA: f.default.Messages.DISMISS,
      markAsDismissed: n
    })
  })
}