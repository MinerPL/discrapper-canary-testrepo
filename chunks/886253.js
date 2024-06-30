t.d(n, {
    A: function () {
        return p;
    }
});
var i = t(735250);
t(470079);
var l = t(442837), r = t(481060), s = t(264043), o = t(812206), a = t(572004), c = t(601911), d = t(504211), u = t(981631), m = t(689938), S = t(435601), _ = t(290074);
function p(e) {
    let {
            appId: n,
            skuId: t,
            transitionState: p,
            onClose: f,
            onHeaderTitleClick: h,
            children: I,
            footer: x
        } = e, v = (0, l.e7)([
            o.Z,
            s.Z
        ], () => {
            var e;
            return null !== (e = o.Z.getApplication(n)) && void 0 !== e ? e : s.Z.getApplicationRecord(n);
        }, [n]);
    if (null == v)
        return null;
    let T = (0, c.y)(v, 25), {
            termsOfServiceUrl: E,
            privacyPolicyUrl: N
        } = v;
    return (0, i.jsxs)(r.ModalRoot, {
        transitionState: p,
        size: r.ModalSize.DYNAMIC,
        className: _.modal,
        children: [
            (0, i.jsxs)(r.ModalHeader, {
                className: S.modalHeader,
                children: [
                    (0, i.jsxs)(r.Clickable, {
                        className: S.modalTitle,
                        onClick: h,
                        children: [
                            null != T && (0, i.jsx)('img', {
                                src: T.href,
                                alt: '',
                                className: _.appIcon
                            }),
                            (0, i.jsx)(r.Heading, {
                                variant: 'heading-md/semibold',
                                children: v.name
                            })
                        ]
                    }),
                    (0, i.jsx)(r.ModalCloseButton, {
                        onClick: f,
                        className: S.modalCloseBtn
                    })
                ]
            }),
            I,
            (0, i.jsxs)(r.ModalFooter, {
                className: _.footer,
                children: [
                    null != E && null != N ? (0, i.jsx)(r.Text, {
                        color: 'header-primary',
                        variant: 'text-sm/normal',
                        children: m.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                            tosUrl: E,
                            ppUrl: N
                        })
                    }) : (0, i.jsx)(r.Text, {
                        color: 'header-primary',
                        variant: 'text-xs/normal',
                        children: m.Z.Messages.STOREFRONT_NO_TOS_PP
                    }),
                    (0, i.jsxs)('div', {
                        className: _.footerButtons,
                        children: [
                            a.wS && (0, i.jsx)(r.Button, {
                                look: r.ButtonLooks.FILLED,
                                size: r.ButtonSizes.ICON,
                                color: r.ButtonColors.CUSTOM,
                                'aria-label': m.Z.Messages.COPY_LINK,
                                className: _.linkButton,
                                onClick: () => {
                                    let e = ''.concat(location.protocol, '//').concat(location.host).concat(u.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t));
                                    (0, a.JG)(e), (0, r.showToast)((0, r.createToast)(m.Z.Messages.COPIED_LINK, r.ToastType.SUCCESS)), (0, d.X)(n, d.B.DETAILS_MODAL, t);
                                },
                                children: (0, i.jsx)(r.LinkIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            }),
                            x
                        ]
                    })
                ]
            })
        ]
    });
}
