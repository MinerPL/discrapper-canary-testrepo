"use strict";
n.d(t, {
  FS: function() {
    return O
  },
  ZP: function() {
    return m
  }
}), n(47120), n(653041);
var i = n(470079),
  r = n(442837),
  s = n(889161),
  o = n(675478),
  a = n(430824),
  l = n(496675),
  u = n(594174),
  _ = n(74538),
  d = n(709054),
  c = n(164878),
  E = n(178106),
  I = n(763296),
  T = n(697426),
  h = n(549771),
  S = n(710111);

function f(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = e.map(e => ({
      type: T.vB.SOUND,
      sound: e
    }));
  return t ? n.sort((e, t) => d.default.compare(e.sound.soundId, t.sound.soundId)) : n
}

function N(e) {
  let {
    sections: t,
    guildIds: n,
    allSounds: i,
    potentialSoundIdsForSection: r,
    sectionType: s,
    sortById: o
  } = e, a = {};
  for (let e of [...n, S.X8]) {
    var l;
    for (let t of null !== (l = i.get(e)) && void 0 !== l ? l : []) null != r.find(e => e === t.soundId) && (a[t.soundId] = t)
  }
  let u = [];
  for (let e of r) {
    let t = a[e];
    null != t && u.push(t)
  }
  let _ = f(u, o);
  _.length > 0 && t.push({
    key: s,
    categoryInfo: {
      type: s
    },
    items: _
  })
}

function A(e, t) {
  var n;
  let i = null !== (n = t.get(S.X8)) && void 0 !== n ? n : S.Hy;
  e.push({
    key: T.bg.DEFAULTS,
    categoryInfo: {
      type: T.bg.DEFAULTS
    },
    items: f(i)
  })
}

function m(e) {
  let {
    filterOutEmptyCurrentGuild: t = !1
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], d = (0, r.e7)([u.default], () => u.default.getCurrentUser()), [S, m, O] = (0, r.Wu)([I.Z], () => [I.Z.getSounds(), I.Z.getFavorites(), I.Z.isFetching()]), R = (0, h.h)(e, !1), C = (0, r.Wu)([a.Z], () => {
    let e = [];
    return R.forEach(t => {
      let n = a.Z.getGuild(t);
      null != n && e.push(n)
    }), e
  }), p = _.ZP.canUseSoundboardEverywhere(d), g = (0, r.e7)([a.Z], () => a.Z.getGuild(null == e ? void 0 : e.guild_id)), L = (0, r.e7)([l.Z], () => {
    let {
      canCreateExpressions: e
    } = (0, s.Gw)(g);
    return e
  }, [g]), {
    canSeeRecentlyHeard: v,
    canSeeFrequentlyPlayed: D
  } = (0, c.k)({
    location: "soundboard-useSoundGrid",
    autoTrackExposure: !0
  }), M = function() {
    return i.useEffect(() => {
      o.DZ.loadIfNecessary()
    }, []), (0, r.e7)([E.Z], () => E.Z.frecentlyPlayedSounds)
  }(), P = (0, r.Wu)([E.Z], () => E.Z.recentlyHeardSoundIds);
  return i.useMemo(() => {
    let e = [];
    return n ? (A(e, S), {
      categories: e,
      isFetching: O
    }) : (N({
      sections: e,
      guildIds: R,
      allSounds: S,
      potentialSoundIdsForSection: Array.from(m),
      sectionType: T.bg.FAVORITES,
      sortById: !0
    }), v && N({
      sections: e,
      guildIds: R,
      allSounds: S,
      potentialSoundIdsForSection: P,
      sectionType: T.bg.RECENTLY_HEARD,
      sortById: !1
    }), D && N({
      sections: e,
      guildIds: R,
      allSounds: S,
      potentialSoundIdsForSection: M.map(e => e.soundId),
      sectionType: T.bg.FREQUENTLY_USED,
      sortById: !1
    }), ! function(e, t, n, i, r) {
      var s;
      if (null == t) return;
      let o = null !== (s = i.get(t.id)) && void 0 !== s ? s : [],
        a = f(o),
        l = o.length < t.getMaxSoundboardSlots() && n,
        u = 0 === a.length;
      (l || u) && !r && a.push({
        type: T.vB.ADD_SOUND,
        guild: t
      });
      !(r && u) && e.push({
        categoryInfo: {
          type: T.bg.GUILD,
          guild: t
        },
        key: t.id,
        items: a
      })
    }(e, g, L, S, t), !p && A(e, S), ! function(e, t, n, i) {
      for (let s of t) {
        var r;
        if (s.id === n) continue;
        let t = f(null !== (r = i.get(s.id)) && void 0 !== r ? r : []);
        t.length > 0 && e.push({
          categoryInfo: {
            type: T.bg.GUILD,
            guild: s
          },
          key: s.id,
          items: t
        })
      }
    }(e, C, null == g ? void 0 : g.id, S), p && A(e, S), {
      categories: e,
      isFetching: O
    })
  }, [R, S, m, P, M, D, v, g, L, t, p, C, n, O])
}

function O(e, t, n) {
  return i.useMemo(() => n.length > 0 ? [{
    key: T.bg.SEARCH,
    categoryInfo: {
      type: T.bg.SEARCH
    },
    items: f(t, !1)
  }] : e, [e, n.length, t])
}