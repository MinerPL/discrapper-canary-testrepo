"use strict";
n.d(t, {
  x: function() {
    return a
  }
}), n(47120);
var i = n(594174),
  r = n(768581),
  s = n(823379),
  o = n(981631);

function a(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
    n = arguments.length > 2 ? arguments[2] : void 0;
  switch (e.type) {
    case o.d4z.DM:
      let [a] = e.recipients.map(i.default.getUser).filter(s.lm);
      if (null == a) return null;
      return a.getAvatarURL(void 0, t, n);
    case o.d4z.GROUP_DM:
      return r.ZP.getChannelIconURL({
        id: e.id,
        icon: e.icon,
        applicationId: e.getApplicationId(),
        size: t
      })
  }
}