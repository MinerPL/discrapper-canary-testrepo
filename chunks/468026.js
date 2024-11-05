n.r(t);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(693789),
    o = n(1561),
    l = n(512983),
    u = n(466377),
    c = n(993365),
    d = n(481060),
    f = n(600164),
    _ = n(540059),
    h = n(388032),
    p = n(149536);
t.default = (e) => {
    let t,
        n,
        i,
        { body: m, cancelText: g, className: E, confirmColor: v, confirmText: I = h.intl.string(h.t.BddRzc), secondaryConfirmText: S, onCancel: T, onClose: b, onConfirm: y, onConfirmSecondary: A, title: N, transitionState: C, titleClassName: R } = e,
        O = (0, _.Q)('ConfirmModal'),
        D = O ? s.zx.Sizes.MEDIUM : s.zx.Sizes.LARGE;
    return (
        null != g &&
            '' !== g &&
            (t = (0, r.jsx)(s.zx, {
                type: 'button',
                size: D,
                color: s.zx.Colors.PRIMARY,
                onClick: () => {
                    null == b || b(), null == T || T();
                },
                className: p.secondaryButton,
                grow: !O,
                children: g
            })),
        null != I &&
            '' !== I &&
            (n = (0, r.jsx)(s.zx, {
                type: 'submit',
                color: v,
                size: D,
                className: a()(p.primaryButton, null != t ? p.gutter : null),
                autoFocus: !0,
                grow: !O,
                children: I
            })),
        null != S &&
            '' !== S &&
            (i = (0, r.jsx)(o.P, {
                onClick: () => {
                    null == b || b(), null == A || A();
                },
                className: p.minorContainer,
                children: (0, r.jsx)(c.x, {
                    className: p.secondaryAction,
                    variant: 'text-xs/normal',
                    children: S
                })
            })),
        (0, r.jsx)(u.Y0, {
            transitionState: C,
            className: a()(E, p.container),
            'aria-label': N,
            children: (0, r.jsxs)('form', {
                onSubmit: (e) => {
                    null != e && e.preventDefault(), null == b || b(), null == y || y();
                },
                className: p.form,
                children: [
                    (0, r.jsx)(u.hz, {
                        className: p.modalContent,
                        children: (0, r.jsxs)(f.Z, {
                            direction: f.Z.Direction.VERTICAL,
                            justify: O ? f.Z.Justify.START : f.Z.Justify.CENTER,
                            className: p.content,
                            children: [
                                null != N && O
                                    ? (0, r.jsx)(d.Heading, {
                                          variant: 'heading-lg/semibold',
                                          className: a()(p.title, R),
                                          children: N
                                      })
                                    : (0, r.jsx)(l.v, {
                                          tag: 'h2',
                                          className: a()(p.title, R),
                                          children: N
                                      }),
                                null != m &&
                                    (0, r.jsx)(c.x, {
                                        variant: 'text-md/normal',
                                        className: p.body,
                                        color: O ? 'header-secondary' : 'text-normal',
                                        children: m
                                    })
                            ]
                        })
                    }),
                    (0, r.jsxs)(u.mz, {
                        justify: O ? void 0 : f.Z.Justify.BETWEEN,
                        wrap: f.Z.Wrap.WRAP,
                        children: [n, t, i]
                    })
                ]
            })
        })
    );
};
