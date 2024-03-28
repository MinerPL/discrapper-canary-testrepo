"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var n = l("735250");
l("470079");
var a = l("442837"),
  s = l("481060"),
  i = l("434404"),
  r = l("962086"),
  o = l("225675"),
  d = l("496675"),
  u = l("877453"),
  c = l("981631"),
  f = l("689938");

function m(e, t) {
  let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.GuildSettingsSections.ROLES;
  return (0, a.useStateFromStores)([d.default], () => d.default.canImpersonateRole(e, t)) ? (0, n.jsx)(s.MenuItem, {
    id: "view-as-role",
    label: f.default.Messages.VIEW_AS_ROLE,
    icon: u.default,
    action: () => {
      i.default.close(), (0, r.startImpersonating)(e.id, {
        type: o.ImpersonateType.ROLES,
        roles: {
          [t.id]: t
        },
        returnToSection: l
      })
    }
  }, "view-as-role") : null
}