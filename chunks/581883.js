"use strict";
var i, r = n(512722),
  s = n.n(r),
  o = n(392711),
  a = n.n(o),
  l = n(442837),
  u = n(377108),
  _ = n(524437),
  d = n(835913),
  c = n(570140),
  E = n(262847),
  I = n(48481),
  T = n(526761);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let S = {
    ProtoClass: _.o8,
    proto: _.o8.create(),
    lazyLoaded: !1,
    editInfo: (0, T.JC)()
  },
  f = {
    ProtoClass: u.ji,
    proto: u.ji.create(),
    lazyLoaded: !0,
    editInfo: (0, T.JC)()
  },
  N = {
    [T.yP.PRELOADED_USER_SETTINGS]: S,
    [T.yP.FRECENCY_AND_FAVORITES_SETTINGS]: f
  },
  A = !1;

function m() {
  O()
}

function O() {
  Object.values(N).forEach(e => {
    if (null != e.editInfo.timeout) {
      var t, n;
      clearTimeout(e.editInfo.timeout), e.editInfo.timeout = void 0, e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER, e.editInfo.rateLimited = !1, e.editInfo.offlineEditDataVersion = null !== (n = null === (t = e.proto.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== n ? n : 0
    }
  })
}

function R(e) {
  null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), e.editInfo = (0, T.JC)()
}

function C(e) {
  let {
    settings: {
      proto: t,
      type: n
    },
    partial: i,
    resetEditInfo: r,
    local: o
  } = e;
  A = !o;
  let a = N[n];
  r && R(a), i ? (a.proto = (0, I.re)(a.ProtoClass, a.proto, t), s()("string" != typeof a.proto, "UserSettingsProto cannot be a string")) : (a.proto = t, s()("string" != typeof a.proto, "UserSettingsProto cannot be a string"), a.editInfo.loaded = !0, a.editInfo.loading = !1)
}

function p(e) {
  null != e && a().forEach(N, (t, n) => {
    var i, r;
    let o = e[Number(n)];
    if (null == o) return;
    let a = null !== (i = null == o ? void 0 : o.proto) && void 0 !== i ? i : "",
      l = (0, I.d5)(t.ProtoClass, a);
    if (null == l) return;
    t.proto = l, s()("string" != typeof t.proto, "UserSettingsProto cannot be a string");
    let u = null !== (r = null == o ? void 0 : o.protoToSave) && void 0 !== r ? r : null;
    if (null == u || null == o.offlineEditDataVersion) return;
    let _ = (0, I.d5)(t.ProtoClass, u);
    null != _ && (t.editInfo.protoToSave = _, t.editInfo.offlineEditDataVersion = o.offlineEditDataVersion)
  })
}
class g extends(i = l.ZP.PersistedStore) {
  initialize(e) {
    p(e)
  }
  getState() {
    return this.computeState()
  }
  computeState() {
    return a().mapValues(N, e => {
      let t = {
        proto: (0, I.xU)(e.ProtoClass, e.proto)
      };
      return null != e.editInfo.offlineEditDataVersion && null != e.editInfo.protoToSave && (t.protoToSave = (0, I.xU)(e.ProtoClass, e.editInfo.protoToSave), t.offlineEditDataVersion = e.editInfo.offlineEditDataVersion), t
    })
  }
  hasLoaded(e) {
    return N[e].editInfo.loaded
  }
  get settings() {
    return S.proto
  }
  get frecencyWithoutFetchingLatest() {
    return f.proto
  }
  get wasMostRecentUpdateFromServer() {
    return A
  }
  getFullState() {
    return N
  }
  getGuildFolders() {
    var e;
    let t = null === (e = S.proto.guildFolders) || void 0 === e ? void 0 : e.folders;
    return null == t ? null : t.map(e => {
      var t, n, i;
      let r = null === (t = e.id) || void 0 === t ? void 0 : t.value,
        s = null === (n = e.color) || void 0 === n ? void 0 : n.value;
      return {
        guildIds: e.guildIds,
        folderId: null == r ? void 0 : Number(r),
        folderName: null === (i = e.name) || void 0 === i ? void 0 : i.value,
        folderColor: null == s ? void 0 : Number(s)
      }
    })
  }
  getGuildRecentsDismissedAt(e) {
    var t, n;
    if (null == e) return 0;
    let i = null === (n = this.settings.guilds) || void 0 === n ? void 0 : null === (t = n.guilds[e]) || void 0 === t ? void 0 : t.guildRecentsDismissedAt;
    return null == i ? 0 : d.E.toDate(i).getTime()
  }
  getDismissedGuildContent(e) {
    var t, n, i;
    return null == e ? null : null === (i = this.settings.guilds) || void 0 === i ? void 0 : null === (n = i.guilds) || void 0 === n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.dismissedGuildContent
  }
  getGuildsProto() {
    var e, t;
    return null !== (t = null === (e = this.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : null
  }
}
h(g, "displayName", "UserSettingsProtoStore"), h(g, "persistKey", "UserSettingsProtoStore-Cache"), t.Z = new g(c.Z, {
  CACHE_LOADED: function(e) {
    let {
      userSettings: t
    } = e;
    p(t)
  },
  USER_SETTINGS_PROTO_UPDATE: C,
  USER_SETTINGS_PROTO_ENQUEUE_UPDATE: C,
  USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: function(e) {
    let {
      settings: {
        type: t,
        changes: n
      }
    } = e;
    s()(!__OVERLAY__, "this cannot run in the overlay");
    let i = N[t];
    return i.editInfo = {
      ...i.editInfo,
      ...n
    }, !1
  },
  CONNECTION_OPEN: function(e) {
    let {
      userSettingsProto: t
    } = e;
    null != t && (S.proto = t, s()("string" != typeof S.proto, "UserSettingsProto cannot be a string"));
    let {
      proto: n,
      isDirty: i,
      cleanupFuncs: r
    } = (0, I.xt)(S.proto, E.Z[T.yP.PRELOADED_USER_SETTINGS]);
    i && R(S), S.proto = n, s()("string" != typeof S.proto, "UserSettingsProto cannot be a string"), S.editInfo.triggeredMigrations = i, S.editInfo.cleanupFuncs = r, S.editInfo.loaded = !0, Object.values(N).forEach(e => {
      e.lazyLoaded && (e.editInfo.loaded = !1, e.editInfo.loading = !1)
    }), O()
  },
  CONNECTION_CLOSED: m,
  CONNECTION_RESUMED: m,
  OVERLAY_INITIALIZE: function(e) {
    let {
      userSettingsProto: t
    } = e;
    S.proto = (0, I.ac)(t), s()("string" != typeof S.proto, "UserSettingsProto cannot be a string")
  },
  LOGOUT: function() {
    O(), Object.values(N).forEach(e => {
      e.proto = e.ProtoClass.create(), e.editInfo = (0, T.JC)()
    })
  }
})