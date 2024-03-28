"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var l = s("399606"),
  n = s("481060"),
  i = s("430824"),
  r = s("594174"),
  o = s("682864"),
  d = s("723047"),
  u = s("689938");

function c(e) {
  let {
    guildId: t,
    application: c
  } = e, E = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(t)), _ = (0, l.useStateFromStores)([r.default], () => r.default.getCurrentUser()), I = (0, d.useRoleSubscriptionSettingsDisabled)();
  if (null == E || !E.isOwner(_)) return null;
  let T = c.team;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(n.FormText, {
      type: n.FormText.Types.DESCRIPTION,
      disabled: I,
      children: null != T ? u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_DESCRIPTION.format({
        teamName: T.name
      }) : u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_NO_TEAM_DESCRIPTION
    }), (0, a.jsx)(o.default, {
      size: 16
    }), (0, a.jsx)(n.Button, {
      look: n.Button.Looks.FILLED,
      color: null != T ? n.Button.Colors.PRIMARY : n.Button.Colors.BRAND_NEW,
      onClick: () => {
        var e;
        return e = c, void(0, n.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([s.e("99387"), s.e("83942")]).then(s.bind(s, "743582"));
          return s => (0, a.jsx)(t, {
            ...s,
            application: e
          })
        })
      },
      disabled: I,
      children: null != T ? u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_CHANGE_TEAM_CTA : u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_SELECT_TEAM_CTA
    })]
  })
}