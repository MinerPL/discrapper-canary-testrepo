"use strict";
n.d(t, {
  Z: function() {
    return x
  }
});
var s = n(735250);
n(470079);
var l = n(658722),
  a = n.n(l),
  i = n(442837),
  r = n(481060),
  o = n(596454),
  c = n(339085),
  d = n(548420),
  u = n(456269),
  h = n(689938),
  m = n(451379);
let g = e => {
  let {
    tag: t
  } = e, {
    id: n,
    name: l,
    emojiId: a,
    emojiName: u
  } = t, h = (0, i.e7)([c.Z], () => null != a ? c.Z.getUsableCustomEmojiById(a) : null), g = null != a || null != u;
  return (0, s.jsx)(r.ComboboxItem, {
    value: n,
    children: (0, s.jsx)(r.ComboboxItem.Label, {
      children: (0, s.jsxs)("div", {
        className: m.row,
        children: [g ? (0, s.jsx)(o.Z, {
          className: m.__invalid_emoji,
          emojiId: a,
          emojiName: u,
          animated: !!(null == h ? void 0 : h.animated)
        }) : (0, s.jsx)(d.Z, {
          className: m.__invalid_emoji
        }), (0, s.jsx)(r.Text, {
          variant: "text-md/semibold",
          color: "header-secondary",
          children: l
        })]
      })
    })
  }, n)
};

function x(e) {
  let {
    parentChannel: t,
    appliedTags: n,
    maxTagsApplied: l,
    onSelectTag: i,
    onClose: o
  } = e, c = (0, u.Vm)(t), d = (e, t) => t.filter(t => a()(e.toLowerCase(), t.name.toLowerCase()));
  return (0, s.jsx)(r.ComboboxPopout, {
    showScrollbar: !0,
    value: n,
    onChange: e => {
      if (!l || !!n.has(e)) i(e), o()
    },
    placeholder: h.Z.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
    "aria-label": h.Z.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
    children: e => d(e, c).map(e => (0, s.jsx)(g, {
      tag: e
    }, e.id))
  })
}