n.d(t, {
  UT: function() {
return x;
  },
  _4: function() {
return m;
  },
  cm: function() {
return N;
  },
  e: function() {
return h;
  },
  eg: function() {
return C;
  },
  lJ: function() {
return S;
  },
  rY: function() {
return g;
  },
  uo: function() {
return p;
  }
}), n(724458), n(653041), n(47120);
var s = n(470079),
  a = n(658722),
  i = n.n(a),
  r = n(442837),
  l = n(271383),
  o = n(594174),
  c = n(626135),
  d = n(823379),
  u = n(892880),
  _ = n(51144),
  I = n(480608),
  E = n(203377),
  T = n(981631);
let m = 50,
  N = 1000;

function S(e, t) {
  let n = (0, r.Wu)([l.ZP], () => {
  let n = l.ZP.getMembers(e);
  return null == t ? n : n.filter(t);
}, [
  e,
  t
]),
a = (0, r.cj)([o.default], () => n.reduce((e, t) => {
  let n = o.default.getUser(t.userId);
  return null == n ? e : (e[t.userId] = n, e);
}, {}), [n]);
  return s.useMemo(() => {
let t = [];
for (let i of n) {
  var s;
  let n = a[i.userId];
  null != n && t.push({
    name: null !== (s = i.nick) && void 0 !== s ? s : _.ZP.getName(n),
    userTag: _.ZP.getUserTag(n),
    id: i.userId,
    avatarSource: n.getAvatarSource(e),
    avatarURL: n.getAvatarURL(e, 80),
    bot: n.bot,
    verifiedBot: n.isVerifiedBot(),
    roles: i.roles,
    key: i.userId,
    user: n
  });
}
return t;
  }, [
n,
a,
e
  ]);
}

function h(e, t, n) {
  return s.useEffect(() => {
(0, I.H)(e, t).catch(n);
  }, [
e,
t
  ]), S(e, s.useCallback(e => e.roles.includes(t), [t]));
}

function g(e, t) {
  let n = s.useRef(!1);
  s.useEffect(() => {
u.Z.requestMembers(e, t, 200), '' !== t && !n.current && (c.default.track(T.rMx.SEARCH_STARTED, {
  search_type: 'Role Members'
}), n.current = !0);
  }, [
e,
t
  ]);
}

function C(e, t) {
  let n = e.trim().toLowerCase();
  return t.id === n || i()(n, t.name.toLowerCase()) || i()(n, t.userTag.toLowerCase());
}

function x(e) {
  switch (e) {
case E.ZI.MEMBERS:
  return 'Members';
case E.ZI.PERMISSIONS:
  return 'Permissions';
case E.ZI.DISPLAY:
  return 'Role Settings';
case E.ZI.VERIFICATIONS:
  return 'Connections';
default:
  (0, d.vE)(e);
  }
}

function p(e, t) {
  return '' === t || e.name.toLowerCase().includes(t.toLowerCase());
}