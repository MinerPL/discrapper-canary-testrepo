"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("990547"),
  o = s("442837"),
  i = s("481060"),
  r = s("809206"),
  d = s("594174"),
  u = s("264119"),
  c = s("75788"),
  E = s("22150"),
  C = s("361833"),
  _ = s("526761"),
  N = s("414899"),
  m = s("800010");

function S(e) {
  var t;
  let {
    transitionState: s,
    onClose: S
  } = e, T = (0, o.useStateFromStores)([d.default], () => d.default.getCurrentUser()), A = l.useRef(null !== (t = null == T ? void 0 : T.verified) && void 0 !== t && t);
  l.useEffect(() => () => (0, r.accountDetailsClose)(), []);
  let f = null == T ? void 0 : T.verified,
    M = f ? _.ChangeEmailSteps.CONFIRM_START : _.ChangeEmailSteps.EMAIL_AND_PASSWORD,
    [I, h] = l.useState(M),
    [x, R] = l.useState(null),
    [p, g] = l.useState(null),
    [v, O] = l.useState(null),
    [U, j] = l.useState(""),
    L = {
      impression_group: n.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW
    };
  return (0, a.jsxs)(i.ModalRoot, {
    transitionState: s,
    disableTrack: !0,
    children: [(0, a.jsx)("img", {
      alt: "",
      className: N.headerImage,
      src: m
    }), (0, a.jsxs)(i.Slides, {
      activeSlide: I,
      width: 440,
      onSlideReady: e => R(e),
      children: [(0, a.jsx)(i.Slide, {
        id: _.ChangeEmailSteps.CONFIRM_START,
        impressionName: n.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
        impressionProperties: L,
        children: (0, a.jsx)(E.default, {
          onNext: () => h(_.ChangeEmailSteps.CONFIRM_CODE),
          onClose: S
        })
      }), (0, a.jsx)(i.Slide, {
        id: _.ChangeEmailSteps.CONFIRM_CODE,
        impressionName: n.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
        impressionProperties: L,
        children: (0, a.jsx)(c.default, {
          error: v,
          setError: O,
          setEmailToken: g,
          isSlideReady: x === _.ChangeEmailSteps.CONFIRM_CODE,
          onNext: () => h(_.ChangeEmailSteps.EMAIL_AND_PASSWORD),
          onClose: S
        })
      }), (0, a.jsx)(i.Slide, {
        id: _.ChangeEmailSteps.EMAIL_AND_PASSWORD,
        impressionName: n.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
        impressionProperties: {
          ...L,
          email_verified: A.current
        },
        children: (0, a.jsx)(C.default, {
          emailToken: p,
          isSlideReady: x === _.ChangeEmailSteps.EMAIL_AND_PASSWORD,
          onBack: f ? () => h(_.ChangeEmailSteps.CONFIRM_CODE) : null,
          onNext: e => {
            j(e), h(_.ChangeEmailSteps.COMPLETE)
          },
          onClose: S
        })
      }), (0, a.jsx)(i.Slide, {
        id: _.ChangeEmailSteps.COMPLETE,
        impressionName: n.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
        impressionProperties: L,
        children: (0, a.jsx)(u.default, {
          email: U,
          onClose: S
        })
      })]
    })]
  })
}