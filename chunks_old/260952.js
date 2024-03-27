"use strict";
s.r(t), s.d(t, {
  QuestsRewardCodeModalUnverified: function() {
    return m
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("446674"),
  r = s("77078"),
  o = s("437822"),
  i = s("697218"),
  d = s("68238"),
  c = s("227231"),
  u = s("782340"),
  f = s("283401"),
  h = s("92693");

function m(e) {
  let {
    transitionState: t,
    onClose: s
  } = e, m = (0, n.useStateFromStores)([i.default], () => {
    var e;
    return null === (e = i.default.getCurrentUser()) || void 0 === e ? void 0 : e.email
  }), [C, R] = l.useState({
    status: "unknown"
  });
  l.useEffect(() => {
    R({
      status: "loading"
    }), o.default.verifyResend().then(() => R({
      status: "success"
    }), e => {
      R({
        status: "error"
      }), (0, c.captureQuestsException)(e, {
        tags: {
          location: "QuestsRewardCodeModalUnverified"
        }
      })
    })
  }, []);
  let E = () => (0, a.jsx)(r.ModalFooter, {
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
      src: h
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
    }), "loading" === C.status && (0, a.jsx)(r.ModalContent, {
      className: f.content,
      children: (0, a.jsx)(r.Spinner, {})
    }), "error" === C.status && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(r.ModalContent, {
        className: f.content,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: u.default.Messages.QUESTS_REWARD_VERIFICATION_ERROR
        })
      }), E()]
    }), "success" === C.status && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(r.ModalContent, {
        className: f.content,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: u.default.Messages.QUESTS_REWARD_VERIFICATION_BODY.format({
            emailAddress: m,
            emailAddressLink: "mailto:".concat(m)
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
      }), E()]
    })]
  })
}