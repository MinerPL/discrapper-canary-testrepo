var i = n(392711),
  a = n.n(i),
  s = n(570140),
  r = n(755264),
  l = n(315341),
  o = n(262847),
  c = n(675478),
  d = n(581883),
  u = n(526761);

function _() {
  let e = d.Z.getFullState(),
t = e[u.yP.PRELOADED_USER_SETTINGS];
  t.editInfo.triggeredMigrations && c.hW.markDirtyFromMigration(t.proto, t.editInfo.cleanupFuncs), a().forEach(c.aj, (t, n) => {
let i = e[Number(n)];
null != i.editInfo.offlineEditDataVersion && null != i.editInfo.protoToSave && t.scheduleSaveFromOfflineEdit();
  });
}

function h(e) {
  let {
settings: {
  proto: t,
  type: n
},
delaySeconds: i,
jitter: a
  } = e;
  c.aj[n].markDirty(t, {
delaySeconds: i,
jitter: a
  });
}

function E(e) {
  let {
settingsType: t
  } = e;
  c.aj[t].loadIfNecessary();
}

function I(e) {
  let {
state: t
  } = e;
  ('inactive' === t || 'background' === t) && a().forEach(c.aj, (e, t) => {
null != d.Z.getFullState()[Number(t)].editInfo.timeout && (e.logger.log('Triggering persistChanges due to AppStateUpdate'), e.persistChanges());
  });
}
t.Z = {
  init() {
o.Z[u.yP.PRELOADED_USER_SETTINGS] = l.Z, o.Z[u.yP.FRECENCY_AND_FAVORITES_SETTINGS] = r.Z, s.Z.subscribe('CONNECTION_OPEN', _), s.Z.subscribe('USER_SETTINGS_PROTO_ENQUEUE_UPDATE', h), s.Z.subscribe('USER_SETTINGS_PROTO_LOAD_IF_NECESSARY', E), s.Z.subscribe('APP_STATE_UPDATE', I);
  }
};