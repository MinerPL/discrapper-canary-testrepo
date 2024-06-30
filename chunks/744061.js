n.d(t, {
    Z: function () {
        return _;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(692547), s = n(780384), r = n(481060), o = n(367907), c = n(210887), u = n(626135), d = n(981631), h = n(689938), p = n(683993), m = n(622322);
function _(e) {
    let {
        onClose: t,
        onConfirm: _,
        onCancel: f,
        channel: E,
        analyticsType: C,
        popoutText: g,
        animation: I
    } = e;
    a.useEffect(() => {
        u.default.track(d.rMx.OPEN_POPOUT, {
            type: C,
            ...(0, o.v_)(E)
        });
    }, [
        C,
        E
    ]);
    let x = a.useCallback(() => {
            null == _ || _(), t();
        }, [
            _,
            t
        ]), T = a.useCallback(() => {
            null == f || f(), t();
        }, [
            f,
            t
        ]), N = a.useRef(null);
    return a.useEffect(() => {
        let e;
        let t = c.Z.theme, i = !1;
        return null != I && (async () => {
            let [{default: a}, l] = await Promise.all([
                Promise.resolve().then(n.t.bind(n, 500923, 23)),
                (0, s.wj)(t) ? I.dark() : I.light()
            ]);
            !i && null != N.current && (e = a.loadAnimation({
                container: N.current,
                renderer: 'svg',
                loop: !0,
                autoplay: !0,
                animationData: l
            }));
        })(), () => {
            i = !0, null != e && (e.destroy(), e = void 0);
        };
    }, [I]), (0, i.jsx)(r.Dialog, {
        'aria-labelledby': 'content-warning-popout-label',
        children: (0, i.jsxs)('form', {
            className: p.contentWarningPopout,
            onSubmit: x,
            children: [
                (0, i.jsxs)('div', {
                    className: p.body,
                    children: [
                        null != I && (0, i.jsx)('div', {
                            className: p.animation,
                            ref: N
                        }),
                        (0, i.jsxs)('div', {
                            className: p.content,
                            children: [
                                (0, i.jsx)('div', {
                                    className: p.header,
                                    children: h.Z.Messages.SELF_XSS_HEADER
                                }),
                                (0, i.jsx)(r.Text, {
                                    id: 'content-warning-popout-label',
                                    className: m.markup,
                                    variant: 'text-sm/normal',
                                    children: g.body
                                }),
                                (0, i.jsxs)('div', {
                                    className: p.buttonWrapper,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: p.buttonContainer,
                                            children: [
                                                (0, i.jsx)(r.Button, {
                                                    className: p.button,
                                                    color: r.Button.Colors.PRIMARY,
                                                    onClick: T,
                                                    children: h.Z.Messages.EDIT_MESSAGE
                                                }),
                                                (0, i.jsx)(r.Text, {
                                                    variant: 'text-xs/normal',
                                                    className: p.buttonHint,
                                                    children: h.Z.Messages.EVERYONE_POPOUT_ESC.format()
                                                })
                                            ]
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: p.buttonContainer,
                                            children: [
                                                (0, i.jsx)(r.Button, {
                                                    className: p.button,
                                                    onClick: x,
                                                    type: 'submit',
                                                    autoFocus: !0,
                                                    children: h.Z.Messages.EVERYONE_POPOUT_SEND_NOW
                                                }),
                                                (0, i.jsx)(r.Text, {
                                                    variant: 'text-xs/normal',
                                                    className: p.buttonHint,
                                                    children: h.Z.Messages.EVERYONE_POPOUT_ENTER.format()
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                null != g.footer && '' !== g.footer ? (0, i.jsxs)('div', {
                    className: p.footer,
                    children: [
                        (0, i.jsx)(r.CircleInformationIcon, {
                            size: 'xs',
                            color: l.Z.unsafe_rawColors.PRIMARY_400.css,
                            className: p.icon
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            children: g.footer
                        })
                    ]
                }) : null
            ]
        })
    });
}
