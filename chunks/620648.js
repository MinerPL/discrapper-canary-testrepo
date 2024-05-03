"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("120356"),
  n = s.n(i),
  r = s("442837"),
  o = s("481060"),
  u = s("666520"),
  d = s("169559"),
  c = s("369077"),
  f = s("761174"),
  S = s("706454"),
  m = s("246946"),
  I = s("785717"),
  E = s("648067"),
  v = s("588822"),
  _ = s("81334"),
  T = s("652853"),
  x = s("335191"),
  N = s("347949"),
  A = s("988246"),
  U = s("689938"),
  g = s("175839");

function C(e) {
  var t;
  let {
    user: s,
    displayProfile: i,
    autoFocusNote: C = !1,
    scrollToConnections: h = !1
  } = e, {
    trackUserProfileAction: p
  } = (0, I.useUserProfileAnalyticsContext)(), R = (0, r.useStateFromStores)([m.default], () => m.default.hidePersonalInformation), {
    theme: j
  } = (0, T.useUserProfileThemeContext)(), M = (0, r.useStateFromStores)([S.default], () => S.default.locale), P = (0, f.useIsUserRecentGamesEnabled)({
    userId: s.id,
    location: "28tk0bf_3"
  }), y = (0, d.default)("user_profile"), O = (0, E.default)(s.id), L = a.useRef(null);
  return (a.useLayoutEffect(() => {
    if (h) {
      var e;
      null == L || null === (e = L.current) || void 0 === e || e.scrollIntoView()
    }
  }, [h]), R) ? (0, l.jsx)(A.default, {}) : (0, l.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: g.infoScroller,
    children: [(0, l.jsxs)("div", {
      className: g.userInfoSection,
      children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.Heading, {
          variant: "eyebrow",
          className: g.userInfoSectionHeader,
          children: U.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, l.jsx)(v.default, {
          className: g.userInfoText,
          userBio: null !== (t = null == i ? void 0 : i.bio) && void 0 !== t ? t : ""
        })]
      }), (0, l.jsx)(_.default, {
        userId: s.id,
        headingClassName: g.userInfoSectionHeader,
        textClassName: g.userInfoText
      }), y && (0, l.jsx)("div", {
        className: g.clans,
        children: (0, l.jsx)("div", {
          className: g.userInfoText,
          children: (0, l.jsx)(c.UserProfileClanContainer, {
            userId: s.id
          })
        })
      }), P && (0, l.jsx)(N.UserProfileRecentGamesContainer, {
        userId: s.id,
        maxItems: 6,
        containerClassName: n()(g.userInfoText, g.recentGames)
      }), (0, l.jsx)(o.Heading, {
        variant: "eyebrow",
        className: g.userInfoSectionHeader,
        children: U.default.Messages.NOTE
      }), (0, l.jsx)(u.default, {
        userId: s.id,
        autoFocus: C,
        className: g.note,
        onUpdate: () => p({
          action: "SET_NOTE"
        })
      })]
    }), (0, l.jsx)(x.ConnectedUserAccounts, {
      ref: L,
      connectedAccounts: O,
      theme: j,
      locale: M,
      className: g.userInfoSection,
      userId: s.id
    })]
  })
}