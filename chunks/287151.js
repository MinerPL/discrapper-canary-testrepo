n.d(t, {
    aO: function () {
        return ei;
    },
    le: function () {
        return el;
    },
    op: function () {
        return es;
    },
    y4: function () {
        return eo;
    }
}), n(47120);
var i, s = n(735250), o = n(470079), a = n(120356), l = n.n(a), r = n(772848), c = n(748780), u = n(866442), d = n(442837), h = n(846519), m = n(481060), p = n(596454), g = n(785388), f = n(607070), T = n(367907), _ = n(98474), v = n(339085), b = n(906411), E = n(56314), I = n(400106), x = n(944386), C = n(305325), R = n(33154), S = n(692147), N = n(197115), O = n(659215), Z = n(222677), j = n(995774), M = n(695346), A = n(592125), y = n(430824), P = n(542578), L = n(914010), w = n(594174), U = n(451478), k = n(18732), B = n(672752), D = n(626135), F = n(74538), V = n(960020), H = n(566006), G = n(886132), W = n(183023), z = n(524444), K = n(89729), Y = n(640753), J = n(981631), q = n(474936), X = n(689938), $ = n(423192), Q = n(704963), ee = n(667671), et = n(774445);
function en(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let ei = 9;
function es(e, t, n) {
    (0, m.openModal)(e => (0, s.jsx)(g.default, {
        ...e,
        message: t,
        selectedReaction: n
    }));
}
function eo(e, t, n) {
    return n === H.O.BURST && t || n === H.O.NORMAL && e;
}
class ea extends (i = o.PureComponent) {
    componentWillAppear(e) {
        this.animateIn(e);
    }
    componentWillEnter(e) {
        this.animateIn(e);
    }
    componentWillUnmount() {
        this.hideTooltip();
    }
    animateIn(e) {
        let {autoUnfurlReactionTooltip: t} = this.props;
        U.Z.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), c.Z.parallel([
            c.Z.timing(this.scale, {
                toValue: 1,
                duration: t ? 200 : 300,
                easing: c.Z.Easing.inOut(c.Z.Easing.back())
            }),
            c.Z.timing(this.opacity, {
                toValue: 1,
                duration: t ? 200 : 300
            })
        ]).start(e)) : (this.scale.setValue(1), this.opacity.setValue(1), e());
    }
    render() {
        let e, t;
        let {
                count: n,
                burst_count: i,
                colors: o,
                isBurstReaction: a,
                hideCount: r,
                emoji: d,
                readOnly: h,
                isLurking: g,
                isGuest: f,
                isPendingMember: T,
                className: v,
                useChatFontScaling: b,
                message: E,
                hideEmoji: I,
                animationStartPosition: x
            } = this.props, {
                shouldShowTooltip: C,
                tooltipTextAria: R,
                reactionRef: N,
                tooltipPositionKey: O
            } = this.state, Z = b ? ee : Q, M = {
                transform: [{ scale: this.scale }],
                opacity: this.opacity
            }, A = a ? i : n;
        if (a && null != o) {
            var y;
            let {
                    accentColor: n,
                    backgroundColor: i,
                    opacity: s
                } = o, a = null !== (y = (0, u.wK)(null != i ? i : '', s)) && void 0 !== y ? y : '';
            this.isMe() && (M.borderColor = i), M.background = a, e = n, t = n;
        }
        let P = null == N ? void 0 : N.getBoundingClientRect(), L = null != x && null != P, w = null == x;
        return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(m.Popout, {
                shouldShow: C,
                'aria-label': null != R && R,
                renderPopout: this.renderTooltip,
                nudgeAlignIntoViewport: !0,
                position: 'top',
                align: 'center',
                positionKey: O,
                children: () => (0, s.jsx)('div', {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    ref: this.handleSetReactionRef,
                    children: (0, s.jsx)(c.Z.div, {
                        className: l()(Z.reaction, v, {
                            [Z.reactionMe]: this.isMe(),
                            [Z.reactionReadOnly]: h && !g && !T && !f,
                            [Z.shakeReaction]: I && null == x
                        }),
                        style: M,
                        children: (0, s.jsx)(m.Popout, {
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: 'top',
                            children: n => (0, s.jsxs)(m.Clickable, {
                                ...n,
                                className: Z.reactionInner,
                                onClick: this.handleClick,
                                'aria-disabled': h,
                                'aria-label': (0, j.iD)(this.isMe(), A, d, a),
                                'aria-pressed': this.isMe(),
                                children: [
                                    (0, s.jsx)('div', {
                                        className: l()({ [Z.burstGlow]: a }),
                                        style: { boxShadow: '0 0 16px '.concat(t) }
                                    }),
                                    (0, s.jsxs)('div', {
                                        children: [
                                            a ? (0, s.jsxs)(s.Fragment, {
                                                children: [
                                                    L && (0, s.jsx)(_.Z, {
                                                        messageId: E.id,
                                                        emoji: d,
                                                        startPosition: x,
                                                        targetPosition: P
                                                    }),
                                                    w && (0, s.jsx)(Y.Z, {
                                                        count: i,
                                                        emoji: d,
                                                        channelId: E.getChannelId(),
                                                        messageId: E.id,
                                                        useChatFontScaling: b,
                                                        color: t
                                                    })
                                                ]
                                            }) : null,
                                            (0, s.jsx)(p.Z, {
                                                className: l()({ [Z.hideEmoji]: I }),
                                                emojiId: d.id,
                                                emojiName: d.name,
                                                size: 'reaction',
                                                animated: d.animated
                                            })
                                        ]
                                    }),
                                    r ? null : (0, s.jsx)(k.Z, {
                                        className: Z.reactionCount,
                                        value: A,
                                        color: e,
                                        digitWidth: ei
                                    }),
                                    (0, s.jsx)(S.Z, {
                                        count: A,
                                        reactionRef: N
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        });
    }
    constructor(...e) {
        super(...e), en(this, 'isReactionEventActive', !1), en(this, 'isKeyboardNavigation', !1), en(this, 'scale', new c.Z.Value(1)), en(this, 'opacity', new c.Z.Value(1)), en(this, 'timeout', new h.V7()), en(this, 'hideTimeout', new h.V7()), en(this, 'ctaRef', o.createRef()), en(this, 'type', H.O.NORMAL), en(this, 'colors', {
            backgroundColor: void 0,
            borderColor: void 0,
            textColor: void 0
        }), en(this, 'state', {
            shouldShowTooltip: !1,
            tooltipText: null,
            tooltipTextAria: null,
            reactionRef: null,
            tooltipPositionKey: void 0
        }), en(this, 'hasShownTooltip', !1), en(this, 'nonce', (0, r.Z)()), en(this, 'userCanBurstReact', () => this.props.userHasPremium), en(this, 'handleClick', e => {
            e.stopPropagation();
            let {
                    message: t,
                    emoji: n,
                    readOnly: i,
                    isBurstReaction: s,
                    isPendingMember: o,
                    isLurking: a,
                    isGuest: l,
                    isForumToolbar: r
                } = this.props, c = A.Z.getChannel(t.getChannelId());
            if (a || l) {
                var u, d;
                null === (d = this.ctaRef) || void 0 === d || null === (u = d.current) || void 0 === u || u.focus();
                return;
            }
            let h = t.getChannelId(), m = r ? Z.TW.FORUM_TOOLBAR : Z.TW.MESSAGE;
            if (s && !this.userCanBurstReact()) {
                (0, O.openBurstReactionsUpsellModal)({
                    analytics: {
                        type: q.cd.BURST_REACTION_UPSELL,
                        page: (null == c ? void 0 : c.getGuildId()) != null ? J.ZY5.GUILD_CHANNEL : J.ZY5.DM_CHANNEL,
                        section: null != c ? (0, j.s4)(c) : void 0,
                        object: J.qAy.EMOJI_REACTION_UPSELL
                    }
                });
                return;
            }
            o ? this.handleShowVerificationGate() : !i && (this.isMe() ? (0, Z.WO)(h, t.id, n, void 0, m, { burst: s }) : (0, Z.rU)(h, t.id, n, m, { burst: s }));
        }), en(this, 'handleEnter', e => {
            let {
                    emoji: t,
                    message: n,
                    type: i,
                    reduceMotion: s,
                    animateEmoji: o,
                    autoUnfurlReactionTooltip: a
                } = this.props, l = i === H.O.BURST;
            l && !this.isReactionEventActive && !s && o && (0, Z.T6)({
                channelId: n.getChannelId(),
                messageId: n.id,
                emoji: t,
                key: V.I.HOVER
            }), this.isReactionEventActive = !0, this.isKeyboardNavigation = 'focus' === e.type, this.timeout.start(l ? 750 : a ? 200 : 500, this.showTooltip, !1);
        }), en(this, 'handleEnterTooltip', () => {
            this.isReactionEventActive = !0, this.handleShowTooltip();
        }), en(this, 'handleShowTooltip', () => {
            this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), P.Z.addChangeListener(this.updateTooltipText));
        }), en(this, 'showTooltip', () => {
            this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = !0;
        }), en(this, 'handleLeave', () => {
            this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.timeout.stop(), P.Z.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1);
        }), en(this, 'hideTooltip', () => {
            this.setState({ shouldShowTooltip: !1 }), this.hasShownTooltip && D.default.track(J.rMx.CLOSE_POPOUT, { nonce: this.nonce });
        }), en(this, 'isMe', () => {
            let {
                me: e,
                me_burst: t,
                type: n
            } = this.props;
            return eo(e, t, n);
        }), en(this, 'updateTooltipText', () => {
            let {
                    message: e,
                    emoji: t,
                    type: n
                } = this.props, i = (0, K.g)(e, t, n), s = this.isKeyboardNavigation ? i : (0, K.g)(e, t, n, J.dG4);
            this.setState({
                tooltipText: s,
                tooltipTextAria: i,
                shouldShowTooltip: null != s && '' !== s
            });
        }), en(this, 'renderLurkerModeUpsellPopout', e => {
            let {closePopout: t} = e, {
                    message: n,
                    isLurking: i
                } = this.props, o = A.Z.getChannel(n.getChannelId()), a = y.Z.getGuild(null == o ? void 0 : o.getGuildId());
            return i && null != a ? (0, s.jsx)(R.Z, {
                ctaRef: this.ctaRef,
                type: R.s.REACTIONS,
                guild: a,
                closePopout: t
            }) : (0, s.jsx)(s.Fragment, {});
        }), en(this, 'renderEmojiDetails', () => {
            let e = this.props.emoji;
            return null != e.id && (0, s.jsx)(ec, {
                emojiId: e.id,
                refreshPositionKey: this.refreshTooltipPositionKey,
                onClose: this.handleLeave,
                nonce: this.nonce
            });
        }), en(this, 'renderTooltip', () => {
            let {
                    emoji: e,
                    message: t,
                    type: n,
                    me_burst: i,
                    isBurstReaction: o = !1
                } = this.props, {tooltipText: a} = this.state, r = n => {
                    let i = A.Z.getChannel(t.getChannelId());
                    if (null != i)
                        this.handleLeave(), es(i, t, {
                            emoji: e,
                            reactionType: o ? H.O.BURST : H.O.NORMAL
                        });
                }, c = 'string' == typeof a ? '' === a.trim() : null == a, u = () => c || null == a ? null : (0, s.jsx)(m.Text, {
                    variant: 'text-sm/normal',
                    className: et.reactionTooltipText,
                    'aria-label': a,
                    children: a
                });
            return n === H.O.BURST ? (0, s.jsxs)('div', {
                className: et.reactionTooltip,
                onMouseEnter: this.handleEnterTooltip,
                onMouseLeave: this.handleLeave,
                children: [
                    (0, s.jsx)(m.Clickable, {
                        className: et.burstReactionTooltipInner,
                        onClick: r,
                        children: (0, s.jsxs)('div', {
                            className: et.burstReactionTooltipMessage,
                            children: [
                                (0, s.jsx)(p.Z, {
                                    className: et.reactionTooltipEmoji,
                                    emojiId: e.id,
                                    emojiName: e.name,
                                    animated: e.animated,
                                    size: this.props.emojiSize
                                }),
                                u()
                            ]
                        })
                    }),
                    (() => {
                        let e = w.default.getCurrentUser();
                        if (i)
                            return (0, s.jsxs)('div', {
                                className: l()(et.burstReactionTooltipPrompt, et.burstReactionTooltipSpacer),
                                children: [
                                    (0, F.I5)(e) && (0, s.jsx)(m.NitroWheelIcon, {
                                        size: 'md',
                                        className: et.burstReactionTooltipNitroIcon,
                                        color: B.JX.PREMIUM_TIER_2
                                    }),
                                    (0, s.jsx)(m.Text, {
                                        variant: 'text-sm/normal',
                                        className: et.reactionTooltipText,
                                        'aria-label': 'super reaction tooltip cta',
                                        children: X.Z.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED
                                    })
                                ]
                            });
                        if (this.userCanBurstReact())
                            return (0, s.jsxs)('div', {
                                className: l()(et.burstReactionTooltipPrompt, et.burstReactionTooltipSpacer, et.burstReactionTooltipPromptClickable),
                                children: [
                                    (0, s.jsx)(m.NitroWheelIcon, {
                                        size: 'md',
                                        className: et.burstReactionTooltipNitroIcon,
                                        color: B.JX.PREMIUM_TIER_2
                                    }),
                                    (0, s.jsx)(m.Clickable, {
                                        onClick: this.handleClick,
                                        children: (0, s.jsx)(m.Text, {
                                            variant: 'text-sm/normal',
                                            className: et.reactionTooltipText,
                                            'aria-label': 'super reaction tooltip cta',
                                            children: X.Z.Messages.SUPER_REACTION_TOOLTIP_CTA
                                        })
                                    })
                                ]
                            });
                        if (!this.userCanBurstReact() && !this.isKeyboardNavigation)
                            return (0, s.jsx)('div', {
                                className: l()(et.burstReactionTooltipPrompt, et.burstReactionTooltipSpacer),
                                children: (0, s.jsxs)('div', {
                                    children: [
                                        (0, s.jsx)(m.Text, {
                                            variant: 'text-sm/normal',
                                            'aria-label': 'super reaction tooltip upsell',
                                            children: X.Z.Messages.SUPER_REACTION_TOOLTIP_UPSELL
                                        }),
                                        (0, s.jsx)(N.Z, {
                                            subscriptionTier: q.Si.TIER_2,
                                            buttonText: X.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                                            className: et.burstReactionTooltipUpsellCta,
                                            onClick: e => e.stopPropagation()
                                        })
                                    ]
                                })
                            });
                        return null;
                    })(),
                    this.renderEmojiDetails()
                ]
            }) : (0, s.jsxs)('div', {
                className: et.reactionTooltip,
                onMouseEnter: this.handleEnterTooltip,
                onMouseLeave: this.handleLeave,
                children: [
                    (0, s.jsx)(m.Clickable, {
                        onClick: r,
                        children: (0, s.jsxs)('div', {
                            className: et.reactionTooltipInner,
                            children: [
                                (0, s.jsx)(p.Z, {
                                    className: et.reactionTooltipEmoji,
                                    emojiId: e.id,
                                    emojiName: e.name,
                                    animated: e.animated,
                                    size: this.props.emojiSize
                                }),
                                u()
                            ]
                        })
                    }),
                    this.renderEmojiDetails()
                ]
            });
        }), en(this, 'refreshTooltipPositionKey', () => {
            this.setState({ tooltipPositionKey: String(Date.now()) });
        }), en(this, 'handleShowVerificationGate', () => {
            let {
                message: e,
                isPendingMember: t
            } = this.props;
            if (!t)
                return null;
            let n = A.Z.getChannel(e.getChannelId()), i = y.Z.getGuild(null == n ? void 0 : n.getGuildId());
            null != i && (0, C.hk)(i.id);
        }), en(this, 'handleSetReactionRef', e => {
            this.setState({ reactionRef: e });
        }), en(this, 'trackReactionTooltipViewed', () => {
            let {
                    emoji: e,
                    message: t,
                    type: n
                } = this.props, i = w.default.getCurrentUser(), s = A.Z.getChannel(t.getChannelId()), o = n === H.O.BURST, a = (0, F.I5)(i), l = o ? q.cd.EMOJI_IN_BURST_REACTION_HOVER : q.cd.EMOJI_IN_REACTION_HOVER;
            o && !this.userCanBurstReact() && !a && (l = q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), T.ZP.trackWithMetadata(J.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                type: l,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: e.animated,
                is_custom: null != e.id,
                nonce: this.nonce
            }), o && null != s && !a && !this.userCanBurstReact() && D.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
                type: q.cd.BURST_REACTION_UPSELL,
                location: {
                    page: (null == s ? void 0 : s.getGuildId()) != null ? J.ZY5.GUILD_CHANNEL : J.ZY5.DM_CHANNEL,
                    section: (0, j.s4)(s),
                    object: J.qAy.EMOJI_REACTION_TOOLTIP_UPSELL
                }
            });
        });
    }
}
en(ea, 'defaultProps', { emojiSize: 'jumbo' });
let el = o.memo(e => {
        let {
                type: t,
                burst_colors: n,
                message: i,
                emoji: o
            } = e, a = t === H.O.BURST, l = (0, E.v)(a && null != n ? n : []), r = (0, d.e7)([V.Z], () => void 0 !== V.Z.getEffectForEmojiId(i.getChannelId(), i.id, o)), c = (0, d.e7)([f.Z], () => f.Z.useReducedMotion), u = M.Yk.useSetting(), h = w.default.getCurrentUser(), m = (0, F.I5)(h), p = (0, d.e7)([V.Z], () => V.Z.getReactionPickerAnimation(i.id, o.name, o.id)), g = a && (r || null != p);
        return (0, s.jsx)(ea, {
            ...e,
            colors: l,
            isBurstReaction: a,
            hideEmoji: g,
            userHasPremium: m,
            reduceMotion: c,
            animateEmoji: u,
            animationStartPosition: p
        });
    }), er = e => {
        var t;
        let {
            emojiId: n,
            expressionSourceGuild: i,
            hasJoinedExpressionSourceGuild: o,
            onClose: a,
            popoutData: l,
            currentGuildId: r,
            nonce: c
        } = e;
        (0, x.u)({
            emojiId: n,
            currentGuildId: r,
            popoutData: l,
            emojiSourceGuildId: null == i ? void 0 : i.id,
            nonce: c
        });
        let u = null !== (t = null == i ? void 0 : i.isDiscoverable()) && void 0 !== t && t, d = null !== i && u;
        return (0, s.jsx)(s.Fragment, {
            children: d ? null == i ? null : (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)('div', {
                        className: $.reactionEmojiDetailsUnfurlGuildDetails,
                        children: (0, s.jsx)(W.Oe, {
                            expressionSourceGuild: i,
                            hasJoinedExpressionSourceGuild: o,
                            isDisplayingJoinGuildButtonInPopout: l.type === G.$.JOIN_GUILD
                        })
                    }),
                    (0, s.jsx)(W.n_, {
                        emojiId: n,
                        expressionSourceGuild: i,
                        hasJoinedEmojiSourceGuild: o,
                        onClose: a,
                        popoutData: l,
                        isDisplayingButtonInTopSection: !1
                    })
                ]
            }) : (0, s.jsx)(m.Text, {
                variant: 'text-sm/normal',
                'aria-label': l.type,
                children: l.emojiDescription
            })
        });
    }, ec = e => {
        var t;
        let {
                emojiId: n,
                refreshPositionKey: i,
                onClose: a,
                nonce: r
            } = e, {joinedEmojiSourceGuild: c} = (0, d.cj)([
                v.Z,
                y.Z
            ], () => {
                let e = v.Z.getCustomEmojiById(n);
                return { joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === b.B.GUILD ? y.Z.getGuild(null == e ? void 0 : e.guildId) : void 0 };
            }), [u, h] = o.useState(void 0), [p, g] = o.useState(!1), [f, T] = o.useState(!1), [_, E] = o.useState(!1), x = null != c, C = null !== (t = null == u ? void 0 : u.isDiscoverable()) && void 0 !== t && t, R = L.Z.getGuildId(), S = null != R && (R === (null == u ? void 0 : u.id) || R === (null == c ? void 0 : c.id)), N = w.default.getCurrentUser(), O = (0, G.a)({
                isPremium: F.ZP.isPremium(N),
                hasJoinedEmojiSourceGuild: x,
                isDiscoverable: C,
                emojiComesFromCurrentGuild: S,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1
            });
        o.useEffect(() => {
            if (!!p && !_)
                (async () => {
                    i(), T(!0), h(await I.Z.getGuildFromEmojiId(n)), T(!1), E(!0), i();
                })();
        }, [
            n,
            p,
            _,
            i
        ]);
        if (x)
            return null;
        let Z = () => {
                g(!p);
            }, j = p && void 0 !== u;
        return (0, s.jsxs)('div', {
            children: [
                j ? (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)('div', { className: $.reactionEmojiDetailsDivider }),
                        null != O.emojiDescription && O.type !== G.$.UNAVAILABLE && (0, s.jsx)(m.Text, {
                            variant: 'text-sm/normal',
                            'aria-label': O.type,
                            children: O.emojiDescription
                        })
                    ]
                }) : (() => {
                    let e = X.Z.Messages.INVENTORY_EMOJI_DETAILS_V2;
                    return (0, s.jsxs)(m.Clickable, {
                        onClick: Z,
                        className: $.reactionEmojiDetailsClickable,
                        children: [
                            (0, s.jsx)(m.Text, {
                                variant: 'text-sm/normal',
                                color: 'none',
                                'aria-label': e,
                                children: e
                            }),
                            (0, s.jsx)(m.ChevronSmallDownIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                className: l()($.reactionEmojiDetailsArrow, { [$.reactionEmojiDetailsArrowCollapsed]: !p })
                            })
                        ]
                    });
                })(),
                f ? (0, s.jsx)(z.SE, { className: $.emojiDetailsLoader }) : j && (0, s.jsx)(er, {
                    emojiId: n,
                    expressionSourceGuild: u,
                    hasJoinedExpressionSourceGuild: x,
                    onClose: a,
                    popoutData: O,
                    currentGuildId: R,
                    nonce: r
                })
            ]
        });
    };
