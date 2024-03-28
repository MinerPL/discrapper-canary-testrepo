"use strict";
n.r(t);
var a = n("392711"),
  s = n.n(a),
  l = n("570140"),
  i = n("755264"),
  r = n("315341"),
  o = n("262847"),
  u = n("675478"),
  d = n("581883"),
  c = n("526761");

function f() {
  let e = d.default.getFullState(),
    t = e[c.UserSettingsTypes.PRELOADED_USER_SETTINGS];
  t.editInfo.triggeredMigrations && u.PreloadedUserSettingsActionCreators.markDirtyFromMigration(t.proto, t.editInfo.cleanupFuncs), s().forEach(u.UserSettingsActionCreatorsByType, (t, n) => {
    let a = e[Number(n)];
    null != a.editInfo.offlineEditDataVersion && null != a.editInfo.protoToSave && t.scheduleSaveFromOfflineEdit()
  })
}

function E(e) {
  let {
    settings: {
      proto: t,
      type: n
    },
    delaySeconds: a,
    jitter: s
  } = e;
  (0, u.UserSettingsActionCreatorsByType)[n].markDirty(t, {
    delaySeconds: a,
    jitter: s
  })
}

function h(e) {
  let {
    settingsType: t
  } = e;
  (0, u.UserSettingsActionCreatorsByType)[t].loadIfNecessary()
}

function _(e) {
  let {
    state: t
  } = e;
  ("inactive" === t || "background" === t) && s().forEach(u.UserSettingsActionCreatorsByType, (e, t) => {
    null != d.default.getFullState()[Number(t)].editInfo.timeout && (e.logger.log("Triggering persistChanges due to AppStateUpdate"), e.persistChanges())
  })
}
t.default = {
  init() {
    o.default[c.UserSettingsTypes.PRELOADED_USER_SETTINGS] = r.default, o.default[c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS] = i.default, l.default.subscribe("CONNECTION_OPEN", f), l.default.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", E), l.default.subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", h), l.default.subscribe("APP_STATE_UPDATE", _)
  }
}