"use strict";
n.r(a);
var s = n("735250");
n("470079");
var t = n("442837"),
  l = n("481060"),
  o = n("239091"),
  u = n("496675"),
  d = n("340149"),
  i = n("754424"),
  r = n("572004"),
  c = n("981631"),
  M = n("689938"),
  p = n("123471");
a.default = function(e) {
  var a;
  let {
    guild: I,
    user: _,
    onSelect: E
  } = e, S = null !== (a = null == I ? void 0 : I.id) && void 0 !== a ? a : c.EMPTY_STRING_SNOWFLAKE_ID, f = (0, t.useStateFromStores)([u.default], () => null != I && u.default.canManageUser(c.Permissions.BAN_MEMBERS, _, I), [I, _]);
  return (0, s.jsx)(l.Menu, {
    navId: "member-application-context-menu",
    className: p.contextMenu,
    onClose: o.closeContextMenu,
    "aria-label": M.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: E,
    children: (0, s.jsxs)(l.MenuGroup, {
      children: [f && (0, s.jsx)(l.MenuItem, {
        id: "ban",
        label: M.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_BAN_USER,
        icon: d.default,
        color: "danger",
        action: () => (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("43350")]).then(n.bind(n, "98746"));
          return a => (0, s.jsx)(e, {
            ...a,
            guildId: S,
            user: _
          })
        })
      }, "ban"), (0, s.jsx)(l.MenuItem, {
        id: "copyUserId",
        label: "Copy User ID",
        icon: i.default,
        action: () => (0, r.copy)(_.id)
      }, "copyUserId")]
    })
  })
}