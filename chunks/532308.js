"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("37983");
s("884691");
var n = s("448105"),
  l = s.n(n),
  r = s("446674"),
  i = s("77078"),
  o = s("430568"),
  u = s("385976"),
  d = s("547896"),
  c = s("680986"),
  m = s("782340"),
  h = s("224300");
let f = e => {
  let {
    tag: t
  } = e, {
    id: s,
    name: n,
    emojiId: l,
    emojiName: c
  } = t, m = (0, r.useStateFromStores)([u.default], () => null != l ? u.default.getUsableCustomEmojiById(l) : null), f = null != l || null != c;
  return (0, a.jsx)(i.ComboboxItem, {
    value: s,
    children: (0, a.jsx)(i.ComboboxItem.Label, {
      children: (0, a.jsxs)("div", {
        className: h.row,
        children: [f ? (0, a.jsx)(o.default, {
          className: h.emoji,
          emojiId: l,
          emojiName: c,
          animated: !!(null == m ? void 0 : m.animated)
        }) : (0, a.jsx)(d.default, {
          className: h.emoji
        }), (0, a.jsx)(i.Text, {
          variant: "text-md/semibold",
          color: "header-secondary",
          children: n
        })]
      })
    })
  }, s)
};

function g(e) {
  let {
    parentChannel: t,
    appliedTags: s,
    maxTagsApplied: n,
    onSelectTag: r,
    onClose: o
  } = e, u = (0, c.useVisibleForumTags)(t), d = (e, t) => t.filter(t => l(e.toLowerCase(), t.name.toLowerCase()));
  return (0, a.jsx)(i.ComboboxPopout, {
    showScrollbar: !0,
    value: s,
    onChange: e => {
      (!n || s.has(e)) && (r(e), o())
    },
    placeholder: m.default.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
    "aria-label": m.default.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
    children: e => d(e, u).map(e => (0, a.jsx)(f, {
      tag: e
    }, e.id))
  })
}