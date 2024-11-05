n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(411104),
    n(773603);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(990547),
    o = n(481060),
    c = n(479531),
    u = n(388905),
    d = n(585483),
    h = n(573261),
    g = n(720196),
    f = n(981631),
    m = n(388032),
    p = n(340214),
    _ = n(113207);
function x(e) {
    let { setOriginalEmail: t, setSlide: s, ready: x, token: E } = e,
        [v, I] = r.useState(!1),
        [N, b] = r.useState(null),
        [C, S] = r.useState(null),
        [T, A] = r.useState(''),
        Z = r.useRef(null);
    return (
        r.useEffect(() => {
            if (x) {
                var e;
                null === (e = Z.current) || void 0 === e || e.focus();
            }
        }, [x]),
        (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(u.Ee, {
                    src: null == C ? n(26230) : n(935227),
                    className: a()(_.marginBottom20, _.marginTop8)
                }),
                (0, i.jsx)(u.Dx, { children: m.intl.string(m.t['IfBQ5+']) }),
                null != C && '' !== C
                    ? (0, i.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: C
                      })
                    : null,
                (0, i.jsxs)(u.gO, {
                    className: a()(_.marginBottom20, _.marginTop20),
                    children: [
                        (0, i.jsx)(u.II, {
                            name: 'password',
                            type: 'password',
                            label: m.intl.string(m.t['8dM4FB']),
                            setRef: Z,
                            className: _.marginBottom20,
                            value: T,
                            onChange: A,
                            error: N,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: m.intl.string(m.t['yY/PXV'])
                        }),
                        (0, i.jsx)(u.zx, {
                            className: _.marginTop8,
                            onClick: () => {
                                if (!v) {
                                    if (0 === T.length) {
                                        b(m.intl.string(m.t.R98xDw)), d.S.dispatch(f.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != C && S(null),
                                        null != N && b(null),
                                        t(''),
                                        I(!0),
                                        h.Z.post({
                                            url: f.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: E,
                                                password: T
                                            },
                                            trackedActionData: { event: l.NetworkActionNames.ACCOUNT_REVERT }
                                        })
                                            .then((e) => {
                                                let {
                                                    body: { email: n }
                                                } = e;
                                                A(''), t(n), s(g.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) S(m.intl.formatToPlainString(m.t.aTVNen, { statusPageURL: f.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? b(t.getAnyErrorMessage())
                                                        : S(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case f.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return m.intl.string(m.t['11zzGR']);
                                                                      case f.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return m.intl.string(m.t['6qmgaG']);
                                                                      case f.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return m.intl.string(m.t.bChnKi);
                                                                      default:
                                                                          return m.intl.format(m.t.aTVNen, { statusPageURL: f.yXt.STATUS });
                                                                  }
                                                              })(t.code).toString()
                                                          );
                                                }
                                                d.S.dispatch(f.CkL.WAVE_EMPHASIZE);
                                            })
                                            .finally(() => {
                                                I(!1);
                                            })
                                    );
                                }
                            },
                            submitting: v,
                            disabled: v,
                            children: m.intl.string(m.t.ezv91d)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: p.buttonContainer,
                    children: (0, i.jsx)(u.zx, {
                        color: u.zx.Colors.PRIMARY,
                        onClick: () => {
                            A(''), s(g.n.START);
                        },
                        children: m.intl.string(m.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
