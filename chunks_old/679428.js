"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var a = n("872717"),
  l = n("689988"),
  i = n("870691"),
  u = n("42203"),
  r = n("718517"),
  s = n("49111");
let d = {},
  o = 0,
  f = 15 * r.default.Millis.SECOND;

function c() {
  d = {
    ...i.default.getCollapsedCategories()
  }
}

function _() {
  !__OVERLAY__ && (clearTimeout(o), o = setTimeout(() => T({}), f))
}
async function E(e, t) {
  null == e || e === s.ME ? await a.HTTP.patch({
    url: s.Endpoints.USER_GUILD_SETTINGS(s.ME),
    body: t
  }) : await T(null != t ? {
    [null != e ? e : s.ME]: t
  } : {})
}
async function T(e) {
  clearTimeout(o);
  let t = 0 !== Object.keys(e).length,
    n = i.default.getCollapsedCategories(),
    l = function() {
      let e = {},
        t = i.default.getCollapsedCategories();
      for (let n in t) t[n] !== d[n] && (e[n] = !0);
      for (let n in d) t[n] !== d[n] && (e[n] = !0);
      return e
    }();
  for (let a in l) {
    let l = u.default.getChannel(a);
    null != l && null != l.guild_id && (!(l.guild_id in e) && (e[l.guild_id] = {}), null == e[l.guild_id].channel_overrides && (e[l.guild_id].channel_overrides = {}), e[l.guild_id].channel_overrides[l.id] = {
      ...e[l.guild_id].channel_overrides[l.id],
      collapsed: l.id in n
    }, t = !0)
  }
  return t ? (d = {
    ...n
  }, delete e[s.FAVORITES], (await a.HTTP.patch({
    url: s.Endpoints.USER_GUILD_SETTINGS_BULK,
    body: {
      guilds: e
    }
  })).body) : []
}

function S() {
  d = {
    ...i.default.getCollapsedCategories()
  }
}
class h extends l.default {
  constructor(...e) {
    super(...e), this.actions = {
      CATEGORY_COLLAPSE: _,
      CATEGORY_EXPAND: _,
      CATEGORY_COLLAPSE_ALL: _,
      CATEGORY_EXPAND_ALL: _,
      POST_CONNECTION_OPEN: c,
      USER_GUILD_SETTINGS_FULL_UPDATE: S
    }, this.saveUserGuildSettings = E, this.saveUserGuildSettingsBulk = T
  }
}
var C = new h