"use strict";
l.r(r), l.d(r, {
  default: function() {
    return C
  }
});
var t = l("735250"),
  s = l("470079"),
  n = l("481060"),
  a = l("100527"),
  i = l("906732"),
  o = l("598"),
  c = l("409813"),
  d = l("185139"),
  u = l("263954"),
  p = l("267642"),
  m = l("678558"),
  E = l("981631"),
  N = l("689938"),
  f = l("592278"),
  S = l("794711");
let _ = "premium-guild-subscription-upsell-modal-header";

function T(e) {
  let {
    title: r,
    subtitle: l,
    image: s
  } = e;
  return (0, t.jsxs)("div", {
    className: f.header,
    children: [(0, t.jsx)(n.Heading, {
      variant: "heading-xl/semibold",
      id: _,
      color: "header-primary",
      className: S.marginBottom8,
      children: r
    }), (0, t.jsx)(n.Text, {
      variant: "text-md/normal",
      className: f.subtitleText,
      children: l
    }), s]
  })
}
let h = e => {
    let {
      onClose: r,
      perks: l,
      perkIntro: s = N.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER,
      headerProps: a
    } = e;
    return (0, t.jsxs)("div", {
      className: f.wrapper,
      children: [(0, t.jsx)(n.ModalCloseButton, {
        className: f.closeButton,
        onClick: () => {
          r()
        }
      }), (0, t.jsx)(x, {
        headerProps: a,
        perkIntro: s
      }), (0, t.jsx)("div", {
        className: f.perks,
        children: l.map((e, r) => {
          let {
            icon: l,
            iconClassName: s,
            description: n,
            color: a
          } = e;
          return (0, t.jsx)(u.default, {
            icon: l,
            iconClassName: s,
            description: n,
            color: a
          }, r)
        })
      })]
    })
  },
  x = e => {
    let {
      headerProps: r,
      perkIntro: a
    } = e;
    return (0, t.jsxs)(s.Fragment, {
      children: [null != r ? (0, t.jsx)(T, {
        ...r
      }) : (0, t.jsx)("img", {
        className: f.heroImage,
        src: l("438471"),
        alt: N.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT
      }), (0, t.jsx)(n.Text, {
        variant: "text-md/normal",
        className: f.heading,
        children: a
      })]
    })
  },
  A = e => {
    let {
      guild: r,
      targetBoostedGuildTier: l,
      onClose: s,
      analyticsSourceLocation: a
    } = e, i = {
      section: E.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL,
      object: E.AnalyticsObjects.BUTTON_CTA,
      objectType: null != l ? (0, p.boostedGuildTierToAnalyticsObjectType)(l) : null
    };
    return (0, t.jsxs)(n.ModalFooter, {
      className: f.footer,
      children: [(0, t.jsx)(n.Button, {
        size: n.Button.Sizes.SMALL,
        color: n.Button.Colors.PRIMARY,
        look: n.Button.Looks.LINK,
        onClick: () => {
          s()
        },
        children: N.default.Messages.CLOSE
      }), (0, t.jsx)(m.default, {
        analyticsLocation: i,
        analyticsSourceLocation: a,
        guild: r,
        targetBoostedGuildTier: l,
        onClose: () => {
          s()
        }
      })]
    })
  };

function C(e) {
  let {
    analyticsSourceLocation: r,
    guild: l,
    targetBoostedGuildTier: s,
    perks: u,
    perkIntro: p,
    headerProps: m,
    onClose: E,
    ...N
  } = e, {
    analyticsLocations: f
  } = (0, i.default)(a.default.ACTIVITY_DIRECTORY);
  return (0, t.jsx)(i.AnalyticsLocationProvider, {
    value: f,
    children: (0, t.jsx)(o.PaymentContextProvider, {
      activeSubscription: null,
      stepConfigs: [],
      skuIDs: [],
      children: (0, t.jsx)(n.ModalRoot, {
        ...N,
        "aria-labelledby": _,
        children: (0, t.jsx)(d.default, {
          hideBreadcrumbs: !0,
          body: (0, t.jsx)(h, {
            onClose: E,
            perks: u,
            perkIntro: p,
            headerProps: m
          }),
          footer: (0, t.jsx)(A, {
            guild: l,
            targetBoostedGuildTier: s,
            onClose: E,
            analyticsSourceLocation: r
          }),
          steps: [c.Step.PREMIUM_GUILD_UPSELL],
          currentStep: c.Step.PREMIUM_GUILD_UPSELL
        })
      })
    })
  })
}