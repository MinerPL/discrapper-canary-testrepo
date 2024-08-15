n(47120);
var r = n(147913),
  i = n(70956),
  a = n(272008),
  s = n(569984),
  o = n(977156),
  l = n(46140);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let c = i.Z.Millis.DAY,
  d = 30 * i.Z.Millis.MINUTE,
  _ = 5 * i.Z.Millis.SECOND,
  E = 5 * i.Z.Millis.MINUTE,
  f = 12 * i.Z.Millis.HOUR;
class h extends r.Z {
  _fetch() {
if (!!(0, o.cB)({
    location: l.dr.QUESTS_MANAGER
  }) && !s.Z.isFetchingCurrentQuests)
  (0, a.xw)();
  }
  constructor(...e) {
super(...e), u(this, 'instantiatedAt', Date.now()), u(this, 'initialFetchTimerId', null), u(this, 'recurringFetchTimerId', null), u(this, 'lastFetchAttemptedAt', 0), u(this, 'lastFetchedQuestForLocaleChangeAt', 0), u(this, 'handleQuestsFetchCurrentQuestsBegin', () => {
  this.lastFetchAttemptedAt = Date.now();
}), u(this, 'handlePostConnectionOpen', () => {
  window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), this.recurringFetchTimerId = window.setInterval(() => {
    Date.now() - this.lastFetchAttemptedAt > c && (this.lastFetchAttemptedAt = Date.now(), this._fetch());
  }, d), this.initialFetchTimerId = window.setTimeout(() => {
    0 === s.Z.lastFetchedCurrentQuests && this._fetch();
  }, Math.floor(Math.random() * _));
}), u(this, 'handleRunningGamesChange', () => {
  if (!(this.instantiatedAt + f > Date.now() || s.Z.lastFetchedCurrentQuests + f > Date.now()))
    this._fetch();
}), u(this, 'handleUserSettingsProtoUpdate', e => {
  let {
    partial: t,
    settings: n,
    wasSaved: r
  } = e;
  if (!(!('localization' in n.proto) || !t || r || Date.now() - this.lastFetchedQuestForLocaleChangeAt <= E))
    this.lastFetchedQuestForLocaleChangeAt = Date.now(), this._fetch();
}), u(this, 'handleLogout', () => {
  window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), this.lastFetchAttemptedAt = 0, this.lastFetchedQuestForLocaleChangeAt = 0;
}), u(this, 'actions', {
  QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
  POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
  RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
  USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
  LOGOUT: this.handleLogout
});
  }
}
t.Z = new h();