"use strict";
s.r(t), s.d(t, {
  ADD_MEMBER_QUERY_LIMIT: function() {
    return S
  },
  MAX_PREFETCH_MEMBER_COUNT: function() {
    return f
  },
  useGuildMembers: function() {
    return m
  },
  useGuildRoleMembers: function() {
    return N
  },
  useQueryGuildMembers: function() {
    return g
  },
  filterFullMembersByQuery: function() {
    return h
  },
  getSectionAnalyticsName: function() {
    return C
  },
  filterRole: function() {
    return R
  }
}), s("808653"), s("424973"), s("222007");
var a = s("884691"),
  l = s("448105"),
  n = s.n(l),
  i = s("446674"),
  r = s("26989"),
  o = s("697218"),
  d = s("599110"),
  u = s("449008"),
  c = s("651879"),
  E = s("158998"),
  _ = s("895026"),
  I = s("53948"),
  T = s("49111");
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
  a.useEffect(() => {
    (0, _.requestMembersForRole)(e, t).catch(s)
  }, [e, t]);
  let l = a.useCallback(e => e.roles.includes(t), [t]);
  return m(e, l)
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
  return t.id === s || n(s, t.name.toLowerCase()) || n(s, t.userTag.toLowerCase())
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