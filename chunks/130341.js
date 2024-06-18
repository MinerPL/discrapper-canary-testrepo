"use strict";
t.d(s, {
  UT: function() {
    return C
  },
  _4: function() {
    return N
  },
  cm: function() {
    return m
  },
  e: function() {
    return h
  },
  eg: function() {
    return x
  },
  lJ: function() {
    return S
  },
  rY: function() {
    return g
  },
  uo: function() {
    return R
  }
}), t(724458), t(653041), t(47120);
var n = t(470079),
  i = t(658722),
  l = t.n(i),
  a = t(442837),
  r = t(271383),
  o = t(594174),
  c = t(626135),
  d = t(823379),
  u = t(892880),
  E = t(51144),
  _ = t(480608),
  I = t(203377),
  T = t(981631);
let N = 50,
  m = 1e3;

function S(e, s) {
  let t = (0, a.Wu)([r.ZP], () => {
      let t = r.ZP.getMembers(e);
      return null == s ? t : t.filter(s)
    }, [e, s]),
    i = (0, a.cj)([o.default], () => t.reduce((e, s) => {
      let t = o.default.getUser(s.userId);
      return null == t ? e : (e[s.userId] = t, e)
    }, {}), [t]);
  return n.useMemo(() => {
    let s = [];
    for (let l of t) {
      var n;
      let t = i[l.userId];
      null != t && s.push({
        name: null !== (n = l.nick) && void 0 !== n ? n : E.ZP.getName(t),
        userTag: E.ZP.getUserTag(t),
        id: l.userId,
        avatarSource: t.getAvatarSource(e),
        avatarURL: t.getAvatarURL(e, 80),
        bot: t.bot,
        verifiedBot: t.isVerifiedBot(),
        roles: l.roles,
        key: l.userId,
        user: t
      })
    }
    return s
  }, [t, i, e])
}

function h(e, s, t) {
  return n.useEffect(() => {
    (0, _.H)(e, s).catch(t)
  }, [e, s]), S(e, n.useCallback(e => e.roles.includes(s), [s]))
}

function g(e, s) {
  let t = n.useRef(!1);
  n.useEffect(() => {
    u.Z.requestMembers(e, s, 200), "" !== s && !t.current && (c.default.track(T.rMx.SEARCH_STARTED, {
      search_type: "Role Members"
    }), t.current = !0)
  }, [e, s])
}

function x(e, s) {
  let t = e.trim().toLowerCase();
  return s.id === t || l()(t, s.name.toLowerCase()) || l()(t, s.userTag.toLowerCase())
}

function C(e) {
  switch (e) {
    case I.ZI.MEMBERS:
      return "Members";
    case I.ZI.PERMISSIONS:
      return "Permissions";
    case I.ZI.DISPLAY:
      return "Role Settings";
    case I.ZI.VERIFICATIONS:
      return "Connections";
    default:
      (0, d.vE)(e)
  }
}

function R(e, s) {
  return "" === s || e.name.toLowerCase().includes(s.toLowerCase())
}