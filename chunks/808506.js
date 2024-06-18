"use strict";
let i, r;
n.d(t, {
  Y: function() {
    return el
  }
}), n(47120), n(411104), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(642549), n(610138), n(216116), n(78328), n(815648), n(177593);
var s, o, a, l, u, _, d = n(807864),
  c = n(442837),
  E = n(570140),
  I = n(26151),
  T = n(224706),
  h = n(765250),
  S = n(13245),
  f = n(287734),
  N = n(579806),
  A = n(887278),
  m = n(490029),
  O = n(710845),
  R = n(594190),
  C = n(454991),
  p = n(633565),
  g = n(48481),
  L = n(314897),
  v = n(77498),
  D = n(355863),
  M = n(449224),
  P = n(626135),
  y = n(866119),
  U = n(671999),
  b = n(998502),
  G = n(145597),
  w = n(981631),
  k = n(987650);
(a = s || (s = {})).ATTACHING = "ATTACHING", a.CONNECTING = "CONNECTING", a.CONNECTED = "CONNECTED", a.READY = "READY", a.CRASHED = "CRASHED", a.CONNECT_FAILED = "CONNECT_FAILED", a.HOOK_FAILED = "HOOK_FAILED";
let B = {},
  x = new Map,
  V = !1,
  Z = new Set,
  H = !1,
  F = !1,
  Y = !1,
  j = null,
  W = null,
  K = "",
  z = new Set,
  q = !1,
  X = new Set(["CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "WINDOW_INIT", "WINDOW_FULLSCREEN_CHANGE", "WINDOW_FOCUS", "WINDOW_RESIZED", "WINDOW_HIDDEN", "CHANNEL_SELECT", "DELAYED_CHANNEL_SELECT", "DELAYED_SELECT_FLUSH", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES", "MESSAGE_START_EDIT", "MESSAGE_UPDATE_EDIT", "MESSAGE_END_EDIT", "APP_VIEW_SET_HOME_LINK", "APPLICATION_STORE_LOCATION_CHANGE", "LOGIN", "LOGIN_SUCCESS", "LOGIN_FAILURE", "LOGIN_MFA_STEP", "LOGIN_MFA", "LOGIN_MFA_FAILURE", "LOGIN_MFA_SMS", "LOGIN_MFA_SMS_REQUEST_SUCCESS", "LOGIN_MFA_SMS_FAILURE", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_RESET", "FINGERPRINT", "REGISTER", "REGISTER_SUCCESS", "REGISTER_FAILURE", "VERIFY_FAILURE", "VERIFY_SUCCESS", "START_SESSION", "FORGOT_PASSWORD_SENT", "UPDATE_TOKEN", "SET_CONSENT_REQUIRED", "PASSWORDLESS_START", "PASSWORDLESS_FAILURE", "CONTEXT_MENU_OPEN", "CONTEXT_MENU_CLOSE", "MODAL_PUSH", "MODAL_POP", "MODAL_UPDATE", "MODAL_POP_ALL", "GUILD_SETTINGS_OPEN", "USER_SETTINGS_MODAL_OPEN", "CHANNEL_SETTINGS_OPEN", "NOTIFICATION_SETTINGS_MODAL_OPEN", "EMAIL_VERIFICATION_MODAL_OPEN", "MENTION_MODAL_OPEN", "QUICKSWITCHER_SHOW", "SEARCH_MODAL_OPEN", "IFE_EXPERIMENT_SEARCH_MODAL_OPEN", "INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "GUILD_SETTINGS_CLOSE", "USER_SETTINGS_MODAL_CLOSE", "CHANNEL_SETTINGS_CLOSE", "NOTIFICATION_SETTINGS_MODAL_CLOSE", "EMAIL_VERIFICATION_MODAL_CLOSE", "MENTION_MODAL_CLOSE", "QUICKSWITCHER_HIDE", "SEARCH_MODAL_CLOSE", "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE", "QUICKSWITCHER_SHOW", "QUICKSWITCHER_HIDE", "QUICKSWITCHER_SWITCH_TO", "QUICKSWITCHER_SEARCH", "QUICKSWITCHER_SELECT", "UPDATE_CHANNEL_DIMENSIONS", "UPDATE_CHANNEL_LIST_DIMENSIONS", "UPDATE_GUILD_LIST_DIMENSIONS", "TRACK", "CHANNEL_SETTINGS_OPEN", "CHANNEL_SETTINGS_INIT", "CHANNEL_SETTINGS_CLOSE", "GUILD_SETTINGS_INIT", "GUILD_SETTINGS_OPEN", "GUILD_SETTINGS_CLOSE", "TUTORIAL_INDICATOR_SHOW", "TUTORIAL_INDICATOR_HIDE", "TUTORIAL_INDICATOR_SUPPRESS_ALL", "USER_SETTINGS_ACCOUNT_INIT", "USER_SETTINGS_ACCOUNT_CLOSE", "NOTICE_SHOW", "NOTICE_DISMISS", "NOTICE_DISABLE", "SEARCH_EDITOR_STATE_CHANGE", "SEARCH_EDITOR_STATE_CLEAR", "SEARCH_START", "SEARCH_FINISH", "MOD_VIEW_SEARCH_FINISH", "SEARCH_INDEXING", "SEARCH_CLEAR", "SEARCH_ENSURE_SEARCH_STATE", "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", "SEARCH_CLEAR_HISTORY", "SEARCH_SET_SHOW_BLOCKED_RESULTS", "LAYOUT_CREATE", "POPOUT_WINDOW_OPEN", "POPOUT_WINDOW_CLOSE", "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", "TYPING_START_LOCAL", "TYPING_STOP_LOCAL", "SPOTIFY_SET_ACTIVE_DEVICE", "LOAD_INVITE_SUGGESTIONS", "INVITE_SUGGESTIONS_SEARCH", "IMPERSONATE_UPDATE", "IMPERSONATE_STOP", "CREATE_PENDING_REPLY", "CREATE_SHALLOW_PENDING_REPLY", "DELETE_PENDING_REPLY", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", "APPLICATION_COMMAND_UPDATE_OPTIONS", "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", "APPLICATION_COMMAND_USED", "DCF_HANDLE_DC_SHOWN", "DCF_HANDLE_DC_DISMISSED"]),
  Q = new Set,
  J = new O.Z("OverlayBridgeStore"),
  $ = "none",
  ee = (0, d.H)({
    onContention: (e, t) => J.verbose("overlayLock contention: lastMutexCall ".concat($)),
    onContentionResolved: () => J.verbose("overlayLock contention: resolved."),
    onTimeout: (e, t) => {
      let n = "overlayLock: lastMutexCall ".concat($, "}");
      J.error(n), P.default.track(w.rMx.OVERLAY_HOOK_RESULT, {
        success: !1,
        error_description: n
      })
    },
    timeoutMs: 18e4
  });

function et(e, t) {
  return function() {
    for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
    ee(() => t(...i), e)
  }
}

function en(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
    i = x.get(e);
  if ((null === n || i === n) && i !== t) {
    if (null == t ? x.delete(e) : x.set(e, t), null == t || "CRASHED" === t) {
      var r;
      j = null;
      let e = null === N.Z || void 0 === N.Z ? void 0 : null === (r = N.Z.fileManager) || void 0 === r ? void 0 : r.uploadDiscordHookCrashes;
      null != e && e().then(e => {
        if (!!Array.isArray(e) && 0 !== e.length)
          for (let l of (J.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
            var t, n, i, r, s, o, a;
            if (null == l) continue;
            let e = null != l.processName ? v.Z.getGameByExecutable(l.processName) : null;
            P.default.track(w.rMx.OVERLAY_HOOK_CRASHED, {
              process_name: null == l ? void 0 : l.processName,
              game_name: null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : null,
              game_id: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null,
              minidump_exception_type: null !== (i = l.exceptionString) && void 0 !== i ? i : null,
              minidump_exception_module_name: null !== (r = l.exceptionModuleName) && void 0 !== r ? r : null,
              minidump_relative_crash_address: null !== (s = l.relativeCrashAddress) && void 0 !== s ? s : null,
              minidump_exception_module_version: null !== (o = l.exceptionModuleVersion) && void 0 !== o ? o : null,
              minidump_exception_module_code_id: null !== (a = l.exceptionModuleCodeId) && void 0 !== a ? a : null
            })
          }
      })
    }
    z.delete(e), J.info("pid=".concat(e, " status transition ").concat(null != i ? i : "DISCONNECTED", " -> ").concat(null != t ? t : "DISCONNECTED"), x), V !== (V = Array.from(x.values()).some(e => "READY" === e)) && b.ZP.setBackgroundThrottling(!V)
  }
}
async function ei(e) {
  if (b.ZP.supportsFeature(w.eRX.CREATE_HOST_ON_ATTACH)) {
    if (x.size > 0) {
      $ = "reconcile.getOverlayURL";
      let t = await el();
      $ = "reconcile.createHostProcess", e.createHostProcess(t, ef, eh)
    } else $ = "reconcile.destroyHostProcess", e.destroyHostProcess()
  } else if (H) {
    let t = await el();
    e.createHostProcess(t, ef, eh)
  } else e.destroyHostProcess()
}
async function er(e) {
  !ee.isMutexHeld() && J.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
  let t = x.get(e);
  if (null != t) {
    J.warn("Trying to attach to pid=".concat(e, ", that is already in status: ").concat(t));
    return
  }
  $ = "attach.getOverlayModule";
  let n = await eu();
  $ = "attach.transitionOverlayPIDStatus", en(e, "ATTACHING"), $ = "attach.attachToProcess";
  let i = await A.YT(e);
  null == i ? ($ = "attach.transitionOverlayPIDStatus (CONNECTING)", en(e, "CONNECTING", "ATTACHING"), $ = "attach.reconcileHostProcess", await ei(n), n.connectProcess(e)) : ($ = "attach.transitionOverlayPIDStatus (HOOK_FAILED)", en(e, "HOOK_FAILED", "ATTACHING"), J.warn("Could not hook to pid=".concat(e, ", error=").concat(i)))
}
async function es(e) {
  if (!ee.isMutexHeld() && J.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !x.has(e)) {
    J.warn("Trying to detach from pid ".concat(e, ", which is in an unknown state"));
    return
  }
  $ = "detach.getOverlayModule";
  let t = await eu();
  $ = "detach.transitionOverlayPIDStatus", en(e, null), e !== G.Js && ($ = "detach.cancelAttachToProcess", A.pn(e), $ = "detach.disconnectProcess", t.disconnectProcess(e)), $ = "detach.reconcileHostProcess", await ei(t)
}
async function eo(e) {
  var t;
  if (J.verbose("updateIntendedOverlayPIDs", {
      isConnectionOpened: Y,
      action: e
    }), !ee.isMutexHeld() && J.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e), !Y && null != e) {
    J.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
    return
  }
  async function n(t) {
    if (!(t in B)) {
      J.error("Unexpected. ".concat(t, " is not a tracked game?"), B, e);
      return
    }
    let n = B[t];
    delete B[t];
    try {
      await n.deconstructor()
    } catch (e) {
      J.error("Failed to deconstruct tracked game ".concat(t), e)
    }
  }
  if (null == e || !H) {
    for (let t of (J.verbose("updateIntendedOverlayPIDs: Removing all.", B, e), Object.keys(B))) await n(Number(t));
    return
  }
  for (let n of null !== (t = e.added) && void 0 !== t ? t : []) {
    let t = R.ZP.getGameOverlayStatus(n);
    if (J.verbose("updateIntendedOverlayPIDs: newGame", n, t), null != t && t.enabled) switch (n.pid in B && J.error("Unexpected. ".concat(n.pid, " is being added twice?"), B, e), t.overlayMethod) {
      case k.gl.OutOfProcess:
        let i = await eE();
        await i.trackGame(n.pid), B[n.pid] = {
          method: t.overlayMethod,
          deconstructor: async () => {
            let e = await eE();
            await e.untrackGame(n.pid)
          }
        };
        break;
      case k.gl.Hook:
        !x.has(n.pid) && await er(n.pid), B[n.pid] = {
          method: t.overlayMethod,
          deconstructor: async () => {
            await es(n.pid)
          }
        };
        break;
      case k.gl.Disabled:
        J.verbose("updateIntendedOverlayPIDs: disabled", n);
        break;
      default:
        J.error("updateIntendedOverlayPIDs: Unknown overlay method: ".concat(t.overlayMethod))
    }
  }
  for (let t of e.removed) J.verbose("updateIntendedOverlayPIDs: removedGame", t), await n(t.pid)
}
let ea = et("updateIntendedOverlayPIDs", e => eo(e));

function el() {
  return new Promise(e => {
    eM.addConditionalChangeListener(() => {
      if (null != i) return e(i), !1
    })
  })
}
let eu = (() => {
  let e = null;
  async function t() {
    if (!k.iP) throw J.error("Attempted to load overlay on an unsupported platform."), Error("Overlay is not supported on this platform.");
    try {
      return await b.ZP.ensureModule("discord_overlay2"),
        function(e) {
          for (let t of ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"]) null == e[t] && (J.info("polyfilling OverlayModule.".concat(t, "(); Overlay module is probably out of date.")), e[t] = () => void 0);
          return e
        }(b.ZP.requireModule("discord_overlay2"))
    } catch (e) {
      throw J.error("failed ensuring discord_overlay2", e), e
    }
  }
  return () => (null == e && (e = t()), e)
})();
async function e_(e) {
  var t, n, i, r, s, o, a;
  try {
    let t = await el() + "&oop=true&pid=".concat(e);
    await (null === N.Z || void 0 === N.Z ? void 0 : null === (r = N.Z.globalOverlay) || void 0 === r ? void 0 : null === (i = r.openWindow) || void 0 === i ? void 0 : i.call(r, t))
  } catch (e) {
    J.log("globalOverlay: Failed to open overlay: ".concat(e), e), null === N.Z || void 0 === N.Z || null === (o = N.Z.window) || void 0 === o || o.close(null === N.Z || void 0 === N.Z ? void 0 : null === (s = N.Z.globalOverlay) || void 0 === s ? void 0 : s.WINDOW_KEY)
  }
  return W = e, null !== (a = await (null === N.Z || void 0 === N.Z ? void 0 : null === (n = N.Z.window) || void 0 === n ? void 0 : n.getNativeHandle(null === N.Z || void 0 === N.Z ? void 0 : null === (t = N.Z.globalOverlay) || void 0 === t ? void 0 : t.WINDOW_KEY))) && void 0 !== a ? a : ""
}

function ed() {
  var e, t;
  null === N.Z || void 0 === N.Z || null === (t = N.Z.window) || void 0 === t || t.close(null === N.Z || void 0 === N.Z ? void 0 : null === (e = N.Z.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY), W = null
}

function ec(e) {
  let t = M.Z.getGameForPID(e);
  S.Z.setAssociatedGame(null != W ? W : -1, e, t)
}
let eE = (() => {
  let e = null;
  async function t() {
    if (!k.iP || !(0, G.VS)()) throw J.error("Attempted to load out of process overlay on an unsupported platform."), Error("Out of Process Overlay is not supported on this platform.");
    try {
      var e, t;
      let {
        OutOfProcess: n
      } = await eu();
      return null == n || null === (e = n.init) || void 0 === e || e.call(n), n.setClickZoneCallback(eR), n.setHostWindowCallbacks(e_, ed, ec), n.setFocusCallback(eh), null === (t = n.setSuccessfullyShownCallback) || void 0 === t || t.call(n, eS), n
    } catch (e) {
      throw J.error("failed loading out of process overlay", e), e
    }
  }
  return () => (null == e && (e = t()), e)
})();

function eI() {
  return ea({
    added: R.ZP.getRunningGames(),
    removed: []
  })
}
let eT = et("setOverlayEnabled", async (e, t) => {
  if (!k.iP || H === e && F === t) return;
  H = e, F = t, C.v.update({
    enabled: e,
    legacyEnabled: t
  }), eM.emitChange();
  let n = await eu(),
    {
      OutOfProcess: i
    } = n;
  (0, G.vR)(null != i), await eo(void 0), await ei(n), H && eI()
});

function eh(e) {
  if (0 === e) {
    var t, n;
    if ((null !== (n = null === (t = B[null != j ? j : 0]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : k.gl.Disabled) === k.gl.OutOfProcess) return
  }
  S.Z.setFocusedPID(0 === e ? null : e)
}

function eS(e) {
  S.Z.successfullyShown(e)
}

function ef(e, t, n) {
  var i;
  let r = null === (i = R.ZP.getGameForPID(e)) || void 0 === i ? void 0 : i.name,
    s = v.Z.getGameByName(r),
    o = {
      game_name: r,
      game_id: null == s ? null : s.id,
      success: t,
      ...n
    };
  (0, h.te)(G.qU, D.Z.getDefaultLayout(G.qU), {
    width: n.graphics_width,
    height: n.graphics_height
  }), P.default.track(w.rMx.OVERLAY_HOOK_RESULT, o), J.info("Overlay connection to ".concat(e, " ").concat(t ? "succeeded" : "failed"), o), t ? en(e, "CONNECTED", "CONNECTING") : en(e, "CONNECT_FAILED", "CONNECTING")
}

function eN() {
  let e = L.default.getToken(),
    t = L.default.getId();
  if (null != e) m.lW({
    type: w.BmY.DISPATCH,
    pid: null,
    token: null,
    payloads: [{
      type: "UPDATE_TOKEN",
      token: e,
      userId: t
    }]
  })
}
async function eA(e) {
  let t = await eu();
  null != j && j !== G.Js && t.sendCommand(j, {
    message: "intercept_input",
    intercept: !e
  }), (0, G.VS)() && (await eE()).setInteractionEnabled(!e)
}

function em(e) {
  if (e) {
    let t = R.ZP.getVisibleGame(),
      n = null == t ? null : R.ZP.getGameOverlayStatus(t);
    (null == n ? void 0 : n.overlayMethod) === k.gl.OutOfProcess ? eA(e) : setTimeout(() => eA(e), 200)
  } else eA(e)
}
let eO = null;

function eR(e, t, n) {
  S.Z.relayClickZoneClicked(e, t, n)
}
async function eC(e) {
  if (!!(0, G.VS)())(await eE()).setClickZones(e.map(e => ({
    name: e.name,
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  })))
}

function ep(e) {
  return !(q || !V || X.has(e.type)) && ("USER_SETTINGS_PROTO_UPDATE" === e.type && (e = {
    ...e,
    settings: {
      type: e.settings.type,
      proto: (0, g.cv)(e.settings.type, e.settings.proto)
    }
  }), Z.add(e), null == r && (r = setTimeout(eg, 1)), !1)
}

function eg() {
  if (null != r && (clearTimeout(r), r = null), !V) {
    Z.clear();
    return
  }
  Z.size > 0 && (m.lW({
    type: w.BmY.DISPATCH,
    pid: null,
    token: null,
    payloads: Array.from(Z)
  }), Z.clear())
}

function eL(e) {
  return null != e && (0, y.y)(e, K)
}

function ev(e) {
  switch (0, e.type) {
    case w.BmY.CONNECT:
      let t = L.default.getToken();
      if (null == t) break;
      (0, h.te)(G.qU, D.Z.getDefaultLayout(G.qU)), Promise.all([(0, p.Z)(t, e.pid), c.ZP.PersistedStore.getAllStates()]).then(t => {
        let [n, i] = t, {
          pid: r,
          token: s
        } = e;
        m.lW({
          type: w.BmY.STORAGE_SYNC,
          pid: r,
          token: s,
          states: i
        }), m.lW({
          type: w.BmY.DISPATCH,
          pid: r,
          token: s,
          payloads: [n]
        }), en(r, "READY"), S.Z.overlayReady(r)
      });
      break;
    case w.BmY.DISPATCH:
      if (null != e.payloads) {
        var n;
        n = e.payloads, q = !0, n.forEach(e => E.Z.dispatch(e)), q = !1
      }
      break;
    case w.BmY.LOG_MESSAGES:
      J.info("[overlay data received]", e.payload)
  }
}
class eD extends(o = c.ZP.Store) {
  initialize() {
    if (!(!k.iP || __OVERLAY__)) this.waitFor(R.ZP, L.default), m.sr(ev, eL), L.default.addChangeListener(eN), eT(C.v.enabled, C.v.legacyEnabled), E.Z.addInterceptor(ep)
  }
  isInputLocked(e) {
    return !z.has(e)
  }
  isSupported() {
    return k.iP
  }
  get enabled() {
    return H
  }
  get legacyEnabled() {
    return F
  }
  getFocusedPID() {
    return j
  }
  isReady(e) {
    return "READY" === x.get(e)
  }
  isCrashed(e) {
    return "CRASHED" === x.get(e)
  }
}
_ = "OverlayBridgeStore", (u = "displayName") in(l = eD) ? Object.defineProperty(l, u, {
  value: _,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[u] = _;
let eM = new eD(E.Z, __OVERLAY__ ? {
  OVERLAY_RELAY_CLICK_ZONE_CLICKED: function(e) {
    let {
      normalizedMouseX: t,
      normalizedMouseY: n
    } = e;
    setTimeout(() => {
      let e = Math.ceil(t * window.innerWidth),
        i = Math.ceil(n * window.innerHeight),
        r = (0, U.B)("click", e, i);
      (0, U.J)(r, e, i)
    }, 50)
  },
  OVERLAY_SET_ASSOCIATED_GAME: function(e) {
    if (!(0, G.W2)()) return;
    (0, G.tB)(e.associatedGamePID);
    let t = () => new Promise(e => {
        requestAnimationFrame(() => {
          let t = new MessageChannel;
          t.port1.onmessage = () => {
            e()
          }, t.port2.postMessage(void 0)
        })
      }),
      n = 0,
      i = () => {
        15 === n ? S.Z.notifyReadyToShow(e.associatedGamePID) : (n += 1, t().then(i))
      };
    i()
  }
} : {
  CONNECTION_OPEN: function() {
    Y = !0, eI()
  },
  CONNECTION_CLOSED: function() {
    Y = !1, j = null, ea(void 0)
  },
  OVERLAY_SET_ENABLED: function(e) {
    let {
      enabled: t,
      legacyEnabled: n
    } = e;
    return eT(t, n), !1
  },
  OVERLAY_FOCUSED: function(e) {
    let {
      pid: t
    } = e;
    j = t
  },
  RUNNING_GAMES_CHANGE: function(e) {
    ea(e)
  },
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t,
      pid: n
    } = e, i = x.get(n);
    if (!t && !("READY" === i || "CRASHED" === i)) return;
    if (t ? z.delete(n) : z.add(n), Q.clear(), null == eO || (clearTimeout(eO), eO = null, !t)) t ? em(t) : eO = setTimeout(() => {
      em(t), eO = null
    }, 100)
  },
  OVERLAY_ACTIVATE_REGION: function(e) {
    let {
      region: t
    } = e;
    Q.add(t), em(!1)
  },
  OVERLAY_DEACTIVATE_ALL_REGIONS: function() {
    Q.clear(), em(!0)
  },
  RPC_SERVER_READY: function(e) {
    let {
      port: t
    } = e;
    K = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let n = new URLSearchParams;
    n.append("build_id", "9283f9b7a252d846abe586077fec1f53ede07e8c"), n.append("rpc", String(t)), n.append("rpc_auth_token", K), i = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(n.toString())
  },
  OVERLAY_CALL_PRIVATE_CHANNEL: function(e) {
    let {
      channelId: t,
      ring: n
    } = e;
    setImmediate(() => {
      f.default.selectPrivateChannel(t), I.Z.call(t, !1, !!n)
    })
  },
  OVERLAY_JOIN_GAME: function(e) {
    let {
      userId: t,
      sessionId: n,
      applicationId: i,
      channelId: r,
      messageId: s
    } = e;
    setImmediate(() => {
      T.Z.join({
        userId: t,
        sessionId: n,
        applicationId: i,
        channelId: r,
        messageId: s
      }), null != j && S.Z.setLocked(!0, j)
    })
  },
  OVERLAY_CRASHED: function(e) {
    let {
      pid: t
    } = e;
    en(t, "CRASHED")
  },
  RUNNING_GAME_TOGGLE_OVERLAY: function(e) {
    if (J.verbose("handleGameToggleOverlay", e), !("pid" in e.game)) {
      J.verbose("handleGameToggleOverlay: Game was not a RunningGame.", e);
      return
    }
    let t = [e.game];
    ea({
      added: e.newEnabledValue ? t : [],
      removed: e.newEnabledValue ? [] : t
    })
  },
  OVERLAY_SET_CLICK_ZONES: function(e) {
    let {
      zones: t
    } = e;
    eC(t)
  },
  OVERLAY_SET_ASSOCIATED_GAME: function(e) {
    var t, n;
    if ((null !== (n = null === (t = B[e.previousAssociatedGamePID]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : k.gl.Disabled) !== k.gl.OutOfProcess) return;
    let i = x.get(e.previousAssociatedGamePID);
    null != i && (x.delete(e.previousAssociatedGamePID), x.set(e.associatedGamePID, i)), z.delete(e.previousAssociatedGamePID), W = e.associatedGamePID
  },
  OVERLAY_NOTIFY_READY_TO_SHOW: function(e) {
    eE().then(t => {
      null == t || t.readyToShow(e.pid)
    })
  }
});
t.Z = eM