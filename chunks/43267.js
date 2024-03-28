"use strict";
l.r(t), l.d(t, {
  getChannelIconURL: function() {
    return a
  }
}), l("47120");
var n = l("594174"),
  u = l("768581"),
  i = l("823379"),
  r = l("981631");

function a(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
    l = arguments.length > 2 ? arguments[2] : void 0;
  switch (e.type) {
    case r.ChannelTypes.DM:
      let [a] = e.recipients.map(n.default.getUser).filter(i.isNotNullish);
      if (null == a) return null;
      return a.getAvatarURL(void 0, t, l);
    case r.ChannelTypes.GROUP_DM:
      return u.default.getChannelIconURL({
        id: e.id,
        icon: e.icon,
        applicationId: e.getApplicationId(),
        size: t
      })
  }
}