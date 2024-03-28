"use strict";
t.r(n), t.d(n, {
  default: function() {
    return c
  }
}), t("47120");
var l = t("470079"),
  a = t("881052"),
  i = t("430927"),
  s = t("610665");
let r = {
  onSuccess: () => {},
  permissionOverwrites: []
};

function c() {
  let [e, n] = l.useState(!1), [t, c] = l.useState(null);
  return [async function e(e, t) {
    let {
      onSuccess: l = r.onSuccess,
      permissionOverwrites: d = r.permissionOverwrites
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
    n(!0);
    try {
      await s.preStartEventActions(e, d), await s.setEventAsActive(e, t), await (0, i.navigateToEvent)(e, l), await (0, i.postStartActions)(e, l), n(!1)
    } catch (e) {
      c(new a.APIError(e)), n(!1)
    }
    n(!1)
  }, {
    loading: e,
    error: t
  }]
}