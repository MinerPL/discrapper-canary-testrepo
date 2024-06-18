"use strict";
t.d(s, {
  Z: function() {
    return S
  }
}), t(47120), t(390547);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(920906),
  o = t(442837),
  c = t(692547),
  d = t(481060),
  u = t(607070),
  E = t(259580),
  _ = t(441674),
  I = t(293810),
  T = t(689938),
  N = t(147962);

function m(e) {
  let {
    checked: s,
    children: t
  } = e;
  return (0, n.jsxs)("div", {
    className: N.row,
    children: [(0, n.jsx)(d.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      className: N.rowText,
      children: t
    }), s ? (0, n.jsx)(_.Z, {
      backgroundColor: c.Z.unsafe_rawColors.WHITE_500.css,
      className: a()(N.rowIcon, N.rowIconChecked)
    }) : (0, n.jsx)("div", {
      className: a()(N.rowIcon, N.rowIconEmpty)
    })]
  })
}

function S(e) {
  let {
    children: s
  } = e, [t, l] = i.useState(!1), a = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), c = s.flatMap(e => e.items.map(e => e.completed)), _ = c.filter(e => e).length / c.length, S = 1 === _, h = (0, r.useSpring)({
    width: "".concat(100 * _, "%"),
    immediate: a
  }), g = [T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_PROMO_PAGE.format({
    promoPageGuideUrl: I.iv.PROMO_PAGE_GUIDE
  }), T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_CASE_STUDIES.format({
    caseStudiesUrl: I.iv.CASE_STUDIES
  }), T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_SUBSCRIPTION_OFFERING.format({
    subscriptionOfferingGuideUrl: I.iv.SUBSCRIPTION_OFFERING_GUIDE
  }), T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_TIER_STRUCTURE.format({
    tierStructureGuideUrl: I.iv.TIER_STRUCTURE_GUIDE
  })], x = t ? null : (0, n.jsxs)(n.Fragment, {
    children: [!S && s.map((e, s) => {
      let {
        title: t,
        items: l
      } = e;
      return (0, n.jsxs)(i.Fragment, {
        children: [s > 0 && (0, n.jsx)(d.FormDivider, {
          className: N.divider
        }), (0, n.jsx)(d.FormTitle, {
          className: N.categoryTitle,
          children: t
        }), l.map((e, s) => (0, n.jsx)(m, {
          children: e.description,
          checked: e.completed
        }, s))]
      }, s)
    }), (0, n.jsx)(d.FormDivider, {
      className: N.divider
    }), (0, n.jsx)(d.FormTitle, {
      className: N.categoryTitle,
      children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LEARN_MORE_SECTION_TITLE
    }), g.map((e, s) => (0, n.jsx)("div", {
      className: N.row,
      children: (0, n.jsx)(d.Text, {
        variant: "text-md/normal",
        children: e
      })
    }, s))]
  });
  return (0, n.jsx)("div", {
    className: N.checklist,
    children: (0, n.jsxs)("div", {
      className: N.container,
      children: [(0, n.jsxs)(d.Clickable, {
        className: N.headerBar,
        onClick: () => l(e => !e),
        children: [(0, n.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          className: N.headerText,
          children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_HEADER
        }), (0, n.jsx)(E.Z, {
          direction: t ? E.Z.Directions.DOWN : E.Z.Directions.UP,
          className: N.headerCaret
        })]
      }), !S && (0, n.jsx)("div", {
        className: N.progressBarOuter,
        children: (0, n.jsx)(r.animated.div, {
          className: N.progressBarInner,
          style: h
        })
      }), x]
    })
  })
}