"use strict";
r.r(e), r.d(e, {
  NoticeColors: function() {
    return _
  },
  NoticeButton: function() {
    return E
  },
  PrimaryCTANoticeButton: function() {
    return T
  },
  NoticeButtonAnchor: function() {
    return C
  },
  NoticeCloseButton: function() {
    return P
  },
  default: function() {
    return D
  }
});
var u = r("37983");
r("884691");
var n = r("414456"),
  i = r.n(n),
  l = r("394846"),
  o = r("77078"),
  c = r("945330"),
  a = r("599110"),
  d = r("49111"),
  s = r("782340"),
  f = r("125792");
let _ = Object.freeze({
  DEFAULT: f.colorDefault,
  NEUTRAL: f.colorNeutral,
  BRAND: f.colorBrand,
  WARNING: f.colorWarning,
  DANGER: f.colorDanger,
  INFO: f.colorInfo,
  STREAMER_MODE: f.colorStreamerMode,
  CUSTOM: f.colorCustom,
  SPOTIFY: f.colorSpotify,
  PLAYSTATION: f.colorPlayStation,
  PREMIUM_TIER_0: f.colorPremiumTier0,
  PREMIUM_TIER_1: f.colorPremiumTier1,
  PREMIUM_TIER_2: f.colorPremiumTier2
});

function E(t) {
  let {
    children: e,
    className: r,
    minor: n = !1,
    ...l
  } = t;
  return (0, u.jsx)(o.FocusRing, {
    children: (0, u.jsx)("button", {
      className: i(f.button, r, {
        [f.buttonMinor]: n
      }),
      ...l,
      children: e
    })
  })
}

function T(t) {
  let {
    children: e,
    noticeType: r,
    additionalTrackingProps: n,
    ...i
  } = t;
  return (0, u.jsx)(E, {
    ...i,
    onClick: t => {
      var e, u;
      null != i.onClick && i.onClick(t), e = r, u = n, null != e && a.default.track(d.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
        notice_type: e,
        ...u
      })
    },
    children: e
  })
}

function C(t) {
  let {
    children: e,
    href: r,
    ...n
  } = t;
  return (0, u.jsx)(o.Anchor, {
    ...n,
    className: f.button,
    href: r,
    children: e
  })
}

function P(t) {
  let {
    onClick: e,
    noticeType: r
  } = t;
  return (0, u.jsx)(o.Clickable, {
    focusProps: {
      offset: 6
    },
    className: f.closeButton,
    onClick: () => {
      var t;
      e(), null != (t = r) && a.default.track(d.AnalyticEvents.APP_NOTICE_CLOSED, {
        notice_type: t
      })
    },
    "aria-label": s.default.Messages.DISMISS,
    children: (0, u.jsx)(c.default, {
      className: f.closeIcon,
      width: 18,
      height: 18
    })
  })
}

function D(t) {
  let {
    color: e = _.DEFAULT,
    className: r,
    style: n,
    children: o
  } = t;
  return (0, u.jsx)("div", {
    className: i(f.notice, {
      [f.isMobile]: l.isMobile
    }, r, e),
    style: null != n ? n : void 0,
    children: o
  })
}