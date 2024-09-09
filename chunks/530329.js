a.d(n, {
    Z: function () {
        return c;
    }
});
var i = a(735250),
    r = a(470079),
    s = a(53691),
    o = a(378879),
    l = a(981631),
    t = a(486324),
    u = a(689938);
function c(e) {
    let { uploadType: n, onSecondaryClick: a, ...c } = e,
        d = r.useCallback(() => {
            (0, o.openProfileUpsellModal)(n, void 0, a);
        }, [n, a]),
        A = r.useMemo(() => {
            switch (n) {
                case t.pC.AVATAR:
                    return u.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_INLINE_UPSELL.format({ onClick: d });
                case t.pC.BANNER:
                    return u.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_INLINE_UPSELL.format({ onClick: d });
                default:
                    return '';
            }
        }, [n, d]);
    return n === t.pC.AVATAR || n === t.pC.BANNER
        ? (0, i.jsx)(s.p, {
              text: A,
              button: u.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
              buttonAnalyticsObject: { section: l.jXE.USER_PROFILE },
              ...c
          })
        : null;
}
