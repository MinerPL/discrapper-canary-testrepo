"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("37983");
a("884691");
var l = a("77078"),
  s = a("70025"),
  u = a("334683"),
  i = a("842672"),
  r = a("782340");

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    d = (0, u.default)(e),
    o = (0, i.default)();
  return d ? (0, n.jsx)(l.MenuItem, {
    id: "create-event",
    label: r.default.Messages.SCHEDULE_EVENT,
    icon: t ? s.default : void 0,
    action: () => {
      (0, l.openModalLazy)(async () => {
        let {
          default: t
        } = await a.el("590942").then(a.bind(a, "590942"));
        return a => (0, n.jsx)(t, {
          ...a,
          guildId: e
        })
      }, o)
    }
  }) : null
}