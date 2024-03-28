"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("653041");
var s = n("544891"),
  a = n("433517"),
  l = n("570140"),
  i = n("865427"),
  r = n("710845"),
  o = n("70956"),
  u = n("358085"),
  d = n("960048"),
  c = n("998502");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = 1 * o.default.Millis.HOUR,
  _ = 7 * o.default.Millis.DAY,
  T = 1 * o.default.Millis.DAY,
  m = a.Storage.get("lastNonRequiredUpdateShown", Date.now()),
  I = new r.default("AutoUpdateManager");
class p {
  destroy() {
    clearInterval(this._checkInterval)
  }
  quitAndInstall() {
    this.updateAvailable && (this.hasNativeUpdate ? null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : c.default.send("QUIT_AND_INSTALL") : location.reload(!0))
  }
  async _requestNewUpdaterBootstrap() {
    let e;
    I.log("Bootstrapping new updater host...");
    try {
      await c.default.ensureModule("discord_updater_bootstrap"), e = c.default.requireModule("discord_updater_bootstrap"), this._bootstrapper = e
    } catch (e) {
      this._handleNativeUpdateNotAvailable();
      return
    }
    try {
      this._handleCheckingForUpdates(), await e.bootstrap(c.default.releaseChannel, "win"), this.updateAvailable = !0, this.hasNativeUpdate = !0, this._handleUpdateDownloaded(!0)
    } catch (e) {
      I.log("Failed to bootstrap new updater:", e), this._handleNativeUpdateNotAvailable(), d.default.captureException(e)
    }
  }
  _emitCallbacks() {
    this._callbacks.forEach(e => e(this.updateAvailable)), this._callbacks = []
  }
  constructor(e = E) {
    var t = this;
    f(this, "updateAvailable", !1), f(this, "hasNativeUpdate", !1), f(this, "_checkInterval", void 0), f(this, "_callbacks", []), f(this, "_bootstrapper", null), f(this, "checkForUpdates", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return (e || !t.hasNativeUpdate) && (u.isPlatformEmbedded ? "win32" === (0, u.getPlatformName)() && c.default.canBootstrapNewUpdater ? t._requestNewUpdaterBootstrap() : c.default.send("CHECK_FOR_UPDATES") : t._handleNativeUpdateNotAvailable()), new Promise(e => {
        t.updateAvailable ? e(!0) : t._callbacks.push(e)
      })
    }), f(this, "_handleCheckingForUpdates", () => {
      l.default.dispatch({
        type: "CHECKING_FOR_UPDATES"
      })
    }), f(this, "_handleNativeUpdateNotAvailable", () => {
      this._handleCheckingForUpdates(), s.HTTP.get({
        url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
        query: {
          _: Date.now() / 1e3 / 60 / 5 | 0
        },
        oldFormErrors: !0
      }).then(e => {
        if (null == e.body || "0e6229f96f388a45d0ea4b965761b0728c44542b" === e.body.hash) return this._handleUpdateNotAvailable();
        if (e.body.required || (0, i.probablyHasBuildOverride)()) return this._handleUpdateDownloaded(!1);
        let t = "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL ? _ : T;
        if (Date.now() - m > t) return a.Storage.set("lastNonRequiredUpdateShown", Date.now()), this._handleUpdateDownloaded(!1)
      }, () => this._handleUpdateError())
    }), f(this, "_handleUpdateNotAvailable", () => {
      l.default.dispatch({
        type: "UPDATE_NOT_AVAILABLE"
      }), this._emitCallbacks()
    }), f(this, "_handleUpdateAvailable", e => {
      this.updateAvailable = !0, this.hasNativeUpdate = e, l.default.dispatch({
        type: "UPDATE_AVAILABLE"
      })
    }), f(this, "_handleUpdateManually", () => {
      this.updateAvailable = !0, this.hasNativeUpdate = !0, l.default.dispatch({
        type: "UPDATE_MANUALLY"
      })
    }), f(this, "_handleUpdateError", e => {
      this.updateAvailable = !1, l.default.dispatch({
        type: "UPDATE_ERROR",
        message: e
      })
    }), f(this, "_handleUpdateDownloaded", (e, t, n, s, a) => {
      this._handleUpdateAvailable(e), l.default.dispatch({
        type: "UPDATE_DOWNLOADED",
        releaseNotes: t,
        releaseName: n,
        releaseDate: s,
        updateURL: a
      }), this._emitCallbacks()
    }), u.isPlatformEmbedded && (c.default.on("CHECKING_FOR_UPDATES", this._handleCheckingForUpdates), c.default.on("UPDATE_NOT_AVAILABLE", this._handleNativeUpdateNotAvailable), c.default.on("UPDATE_AVAILABLE", () => this._handleUpdateAvailable(!0)), c.default.on("UPDATE_ERROR", this._handleUpdateError), c.default.on("UPDATE_DOWNLOADED", () => this._handleUpdateDownloaded(!0)), c.default.on("UPDATE_MANUALLY", this._handleUpdateManually)), l.default.wait(() => {
      this.checkForUpdates()
    }), this._checkInterval = setInterval(this.checkForUpdates, e)
  }
}