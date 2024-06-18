"use strict";
n.r(t), n.d(t, {
  QuestsRewardModalUnverified: function() {
    return I
  },
  openRewardModalUnverified: function() {
    return T
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(893776),
  l = n(594174),
  u = n(41542),
  _ = n(918701),
  d = n(689938),
  c = n(583346),
  E = n(800010);

function I(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, I = (0, s.e7)([l.default], () => {
    var e;
    return null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.email
  }), [T, h] = r.useState({
    status: "unknown"
  });
  r.useEffect(() => {
    h({
      status: "loading"
    }), a.Z.verifyResend().then(() => h({
      status: "success"
    }), e => {
      h({
        status: "error"
      }), (0, _.ys)(e, {
        tags: {
          location: "QuestsRewardModalUnverified"
        }
      })
    })
  }, []);
  let S = () => (0, i.jsx)(o.ModalFooter, {
    className: c.modalFooter,
    children: (0, i.jsx)(o.Button, {
      color: o.Button.Colors.BRAND,
      size: o.Button.Sizes.MEDIUM,
      onClick: n,
      children: d.Z.Messages.CLOSE
    })
  });
  return (0, i.jsxs)(o.ModalRoot, {
    transitionState: t,
    disableTrack: !0,
    children: [(0, i.jsx)("img", {
      alt: "",
      className: c.headerImage,
      src: E
    }), (0, i.jsxs)(o.ModalHeader, {
      separator: !1,
      className: c.header,
      children: [(0, i.jsx)(o.Heading, {
        className: c.title,
        variant: "heading-xl/bold",
        children: d.Z.Messages.QUESTS_REWARD_VERIFICATION_TITLE
      }), (0, i.jsx)(o.ModalCloseButton, {
        onClick: n,
        className: c.modalCloseButton
      })]
    }), "loading" === T.status && (0, i.jsx)(o.ModalContent, {
      className: c.content,
      children: (0, i.jsx)(o.Spinner, {})
    }), "error" === T.status && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(o.ModalContent, {
        className: c.content,
        children: (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          children: d.Z.Messages.QUESTS_REWARD_VERIFICATION_ERROR
        })
      }), S()]
    }), "success" === T.status && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(o.ModalContent, {
        className: c.content,
        children: (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          children: d.Z.Messages.QUESTS_REWARD_VERIFICATION_BODY.format({
            emailAddress: I,
            emailAddressLink: "mailto:".concat(I)
          })
        })
      }), (0, i.jsx)(o.ModalContent, {
        className: c.content,
        children: (0, i.jsxs)("div", {
          className: c.tooltip,
          children: [(0, i.jsx)(u.Z, {
            className: c.infoFilledIcon
          }), (0, i.jsx)(o.Text, {
            className: c.tooltipText,
            variant: "text-sm/normal",
            children: d.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CHECK_SPAM
          })]
        })
      }), S()]
    })]
  })
}

function T() {
  (0, o.openModalLazy)(async () => {
    let {
      QuestsRewardModalUnverified: e
    } = await Promise.resolve().then(n.bind(n, 669041));
    return t => (0, i.jsx)(e, {
      ...t
    })
  })
}