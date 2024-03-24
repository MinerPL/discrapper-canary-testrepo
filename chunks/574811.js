"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
}), a("222007");
var l = a("37983"),
  s = a("884691"),
  n = a("77078"),
  i = a("698609"),
  o = a("124539"),
  d = a("776724"),
  r = a("57242"),
  c = a("711734"),
  u = a("299738"),
  E = a("170213"),
  _ = a("49111"),
  A = a("668222");

function S(e) {
  let {
    classificationId: t,
    transitionState: a,
    initialSlide: S = E.AppealIngestionSlideTypes.SPEED_BUMP,
    onClose: N
  } = e, [I, x] = s.useState(S), {
    classification: f,
    isDsaEligible: T
  } = (0, i.useSafetyHubClassification)(null != t ? t : _.EMPTY_STRING_SNOWFLAKE_ID), g = (null == f ? void 0 : f.is_spam) || !1, p = (null == f ? void 0 : f.is_coppa) || !1;
  s.useEffect(() => {
    T ? x(S) : x(E.AppealIngestionSlideTypes.COLLECT_SIGNAL)
  }, [x, S, T]);
  let m = s.useCallback(() => {
      r.default.close(), N()
    }, [N]),
    C = s.useCallback(() => {
      var e, t;
      let a = null;
      (a = T ? null === (e = E.SlidesOrderDsaEligible[I]) || void 0 === e ? void 0 : e.next : null === (t = E.SlidesOrderNonDsaEligible[I]) || void 0 === t ? void 0 : t.next) ? x(a): m()
    }, [I, T, m]),
    L = s.useCallback(() => {
      var e, t;
      let a;
      (a = T ? null === (e = E.SlidesOrderDsaEligible[I]) || void 0 === e ? void 0 : e.prev : null === (t = E.SlidesOrderNonDsaEligible[I]) || void 0 === t ? void 0 : t.prev) ? x(a): m()
    }, [I, T, m]);
  return (0, l.jsx)(n.ModalRoot, {
    transitionState: a,
    disableTrack: !0,
    size: n.ModalSize.DYNAMIC,
    children: (0, l.jsx)("div", {
      className: A.container,
      children: (0, l.jsxs)(n.Slides, {
        activeSlide: I,
        width: 500,
        children: [(0, l.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.SPEED_BUMP,
          children: (0, l.jsx)(u.default, {
            classification: f,
            onClose: m,
            onNext: C,
            isSpam: g,
            isCoppa: p
          })
        }), (0, l.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.COLLECT_SIGNAL,
          children: (0, l.jsx)(o.default, {
            isDsaEligible: T,
            onClose: m,
            onNext: C,
            onBack: L
          })
        }), (0, l.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.CONFIRM_SUBMISSION,
          children: (0, l.jsx)(d.default, {
            onClose: m,
            onNext: C,
            onBack: L
          })
        }), (0, l.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.REQUEST_SENT,
          children: (0, l.jsx)(c.default, {
            onNext: C
          })
        }), (0, l.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.THANKS,
          children: (0, l.jsx)(o.default, {
            isDsaEligible: T,
            onClose: m,
            onNext: C,
            onBack: L
          })
        })]
      })
    })
  })
}