t.d(s, {
    Z: function () {
        return N;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(600164),
    c = t(490529),
    d = t(981631),
    _ = t(689938),
    E = t(678986);
let u = {
        [d.gkr.HOUSE_1]: E.membershipDialogHouse1,
        [d.gkr.HOUSE_2]: E.membershipDialogHouse2,
        [d.gkr.HOUSE_3]: E.membershipDialogHouse3
    },
    I = {
        [d.gkr.HOUSE_1]: E.houseLogoHouse1,
        [d.gkr.HOUSE_2]: E.__invalid_houseLogoHouse2,
        [d.gkr.HOUSE_3]: E.__invalid_houseLogoHouse3
    },
    T = {
        [d.gkr.HOUSE_1]: t(246300),
        [d.gkr.HOUSE_2]: t(797148),
        [d.gkr.HOUSE_3]: t(374347)
    },
    S = (e) =>
        ({
            [d.gkr.HOUSE_1]: _.Z.Messages.HYPESQUAD_DESCRIPTION_HOUSE_1,
            [d.gkr.HOUSE_2]: _.Z.Messages.HYPESQUAD_DESCRIPTION_HOUSE_2,
            [d.gkr.HOUSE_3]: _.Z.Messages.HYPESQUAD_DESCRIPTION_HOUSE_3
        })[e];
class N extends a.Component {
    render() {
        let { houseMembership: e, isClaimed: s, isVerified: t } = this.props;
        if (!s || !t) return null;
        if (null != e) {
            let s = _.Z.Messages.HYPESQUAD_MEMBERSHIP_HEADING.format({ houseName: (0, c.X8)(e) });
            return (0, n.jsx)('div', {
                className: r()(E.membershipDialog, u[e]),
                children: (0, n.jsxs)('div', {
                    className: E.membershipDialogContent,
                    children: [
                        (0, n.jsxs)(l.Z, {
                            children: [
                                (0, n.jsxs)(l.Z.Child, {
                                    grow: 1,
                                    shrink: 1,
                                    children: [
                                        (0, n.jsx)(o.Text, {
                                            className: E.membershipDialogHeading,
                                            variant: 'text-xs/bold',
                                            children: _.Z.Messages.HYPESQUAD_YOUR_HOUSE
                                        }),
                                        (0, n.jsx)(o.Heading, {
                                            className: E.membershipDialogHouseName,
                                            variant: 'heading-sm/semibold',
                                            children: s
                                        }),
                                        (0, n.jsx)(o.Text, {
                                            className: E.membershipDialogHouseDescription,
                                            variant: 'text-md/normal',
                                            children: S(e)
                                        })
                                    ]
                                }),
                                (0, n.jsx)(l.Z.Child, {
                                    className: E.houseLogoWrapper,
                                    grow: 0,
                                    shrink: 0,
                                    wrap: !0,
                                    children: (0, n.jsx)('img', {
                                        className: r()(E.houseLogo, I[e]),
                                        src: T[e],
                                        alt: s
                                    })
                                })
                            ]
                        }),
                        (0, n.jsxs)(o.Text, {
                            className: E.membershipDialogSwitchHouses,
                            variant: 'text-md/normal',
                            children: [
                                _.Z.Messages.HYPESQUAD_SWITCH_HOUSES_PROMPT,
                                (0, n.jsx)(o.Clickable, {
                                    className: E.membershipDialogSwitchHousesAction,
                                    onClick: this.handleJoinHypeSquadClick,
                                    tag: 'span',
                                    children: _.Z.Messages.HYPESQUAD_SWITCH_HOUSES_ACTION
                                })
                            ]
                        })
                    ]
                })
            });
        }
        return (0, n.jsxs)('div', {
            className: E.joinCTAWrapper,
            children: [
                (0, n.jsxs)(l.Z, {
                    className: E.joinCTA,
                    align: l.Z.Align.CENTER,
                    justify: l.Z.Justify.CENTER,
                    direction: l.Z.Direction.HORIZONTAL,
                    children: [
                        (0, n.jsx)(l.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, n.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                children: _.Z.Messages.HYPESQUAD_READY_TO_REP
                            })
                        }),
                        (0, n.jsx)(l.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, n.jsx)(o.Button, {
                                onClick: this.handleJoinHypeSquadClick,
                                children: _.Z.Messages.HYPESQUAD_JOIN
                            })
                        })
                    ]
                }),
                (0, n.jsx)(o.Text, {
                    className: E.newsletterWarning,
                    variant: 'text-sm/normal',
                    children: _.Z.Messages.HYPESQUAD_NEWSLETTER_WARNING
                })
            ]
        });
    }
    constructor(...e) {
        var s, a, i;
        super(...e),
            (s = this),
            (a = 'handleJoinHypeSquadClick'),
            (i = () => {
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await t.e('83264').then(t.bind(t, 711184));
                    return (s) => (0, n.jsx)(e, { ...s });
                });
            }),
            a in s
                ? Object.defineProperty(s, a, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (s[a] = i);
    }
}
