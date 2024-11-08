n.d(t, {
    BU: function () {
        return R;
    },
    Bn: function () {
        return D;
    },
    C9: function () {
        return x;
    },
    DZ: function () {
        return A;
    },
    PS: function () {
        return C;
    },
    T6: function () {
        return T;
    },
    aj: function () {
        return N;
    },
    bE: function () {
        return M;
    },
    fy: function () {
        return g.fy;
    },
    hW: function () {
        return y;
    },
    nm: function () {
        return O;
    },
    sr: function () {
        return w;
    },
    w9: function () {
        return L;
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
    f = n(70956),
    _ = n(915486),
    h = n(262847),
    p = n(581883),
    m = n(48481),
    g = n(526761),
    E = n(981631);
function v(e, t, n) {
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
let I = 'UserSettingsProtoLastWriteTimes',
    S = Date.now();
function T() {}
d.Z.subscribe('CONNECTION_OPEN', () => {
    Date.now();
}),
    d.Z.subscribe('CONNECTION_CLOSED', () => {
        Date.now();
    }),
    'undefined' != typeof document && (document.addEventListener('mousedown', () => {}), document.addEventListener('keydown', () => {}));
class b {
    getEditInfo() {
        return p.Z.getFullState()[this.type];
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
            s = null != a ? i.fromBinary(i.toBinary(a), m.Uc) : i.create();
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
                      jitter: n === g.fy.AUTOMATED || n === g.fy.DAILY,
                      partial: !0,
                      resetEditInfo: !1,
                      local: !0
                  })
                : (this.logger.log('Updating '.concat(String(e), ' with delay ').concat(n)),
                  this.markDirty(o, {
                      delaySeconds: n,
                      jitter: n === g.fy.AUTOMATED || n === g.fy.DAILY
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
            let e = s * f.Z.Millis.SECOND;
            t.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * f.Z.Millis.SECOND))), this.logger.log('Scheduling save from markDirty'), (a.timeout = setTimeout(this.persistChanges, e)), (a.timeoutDelay = s);
        }
        null != t.cleanup && (a.cleanupFuncs = [...r.cleanupFuncs, ...t.cleanup]), null == r.protoToSave ? (a.protoToSave = e) : (a.protoToSave = (0, m.re)(this.ProtoClass, r.protoToSave, e)), this.dispatchChanges(a);
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
        let t = null !== (e = c.K.get(I)) && void 0 !== e ? e : {};
        (t[this.type] = Date.now()), c.K.set(I, t);
    }
    loadIfUncached(e, t) {
        (!p.Z.hasLoaded(e) || !0 === t) && this.loadIfNecessary(t);
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
                    } = await s.tn.get({ url: E.ANM.USER_SETTINGS_PROTO(this.type) }),
                    n = (0, m.d5)(this.ProtoClass, t);
                if (null == n) {
                    this.dispatchChanges({
                        loading: !1,
                        loaded: !0
                    });
                    return;
                }
                let r = h.Z[this.type],
                    { proto: i, isDirty: a, cleanupFuncs: o } = (0, m.xt)(n, r);
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
                delaySeconds: g.fy.AUTOMATED,
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
        v(this, 'ProtoClass', void 0),
            v(this, 'type', void 0),
            v(this, 'logger', void 0),
            v(this, 'beforeSendCallbacks', void 0),
            v(this, 'lastSendTime', void 0),
            v(this, 'persistChanges', void 0),
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
                let t = (0, m.xU)(this.ProtoClass, e.protoToSave);
                if (null == t || '' === t) {
                    this.logger.log('Not persisting proto because there is nothing to change');
                    return;
                }
                try {
                    this.saveLastSendTime();
                    let { body: n } = await s.tn.patch({
                        url: E.ANM.USER_SETTINGS_PROTO(this.type),
                        body: {
                            settings: t,
                            required_data_version: e.offlineEditDataVersion
                        }
                    });
                    n.out_of_date && this.logger.log('Proto was out of date, discarding changes'), this.getEditInfo().editInfo.cleanupFuncs.forEach((e) => e());
                    let r = (0, m.d5)(this.ProtoClass, n.settings);
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
                    var n;
                    if (429 === e.status) {
                        this.logger.log('Rate limited, scheduling retry');
                        let t = parseInt(e.headers['retry-after']);
                        isNaN(t) && (t = 60);
                        let n = setTimeout(this.persistChanges, Math.min(30 * f.Z.Millis.SECOND, t * f.Z.Millis.SECOND));
                        this.dispatchChanges({
                            rateLimited: !0,
                            timeout: n
                        });
                    } else if (400 === e.status && (null === (n = e.body) || void 0 === n ? void 0 : n.code) === E.evJ.INVALID_USER_SETTINGS_DATA) throw (this.logger.log('Reloading do to invalid data'), this.loadIfNecessary(!0), e);
                    else throw (this.logger.log('Unknown user settings error'), e);
                }
            }),
            (this.logger = new a.Y(this.ProtoClass.typeName));
    }
}
let y = new b(u.o8, g.yP.PRELOADED_USER_SETTINGS),
    A = new b(l.ji, g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
    N = {
        [g.yP.PRELOADED_USER_SETTINGS]: y,
        [g.yP.FRECENCY_AND_FAVORITES_SETTINGS]: A
    };
function C(e, t, n) {
    return y.updateAsync('guilds', (n) => (0, m.u0)(n, e, t), n);
}
function R(e, t, n, r) {
    return C(e, (e) => (0, m.uL)(e, t, n), r);
}
function O(e) {
    return y.updateAsync(
        'userContent',
        (t) => {
            if ((0, _.jl)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, _.GV)(t.dismissedContents, e);
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
function D(e, t) {
    return y.updateAsync(
        'userContent',
        (n) => {
            null == n.recurringDismissibleContentStates[e] ? (n.recurringDismissibleContentStates[e] = { lastDismissedVersion: t }) : (n.recurringDismissibleContentStates[e].lastDismissedVersion = t);
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
function L(e) {
    return y.updateAsync(
        'userContent',
        (t) => {
            if (!(0, _.jl)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, _.jx)(t.dismissedContents, e);
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
function x(e) {
    return y.updateAsync(
        'userContent',
        (t) => {
            if (null == t.recurringDismissibleContentStates[e]) return !1;
            t.recurringDismissibleContentStates[e].lastDismissedVersion = 0;
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
function w() {
    return y.updateAsync(
        'userContent',
        (e) => {
            (e.dismissedContents = new Uint8Array()), (e.recurringDismissibleContentStates = {});
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
function M() {
    return y.updateAsync(
        'userContent',
        (e) => {
            let t = new Uint8Array();
            for (let e of Object.keys(o.z)) t = (0, _.GV)(t, o.z[e]);
            e.dismissedContents = t;
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
