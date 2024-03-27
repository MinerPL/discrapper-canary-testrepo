"use strict";
n.r(t), n.d(t, {
  GuildPickerDropdown: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var r = n("77078"),
  a = n("782340"),
  l = n("641896");

function s(e) {
  let {
    selectedGuildId: t,
    onGuildChange: n,
    eligibleApplicationSubscriptionGuilds: s
  } = e, u = s.map(e => ({
    value: e.id,
    label: e.name
  }));
  return (0, i.jsx)(r.SearchableSelect, {
    className: l.select,
    maxVisibleItems: 5,
    value: t,
    placeholder: a.default.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
    options: u,
    onChange: e => {
      n(e)
    }
  })
}