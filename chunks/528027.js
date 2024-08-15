t.d(n, {
  Z: function() {
return d;
  }
});
var r = t(735250);
t(470079);
var i = t(120356),
  o = t.n(i),
  l = t(596454),
  u = t(377171),
  a = t(403910),
  s = t(549631),
  c = t(630232);

function d(e) {
  var n;
  let {
guildId: t,
emojiId: i,
emojiName: d,
className: _
  } = e, f = (0, a.Z)(t, i);
  return null != f || null != d ? (0, r.jsx)(l.Z, {
emojiId: null == f ? void 0 : f.id,
emojiName: null != d ? d : null == f ? void 0 : f.name,
animated: null !== (n = null == f ? void 0 : f.animated) && void 0 !== n && n,
className: o()(c.emojiIcon, _)
  }) : (0, r.jsx)(s.Z, {
className: o()(c.emojiIcon, _),
color: u.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
  });
}