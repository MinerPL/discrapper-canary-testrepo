"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("47120"), s("653041"), s("627341");
var l = s("735250"),
  a = s("470079"),
  i = s("278074"),
  n = s("442837"),
  r = s("706898"),
  o = s("481060"),
  u = s("199902"),
  d = s("158776"),
  c = s("246946"),
  f = s("594174"),
  S = s("543595"),
  m = s("785717"),
  I = s("621853"),
  E = s("100849"),
  v = s("944546"),
  _ = s("470900"),
  T = s("988246"),
  x = s("834534"),
  N = s("228168"),
  A = s("981631"),
  U = s("689938"),
  g = s("788741");
let C = e => {
  let {
    user: t,
    currentUser: s
  } = e, l = (0, n.useStateFromStores)([u.default], () => u.default.getAnyStreamForUser(t.id)), a = (0, n.useStateFromStores)([d.default], () => d.default.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t !== A.ActivityTypes.CUSTOM_STATUS
  })), [r, o] = (0, n.useStateFromStoresArray)([I.default], () => {
    var e, s;
    return [null === (e = I.default.getMutualFriends(t.id)) || void 0 === e ? void 0 : e.length, null === (s = I.default.getMutualGuilds(t.id)) || void 0 === s ? void 0 : s.length]
  }), c = [{
    section: N.UserProfileSections.USER_INFO,
    text: U.default.Messages.USER_PROFILE_ABOUT_ME
  }];
  return (null != l || null != a) && c.push({
    section: N.UserProfileSections.ACTIVITY,
    text: U.default.Messages.USER_PROFILE_ACTIVITY
  }), t.id !== (null == s ? void 0 : s.id) && (c.push({
    section: N.UserProfileSections.MUTUAL_FRIENDS,
    text: (0, i.match)(r).with(void 0, () => U.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => U.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => U.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: e
    }))
  }), c.push({
    section: N.UserProfileSections.MUTUAL_GUILDS,
    text: (0, i.match)(o).with(void 0, () => U.default.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => U.default.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => U.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: e
    }))
  })), c
};

function h(e) {
  let {
    section: t,
    user: s,
    currentUser: a,
    displayProfile: i,
    autoFocusNote: n,
    onClose: r
  } = e;
  return t === N.UserProfileSections.ACTIVITY ? (0, l.jsx)(E.default, {
    user: s,
    type: S.Types.SIMPLIFIED_PROFILE
  }) : t === N.UserProfileSections.MUTUAL_FRIENDS ? (0, l.jsx)(v.default, {
    user: s,
    onClose: r
  }) : t === N.UserProfileSections.MUTUAL_GUILDS ? (0, l.jsx)(_.default, {
    user: s,
    onClose: r
  }) : (0, l.jsx)(x.default, {
    className: g.infoTab,
    user: s,
    currentUser: a,
    displayProfile: i,
    autoFocusNote: n
  })
}

function p(e) {
  var t, s;
  let {
    user: i,
    displayProfile: u,
    initialSection: d = N.UserProfileSections.USER_INFO,
    autoFocusNote: S,
    onClose: I
  } = e, {
    trackUserProfileAction: E
  } = (0, m.useUserProfileAnalyticsContext)(), v = (0, n.useStateFromStores)([f.default], () => f.default.getCurrentUser()), _ = (0, n.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), x = C({
    user: i,
    currentUser: v
  }), [A, U] = a.useState(S), [p, R] = a.useState(null !== (s = null === (t = x.find(e => {
    let {
      section: t
    } = e;
    return t === d
  })) || void 0 === t ? void 0 : t.section) && void 0 !== s ? s : N.UserProfileSections.USER_INFO), j = a.useCallback(e => {
    E({
      action: "PRESS_SECTION",
      section: e
    }), R(e), U(!1)
  }, [E, R]);
  return null == v ? null : _ ? (0, l.jsx)("div", {
    className: g.container,
    children: (0, l.jsx)(T.default, {})
  }) : (0, l.jsxs)("div", {
    className: g.container,
    children: [(0, l.jsx)(r.TabBar, {
      className: g.tabBar,
      type: "top",
      selectedItem: p,
      onItemSelect: j,
      children: x.map(e => {
        let {
          section: t,
          text: s
        } = e;
        return (0, l.jsx)(r.TabBar.Item, {
          className: g.tabBarItem,
          id: t,
          "aria-label": s,
          children: (0, l.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: s
          })
        }, t)
      })
    }), (0, l.jsx)(h, {
      section: p,
      user: i,
      currentUser: v,
      displayProfile: u,
      autoFocusNote: A,
      onClose: I
    })]
  })
}