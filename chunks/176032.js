"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var l = n("37983");
n("884691");
var s = n("446674"),
  a = n("77078"),
  r = n("272030"),
  i = n("957255"),
  o = n("530346"),
  c = n("662255"),
  u = n("306160"),
  d = n("49111"),
  f = n("782340"),
  h = n("26900"),
  v = function(e) {
    var t;
    let {
      guild: v,
      user: p,
      onSelect: C
    } = e, M = null !== (t = null == v ? void 0 : v.id) && void 0 !== t ? t : d.EMPTY_STRING_SNOWFLAKE_ID, I = (0, s.useStateFromStores)([i.default], () => null != v && i.default.canManageUser(d.Permissions.BAN_MEMBERS, p, v), [v, p]);
    return (0, l.jsx)(a.Menu, {
      navId: "member-application-context-menu",
      className: h.contextMenu,
      onClose: r.closeContextMenu,
      "aria-label": f.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: C,
      children: (0, l.jsxs)(a.MenuGroup, {
        children: [I && (0, l.jsx)(a.MenuItem, {
          id: "ban",
          label: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_BAN_USER,
          icon: o.default,
          color: "danger",
          action: () => (0, a.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("743506").then(n.bind(n, "743506"));
            return t => (0, l.jsx)(e, {
              ...t,
              guildId: M,
              user: p
            })
          })
        }, "ban"), (0, l.jsx)(a.MenuItem, {
          id: "copyUserId",
          label: "Copy User ID",
          icon: c.default,
          action: () => (0, u.copy)(p.id)
        }, "copyUserId")]
      })
    })
  }