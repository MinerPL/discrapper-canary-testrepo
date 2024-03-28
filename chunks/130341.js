"use strict";
s.r(t), s.d(t, {
  ADD_MEMBER_QUERY_LIMIT: function() {
    return S
  },
  MAX_PREFETCH_MEMBER_COUNT: function() {
    return f
  },
  filterFullMembersByQuery: function() {
    return h
  },
  filterRole: function() {
    return R
  },
  getSectionAnalyticsName: function() {
    return C
  },
  useGuildMembers: function() {
    return m
  },
  useGuildRoleMembers: function() {
    return N
  },
  useQueryGuildMembers: function() {
    return g
  }
}), s("724458"), s("653041"), s("47120");
var a = s("470079"),
  l = s("658722"),
  n = s.n(l),
  i = s("442837"),
  r = s("271383"),
  o = s("594174"),
  d = s("626135"),
  u = s("823379"),
  c = s("892880"),
  E = s("51144"),
  _ = s("480608"),
  I = s("203377"),
  T = s("981631");
let S = 50,
  f = 1e3;

function m(e, t) {
  let s = (0, i.useStateFromStoresArray)([r.default], () => {
      let s = r.default.getMembers(e);
      return null == t ? s : s.filter(t)
    }, [e, t]),
    l = (0, i.useStateFromStoresObject)([o.default], () => s.reduce((e, t) => {
      let s = o.default.getUser(t.userId);
      return null == s ? e : (e[t.userId] = s, e)
    }, {}), [s]);
  return a.useMemo(() => {
    let t = [];
    for (let n of s) {
      var a;
      let s = l[n.userId];
      null != s && t.push({
        name: null !== (a = n.nick) && void 0 !== a ? a : E.default.getName(s),
        userTag: E.default.getUserTag(s),
        id: n.userId,
        avatarSource: s.getAvatarSource(e),
        avatarURL: s.getAvatarURL(e, 80),
        bot: s.bot,
        verifiedBot: s.isVerifiedBot(),
        roles: n.roles,
        key: n.userId,
        user: s
      })
    }
    return t
  }, [s, l, e])
}

function N(e, t, s) {
  return a.useEffect(() => {
    (0, _.requestMembersForRole)(e, t).catch(s)
  }, [e, t]), m(e, a.useCallback(e => e.roles.includes(t), [t]))
}

function g(e, t) {
  let s = a.useRef(!1);
  a.useEffect(() => {
    c.default.requestMembers(e, t, 200), "" !== t && !s.current && (d.default.track(T.AnalyticEvents.SEARCH_STARTED, {
      search_type: "Role Members"
    }), s.current = !0)
  }, [e, t])
}

function h(e, t) {
  let s = e.trim().toLowerCase();
  return t.id === s || n()(s, t.name.toLowerCase()) || n()(s, t.userTag.toLowerCase())
}

function C(e) {
  switch (e) {
    case I.GuildSettingsRoleEditSections.MEMBERS:
      return "Members";
    case I.GuildSettingsRoleEditSections.PERMISSIONS:
      return "Permissions";
    case I.GuildSettingsRoleEditSections.DISPLAY:
      return "Role Settings";
    case I.GuildSettingsRoleEditSections.VERIFICATIONS:
      return "Connections";
    default:
      (0, u.assertNever)(e)
  }
}

function R(e, t) {
  return "" === t || e.name.toLowerCase().includes(t.toLowerCase())
}