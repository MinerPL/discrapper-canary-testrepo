n.r(t),
    n.d(t, {
        default: function () {
            return f;
        }
    }),
    n(47120);
var a = n(735250),
    r = n(470079),
    i = n(481060),
    o = n(585483),
    c = n(637538),
    s = n(747387),
    p = n(981631),
    d = n(689938),
    h = n(383654),
    l = n(480781);
let u = new Set([i.ModalTransitionState.ENTERING, i.ModalTransitionState.ENTERED]);
function f(e) {
    let { onClose: t, onCaptchaVerify: n, onReject: f, transitionState: v, headerText: m, bodyText: y, rqtoken: C, ...E } = e,
        R = (0, c.Z)(f);
    return (r.useEffect(() => {
        o.S.subscribe(p.CkL.LAYER_POP_ESCAPE_KEY, t);
    }, [t]),
    null != v && u.has(v))
        ? (0, a.jsx)(i.ModalRoot, {
              transitionState: v,
              'aria-label': 'CAPTCHA',
              className: h.modal,
              children: (0, a.jsxs)(i.ModalContent, {
                  className: h.container,
                  children: [
                      (0, a.jsx)(i.ModalCloseButton, {
                          className: h.close,
                          onClick: t
                      }),
                      (0, a.jsx)('div', {
                          className: h.content,
                          children:
                              v !== i.ModalTransitionState.ENTERED
                                  ? (0, a.jsx)(i.Spinner, { type: i.Spinner.Type.SPINNING_CIRCLE })
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)('div', {
                                                children: (0, a.jsx)('img', {
                                                    src: l,
                                                    alt: ''
                                                })
                                            }),
                                            (0, a.jsx)('div', {
                                                className: h.title,
                                                'aria-hidden': !0,
                                                children: null != m ? m : d.Z.Messages.GENERIC_CAPTCHA_HEADER
                                            }),
                                            (0, a.jsx)('div', { children: null != y ? y : d.Z.Messages.GENERIC_CAPTCHA_DESCRIPTION }),
                                            (0, a.jsx)('div', {
                                                className: h.captchaContainer,
                                                children: (0, a.jsx)(s.Z, {
                                                    onVerify: (e) => {
                                                        R(), n(e, C), t();
                                                    },
                                                    ...E
                                                })
                                            })
                                        ]
                                    })
                      })
                  ]
              })
          })
        : null;
}
