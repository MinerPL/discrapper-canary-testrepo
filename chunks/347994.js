n(47120);
var s = n(392711), a = n.n(s), r = n(710845), i = n(581883), l = n(314897), o = n(287328), c = n(261875);
function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let _ = new r.Z('UserSettingsProto');
t.Z = new class e {
    async getAll(e) {
        let t = performance.now(), n = await o.Z.userSettings(e).getMany(), s = performance.now();
        _.verbose('loaded in '.concat(s - t, 'ms (settings: ').concat(n.length, ')'));
        let a = {};
        for (let e of n)
            a[e.id] = e.value;
        return a;
    }
    resetInMemoryState() {
    }
    constructor() {
        d(this, 'actions', {
            CONNECTION_OPEN: () => this.throttledOnChange(),
            USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
            USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
            USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange()
        }), d(this, 'handleUserSettingsProtoChange', () => {
            let e = l.default.getId(), t = c.Z.database(e);
            null == t || t.transaction(e => {
                var t, n;
                let s = i.Z.computeState(), a = o.Z.userSettingsTransaction(e);
                for (let e in s)
                    a.put({
                        id: Number(e),
                        value: s[e]
                    });
                let r = null !== (n = null === (t = i.Z.settings.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== n ? n : -1;
                o.Z.nonGuildVersionsTransaction(e).put({
                    id: 'user_settings_version',
                    version: r
                });
            }, 'handleUserSettingsProtoChange');
        }), d(this, 'throttledOnChange', a().debounce(this.handleUserSettingsProtoChange, 0));
    }
}();
