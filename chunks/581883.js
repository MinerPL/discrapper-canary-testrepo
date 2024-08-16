var r,
    i = n(512722),
    a = n.n(i),
    s = n(392711),
    o = n.n(s),
    l = n(442837),
    u = n(377108),
    c = n(524437),
    d = n(835913),
    _ = n(570140),
    E = n(262847),
    f = n(48481),
    h = n(526761);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let m = {
        ProtoClass: c.o8,
        proto: c.o8.create(),
        lazyLoaded: !1,
        editInfo: (0, h.JC)()
    },
    I = {
        ProtoClass: u.ji,
        proto: u.ji.create(),
        lazyLoaded: !0,
        editInfo: (0, h.JC)()
    },
    T = {
        [h.yP.PRELOADED_USER_SETTINGS]: m,
        [h.yP.FRECENCY_AND_FAVORITES_SETTINGS]: I
    },
    g = !1;
function S() {
    A();
}
function A() {
    Object.values(T).forEach((e) => {
        if (null != e.editInfo.timeout) {
            var t, n;
            clearTimeout(e.editInfo.timeout), (e.editInfo.timeout = void 0), (e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER), (e.editInfo.rateLimited = !1), (e.editInfo.offlineEditDataVersion = null !== (n = null === (t = e.proto.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== n ? n : 0);
        }
    });
}
function N(e) {
    null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), (e.editInfo = (0, h.JC)());
}
function v(e) {
    let {
        settings: { proto: t, type: n },
        partial: r,
        resetEditInfo: i,
        local: s
    } = e;
    g = !s;
    let o = T[n];
    i && N(o), r ? ((o.proto = (0, f.re)(o.ProtoClass, o.proto, t)), a()('string' != typeof o.proto, 'UserSettingsProto cannot be a string')) : ((o.proto = t), a()('string' != typeof o.proto, 'UserSettingsProto cannot be a string'), (o.editInfo.loaded = !0), (o.editInfo.loading = !1));
}
function O(e) {
    null != e &&
        o().forEach(T, (t, n) => {
            var r, i;
            let s = e[Number(n)];
            if (null == s) return;
            let o = null !== (r = null == s ? void 0 : s.proto) && void 0 !== r ? r : '',
                l = (0, f.d5)(t.ProtoClass, o);
            if (null == l) return;
            (t.proto = l), a()('string' != typeof t.proto, 'UserSettingsProto cannot be a string');
            let u = null !== (i = null == s ? void 0 : s.protoToSave) && void 0 !== i ? i : null;
            if (null == u || null == s.offlineEditDataVersion) return;
            let c = (0, f.d5)(t.ProtoClass, u);
            null != c && ((t.editInfo.protoToSave = c), (t.editInfo.offlineEditDataVersion = s.offlineEditDataVersion));
        });
}
class R extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        O(e);
    }
    getState() {
        return this.computeState();
    }
    computeState() {
        return o().mapValues(T, (e) => {
            let t = { proto: (0, f.xU)(e.ProtoClass, e.proto) };
            return null != e.editInfo.offlineEditDataVersion && null != e.editInfo.protoToSave && ((t.protoToSave = (0, f.xU)(e.ProtoClass, e.editInfo.protoToSave)), (t.offlineEditDataVersion = e.editInfo.offlineEditDataVersion)), t;
        });
    }
    hasLoaded(e) {
        return T[e].editInfo.loaded;
    }
    get settings() {
        return m.proto;
    }
    get frecencyWithoutFetchingLatest() {
        return I.proto;
    }
    get wasMostRecentUpdateFromServer() {
        return g;
    }
    getFullState() {
        return T;
    }
    getGuildFolders() {
        var e;
        let t = null === (e = m.proto.guildFolders) || void 0 === e ? void 0 : e.folders;
        return null == t
            ? null
            : t.map((e) => {
                  var t, n, r;
                  let i = null === (t = e.id) || void 0 === t ? void 0 : t.value,
                      a = null === (n = e.color) || void 0 === n ? void 0 : n.value;
                  return {
                      guildIds: e.guildIds,
                      folderId: null == i ? void 0 : Number(i),
                      folderName: null === (r = e.name) || void 0 === r ? void 0 : r.value,
                      folderColor: null == a ? void 0 : Number(a)
                  };
              });
    }
    getGuildRecentsDismissedAt(e) {
        var t, n;
        if (null == e) return 0;
        let r = null === (n = this.settings.guilds) || void 0 === n ? void 0 : null === (t = n.guilds[e]) || void 0 === t ? void 0 : t.guildRecentsDismissedAt;
        return null == r ? 0 : d.E.toDate(r).getTime();
    }
    getDismissedGuildContent(e) {
        var t, n, r;
        return null == e ? null : null === (r = this.settings.guilds) || void 0 === r ? void 0 : null === (n = r.guilds) || void 0 === n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.dismissedGuildContent;
    }
    getGuildsProto() {
        var e, t;
        return null !== (t = null === (e = this.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : null;
    }
}
p(R, 'displayName', 'UserSettingsProtoStore'),
    p(R, 'persistKey', 'UserSettingsProtoStore-Cache'),
    (t.Z = new R(_.Z, {
        CACHE_LOADED: function (e) {
            let { userSettings: t } = e;
            O(t);
        },
        USER_SETTINGS_PROTO_UPDATE: v,
        USER_SETTINGS_PROTO_ENQUEUE_UPDATE: v,
        USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: function (e) {
            let {
                settings: { type: t, changes: n }
            } = e;
            a()(!__OVERLAY__, 'this cannot run in the overlay');
            let r = T[t];
            return (
                (r.editInfo = {
                    ...r.editInfo,
                    ...n
                }),
                !1
            );
        },
        CONNECTION_OPEN: function (e) {
            let { userSettingsProto: t } = e;
            null != t && ((m.proto = t), a()('string' != typeof m.proto, 'UserSettingsProto cannot be a string'));
            let { proto: n, isDirty: r, cleanupFuncs: i } = (0, f.xt)(m.proto, E.Z[h.yP.PRELOADED_USER_SETTINGS]);
            r && N(m),
                (m.proto = n),
                a()('string' != typeof m.proto, 'UserSettingsProto cannot be a string'),
                (m.editInfo.triggeredMigrations = r),
                (m.editInfo.cleanupFuncs = i),
                (m.editInfo.loaded = !0),
                Object.values(T).forEach((e) => {
                    e.lazyLoaded && ((e.editInfo.loaded = !1), (e.editInfo.loading = !1));
                }),
                A();
        },
        CONNECTION_CLOSED: S,
        CONNECTION_RESUMED: S,
        OVERLAY_INITIALIZE: function (e) {
            let { userSettingsProto: t } = e;
            (m.proto = (0, f.ac)(t)), a()('string' != typeof m.proto, 'UserSettingsProto cannot be a string');
        },
        LOGOUT: function () {
            A(),
                Object.values(T).forEach((e) => {
                    (e.proto = e.ProtoClass.create()), (e.editInfo = (0, h.JC)());
                });
        }
    }));
