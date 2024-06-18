"use strict";
n(47120);
var i = n(544891),
  r = n(147913),
  s = n(680089),
  o = n(592125),
  a = n(70956),
  l = n(981631);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = {},
  d = 0,
  c = 15 * a.Z.Millis.SECOND;

function E() {
  _ = {
    ...s.Z.getCollapsedCategories()
  }
}

function I() {
  !__OVERLAY__ && (clearTimeout(d), d = setTimeout(() => h({}), c))
}
async function T(e, t) {
  null == e || e === l.ME ? await i.tn.patch({
    url: l.ANM.USER_GUILD_SETTINGS(l.ME),
    body: t
  }) : await h(null != t ? {
    [null != e ? e : l.ME]: t
  } : {})
}
async function h(e) {
  clearTimeout(d);
  let t = 0 !== Object.keys(e).length,
    n = s.Z.getCollapsedCategories(),
    r = function() {
      let e = {},
        t = s.Z.getCollapsedCategories();
      for (let n in t) t[n] !== _[n] && (e[n] = !0);
      for (let n in _) t[n] !== _[n] && (e[n] = !0);
      return e
    }();
  for (let i in r) {
    let r = o.Z.getChannel(i);
    null != r && null != r.guild_id && (!(r.guild_id in e) && (e[r.guild_id] = {}), null == e[r.guild_id].channel_overrides && (e[r.guild_id].channel_overrides = {}), e[r.guild_id].channel_overrides[r.id] = {
      ...e[r.guild_id].channel_overrides[r.id],
      collapsed: r.id in n
    }, t = !0)
  }
  return t ? (_ = {
    ...n
  }, delete e[l.I_8], (await i.tn.patch({
    url: l.ANM.USER_GUILD_SETTINGS_BULK,
    body: {
      guilds: e
    }
  })).body) : []
}

function S() {
  _ = {
    ...s.Z.getCollapsedCategories()
  }
}
class f extends r.Z {
  constructor(...e) {
    super(...e), u(this, "actions", {
      CATEGORY_COLLAPSE: I,
      CATEGORY_EXPAND: I,
      CATEGORY_COLLAPSE_ALL: I,
      CATEGORY_EXPAND_ALL: I,
      POST_CONNECTION_OPEN: E,
      USER_GUILD_SETTINGS_FULL_UPDATE: S
    }), u(this, "saveUserGuildSettings", T), u(this, "saveUserGuildSettingsBulk", h)
  }
}
t.Z = new f