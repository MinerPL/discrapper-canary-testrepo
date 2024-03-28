"use strict";
n.r(t), n("47120"), n("653041");
var a = n("392711"),
  s = n.n(a),
  l = n("442837"),
  i = n("377108"),
  r = n("433517"),
  o = n("709054"),
  u = n("48481"),
  d = n("526761"),
  c = n("981631");
let f = "selectedChannelGuildFrecency";

function E(e) {
  var t;
  let n;
  (t = n || (n = {})).IMAGE = "IMAGE", t.VIDEO = "VIDEO";
  let {
    state: a
  } = l.default.PersistedStore.migrateAndReadStoreState("GIFFavoritesStore", [e => null == e ? {
    favorites: [],
    timesFavorited: 0
  } : Array.isArray(e) ? {
    favorites: e,
    timesFavorited: 0
  } : e, e => Array.isArray(e.favorites) ? e : {
    favorites: [],
    timesFavorited: 0
  }]);
  return null == a || 0 === a.favorites.length ? [] : a.favorites.map((t, n) => {
    let s = i.FavoriteGIF.create();
    return s.format = "IMAGE" === t.format ? i.GIFType.IMAGE : "VIDEO" === t.format ? i.GIFType.VIDEO : i.GIFType.NONE, s.src = t.src, s.width = t.width, s.height = t.height, s.order = a.favorites.length - n + e, {
      url: t.url,
      favorite: s
    }
  })
}
let h = [{
  version: 2,
  run(e) {
    let t = E(1);
    if (0 === t.length) return !1;
    for (let {
        url: n,
        favorite: a
      }
      of(null == e.favoriteGifs && (e.favoriteGifs = i.FavoriteGIFs.create()), e.favoriteGifs.gifs = {}, t)) e.favoriteGifs.gifs[n] = a;
    return e.favoriteGifs.hideTooltip = t.length > 2, !0
  },
  cleanup() {}
}, {
  version: 3,
  run(e) {
    function t() {
      return {
        usageHistory: {},
        favorites: []
      }
    }
    let {
      state: n
    } = l.default.PersistedStore.migrateAndReadStoreState("StickersPersistedStore", [e => null == e || 0 === Object.keys(e).length ? t() : e, e => null == e || 0 === Object.keys(e).length ? t() : (null == e.favorites && (e.favorites = []), e)]);
    if (null == n) return !1;
    let a = !1;
    return n.favorites.length > 0 && (e.favoriteStickers = i.FavoriteStickers.create(), e.favoriteStickers.stickerIds = s().uniq(n.favorites).slice(0, d.MAX_FAVORITES), a = !0), s().size(n.usageHistory) > 0 && (e.stickerFrecency = i.StickerFrecency.create(), e.stickerFrecency.stickers = (0, u.serializeUsageHistory)(n.usageHistory, 100), a = !0), a
  },
  cleanup() {
    r.Storage.remove("StickersPersistedStore")
  }
}, {
  version: 4,
  run(e) {
    let {
      state: t
    } = l.default.PersistedStore.migrateAndReadStoreState("EmojiStore", [() => ({
      usageHistory: r.Storage.get("EmojiUsageHistory") || {}
    })]);
    if (null == t) return !1;
    let n = !1;
    return null != t.favorites && t.favorites.length > 0 && (e.favoriteEmojis = i.FavoriteEmojis.create(), e.favoriteEmojis.emojis = s().uniq(t.favorites).slice(0, d.MAX_FAVORITES), n = !0), s().size(t.usageHistory) > 0 && (e.emojiFrecency = i.EmojiFrecency.create(), e.emojiFrecency.emojis = (0, u.serializeUsageHistory)(t.usageHistory, 100), n = !0), n
  },
  cleanup() {
    r.Storage.remove("EmojiStore"), r.Storage.remove("EmojiUsageHistory"), r.Storage.remove("EmojiDiversitySurrogate")
  }
}, {
  version: 6,
  run(e) {
    null == e.favoriteGifs && (e.favoriteGifs = i.FavoriteGIFs.create()), null == e.favoriteGifs.gifs && (e.favoriteGifs.gifs = {});
    let t = E(1);
    if (0 === t.length) return !1;
    s()(e.favoriteGifs.gifs).values().sortBy("order").forEach((e, n) => e.order = t.length + 1 + n);
    let n = i.FavoriteGIFs.toBinary(e.favoriteGifs).length,
      a = 0;
    for (let {
        url: s,
        favorite: l
      }
      of t) {
      if (l.order = t.length - a, a++, s in e.favoriteGifs.gifs) {
        e.favoriteGifs.gifs[s].order = l.order;
        continue
      }
      let r = i.FavoriteGIF.toBinary(l).length + s.length + 7;
      !(n + r > d.MAX_FAVORITE_GIFS_SIZE) && (n += r, e.favoriteGifs.gifs[s] = l)
    }
    for (n = i.FavoriteGIFs.toBinary(e.favoriteGifs).length; n > d.MAX_FAVORITE_GIFS_SIZE;) {
      let t = 0;
      for (let n in e.favoriteGifs.gifs)
        if (delete e.favoriteGifs.gifs[n], ++t >= 10) break;
      n = i.FavoriteGIFs.toBinary(e.favoriteGifs).length
    }
    return !0
  },
  cleanup() {}
}, {
  version: 7,
  run(e) {
    let {
      state: t
    } = l.default.PersistedStore.migrateAndReadStoreState("ApplicationCommandFrecency", []);
    if (null == t) return !1;
    let n = !1;
    return s().size(t.usageHistory) > 0 && (e.applicationCommandFrecency = i.ApplicationCommandFrecency.create(), e.applicationCommandFrecency.applicationCommands = (0, u.serializeUsageHistory)(t.usageHistory, 500), n = !0), n
  },
  cleanup() {
    r.Storage.remove("ApplicationCommandFrecency")
  }
}, {
  version: 8,
  run(e) {
    let {
      state: t
    } = l.default.PersistedStore.migrateAndReadStoreState("SoundboardFavoriteStore", []);
    if (null == t) return !1;
    let n = !1;
    return s().size(t.favoriteSounds) > 0 && (e.favoriteSoundboardSounds = i.FavoriteSoundboardSounds.create(), o.default.keys(t.favoriteSounds).forEach(n => {
      new Set(t.favoriteSounds[n]).forEach(t => {
        var n;
        null === (n = e.favoriteSoundboardSounds) || void 0 === n || n.soundIds.push(t)
      })
    }), n = !0), n
  },
  cleanup() {
    r.Storage.remove("SoundboardFavoriteStore")
  }
}, {
  version: 9,
  run(e) {
    let t = r.Storage.get(f);
    if (null == t) return !1;
    for (let e in t) !c.ID_REGEX.test(e) && delete t[e];
    return e.guildAndChannelFrecency = i.GuildAndChannelFrecency.create(), e.guildAndChannelFrecency.guildAndChannels = (0, u.serializeUsageHistory)(t, 100), !0
  },
  cleanup() {
    r.Storage.remove(f)
  }
}];
t.default = h