"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var a = l("37983"),
  s = l("884691"),
  n = l("969176"),
  o = l.n(n),
  i = l("65597"),
  r = l("77078"),
  d = l("490931"),
  u = l("178406"),
  C = l("645266"),
  c = l("49111"),
  m = l("782340");
let E = [d.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC, d.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC, d.OrderBy.ORDER_BY_USER_ID_DESC, d.OrderBy.ORDER_BY_USER_ID_ASC];

function f(e) {
  let {
    guildId: t,
    onClose: l
  } = e, n = (0, i.useStateFromStores)([u.default], () => u.default.getSearchStateByGuildId(t), [t], o), f = s.useCallback(e => {
    (0, C.updateSearchState)(t, {
      ...n,
      selectedSort: e
    })
  }, [t, n]);
  return (0, a.jsx)(r.Menu, {
    navId: "members-table-sort-menu",
    onClose: () => {
      null == l || l()
    },
    "aria-label": m.default.Messages.MEMBER_SAFETY_JOIN_METHOD_LABEL,
    onSelect: c.NOOP,
    children: (0, a.jsx)(r.MenuGroup, {
      children: E.map(e => {
        var t, l;
        return (0, a.jsx)(r.MenuRadioItem, {
          id: "members-table-sort-".concat(e),
          label: function(e) {
            switch (e) {
              case d.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC:
                return m.default.Messages.MEMBER_SAFETY_GUILD_JOINED_AT_DESC;
              case d.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC:
                return m.default.Messages.MEMBER_SAFETY_GUILD_JOINED_AT_ASC;
              case d.OrderBy.ORDER_BY_USER_ID_DESC:
                return m.default.Messages.MEMBER_SAFETY_USER_JOINED_AT_DESC;
              case d.OrderBy.ORDER_BY_USER_ID_ASC:
                return m.default.Messages.MEMBER_SAFETY_USER_JOINED_AT_ASC;
              default:
                return null
            }
          }(e),
          checked: (t = e, (l = n.selectedSort) === d.OrderBy.ORDER_BY_UNSPECIFIED || null == l ? t === d.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC : t === l),
          disabled: !1,
          action: () => f(e),
          group: "members-table-sort"
        }, "members-table-sort-".concat(e))
      })
    })
  })
}