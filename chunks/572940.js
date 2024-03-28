"use strict";
s.r(t);
var a = s("735250"),
  l = s("470079"),
  i = s("481060"),
  n = s("246364"),
  u = s("689938");
t.default = function(e) {
  let {
    className: t,
    sortOrder: s,
    onSortChange: r
  } = e, o = l.useMemo(() => [{
    value: n.GuildJoinRequestSortOrders.TIMESTAMP_DESC,
    label: u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_NEWEST
  }, {
    value: n.GuildJoinRequestSortOrders.TIMESTAMP_ASC,
    label: u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_OLDEST
  }], []);
  return (0, a.jsx)(i.SingleSelect, {
    className: t,
    onChange: r,
    value: s,
    options: o
  })
}