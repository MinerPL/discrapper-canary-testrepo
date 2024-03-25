"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983"),
  l = s("884691"),
  i = s("77078"),
  n = s("567054"),
  r = s("782340"),
  u = function(e) {
    let {
      className: t,
      sortOrder: s,
      onSortChange: u
    } = e, o = l.useMemo(() => [{
      value: n.GuildJoinRequestSortOrders.TIMESTAMP_DESC,
      label: r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_NEWEST
    }, {
      value: n.GuildJoinRequestSortOrders.TIMESTAMP_ASC,
      label: r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_OLDEST
    }], []);
    return (0, a.jsx)(i.SingleSelect, {
      className: t,
      onChange: u,
      value: s,
      options: o
    })
  }