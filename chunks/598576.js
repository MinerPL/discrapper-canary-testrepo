"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var s = n("735250");
n("470079");
var o = n("481060"),
  i = n("864762"),
  r = n("509340"),
  a = n("135184"),
  l = n("409553"),
  d = n("494801"),
  u = n("319392"),
  c = n("798930"),
  f = n("981631"),
  C = n("837537");

function T(e) {
  let {
    transitionState: t,
    onClose: n,
    analyticsLocation: T
  } = e, {
    slide: _,
    gotoNext: O,
    gotoError: p,
    handleWaitingForConnection: x,
    handleAuthToken: N,
    expectedCallbackState: g,
    callbackData: h
  } = (0, i.useTwoWayLinkModalSlideManager)(T, f.PlatformTypes.XBOX);
  return (0, s.jsx)(o.ModalRoot, {
    className: C.modal,
    transitionState: t,
    disableTrack: !0,
    children: (0, s.jsxs)(o.Slides, {
      activeSlide: _,
      width: 408,
      children: [(0, s.jsx)(o.Slide, {
        id: c.TwoWayLinkModalSlideTypes.LANDING,
        children: (0, s.jsx)(l.default, {
          onContinue: O,
          onClose: n
        })
      }), (0, s.jsx)(o.Slide, {
        id: c.TwoWayLinkModalSlideTypes.PRE_CONNECT,
        children: (0, s.jsx)(d.default, {
          isWaitingForConnection: !1,
          onWaitingForConnection: x,
          onAuthToken: N,
          onError: p,
          onClose: n
        })
      }), (0, s.jsx)(o.Slide, {
        id: c.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
        children: (0, s.jsx)(d.default, {
          isWaitingForConnection: !0,
          expectedCallbackState: g,
          onAuthToken: N,
          onError: p,
          onClose: n
        })
      }), (0, s.jsx)(o.Slide, {
        id: c.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
        children: (0, s.jsx)(r.default, {
          authToken: h,
          onContinue: O,
          onError: p,
          onClose: n
        })
      }), (0, s.jsx)(o.Slide, {
        id: c.TwoWayLinkModalSlideTypes.ERROR,
        children: (0, s.jsx)(a.default, {
          onContinue: O,
          onClose: n
        })
      }), (0, s.jsx)(o.Slide, {
        id: c.TwoWayLinkModalSlideTypes.SUCCESS,
        children: (0, s.jsx)(u.default, {
          onClose: n
        })
      })]
    })
  })
}