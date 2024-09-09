n(47120);
var s = n(544891),
    r = n(570140),
    i = n(893776),
    a = n(899742),
    l = n(743142),
    o = n(117240),
    c = n(626135),
    u = n(317770),
    d = n(981631);
function _(e, t) {
    c.default.track(d.rMx.BROWSER_HANDOFF_SUCCEEDED, {
        authenticated: e,
        handoff_source: t
    });
}
class h extends u.Z {
    _initialize() {
        r.Z.subscribe('BROWSER_HANDOFF_END', this.handleEnd), r.Z.subscribe('BROWSER_HANDOFF_FROM_APP', this.handleHandoff);
    }
    _terminate() {
        r.Z.unsubscribe('BROWSER_HANDOFF_END', this.handleEnd), r.Z.unsubscribe('BROWSER_HANDOFF_FROM_APP', this.handleHandoff);
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: r, handoffSource: o } = e;
        null != n
            ? s.tn
                  .post({
                      url: d.ANM.HANDOFF_EXCHANGE,
                      body: {
                          key: t,
                          handoff_token: n
                      }
                  })
                  .then(
                      (e) => {
                          let { body: t } = e;
                          (0, a.Vb)(t.user), i.Z.loginToken(t.token, !1), _(!0, o);
                      },
                      (e) => {
                          if ((null != r && _(!1, o), i.Z.setFingerprint(r), (0, a.lx)(), o === l.F.ROLE_SUBSCRIPTION)) {
                              var t;
                              c.default.track(d.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: null !== (t = e.message) && void 0 !== t ? t : e.text,
                                  handoff_source: o
                              });
                          }
                      }
                  )
            : null != r
              ? (i.Z.setFingerprint(r), _(!1, o), (0, a.lx)())
              : (i.Z.setFingerprint(r), (0, a.by)());
    }
    constructor(...e) {
        var t, n, s;
        super(...e),
            (t = this),
            (n = 'handleEnd'),
            (s = (e) => {
                let { handoffToken: t, fingerprint: n } = e,
                    s = o.Z.key;
                null != s && o.Z.isHandoffAvailable()
                    ? this.handleHandoff({
                          handoffKey: s,
                          handoffToken: t,
                          fingerprint: n,
                          handoffSource: void 0
                      })
                    : (i.Z.setFingerprint(null), (0, a.by)());
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = s);
    }
}
t.Z = new h();
