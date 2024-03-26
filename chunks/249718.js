"use strict";
s.r(t), s.d(t, {
  PremiumSubscriptionPauseModalSelect: function() {
    return T
  },
  PremiumSubscriptionPauseModalConfirm: function() {
    return P
  }
}), s("424973"), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("866227"),
  l = s.n(i),
  r = s("216721"),
  u = s("819855"),
  o = s("77078"),
  d = s("850068"),
  c = s("841098"),
  E = s("685665"),
  f = s("145131"),
  _ = s("380186"),
  p = s("510928"),
  m = s("49111"),
  I = s("782340"),
  N = s("598167");
async function S(e) {
  let {
    premiumSubscription: t,
    pauseDuration: s,
    onClose: a,
    setHasError: n,
    setIsCancelling: i,
    analyticsLocations: l,
    analyticsLocation: r
  } = e;
  try {
    i(!0), n(!1), await (0, d.updateSubscription)(t, {
      pauseDuration: s
    }, l, r), a()
  } catch {
    n(!0), i(!1)
  }
}

function T(e) {
  let {
    premiumType: t,
    onClose: s,
    pauseDuration: i,
    setPauseDuration: l,
    footer: u,
    premiumSubscription: d
  } = e, c = n.useCallback(e => {
    let {
      value: t
    } = e;
    l(t)
  }, [l]), E = d.status === m.SubscriptionStatusTypes.PAUSED ? I.default.Messages.PREMIUM_PAUSE_SELECT_EXTEND_DURATION_SUBTITLE : I.default.Messages.PREMIUM_PAUSE_SELECT_SUBTITLE;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(p.default, {
      premiumType: t,
      onClose: s
    }), (0, a.jsx)(o.ModalHeader, {
      separator: !1,
      children: (0, a.jsxs)("div", {
        className: N.header,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-xl/bold",
          className: N.modalHeader,
          children: I.default.Messages.PREMIUM_PAUSE_SELECT_TITLE
        }), (0, a.jsx)(o.Heading, {
          variant: "heading-sm/medium",
          className: N.subtitle,
          children: E
        })]
      })
    }), (0, a.jsx)(o.ModalContent, {
      className: N.body,
      children: (0, a.jsx)(o.RadioGroup, {
        options: function(e) {
          let t = e.status === m.SubscriptionStatusTypes.PAUSED ? I.default.Messages.PREMIUM_PAUSE_EXTEND_DURATION_MONTHS_CAPITALIZE : I.default.Messages.PREMIUM_PAUSE_DURATION_MONTHS_CAPITALIZE,
            {
              durations: s,
              currentDaysPaused: a
            } = (0, _.getSubscriptionPauseDurations)(e),
            n = [];
          for (let e of s) {
            let s = r.PauseDuration[e];
            n.push({
              name: t.format({
                days: s - a
              }),
              value: s,
              radioItemIconClassName: N.radioOption
            })
          }
          return n.sort((e, t) => e.value - t.value), n.push({
            name: I.default.Messages.PREMIUM_PAUSE_DURATION_CANCEL,
            value: 0,
            radioBarClassName: N.cancelText,
            radioItemIconClassName: N.cancelText
          }), n
        }(d),
        onChange: c,
        value: i
      })
    }), (0, a.jsx)(o.ModalFooter, {
      justify: f.default.Justify.START,
      children: u
    })]
  })
}

function P(e) {
  let {
    premiumSubscription: t,
    premiumType: s,
    onClose: i,
    pauseDuration: r,
    analyticsLocation: d
  } = e, [_, T] = n.useState(!1), {
    analyticsLocations: P
  } = (0, E.default)(), [C, R] = n.useState(!1), A = (0, c.default)(), M = null, h = null, L = [m.SubscriptionStatusTypes.PAST_DUE, m.SubscriptionStatusTypes.PAUSED], g = L.includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd, y = l(g).add(r, "days").toDate();
  switch (t.status) {
    case m.SubscriptionStatusTypes.PAST_DUE:
      h = I.default.Messages.PREMIUM_PAUSE_PAST_DUE_CONFIRM_BODY.format({
        pauseDuration: r,
        resumeDate: y
      });
      break;
    case m.SubscriptionStatusTypes.PAUSED:
      h = I.default.Messages.PREMIUM_PAUSE_EXTEND_CONFIRM_BODY.format({
        resumeDate: y
      });
      break;
    default:
      h = I.default.Messages.PREMIUM_PAUSE_CONFIRM_BODY.format({
        pauseDate: g,
        resumeDate: y,
        pauseDuration: r
      })
  }
  return M = (0, a.jsx)("div", {
    className: N.body,
    children: h
  }), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(p.default, {
      premiumType: s,
      onClose: i
    }), (0, a.jsx)(o.ModalHeader, {
      separator: !1,
      children: (0, a.jsx)("div", {
        className: N.header,
        children: (0, a.jsx)(o.Heading, {
          variant: "heading-xl/bold",
          className: N.modalHeader,
          children: I.default.Messages.PREMIUM_PAUSE_YOUR_SUBSCRIPTION_WILL_BE_PAUSED
        })
      })
    }), (0, a.jsxs)(o.ModalContent, {
      className: N.body,
      children: [_ ? (0, a.jsx)(o.FormErrorBlock, {
        className: N.errorBlock,
        children: I.default.Messages.BILLING_ERROR_GENERIC
      }) : null, M]
    }), (0, a.jsx)(o.ModalFooter, {
      justify: f.default.Justify.START,
      children: (0, a.jsxs)("div", {
        className: N.whatYouLoseButtonContainer,
        children: [(0, a.jsx)(o.Button, {
          color: o.Button.Colors.RED,
          disabled: C || null == r,
          onClick: async () => {
            await S({
              premiumSubscription: t,
              pauseDuration: r,
              setIsCancelling: R,
              setHasError: T,
              onClose: i,
              analyticsLocations: P,
              analyticsLocation: d
            })
          },
          children: I.default.Messages.CONFIRM
        }), (0, a.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: (0, u.isThemeDark)(A) ? o.Button.Colors.WHITE : o.Button.Colors.PRIMARY,
          onClick: i,
          children: I.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
        })]
      })
    })]
  })
}