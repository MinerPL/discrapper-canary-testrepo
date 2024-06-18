"use strict";
n(653041), n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(377108),
  o = n(433517),
  a = n(147913),
  l = n(654455),
  u = n(822245),
  _ = n(339085),
  d = n(178106),
  c = n(822179),
  E = n(580005),
  I = n(70956),
  T = n(675478),
  h = n(581883),
  S = n(48481),
  f = n(526761);
let N = "lastFrecencySavedTime",
  A = Math.random() * (5 * I.Z.Millis.MINUTE),
  m = 1 * I.Z.Millis.DAY + Math.floor(Math.random() * (1 * I.Z.Millis.HOUR)),
  O = null,
  R = Date.now();
class C extends a.Z {
  _initialize() {
    T.DZ.beforeSendCallbacks.push({
      hasChanges: () => !1,
      processProto: () => {
        v(!0)
      }
    }), T.DZ.beforeSendCallbacks.push({
      hasChanges: () => c.Z.hasPendingUsage() && h.Z.hasLoaded(f.yP.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!c.Z.hasPendingUsage()) h.Z.hasLoaded(f.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (e.stickerFrecency = s.ls.create(), e.stickerFrecency.stickers = (0, S.tU)(c.Z.stickerFrecencyWithoutFetchingLatest.usageHistory, 100))
      }
    }), T.DZ.beforeSendCallbacks.push({
      hasChanges: () => _.Z.hasPendingUsage() && h.Z.hasLoaded(f.yP.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!_.Z.hasPendingUsage()) h.Z.hasLoaded(f.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (e.emojiFrecency = s.PL.create(), e.emojiFrecency.emojis = (0, S.tU)(_.Z.emojiFrecencyWithoutFetchingLatest.usageHistory, 100))
      }
    }), T.DZ.beforeSendCallbacks.push({
      hasChanges: () => d.Z.hasPendingUsage() && h.Z.hasLoaded(f.yP.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!d.Z.hasPendingUsage()) h.Z.hasLoaded(f.yP.FRECENCY_AND_FAVORITES_SETTINGS) && !r().isEmpty(d.Z.playedSoundHistory) && (e.playedSoundFrecency = s.pL.create(), e.playedSoundFrecency.playedSounds = (0, S.tU)(d.Z.playedSoundHistory, 100))
      }
    }), T.DZ.beforeSendCallbacks.push({
      hasChanges: () => l.ZP.hasPendingUsage() && h.Z.hasLoaded(f.yP.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!l.ZP.hasPendingUsage()) h.Z.hasLoaded(f.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationCommandFrecency = s.YI.create(), e.applicationCommandFrecency.applicationCommands = (0, S.tU)(l.ZP.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500))
      }
    }), T.DZ.beforeSendCallbacks.push({
      hasChanges: () => u.Z.hasPendingUsage() && h.Z.hasLoaded(f.yP.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!u.Z.hasPendingUsage()) h.Z.hasLoaded(f.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationFrecency = s.UY.create(), e.applicationFrecency.applications = (0, S.tU)(u.Z.getApplicationFrecencyWithoutLoadingLatest().usageHistory, u.y))
      }
    }), T.DZ.beforeSendCallbacks.push({
      hasChanges: () => E.Z.hasPendingUsage() && h.Z.hasLoaded(f.yP.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!E.Z.hasPendingUsage()) h.Z.hasLoaded(f.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (e.guildAndChannelFrecency = s.lG.create(), e.guildAndChannelFrecency.guildAndChannels = (0, S.tU)(E.Z.frecencyWithoutFetchingLatest.usageHistory, E.C))
      }
    })
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: p,
      CONNECTION_RESUMED: p,
      CONNECTION_CLOSED: g
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}

function p() {
  var e;
  R = null !== (e = o.K.get(N)) && void 0 !== e ? e : Date.now(), v(!1)
}

function g() {
  clearTimeout(O), O = null
}
async function L() {
  R = Date.now(), v(!0), !h.Z.hasLoaded(f.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (c.Z.hasPendingUsage() || _.Z.hasPendingUsage() || l.ZP.hasPendingUsage() || u.Z.hasPendingUsage() || E.Z.hasPendingUsage()) && await T.DZ.loadIfNecessary(), r().forEach(T.aj, e => {
    e.markDirtyIfHasPendingChange()
  })
}

function v(e) {
  e && (R = Date.now(), o.K.set(N, R)), null != O && clearTimeout(O), O = setTimeout(L, Math.max(A, m - (Date.now() - R)))
}
t.Z = new C