"use strict";
t.d(s, {
  Z: function() {
    return T
  }
});
var n = t(735250);
t(470079);
var i = t(990547),
  l = t(481060),
  a = t(213609),
  r = t(787051),
  o = t(696936),
  c = t(539290),
  d = t(975464),
  u = t(689938),
  E = t(856788),
  _ = t(270395);

function I(e) {
  let {
    config: s
  } = e, {
    noticeText: t,
    ctaLabel: i,
    ctaClickable: a,
    onCtaClicked: r
  } = s;
  return (0, n.jsxs)("div", {
    className: E.__invalid_ctaContainer,
    children: [(0, n.jsx)("img", {
      className: E.__invalid_heroBanner,
      src: _,
      alt: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_HERO_BANNER_ALT
    }), (0, n.jsxs)("div", {
      className: E.__invalid_ctaContent,
      children: [(0, n.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_DESKTOP_V2_TITLE
      }), (0, n.jsx)(l.Spacer, {
        size: 12
      }), (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_SUBTITLE
      }), (0, n.jsx)(l.Spacer, {
        size: 24
      }), (0, n.jsx)(c.Z, {
        className: E.waitlist,
        color: o.W.BROWN,
        buttonPosition: c.E.RIGHT,
        notice: t,
        ctaLabel: i,
        ctaDisabled: !a,
        ctaClassName: E.waitlistCtaButton,
        onClick: r
      })]
    })]
  })
}

function T(e) {
  let {
    guild: s,
    config: t
  } = e, {
    isLoading: o,
    error: c,
    creatorMonetizationOnboardingMarketing: u
  } = (0, r.Z)(s.id);
  return ((0, a.Z)({
    type: i.ImpressionTypes.PANE,
    name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING,
    properties: {
      guild_id: s.id
    }
  }), o) ? (0, n.jsx)(l.Spinner, {}) : (0, n.jsxs)("div", {
    className: E.__invalid_container,
    children: [(0, n.jsx)(I, {
      config: t
    }), (0, n.jsx)(d.C, {
      onboardingMarketing: u,
      onboardingMarketingError: c
    })]
  })
}