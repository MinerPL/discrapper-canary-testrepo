"use strict";
t.d(s, {
  Z: function() {
    return d
  }
});
var n = t(470079),
  i = t(442837),
  l = t(80932),
  a = t(110924),
  r = t(471613),
  o = t(889564);
let c = [];

function d(e) {
  let {
    revision: s,
    emojis: t
  } = (0, i.cj)([r.Z], () => ({
    revision: r.Z.getEmojiRevision(e),
    emojis: r.Z.getEmojis(e)
  })), d = (0, a.Z)(s);
  return n.useEffect(() => {
    (0, l.OQ)(e)
  }, [e]), n.useEffect(() => {
    null != d && d < s && (0, l.OQ)(e)
  }, [s, d, e]), n.useMemo(() => null == t ? c : t.filter(s => (0, o.Kt)(s, e)), [t, e])
}