n(47120);
var r = n(735250),
    i = n(470079),
    a = n(392711),
    s = n.n(a),
    o = n(818405),
    l = n(587158),
    u = n(286379),
    c = n(442837),
    d = n(481060),
    _ = n(386506),
    E = n(304761),
    f = n(865427),
    h = n(406128),
    p = n(25779),
    I = n(797614),
    m = n(703656),
    T = n(626135),
    S = n(960048),
    g = n(998502),
    A = n(981631),
    N = n(689938),
    O = n(831547);
function R(e, t, n) {
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
function v() {
    let [e, t] = i.useState(!1);
    if (
        null ==
        (0, c.e7)([E.C], () => {
            var e;
            return (0, f.fD)() ? (null === (e = E.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        })
    )
        return null;
    let n = async () => {
        try {
            t(!0), await (0, _.bF)(), window.location.reload(!0);
        } catch (e) {
            t(!1);
        }
    };
    return (0, r.jsx)(d.Button, {
        size: d.ButtonSizes.LARGE,
        onClick: n,
        submitting: e,
        className: O.clearOverrideButton,
        children: N.Z.Messages.CLEAR_BUILD_OVERRIDE
    });
}
let C = s().throttle(
    (e) => {
        I.Z.increment(
            {
                name: u.V.APP_CRASHED,
                tags: ['reason:'.concat(o.v.UNHANDLED_JS_ERROR), 'level:'.concat(l.c.FATAL), 'modded_client:'.concat(e)]
            },
            !0
        );
    },
    100,
    { trailing: !1 }
);
class y extends i.PureComponent {
    componentDidCatch(e, t) {
        this.triggerSoftCrash(e, t);
    }
    triggerSoftCrash(e, t) {
        let n = (0, m.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let r = (0, p.e)(),
            i = S.Z.captureCrash(e, { extra: t });
        T.default.track(A.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            uses_client_mods: r,
            error_level: 'fatal'
        }),
            C(r),
            g.ZP.cleanupDisplaySleep();
    }
    _handleSubmitReport() {
        location.reload(!0);
    }
    componentDidMount() {
        null == window.DiscordErrors &&
            ((window.DiscordErrors = {
                softCrash: (e) => {
                    this.triggerSoftCrash(e);
                }
            }),
            (this.discordErrorsSet = !0));
    }
    componentWillUnmount() {
        this.discordErrorsSet && ((window.DiscordErrors = null), (this.discordErrorsSet = !1));
    }
    render() {
        let { children: e, renderCustomMessage: t } = this.props;
        if (null !== this.state.error) {
            let e = (0, r.jsxs)('div', {
                    children: [(0, r.jsx)('p', { children: N.Z.Messages.ERRORS_UNEXPECTED_CRASH }), (0, r.jsx)('p', { children: N.Z.Messages.ERRORS_ACTION_TO_TAKE })]
                }),
                n = (0, r.jsxs)('div', {
                    className: O.buttons,
                    children: [
                        (0, r.jsx)(d.Button, {
                            size: d.ButtonSizes.LARGE,
                            onClick: this._handleSubmitReport,
                            children: N.Z.Messages.ERRORS_RELOAD
                        }),
                        (0, r.jsx)(v, {})
                    ]
                });
            return (0, r.jsx)(h.Z, {
                title: N.Z.Messages.UNSUPPORTED_BROWSER_TITLE,
                note: null != t ? t() : e,
                action: n,
                className: O.errorPage
            });
        }
        return e;
    }
    constructor(...e) {
        super(...e),
            R(this, 'state', {
                error: null,
                info: null
            }),
            R(this, 'discordErrorsSet', !1);
    }
}
t.Z = y;
