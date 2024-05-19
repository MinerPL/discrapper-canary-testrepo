"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var n = a("735250");
a("470079");
var r = a("120356"),
  s = a.n(r),
  i = a("900015"),
  l = a("442837"),
  o = a("481060"),
  c = a("231467"),
  d = a("430824"),
  u = a("308083"),
  f = a("689938"),
  m = a("455658");

function h(e) {
  var t;
  let {
    guildId: a,
    progress: r,
    traitsToHighlight: h = [],
    maskDescription: p,
    maskTraits: E
  } = e, T = (0, l.useStateFromStores)([d.default], () => d.default.getGuild(a)), {
    interests: C,
    description: x,
    playstyle: _,
    wildcardDescriptors: g,
    brandPrimaryColor: I
  } = r, N = (0, o.useToken)(o.tokens.colors.TEXT_BRAND), v = Array.from(C);
  return (0, n.jsxs)("div", {
    children: [(0, n.jsxs)("div", {
      className: s()(m.description, p ? m.descriptionBorderMask : void 0),
      children: [(0, n.jsx)("div", {
        className: p ? m.descriptionMask : void 0
      }), (0, n.jsx)(o.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        lineClamp: 1,
        children: null == T ? void 0 : T.name
      }), (0, n.jsxs)("div", {
        className: m.clanInfoRow,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-xxs/normal",
          className: m.clanInfoItem,
          children: (0, n.jsx)("span", {
            role: "img",
            "aria-label": f.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
            children: "\uD83C\uDFAE"
          })
        }), (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          className: m.clanInfoItem,
          children: null !== (t = (0, u.getPlaystyleTitle)(_)) && void 0 !== t ? t : f.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
        }), null != T && (0, n.jsx)(c.Wildcards, {
          wildcardDescriptors: g,
          primaryColor: null != I ? I : N.hex()
        })]
      }), (0, n.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: m.descriptionText,
        children: (null == x ? void 0 : x.length) > 0 ? x : f.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
      })]
    }), (0, n.jsxs)("div", {
      className: s()(m.tagsContainer, E ? m.traitsBorderMask : void 0),
      children: [(0, n.jsx)("div", {
        className: E ? m.traitsMask : void 0
      }), (0, n.jsxs)("div", {
        className: m.tagsCount,
        children: [(0, n.jsx)(i.TagsIcon, {
          height: 12,
          width: 12,
          className: m.tags
        }), (0, n.jsx)(o.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: f.default.Messages.CLAN_SETUP_NUM_TRAITS.format({
            n: v.length
          })
        })]
      }), (0, n.jsx)(c.ClanDiscoveryCardTraits, {
        traitClassName: m.trait,
        traits: v,
        traitsToHighlight: h,
        expanded: !0
      })]
    })]
  })
}