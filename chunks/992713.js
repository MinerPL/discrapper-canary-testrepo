"use strict";
n(47120);
var i = n(108131),
  r = n.n(i),
  s = n(442837),
  o = n(570140),
  a = n(147913),
  l = n(662896),
  u = n(710845),
  _ = n(339085),
  d = n(926491),
  c = n(592125),
  E = n(430824),
  I = n(709054),
  T = n(38618);
let h = new u.Z("EntityVersionsManager");
class S extends a.Z {
  _initialize() {
    o.Z.subscribe("CONNECTION_OPEN", N)
  }
  _terminate() {
    o.Z.unsubscribe("CONNECTION_OPEN", N)
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      GUILD_CREATE: A,
      DELETED_ENTITY_IDS: f
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}

function f(e) {
  var t;
  let n = null === (t = E.Z.getGuild(e.guild_id)) || void 0 === t ? void 0 : t.name;
  h.fileOnly("received deleted guild entities (id: ".concat(e.guild_id, ", name: ").concat(n, ")")), s.ZP.Emitter.batched(() => {
    null != e.channels && function(e, t) {
      let n = I.default.keys(c.Z.getMutableBasicGuildChannelsForGuild(e));
      h.fileOnly("syncChannels", {
        channelIdsInMemory: n,
        channelIdsFromServer: t
      }), n.forEach(n => {
        !t.has(n) && o.Z.dispatch({
          type: "CHANNEL_DELETE",
          channel: {
            guild_id: e,
            id: n,
            parent_id: void 0
          }
        })
      })
    }(e.guild_id, new Set(e.channels)), null != e.roles && function(e, t) {
      I.default.keys(E.Z.getRoles(e)).forEach(n => {
        !t.has(n) && o.Z.dispatch({
          type: "GUILD_ROLE_DELETE",
          guildId: e,
          roleId: n
        })
      })
    }(e.guild_id, new Set(e.roles)), null != e.emojis && function(e, t) {
      let n = _.Z.getGuildEmoji(e),
        i = n.filter(e => t.has(e.id));
      n.length !== i.length && o.Z.dispatch({
        type: "GUILD_EMOJIS_UPDATE",
        guildId: e,
        emojis: i
      })
    }(e.guild_id, new Set(e.emojis)), null != e.stickers && function(e, t) {
      var n;
      let i = null !== (n = d.Z.getStickersByGuildId(e)) && void 0 !== n ? n : [],
        r = i.filter(e => t.has(e.id));
      i.length !== r.length && o.Z.dispatch({
        type: "GUILD_STICKERS_UPDATE",
        guildId: e,
        stickers: r
      })
    }(e.guild_id, new Set(e.stickers))
  })
}

function N() {
  l.Z.getAll().then(e => {
    e.forEach(e => m(e))
  })
}

function A(e) {
  let {
    guild: t
  } = e;
  t.unableToSyncDeletes && m(t.id)
}

function m(e) {
  setTimeout(() => (function(e) {
    var t, n, i;
    let r = null === (t = E.Z.getGuild(e)) || void 0 === t ? void 0 : t.name;
    h.fileOnly("requesting deleted guild entities (id: ".concat(e, ", name: ").concat(r, ")"));
    let s = O(Object.keys(c.Z.getMutableBasicGuildChannelsForGuild(e))),
      o = O(Object.keys(E.Z.getRoles(e))),
      a = O(_.Z.getGuildEmoji(e).map(e => e.id)),
      l = O(null !== (i = null === (n = d.Z.getStickersByGuildId(e)) || void 0 === n ? void 0 : n.map(e => e.id)) && void 0 !== i ? i : []);
    T.Z.getSocket().getDeletedEntityIdsNotMatchingHash(e, s, o, a, l)
  })(e), Math.ceil(2e3 * Math.random()))
}

function O(e) {
  return r().v3(e.sort().join(",")).toString()
}
t.Z = new S