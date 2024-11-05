n.r(t),
    n.d(t, {
        ConfirmModal: function () {
            return f;
        },
        DeclarativeConfirmModal: function () {
            return _;
        }
    });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(693789),
    l = n(481060),
    u = n(540059),
    c = n(709692),
    d = n(642649);
function f(e) {
    let t,
        n,
        { header: a, children: f, confirmText: _, cancelText: h, className: p, onConfirm: m, onCancel: g, onClose: E, onCloseCallback: v, bodyClassName: I, transitionState: S, loading: T = !1, confirmButtonColor: b = o.zx.Colors.RED, focusCancel: y = !1 } = e,
        A = i.useRef(null),
        N = (0, u.Q)('ConfirmModal');
    return (
        i.useEffect(() => {
            !y &&
                setTimeout(() => {
                    var e;
                    return null === (e = A.current) || void 0 === e ? void 0 : e.focus();
                }, 0);
        }, [y]),
        i.useLayoutEffect(() => () => (null == v ? void 0 : v())),
        null != h &&
            (t = (0, r.jsx)(o.zx, {
                type: 'button',
                look: N ? o.zx.Looks.FILLED : o.zx.Looks.LINK,
                color: o.zx.Colors.PRIMARY,
                className: d.cancelButton,
                size: o.zx.Sizes.MEDIUM,
                disabled: T,
                onClick: () => {
                    null == g || g(), E();
                },
                autoFocus: y,
                children: h
            })),
        null != _ &&
            (n = (0, r.jsx)(o.zx, {
                buttonRef: A,
                type: 'submit',
                size: o.zx.Sizes.MEDIUM,
                color: b,
                submitting: T,
                onClick: async () => {
                    try {
                        await (null == m ? void 0 : m()), E();
                    } catch (e) {
                        throw e;
                    }
                },
                autoFocus: !y,
                children: _
            })),
        (0, r.jsxs)(c.Y0, {
            className: p,
            transitionState: S,
            children: [
                null != a
                    ? (0, r.jsx)(c.xB, {
                          separator: !1,
                          children: (0, r.jsx)(l.Heading, {
                              variant: 'heading-lg/semibold',
                              children: a
                          })
                      })
                    : null,
                (0, r.jsx)(c.hz, {
                    className: s()(d.content, I),
                    children: f
                }),
                (0, r.jsxs)(c.mz, {
                    children: [n, t]
                })
            ]
        })
    );
}
function _(e) {
    return (0, r.jsx)(c.u_, {
        onCloseRequest: e.dismissable ? e.onCancel : null,
        renderModal: (t) =>
            (0, r.jsx)(f, {
                ...t,
                ...e
            })
    });
}
