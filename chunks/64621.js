n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(704215),
    o = n(481060),
    l = n(980591),
    u = n(243778),
    c = n(970731),
    d = n(594174),
    _ = n(718107),
    E = n(652853),
    f = n(228168),
    h = n(689938),
    p = n(671511),
    I = n(895982),
    m = n(685741),
    T = n(20818);
function S(e) {
    var t, n;
    let { sourceType: S, children: g, user: A } = e,
        { profileType: N } = (0, E.z)(),
        { avatarReactReplyEnabled: O, statusReactReplyEnabled: R } = (0, _.t)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        v = (0, a.e7)([d.default], () => {
            var e;
            return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === A.id;
        }),
        C = S === f.n_.AVATAR && O,
        L = S === f.n_.STATUS && !O && R,
        y = !v && N === f.y0.BITE_SIZE && (C || L),
        [D, b] = i.useState(!1);
    (0, l.Z)(() => b(!0), y ? 200 : null);
    let M = D ? [s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK] : [],
        [P, U] = (0, u.US)(M);
    let {
        asset: w,
        assetClassName: x,
        className: G,
        content: k,
        header: B
    } = ((t = R),
    (n = O),
    t && n
        ? {
              asset: m,
              assetClassName: p.profileImage,
              className: p.profileCoachmark,
              content: h.Z.Messages.USER_PROFILE_PROFILES_REACT_COACHMARK_BODY,
              header: h.Z.Messages.USER_PROFILE_PROFILES_REACT_COACHMARK_TITLE
          }
        : t
          ? {
                asset: T,
                assetClassName: void 0,
                className: p.statusCoachmark,
                content: h.Z.Messages.USER_PROFILE_STATUS_REACT_COACHMARK_BODY,
                header: h.Z.Messages.USER_PROFILE_STATUS_REACT_COACHMARK_TITLE
            }
          : {
                asset: I,
                assetClassName: p.avatarImage,
                className: p.avatarCoachmark,
                content: h.Z.Messages.USER_PROFILE_AVATAR_REACT_COACHMARK_BODY,
                header: h.Z.Messages.USER_PROFILE_AVATAR_REACT_COACHMARK_TITLE
            });
    return (0, r.jsx)(o.Popout, {
        align: 'center',
        position: S === f.n_.AVATAR ? 'left' : 'right',
        shouldShow: null != P,
        spacing: S === f.n_.AVATAR ? 30 : 16,
        renderPopout: (e) => {
            let { position: t, closePopout: n, setPopoutRef: i } = e;
            return (0, r.jsx)(o.Dialog, {
                ref: i,
                children: (0, r.jsx)(c.ZP, {
                    className: G,
                    asset: (0, r.jsx)('img', {
                        alt: '',
                        src: w,
                        className: x
                    }),
                    buttonCTA: h.Z.Messages.TUTORIAL_CLOSE,
                    buttonLayout: c._F.STACKED,
                    buttonProps: {
                        color: o.ButtonColors.BRAND_INVERTED,
                        size: o.Button.Sizes.SMALL
                    },
                    caretPosition: 'right' === t ? c.DF.LEFT_CENTER : c.DF.RIGHT_CENTER,
                    content: (0, r.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'always-white',
                        children: k
                    }),
                    header: B,
                    headerClassName: p.tooltipHeader,
                    markAsDismissed: U,
                    onClick: n
                })
            });
        },
        children: () => g
    });
}
