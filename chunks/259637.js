n.d(t, {
  Z: function() {
return _;
  }
});
var a = n(735250);
n(470079);
var s = n(658722),
  r = n.n(s),
  l = n(442837),
  i = n(481060),
  o = n(596454),
  c = n(339085),
  d = n(456269),
  u = n(689938),
  m = n(3673);
let h = e => {
  let {
tag: t
  } = e, {
id: n,
name: s,
emojiId: r,
emojiName: d
  } = t, u = (0, l.e7)([c.ZP], () => null != r ? c.ZP.getUsableCustomEmojiById(r) : null), h = null != r || null != d;
  return (0, a.jsx)(i.ComboboxItem, {
value: n,
children: (0, a.jsx)(i.ComboboxItem.Label, {
  children: (0, a.jsxs)('div', {
    className: m.row,
    children: [
      h ? (0, a.jsx)(o.Z, {
        className: m.__invalid_emoji,
        emojiId: r,
        emojiName: d,
        animated: !!(null == u ? void 0 : u.animated)
      }) : (0, a.jsx)(i.TagIcon, {
        size: 'md',
        color: 'currentColor',
        className: m.__invalid_emoji
      }),
      (0, a.jsx)(i.Text, {
        variant: 'text-md/semibold',
        color: 'header-secondary',
        children: s
      })
    ]
  })
})
  }, n);
};

function _(e) {
  let {
parentChannel: t,
appliedTags: n,
maxTagsApplied: s,
onSelectTag: l,
onClose: o
  } = e, c = (0, d.Vm)(t), m = (e, t) => t.filter(t => r()(e.toLowerCase(), t.name.toLowerCase()));
  return (0, a.jsx)(i.ComboboxPopout, {
showScrollbar: !0,
value: n,
onChange: e => {
  if (!s || !!n.has(e))
    l(e), o();
},
placeholder: u.Z.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
'aria-label': u.Z.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
children: e => m(e, c).map(e => (0, a.jsx)(h, {
  tag: e
}, e.id))
  });
}