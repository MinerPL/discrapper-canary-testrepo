"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var o = n("37983"),
  s = n("884691"),
  a = n("759843"),
  r = n("446674"),
  l = n("77078"),
  i = n("152584"),
  E = n("697218"),
  _ = n("893044"),
  u = n("509943"),
  T = n("457818"),
  S = n("397336"),
  d = n("679012"),
  N = n("92693");

function c(e) {
  var t;
  let {
    transitionState: n,
    onClose: c
  } = e, C = (0, r.useStateFromStores)([E.default], () => E.default.getCurrentUser()), A = s.useRef(null !== (t = null == C ? void 0 : C.verified) && void 0 !== t && t);
  s.useEffect(() => () => (0, i.accountDetailsClose)(), []);
  let I = null == C ? void 0 : C.verified,
    f = I ? S.ChangeEmailSteps.CONFIRM_START : S.ChangeEmailSteps.EMAIL_AND_PASSWORD,
    [R, U] = s.useState(f),
    [O, m] = s.useState(null),
    [p, v] = s.useState(null),
    [M, D] = s.useState(null),
    G = {
      impression_group: a.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW
    };
  return (0, o.jsxs)(l.ModalRoot, {
    transitionState: n,
    disableTrack: !0,
    children: [R === S.ChangeEmailSteps.CONFIRM_START ? (0, o.jsx)("img", {
      alt: "",
      className: d.headerImage,
      src: N
    }) : null, (0, o.jsxs)(l.Slides, {
      activeSlide: R,
      width: 440,
      onSlideReady: e => m(e),
      children: [(0, o.jsx)(l.Slide, {
        id: S.ChangeEmailSteps.CONFIRM_START,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
        impressionProperties: G,
        children: (0, o.jsx)(u.default, {
          onNext: () => U(S.ChangeEmailSteps.CONFIRM_CODE),
          onClose: c
        })
      }), (0, o.jsx)(l.Slide, {
        id: S.ChangeEmailSteps.CONFIRM_CODE,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
        impressionProperties: G,
        children: (0, o.jsx)(_.default, {
          error: M,
          setError: D,
          setEmailToken: v,
          isSlideReady: O === S.ChangeEmailSteps.CONFIRM_CODE,
          onNext: () => U(S.ChangeEmailSteps.EMAIL_AND_PASSWORD),
          onClose: c
        })
      }), (0, o.jsx)(l.Slide, {
        id: S.ChangeEmailSteps.EMAIL_AND_PASSWORD,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
        impressionProperties: {
          ...G,
          email_verified: A.current
        },
        children: (0, o.jsx)(T.default, {
          emailToken: p,
          isSlideReady: O === S.ChangeEmailSteps.EMAIL_AND_PASSWORD,
          onBack: I ? () => U(S.ChangeEmailSteps.CONFIRM_CODE) : null,
          onClose: c
        })
      })]
    })]
  })
}