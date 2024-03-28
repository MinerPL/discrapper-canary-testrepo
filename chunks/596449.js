"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var l = n("692547"),
  s = n("481060"),
  i = n("305878"),
  r = n("576749"),
  o = n("688641"),
  u = n("689938");

function d(e) {
  let {
    className: t,
    guildId: d
  } = e, c = (0, r.default)();
  return (0, a.jsx)(o.default, {
    className: t,
    icon: (0, a.jsx)(i.default, {
      height: 20,
      width: 20
    }),
    color: l.default.unsafe_rawColors.BRAND_500.css,
    title: u.default.Messages.SCHEDULE_EVENT,
    description: u.default.Messages.SCHEDULE_EVENT_DESCRIPTION,
    onClick: function() {
      (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("22347"), n.e("58023"), n.e("77745")]).then(n.bind(n, "779250"));
        return t => (0, a.jsx)(e, {
          ...t,
          guildId: d
        })
      }, c)
    }
  })
}