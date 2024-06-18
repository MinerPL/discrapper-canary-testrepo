"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(666520),
  o = n(785717),
  a = n(659101),
  l = n(689938),
  u = n(917943),
  _ = n(379916);

function d(e) {
  let {
    user: t,
    setNote: n,
    autoFocus: d,
    lastSection: c
  } = e, {
    trackUserProfileAction: E
  } = (0, o.KZ)();
  return (0, i.jsxs)(a.Z, {
    lastSection: c,
    children: [(0, i.jsx)(r.Heading, {
      variant: "eyebrow",
      className: _.title,
      children: l.Z.Messages.NOTE
    }), (0, i.jsx)(s.Z, {
      userId: t.id,
      autoFocus: n || d,
      className: u.note,
      onUpdate: () => E({
        action: "SET_NOTE"
      })
    }, "note")]
  })
}