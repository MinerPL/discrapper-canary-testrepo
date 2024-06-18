"use strict";
n(47120);
var i = n(147913),
  r = n(70956),
  s = n(272008),
  o = n(569984),
  a = n(977156),
  l = n(46140);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = r.Z.Millis.DAY,
  d = 30 * r.Z.Millis.MINUTE,
  c = 5 * r.Z.Millis.SECOND,
  E = 5 * r.Z.Millis.MINUTE,
  I = 12 * r.Z.Millis.HOUR;
class T extends i.Z {
  _fetch() {
    if (!!(0, a.cB)({
        location: l.dr.QUESTS_MANAGER
      }) && !o.Z.isFetchingCurrentQuests)(0, s.xw)()
  }
  constructor(...e) {
    super(...e), u(this, "instantiatedAt", Date.now()), u(this, "initialFetchTimerId", null), u(this, "recurringFetchTimerId", null), u(this, "lastFetchAttemptedAt", 0), u(this, "lastFetchedQuestForLocaleChangeAt", 0), u(this, "handleQuestsFetchCurrentQuestsBegin", () => {
      this.lastFetchAttemptedAt = Date.now()
    }), u(this, "handlePostConnectionOpen", () => {
      window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), this.recurringFetchTimerId = window.setInterval(() => {
        Date.now() - this.lastFetchAttemptedAt > _ && (this.lastFetchAttemptedAt = Date.now(), this._fetch())
      }, d), this.initialFetchTimerId = window.setTimeout(() => {
        0 === o.Z.lastFetchedCurrentQuests && this._fetch()
      }, Math.floor(Math.random() * c))
    }), u(this, "handleRunningGamesChange", () => {
      if (!(this.instantiatedAt + I > Date.now() || o.Z.lastFetchedCurrentQuests + I > Date.now())) this._fetch()
    }), u(this, "handleUserSettingsProtoUpdate", e => {
      let {
        partial: t,
        settings: n,
        wasSaved: i
      } = e;
      if (!(!("localization" in n.proto) || !t || i || Date.now() - this.lastFetchedQuestForLocaleChangeAt <= E)) this.lastFetchedQuestForLocaleChangeAt = Date.now(), this._fetch()
    }), u(this, "handleLogout", () => {
      window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), this.lastFetchAttemptedAt = 0, this.lastFetchedQuestForLocaleChangeAt = 0
    }), u(this, "actions", {
      QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
      LOGOUT: this.handleLogout
    })
  }
}
t.Z = new T