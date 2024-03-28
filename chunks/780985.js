"use strict";
n.r(t), n.d(t, {
  useSelectedTeenUser: function() {
    return r
  },
  useTeenUserForId: function() {
    return o
  }
});
var a = n("399606"),
  s = n("594174"),
  l = n("914788"),
  i = n("880257");
let r = () => {
    let e = (0, i.default)();
    return (0, a.useStateFromStores)([l.default, s.default], () => {
      if (!e) return s.default.getCurrentUser();
      let t = l.default.getSelectedTeenId();
      if (null !== t) return s.default.getUser(t)
    })
  },
  o = e => (0, a.useStateFromStores)([s.default], () => {
    let t = s.default.getUser(e);
    if (null != t) return t
  })