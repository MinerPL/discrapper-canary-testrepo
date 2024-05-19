"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
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
  E = s("785717"),
  I = s("648067"),
  v = s("588822"),
  _ = s("81334"),
  T = s("652853"),
  g = s("335191"),
  A = s("347949"),
  x = s("988246"),
  U = s("689938"),
  N = s("921152");

function p(e) {
  var t;
  let {
    user: s,
    displayProfile: i,
    autoFocusNote: p = !1,
    scrollToConnections: C = !1
  } = e, {
    trackUserProfileAction: h
  } = (0, E.useUserProfileAnalyticsContext)(), R = (0, r.useStateFromStores)([m.default], () => m.default.hidePersonalInformation), {
    theme: P
  } = (0, T.useUserProfileThemeContext)(), M = (0, r.useStateFromStores)([S.default], () => S.default.locale), j = (0, f.useIsUserRecentGamesEnabled)({
    userId: s.id,
    location: "28tk0bf_3"
  }), L = (0, d.default)("user_profile"), y = (0, I.default)(s.id), O = a.useRef(null);
  return (a.useLayoutEffect(() => {
    if (C) {
      var e;
      null == O || null === (e = O.current) || void 0 === e || e.scrollIntoView()
    }
  }, [C]), R) ? (0, l.jsx)(x.default, {}) : (0, l.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: N.infoScroller,
    children: [(0, l.jsxs)("div", {
      className: N.userInfoSection,
      children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.Heading, {
          variant: "eyebrow",
          className: N.userInfoSectionHeader,
          children: U.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, l.jsx)(v.default, {
          className: N.userInfoText,
          userBio: null !== (t = null == i ? void 0 : i.bio) && void 0 !== t ? t : ""
        })]
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsx)(o.Heading, {
          variant: "eyebrow",
          className: N.userInfoSectionHeader,
          children: U.default.Messages.USER_PROFILE_MEMBER_SINCE
        }), (0, l.jsx)(_.default, {
          userId: s.id,
          textClassName: N.userInfoText
        })]
      }), L && (0, l.jsx)("div", {
        className: N.clans,
        children: (0, l.jsx)("div", {
          className: N.userInfoText,
          children: (0, l.jsx)(c.UserProfileClanContainer, {
            userId: s.id
          })
        })
      }), j && (0, l.jsx)(A.UserProfileRecentGamesContainer, {
        userId: s.id,
        maxItems: 6,
        containerClassName: n()(N.userInfoText, N.recentGames)
      }), (0, l.jsx)(o.Heading, {
        variant: "eyebrow",
        className: N.userInfoSectionHeader,
        children: U.default.Messages.NOTE
      }), (0, l.jsx)(u.default, {
        userId: s.id,
        autoFocus: p,
        className: N.note,
        onUpdate: () => h({
          action: "SET_NOTE"
        })
      })]
    }), (0, l.jsx)(g.ConnectedUserAccounts, {
      ref: O,
      connectedAccounts: y,
      theme: P,
      locale: M,
      className: N.userInfoSection,
      userId: s.id
    })]
  })
}