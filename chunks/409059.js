"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(741847),
  _ = n(58346);
let d = {},
  c = null;

function E(e, t) {
  var n;
  let i = null !== (n = d[e]) && void 0 !== n ? n : {
    code: e,
    state: _.Rj.RESOLVING
  };
  t(i = {
    ...i
  }), d = {
    ...d,
    [e]: i
  }
}

function I(e) {
  T(e.guildTemplate)
}

function T(e) {
  return E(e.code, t => {
    let n = (0, u.Z)(e);
    for (let e in n) t[e] = n[e]
  })
}

function h(e) {
  return E(e.code, e => {
    e.state = _.Rj.EXPIRED
  })
}
class S extends(o = a.ZP.Store) {
  getGuildTemplate(e) {
    return null != e ? d[e] : null
  }
  getGuildTemplates() {
    return d
  }
  getForGuild(e) {
    for (let t in d) {
      let n = d[t];
      if ("sourceGuildId" in n && n.sourceGuildId === e && n.state !== _.Rj.EXPIRED) return n
    }
  }
  getDisplayedGuildTemplateCode() {
    return c
  }
}
s = "GuildTemplateStore", (r = "displayName") in(i = S) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new S(l.Z, {
  GUILD_TEMPLATE_RESOLVE: function(e) {
    let {
      code: t
    } = e;
    d = {
      ...d,
      [t]: {
        code: t,
        state: _.Rj.RESOLVING
      }
    }
  },
  GUILD_TEMPLATE_CREATE_SUCCESS: I,
  GUILD_TEMPLATE_SYNC_SUCCESS: I,
  GUILD_TEMPLATE_RESOLVE_SUCCESS: I,
  GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function(e) {
    let {
      guildTemplates: t
    } = e;
    t.forEach(e => T(e))
  },
  GUILD_TEMPLATE_RESOLVE_FAILURE: h,
  GUILD_TEMPLATE_DELETE_SUCCESS: h,
  GUILD_TEMPLATE_ACCEPT: function(e) {
    return E(e.code, e => {
      e.state = _.Rj.ACCEPTING
    })
  },
  GUILD_TEMPLATE_ACCEPT_SUCCESS: function(e) {
    return E(e.code, e => {
      var t;
      e.state = _.Rj.ACCEPTED, e.usageCount = (null !== (t = e.usageCount) && void 0 !== t ? t : 0) + 1
    })
  },
  GUILD_TEMPLATE_ACCEPT_FAILURE: function(e) {
    return E(e.code, e => {
      e.state = _.Rj.RESOLVED
    })
  },
  GUILD_TEMPLATE_MODAL_SHOW: function(e) {
    c = e.code
  },
  GUILD_TEMPLATE_MODAL_HIDE: function(e) {
    c = null
  }
})