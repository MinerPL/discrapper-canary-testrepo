n.d(t, {
    Z: function () {
        return S;
    }
});
var s = n(735250), a = n(470079), i = n(512722), r = n.n(i), l = n(442837), o = n(481060), c = n(674180), d = n(584825), u = n(289393), _ = n(727843), E = n(14263), I = n(783454), T = n(689938), m = n(849456), N = n(483224);
function S(e) {
    var t;
    let {onDeleteEditState: i} = e, {
            editStateId: S,
            guildId: h,
            groupListingId: g
        } = (0, _.N)(), C = (0, l.e7)([u.Z], () => u.Z.getSubscriptionListing(S)), x = null == C ? void 0 : C.id, p = (0, E.Z)(h), R = a.useMemo(() => {
            var e;
            return null != p && null != C && (null !== (e = p[C.role_id]) && void 0 !== e ? e : 0);
        }, [
            p,
            C
        ]), f = 0 === R, L = null == x, O = null !== (t = null == C ? void 0 : C.archived) && void 0 !== t && t, {
            deleteSubscriptionListing: A,
            submitting: M
        } = (0, d.r4)(), {
            archiveSubscriptionListing: v,
            submitting: D
        } = (0, d._1)(), j = () => {
            let e = async () => {
                if (!!L || (r()(null != g, 'group listing doesnt exist'), r()(null != x, 'subscription listing doesnt exist'), !!await A(h, g, x)))
                    null == i || i();
            };
            (0, o.openModalLazy)(async () => {
                let {ConfirmModal: t} = await Promise.resolve().then(n.bind(n, 481060));
                return n => (0, s.jsx)(t, {
                    header: T.Z.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
                    confirmText: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_BUTTON,
                    cancelText: T.Z.Messages.CANCEL,
                    onConfirm: () => {
                        e();
                    },
                    confirmButtonColor: o.Button.Colors.RED,
                    ...n,
                    children: (0, s.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_DESCRIPTION
                    })
                });
            });
        }, {allowSelfRemoveMonetization: Z} = (0, c.gX)(h);
    return null == C ? null : (0, s.jsx)(I.Z, {
        title: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ADVANCE_SECTION_TITLE,
        children: O ? (0, s.jsxs)(o.FormSection, {
            title: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_LABEL,
            disabled: !Z,
            children: [
                (0, s.jsx)(o.FormText, {
                    type: o.FormText.Types.DESCRIPTION,
                    className: m.formDescription,
                    disabled: !Z,
                    children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_DESCRIPTION
                }),
                (0, s.jsx)(o.Tooltip, {
                    shouldShow: !f,
                    text: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_TOOLTIP.format({ listingMemberCount: R }),
                    children: e => (0, s.jsx)(o.Button, {
                        ...e,
                        wrapperClassName: N.deleteListingButton,
                        color: o.Button.Colors.RED,
                        onClick: j,
                        submitting: M,
                        disabled: !Z || !f,
                        children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_BUTTON
                    })
                })
            ]
        }) : (0, s.jsxs)(o.FormSection, {
            title: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_LABEL,
            disabled: !Z,
            children: [
                (0, s.jsx)(o.FormText, {
                    type: o.FormText.Types.DESCRIPTION,
                    className: m.formDescription,
                    disabled: !Z,
                    children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_DESCRIPTION
                }),
                (0, s.jsx)(o.Button, {
                    wrapperClassName: N.deleteListingButton,
                    color: o.Button.Colors.RED,
                    onClick: () => {
                        r()(null != g, 'group listing doesnt exist'), r()(null != x, 'subscription listing doesnt exist'), (0, o.openModalLazy)(async () => {
                            let {ConfirmModal: e} = await Promise.resolve().then(n.bind(n, 481060));
                            return t => (0, s.jsx)(e, {
                                header: T.Z.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
                                confirmText: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_BUTTON,
                                cancelText: T.Z.Messages.CANCEL,
                                onConfirm: () => {
                                    v(h, g, x);
                                },
                                confirmButtonColor: o.Button.Colors.RED,
                                ...t,
                                children: (0, s.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_DESCRIPTION
                                })
                            });
                        });
                    },
                    submitting: D,
                    disabled: !Z,
                    children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_BUTTON
                })
            ]
        })
    });
}
