t.d(e, {
    A: function () {
        return x;
    }
});
var i = t(735250);
t(470079);
var l = t(442837),
    r = t(481060),
    o = t(264043),
    s = t(812206),
    a = t(572004),
    c = t(601911),
    d = t(504211),
    u = t(981631),
    S = t(689938),
    m = t(437561),
    I = t(27399);
function x(n) {
    let { appId: e, skuId: t, transitionState: x, onClose: f, onHeaderTitleClick: _, children: p, footer: h } = n,
        T = (0, l.e7)(
            [s.Z, o.Z],
            () => {
                var n;
                return null !== (n = s.Z.getApplication(e)) && void 0 !== n ? n : o.Z.getApplicationRecord(e);
            },
            [e]
        );
    if (null == T) return null;
    let v = (0, c.y)(T, 25),
        { termsOfServiceUrl: E, privacyPolicyUrl: N } = T;
    return (0, i.jsxs)(r.ModalRoot, {
        transitionState: x,
        size: r.ModalSize.DYNAMIC,
        className: I.modal,
        children: [
            (0, i.jsxs)(r.ModalHeader, {
                className: m.modalHeader,
                children: [
                    (0, i.jsxs)(r.Clickable, {
                        className: m.modalTitle,
                        onClick: _,
                        children: [
                            null != v &&
                                (0, i.jsx)('img', {
                                    src: v.href,
                                    alt: '',
                                    className: I.appIcon
                                }),
                            (0, i.jsx)(r.Heading, {
                                variant: 'heading-md/semibold',
                                children: T.name
                            })
                        ]
                    }),
                    (0, i.jsx)(r.ModalCloseButton, {
                        onClick: f,
                        className: m.modalCloseBtn
                    })
                ]
            }),
            p,
            (0, i.jsxs)(r.ModalFooter, {
                className: I.footer,
                children: [
                    null != E && null != N
                        ? (0, i.jsx)(r.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/normal',
                              children: S.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                                  tosUrl: E,
                                  ppUrl: N
                              })
                          })
                        : (0, i.jsx)(r.Text, {
                              color: 'header-primary',
                              variant: 'text-xs/normal',
                              children: S.Z.Messages.STOREFRONT_NO_TOS_PP
                          }),
                    (0, i.jsxs)('div', {
                        className: I.footerButtons,
                        children: [
                            a.wS &&
                                (0, i.jsx)(r.Button, {
                                    look: r.ButtonLooks.FILLED,
                                    size: r.ButtonSizes.ICON,
                                    color: r.ButtonColors.CUSTOM,
                                    'aria-label': S.Z.Messages.COPY_LINK,
                                    className: I.linkButton,
                                    onClick: () => {
                                        let n = ''.concat(location.protocol, '//').concat(location.host).concat(u.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, t));
                                        (0, a.JG)(n), (0, r.showToast)((0, r.createToast)(S.Z.Messages.COPIED_LINK, r.ToastType.SUCCESS)), (0, d.X)(e, d.B.DETAILS_MODAL, t);
                                    },
                                    children: (0, i.jsx)(r.LinkIcon, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                            h
                        ]
                    })
                ]
            })
        ]
    });
}
