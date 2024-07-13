n.d(t, {
  Z: function() {
return N;
  }
}), n(653041);
var i = n(544891),
  a = n(433517),
  s = n(570140),
  r = n(865427),
  l = n(710845),
  o = n(70956),
  c = n(358085),
  d = n(960048),
  u = n(998502);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let E = 1 * o.Z.Millis.HOUR,
  I = 7 * o.Z.Millis.DAY,
  m = 1 * o.Z.Millis.DAY,
  T = a.K.get('lastNonRequiredUpdateShown', Date.now()),
  h = new l.Z('AutoUpdateManager');
class N {
  destroy() {
clearInterval(this._checkInterval);
  }
  quitAndInstall() {
this.updateAvailable && (this.hasNativeUpdate ? null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : u.ZP.send('QUIT_AND_INSTALL') : location.reload(!0));
  }
  async _requestNewUpdaterBootstrap() {
let e;
h.log('Bootstrapping new updater host...');
try {
  await u.ZP.ensureModule('discord_updater_bootstrap'), e = u.ZP.requireModule('discord_updater_bootstrap'), this._bootstrapper = e;
} catch (e) {
  this._handleNativeUpdateNotAvailable();
  return;
}
try {
  this._handleCheckingForUpdates(), await e.bootstrap(u.ZP.releaseChannel, 'win'), this.updateAvailable = !0, this.hasNativeUpdate = !0, this._handleUpdateDownloaded(!0);
} catch (e) {
  h.log('Failed to bootstrap new updater:', e), this._handleNativeUpdateNotAvailable(), d.Z.captureException(e);
}
  }
  _emitCallbacks() {
this._callbacks.forEach(e => e(this.updateAvailable)), this._callbacks = [];
  }
  constructor(e = E) {
var t = this;
_(this, 'updateAvailable', !1), _(this, 'hasNativeUpdate', !1), _(this, '_checkInterval', void 0), _(this, '_callbacks', []), _(this, '_bootstrapper', null), _(this, 'checkForUpdates', function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return (e || !t.hasNativeUpdate) && (c.isPlatformEmbedded ? 'win32' === (0, c.getPlatformName)() && u.ZP.canBootstrapNewUpdater ? t._requestNewUpdaterBootstrap() : u.ZP.send('CHECK_FOR_UPDATES') : t._handleNativeUpdateNotAvailable()), new Promise(e => {
    t.updateAvailable ? e(!0) : t._callbacks.push(e);
  });
}), _(this, '_handleCheckingForUpdates', () => {
  s.Z.dispatch({
    type: 'CHECKING_FOR_UPDATES'
  });
}), _(this, '_handleNativeUpdateNotAvailable', () => {
  this._handleCheckingForUpdates(), i.tn.get({
    url: ''.concat(location.protocol, '//').concat(location.host).concat('/assets/', 'version.').concat(window.GLOBAL_ENV.RELEASE_CHANNEL, '.json'),
    query: {
      _: Date.now() / 1000 / 60 / 5 | 0
    },
    oldFormErrors: !0
  }).then(e => {
    if (null == e.body || '2c1de47a73231628c74c6f23483760a11676c660' === e.body.hash)
      return this._handleUpdateNotAvailable();
    if (e.body.required || (0, r.fD)())
      return this._handleUpdateDownloaded(!1);
    let t = 'stable' === window.GLOBAL_ENV.RELEASE_CHANNEL ? I : m;
    if (Date.now() - T > t)
      return a.K.set('lastNonRequiredUpdateShown', Date.now()), this._handleUpdateDownloaded(!1);
  }, () => this._handleUpdateError());
}), _(this, '_handleUpdateNotAvailable', () => {
  s.Z.dispatch({
    type: 'UPDATE_NOT_AVAILABLE'
  }), this._emitCallbacks();
}), _(this, '_handleUpdateAvailable', e => {
  this.updateAvailable = !0, this.hasNativeUpdate = e, s.Z.dispatch({
    type: 'UPDATE_AVAILABLE'
  });
}), _(this, '_handleUpdateManually', () => {
  this.updateAvailable = !0, this.hasNativeUpdate = !0, s.Z.dispatch({
    type: 'UPDATE_MANUALLY'
  });
}), _(this, '_handleUpdateError', e => {
  this.updateAvailable = !1, s.Z.dispatch({
    type: 'UPDATE_ERROR',
    message: e
  });
}), _(this, '_handleUpdateDownloaded', (e, t, n, i, a) => {
  this._handleUpdateAvailable(e), s.Z.dispatch({
    type: 'UPDATE_DOWNLOADED',
    releaseNotes: t,
    releaseName: n,
    releaseDate: i,
    updateURL: a
  }), this._emitCallbacks();
}), c.isPlatformEmbedded && (u.ZP.on('CHECKING_FOR_UPDATES', this._handleCheckingForUpdates), u.ZP.on('UPDATE_NOT_AVAILABLE', this._handleNativeUpdateNotAvailable), u.ZP.on('UPDATE_AVAILABLE', () => this._handleUpdateAvailable(!0)), u.ZP.on('UPDATE_ERROR', this._handleUpdateError), u.ZP.on('UPDATE_DOWNLOADED', () => this._handleUpdateDownloaded(!0)), u.ZP.on('UPDATE_MANUALLY', this._handleUpdateManually)), s.Z.wait(() => {
  this.checkForUpdates();
}), this._checkInterval = setInterval(this.checkForUpdates, e);
  }
}