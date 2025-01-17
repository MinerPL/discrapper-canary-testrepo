n.d(t, {
    BU: function () {
        return y;
    },
    Bn: function () {
        return L;
    },
    C9: function () {
        return M;
    },
    DZ: function () {
        return O;
    },
    PS: function () {
        return C;
    },
    T6: function () {
        return A;
    },
    aj: function () {
        return R;
    },
    bE: function () {
        return U;
    },
    fy: function () {
        return m.fy;
    },
    hW: function () {
        return v;
    },
    nm: function () {
        return D;
    },
    sr: function () {
        return P;
    },
    w9: function () {
        return b;
    }
}),
    n(411104),
    n(47120),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817);
var r = n(512722),
    i = n.n(r),
    a = n(259443),
    s = n(544891),
    o = n(704215),
    l = n(377108),
    u = n(524437),
    c = n(433517),
    d = n(570140),
    _ = n(70956),
    E = n(915486),
    f = n(262847),
    h = n(581883),
    p = n(48481),
    m = n(526761),
    I = n(981631);
function T(e, t, n) {
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
let g = 'UserSettingsProtoLastWriteTimes',
    S = Date.now();
function A() {}
d.Z.subscribe('CONNECTION_OPEN', () => {
    Date.now();
}),
    d.Z.subscribe('CONNECTION_CLOSED', () => {
        Date.now();
    }),
    'undefined' != typeof document && (document.addEventListener('mousedown', () => {}), document.addEventListener('keydown', () => {}));
class N {
    getEditInfo() {
        return h.Z.getFullState()[this.type];
    }
    getCurrentValue() {
        return this.getEditInfo().proto;
    }
    async updateAsync(e, t, n) {
        await this.loadIfNecessary();
        let r = this.ProtoClass.fields.find((t) => t.localName === e);
        if (null == r) throw Error('Unknown proto field name '.concat(String(e)));
        let i = r.T(),
            a = this.getCurrentValue()[e],
            s = null != a ? i.fromBinary(i.toBinary(a), p.Uc) : i.create();
        if (!1 === t(s)) return;
        let o = this.ProtoClass.create();
        (o[e] = s),
            __OVERLAY__
                ? d.Z.dispatch({
                      type: 'USER_SETTINGS_PROTO_ENQUEUE_UPDATE',
                      settings: {
                          type: this.type,
                          proto: o
                      },
                      delaySeconds: n,
                      jitter: n === m.fy.AUTOMATED || n === m.fy.DAILY,
                      partial: !0,
                      resetEditInfo: !1,
                      local: !0
                  })
                : (this.logger.log('Updating '.concat(String(e), ' with delay ').concat(n)),
                  this.markDirty(o, {
                      delaySeconds: n,
                      jitter: n === m.fy.AUTOMATED || n === m.fy.DAILY
                  }));
    }
    markDirty(e, t) {
        var n;
        i()(!__OVERLAY__, 'this cannot run in the overlay');
        let { editInfo: r } = this.getEditInfo(),
            a = { timeout: r.timeout };
        if (!r.loaded) throw Error('Cannot edit user settings proto because we have not yet loaded the stored version from the DB');
        !1 !== t.dispatch &&
            d.Z.dispatch({
                type: 'USER_SETTINGS_PROTO_UPDATE',
                settings: {
                    type: this.type,
                    proto: e
                },
                partial: !0,
                local: !0
            });
        let s = null !== (n = t.delaySeconds) && void 0 !== n ? n : 0;
        if ((null != a.timeout && s < r.timeoutDelay && !r.rateLimited && (clearTimeout(a.timeout), (a.timeout = void 0)), null == a.timeout)) {
            let e = s * _.Z.Millis.SECOND;
            t.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * _.Z.Millis.SECOND))), this.logger.log('Scheduling save from markDirty'), (a.timeout = setTimeout(this.persistChanges, e)), (a.timeoutDelay = s);
        }
        null != t.cleanup && (a.cleanupFuncs = [...r.cleanupFuncs, ...t.cleanup]), null == r.protoToSave ? (a.protoToSave = e) : (a.protoToSave = (0, p.re)(this.ProtoClass, r.protoToSave, e)), this.dispatchChanges(a);
    }
    dispatchChanges(e) {
        d.Z.dispatch({
            type: 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO',
            settings: {
                changes: e,
                type: this.type
            }
        });
    }
    saveLastSendTime() {
        var e;
        let t = null !== (e = c.K.get(g)) && void 0 !== e ? e : {};
        (t[this.type] = Date.now()), c.K.set(g, t);
    }
    async loadIfNecessary(e) {
        if (__OVERLAY__) {
            d.Z.dispatch({
                type: 'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY',
                settingsType: this.type
            });
            return;
        }
        let { editInfo: t } = this.getEditInfo();
        if (e || (!t.loaded && !t.loading)) {
            this.logger.log('Loading proto'), this.dispatchChanges({ loading: !0 });
            try {
                let {
                        body: { settings: t }
                    } = await s.tn.get({ url: I.ANM.USER_SETTINGS_PROTO(this.type) }),
                    n = (0, p.d5)(this.ProtoClass, t);
                if (null == n) {
                    this.dispatchChanges({
                        loading: !1,
                        loaded: !0
                    });
                    return;
                }
                let r = f.Z[this.type],
                    { proto: i, isDirty: a, cleanupFuncs: o } = (0, p.xt)(n, r);
                return (
                    await d.Z.dispatch({
                        type: 'USER_SETTINGS_PROTO_UPDATE',
                        settings: {
                            type: this.type,
                            proto: n
                        },
                        resetEditInfo: a || e,
                        local: !1
                    }),
                    a && this.markDirtyFromMigration(i, o),
                    n
                );
            } catch (e) {
                throw (this.dispatchChanges({ loading: !1 }), e);
            }
        }
    }
    markDirtyFromMigration(e, t) {
        i()(!__OVERLAY__, 'this cannot run in the overlay'),
            this.logger.log('Marking dirty due to migrates'),
            i()(null == this.getEditInfo().editInfo.offlineEditDataVersion, 'offline changes are not supported with migrations'),
            this.markDirty(e, {
                cleanup: t,
                dispatch: !1,
                delaySeconds: m.fy.AUTOMATED,
                jitter: !0
            });
    }
    markDirtyIfHasPendingChange(e) {
        this.beforeSendCallbacks.some((e) => {
            let { hasChanges: t } = e;
            return t();
        }) &&
            this.markDirty(this.ProtoClass.create(), {
                dispatch: !1,
                delaySeconds: 0,
                cleanup: e
            });
    }
    scheduleSaveFromOfflineEdit() {
        i()(!__OVERLAY__, 'this cannot run in the overlay'), this.logger.log('Scheduling save from offline edit');
        let { editInfo: e } = this.getEditInfo();
        i()(null != e.protoToSave, 'protoToSave cannot be null'), i()(null != e.offlineEditDataVersion, 'offlineEditDataVersion cannot be null'), i()(null == e.timeout, 'timeout must not be set already');
        let t = 5000 + Math.floor(5000 * Math.random()),
            n = setTimeout(this.persistChanges, t);
        this.dispatchChanges({
            timeout: n,
            timeoutDelay: t
        });
    }
    constructor(e, t) {
        T(this, 'ProtoClass', void 0),
            T(this, 'type', void 0),
            T(this, 'logger', void 0),
            T(this, 'beforeSendCallbacks', void 0),
            T(this, 'lastSendTime', void 0),
            T(this, 'persistChanges', void 0),
            (this.ProtoClass = e),
            (this.type = t),
            (this.beforeSendCallbacks = []),
            (this.lastSendTime = 0),
            (this.persistChanges = async () => {
                i()(!__OVERLAY__, 'this cannot run in the overlay'), this.logger.log('Persisting proto');
                let { editInfo: e } = this.getEditInfo();
                if (null == e.protoToSave) {
                    this.logger.log('Not persisting proto because the proto was null');
                    return;
                }
                this.beforeSendCallbacks.forEach((t) => {
                    let { processProto: n } = t;
                    return n(e.protoToSave);
                });
                let t = (0, p.xU)(this.ProtoClass, e.protoToSave);
                if (null == t || '' === t) {
                    this.logger.log('Not persisting proto because there is nothing to change');
                    return;
                }
                try {
                    this.saveLastSendTime();
                    let { body: n } = await s.tn.patch({
                        url: I.ANM.USER_SETTINGS_PROTO(this.type),
                        body: {
                            settings: t,
                            required_data_version: e.offlineEditDataVersion
                        }
                    });
                    n.out_of_date && this.logger.log('Proto was out of date, discarding changes'), this.getEditInfo().editInfo.cleanupFuncs.forEach((e) => e());
                    let r = (0, p.d5)(this.ProtoClass, n.settings);
                    if (null == r) return;
                    d.Z.dispatch({
                        type: 'USER_SETTINGS_PROTO_UPDATE',
                        settings: {
                            proto: r,
                            type: this.type
                        },
                        resetEditInfo: !0,
                        wasSaved: !0,
                        local: !1
                    });
                } catch (e) {
                    var n, r;
                    if (429 === e.status) {
                        this.logger.log('Rate limited, scheduling retry');
                        let t = setTimeout(this.persistChanges, Math.min(30 * _.Z.Millis.SECOND, (null !== (r = e.body.retry_after) && void 0 !== r ? r : 60) * _.Z.Millis.SECOND));
                        this.dispatchChanges({
                            rateLimited: !0,
                            timeout: t
                        });
                    } else if (400 === e.status && (null === (n = e.body) || void 0 === n ? void 0 : n.code) === I.evJ.INVALID_USER_SETTINGS_DATA) throw (this.logger.log('Reloading do to invalid data'), this.loadIfNecessary(!0), e);
                    else throw (this.logger.log('Unknown user settings error'), e);
                }
            }),
            (this.logger = new a.Y(this.ProtoClass.typeName));
    }
}
let v = new N(u.o8, m.yP.PRELOADED_USER_SETTINGS),
    O = new N(l.ji, m.yP.FRECENCY_AND_FAVORITES_SETTINGS),
    R = {
        [m.yP.PRELOADED_USER_SETTINGS]: v,
        [m.yP.FRECENCY_AND_FAVORITES_SETTINGS]: O
    };
