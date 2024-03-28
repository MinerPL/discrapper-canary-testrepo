"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var l = a("735250");
a("470079");
var n = a("481060"),
  s = a("104624"),
  u = a("518756"),
  i = a("576749"),
  r = a("689938");

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    d = (0, u.default)(e),
    o = (0, i.default)();
  return d ? (0, l.jsx)(n.MenuItem, {
    id: "create-event",
    label: r.default.Messages.SCHEDULE_EVENT,
    icon: t ? s.default : void 0,
    action: () => {
      (0, n.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([a.e("49237"), a.e("99387"), a.e("22347"), a.e("58023"), a.e("77745")]).then(a.bind(a, "779250"));
        return a => (0, l.jsx)(t, {
          ...a,
          guildId: e
        })
      }, o)
    }
  }) : null
}