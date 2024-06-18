"use strict";
n.d(t, {
  BU: function() {
    return L
  },
  DZ: function() {
    return C
  },
  PS: function() {
    return g
  },
  aj: function() {
    return p
  },
  bE: function() {
    return P
  },
  fy: function() {
    return S.fy
  },
  hW: function() {
    return R
  },
  nm: function() {
    return v
  },
  sr: function() {
    return M
  },
  w9: function() {
    return D
  }
}), n(411104), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var i = n(512722),
  r = n.n(i),
  s = n(259443),
  o = n(544891),
  a = n(704215),
  l = n(377108),
  u = n(524437),
  _ = n(433517),
  d = n(570140),
  c = n(70956),
  E = n(915486),
  I = n(262847),
  T = n(581883),
  h = n(48481),
  S = n(526761),
  f = n(981631);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let A = "UserSettingsProtoLastWriteTimes",
  m = Date.now();
d.Z.subscribe("CONNECTION_OPEN", () => {
  Date.now()
}), d.Z.subscribe("CONNECTION_CLOSED", () => {
  Date.now()
}), "undefined" != typeof document && (document.addEventListener("mousedown", () => {}), document.addEventListener("keydown", () => {}));
class O {
  getEditInfo() {
    return T.Z.getFullState()[this.type]
  }
  getCurrentValue() {
    return this.getEditInfo().proto
  }
  async updateAsync(e, t, n) {
    await this.loadIfNecessary();
    let i = this.ProtoClass.fields.find(t => t.localName === e);
    if (null == i) throw Error("Unknown proto field name ".concat(String(e)));
    let r = i.T(),
      s = this.getCurrentValue()[e],
      o = null != s ? r.fromBinary(r.toBinary(s), h.Uc) : r.create();
    if (!1 === t(o)) return;
    let a = this.ProtoClass.create();
    a[e] = o, __OVERLAY__ ? d.Z.dispatch({
      type: "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
      settings: {
        type: this.type,
        proto: a
      },
      delaySeconds: n,
      jitter: n === S.fy.AUTOMATED || n === S.fy.DAILY,
      partial: !0,
      resetEditInfo: !1,
      local: !0
    }) : (this.logger.log("Updating ".concat(String(e), " with delay ").concat(n)), this.markDirty(a, {
      delaySeconds: n,
      jitter: n === S.fy.AUTOMATED || n === S.fy.DAILY
    }))
  }
  markDirty(e, t) {
    var n;
    r()(!__OVERLAY__, "this cannot run in the overlay");
    let {
      editInfo: i
    } = this.getEditInfo(), s = {
      timeout: i.timeout
    };
    if (!i.loaded) throw Error("Cannot edit user settings proto because we have not yet loaded the stored version from the DB");
    !1 !== t.dispatch && d.Z.dispatch({
      type: "USER_SETTINGS_PROTO_UPDATE",
      settings: {
        type: this.type,
        proto: e
      },
      partial: !0,
      local: !0
    });
    let o = null !== (n = t.delaySeconds) && void 0 !== n ? n : 0;
    if (null != s.timeout && o < i.timeoutDelay && !i.rateLimited && (clearTimeout(s.timeout), s.timeout = void 0), null == s.timeout) {
      let e = o * c.Z.Millis.SECOND;
      t.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * c.Z.Millis.SECOND))), this.logger.log("Scheduling save from markDirty"), s.timeout = setTimeout(this.persistChanges, e), s.timeoutDelay = o
    }
    null != t.cleanup && (s.cleanupFuncs = [...i.cleanupFuncs, ...t.cleanup]), null == i.protoToSave ? s.protoToSave = e : s.protoToSave = (0, h.re)(this.ProtoClass, i.protoToSave, e), this.dispatchChanges(s)
  }
  dispatchChanges(e) {
    d.Z.dispatch({
      type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO",
      settings: {
        changes: e,
        type: this.type
      }
    })
  }
  saveLastSendTime() {
    var e;
    let t = null !== (e = _.K.get(A)) && void 0 !== e ? e : {};
    t[this.type] = Date.now(), _.K.set(A, t)
  }
  async loadIfNecessary(e) {
    if (__OVERLAY__) {
      d.Z.dispatch({
        type: "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY",
        settingsType: this.type
      });
      return
    }
    let {
      editInfo: t
    } = this.getEditInfo();
    if (e || !t.loaded && !t.loading) {
      this.logger.log("Loading proto"), this.dispatchChanges({
        loading: !0
      });
      try {
        let {
          body: {
            settings: t
          }
        } = await o.tn.get({
          url: f.ANM.USER_SETTINGS_PROTO(this.type)
        }), n = (0, h.d5)(this.ProtoClass, t);
        if (null == n) {
          this.dispatchChanges({
            loading: !1,
            loaded: !0
          });
          return
        }
        let i = I.Z[this.type],
          {
            proto: r,
            isDirty: s,
            cleanupFuncs: a
          } = (0, h.xt)(n, i);
        return await d.Z.dispatch({
          type: "USER_SETTINGS_PROTO_UPDATE",
          settings: {
            type: this.type,
            proto: n
          },
          resetEditInfo: s || e,
          local: !1
        }), s && this.markDirtyFromMigration(r, a), n
      } catch (e) {
        throw this.dispatchChanges({
          loading: !1
        }), e
      }
    }
  }
  markDirtyFromMigration(e, t) {
    r()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Marking dirty due to migrates"), r()(null == this.getEditInfo().editInfo.offlineEditDataVersion, "offline changes are not supported with migrations"), this.markDirty(e, {
      cleanup: t,
      dispatch: !1,
      delaySeconds: S.fy.AUTOMATED,
      jitter: !0
    })
  }
  markDirtyIfHasPendingChange(e) {
    this.beforeSendCallbacks.some(e => {
      let {
        hasChanges: t
      } = e;
      return t()
    }) && this.markDirty(this.ProtoClass.create(), {
      dispatch: !1,
      delaySeconds: 0,
      cleanup: e
    })
  }
  scheduleSaveFromOfflineEdit() {
    r()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Scheduling save from offline edit");
    let {
      editInfo: e
    } = this.getEditInfo();
    r()(null != e.protoToSave, "protoToSave cannot be null"), r()(null != e.offlineEditDataVersion, "offlineEditDataVersion cannot be null"), r()(null == e.timeout, "timeout must not be set already");
    let t = 5e3 + Math.floor(5e3 * Math.random()),
      n = setTimeout(this.persistChanges, t);
    this.dispatchChanges({
      timeout: n,
      timeoutDelay: t
    })
  }
  constructor(e, t) {
    N(this, "ProtoClass", void 0), N(this, "type", void 0), N(this, "logger", void 0), N(this, "beforeSendCallbacks", void 0), N(this, "lastSendTime", void 0), N(this, "persistChanges", void 0), this.ProtoClass = e, this.type = t, this.beforeSendCallbacks = [], this.lastSendTime = 0, this.persistChanges = async () => {
      r()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Persisting proto");
      let {
        editInfo: e
      } = this.getEditInfo();
      if (null == e.protoToSave) {
        this.logger.log("Not persisting proto because the proto was null");
        return
      }
      this.beforeSendCallbacks.forEach(t => {
        let {
          processProto: n
        } = t;
        return n(e.protoToSave)
      });
      let t = (0, h.xU)(this.ProtoClass, e.protoToSave);
      if (null == t || "" === t) {
        this.logger.log("Not persisting proto because there is nothing to change");
        return
      }
      try {
        this.saveLastSendTime();
        let {
          body: n
        } = await o.tn.patch({
          url: f.ANM.USER_SETTINGS_PROTO(this.type),
          body: {
            settings: t,
            required_data_version: e.offlineEditDataVersion
          }
        });
        n.out_of_date && this.logger.log("Proto was out of date, discarding changes"), this.getEditInfo().editInfo.cleanupFuncs.forEach(e => e());
        let i = (0, h.d5)(this.ProtoClass, n.settings);
        if (null == i) return;
        d.Z.dispatch({
          type: "USER_SETTINGS_PROTO_UPDATE",
          settings: {
            proto: i,
            type: this.type
          },
          resetEditInfo: !0,
          wasSaved: !0,
          local: !1
        })
      } catch (e) {
        var n, i;
        if (429 === e.status) {
          this.logger.log("Rate limited, scheduling retry");
          let t = setTimeout(this.persistChanges, Math.min(30 * c.Z.Millis.SECOND, (null !== (i = e.body.retry_after) && void 0 !== i ? i : 60) * c.Z.Millis.SECOND));
          this.dispatchChanges({
            rateLimited: !0,
            timeout: t
          })
        } else if (400 === e.status && (null === (n = e.body) || void 0 === n ? void 0 : n.code) === f.evJ.INVALID_USER_SETTINGS_DATA) throw this.logger.log("Reloading do to invalid data"), this.loadIfNecessary(!0), e;
        else throw this.logger.log("Unknown user settings error"), e
      }
    }, this.logger = new s.Y(this.ProtoClass.typeName)
  }
}
let R = new O(u.o8, S.yP.PRELOADED_USER_SETTINGS),
  C = new O(l.ji, S.yP.FRECENCY_AND_FAVORITES_SETTINGS),
  p = {
    [S.yP.PRELOADED_USER_SETTINGS]: R,
    [S.yP.FRECENCY_AND_FAVORITES_SETTINGS]: C
  };

function g(e, t, n) {
  return R.updateAsync("guilds", n => (0, h.u0)(n, e, t), n)
}

function L(e, t, n, i) {
  return g(e, e => (0, h.uL)(e, t, n), i)
}

function v(e) {
  return R.updateAsync("userContent", t => {
    if ((0, E.jl)(t.dismissedContents, e)) return !1;
    t.dismissedContents = (0, E.GV)(t.dismissedContents, e)
  }, S.fy.INFREQUENT_USER_ACTION)
}

function D(e) {
  return R.updateAsync("userContent", t => {
    if (!(0, E.jl)(t.dismissedContents, e)) return !1;
    t.dismissedContents = (0, E.jx)(t.dismissedContents, e)
  }, S.fy.INFREQUENT_USER_ACTION)
}

function M() {
  return R.updateAsync("userContent", e => {
    e.dismissedContents = new Uint8Array
  }, S.fy.INFREQUENT_USER_ACTION)
}

function P() {
  return R.updateAsync("userContent", e => {
    let t = new Uint8Array;
    for (let e of Object.keys(a.z)) t = (0, E.GV)(t, a.z[e]);
    e.dismissedContents = t
  }, S.fy.INFREQUENT_USER_ACTION)
}