var n = s(735250), a = s(470079), i = s(512722), r = s.n(i), o = s(442837), l = s(481060), c = s(346951), d = s(644744), _ = s(792423), E = s(674985), u = s(594174), T = s(63063), I = s(843200), S = s(981631), N = s(689938), C = s(415324);
class m extends a.PureComponent {
    renderIntroHeader() {
        let {houseMembership: e} = this.props;
        return null == e ? N.Z.Messages.HYPESQUAD_HEADING : N.Z.Messages.HYPESQUAD_HEADING_EXISTING_MEMBER;
    }
    render() {
        let {
            houseMembership: e,
            isClaimed: t,
            isVerified: s
        } = this.props;
        return (0, n.jsxs)(l.HeadingLevel, {
            component: (0, n.jsxs)('div', {
                className: C.intro,
                children: [
                    (0, n.jsx)(l.Heading, {
                        variant: 'heading-xxl/semibold',
                        className: C.introHeader,
                        children: this.renderIntroHeader()
                    }),
                    (0, n.jsx)(l.Text, {
                        variant: 'text-lg/normal',
                        children: N.Z.Messages.HYPESQUAD_SUBHEADING
                    })
                ]
            }),
            children: [
                (0, n.jsx)(I.Z, {
                    className: C.verificationNotice,
                    unclaimedNotice: N.Z.Messages.HYPESQUAD_UNCLAIMED_ACCOUNT_NOTICE,
                    unverifiedNotice: N.Z.Messages.HYPESQUAD_UNVERIFIED_EMAIL_NOTICE
                }),
                (0, n.jsx)(d.Z, {
                    houseMembership: e,
                    isClaimed: t,
                    isVerified: s
                }),
                (0, n.jsx)(c.Z, {}),
                (0, n.jsx)(_.Z, { isHypeSquadOnlineMember: null != e }),
                (0, n.jsx)(l.Card, {
                    className: C.attendeeCTA,
                    children: N.Z.Messages.HYPESQUAD_ATTENDEE_CTA.format({ url: T.Z.getArticleURL(S.BhN.PROFILE_BADGES) })
                })
            ]
        });
    }
}
t.Z = o.ZP.connectStores([
    u.default,
    E.Z
], () => {
    let e = u.default.getCurrentUser();
    return r()(null != e, 'UserSettingsHypeSquad: currentUser cannot be undefined'), {
        houseMembership: E.Z.getHouseMembership(),
        isClaimed: e.isClaimed(),
        isVerified: e.verified
    };
})(m);