function C(e, t, n) {
    return v.updateAsync('guilds', (n) => (0, p.u0)(n, e, t), n);
}
function y(e, t, n, r) {
    return C(e, (e) => (0, p.uL)(e, t, n), r);
}
function D(e) {
    return v.updateAsync(
        'userContent',
        (t) => {
            if ((0, E.jl)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, E.GV)(t.dismissedContents, e);
        },
        m.fy.INFREQUENT_USER_ACTION
    );
}
function L(e, t) {
    return v.updateAsync(
        'userContent',
        (n) => {
            null == n.recurringDismissibleContentStates[e] ? (n.recurringDismissibleContentStates[e] = { lastDismissedVersion: t }) : (n.recurringDismissibleContentStates[e].lastDismissedVersion = t);
        },
        m.fy.INFREQUENT_USER_ACTION
    );
}
function b(e) {
    return v.updateAsync(
        'userContent',
        (t) => {
            if (!(0, E.jl)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, E.jx)(t.dismissedContents, e);
        },
        m.fy.INFREQUENT_USER_ACTION
    );
}
function M(e) {
    return v.updateAsync(
        'userContent',
        (t) => {
            if (null == t.recurringDismissibleContentStates[e]) return !1;
            t.recurringDismissibleContentStates[e].lastDismissedVersion = 0;
        },
        m.fy.INFREQUENT_USER_ACTION
    );
}
function P() {
    return v.updateAsync(
        'userContent',
        (e) => {
            (e.dismissedContents = new Uint8Array()), (e.recurringDismissibleContentStates = {});
        },
        m.fy.INFREQUENT_USER_ACTION
    );
}
function U() {
    return v.updateAsync(
        'userContent',
        (e) => {
            let t = new Uint8Array();
            for (let e of Object.keys(o.z)) t = (0, E.GV)(t, o.z[e]);
            e.dismissedContents = t;
        },
        m.fy.INFREQUENT_USER_ACTION
    );
}
