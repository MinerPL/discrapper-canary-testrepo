"use strict";
t.d(s, {
  Z: function() {
    return c
  }
});
var n = t(470079),
  i = t(149765),
  l = t(442837),
  a = t(430824),
  r = t(293810);
let o = t(981631).Plq.VIEW_CHANNEL;

function c(e) {
  let s = (0, l.e7)([a.Z], () => {
      let s = a.Z.getGuild(e);
      return null != s ? a.Z.getRole(s.id, s.getEveryoneRoleId()) : void 0
    }),
    t = n.useMemo(() => null == s ? r.e3.SOME_CHANNELS : i.e$(s.permissions, o) ? r.e3.SOME_CHANNELS : r.e3.ALL_CHANNELS, [s]),
    c = t === r.e3.ALL_CHANNELS;
  return {
    format: t,
    isFullServerGating: c
  }
}