"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
}), s("47120");
var a, i, l = s("735250"),
  n = s("470079"),
  C = s("481060"),
  _ = s("355467"),
  I = s("100527"),
  N = s("906732"),
  o = s("740492"),
  A = s("682864"),
  d = s("153124"),
  r = s("626135"),
  c = s("171246"),
  S = s("225715"),
  E = s("635840"),
  O = s("981631"),
  u = s("689938"),
  T = s("850335");
let L = e => {
  let [t, s] = n.useState(!1), [a, i] = n.useState(null);
  return {
    cancelSubscription: async t => {
      try {
        return s(!0), await _.cancelSubscription(t, e), !0
      } catch (e) {
        i(e)
      } finally {
        s(!1)
      }
    },
    error: a,
    submitting: t
  }
};

function P(e) {
  let {
    transitionState: t,
    application: s,
    listing: a,
    subscription: i,
    guild: _,
    onClose: P
  } = e, R = (0, d.useUID)(), {
    analyticsLocations: U
  } = (0, N.default)(I.default.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL), {
    cancelSubscription: f,
    error: p,
    submitting: B
  } = L(U), [m, h] = n.useState(0), x = async () => {
    await f(i.id) && (o.default.disableApplicationSubscriptionCancellationSurvey ? P() : h(1))
  };
  n.useEffect(() => {
    r.default.track(O.AnalyticEvents.CANCELLATION_FLOW_STARTED, {
      location_stack: U
    })
  }, [U]);
  let M = (0, c.isApplicationUserSubscription)(a.sku_flags);
  return (0, l.jsx)(C.ModalRoot, {
    transitionState: t,
    className: T.modal,
    "aria-labelledby": R,
    children: (0, l.jsxs)(C.Slides, {
      activeSlide: m,
      width: 440,
      children: [(0, l.jsx)(C.Slide, {
        id: 0,
        children: (0, l.jsxs)("div", {
          className: T.slideContainer,
          children: [null != p ? (0, l.jsx)(C.FormErrorBlock, {
            children: p.message
          }) : null, (0, l.jsxs)(C.ModalContent, {
            className: T.content,
            children: [(0, l.jsx)(A.default, {
              size: 16
            }), (0, l.jsxs)(S.ApplicationBenefitsModalContent, {
              children: [(0, l.jsx)(S.ApplicationBenefitsModalIcon, {
                application: s
              }), (0, l.jsx)(S.ApplicationBenefitsModalHeading, {
                id: R,
                children: u.default.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_TITLE_V2.format({
                  tier: a.name
                })
              }), (0, l.jsx)(S.ApplicationBenefitsModalDivider, {}), (0, l.jsx)(S.ApplicationBenefitsModalDescription, {
                title: u.default.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_HEADER,
                description: M ? u.default.Messages.APPLICATION_CANCEL_USER_SUBSCRIPTION_MODAL_DESCRIPTION.format({
                  timestamp: i.currentPeriodEnd.getTime()
                }) : u.default.Messages.APPLICATION_CANCEL_GUILD_SUBSCRIPTION_MODAL_DESCRIPTION.format({
                  timestamp: i.currentPeriodEnd.getTime(),
                  guildName: null == _ ? void 0 : _.name
                })
              }), (0, l.jsx)(S.ApplicationBenefitsModalBenefits, {
                applicationId: a.application_id,
                storeListingBenefits: a.store_listing_benefits,
                skuBenefits: a.sku_benefits.benefits
              })]
            })]
          }), (0, l.jsxs)(C.ModalFooter, {
            className: T.footer,
            children: [(0, l.jsx)(C.Button, {
              color: C.Button.Colors.RED,
              onClick: x,
              submitting: B,
              children: u.default.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA
            }), (0, l.jsx)(C.Button, {
              look: C.Button.Looks.LINK,
              color: C.Button.Colors.PRIMARY,
              className: T.goBackButton,
              onClick: P,
              children: u.default.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA
            })]
          })]
        })
      }), (0, l.jsx)(C.Slide, {
        id: 1,
        children: (0, l.jsx)("div", {
          className: T.slideContainer,
          children: (0, l.jsx)(E.default, {
            application: s,
            subscriptionId: i.id,
            onClose: P
          })
        })
      })]
    })
  })
}(i = a || (a = {}))[i.CANCEL = 0] = "CANCEL", i[i.SURVEY = 1] = "SURVEY"