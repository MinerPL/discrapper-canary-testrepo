n.d(t, {
  n3: function() {
return s;
  }
});
var i = n(823379),
  a = n(44136),
  l = n(354459);

function s(e, t, n) {
  return null == t || t.type === l.fO.ACTIVITY ? [] : [
t.type === l.fO.STREAM ? e.find(e => e.type === l.fO.USER && e.id === (null == t ? void 0 : t.user.id) && e.id !== n && (0, a.ZP)(e)) : null,
t.type === l.fO.USER ? e.find(e => e.type === l.fO.STREAM && e.user.id === (null == t ? void 0 : t.user.id) && null != e.streamId) : null,
t.id !== n ? e.find(e => e.type === l.fO.USER && e.id === n && (0, a.ZP)(e)) : null
  ].filter(i.lm);
}