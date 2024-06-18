"use strict";
t.d(s, {
  Z: function() {
    return d
  }
});
var n = t(735250);
t(470079);
var i = t(399606),
  l = t(481060),
  a = t(430824),
  r = t(594174),
  o = t(723047),
  c = t(689938);

function d(e) {
  let {
    guildId: s,
    application: d
  } = e, u = (0, i.e7)([a.Z], () => a.Z.getGuild(s)), E = (0, i.e7)([r.default], () => r.default.getCurrentUser()), _ = (0, o.mY)();
  if (null == u || !u.isOwner(E)) return null;
  let I = d.team;
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(l.FormText, {
      type: l.FormText.Types.DESCRIPTION,
      disabled: _,
      children: null != I ? c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_DESCRIPTION.format({
        teamName: I.name
      }) : c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_NO_TEAM_DESCRIPTION
    }), (0, n.jsx)(l.Spacer, {
      size: 16
    }), (0, n.jsx)(l.Button, {
      look: l.Button.Looks.FILLED,
      color: null != I ? l.Button.Colors.PRIMARY : l.Button.Colors.BRAND,
      onClick: () => {
        var e;
        return e = d, void(0, l.openModalLazy)(async () => {
          let {
            default: s
          } = await Promise.all([t.e("99387"), t.e("83942")]).then(t.bind(t, 743582));
          return t => (0, n.jsx)(s, {
            ...t,
            application: e
          })
        })
      },
      disabled: _,
      children: null != I ? c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_CHANGE_TEAM_CTA : c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_SELECT_TEAM_CTA
    })]
  })
}