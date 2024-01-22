"use strict";
n.r(t), n.d(t, {
  fetchStickerPack: function() {
    return _
  },
  fetchStickerPacks: function() {
    return T
  },
  fetchSticker: function() {
    return m
  },
  fetchGuildStickers: function() {
    return S
  },
  deleteGuildSticker: function() {
    return A
  },
  createGuildSticker: function() {
    return g
  },
  updateGuildSticker: function() {
    return R
  },
  addStickerPreview: function() {
    return N
  },
  clearStickerPreview: function() {
    return x
  },
  favoriteSticker: function() {
    return P
  },
  unfavoriteSticker: function() {
    return y
  }
}), n("424973");
var i = n("917351"),
  s = n.n(i),
  r = n("872717"),
  l = n("913144"),
  a = n("404118"),
  u = n("619443"),
  o = n("915639"),
  c = n("872173"),
  d = n("766274"),
  f = n("341542"),
  h = n("697218"),
  p = n("271560"),
  I = n("364685"),
  v = n("49111"),
  E = n("397336"),
  C = n("782340");
let _ = async (e, t) => {
  let {
    body: n
  } = await (0, p.httpGetWithCountryCodeQuery)(v.Endpoints.STICKER_PACK(e));
  return l.default.dispatch({
    type: "STICKER_PACK_FETCH_SUCCESS",
    packId: e,
    pack: n,
    ingestStickers: t
  }), n
}, T = async function() {
  let {
    locale: e = o.default.locale
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (I.default.isFetchingStickerPacks || I.default.hasLoadedStickerPacks) return;
  l.default.wait(() => {
    l.default.dispatch({
      type: "STICKER_PACKS_FETCH_START"
    })
  });
  let {
    body: {
      sticker_packs: t
    }
  } = await r.default.get({
    url: v.Endpoints.STICKER_PACKS,
    query: {
      locale: e
    }
  });
  l.default.dispatch({
    type: "STICKER_PACKS_FETCH_SUCCESS",
    packs: t
  })
}, m = async e => {
  let {
    body: t
  } = await r.default.get({
    url: v.Endpoints.STICKER(e)
  });
  l.default.dispatch({
    type: "STICKER_FETCH_SUCCESS",
    sticker: t
  })
}, S = async e => {
  let {
    body: t
  } = await r.default.get({
    url: v.Endpoints.GUILD_STICKER_PACKS(e)
  });
  l.default.dispatch({
    type: "GUILD_STICKERS_FETCH_SUCCESS",
    guildId: e,
    stickers: t.map(e => null != e.user ? {
      ...e,
      user: new d.default(e.user)
    } : e)
  })
}, A = async e => {
  await r.default.delete({
    url: v.Endpoints.GUILD_STICKER(e.guild_id, e.id)
  })
}, g = async (e, t) => {
  let n = await r.default.post({
    url: v.Endpoints.GUILD_STICKER_PACKS(e),
    body: t
  });
  return l.default.dispatch({
    type: "GUILD_STICKERS_CREATE_SUCCESS",
    guildId: e,
    sticker: {
      ...n.body,
      user: h.default.getCurrentUser()
    }
  }), n.body
}, R = async (e, t, n) => {
  let i = await r.default.patch({
    url: v.Endpoints.GUILD_STICKER(e, t),
    body: n
  });
  return i.body
};

function N(e, t, n) {
  l.default.dispatch({
    type: "ADD_STICKER_PREVIEW",
    channelId: e,
    sticker: t,
    draftType: n
  })
}

function x(e, t) {
  l.default.dispatch({
    type: "CLEAR_STICKER_PREVIEW",
    channelId: e,
    draftType: t
  })
}

function L(e) {
  return f.default.totalUnavailableGuilds > 0 || !u.default.isConnected() ? e : e.filter(e => null != I.default.getStickerById(e))
}

function P(e) {
  c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = L(t.stickerIds), s.size(t.stickerIds) >= E.MAX_FAVORITES) ? (a.default.show({
    title: C.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
    body: C.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
      count: E.MAX_FAVORITES
    })
  }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), E.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function y(e) {
  c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = L(t.stickerIds)
  }, E.UserSettingsDelay.INFREQUENT_USER_ACTION)
}