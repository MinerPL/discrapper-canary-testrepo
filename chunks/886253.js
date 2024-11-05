t.d(e, {
    A: function () {
        return h;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    o = t(264043),
    a = t(812206),
    s = t(572004),
    u = t(601911),
    c = t(504211),
    d = t(533159),
    p = t(981631),
    f = t(388032),
    v = t(213891),
    m = t(566809);
function h(n) {
    let { appId: e, skuId: t, transitionState: h, onClose: x, onHeaderTitleClick: S, children: I, footer: g } = n,
        Z = (0, i.e7)(
            [a.Z, o.Z],
            () => {
                var n;
                return null !== (n = a.Z.getApplication(e)) && void 0 !== n ? n : o.Z.getApplicationRecord(e);
            },
            [e]
        );
    if (null == Z) return null;
    let T = (0, u.y)(Z, 25),
        { termsOfServiceUrl: N, privacyPolicyUrl: b } = Z;
    return (0, l.jsxs)(r.ModalRoot, {
        transitionState: h,
        size: r.ModalSize.DYNAMIC,
        className: m.modal,
        children: [
            (0, l.jsxs)(r.ModalHeader, {
                className: v.modalHeader,
                children: [
                    (0, l.jsxs)(r.Clickable, {
                        className: v.modalTitle,
                        onClick: S,
                        children: [
                            null != T &&
                                (0, l.jsx)('img', {
                                    src: T.href,
                                    alt: '',
                                    className: m.appIcon
                                }),
                            (0, l.jsx)(r.Heading, {
                                variant: 'heading-md/semibold',
                                children: Z.name
                            })
                        ]
                    }),
                    (0, l.jsx)(r.ModalCloseButton, {
                        onClick: x,
                        className: v.modalCloseBtn
                    })
                ]
            }),
            I,
            (0, l.jsxs)(r.ModalFooter, {
                className: m.footer,
                children: [
                    null != N || null != b
                        ? (0, l.jsx)(r.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/normal',
                              children: (0, l.jsx)(d.Z, {
                                  termsOfServiceUrl: N,
                                  privacyPolicyUrl: b
                              })
                          })
                        : (0, l.jsx)(r.Text, {
                              color: 'header-primary',
                              variant: 'text-xs/normal',
                              children: f.intl.string(f.t['3ZY+0N'])
                          }),
                    (0, l.jsxs)('div', {
                        className: m.footerButtons,
                        children: [
                            s.wS &&
                                (0, l.jsx)(r.Button, {
                                    look: r.Button.Looks.FILLED,
                                    size: r.Button.Sizes.ICON,
                                    color: r.Button.Colors.PRIMARY,
                                    'aria-label': f.intl.string(f.t.WqhZsr),
                                    className: m.linkButton,
                                    innerClassName: m.innerLinkButton,
                                    onClick: () => {
                                        let n = ''.concat(location.protocol, '//').concat(location.host).concat(p.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, t));
                                        (0, s.JG)(n), (0, r.showToast)((0, r.createToast)(f.intl.string(f.t['L/PwZW']), r.ToastType.SUCCESS)), (0, c.X)(e, c.B.DETAILS_MODAL, t);
                                    },
                                    children: (0, l.jsx)(r.LinkIcon, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                            g
                        ]
                    })
                ]
            })
        ]
    });
}
