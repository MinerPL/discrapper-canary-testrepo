"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
});
var s = a("735250");
a("470079");
var n = a("658722"),
  l = a.n(n),
  r = a("442837"),
  i = a("481060"),
  o = a("596454"),
  d = a("339085"),
  u = a("548420"),
  c = a("456269"),
  m = a("689938"),
  h = a("228155");
let f = e => {
  let {
    tag: t
  } = e, {
    id: a,
    name: n,
    emojiId: l,
    emojiName: c
  } = t, m = (0, r.useStateFromStores)([d.default], () => null != l ? d.default.getUsableCustomEmojiById(l) : null), f = null != l || null != c;
  return (0, s.jsx)(i.ComboboxItem, {
    value: a,
    children: (0, s.jsx)(i.ComboboxItem.Label, {
      children: (0, s.jsxs)("div", {
        className: h.row,
        children: [f ? (0, s.jsx)(o.default, {
          className: h.__invalid_emoji,
          emojiId: l,
          emojiName: c,
          animated: !!(null == m ? void 0 : m.animated)
        }) : (0, s.jsx)(u.default, {
          className: h.__invalid_emoji
        }), (0, s.jsx)(i.Text, {
          variant: "text-md/semibold",
          color: "header-secondary",
          children: n
        })]
      })
    })
  }, a)
};

function g(e) {
  let {
    parentChannel: t,
    appliedTags: a,
    maxTagsApplied: n,
    onSelectTag: r,
    onClose: o
  } = e, d = (0, c.useVisibleForumTags)(t), u = (e, t) => t.filter(t => l()(e.toLowerCase(), t.name.toLowerCase()));
  return (0, s.jsx)(i.ComboboxPopout, {
    showScrollbar: !0,
    value: a,
    onChange: e => {
      (!n || a.has(e)) && (r(e), o())
    },
    placeholder: m.default.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
    "aria-label": m.default.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
    children: e => u(e, d).map(e => (0, s.jsx)(f, {
      tag: e
    }, e.id))
  })
}