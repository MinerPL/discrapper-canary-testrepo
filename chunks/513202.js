n(47120);
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(570140),
    s = n(468026),
    o = n(566620),
    l = n(287545),
    u = n(318891),
    c = n(719296),
    d = n(689938);
class _ extends l.Z {
    showErrorModal(e) {
        let { code: t, message: n } = e;
        (0, i.openModalLazy)(
            async () => (e) =>
                (0, r.jsx)(s.default, {
                    title: d.Z.Messages.EMBEDDED_ACTIVITIES_ERROR_TITLE.format({ code: t }),
                    body: n,
                    ...e
                })
        );
    }
    showLaunchErrorModal(e) {
        (0, i.openModalLazy)(
            async () => (t) =>
                (0, r.jsx)(s.default, {
                    title: d.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                    body: e,
                    ...t
                })
        );
    }
    leaveActivity(e) {
        let { channelId: t, applicationId: n, showFeedback: r } = e;
        a.Z.wait(() => {
            (0, o.mW)({
                channelId: t,
                applicationId: n,
                showFeedback: r
            });
        });
    }
    hidePIPEmbed(e) {
        let { channelId: t, applicationId: n } = e,
            r = (0, c.Z)(t, n);
        (0, u.RI)(r);
    }
    releaseWebView() {}
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'handleRPCDisconnect'),
            (r = (e) => {
                let { reason: t, application: n } = e;
                this.superHandleRPCDisconnect({
                    reason: t,
                    application: n
                });
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new _();
