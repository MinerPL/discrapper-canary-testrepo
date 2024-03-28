"use strict";
n.r(t), n.d(t, {
  PurchaseConfirmationLite: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("17894"),
  r = n("430824"),
  o = n("313550"),
  u = n("689938"),
  d = n("619731");
let c = e => {
  let {
    onClose: t,
    listing: n,
    guildId: c
  } = e, f = (0, l.useStateFromStores)([r.default], () => r.default.getGuild(c), [c]), h = (0, o.default)({
    listing: n,
    guildId: c
  });
  return (0, a.jsxs)("div", {
    className: d.confirmationContainer,
    children: [(0, a.jsx)(s.Heading, {
      className: d.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE.format({
        serverName: null == f ? void 0 : f.toString(),
        tierName: n.name
      })
    }), !h.isEmpty() && (0, a.jsx)(s.Text, {
      className: d.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
        benefits: h.asString()
      })
    }), (0, a.jsx)(s.Button, {
      className: d.openDiscordButton,
      onClick: () => (0, i.default)("role_sub_mweb_success_modal"),
      children: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
    }), (0, a.jsx)(s.Button, {
      className: d.doneButton,
      look: s.Button.Looks.BLANK,
      onClick: () => t(!0),
      children: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
    })]
  })
}