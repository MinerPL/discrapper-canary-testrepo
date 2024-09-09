n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(704215),
    o = n(481060),
    l = n(980591),
    u = n(100527),
    c = n(906732),
    d = n(243778),
    _ = n(970731),
    E = n(594174),
    f = n(785717),
    h = n(652853),
    p = n(171368),
    I = n(228168),
    m = n(921944),
    T = n(689938),
    S = n(915108),
    g = n(881828);
let A = 32;
function N(e) {
    let { user: t, children: n, onClose: N } = e,
        { analyticsLocations: O } = (0, c.ZP)(u.Z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP),
        { context: R } = (0, f.KZ)(),
        { profileType: v, primaryColor: C } = (0, h.z)(),
        y =
            (0, a.e7)([E.default], () => {
                var e;
                return (null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t.id;
            }) && v === I.y0.BITE_SIZE,
        [L, D] = i.useState(!1);
    (0, l.Z)(() => D(!0), y ? 200 : null);
    let b = L ? [s.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP] : [],
        [M, P] = (0, d.US)(b),
        U = () => {
            (0, p.openUserProfileModal)({
                userId: t.id,
                section: I.oh.ACTIVITY,
                sourceAnalyticsLocations: O,
                ...R
            }),
                null == N || N();
        };
    return (0, r.jsx)(o.Popout, {
        shouldShow: null != M,
        spacing: null != C ? A : 28,
        renderPopout: (e) => {
            let { position: t, closePopout: n, setPopoutRef: i } = e;
            return (0, r.jsx)(o.Dialog, {
                ref: i,
                children: (0, r.jsx)(_.ZP, {
                    header: T.Z.Messages.USER_PROFILE_RECENT_ACTIVITY_EDUCATION_TOOLTIP_HEADER,
                    content: T.Z.Messages.USER_PROFILE_RECENT_ACTIVITY_EDUCATION_TOOLTIP_BODY,
                    className: S.tooltip,
                    asset: (0, r.jsx)('img', {
                        alt: '',
                        src: g,
                        className: S.asset
                    }),
                    buttonCTA: T.Z.Messages.CHECK_IT_OUT,
                    secondaryButtonCTA: T.Z.Messages.EDUCATION_NEW_FEATURE_DISMISS,
                    buttonProps: {
                        color: o.ButtonColors.BRAND_INVERTED,
                        size: o.Button.Sizes.SMALL
                    },
                    secondaryButtonProps: {
                        color: o.ButtonColors.BRAND,
                        size: o.Button.Sizes.SMALL
                    },
                    buttonLayout: _._F.STACKED,
                    caretPosition: 'right' === t ? _.DF.LEFT_TOP : _.DF.RIGHT_TOP,
                    onClick: U,
                    onSecondaryClick: n,
                    markAsDismissed: P
                })
            });
        },
        children: (e) =>
            n({
                ...e,
                onAutoDismiss: () => P(m.L.AUTO_DISMISS)
            })
    });
}
