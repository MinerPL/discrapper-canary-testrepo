"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s("47120"), s("390547");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("920906"),
  o = s("442837"),
  d = s("692547"),
  u = s("481060"),
  c = s("607070"),
  E = s("259580"),
  _ = s("441674"),
  I = s("293810"),
  T = s("689938"),
  S = s("147962");

function f(e) {
  let {
    checked: t,
    children: s
  } = e;
  return (0, a.jsxs)("div", {
    className: S.row,
    children: [(0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      className: S.rowText,
      children: s
    }), t ? (0, a.jsx)(_.default, {
      backgroundColor: d.default.unsafe_rawColors.WHITE_500.css,
      className: i()(S.rowIcon, S.rowIconChecked)
    }) : (0, a.jsx)("div", {
      className: i()(S.rowIcon, S.rowIconEmpty)
    })]
  })
}

function m(e) {
  let {
    children: t
  } = e, [s, n] = l.useState(!1), i = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), d = t.flatMap(e => e.items.map(e => e.completed)), _ = d.filter(e => e).length / d.length, m = 1 === _, N = (0, r.useSpring)({
    width: "".concat(100 * _, "%"),
    immediate: i
  }), g = [T.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_PROMO_PAGE.format({
    promoPageGuideUrl: I.SERVER_SUBSCRIPTIONS_PREMIUM_CHECKLIST_EDUCATIONAL_URLS.PROMO_PAGE_GUIDE
  }), T.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_CASE_STUDIES.format({
    caseStudiesUrl: I.SERVER_SUBSCRIPTIONS_PREMIUM_CHECKLIST_EDUCATIONAL_URLS.CASE_STUDIES
  }), T.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_SUBSCRIPTION_OFFERING.format({
    subscriptionOfferingGuideUrl: I.SERVER_SUBSCRIPTIONS_PREMIUM_CHECKLIST_EDUCATIONAL_URLS.SUBSCRIPTION_OFFERING_GUIDE
  }), T.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_TIER_STRUCTURE.format({
    tierStructureGuideUrl: I.SERVER_SUBSCRIPTIONS_PREMIUM_CHECKLIST_EDUCATIONAL_URLS.TIER_STRUCTURE_GUIDE
  })], h = s ? null : (0, a.jsxs)(a.Fragment, {
    children: [!m && t.map((e, t) => {
      let {
        title: s,
        items: n
      } = e;
      return (0, a.jsxs)(l.Fragment, {
        children: [t > 0 && (0, a.jsx)(u.FormDivider, {
          className: S.divider
        }), (0, a.jsx)(u.FormTitle, {
          className: S.categoryTitle,
          children: s
        }), n.map((e, t) => (0, a.jsx)(f, {
          children: e.description,
          checked: e.completed
        }, t))]
      }, t)
    }), (0, a.jsx)(u.FormDivider, {
      className: S.divider
    }), (0, a.jsx)(u.FormTitle, {
      className: S.categoryTitle,
      children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LEARN_MORE_SECTION_TITLE
    }), g.map((e, t) => (0, a.jsx)("div", {
      className: S.row,
      children: (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        children: e
      })
    }, t))]
  });
  return (0, a.jsx)("div", {
    className: S.checklist,
    children: (0, a.jsxs)("div", {
      className: S.container,
      children: [(0, a.jsxs)(u.Clickable, {
        className: S.headerBar,
        onClick: () => n(e => !e),
        children: [(0, a.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          className: S.headerText,
          children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_HEADER
        }), (0, a.jsx)(E.default, {
          direction: s ? E.default.Directions.DOWN : E.default.Directions.UP,
          className: S.headerCaret
        })]
      }), !m && (0, a.jsx)("div", {
        className: S.progressBarOuter,
        children: (0, a.jsx)(r.animated.div, {
          className: S.progressBarInner,
          style: N
        })
      }), h]
    })
  })
}