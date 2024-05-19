"use strict";
l.r(r), l.d(r, {
  default: function() {
    return j
  }
});
var t = l("735250"),
  n = l("470079"),
  s = l("481060"),
  a = l("100527"),
  i = l("906732"),
  o = l("598"),
  c = l("409813"),
  d = l("185139"),
  u = l("263954"),
  p = l("267642"),
  m = l("678558"),
  f = l("981631"),
  E = l("689938"),
  N = l("824348"),
  S = l("611273");
let x = "premium-guild-subscription-upsell-modal-header";

function h(e) {
  let {
    title: r,
    subtitle: l,
    image: n
  } = e;
  return (0, t.jsxs)("div", {
    className: N.header,
    children: [(0, t.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      id: x,
      color: "header-primary",
      className: S.marginBottom8,
      children: r
    }), (0, t.jsx)(s.Text, {
      variant: "text-md/normal",
      className: N.subtitleText,
      children: l
    }), n]
  })
}
let _ = e => {
    let {
      onClose: r,
      perks: l,
      perkIntro: n = E.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER,
      headerProps: a
    } = e;
    return (0, t.jsxs)("div", {
      className: N.wrapper,
      children: [(0, t.jsx)(s.ModalCloseButton, {
        className: N.closeButton,
        onClick: () => {
          r()
        }
      }), (0, t.jsx)(C, {
        headerProps: a,
        perkIntro: n
      }), (0, t.jsx)("div", {
        className: N.perks,
        children: l.map((e, r) => {
          let {
            icon: l,
            iconClassName: n,
            description: s,
            color: a
          } = e;
          return (0, t.jsx)(u.default, {
            icon: l,
            iconClassName: n,
            description: s,
            color: a
          }, r)
        })
      })]
    })
  },
  C = e => {
    let {
      headerProps: r,
      perkIntro: a
    } = e;
    return (0, t.jsxs)(n.Fragment, {
      children: [null != r ? (0, t.jsx)(h, {
        ...r
      }) : (0, t.jsx)("img", {
        className: N.heroImage,
        src: l("438471"),
        alt: E.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT
      }), (0, t.jsx)(s.Text, {
        variant: "text-md/normal",
        className: N.heading,
        children: a
      })]
    })
  },
  T = e => {
    let {
      guild: r,
      targetBoostedGuildTier: l,
      onClose: n,
      analyticsSourceLocation: a
    } = e, i = {
      section: f.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL,
      object: f.AnalyticsObjects.BUTTON_CTA,
      objectType: null != l ? (0, p.boostedGuildTierToAnalyticsObjectType)(l) : null
    };
    return (0, t.jsxs)(s.ModalFooter, {
      className: N.footer,
      children: [(0, t.jsx)(s.Button, {
        size: s.Button.Sizes.SMALL,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        onClick: () => {
          n()
        },
        children: E.default.Messages.CLOSE
      }), (0, t.jsx)(m.default, {
        analyticsLocation: i,
        analyticsSourceLocation: a,
        guild: r,
        targetBoostedGuildTier: l,
        onClose: () => {
          n()
        }
      })]
    })
  };

function j(e) {
  let {
    analyticsSourceLocation: r,
    guild: l,
    targetBoostedGuildTier: n,
    perks: u,
    perkIntro: p,
    headerProps: m,
    onClose: f,
    ...E
  } = e, {
    analyticsLocations: N
  } = (0, i.default)(a.default.ACTIVITY_DIRECTORY);
  return (0, t.jsx)(i.AnalyticsLocationProvider, {
    value: N,
    children: (0, t.jsx)(o.PaymentContextProvider, {
      activeSubscription: null,
      stepConfigs: [],
      skuIDs: [],
      children: (0, t.jsx)(s.ModalRoot, {
        ...E,
        "aria-labelledby": x,
        children: (0, t.jsx)(d.default, {
          hideBreadcrumbs: !0,
          body: (0, t.jsx)(_, {
            onClose: f,
            perks: u,
            perkIntro: p,
            headerProps: m
          }),
          footer: (0, t.jsx)(T, {
            guild: l,
            targetBoostedGuildTier: n,
            onClose: f,
            analyticsSourceLocation: r
          }),
          steps: [c.Step.PREMIUM_GUILD_UPSELL],
          currentStep: c.Step.PREMIUM_GUILD_UPSELL
        })
      })
    })
  })
}