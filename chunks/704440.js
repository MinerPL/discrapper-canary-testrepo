"use strict";
n.d(t, {
  Z: function() {
    return M
  }
}), n(773603), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(913527),
  l = n.n(a),
  u = n(235874),
  _ = n(481060),
  d = n(37234),
  c = n(100527),
  E = n(906732),
  I = n(626135),
  T = n(55935),
  h = n(63063),
  S = n(281494),
  f = n(790368),
  N = n(474936),
  A = n(981631),
  m = n(689938),
  O = n(305800),
  R = n(751599),
  C = n(397293),
  p = n(352175),
  g = n(90351);
let L = async (e, t, n) => {
  n(!0), await (0, S.Eo)(e).then(() => {
    t(), (0, d.Ou)()
  }).finally(() => {
    n(!1)
  })
}, v = e => {
  let {
    onClose: t,
    referralsRemaining: n,
    recipient: s,
    analyticsLocations: a,
    shouldShowBirthdayUX: l
  } = e, [u, d] = r.useState(!1), c = n - 1;
  return (0, i.jsxs)("div", {
    className: O.confirmationContainer,
    children: [(0, i.jsxs)("div", {
      className: o()({
        [O.confirmationBody]: !l,
        [O.confirmationBirthdayBody]: l
      }),
      children: [(0, i.jsx)(_.ModalCloseButton, {
        onClick: t,
        className: O.closeButton
      }), (0, i.jsx)("img", {
        alt: "",
        src: l ? C : p,
        className: O.confirmationImage
      }), (0, i.jsx)(_.Heading, {
        variant: "heading-xl/bold",
        color: "interactive-active",
        className: O.confirmationHeading,
        children: m.Z.Messages.SAHRE_NITRO_MODAL_CONFIRMATION_HEADER
      }), (0, i.jsx)(_.Text, {
        className: O.confirmationBodyCopy,
        variant: "text-md/medium",
        color: "header-primary",
        children: c > 0 ? m.Z.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL.format({
          count: c
        }) : m.Z.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL_LAST_REFERRAL
      }), (0, i.jsx)("hr", {
        className: O.confirmationBodySeparator
      })]
    }), (0, i.jsxs)("div", {
      className: O.confirmationButtonContainer,
      children: [(0, i.jsx)(_.Button, {
        className: O.confirmationShareButton,
        submitting: u,
        onClick: () => {
          L(s, t, d), I.default.track(A.rMx.SHARE_NITRO_FLOW_STEPS, {
            location_stack: a,
            step: N.fz.FLOW_COMPLETED,
            other_user_id: Number(s)
          })
        },
        children: m.Z.Messages.SHAER_NITRO_CONFIRMATION_BUTTON_TEXT
      }), (0, i.jsx)("div", {
        className: O.confirmationCancelButtonContainer,
        children: (0, i.jsx)(_.Clickable, {
          onClick: t,
          children: (0, i.jsx)(_.Text, {
            variant: "text-sm/medium",
            className: O.confirmationCancelCopy,
            children: m.Z.Messages.CANCEL
          })
        })
      })]
    })]
  })
};

function D(e) {
  let {
    referralsRemaining: t,
    channel: n,
    onClose: s,
    isResending: a
  } = e, [u, d] = r.useState(!1), [S, p] = r.useState(!1), D = n.isDM() && void 0 !== n.recipients ? n.recipients[0] : null, {
    analyticsLocations: M
  } = (0, E.ZP)(c.Z.REFERRAL_TRIALS_POPOUT), {
    enabled: P
  } = f.Z.useExperiment({
    location: "200c24_1"
  }, {
    autoTrackExposure: !0
  }), y = new Date("2023-06-15T08:00:00-08:00");
  return null == D ? null : u ? (0, i.jsx)(v, {
    onClose: s,
    referralsRemaining: t,
    recipient: D,
    analyticsLocations: M,
    shouldShowBirthdayUX: P
  }) : (0, i.jsxs)("div", {
    className: O.generalContainer,
    children: [(0, i.jsxs)("div", {
      className: O.generalBodyContainer,
      children: [(0, i.jsx)("img", {
        alt: "",
        src: P ? C : g,
        className: O.generalBodyImage
      }), (0, i.jsxs)("div", {
        className: O.innerContent,
        children: [(0, i.jsx)(_.ModalCloseButton, {
          onClick: s,
          className: O.closeButton
        }), (0, i.jsx)(_.Heading, {
          className: O.generalHeading,
          variant: "heading-xl/bold",
          children: a ? m.Z.Messages.SHARE_NITRO_RESEND_TRIAL_HEADER : m.Z.Messages.SHARE_NITRO_MODAL_HEADER
        }), (0, i.jsxs)(_.Text, {
          className: O.generalBodyCopy,
          variant: "text-md/normal",
          children: [(0, i.jsx)(_.Anchor, {
            className: o()(O.learnMore, {
              [O.learnMoreResendUnderlinedText]: a
            }),
            href: h.Z.getArticleURL(A.BhN.SHARE_NITRO_FAQ),
            children: a ? m.Z.Messages.SHARE_NITRO_RESEND_TRIAL_BODY : m.Z.Messages.SHARE_NITRO_MODAL_BODY_GENERAL.format({
              count: t
            })
          }), a ? (0, i.jsx)("div", {
            className: O.shareNitroResendCopySuffix,
            children: m.Z.Messages.SHARE_NITRO_RESEND_TRIAL_BODY_2
          }) : (0, i.jsx)("div", {
            children: m.Z.Messages.SHARE_NITRO_MODAL_BODY_SHARE_THEM_BY.format({
              date: (0, T.vc)(l()(y), "LL")
            })
          })]
        })]
      }), P && (0, i.jsx)("img", {
        alt: "",
        src: R,
        className: O.birthdayBackgroundImage
      })]
    }), (0, i.jsx)("div", {
      className: O.generalButtonContainer,
      children: (0, i.jsx)(_.Button, {
        className: O.generalShareButton,
        submitting: S,
        onClick: () => {
          a ? L(D, s, p) : (d(!0), I.default.track(A.rMx.SHARE_NITRO_FLOW_STEPS, {
            location_stack: M,
            step: N.fz.FLOW_STARTED,
            other_user_id: Number(D)
          }))
        },
        children: a ? m.Z.Messages.SHARE_NITRO_RESEND_BUTTON_TEXT : m.Z.Messages.SHARE_NITRO_BUTTON_TEXT
      })
    })]
  })
}

function M(e) {
  let {
    shouldShowPopout: t,
    referralsRemaining: n,
    channel: r,
    onClose: s,
    isResending: o
  } = e;
  return t ? (0, i.jsx)("div", {
    onMouseDown: e => e.stopPropagation(),
    children: (0, i.jsx)(u.y, {
      shouldShow: !0,
      position: "top",
      align: "center",
      renderPopout: e => (0, i.jsx)(D, {
        ...e,
        referralsRemaining: n,
        channel: r,
        onClose: s,
        isResending: o
      }),
      onRequestClose: () => void 0,
      closeOnScroll: !1,
      ignoreModalClicks: !0,
      children: () => (0, i.jsx)("div", {
        className: O.__invalid_popoutTarget
      })
    })
  }) : null
}