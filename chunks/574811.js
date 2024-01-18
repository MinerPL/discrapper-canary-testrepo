"use strict";
l.r(a), l.d(a, {
  default: function() {
    return N
  }
}), l("222007");
var t = l("37983"),
  s = l("884691"),
  n = l("77078"),
  i = l("698609"),
  o = l("124539"),
  d = l("776724"),
  r = l("57242"),
  c = l("711734"),
  u = l("299738"),
  E = l("170213"),
  _ = l("701098");

function N(e) {
  let {
    classificationId: a,
    transitionState: l,
    initialSlide: N = E.AppealIngestionSlideTypes.SPEED_BUMP,
    onClose: S
  } = e, [A, x] = s.useState(N), {
    classification: I,
    isDsaEligible: T
  } = (0, i.useSafetyHubClassification)(null != a ? a : ""), f = (null == I ? void 0 : I.is_spam) || !1, g = (null == I ? void 0 : I.is_coppa) || !1;
  s.useEffect(() => {
    T ? x(N) : x(E.AppealIngestionSlideTypes.COLLECT_SIGNAL)
  }, [x, N, T]);
  let h = s.useCallback(() => {
      r.default.close(), S()
    }, [S]),
    p = s.useCallback(() => {
      var e, a;
      let l = null;
      (l = T ? null === (e = E.SlidesOrderDsaEligible[A]) || void 0 === e ? void 0 : e.next : null === (a = E.SlidesOrderNonDsaEligible[A]) || void 0 === a ? void 0 : a.next) ? x(l): h()
    }, [A, T, h]),
    L = s.useCallback(() => {
      var e, a;
      let l;
      (l = T ? null === (e = E.SlidesOrderDsaEligible[A]) || void 0 === e ? void 0 : e.prev : null === (a = E.SlidesOrderNonDsaEligible[A]) || void 0 === a ? void 0 : a.prev) ? x(l): h()
    }, [A, T, h]);
  return (0, t.jsx)(n.ModalRoot, {
    transitionState: l,
    disableTrack: !0,
    children: (0, t.jsx)("div", {
      className: _.container,
      children: (0, t.jsxs)(n.Slides, {
        activeSlide: A,
        width: 440,
        children: [(0, t.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.SPEED_BUMP,
          children: (0, t.jsx)(u.default, {
            classification: I,
            onClose: h,
            onNext: p,
            isSpam: f,
            isCoppa: g
          })
        }), (0, t.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.COLLECT_SIGNAL,
          children: (0, t.jsx)(o.default, {
            isDsaEligible: T,
            onClose: h,
            onNext: p,
            onBack: L
          })
        }), (0, t.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.CONFIRM_SUBMISSION,
          children: (0, t.jsx)(d.default, {
            onClose: h,
            onNext: p,
            onBack: L
          })
        }), (0, t.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.REQUEST_SENT,
          children: (0, t.jsx)(c.default, {
            onNext: p
          })
        }), (0, t.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.THANKS,
          children: (0, t.jsx)(o.default, {
            isDsaEligible: T,
            onClose: h,
            onNext: p,
            onBack: L
          })
        })]
      })
    })
  })
}