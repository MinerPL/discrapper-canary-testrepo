"use strict";
n.r(t), n.d(t, {
  NoticeButton: function() {
    return u
  },
  NoticeButtonAnchor: function() {
    return N
  },
  NoticeCloseButton: function() {
    return T
  },
  NoticeColors: function() {
    return _
  },
  PrimaryCTANoticeButton: function() {
    return A
  },
  default: function() {
    return L
  }
});
var i = n("735250");
n("470079");
var E = n("120356"),
  r = n.n(E),
  o = n("873546"),
  l = n("481060"),
  s = n("465670"),
  c = n("626135"),
  a = n("981631"),
  I = n("689938"),
  S = n("497748");
let _ = Object.freeze({
  DEFAULT: S.colorDefault,
  NEUTRAL: S.colorNeutral,
  BRAND: S.colorBrand,
  WARNING: S.colorWarning,
  DANGER: S.colorDanger,
  INFO: S.colorInfo,
  STREAMER_MODE: S.colorStreamerMode,
  CUSTOM: S.colorCustom,
  SPOTIFY: S.colorSpotify,
  PLAYSTATION: S.colorPlayStation,
  PREMIUM_TIER_0: S.colorPremiumTier0,
  PREMIUM_TIER_1: S.colorPremiumTier1,
  PREMIUM_TIER_2: S.colorPremiumTier2
});

function u(e) {
  let {
    children: t,
    className: n,
    minor: E = !1,
    ...o
  } = e;
  return (0, i.jsx)(l.FocusRing, {
    children: (0, i.jsx)("button", {
      className: r()(S.button, n, {
        [S.buttonMinor]: E
      }),
      ...o,
      children: t
    })
  })
}

function A(e) {
  let {
    children: t,
    noticeType: n,
    additionalTrackingProps: E,
    ...r
  } = e;
  return (0, i.jsx)(u, {
    ...r,
    onClick: e => {
      var t, i;
      null != r.onClick && r.onClick(e), t = n, i = E, null != t && c.default.track(a.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
        notice_type: t,
        ...i
      })
    },
    children: t
  })
}

function N(e) {
  let {
    children: t,
    href: n,
    ...E
  } = e;
  return (0, i.jsx)(l.Anchor, {
    ...E,
    className: S.button,
    href: n,
    children: t
  })
}

function T(e) {
  let {
    onClick: t,
    noticeType: n
  } = e;
  return (0, i.jsx)(l.Clickable, {
    focusProps: {
      offset: 6
    },
    className: S.closeButton,
    onClick: () => {
      var e;
      t(), null != (e = n) && c.default.track(a.AnalyticEvents.APP_NOTICE_CLOSED, {
        notice_type: e
      })
    },
    "aria-label": I.default.Messages.DISMISS,
    children: (0, i.jsx)(s.default, {
      className: S.closeIcon,
      width: 18,
      height: 18
    })
  })
}

function L(e) {
  let {
    color: t = _.DEFAULT,
    className: n,
    style: E,
    children: l
  } = e;
  return (0, i.jsx)("div", {
    className: r()(S.notice, {
      [S.isMobile]: o.isMobile
    }, n, t),
    style: null != E ? E : void 0,
    children: l
  })
}