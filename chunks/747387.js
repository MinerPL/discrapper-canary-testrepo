n(47120);
var r = n(735250),
    a = n(470079),
    i = n(745625),
    c = n(14199),
    o = n(772848),
    s = n(286379),
    p = n(343817),
    d = n(797614),
    l = n(626135),
    h = n(109167),
    u = n(353250),
    f = n(981631);
t.Z = (e) => {
    let { captchaService: t = p.hP.RECAPTCHA, sitekey: n, rqdata: v, onRender: m, onVerify: C, onError: y, onOpen: E, onClose: b, onChalExpired: _, size: R, urlPath: x, ...g } = e,
        S = a.useRef(null),
        w = (0, h.H)('captcha'),
        k = (0, o.Z)(),
        [A, I] = a.useState(!1),
        j = a.useCallback(
            (e) => {
                l.default.track(f.rMx.CAPTCHA_EVENT, {
                    captcha_event_name: e,
                    captcha_service: t,
                    sitekey: n,
                    captcha_flow_key: k
                });
            },
            [k, t, n]
        ),
        O = a.useCallback(
            (e) => {
                d.Z.increment({
                    name: s.V.CAPTCHA_EVENT,
                    tags: ['event_name:'.concat(e), 'captcha_service:'.concat(t)]
                });
            },
            [t]
        ),
        T = a.useCallback(() => {
            var e, t;
            null != v && '' !== v && null != S.current && (null === (e = S.current) || void 0 === e || e.setData({ rqdata: v })), 'invisible' === R && (null === (t = S.current) || void 0 === t || t.execute());
        }, [v, S, R]),
        P = a.useCallback(() => {
            !A && (j('initial-load'), O('initial-load'), I(!0)), T();
        }, [O, A, j, T]);
    a.useEffect(() => {
        T();
    }, [T]),
        a.useEffect(() => {
            P();
        }, [P]);
    let Z = a.useCallback(() => {
            j('error'), O('error'), T(), null == y || y();
        }, [j, O, T, y]),
        N = a.useCallback(
            (e) => {
                j('verify'), O('verify'), C(e);
            },
            [O, C, j]
        ),
        L = a.useCallback(() => {
            j('render'), (0, u.emitCaptchaDistributionMetric)(w, x), null == m || m();
        }, [w, m, j, x]),
        V = a.useCallback(() => {
            j('open'), O('open'), (0, u.emitCaptchaDistributionMetric)(w, x), null == E || E();
        }, [O, w, E, j, x]),
        D = a.useCallback(() => {
            j('close'), null == b || b(), T();
        }, [b, j, T]),
        M = a.useCallback(() => {
            j('chal-expire'), null == _ || _();
        }, [_, j]);
    return ((null == n || '' === n) && (n = f.OL7), t === p.hP.RECAPTCHA)
        ? (0, r.jsx)(c.Z, {
              ...g,
              onLoad: P,
              onRender: L,
              onVerify: N,
              onError: Z,
              sitekey: n
          })
        : t === p.hP.HCAPTCHA
          ? (0, r.jsx)(i.Z, {
                ref: S,
                ...g,
                sitekey: n,
                onLoad: P,
                onError: Z,
                onVerify: N,
                onChalExpired: M,
                onOpen: V,
                onClose: D,
                size: R
            })
          : (0, r.jsx)(c.Z, {
                ...g,
                sitekey: n,
                onLoad: P,
                onRender: L,
                onVerify: N,
                onError: Z
            });
};
