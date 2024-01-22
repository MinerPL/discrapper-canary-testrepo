"use strict";
n.r(t), n.d(t, {
  addFavoriteChannel: function() {
    return f
  },
  removeFavoriteChannel: function() {
    return C
  },
  setFavoriteChannelNickname: function() {
    return v
  },
  addFavoriteCategory: function() {
    return h
  },
  removeFavoriteCategory: function() {
    return p
  },
  updateFavoriteChannels: function() {
    return E
  },
  updateFavoriteChannelParent: function() {
    return A
  },
  toggleFavoriteServerMuted: function() {
    return g
  }
}), n("222007");
var a = n("249654"),
  r = n("151426"),
  i = n("872173"),
  o = n("42203"),
  s = n("957255"),
  l = n("379881"),
  u = n("843455");

function d() {
  let e = l.default.getFavoriteChannels(),
    t = 1;
  for (let n in e) t = Math.max(t, e[n].order);
  return t + 1
}

function c(e) {
  for (let t in e) {
    let n = e[t];
    if (null == n) {
      delete e[t];
      continue
    }
    if (n.type === r.FavoriteChannelType.CATEGORY) continue;
    let a = o.default.getChannel(t);
    if (null == a || !a.isPrivate() && !s.default.can(u.Permissions.VIEW_CHANNEL, a)) {
      delete e[t];
      continue
    }
  }
}

function f(e, t) {
  let n = l.default.isFavorite(e);
  !n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e] = r.FavoriteChannel.create({
      nickname: "",
      type: r.FavoriteChannelType.REFERENCE_ORIGINAL,
      position: d(),
      parentId: null != t ? t : "0"
    }), c(n.favoriteChannels)
  }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function C(e) {
  let t = l.default.getFavorite(e);
  null != t && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    if (delete n.favoriteChannels[e], t.type === r.FavoriteChannelType.CATEGORY)
      for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
    c(n.favoriteChannels)
  }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function v(e, t) {
  let n = l.default.isFavorite(e);
  n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e].nickname = null != t ? t : ""
  }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function h(e) {
  let t = a.default.fromTimestamp(Date.now());
  i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[t] = r.FavoriteChannel.create({
      nickname: e,
      type: r.FavoriteChannelType.CATEGORY,
      position: d(),
      parentId: "0"
    })
  }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function p(e) {
  C(e)
}

function E(e) {
  i.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
    for (let a of e)
      if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
        var n;
        t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
      }
  }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function A(e, t) {
  i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e].parentId = null != t ? t : "0"
  }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function g() {
  i.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
    e.muted = !e.muted
  }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
}