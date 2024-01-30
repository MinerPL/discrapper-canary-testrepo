"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var a = l("37983"),
  n = l("884691"),
  s = l("969176"),
  i = l.n(s),
  o = l("65597"),
  d = l("77078"),
  r = l("490931"),
  u = l("178406"),
  C = l("645266"),
  c = l("49111"),
  f = l("782340");
let m = [r.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC, r.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC, r.OrderBy.ORDER_BY_USER_ID_DESC, r.OrderBy.ORDER_BY_USER_ID_ASC];

function E(e) {
  let {
    guildId: t,
    onClose: l
  } = e, s = (0, o.default)([u.default], () => u.default.getSearchStateByGuildId(t), [t], i), E = n.useCallback(e => {
    (0, C.updateSearchState)(t, {
      ...s,
      selectedSort: e
    })
  }, [t, s]);
  return (0, a.jsx)(d.Menu, {
    navId: "members-table-sort-menu",
    onClose: () => {
      null == l || l()
    },
    "aria-label": f.default.Messages.MEMBER_SAFETY_JOIN_METHOD_LABEL,
    onSelect: c.NOOP,
    children: (0, a.jsx)(d.MenuGroup, {
      children: m.map(e => {
        var t, l;
        return (0, a.jsx)(d.MenuRadioItem, {
          id: "members-table-sort-".concat(e),
          label: function(e) {
            switch (e) {
              case r.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC:
                return f.default.Messages.MEMBER_SAFETY_GUILD_JOINED_AT_DESC;
              case r.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC:
                return f.default.Messages.MEMBER_SAFETY_GUILD_JOINED_AT_ASC;
              case r.OrderBy.ORDER_BY_USER_ID_DESC:
                return f.default.Messages.MEMBER_SAFETY_USER_JOINED_AT_DESC;
              case r.OrderBy.ORDER_BY_USER_ID_ASC:
                return f.default.Messages.MEMBER_SAFETY_USER_JOINED_AT_ASC;
              default:
                return null
            }
          }(e),
          checked: (t = e, (l = s.selectedSort) === r.OrderBy.ORDER_BY_UNSPECIFIED || null == l ? t === r.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC : t === l),
          disabled: !1,
          action: () => E(e),
          group: "members-table-sort"
        }, "members-table-sort-".concat(e))
      })
    })
  })
}