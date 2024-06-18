"use strict";
n.d(t, {
  Z: function() {
    return O
  }
});
var i = n(735250);
n(470079);
var r = n(990547),
  s = n(442837),
  o = n(780384),
  a = n(481060),
  l = n(410030),
  u = n(100527),
  _ = n(906732),
  d = n(213609),
  c = n(703656),
  E = n(430824),
  I = n(465670),
  T = n(687476),
  h = n(761966),
  S = n(981631),
  f = n(176505),
  N = n(689938),
  A = n(763959);
let m = () => {
  let e = (0, l.ZP)();
  return (0, o.ap)(e) ? n(537381) : n(341048)
};

function O(e) {
  let {
    onClose: t,
    guildId: n,
    emojiId: o
  } = e, l = m(), {
    analyticsLocations: O
  } = (0, _.ZP)(u.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
  (0, d.Z)({
    type: r.ImpressionTypes.MODAL,
    name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
    properties: {
      location_stack: O,
      emoji_guild_id: n,
      emoji_id: null != o ? o : null
    }
  });
  let R = (0, s.e7)([E.Z], () => E.Z.getGuild(n)),
    C = (0, s.e7)([T.Z], () => null != n && T.Z.getUserSubscriptionRoles(n).size > 0),
    p = C ? N.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPGRADE_UPSELL_DESCRIPTION : N.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_PURCHASE_UPSELL_DESCRIPTION.format({
      serverName: null == R ? void 0 : R.name
    }),
    g = C ? N.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_UPGRADE_CTA : N.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_PURCHASE_CTA;
  return (0, i.jsxs)("div", {
    className: A.container,
    children: [(0, i.jsx)("div", {
      className: A.background
    }), (0, i.jsxs)("div", {
      className: A.content,
      children: [(0, i.jsx)(a.Button, {
        look: a.Button.Looks.BLANK,
        size: a.Button.Sizes.ICON,
        className: A.closeButton,
        onClick: t,
        children: (0, i.jsx)(I.Z, {
          "aria-label": N.Z.Messages.CLOSE,
          width: 16,
          height: 16,
          className: A.closeButtonIcon
        })
      }), (0, i.jsx)("img", {
        alt: "",
        src: l,
        className: A.upsellImage
      }), (0, i.jsx)(a.Spacer, {
        size: 22
      }), (0, i.jsx)(a.Heading, {
        color: "header-primary",
        variant: "heading-lg/extrabold",
        className: A.header,
        children: N.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_TITLE
      }), (0, i.jsx)(a.Spacer, {
        size: 4
      }), (0, i.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: A.description,
        children: p
      }), (0, i.jsx)(a.Spacer, {
        size: 24
      }), (0, i.jsx)(h.Z, {
        onClick: () => {
          (0, c.uL)(S.Z5c.CHANNEL(n, f.oC.ROLE_SUBSCRIPTIONS), void 0, void 0, O)
        },
        children: g
      })]
    })]
  })
}