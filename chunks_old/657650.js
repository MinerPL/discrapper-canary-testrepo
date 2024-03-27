"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var l = s("65597"),
  n = s("77078"),
  i = s("305961"),
  r = s("697218"),
  o = s("191814"),
  d = s("757715"),
  u = s("782340");

function c(e) {
  let {
    guildId: t,
    application: c
  } = e, E = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(t)), _ = (0, l.useStateFromStores)([r.default], () => r.default.getCurrentUser()), I = (0, d.useRoleSubscriptionSettingsDisabled)();
  if (null == E) return null;
  let T = E.isOwner(_);
  if (!T) return null;
  let S = c.team;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(n.FormText, {
      type: n.FormText.Types.DESCRIPTION,
      disabled: I,
      children: null != S ? u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_DESCRIPTION.format({
        teamName: S.name
      }) : u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_NO_TEAM_DESCRIPTION
    }), (0, a.jsx)(o.default, {
      size: 16
    }), (0, a.jsx)(n.Button, {
      look: n.Button.Looks.FILLED,
      color: null != S ? n.Button.Colors.PRIMARY : n.Button.Colors.BRAND_NEW,
      onClick: () => {
        var e;
        return e = c, void(0, n.openModalLazy)(async () => {
          let {
            default: t
          } = await s.el("996220").then(s.bind(s, "996220"));
          return s => (0, a.jsx)(t, {
            ...s,
            application: e
          })
        })
      },
      disabled: I,
      children: null != S ? u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_CHANGE_TEAM_CTA : u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_SELECT_TEAM_CTA
    })]
  })
}