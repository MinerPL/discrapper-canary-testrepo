"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
}), l("653041");
var n = l("735250");
l("470079");
var a = l("442837"),
  s = l("481060"),
  i = l("749210"),
  r = l("240872"),
  o = l("605436"),
  d = l("228643"),
  u = l("299206"),
  c = l("496675"),
  f = l("740727"),
  m = l("867108"),
  I = l("689938");

function T(e, t) {
  var l;
  let T = (0, a.useStateFromStores)([c.default], () => {
      let l = c.default.getHighestRole(e);
      return !c.default.isRoleHigher(e, l, t)
    }),
    N = [],
    E = (0, m.default)(e, t);
  null != E && N.push(E);
  let S = (0, u.default)({
    id: t.id,
    label: I.default.Messages.COPY_ID_ROLE
  });
  null != S && N.push(S);
  let g = (null === (l = t.tags) || void 0 === l ? void 0 : l.guild_connections) === null,
    h = t.managed && !g,
    p = null != t && (0, o.isEveryoneRoleId)(e.id, t.id);
  return !T && !h && !p && N.push((0, n.jsx)(s.MenuGroup, {
    children: (0, n.jsx)(s.MenuItem, {
      id: "delete-role",
      label: I.default.Messages.DELETE,
      color: "danger",
      icon: f.default,
      action: () => {
        r.default.show({
          title: I.default.Messages.SETTINGS_ROLES_DELETE_TITLE,
          body: I.default.Messages.SETTINGS_ROLES_DELETE_BODY.format({
            name: t.name
          }),
          cancelText: I.default.Messages.CANCEL,
          onConfirm: async () => {
            g && await (0, d.putRoleConnectionsConfigurations)(e.id, t.id, []), i.default.deleteRole(e.id, t.id)
          }
        })
      }
    })
  }, "delete-role")), N
}