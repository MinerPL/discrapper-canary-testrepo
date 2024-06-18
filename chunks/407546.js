"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(149765),
  s = n(260034),
  o = n(993365),
  a = n(481060),
  l = n(981631),
  u = n(689938),
  _ = n(302191);

function d(e) {
  let {
    error: t,
    selectedGuildId: n,
    onGuildChange: d,
    guilds: c,
    disabled: E = !1
  } = e, I = c.filter(e => r.e$(e.permissions, l.Plq.MANAGE_GUILD)).map(e => ({
    value: e.id,
    label: e.name
  }));
  return (0, i.jsxs)("div", {
    className: _.selectorGroup,
    children: [(0, i.jsx)(s.X, {
      variant: "heading-deprecated-12/semibold",
      className: _.sectionLabel,
      children: u.Z.Messages.OAUTH2_ADD_TO_GUILD
    }), null != t && "" !== t ? (0, i.jsx)(o.x, {
      variant: "text-xs/normal",
      color: "text-danger",
      children: t
    }) : null, (0, i.jsx)(a.Select, {
      className: _.select,
      maxVisibleItems: 5,
      placeholder: u.Z.Messages.OAUTH2_ADD_TO_GUILD_PLACEHOLDER,
      options: I,
      select: d,
      isDisabled: E,
      isSelected: e => e === n,
      serialize: e => e
    }), (0, i.jsx)(o.x, {
      variant: "text-xs/medium",
      color: "header-secondary",
      className: _.label,
      children: u.Z.Messages.OAUTH2_ADD_TO_GUILD_DESCRIPTION.format()
    })]
  })
}