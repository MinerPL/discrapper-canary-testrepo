"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(566620),
  s = n(87086),
  o = n(871499),
  a = n(689938);

function l(e) {
  let {
    channelId: t,
    applicationId: n,
    centerButton: l = !1,
    ...u
  } = e, _ = l ? o.d : o.Z;
  return (0, i.jsx)(_, {
    ...u,
    onClick: () => {
      (0, r.mW)({
        channelId: t,
        applicationId: n
      })
    },
    iconComponent: s.Z,
    label: a.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY
  })
}