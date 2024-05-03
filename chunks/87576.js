"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var i = n("900015"),
  r = n("481060"),
  s = n("231467"),
  l = n("689938"),
  o = n("599666");

function c(e) {
  let {
    traits: t,
    traitsToHighlight: n
  } = e;
  return (0, a.jsxs)("div", {
    className: o.traitsContainer,
    children: [(0, a.jsxs)("div", {
      className: o.tagsCount,
      children: [(0, a.jsx)(i.TagsIcon, {
        height: 12,
        width: 12,
        className: o.tags
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: l.default.Messages.CLAN_SETUP_NUM_TRAITS.format({
          n: t.length
        })
      })]
    }), (0, a.jsx)(s.ClanDiscoveryCardTraits, {
      traits: t,
      traitsToHighlight: n,
      expanded: !0
    })]
  })
}