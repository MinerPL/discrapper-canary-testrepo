t.d(n, {
  Z: function() {
return I;
  }
}), t(47120);
var i = t(735250);
t(470079);
var a = t(442837),
  r = t(481060),
  d = t(239091),
  s = t(596454),
  o = t(339085),
  u = t(883429),
  l = t(456269),
  c = t(665906),
  Z = t(592125),
  f = t(710352),
  h = t(689938),
  v = t(636808);

function _(e) {
  let {
tag: n
  } = e, {
name: t,
emojiId: r,
emojiName: d
  } = n, u = (0, a.e7)([o.Z], () => null != r ? o.Z.getUsableCustomEmojiById(r) : null);
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(s.Z, {
    className: v.emoji,
    emojiId: r,
    emojiName: d,
    animated: !!(null == u ? void 0 : u.animated)
  }),
  t
]
  });
}

function I(e) {
  let n = (0, a.e7)([Z.Z], () => Z.Z.getChannel(e), [e]),
t = (0, c.C7)(n),
s = (0, a.e7)([Z.Z], () => Z.Z.getChannel(null == n ? void 0 : n.parent_id), [n]),
o = (0, l.Vm)(s),
v = (0, l.eV)(n),
I = v.length >= f.Cn,
M = (0, c.$R)(n);
  if (null == n)
return (0, d.Zy)(), null;
  if (!t || __OVERLAY__ || !n.isForumPost() || (null == o ? void 0 : o.length) === 0 || !M)
return null;
  let T = e => {
  let t = new Set(v);
  if (t.has(e))
    t.delete(e);
  else {
    if (I)
      return;
    t.add(e);
  }
  let i = Array.from(t).map(e => e.id);
  u.Z.updateForumPostTags(n.id, i);
},
m = null == o ? void 0 : o.map(e => {
  let n = v.includes(e);
  return (0, i.jsx)(r.MenuCheckboxItem, {
    id: e.id,
    label: (0, i.jsx)(_, {
      tag: e
    }),
    disabled: I && !n,
    action: () => T(e),
    checked: n
  }, e.id);
});
  return (0, i.jsx)(r.MenuItem, {
id: 'edit-tags',
label: h.Z.Messages.FORUM_TAG_POST_EDIT,
children: m
  });
}