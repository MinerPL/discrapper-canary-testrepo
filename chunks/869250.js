"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
  }
});
var l = s("37983"),
  a = s("884691"),
  i = s("446674"),
  r = s("77078"),
  o = s("910330"),
  n = s("376556"),
  u = s("572943"),
  d = s("915639"),
  c = s("102985"),
  f = s("713135"),
  S = s("906889"),
  m = s("485422"),
  E = s("213736"),
  T = s("880114"),
  x = s("824140"),
  N = s("751906"),
  p = s("782340"),
  h = s("974991");

function v(e) {
  var t;
  let {
    user: s,
    displayProfile: v,
    autoFocusNote: A = !1,
    scrollToConnections: I = !1
  } = e, _ = (0, u.usePlatformAllowed)({
    forUserProfile: !0
  }), C = (0, i.useStateFromStores)([f.default], () => {
    var e, t;
    return null !== (t = null === (e = f.default.getUserProfile(s.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== t ? t : []
  }), U = (0, i.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), {
    profileTheme: j
  } = (0, S.default)(s, v), y = (0, i.useStateFromStores)([d.default], () => d.default.locale), g = a.useMemo(() => C.filter(e => {
    let t = n.default.get(e.type);
    return null != t && _(t)
  }), [C, _]), M = a.useRef(null);
  return (a.useLayoutEffect(() => {
    if (I) {
      var e;
      null == M || null === (e = M.current) || void 0 === e || e.scrollIntoView()
    }
  }, [I]), U) ? (0, l.jsx)(N.default, {}) : (0, l.jsxs)(r.ScrollerThin, {
    fade: !0,
    className: h.infoScroller,
    children: [(0, l.jsxs)("div", {
      className: h.userInfoSection,
      children: [(null == v ? void 0 : v.bio) != null && (null == v ? void 0 : v.bio) !== "" && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(r.Heading, {
          variant: "eyebrow",
          className: h.userInfoSectionHeader,
          children: p.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, l.jsx)(m.default, {
          className: h.userInfoText,
          userBio: null !== (t = null == v ? void 0 : v.bio) && void 0 !== t ? t : ""
        })]
      }), s.isClyde() && (0, l.jsx)(E.default, {
        className: h.userInfoText,
        isExpanded: !0
      }), (0, l.jsx)(T.default, {
        userId: s.id,
        headingClassName: h.userInfoSectionHeader,
        textClassName: h.userInfoText
      }), (0, l.jsx)(r.Heading, {
        variant: "eyebrow",
        className: h.userInfoSectionHeader,
        children: p.default.Messages.NOTE
      }), (0, l.jsx)(o.default, {
        userId: s.id,
        autoFocus: A,
        className: h.note
      })]
    }), (0, l.jsx)(x.ConnectedUserAccounts, {
      ref: M,
      connectedAccounts: g,
      theme: j,
      locale: y,
      className: h.userInfoSection,
      userId: s.id
    })]
  })
}