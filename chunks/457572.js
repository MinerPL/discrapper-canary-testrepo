n(47120);
var r = n(570140),
    i = n(147913),
    a = n(70956),
    s = n(768943),
    o = n(121254);
function l(e, t, n) {
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
let u = null;
function c() {
    var e;
    let { enabled: t } = o.Z.getCurrentConfig({ location: 'MessageRemindersNotificationManager' }, { autoTrackExposure: !1 });
    if (!t) return;
    null != u && clearTimeout(u);
    let n = s.Z.getMessageReminders().find((e) => null != e.saveData.dueAt && e.saveData.dueAt > new Date());
    if ((null == n ? void 0 : null === (e = n.saveData) || void 0 === e ? void 0 : e.dueAt) == null) {
        u = null;
        return;
    }
    let i = Date.now() + a.Z.Millis.WEEK;
    if (!(n.saveData.dueAt.getTime() > i))
        u = setTimeout(
            () =>
                (function (e) {
                    let { enabled: t } = o.Z.getCurrentConfig({ location: 'MessageRemindersNotificationManager' }, { autoTrackExposure: !1 });
                    if (!!t)
                        r.Z.dispatch({
                            type: 'MESSAGE_REMINDER_DUE',
                            savedMessage: e
                        }),
                            c();
                })(n),
            n.saveData.dueAt.getTime() - Date.now()
        );
}
class d extends i.Z {
    constructor(...e) {
        super(...e),
            l(this, 'actions', {
                SAVED_MESSAGES_UPDATE: () => this.handleUpdates(),
                SAVED_MESSAGE_CREATE: () => this.handleUpdates(),
                SAVED_MESSAGE_DELETE: () => this.handleUpdates()
            }),
            l(this, 'handleUpdates', () => {
                c();
            });
    }
}
t.Z = new d();
