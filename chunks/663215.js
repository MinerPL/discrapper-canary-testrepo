n.d(t, {
  FS: function() {
return N;
  },
  ZP: function() {
return A;
  }
}), n(47120), n(653041);
var r = n(470079),
  i = n(442837),
  a = n(889161),
  s = n(675478),
  o = n(430824),
  l = n(496675),
  u = n(594174),
  c = n(74538),
  d = n(709054),
  _ = n(164878),
  E = n(178106),
  f = n(763296),
  h = n(697426),
  p = n(549771),
  m = n(710111),
  I = n(474936);

function T(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
n = e.map(e => ({
  type: h.vB.SOUND,
  sound: e
}));
  return t ? n.sort((e, t) => d.default.compare(e.sound.soundId, t.sound.soundId)) : n;
}

function g(e) {
  let {
sections: t,
guildIds: n,
allSounds: r,
potentialSoundIdsForSection: i,
sectionType: a,
sortById: s
  } = e, o = {};
  for (let e of [
  ...n,
  m.X8
]) {
var l;
for (let t of null !== (l = r.get(e)) && void 0 !== l ? l : [])
  null != i.find(e => e === t.soundId) && (o[t.soundId] = t);
  }
  let u = [];
  for (let e of i) {
let t = o[e];
null != t && u.push(t);
  }
  let c = T(u, s);
  c.length > 0 && t.push({
key: a,
categoryInfo: {
  type: a
},
items: c
  });
}

function S(e, t) {
  var n;
  let r = null !== (n = t.get(m.X8)) && void 0 !== n ? n : m.Hy;
  e.push({
key: h.bg.DEFAULTS,
categoryInfo: {
  type: h.bg.DEFAULTS
},
items: T(r)
  });
}

function A(e) {
  let {
filterOutEmptyCurrentGuild: t = !1
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], d = (0, i.e7)([u.default], () => u.default.getCurrentUser()), m = c.ZP.isPremium(d, I.p9.TIER_2), [A, N, v] = (0, i.Wu)([f.Z], () => [
f.Z.getSounds(),
f.Z.getFavorites(),
f.Z.isFetching()
  ]), O = (0, p.h)(e, !1), R = (0, i.Wu)([o.Z], () => {
let e = [];
return O.forEach(t => {
  let n = o.Z.getGuild(t);
  null != n && e.push(n);
}), e;
  }), C = c.ZP.canUseSoundboardEverywhere(d), y = (0, i.e7)([o.Z], () => o.Z.getGuild(null == e ? void 0 : e.guild_id)), D = (0, i.e7)([l.Z], () => {
let {
  canCreateExpressions: e
} = (0, a.Gw)(y);
return e;
  }, [y]), {
canSeeRecentlyHeard: L,
canSeeFrequentlyPlayed: b
  } = (0, _.k)({
location: 'soundboard-useSoundGrid',
autoTrackExposure: !0
  }), M = function() {
return r.useEffect(() => {
  s.DZ.loadIfNecessary();
}, []), (0, i.e7)([E.Z], () => E.Z.frecentlyPlayedSounds);
  }(), P = (0, i.Wu)([E.Z], () => E.Z.recentlyHeardSoundIds);
  return r.useMemo(() => {
let e = [];
return n ? (S(e, A), {
  categories: e,
  isFetching: v
}) : (g({
  sections: e,
  guildIds: O,
  allSounds: A,
  potentialSoundIdsForSection: Array.from(N),
  sectionType: h.bg.FAVORITES,
  sortById: !0
}), L && g({
  sections: e,
  guildIds: O,
  allSounds: A,
  potentialSoundIdsForSection: P,
  sectionType: h.bg.RECENTLY_HEARD,
  sortById: !1
}), b && g({
  sections: e,
  guildIds: O,
  allSounds: A,
  potentialSoundIdsForSection: M.map(e => e.soundId),
  sectionType: h.bg.FREQUENTLY_USED,
  sortById: !1
}), ! function(e, t, n, r, i) {
  var a;
  if (null == t)
    return;
  let s = null !== (a = r.get(t.id)) && void 0 !== a ? a : [],
    o = T(s),
    l = s.length < t.getMaxSoundboardSlots() && n,
    u = 0 === o.length;
  (l || u) && !i && o.push({
    type: h.vB.ADD_SOUND,
    guild: t
  });
  !(i && u) && e.push({
    categoryInfo: {
      type: h.bg.GUILD,
      guild: t,
      isNitroLocked: !1
    },
    key: t.id,
    items: o
  });
}(e, y, D, A, t), !C && S(e, A), ! function(e, t, n, r, i) {
  for (let s of t) {
    var a;
    if (s.id === n)
      continue;
    let t = T(null !== (a = r.get(s.id)) && void 0 !== a ? a : []);
    t.length > 0 && e.push({
      categoryInfo: {
        type: h.bg.GUILD,
        guild: s,
        isNitroLocked: !i
      },
      key: s.id,
      items: t
    });
  }
}(e, R, null == y ? void 0 : y.id, A, m), C && S(e, A), {
  categories: e,
  isFetching: v
});
  }, [
O,
A,
N,
P,
M,
b,
L,
y,
D,
t,
C,
R,
n,
v,
m
  ]);
}

function N(e, t, n) {
  return r.useMemo(() => n.length > 0 ? [{
key: h.bg.SEARCH,
categoryInfo: {
  type: h.bg.SEARCH
},
items: T(t, !1)
  }] : e, [
e,
n.length,
t
  ]);
}