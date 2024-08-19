n(47120);
var r = n(147913),
    i = n(192720),
    a = n(121254),
    s = n(742989);
function o(e, t, n) {
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
class l extends r.Z {
    constructor(...e) {
        super(...e),
            o(this, 'actions', { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() }),
            o(this, 'handlePostConnectionOpen', () => {
                !(function () {
                    if (!!(a.Z.getCurrentConfig({ location: 'saved_messages_manager' }, { autoTrackExposure: !1 }).enabled || s.Z.getCurrentConfig({ location: 'saved_messages_manager' }, { autoTrackExposure: !1 }).showReminders)) (0, i.sE)();
                })();
            });
    }
}
t.Z = new l();
