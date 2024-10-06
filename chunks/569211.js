n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var i = n(470079),
    s = n(585483),
    a = n(424602),
    l = n(783097),
    r = n(981631);
function o(e) {
    let { obstructedFromView: t, disabled: n } = e,
        o = a._f.getCurrentConfig({ location: 'inAppOAuth2ModalCallback' }, { autoTrackExposure: !1 }),
        [c, u] = i.useState(null),
        d = i.useRef(c);
    d.current = c;
    let h = i.useMemo(() => (null != c ? (0, l.sl)(c) : null), [c]);
    i.useEffect(() => {
        n && u(null);
    }, [n]);
    let p = null != c && !t;
    return (
        i.useEffect(() => {
            if (!p) return;
            let e = setTimeout(() => {
                if (!t) u(null);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }, [t, p]),
        i.useEffect(() => {
            if (t) return;
            let e = (e) => {
                    let { application: t } = e;
                    u(t), (d.current = t);
                },
                n = (e) => {
                    var t;
                    let { applicationId: n } = e;
                    (null === (t = d.current) || void 0 === t ? void 0 : t.id) === n && (u(null), (d.current = null));
                };
            return (
                s.S.subscribe(r.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, e),
                s.S.subscribe(r.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, n),
                () => {
                    s.S.unsubscribe(r.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, e), s.S.unsubscribe(r.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, n);
                }
            );
        }, [t]),
        {
            enabled: o.enabled,
            showsTooltip: o.showsTooltip,
            applicationDetails: h,
            shouldShow: p
        }
    );
}
