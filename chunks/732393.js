"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
}), a("47120");
var n = a("735250");
a("470079");
var u = a("442837"),
  r = a("481060"),
  i = a("239091"),
  s = a("596454"),
  d = a("339085"),
  l = a("883429"),
  o = a("456269"),
  f = a("665906"),
  c = a("592125"),
  h = a("710352"),
  T = a("689938"),
  F = a("584704");

function _(e) {
  let {
    tag: t
  } = e, {
    name: a,
    emojiId: r,
    emojiName: i
  } = t, l = (0, u.useStateFromStores)([d.default], () => null != r ? d.default.getUsableCustomEmojiById(r) : null);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.default, {
      className: F.emoji,
      emojiId: r,
      emojiName: i,
      animated: !!(null == l ? void 0 : l.animated)
    }), a]
  })
}

function m(e) {
  let t = (0, u.useStateFromStores)([c.default], () => c.default.getChannel(e), [e]),
    a = (0, f.useCanManageThread)(t),
    s = (0, u.useStateFromStores)([c.default], () => c.default.getChannel(null == t ? void 0 : t.parent_id), [t]),
    d = (0, o.useVisibleForumTags)(s),
    F = (0, o.useAppliedTags)(t),
    m = F.length >= h.MAX_FORUM_POST_TAGS,
    M = (0, f.useIsActiveChannelOrUnarchivableThread)(t);
  if (null == t) return (0, i.closeContextMenu)(), null;
  if (!a || __OVERLAY__ || !t.isForumPost() || (null == d ? void 0 : d.length) === 0 || !M) return null;
  let I = e => {
      let a = new Set(F);
      if (a.has(e)) a.delete(e);
      else {
        if (m) return;
        a.add(e)
      }
      let n = Array.from(a).map(e => e.id);
      l.default.updateForumPostTags(t.id, n)
    },
    v = null == d ? void 0 : d.map(e => {
      let t = F.includes(e);
      return (0, n.jsx)(r.MenuCheckboxItem, {
        id: e.id,
        label: (0, n.jsx)(_, {
          tag: e
        }),
        disabled: m && !t,
        action: () => I(e),
        checked: t
      }, e.id)
    });
  return (0, n.jsx)(r.MenuItem, {
    id: "edit-tags",
    label: T.default.Messages.FORUM_TAG_POST_EDIT,
    children: v
  })
}