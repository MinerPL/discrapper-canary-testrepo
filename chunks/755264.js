n(47120), n(653041);
var i = n(392711),
  s = n.n(i),
  a = n(442837),
  r = n(377108),
  l = n(433517),
  o = n(709054),
  c = n(48481),
  d = n(526761),
  u = n(981631);
let _ = 'selectedChannelGuildFrecency';

function h(e) {
  var t;
  let n;
  (t = n || (n = {})).IMAGE = 'IMAGE', t.VIDEO = 'VIDEO';
  let {
state: i
  } = a.ZP.PersistedStore.migrateAndReadStoreState('GIFFavoritesStore', [
e => null == e ? {
  favorites: [],
  timesFavorited: 0
} : Array.isArray(e) ? {
  favorites: e,
  timesFavorited: 0
} : e,
e => Array.isArray(e.favorites) ? e : {
  favorites: [],
  timesFavorited: 0
}
  ]);
  return null == i || 0 === i.favorites.length ? [] : i.favorites.map((t, n) => {
let s = r.JM.create();
return s.format = 'IMAGE' === t.format ? r.EO.IMAGE : 'VIDEO' === t.format ? r.EO.VIDEO : r.EO.NONE, s.src = t.src, s.width = t.width, s.height = t.height, s.order = i.favorites.length - n + e, {
  url: t.url,
  favorite: s
};
  });
}
let E = [{
version: 2,
run(e) {
  let t = h(1);
  if (0 === t.length)
    return !1;
  for (let {
      url: n,
      favorite: i
    }
    of(null == e.favoriteGifs && (e.favoriteGifs = r.wK.create()), e.favoriteGifs.gifs = {}, t))
    e.favoriteGifs.gifs[n] = i;
  return e.favoriteGifs.hideTooltip = t.length > 2, !0;
},
cleanup() {}
  },
  {
version: 3,
run(e) {
  function t() {
    return {
      usageHistory: {},
      favorites: []
    };
  }
  let {
    state: n
  } = a.ZP.PersistedStore.migrateAndReadStoreState('StickersPersistedStore', [
    e => null == e || 0 === Object.keys(e).length ? t() : e,
    e => null == e || 0 === Object.keys(e).length ? t() : (null == e.favorites && (e.favorites = []), e)
  ]);
  if (null == n)
    return !1;
  let i = !1;
  return n.favorites.length > 0 && (e.favoriteStickers = r.Lt.create(), e.favoriteStickers.stickerIds = s().uniq(n.favorites).slice(0, d.oX), i = !0), s().size(n.usageHistory) > 0 && (e.stickerFrecency = r.ls.create(), e.stickerFrecency.stickers = (0, c.tU)(n.usageHistory, 100), i = !0), i;
},
cleanup() {
  l.K.remove('StickersPersistedStore');
}
  },
  {
version: 4,
run(e) {
  let {
    state: t
  } = a.ZP.PersistedStore.migrateAndReadStoreState('EmojiStore', [() => ({
    usageHistory: l.K.get('EmojiUsageHistory') || {}
  })]);
  if (null == t)
    return !1;
  let n = !1;
  return null != t.favorites && t.favorites.length > 0 && (e.favoriteEmojis = r.ND.create(), e.favoriteEmojis.emojis = s().uniq(t.favorites).slice(0, d.oX), n = !0), s().size(t.usageHistory) > 0 && (e.emojiFrecency = r.PL.create(), e.emojiFrecency.emojis = (0, c.tU)(t.usageHistory, 100), n = !0), n;
},
cleanup() {
  l.K.remove('EmojiStore'), l.K.remove('EmojiUsageHistory'), l.K.remove('EmojiDiversitySurrogate');
}
  },
  {
version: 6,
run(e) {
  null == e.favoriteGifs && (e.favoriteGifs = r.wK.create()), null == e.favoriteGifs.gifs && (e.favoriteGifs.gifs = {});
  let t = h(1);
  if (0 === t.length)
    return !1;
  s()(e.favoriteGifs.gifs).values().sortBy('order').forEach((e, n) => e.order = t.length + 1 + n);
  let n = r.wK.toBinary(e.favoriteGifs).length,
    i = 0;
  for (let {
      url: s,
      favorite: a
    }
    of t) {
    if (a.order = t.length - i, i++, s in e.favoriteGifs.gifs) {
      e.favoriteGifs.gifs[s].order = a.order;
      continue;
    }
    let l = r.JM.toBinary(a).length + s.length + 7;
    !(n + l > d.vY) && (n += l, e.favoriteGifs.gifs[s] = a);
  }
  for (n = r.wK.toBinary(e.favoriteGifs).length; n > d.vY;) {
    let t = 0;
    for (let n in e.favoriteGifs.gifs)
      if (delete e.favoriteGifs.gifs[n], ++t >= 10)
        break;
    n = r.wK.toBinary(e.favoriteGifs).length;
  }
  return !0;
},
cleanup() {}
  },
  {
version: 7,
run(e) {
  let {
    state: t
  } = a.ZP.PersistedStore.migrateAndReadStoreState('ApplicationCommandFrecency', []);
  if (null == t)
    return !1;
  let n = !1;
  return s().size(t.usageHistory) > 0 && (e.applicationCommandFrecency = r.YI.create(), e.applicationCommandFrecency.applicationCommands = (0, c.tU)(t.usageHistory, 500), n = !0), n;
},
cleanup() {
  l.K.remove('ApplicationCommandFrecency');
}
  },
  {
version: 8,
run(e) {
  let {
    state: t
  } = a.ZP.PersistedStore.migrateAndReadStoreState('SoundboardFavoriteStore', []);
  if (null == t)
    return !1;
  let n = !1;
  return s().size(t.favoriteSounds) > 0 && (e.favoriteSoundboardSounds = r.h_.create(), o.default.keys(t.favoriteSounds).forEach(n => {
    new Set(t.favoriteSounds[n]).forEach(t => {
      var n;
      null === (n = e.favoriteSoundboardSounds) || void 0 === n || n.soundIds.push(t);
    });
  }), n = !0), n;
},
cleanup() {
  l.K.remove('SoundboardFavoriteStore');
}
  },
  {
version: 9,
run(e) {
  let t = l.K.get(_);
  if (null == t)
    return !1;
  for (let e in t)
    !u.Xyh.test(e) && delete t[e];
  return e.guildAndChannelFrecency = r.lG.create(), e.guildAndChannelFrecency.guildAndChannels = (0, c.tU)(t, 100), !0;
},
cleanup() {
  l.K.remove(_);
}
  }
];
t.Z = E;