"use strict";
i.r(t), i.d(t, {
  default: function() {
    return S
  },
  useTagsRowHooks: function() {
    return T
  }
});
var n = i("735250");
i("470079");
var a = i("120356"),
  s = i.n(a),
  l = i("692547"),
  o = i("481060"),
  r = i("394831"),
  u = i("26290"),
  d = i("109434"),
  c = i("456269"),
  h = i("479099"),
  f = i("176505"),
  m = i("689938"),
  p = i("439978"),
  g = i("893361");

function T(e) {
  let {
    channel: t,
    isNew: i
  } = e, n = (0, c.useAppliedTags)(t), a = n.slice(void 0, 3), s = n.slice(3), l = n.length > 3 ? n.length - 3 : 0, o = t.hasFlag(f.ChannelFlags.PINNED), r = a.length > 0 || o || i;
  return {
    shownTags: a,
    remainingTags: s,
    moreTagsCount: l,
    isPinned: o,
    shouldRenderTagsRow: r,
    forumPostContainsTags: n.length > 0
  }
}

function S(e) {
  let {
    channel: t,
    isNew: i,
    tagsClassName: a,
    className: c
  } = e, {
    shownTags: f,
    remainingTags: S,
    moreTagsCount: v,
    isPinned: E,
    shouldRenderTagsRow: R
  } = T({
    channel: t,
    isNew: i
  }), {
    tagFilter: I
  } = (0, d.useForumChannelStore)(t.id);
  return R ? (0, n.jsxs)("div", {
    className: s()(g.tags, c),
    children: [i ? (0, n.jsx)(u.TextBadge, {
      className: s()(p.newBadge, p.inTagsRow),
      color: l.default.unsafe_rawColors.BRAND_260.css,
      text: m.default.Messages.NEW
    }) : null, E && (0, n.jsx)("div", {
      className: g.pinIcon,
      children: (0, n.jsx)(o.Tooltip, {
        text: m.default.Messages.PINNED_POST,
        children: e => (0, n.jsx)(r.default, {
          ...e,
          width: 16,
          height: 16,
          color: "white"
        })
      })
    }), f.map(e => (0, n.jsx)(h.default, {
      tag: e,
      size: h.default.Sizes.SMALL,
      className: s()(a, {
        [g.tagFiltered]: I.has(e.id)
      })
    }, e.id)), v > 0 ? (0, n.jsx)(h.ForumTagOverflow, {
      tags: S,
      count: v,
      size: h.default.Sizes.SMALL
    }) : null]
  }) : null
}