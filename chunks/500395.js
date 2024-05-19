"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("735250");
s("470079");
var l = s("990547"),
  n = s("481060"),
  i = s("213609"),
  r = s("787051"),
  o = s("682864"),
  d = s("696936"),
  u = s("539290"),
  c = s("975464"),
  E = s("689938"),
  _ = s("856788"),
  I = s("270395");

function T(e) {
  let {
    config: t
  } = e, {
    noticeText: s,
    ctaLabel: l,
    ctaClickable: i,
    onCtaClicked: r
  } = t;
  return (0, a.jsxs)("div", {
    className: _.__invalid_ctaContainer,
    children: [(0, a.jsx)("img", {
      className: _.__invalid_heroBanner,
      src: I,
      alt: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_HERO_BANNER_ALT
    }), (0, a.jsxs)("div", {
      className: _.__invalid_ctaContent,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_DESKTOP_V2_TITLE
      }), (0, a.jsx)(o.default, {
        size: 12
      }), (0, a.jsx)(n.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_SUBTITLE
      }), (0, a.jsx)(o.default, {
        size: 24
      }), (0, a.jsx)(u.default, {
        className: _.waitlist,
        color: d.MessageBlockColors.BROWN,
        buttonPosition: u.WarningBlockButtonPosition.RIGHT,
        notice: s,
        ctaLabel: l,
        ctaDisabled: !i,
        ctaClassName: _.waitlistCtaButton,
        onClick: r
      })]
    })]
  })
}

function S(e) {
  let {
    guild: t,
    config: s
  } = e, {
    isLoading: o,
    error: d,
    creatorMonetizationOnboardingMarketing: u
  } = (0, r.default)(t.id);
  return ((0, i.default)({
    type: l.ImpressionTypes.PANE,
    name: l.ImpressionNames.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING,
    properties: {
      guild_id: t.id
    }
  }), o) ? (0, a.jsx)(n.Spinner, {}) : (0, a.jsxs)("div", {
    className: _.__invalid_container,
    children: [(0, a.jsx)(T, {
      config: s
    }), (0, a.jsx)(c.MarketingSections, {
      onboardingMarketing: u,
      onboardingMarketingError: d
    })]
  })
}