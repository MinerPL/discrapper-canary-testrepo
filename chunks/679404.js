"use strict";
E.r(_), E.d(_, {
  default: function() {
    return m
  }
}), E("424973"), E("222007");
var t = E("917351"),
  o = E.n(t),
  n = E("713349"),
  r = E("95410"),
  i = E("689988"),
  a = E("342564"),
  I = E("605393"),
  s = E("385976"),
  T = E("469607"),
  S = E("865372"),
  N = E("319781"),
  O = E("872173"),
  A = E("374363"),
  R = E("116949"),
  l = E("397336");
let L = "lastFrecencySavedTime",
  u = 3e5 * Math.random(),
  C = 864e5 + Math.floor(36e5 * Math.random()),
  D = null,
  c = Date.now();
class d extends i.default {
  _initialize() {
    O.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
      hasChanges: () => !1,
      processProto: () => {
        P(!0)
      }
    }), O.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
      hasChanges: () => S.default.hasPendingUsage() && A.default.hasLoaded(l.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!S.default.hasPendingUsage()) A.default.hasLoaded(l.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.stickerFrecency = n.StickerFrecency.create(), e.stickerFrecency.stickers = (0, R.serializeUsageHistory)(S.default.stickerFrecencyWithoutFetchingLatest.usageHistory, 100))
      }
    }), O.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
      hasChanges: () => s.default.hasPendingUsage() && A.default.hasLoaded(l.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!s.default.hasPendingUsage()) A.default.hasLoaded(l.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.emojiFrecency = n.EmojiFrecency.create(), e.emojiFrecency.emojis = (0, R.serializeUsageHistory)(s.default.emojiFrecencyWithoutFetchingLatest.usageHistory, 100))
      }
    }), O.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
      hasChanges: () => T.default.hasPendingUsage() && A.default.hasLoaded(l.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!T.default.hasPendingUsage()) A.default.hasLoaded(l.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && !o.isEmpty(T.default.playedSoundHistory) && (e.playedSoundFrecency = n.PlayedSoundFrecency.create(), e.playedSoundFrecency.playedSounds = (0, R.serializeUsageHistory)(T.default.playedSoundHistory, 100))
      }
    }), O.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
      hasChanges: () => a.default.hasPendingUsage() && A.default.hasLoaded(l.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!a.default.hasPendingUsage()) A.default.hasLoaded(l.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationCommandFrecency = n.ApplicationCommandFrecency.create(), e.applicationCommandFrecency.applicationCommands = (0, R.serializeUsageHistory)(a.default.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500))
      }
    }), O.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
      hasChanges: () => I.default.hasPendingUsage() && A.default.hasLoaded(l.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!I.default.hasPendingUsage()) A.default.hasLoaded(l.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationFrecency = n.ApplicationFrecency.create(), e.applicationFrecency.applications = (0, R.serializeUsageHistory)(I.default.getApplicationFrecencyWithoutLoadingLatest().usageHistory, I.FREQUENCY_ITEM_LIMIT))
      }
    }), O.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
      hasChanges: () => N.default.hasPendingUsage() && A.default.hasLoaded(l.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!N.default.hasPendingUsage()) A.default.hasLoaded(l.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.guildAndChannelFrecency = n.GuildAndChannelFrecency.create(), e.guildAndChannelFrecency.guildAndChannels = (0, R.serializeUsageHistory)(N.default.frecencyWithoutFetchingLatest.usageHistory, N.MAX_NUM_SELECTED_ITEMS))
      }
    })
  }
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: U,
      CONNECTION_RESUMED: U,
      CONNECTION_CLOSED: M
    }
  }
}

function U() {
  var e;
  c = null !== (e = r.default.get(L)) && void 0 !== e ? e : Date.now(), P(!1)
}

function M() {
  clearTimeout(D), D = null
}
async function h() {
  c = Date.now(), P(!0), !A.default.hasLoaded(l.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (S.default.hasPendingUsage() || s.default.hasPendingUsage() || a.default.hasPendingUsage() || I.default.hasPendingUsage() || N.default.hasPendingUsage()) && await O.FrecencyUserSettingsActionCreators.loadIfNecessary(), o.forEach(O.UserSettingsActionCreatorsByType, e => {
    e.markDirtyIfHasPendingChange()
  })
}

function P(e) {
  e && (c = Date.now(), r.default.set(L, c)), null != D && clearTimeout(D);
  let _ = Date.now() - c;
  D = setTimeout(h, Math.max(u, C - _))
}
var m = new d