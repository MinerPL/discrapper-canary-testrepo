"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("37983"),
  l = s("884691"),
  i = s("446674"),
  o = s("77078"),
  r = s("910330"),
  n = s("376556"),
  u = s("572943"),
  c = s("915639"),
  d = s("102985"),
  f = s("756507"),
  S = s("713135"),
  m = s("906889"),
  E = s("485422"),
  T = s("880114"),
  p = s("824140"),
  N = s("751906"),
  _ = s("782340"),
  A = s("591572");

function I(e) {
  var t;
  let {
    user: s,
    displayProfile: I,
    autoFocusNote: v = !1,
    scrollToConnections: x = !1
  } = e, {
    trackUserProfileAction: U
  } = (0, f.useUserProfileAnalyticsContext)(), h = (0, u.usePlatformAllowed)({
    forUserProfile: !0
  }), C = (0, i.useStateFromStores)([S.default], () => {
    var e, t;
    return null !== (t = null === (e = S.default.getUserProfile(s.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== t ? t : []
  }), y = (0, i.useStateFromStores)([d.default], () => d.default.hidePersonalInformation), {
    profileTheme: j
  } = (0, m.default)(s, I), R = (0, i.useStateFromStores)([c.default], () => c.default.locale), M = l.useMemo(() => C.filter(e => {
    let t = n.default.get(e.type);
    return null != t && h(t)
  }), [C, h]), P = l.useRef(null);
  return (l.useLayoutEffect(() => {
    if (x) {
      var e;
      null == P || null === (e = P.current) || void 0 === e || e.scrollIntoView()
    }
  }, [x]), y) ? (0, a.jsx)(N.default, {}) : (0, a.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: A.infoScroller,
    children: [(0, a.jsxs)("div", {
      className: A.userInfoSection,
      children: [(null == I ? void 0 : I.bio) != null && (null == I ? void 0 : I.bio) !== "" && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.Heading, {
          variant: "eyebrow",
          className: A.userInfoSectionHeader,
          children: _.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, a.jsx)(E.default, {
          className: A.userInfoText,
          userBio: null !== (t = null == I ? void 0 : I.bio) && void 0 !== t ? t : ""
        })]
      }), (0, a.jsx)(T.default, {
        userId: s.id,
        headingClassName: A.userInfoSectionHeader,
        textClassName: A.userInfoText
      }), (0, a.jsx)(o.Heading, {
        variant: "eyebrow",
        className: A.userInfoSectionHeader,
        children: _.default.Messages.NOTE
      }), (0, a.jsx)(r.default, {
        userId: s.id,
        autoFocus: v,
        className: A.note,
        onUpdate: () => U({
          action: "SET_NOTE"
        })
      })]
    }), (0, a.jsx)(p.ConnectedUserAccounts, {
      ref: P,
      connectedAccounts: M,
      theme: j,
      locale: R,
      className: A.userInfoSection,
      userId: s.id
    })]
  })
}