"use strict";
t.d(s, {
  Z: function() {
    return a
  }
});
var n = t(149765),
  i = t(700785),
  l = t(981631);

function a(e, s) {
  let t = {
    [s.id]: s
  };
  return e.filter(e => {
    let s = i.I0({
        forceRoles: t,
        context: e
      }),
      a = l.Plq.VIEW_CHANNEL;
    return e.isGuildVocal() && (a = n.IH(a, l.Plq.CONNECT)), n.e$(s, a) && !i.Uu(a, e)
  })
}