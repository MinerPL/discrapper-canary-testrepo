"use strict";
l.r(t), l.d(t, {
  default: function() {
    return A
  }
});
var n = l("37983");
l("884691");
var a = l("446674"),
  s = l("472861"),
  i = l("77078"),
  r = l("150216"),
  o = l("90592"),
  u = l("910861"),
  d = l("153335"),
  c = l("191814"),
  f = l("8161"),
  m = l("613676"),
  p = l("713135"),
  h = l("999203"),
  E = l("609734"),
  T = l("777003"),
  S = l("49111"),
  _ = l("782340"),
  g = l("431375");

function A(e) {
  let {
    user: t,
    guildId: l
  } = e, s = (0, a.useStateFromStores)([p.default], () => {
    var e;
    return null === (e = p.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
  }), i = null != s && (0, m.canInstallApplication)(s.id, s.customInstallUrl, s.installParams), {
    botUpgradeable: o,
    subscriptionGroupListing: u
  } = (0, h.default)({
    user: t,
    guildId: l
  }), {
    enabled: d
  } = r.appStorefrontExperiment.useExperiment({
    location: "BotButtonsSection"
  });
  return i || o ? (0, n.jsx)(T.default, {
    children: (0, n.jsxs)("div", {
      className: g.buttonsContainer,
      children: [(0, n.jsx)(E.default, {
        application: s,
        className: g.button
      }), o && (d ? (0, n.jsx)(v, {
        app: s,
        listing: u,
        guildId: l
      }) : (0, n.jsx)(I, {
        guildId: l,
        listing: u
      }))]
    })
  }) : null
}

function I(e) {
  let {
    listing: t,
    guildId: l
  } = e, a = null != t ? (0, o.getPayableSubscriptionListing)(t) : null, {
    openModal: s
  } = (0, d.default)({
    listing: a,
    guildId: l,
    groupListingId: null == t ? void 0 : t.id,
    showBenefitsFirst: !0,
    analyticsLocation: S.AnalyticsLocations.BOT_PROFILE_POPOUT
  });
  return (0, n.jsx)(u.default, {
    onClick: s,
    className: g.button,
    children: (0, n.jsxs)("div", {
      className: g.botUpgradeButtonContent,
      children: [(0, n.jsx)(f.default, {
        width: 16,
        height: 16
      }), (0, n.jsx)(c.default, {
        size: 4,
        horizontal: !0
      }), _.default.Messages.BOT_PROFILE_UPGRADE_CTA]
    })
  })
}

function v(e) {
  let {
    app: t,
    listing: a,
    guildId: r
  } = e;
  return null == t || null == a || null == r ? null : (0, n.jsx)(u.default, {
    onClick: () => (function(e, t, a) {
      (0, i.openModalLazy)(async () => {
        let {
          default: s
        } = await l.el("474956").then(l.bind(l, "474956"));
        return l => (0, n.jsx)(s, {
          transitionState: l.transitionState,
          onClose: l.onClose,
          appId: e.id,
          subscriptionGroupListing: t,
          guildId: a
        })
      })
    })(t, a, r),
    className: g.button,
    children: (0, n.jsxs)("div", {
      className: g.botUpgradeButtonContent,
      children: [(0, n.jsx)(s.ShopSparkleIcon, {
        width: 16,
        height: 16,
        color: "#fff"
      }), (0, n.jsx)(c.default, {
        size: 4,
        horizontal: !0
      }), _.default.Messages.STOREFRONT]
    })
  })
}