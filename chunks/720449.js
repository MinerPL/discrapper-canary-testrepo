a.d(t, {
  Z: function() {
return u;
  }
});
var s = a(913527),
  n = a.n(s),
  l = a(695346),
  o = a(626135),
  r = a(337953),
  i = a(981631);

function u(e, t, a, s) {
  let u = e.trim();
  if (u.length > 0 || null != t) {
var d;
l.Ok.updateSetting({
  text: u.length > 0 ? u : '',
  expiresAtMs: null != a ? String(n()().add((0, r.Z)(a), 'ms').toDate().getTime()) : '0',
  emojiId: null != t && null != t.id ? t.id : '0',
  emojiName: null != t ? t.name : '',
  createdAtMs: String(n()().toDate().getTime())
}), o.default.track(i.rMx.CUSTOM_STATUS_UPDATED, {
  location: null != s ? s.location : null,
  emoji_type: null == (d = t) ? null : null != d.id ? 'custom' : 'unicode',
  text_len: u.length,
  clear_after: null != a ? ''.concat(a) : null
});
  } else
l.Ok.updateSetting(void 0);
}