n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(442837), o = n(663002), c = n(481060), d = n(230711), u = n(210887), _ = n(617136), E = n(272008), h = n(113434), I = n(569984), m = n(497505), p = n(918701), g = n(566078), T = n(602667), S = n(611855), C = n(670638), N = n(667105), f = n(860151), A = n(981631), Z = n(689938), L = n(199519);
function v(e) {
    var t;
    let {quest: n} = e, s = (0, h.B6)(n.config.expiresAt), a = (0, h.B6)(g.r.build(n.config).rewardsExpireAt), r = (0, l.e7)([u.Z], () => u.Z.getState().theme), d = (0, o.w)(r) ? A.BRd.DARK : A.BRd.LIGHT, _ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
    return (0, i.jsxs)('div', {
        className: L.heading,
        children: [
            (0, i.jsx)('img', {
                className: L.headingGameTile,
                alt: '',
                src: (0, p.uo)(n, d)
            }),
            (0, i.jsxs)('div', {
                className: L.headingCopy,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        children: _ ? Z.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : Z.Z.Messages.QUESTS_TITLE.format({ questName: n.config.messages.questName })
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        children: _ ? Z.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: a }) : Z.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: s })
                    })
                ]
            })
        ]
    });
}
t.Z = function (e) {
    var t, n, a;
    let {quest: o} = e, u = (0, l.e7)([I.Z], () => I.Z.isEnrolling(o.id), [o]), [g, O] = s.useState(!1), R = s.useCallback(() => O(!0), []), x = s.useCallback(() => O(!1), []), P = s.useCallback(e => {
            e.stopPropagation();
        }, []), b = s.useCallback(() => {
            (0, E.AH)(o.id, {
                questContent: m.jn.ACTIVITY_PANEL,
                questContentCTA: _.jZ.ACCEPT_QUEST
            });
        }, [o]), M = s.useCallback(() => {
            null != o && ((0, _._3)({
                questId: o.id,
                questContent: m.jn.ACTIVITY_PANEL,
                questContentCTA: _.jZ.TRACK_PROGRESS
            }), d.Z.open(A.oAB.INVENTORY));
        }, [o]), D = s.useCallback(() => {
            (0, _._3)({
                questId: o.id,
                questContent: m.jn.ACTIVITY_PANEL,
                questContentCTA: _.jZ.LEARN_MORE
            }), d.Z.open(A.oAB.INVENTORY);
        }, [o]), y = (0, N.hf)({
            quest: o,
            location: m.jn.ACTIVITY_PANEL
        }), j = (0, h.tP)(o), U = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, G = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, w = (null === (a = o.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null;
    return (null == o ? void 0 : o.userStatus) == null || (0, p.zE)(o.userStatus, m.jn.ACTIVITY_PANEL) || j || w || !(0, p.dl)(o) ? null : (0, i.jsx)(T.A, {
        questOrQuests: o,
        questContent: m.jn.ACTIVITY_PANEL,
        children: e => {
            var t;
            return (0, i.jsxs)('div', {
                ref: t => {
                    e.current = t;
                },
                className: r()(L.wrapper, { [L.wrapperQuestAccepted]: U }),
                onClick: P,
                onKeyPress: P,
                onFocus: R,
                onMouseEnter: R,
                onBlur: x,
                onMouseLeave: x,
                children: [
                    (0, i.jsxs)('div', {
                        className: L.utils,
                        children: [
                            U ? (0, i.jsx)(v, { quest: o }) : (0, i.jsx)(S.Z, { textOpacity: 0.5 }),
                            (0, i.jsx)(C.r, {
                                quest: o,
                                questContent: m.jn.ACTIVITY_PANEL,
                                shouldShowDisclosure: (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null,
                                showShareLink: !0,
                                children: e => (0, i.jsx)(c.Clickable, {
                                    ...e,
                                    'aria-label': Z.Z.Messages.ACTIONS,
                                    children: (0, i.jsx)(c.MoreHorizontalIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: L.submenuIcon
                                    })
                                })
                            })
                        ]
                    }),
                    !U && (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(v, { quest: o }),
                            (0, i.jsx)(c.Text, {
                                className: L.instructions,
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: (0, p.pG)({ quest: o })
                            })
                        ]
                    }),
                    U && !G && (0, i.jsx)(f.Z, {
                        autoplay: g,
                        className: L.rewardTileWithInstructions,
                        quest: o,
                        questContent: m.jn.ACTIVITY_PANEL
                    }),
                    (0, i.jsxs)('div', {
                        className: L.ctas,
                        children: [
                            !U && (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(c.Button, {
                                        className: L.cta,
                                        color: c.Button.Colors.PRIMARY,
                                        fullWidth: !0,
                                        size: c.Button.Sizes.SMALL,
                                        onClick: D,
                                        children: Z.Z.Messages.QUESTS_LEARN_MORE_V2
                                    }),
                                    (0, i.jsx)(c.Button, {
                                        className: L.cta,
                                        color: c.Button.Colors.BRAND,
                                        fullWidth: !0,
                                        onClick: b,
                                        size: c.Button.Sizes.SMALL,
                                        submitting: u,
                                        children: Z.Z.Messages.QUESTS_ACCEPT_QUEST
                                    })
                                ]
                            }),
                            U && !G && (0, i.jsx)(c.Button, {
                                className: L.cta,
                                color: c.Button.Colors.BRAND,
                                fullWidth: !0,
                                onClick: M,
                                size: c.Button.Sizes.SMALL,
                                children: Z.Z.Messages.QUESTS_CHECK_PROGRESS
                            }),
                            G && (0, i.jsx)(c.Button, {
                                className: L.cta,
                                color: c.Button.Colors.BRAND,
                                fullWidth: !0,
                                onClick: y,
                                size: c.Button.Sizes.SMALL,
                                children: Z.Z.Messages.QUESTS_CLAIM_REWARD
                            })
                        ]
                    })
                ]
            });
        }
    });
};
