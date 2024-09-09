n.r(t),
    n.d(t, {
        default: function () {
            return f;
        }
    }),
    n(47120);
var r = n(735250),
    a = n(470079),
    i = n(481060),
    c = n(585483),
    o = n(637538),
    s = n(747387),
    p = n(981631),
    d = n(689938),
    l = n(383654),
    h = n(480781);
let u = new Set([i.ModalTransitionState.ENTERING, i.ModalTransitionState.ENTERED]);
function f(e) {
    let { onClose: t, onCaptchaVerify: n, onReject: f, transitionState: v, headerText: m, bodyText: C, rqtoken: y, serveInvisible: E, ...b } = e,
        _ = (0, o.Z)(f);
    return (a.useEffect(() => {
        c.S.subscribe(p.CkL.LAYER_POP_ESCAPE_KEY, t);
    }, [t]),
    null != v && u.has(v))
        ? (0, r.jsx)(i.ModalRoot, {
              transitionState: v,
              'aria-label': 'CAPTCHA',
              className: l.modal,
              children: (0, r.jsxs)(i.ModalContent, {
                  className: l.container,
                  children: [
                      (0, r.jsx)(i.ModalCloseButton, {
                          className: l.close,
                          onClick: t
                      }),
                      (0, r.jsx)('div', {
                          className: l.content,
                          children:
                              v !== i.ModalTransitionState.ENTERED
                                  ? (0, r.jsx)(i.Spinner, { type: i.Spinner.Type.SPINNING_CIRCLE })
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)('div', {
                                                children: (0, r.jsx)('img', {
                                                    src: h,
                                                    alt: ''
                                                })
                                            }),
                                            (0, r.jsx)('div', {
                                                className: l.title,
                                                'aria-hidden': !0,
                                                children: null != m ? m : d.Z.Messages.GENERIC_CAPTCHA_HEADER
                                            }),
                                            (0, r.jsx)('div', { children: null != C ? C : d.Z.Messages.GENERIC_CAPTCHA_DESCRIPTION }),
                                            (0, r.jsxs)('div', {
                                                className: l.captchaContainer,
                                                children: [
                                                    E && (0, r.jsx)(i.Spinner, { type: i.Spinner.Type.SPINNING_CIRCLE }),
                                                    (0, r.jsx)(s.Z, {
                                                        size: E ? 'invisible' : void 0,
                                                        onVerify: (e) => {
                                                            _(), n(e, y), t();
                                                        },
                                                        onClose: E ? t : void 0,
                                                        ...b
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                      })
                  ]
              })
          })
        : null;
}
