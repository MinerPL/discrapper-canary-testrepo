n(47120);
var r = n(200651),
    i = n(192379),
    a = n(894582),
    c = n(29978),
    o = n(772848),
    s = n(286379),
    p = n(343817),
    d = n(797614),
    l = n(626135),
    u = n(109167),
    h = n(353250),
    f = n(599857),
    v = n(981631);
t.Z = (e) => {
    let { captchaService: t = p.hP.RECAPTCHA, sitekey: n, rqdata: m, onRender: y, onVerify: C, onError: E, onOpen: b, onClose: _, onChalExpired: R, size: x, userflow: g, ...w } = e,
        S = i.useRef(null),
        A = (0, u.H)('captcha'),
        k = (0, o.Z)(),
        [I, j] = i.useState(!1),
        O = i.useCallback(
            (e) => {
                l.default.track(v.rMx.CAPTCHA_EVENT, {
                    captcha_event_name: e,
                    captcha_service: t,
                    sitekey: n,
                    captcha_flow_key: k
                });
            },
            [k, t, n]
        ),
        L = i.useCallback(
            (e) => {
                d.Z.increment({
                    name: s.V.CAPTCHA_EVENT,
                    tags: ['event_name:'.concat(e), 'captcha_service:'.concat(t)]
                });
            },
            [t]
        ),
        T = i.useCallback(() => {
            var e, t;
            null != m && '' !== m && null != S.current && (null === (e = S.current) || void 0 === e || e.setData({ rqdata: m })), 'invisible' === x && (null === (t = S.current) || void 0 === t || t.execute());
        }, [m, S, x]),
        P = i.useCallback(() => {
            !I && (O('initial-load'), L('initial-load'), j(!0)), T();
        }, [L, I, O, T]);
    i.useEffect(() => {
        T();
    }, [T]),
        i.useEffect(() => {
            P();
        }, [P]);
    let V = i.useCallback(() => {
            O('error'), L('error'), T(), null == E || E();
        }, [O, L, T, E]),
        N = i.useCallback(
            (e) => {
                O('verify'), L('verify'), C(e);
            },
            [L, C, O]
        ),
        Z = i.useCallback(() => {
            O('render'), (0, h.emitCaptchaDistributionMetric)(A, g), null == y || y();
        }, [A, y, O, g]),
        D = i.useCallback(() => {
            O('open'), L('open'), (0, h.emitCaptchaDistributionMetric)(A, g), null == b || b();
        }, [L, A, b, O, g]),
        M = i.useCallback(() => {
            O('close'), null == _ || _(), T();
        }, [_, O, T]),
        K = i.useCallback(() => {
            O('chal-expire'), null == R || R();
        }, [R, O]);
    return ((null == n || '' === n) && (n = v.OL7), t === p.hP.RECAPTCHA)
        ? (0, r.jsx)(c.Z, {
              ...w,
              onLoad: P,
              onRender: Z,
              onVerify: N,
              onError: V,
              sitekey: n
          })
        : t === p.hP.RECAPTCHA_ENTERPRISE
          ? (0, r.jsx)(f._, {
                ...w,
                onLoad: P,
                onRender: Z,
                onVerify: N,
                onError: V,
                sitekey: n,
                action: g
            })
          : t === p.hP.HCAPTCHA
            ? (0, r.jsx)(a.Z, {
                  ref: S,
                  ...w,
                  sitekey: n,
                  onLoad: P,
                  onError: V,
                  onVerify: N,
                  onChalExpired: K,
                  onOpen: D,
                  onClose: M,
                  size: x
              })
            : (0, r.jsx)(c.Z, {
                  ...w,
                  sitekey: n,
                  onLoad: P,
                  onRender: Z,
                  onVerify: N,
                  onError: V
              });
};
