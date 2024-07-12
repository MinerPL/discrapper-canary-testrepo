n.d(t, {
  FS: function() {
return A;
  },
  ZP: function() {
return S;
  }
}), n(47120), n(653041);
var r = n(470079),
  i = n(442837),
  a = n(889161),
  o = n(675478),
  s = n(430824),
  l = n(496675),
  u = n(594174),
  c = n(74538),
  d = n(709054),
  _ = n(164878),
  E = n(178106),
  f = n(763296),
  h = n(697426),
  p = n(549771),
  m = n(710111);

function I(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
n = e.map(e => ({
  type: h.vB.SOUND,
  sound: e
}));
  return t ? n.sort((e, t) => d.default.compare(e.sound.soundId, t.sound.soundId)) : n;
}

function T(e) {
  let {
sections: t,
guildIds: n,
allSounds: r,
potentialSoundIdsForSection: i,
sectionType: a,
sortById: o
  } = e, s = {};
  for (let e of [
  ...n,
  m.X8
]) {
var l;
for (let t of null !== (l = r.get(e)) && void 0 !== l ? l : [])
  null != i.find(e => e === t.soundId) && (s[t.soundId] = t);
  }
  let u = [];
  for (let e of i) {
let t = s[e];
null != t && u.push(t);
  }
  let c = I(u, o);
  c.length > 0 && t.push({
key: a,
categoryInfo: {
  type: a
},
items: c
  });
}

function g(e, t) {
  var n;
  let r = null !== (n = t.get(m.X8)) && void 0 !== n ? n : m.Hy;
  e.push({
key: h.bg.DEFAULTS,
categoryInfo: {
  type: h.bg.DEFAULTS
},
items: I(r)
  });
}

function S(e) {
  let {
filterOutEmptyCurrentGuild: t = !1
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], d = (0, i.e7)([u.default], () => u.default.getCurrentUser()), [m, S, A] = (0, i.Wu)([f.Z], () => [
f.Z.getSounds(),
f.Z.getFavorites(),
f.Z.isFetching()
  ]), N = (0, p.h)(e, !1), v = (0, i.Wu)([s.Z], () => {
let e = [];
return N.forEach(t => {
  let n = s.Z.getGuild(t);
  null != n && e.push(n);
}), e;
  }), O = c.ZP.canUseSoundboardEverywhere(d), R = (0, i.e7)([s.Z], () => s.Z.getGuild(null == e ? void 0 : e.guild_id)), C = (0, i.e7)([l.Z], () => {
let {
  canCreateExpressions: e
} = (0, a.Gw)(R);
return e;
  }, [R]), {
canSeeRecentlyHeard: y,
canSeeFrequentlyPlayed: D
  } = (0, _.k)({
location: 'soundboard-useSoundGrid',
autoTrackExposure: !0
  }), L = function() {
return r.useEffect(() => {
  o.DZ.loadIfNecessary();
}, []), (0, i.e7)([E.Z], () => E.Z.frecentlyPlayedSounds);
  }(), b = (0, i.Wu)([E.Z], () => E.Z.recentlyHeardSoundIds);
  return r.useMemo(() => {
let e = [];
return n ? (g(e, m), {
  categories: e,
  isFetching: A
}) : (T({
  sections: e,
  guildIds: N,
  allSounds: m,
  potentialSoundIdsForSection: Array.from(S),
  sectionType: h.bg.FAVORITES,
  sortById: !0
}), y && T({
  sections: e,
  guildIds: N,
  allSounds: m,
  potentialSoundIdsForSection: b,
  sectionType: h.bg.RECENTLY_HEARD,
  sortById: !1
}), D && T({
  sections: e,
  guildIds: N,
  allSounds: m,
  potentialSoundIdsForSection: L.map(e => e.soundId),
  sectionType: h.bg.FREQUENTLY_USED,
  sortById: !1
}), ! function(e, t, n, r, i) {
  var a;
  if (null == t)
    return;
  let o = null !== (a = r.get(t.id)) && void 0 !== a ? a : [],
    s = I(o),
    l = o.length < t.getMaxSoundboardSlots() && n,
    u = 0 === s.length;
  (l || u) && !i && s.push({
    type: h.vB.ADD_SOUND,
    guild: t
  });
  !(i && u) && e.push({
    categoryInfo: {
      type: h.bg.GUILD,
      guild: t
    },
    key: t.id,
    items: s
  });
}(e, R, C, m, t), !O && g(e, m), ! function(e, t, n, r) {
  for (let a of t) {
    var i;
    if (a.id === n)
      continue;
    let t = I(null !== (i = r.get(a.id)) && void 0 !== i ? i : []);
    t.length > 0 && e.push({
      categoryInfo: {
        type: h.bg.GUILD,
        guild: a
      },
      key: a.id,
      items: t
    });
  }
}(e, v, null == R ? void 0 : R.id, m), O && g(e, m), {
  categories: e,
  isFetching: A
});
  }, [
N,
m,
S,
b,
L,
D,
y,
R,
C,
t,
O,
v,
n,
A
  ]);
}

function A(e, t, n) {
  return r.useMemo(() => n.length > 0 ? [{
key: h.bg.SEARCH,
categoryInfo: {
  type: h.bg.SEARCH
},
items: I(t, !1)
  }] : e, [
e,
n.length,
t
  ]);
}