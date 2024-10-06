n(47120);
var r = n(147913),
    i = n(70956),
    a = n(272008),
    s = n(569984),
    o = n(497505),
    l = n(977156),
    u = n(569743),
    c = n(46140);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = i.Z.Millis.DAY,
    E = 30 * i.Z.Millis.MINUTE,
    f = 5 * i.Z.Millis.SECOND,
    h = 5 * i.Z.Millis.MINUTE,
    p = 12 * i.Z.Millis.HOUR;
class I extends r.Z {
    _fetch() {
        if (!!(0, l.cB)({ location: c.dr.QUESTS_MANAGER }) && !s.Z.isFetchingCurrentQuests) (0, a.xw)(), (0, u.Z)({ location: c.dr.QUESTS_MANAGER }) && (0, a.w)(o.Ok.DESKTOP_ACCOUNT_PANEL_AREA);
    }
    constructor(...e) {
        super(...e),
            d(this, 'instantiatedAt', Date.now()),
            d(this, 'initialFetchTimerId', null),
            d(this, 'recurringFetchTimerId', null),
            d(this, 'lastFetchAttemptedAt', 0),
            d(this, 'lastFetchedQuestForLocaleChangeAt', 0),
            d(this, 'handleQuestsFetchCurrentQuestsBegin', () => {
                this.lastFetchAttemptedAt = Date.now();
            }),
            d(this, 'handlePostConnectionOpen', () => {
                window.clearTimeout(this.initialFetchTimerId),
                    window.clearTimeout(this.recurringFetchTimerId),
                    (this.recurringFetchTimerId = window.setInterval(() => {
                        Date.now() - this.lastFetchAttemptedAt > _ && ((this.lastFetchAttemptedAt = Date.now()), this._fetch());
                    }, E)),
                    (this.initialFetchTimerId = window.setTimeout(
                        () => {
                            0 === s.Z.lastFetchedCurrentQuests && this._fetch();
                        },
                        Math.floor(Math.random() * f)
                    ));
            }),
            d(this, 'handleRunningGamesChange', () => {
                if (!(this.instantiatedAt + p > Date.now() || s.Z.lastFetchedCurrentQuests + p > Date.now())) this._fetch();
            }),
            d(this, 'handleUserSettingsProtoUpdate', (e) => {
                let { partial: t, settings: n, wasSaved: r } = e;
                if (!(!('localization' in n.proto) || !t || r || Date.now() - this.lastFetchedQuestForLocaleChangeAt <= h)) (this.lastFetchedQuestForLocaleChangeAt = Date.now()), this._fetch();
            }),
            d(this, 'handleLogout', () => {
                window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), (this.lastFetchAttemptedAt = 0), (this.lastFetchedQuestForLocaleChangeAt = 0);
            }),
            d(this, 'actions', {
                QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
                LOGOUT: this.handleLogout
            });
    }
}
t.Z = new I();
