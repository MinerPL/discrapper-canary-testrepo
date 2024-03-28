"use strict";
n.r(t), n.d(t, {
  GuildPickerDropdown: function() {
    return i
  }
});
var a = n("735250");
n("470079");
var r = n("481060"),
  s = n("689938"),
  l = n("200323");

function i(e) {
  let {
    selectedGuildId: t,
    onGuildChange: n,
    eligibleApplicationSubscriptionGuilds: i
  } = e, u = i.map(e => ({
    value: e.id,
    label: e.name
  }));
  return (0, a.jsx)(r.SearchableSelect, {
    className: l.select,
    maxVisibleItems: 5,
    value: t,
    placeholder: s.default.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
    options: u,
    onChange: e => {
      n(e)
    }
  })
}