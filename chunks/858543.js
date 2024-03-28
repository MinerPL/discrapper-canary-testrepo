"use strict";
i.r(t), i.d(t, {
  IncreasedActivityTagsRow: function() {
    return I
  },
  PIN_ICON_SIZE: function() {
    return E
  },
  default: function() {
    return N
  },
  useTagsRowHooks: function() {
    return R
  }
});
var n = i("735250"),
  a = i("470079"),
  s = i("803997"),
  l = i.n(s),
  o = i("692547"),
  r = i("481060"),
  u = i("79712"),
  d = i("394831"),
  c = i("26290"),
  h = i("109434"),
  f = i("456269"),
  m = i("479099"),
  p = i("176505"),
  g = i("689938"),
  T = i("426863"),
  v = i("570793"),
  S = i("267391");
let E = 16;

function R(e) {
  let {
    channel: t,
    isNew: i
  } = e, n = (0, f.useAppliedTags)(t), a = n.slice(void 0, 3), s = n.slice(3), l = n.length > 3 ? n.length - 3 : 0, o = t.hasFlag(p.ChannelFlags.PINNED), r = a.length > 0 || o || i;
  return {
    shownTags: a,
    remainingTags: s,
    moreTagsCount: l,
    isPinned: o,
    shouldRenderTagsRow: r,
    forumPostContainsTags: n.length > 0
  }
}

function I(e) {
  let {
    channel: t,
    isNew: i,
    tagsClassName: s,
    className: o
  } = e, {
    shownTags: c,
    remainingTags: f,
    moreTagsCount: p,
    isPinned: T,
    shouldRenderTagsRow: I
  } = R({
    channel: t,
    isNew: i
  }), {
    tagFilter: N
  } = (0, h.useForumChannelStore)(t.id);
  return I ? (0, n.jsxs)("div", {
    className: l()(S.increasedActivityTags, o),
    children: [T && (0, n.jsx)("div", {
      className: v.pinIcon,
      children: (0, n.jsx)(r.Tooltip, {
        text: g.default.Messages.PINNED_POST,
        children: e => (0, n.jsx)(d.default, {
          ...e,
          width: E,
          height: E,
          color: "white"
        })
      })
    }), c.map((e, t) => (0, n.jsxs)(a.Fragment, {
      children: [(0, n.jsx)(m.IncreasedActivityForumTagPill, {
        tag: e,
        size: m.default.Sizes.SMALL,
        className: l()(s, {
          [S.tagFiltered]: N.has(e.id)
        })
      }), (t < c.length - 1 || p > 0) && (0, n.jsx)(u.default, {
        height: 4,
        width: 4,
        "aria-hidden": "true",
        className: S.increasedActivityDotIcon
      }, e.id.concat(t.toString()))]
    }, e.id)), p > 0 ? (0, n.jsx)(m.IncreasedActivityForumTagOverflow, {
      tags: f,
      count: p,
      size: m.default.Sizes.SMALL
    }) : null]
  }) : null
}

function N(e) {
  let {
    channel: t,
    isNew: i,
    tagsClassName: a,
    className: s
  } = e, {
    shownTags: u,
    remainingTags: f,
    moreTagsCount: p,
    isPinned: v,
    shouldRenderTagsRow: I
  } = R({
    channel: t,
    isNew: i
  }), {
    tagFilter: N
  } = (0, h.useForumChannelStore)(t.id);
  return I ? (0, n.jsxs)("div", {
    className: l()(S.tags, s),
    children: [i ? (0, n.jsx)(c.TextBadge, {
      className: l()(T.newBadge, T.inTagsRow),
      color: o.default.unsafe_rawColors.BRAND_260.css,
      text: g.default.Messages.NEW
    }) : null, v && (0, n.jsx)("div", {
      className: S.pinIcon,
      children: (0, n.jsx)(r.Tooltip, {
        text: g.default.Messages.PINNED_POST,
        children: e => (0, n.jsx)(d.default, {
          ...e,
          width: E,
          height: E,
          color: "white"
        })
      })
    }), u.map(e => (0, n.jsx)(m.default, {
      tag: e,
      size: m.default.Sizes.SMALL,
      className: l()(a, {
        [S.tagFiltered]: N.has(e.id)
      })
    }, e.id)), p > 0 ? (0, n.jsx)(m.ForumTagOverflow, {
      tags: f,
      count: p,
      size: m.default.Sizes.SMALL
    }) : null]
  }) : null
}