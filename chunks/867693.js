"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var s = n("37983"),
  o = n("884691"),
  a = n("759843"),
  r = n("446674"),
  l = n("77078"),
  i = n("152584"),
  E = n("697218"),
  _ = n("330355"),
  u = n("893044"),
  d = n("509943"),
  T = n("457818"),
  S = n("397336"),
  N = n("679012"),
  c = n("92693");

function C(e) {
  var t;
  let {
    transitionState: n,
    onClose: C
  } = e, A = (0, r.useStateFromStores)([E.default], () => E.default.getCurrentUser()), I = o.useRef(null !== (t = null == A ? void 0 : A.verified) && void 0 !== t && t);
  o.useEffect(() => () => (0, i.accountDetailsClose)(), []);
  let f = null == A ? void 0 : A.verified,
    R = f ? S.ChangeEmailSteps.CONFIRM_START : S.ChangeEmailSteps.EMAIL_AND_PASSWORD,
    [U, O] = o.useState(R),
    [m, p] = o.useState(null),
    [M, h] = o.useState(null),
    [v, g] = o.useState(null),
    [G, D] = o.useState(""),
    L = {
      impression_group: a.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW
    };
  return (0, s.jsxs)(l.ModalRoot, {
    transitionState: n,
    disableTrack: !0,
    children: [(0, s.jsx)("img", {
      alt: "",
      className: N.headerImage,
      src: c
    }), (0, s.jsxs)(l.Slides, {
      activeSlide: U,
      width: 440,
      onSlideReady: e => p(e),
      children: [(0, s.jsx)(l.Slide, {
        id: S.ChangeEmailSteps.CONFIRM_START,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
        impressionProperties: L,
        children: (0, s.jsx)(d.default, {
          onNext: () => O(S.ChangeEmailSteps.CONFIRM_CODE),
          onClose: C
        })
      }), (0, s.jsx)(l.Slide, {
        id: S.ChangeEmailSteps.CONFIRM_CODE,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
        impressionProperties: L,
        children: (0, s.jsx)(u.default, {
          error: v,
          setError: g,
          setEmailToken: h,
          isSlideReady: m === S.ChangeEmailSteps.CONFIRM_CODE,
          onNext: () => O(S.ChangeEmailSteps.EMAIL_AND_PASSWORD),
          onClose: C
        })
      }), (0, s.jsx)(l.Slide, {
        id: S.ChangeEmailSteps.EMAIL_AND_PASSWORD,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
        impressionProperties: {
          ...L,
          email_verified: I.current
        },
        children: (0, s.jsx)(T.default, {
          emailToken: M,
          isSlideReady: m === S.ChangeEmailSteps.EMAIL_AND_PASSWORD,
          onBack: f ? () => O(S.ChangeEmailSteps.CONFIRM_CODE) : null,
          onNext: e => {
            D(e), O(S.ChangeEmailSteps.COMPLETE)
          },
          onClose: C
        })
      }), (0, s.jsx)(l.Slide, {
        id: S.ChangeEmailSteps.COMPLETE,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
        impressionProperties: L,
        children: (0, s.jsx)(_.default, {
          email: G,
          onClose: C
        })
      })]
    })]
  })
}