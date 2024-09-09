var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(481060),
    l = n(565138),
    o = n(693546),
    c = n(937111),
    d = n(689938),
    u = n(807907),
    _ = n(364632);
t.Z = (e) => {
    let { headerId: t, reapplyText: n, onReapply: E, confirmText: h, onWithdrawApplication: m, rejectionReason: I = null, guild: g = null } = e,
        p = (0, s.e7)([c.Z], () => {
            var e;
            return c.Z.getCooldown(null !== (e = null == g ? void 0 : g.id) && void 0 !== e ? e : '0');
        });
    a.useEffect(() => {
        null == p && null != g && o.Z.fetchJoinRequestCooldown(g.id);
    }, [p, g]);
    let T = (null != p ? p : 0) > 0,
        S = T && null != p ? Math.ceil((1000 * p - Date.now()) / 86400000) : 0;
    return (0, i.jsxs)('div', {
        className: u.confirmation,
        children: [
            (0, i.jsxs)('div', {
                className: u.confirmationContent,
                children: [
                    null !== g
                        ? (0, i.jsx)(l.Z, {
                              size: l.Z.Sizes.LARGER,
                              guild: g,
                              className: u.guildIcon
                          })
                        : (0, i.jsx)('img', {
                              alt: d.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_ICON,
                              src: _,
                              className: u.__invalid_verificationStateIcon
                          }),
                    (0, i.jsx)(r.Heading, {
                        id: t,
                        variant: 'heading-xl/semibold',
                        className: u.header,
                        children: (null == g ? void 0 : g.name) != null ? d.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE_WITH_GUILD_NAME.format({ guildName: g.name }) : d.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE
                    }),
                    null != I && '' !== I
                        ? (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsxs)(r.Text, {
                                  variant: 'text-sm/normal',
                                  children: [
                                      (0, i.jsx)('span', {
                                          className: u.rejectionReasonLabel,
                                          children: d.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_REASON
                                      }),
                                      (0, i.jsx)('span', {
                                          className: u.rejectionReason,
                                          children: I
                                      })
                                  ]
                              })
                          })
                        : null
                ]
            }),
            (0, i.jsxs)('div', {
                className: u.confirmationButtonRow,
                children: [
                    (0, i.jsx)(r.TooltipContainer, {
                        className: u.confirmationButton,
                        text: T ? d.Z.Messages.MEMBER_VERIFICATION_PENDING_APPLICATION_MODAL_REAPPLY_COOLDOWN.format({ days: S }) : null,
                        'aria-label': T ? d.Z.Messages.MEMBER_VERIFICATION_PENDING_APPLICATION_MODAL_REAPPLY_COOLDOWN.format({ days: S }) : void 0,
                        children: (0, i.jsx)(r.Button, {
                            className: u.confirmationTooltipContents,
                            onClick: E,
                            color: r.Button.Colors.PRIMARY,
                            submitting: null == p,
                            disabled: T,
                            children: n
                        })
                    }),
                    (0, i.jsx)(r.Button, {
                        onClick: m,
                        color: r.Button.Colors.RED,
                        className: u.confirmationButton,
                        children: h
                    })
                ]
            })
        ]
    });
};
