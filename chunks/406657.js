"use strict";
s.r(t), s.d(t, {
  QuestsRewardCodeModalUnverified: function() {
    return h
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  r = s("481060"),
  o = s("893776"),
  i = s("594174"),
  d = s("41542"),
  c = s("918701"),
  u = s("689938"),
  f = s("334644"),
  C = s("800010");

function h(e) {
  let {
    transitionState: t,
    onClose: s
  } = e, h = (0, n.useStateFromStores)([i.default], () => {
    var e;
    return null === (e = i.default.getCurrentUser()) || void 0 === e ? void 0 : e.email
  }), [m, E] = l.useState({
    status: "unknown"
  });
  l.useEffect(() => {
    E({
      status: "loading"
    }), o.default.verifyResend().then(() => E({
      status: "success"
    }), e => {
      E({
        status: "error"
      }), (0, c.captureQuestsException)(e, {
        tags: {
          location: "QuestsRewardCodeModalUnverified"
        }
      })
    })
  }, []);
  let R = () => (0, a.jsx)(r.ModalFooter, {
    className: f.modalFooter,
    children: (0, a.jsx)(r.Button, {
      color: r.Button.Colors.BRAND,
      size: r.Button.Sizes.MEDIUM,
      onClick: s,
      children: u.default.Messages.CLOSE
    })
  });
  return (0, a.jsxs)(r.ModalRoot, {
    transitionState: t,
    disableTrack: !0,
    children: [(0, a.jsx)("img", {
      alt: "",
      className: f.headerImage,
      src: C
    }), (0, a.jsxs)(r.ModalHeader, {
      separator: !1,
      className: f.header,
      children: [(0, a.jsx)(r.Heading, {
        className: f.title,
        variant: "heading-xl/bold",
        children: u.default.Messages.QUESTS_REWARD_VERIFICATION_TITLE
      }), (0, a.jsx)(r.ModalCloseButton, {
        onClick: s,
        className: f.modalCloseButton
      })]
    }), "loading" === m.status && (0, a.jsx)(r.ModalContent, {
      className: f.content,
      children: (0, a.jsx)(r.Spinner, {})
    }), "error" === m.status && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(r.ModalContent, {
        className: f.content,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: u.default.Messages.QUESTS_REWARD_VERIFICATION_ERROR
        })
      }), R()]
    }), "success" === m.status && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(r.ModalContent, {
        className: f.content,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: u.default.Messages.QUESTS_REWARD_VERIFICATION_BODY.format({
            emailAddress: h,
            emailAddressLink: "mailto:".concat(h)
          })
        })
      }), (0, a.jsx)(r.ModalContent, {
        className: f.content,
        children: (0, a.jsxs)("div", {
          className: f.tooltip,
          children: [(0, a.jsx)(d.default, {
            className: f.infoFilledIcon
          }), (0, a.jsx)(r.Text, {
            className: f.tooltipText,
            variant: "text-sm/normal",
            children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CHECK_SPAM
          })]
        })
      }), R()]
    })]
  })
}