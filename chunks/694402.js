"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
}), l("424973");
var n = l("37983");
l("884691");
var a = l("446674"),
  s = l("77078"),
  i = l("851387"),
  r = l("477566"),
  o = l("454273"),
  d = l("70919"),
  u = l("861370"),
  c = l("957255"),
  f = l("228220"),
  m = l("893455"),
  I = l("782340");

function T(e, t) {
  var l;
  let T = (0, a.useStateFromStores)([c.default], () => {
      let l = c.default.getHighestRole(e);
      return !c.default.isRoleHigher(e, l, t)
    }),
    N = [],
    E = (0, m.default)(e, t);
  null != E && N.push(E);
  let h = (0, u.default)({
    id: t.id,
    label: I.default.Messages.COPY_ID_ROLE
  });
  null != h && N.push(h);
  let g = (null === (l = t.tags) || void 0 === l ? void 0 : l.guild_connections) === null,
    p = t.managed && !g,
    S = null != t && (0, o.isEveryoneRoleId)(e.id, t.id);
  return !T && !p && !S && N.push((0, n.jsx)(s.MenuGroup, {
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