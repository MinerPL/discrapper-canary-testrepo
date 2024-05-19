"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
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
  E = s("621853"),
  I = s("100849"),
  v = s("944546"),
  _ = s("470900"),
  T = s("988246"),
  g = s("834534"),
  A = s("228168"),
  x = s("981631"),
  U = s("689938"),
  N = s("773386");
let p = e => {
  let {
    user: t,
    currentUser: s
  } = e, l = (0, n.useStateFromStores)([u.default], () => u.default.getAnyStreamForUser(t.id)), a = (0, n.useStateFromStores)([d.default], () => d.default.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t !== x.ActivityTypes.CUSTOM_STATUS
  })), [r, o] = (0, n.useStateFromStoresArray)([E.default], () => {
    var e, s;
    return [null === (e = E.default.getMutualFriends(t.id)) || void 0 === e ? void 0 : e.length, null === (s = E.default.getMutualGuilds(t.id)) || void 0 === s ? void 0 : s.length]
  }), c = [{
    section: A.UserProfileSections.USER_INFO,
    text: U.default.Messages.USER_PROFILE_ABOUT_ME
  }];
  return (null != l || null != a) && c.push({
    section: A.UserProfileSections.ACTIVITY,
    text: U.default.Messages.USER_PROFILE_ACTIVITY
  }), t.id !== (null == s ? void 0 : s.id) && (c.push({
    section: A.UserProfileSections.MUTUAL_FRIENDS,
    text: (0, i.match)(r).with(void 0, () => U.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => U.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => U.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: e
    }))
  }), c.push({
    section: A.UserProfileSections.MUTUAL_GUILDS,
    text: (0, i.match)(o).with(void 0, () => U.default.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => U.default.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => U.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: e
    }))
  })), c
};

function C(e) {
  let {
    section: t,
    user: s,
    currentUser: a,
    displayProfile: i,
    autoFocusNote: n,
    onClose: r
  } = e;
  return t === A.UserProfileSections.ACTIVITY ? (0, l.jsx)(I.default, {
    user: s,
    type: S.Types.SIMPLIFIED_PROFILE
  }) : t === A.UserProfileSections.MUTUAL_FRIENDS ? (0, l.jsx)(v.default, {
    user: s,
    onClose: r
  }) : t === A.UserProfileSections.MUTUAL_GUILDS ? (0, l.jsx)(_.default, {
    user: s,
    onClose: r
  }) : (0, l.jsx)(g.default, {
    user: s,
    currentUser: a,
    displayProfile: i,
    autoFocusNote: n
  })
}

function h(e) {
  var t, s;
  let {
    user: i,
    displayProfile: u,
    initialSection: d = A.UserProfileSections.USER_INFO,
    autoFocusNote: S,
    onClose: E
  } = e, {
    trackUserProfileAction: I
  } = (0, m.useUserProfileAnalyticsContext)(), v = (0, n.useStateFromStores)([f.default], () => f.default.getCurrentUser()), _ = (0, n.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), g = p({
    user: i,
    currentUser: v
  }), [x, U] = a.useState(S), [h, R] = a.useState(null !== (s = null === (t = g.find(e => {
    let {
      section: t
    } = e;
    return t === d
  })) || void 0 === t ? void 0 : t.section) && void 0 !== s ? s : A.UserProfileSections.USER_INFO), P = a.useCallback(e => {
    I({
      action: "PRESS_SECTION",
      section: e
    }), R(e), U(!1)
  }, [I, R]);
  return null == v ? null : _ ? (0, l.jsx)("div", {
    className: N.container,
    children: (0, l.jsx)(T.default, {})
  }) : (0, l.jsxs)("div", {
    className: N.container,
    children: [(0, l.jsx)(r.TabBar, {
      className: N.tabBar,
      type: "top",
      selectedItem: h,
      onItemSelect: P,
      children: g.map(e => {
        let {
          section: t,
          text: s
        } = e;
        return (0, l.jsx)(r.TabBar.Item, {
          className: N.tabBarItem,
          id: t,
          "aria-label": s,
          children: (0, l.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: s
          })
        }, t)
      })
    }), (0, l.jsx)(C, {
      section: h,
      user: i,
      currentUser: v,
      displayProfile: u,
      autoFocusNote: x,
      onClose: E
    })]
  })
}