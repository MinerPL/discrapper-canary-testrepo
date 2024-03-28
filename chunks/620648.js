"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
});
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  o = s("481060"),
  r = s("666520"),
  n = s("726542"),
  u = s("122021"),
  c = s("201819"),
  d = s("706454"),
  f = s("246946"),
  S = s("785717"),
  m = s("621853"),
  E = s("358794"),
  T = s("588822"),
  N = s("81334"),
  p = s("335191"),
  _ = s("347949"),
  I = s("988246"),
  A = s("689938"),
  v = s("478741");

function x(e) {
  var t;
  let {
    user: s,
    displayProfile: x,
    autoFocusNote: U = !1,
    scrollToConnections: h = !1
  } = e, {
    trackUserProfileAction: C
  } = (0, S.useUserProfileAnalyticsContext)(), y = (0, u.usePlatformAllowed)({
    forUserProfile: !0
  }), j = (0, i.useStateFromStores)([m.default], () => {
    var e, t;
    return null !== (t = null === (e = m.default.getUserProfile(s.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== t ? t : []
  }), R = (0, i.useStateFromStores)([f.default], () => f.default.hidePersonalInformation), {
    profileTheme: M
  } = (0, E.default)(s, x), P = (0, i.useStateFromStores)([d.default], () => d.default.locale), g = (0, c.useIsUserRecentGamesFetchEnabled)({
    userId: s.id,
    location: "28tk0bf_2"
  }), O = l.useMemo(() => j.filter(e => {
    let t = n.default.get(e.type);
    return null != t && y(t)
  }), [j, y]), F = l.useRef(null);
  return (l.useLayoutEffect(() => {
    if (h) {
      var e;
      null == F || null === (e = F.current) || void 0 === e || e.scrollIntoView()
    }
  }, [h]), R) ? (0, a.jsx)(I.default, {}) : (0, a.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: v.infoScroller,
    children: [(0, a.jsxs)("div", {
      className: v.userInfoSection,
      children: [(null == x ? void 0 : x.bio) != null && (null == x ? void 0 : x.bio) !== "" && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.Heading, {
          variant: "eyebrow",
          className: v.userInfoSectionHeader,
          children: A.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, a.jsx)(T.default, {
          className: v.userInfoText,
          userBio: null !== (t = null == x ? void 0 : x.bio) && void 0 !== t ? t : ""
        })]
      }), (0, a.jsx)(N.default, {
        userId: s.id,
        headingClassName: v.userInfoSectionHeader,
        textClassName: v.userInfoText
      }), g && (0, a.jsx)(_.default, {
        userId: s.id,
        containerClassName: v.userInfoText,
        wrapChildren: e => (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(o.Heading, {
            variant: "eyebrow",
            className: v.userInfoSectionHeader,
            children: A.default.Messages.RECENT_GAMES
          }), e]
        })
      }), (0, a.jsx)(o.Heading, {
        variant: "eyebrow",
        className: v.userInfoSectionHeader,
        children: A.default.Messages.NOTE
      }), (0, a.jsx)(r.default, {
        userId: s.id,
        autoFocus: U,
        className: v.note,
        onUpdate: () => C({
          action: "SET_NOTE"
        })
      })]
    }), (0, a.jsx)(p.ConnectedUserAccounts, {
      ref: F,
      connectedAccounts: O,
      theme: M,
      locale: P,
      className: v.userInfoSection,
      userId: s.id
    })]
  })
}