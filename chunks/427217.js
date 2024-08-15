n.d(t, {
  Z: function() {
return l;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(788307),
  o = n(935467);

function l(e) {
  let {
activity: t,
className: n,
emojiClassName: i,
textClassName: l,
placeholderText: u,
soloEmojiClassName: c,
animate: d = !0,
hideTooltip: _ = !1,
hideEmoji: E = !1,
children: f
  } = e;
  if (null == t)
return null;
  let {
emoji: h
  } = t, p = null != t.state && '' !== t.state ? t.state : u;
  return (0, r.jsxs)('div', {
className: a()(o.__invalid_container, n),
children: [
  E || null == h ? null : (0, r.jsx)(s.I, {
    emoji: h,
    className: a()(o.emoji, i, null != c ? {
      [c]: null == p || '' === p
    } : null),
    animate: d,
    hideTooltip: _
  }),
  null != p && p.length > 0 ? (0, r.jsx)('span', {
    className: l,
    children: p
  }) : null,
  f
]
  });
}