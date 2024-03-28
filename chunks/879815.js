"use strict";
n.r(t);
var a = n("442837"),
  s = n("314897"),
  l = n("131951"),
  i = n("979651");
t.default = e => (0, a.useStateFromStoresObject)([i.default, l.default, s.default], () => (function(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default,
    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default,
    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.default,
    o = null != e ? n.getVoiceState(e.getGuildId(), r.getId()) : null;
  return {
    selfDeaf: a.isSelfDeaf(),
    deaf: null !== (t = null == o ? void 0 : o.deaf) && void 0 !== t && t
  }
})(e, i.default, l.default, s.default))