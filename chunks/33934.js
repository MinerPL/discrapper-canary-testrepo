"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(339085),
  r = n(131704),
  s = n(176354),
  o = n(700785),
  a = n(981631);

function l(e, t, n) {
  if (e.type !== a.IIU.CUSTOM_STATUS || null == e.emoji) return !1;
  let l = e.emoji;
  if (null == l.id || null == n || !(0, r.zi)(n.type)) return !0;
  let u = i.Z.getUsableCustomEmojiById(l.id),
    _ = s.ZP.isInternalEmojiForGuildId(u, n.getGuildId()),
    d = o.BT({
      permission: a.Plq.USE_EXTERNAL_EMOJIS,
      user: t,
      context: n
    });
  return !_ || d
}