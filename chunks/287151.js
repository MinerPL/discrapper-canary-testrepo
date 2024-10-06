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
}),
    n(47120);
var i,
    s = n(735250),
    o = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(772848),
    c = n(748780),
    d = n(866442),
    u = n(442837),
    h = n(846519),
    m = n(481060),
    p = n(596454),
    f = n(785388),
    g = n(607070),
    _ = n(446489),
    T = n(367907),
    v = n(436774),
    E = n(98474),
    b = n(339085),
    I = n(906411),
    C = n(56314),
    S = n(231053),
    R = n(944386),
    x = n(305325),
    N = n(33154),
    O = n(692147),
    Z = n(197115),
    A = n(659215),
    j = n(222677),
    M = n(995774),
    y = n(695346),
    L = n(592125),
    P = n(430824),
    U = n(542578),
    w = n(914010),
    D = n(594174),
    k = n(451478),
    B = n(626135),
    F = n(74538),
    V = n(960020),
    H = n(566006),
    G = n(886132),
    W = n(183023),
    z = n(524444),
    K = n(89729),
    Y = n(640753),
    J = n(981631),
    q = n(474936),
    X = n(689938),
    $ = n(507444),
    Q = n(96042),
    ee = n(968661),
    et = n(564793);
function en(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let ei = 9;
function es(e, t, n) {
    (0, m.openModal)((e) =>
        (0, s.jsx)(f.default, {
            ...e,
            message: t,
            selectedReaction: n
        })
    );
}
function eo(e, t, n) {
    return (n === H.O.BURST && t) || (n === H.O.NORMAL && e);
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
        let { autoUnfurlReactionTooltip: t } = this.props;
        k.Z.isFocused()
            ? (this.scale.setValue(0),
              this.opacity.setValue(0),
              c.Z.parallel([
                  c.Z.timing(this.scale, {
                      toValue: 1,
                      duration: t ? 200 : 300,
                      easing: c.Z.Easing.inOut(c.Z.Easing.back())
                  }),
                  c.Z.timing(this.opacity, {
                      toValue: 1,
                      duration: t ? 200 : 300
                  })
              ]).start(e))
            : (this.scale.setValue(1), this.opacity.setValue(1), e());
    }
    render() {
        let e, t;
        let { count: n, burst_count: i, colors: o, isBurstReaction: a, hideCount: r, emoji: u, readOnly: h, isLurking: f, isGuest: g, isPendingMember: T, className: v, useChatFontScaling: b, message: I, hideEmoji: C, animationStartPosition: S } = this.props,
            { shouldShowTooltip: R, tooltipTextAria: x, reactionRef: N, tooltipPositionKey: Z } = this.state,
            A = b ? ee : Q,
            j = {
                transform: [{ scale: this.scale }],
                opacity: this.opacity
            },
            y = a ? i : n;
        if (a && null != o) {
            var L;
            let { accentColor: n, backgroundColor: i, opacity: s } = o,
                a = null !== (L = (0, d.wK)(null != i ? i : '', s)) && void 0 !== L ? L : '';
            this.isMe() && (j.borderColor = i), (j.background = a), (e = n), (t = n);
        }
        let P = null == N ? void 0 : N.getBoundingClientRect(),
            U = null != S && null != P,
            w = null == S;
        return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(m.Popout, {
                shouldShow: R,
                'aria-label': null != x && x,
                renderPopout: this.renderTooltip,
                nudgeAlignIntoViewport: !0,
                position: 'top',
                align: 'center',
                positionKey: Z,
                children: () =>
                    (0, s.jsx)('div', {
                        onMouseEnter: this.handleEnter,
                        onMouseLeave: this.handleLeave,
                        ref: this.handleSetReactionRef,
                        children: (0, s.jsx)(c.Z.div, {
                            className: l()(A.reaction, v, {
                                [A.reactionMe]: this.isMe(),
                                [A.reactionReadOnly]: h && !f && !T && !g,
                                [A.shakeReaction]: C && null == S
                            }),
                            style: j,
                            children: (0, s.jsx)(m.Popout, {
                                renderPopout: this.renderLurkerModeUpsellPopout,
                                position: 'top',
                                children: (n) =>
                                    (0, s.jsxs)(m.Clickable, {
                                        ...n,
                                        className: A.reactionInner,
                                        onClick: this.handleClick,
                                        'aria-disabled': h,
                                        'aria-label': (0, M.iD)(this.isMe(), y, u, a),
                                        'aria-pressed': this.isMe(),
                                        children: [
                                            (0, s.jsx)('div', {
                                                className: l()({ [A.burstGlow]: a }),
                                                style: { boxShadow: '0 0 16px '.concat(t) }
                                            }),
                                            (0, s.jsxs)('div', {
                                                children: [
                                                    a
                                                        ? (0, s.jsxs)(s.Fragment, {
                                                              children: [
                                                                  U &&
                                                                      (0, s.jsx)(E.Z, {
                                                                          messageId: I.id,
                                                                          emoji: u,
                                                                          startPosition: S,
                                                                          targetPosition: P
                                                                      }),
                                                                  w &&
                                                                      (0, s.jsx)(Y.Z, {
                                                                          count: i,
                                                                          emoji: u,
                                                                          channelId: I.getChannelId(),
                                                                          messageId: I.id,
                                                                          useChatFontScaling: b,
                                                                          color: t
                                                                      })
                                                              ]
                                                          })
                                                        : null,
                                                    (0, s.jsx)(p.Z, {
                                                        className: l()({ [A.hideEmoji]: C }),
                                                        emojiId: u.id,
                                                        emojiName: u.name,
                                                        size: 'reaction',
                                                        animated: u.animated
                                                    })
                                                ]
                                            }),
                                            r
                                                ? null
                                                : (0, s.jsx)(_.Z, {
                                                      className: A.reactionCount,
                                                      value: y,
                                                      color: e,
                                                      digitWidth: ei
                                                  }),
                                            (0, s.jsx)(O.Z, {
                                                count: y,
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
        super(...e),
            en(this, 'isReactionEventActive', !1),
            en(this, 'isKeyboardNavigation', !1),
            en(this, 'scale', new c.Z.Value(1)),
            en(this, 'opacity', new c.Z.Value(1)),
            en(this, 'timeout', new h.V7()),
            en(this, 'hideTimeout', new h.V7()),
            en(this, 'ctaRef', o.createRef()),
            en(this, 'type', H.O.NORMAL),
            en(this, 'colors', {
                backgroundColor: void 0,
                borderColor: void 0,
                textColor: void 0
            }),
            en(this, 'state', {
                shouldShowTooltip: !1,
                tooltipText: null,
                tooltipTextAria: null,
                reactionRef: null,
                tooltipPositionKey: void 0
            }),
            en(this, 'hasShownTooltip', !1),
            en(this, 'nonce', (0, r.Z)()),
            en(this, 'userCanBurstReact', () => this.props.userHasPremium),
            en(this, 'handleClick', (e) => {
                e.stopPropagation();
                let { message: t, emoji: n, readOnly: i, isBurstReaction: s, isPendingMember: o, isLurking: a, isGuest: l, isForumToolbar: r } = this.props,
                    c = L.Z.getChannel(t.getChannelId());
                if (a || l) {
                    var d, u;
                    null === (u = this.ctaRef) || void 0 === u || null === (d = u.current) || void 0 === d || d.focus();
                    return;
                }
                let h = t.getChannelId(),
                    m = r ? j.TW.FORUM_TOOLBAR : j.TW.MESSAGE_INLINE_BUTTON;
                if (s && !this.userCanBurstReact()) {
                    (0, A.openBurstReactionsUpsellModal)({
                        analytics: {
                            type: q.cd.BURST_REACTION_UPSELL,
                            page: (null == c ? void 0 : c.getGuildId()) != null ? J.ZY5.GUILD_CHANNEL : J.ZY5.DM_CHANNEL,
                            section: null != c ? (0, M.s4)(c) : void 0,
                            object: J.qAy.EMOJI_REACTION_UPSELL
                        }
                    });
                    return;
                }
                o
                    ? this.handleShowVerificationGate()
                    : !i &&
                      (this.isMe()
                          ? (0, j.WO)({
                                channelId: h,
                                messageId: t.id,
                                emoji: n,
                                location: m,
                                options: { burst: s }
                            })
                          : (0, j.rU)(h, t.id, n, m, { burst: s }));
            }),
            en(this, 'handleEnter', (e) => {
                let { emoji: t, message: n, type: i, reduceMotion: s, animateEmoji: o, autoUnfurlReactionTooltip: a } = this.props,
                    l = i === H.O.BURST;
                l &&
                    !this.isReactionEventActive &&
                    !s &&
                    o &&
                    (0, j.T6)({
                        channelId: n.getChannelId(),
                        messageId: n.id,
                        emoji: t,
                        key: V.I.HOVER
                    }),
                    (this.isReactionEventActive = !0),
                    (this.isKeyboardNavigation = 'focus' === e.type),
                    this.timeout.start(l ? 750 : a ? 200 : 500, this.showTooltip, !1);
            }),
            en(this, 'handleEnterTooltip', () => {
                (this.isReactionEventActive = !0), this.handleShowTooltip();
            }),
            en(this, 'handleShowTooltip', () => {
                this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), U.Z.addChangeListener(this.updateTooltipText));
            }),
            en(this, 'showTooltip', () => {
                !this.props.readOnly && (this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), (this.hasShownTooltip = !0));
            }),
            en(this, 'handleLeave', () => {
                (this.isReactionEventActive = !1), (this.isKeyboardNavigation = !1), this.timeout.stop(), U.Z.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1);
            }),
            en(this, 'hideTooltip', () => {
                this.setState({ shouldShowTooltip: !1 }), this.hasShownTooltip && B.default.track(J.rMx.CLOSE_POPOUT, { nonce: this.nonce });
            }),
            en(this, 'isMe', () => {
                let { me: e, me_burst: t, type: n } = this.props;
                return eo(e, t, n);
            }),
            en(this, 'updateTooltipText', () => {
                let { message: e, emoji: t, type: n } = this.props,
                    i = (0, K.g)(e, t, n),
                    s = this.isKeyboardNavigation ? i : (0, K.g)(e, t, n, J.dG4);
                this.setState({
                    tooltipText: s,
                    tooltipTextAria: i,
                    shouldShowTooltip: null != s && '' !== s
                });
            }),
            en(this, 'renderLurkerModeUpsellPopout', (e) => {
                let { closePopout: t } = e,
                    { message: n, isLurking: i } = this.props,
                    o = L.Z.getChannel(n.getChannelId()),
                    a = P.Z.getGuild(null == o ? void 0 : o.getGuildId());
                return i && null != a
                    ? (0, s.jsx)(N.Z, {
                          ctaRef: this.ctaRef,
                          type: N.s.REACTIONS,
                          guild: a,
                          closePopout: t
                      })
                    : (0, s.jsx)(s.Fragment, {});
            }),
            en(this, 'renderEmojiDetails', () => {
                let e = this.props.emoji;
                return (
                    null != e.id &&
                    (0, s.jsx)(ec, {
                        emojiId: e.id,
                        refreshPositionKey: this.refreshTooltipPositionKey,
                        onClose: this.handleLeave,
                        nonce: this.nonce
                    })
                );
            }),
            en(this, 'renderTooltip', () => {
                let { emoji: e, message: t, type: n, me_burst: i, isBurstReaction: o = !1 } = this.props,
                    { tooltipText: a } = this.state,
                    r = (n) => {
                        let i = L.Z.getChannel(t.getChannelId());
                        if (null != i)
                            this.handleLeave(),
                                es(i, t, {
                                    emoji: e,
                                    reactionType: o ? H.O.BURST : H.O.NORMAL
                                });
                    },
                    c = 'string' == typeof a ? '' === a.trim() : null == a,
                    d = () =>
                        c || null == a
                            ? null
                            : (0, s.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  className: et.reactionTooltipText,
                                  'aria-label': a,
                                  children: a
                              });
                return n === H.O.BURST
                    ? (0, s.jsxs)('div', {
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
                                          d()
                                      ]
                                  })
                              }),
                              (() => {
                                  let e = D.default.getCurrentUser();
                                  if (i)
                                      return (0, s.jsxs)('div', {
                                          className: l()(et.burstReactionTooltipPrompt, et.burstReactionTooltipSpacer),
                                          children: [
                                              (0, F.I5)(e) &&
                                                  (0, s.jsx)(m.NitroWheelIcon, {
                                                      size: 'md',
                                                      className: et.burstReactionTooltipNitroIcon,
                                                      color: v.JX.PREMIUM_TIER_2
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
                                                  color: v.JX.PREMIUM_TIER_2
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
                                                  (0, s.jsx)(Z.Z, {
                                                      subscriptionTier: q.Si.TIER_2,
                                                      buttonText: X.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                                                      className: et.burstReactionTooltipUpsellCta,
                                                      onClick: (e) => e.stopPropagation()
                                                  })
                                              ]
                                          })
                                      });
                                  return null;
                              })(),
                              this.renderEmojiDetails()
                          ]
                      })
                    : (0, s.jsxs)('div', {
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
                                          d()
                                      ]
                                  })
                              }),
                              this.renderEmojiDetails()
                          ]
                      });
            }),
            en(this, 'refreshTooltipPositionKey', () => {
                this.setState({ tooltipPositionKey: String(Date.now()) });
            }),
            en(this, 'handleShowVerificationGate', () => {
                let { message: e, isPendingMember: t } = this.props;
                if (!t) return null;
                let n = L.Z.getChannel(e.getChannelId()),
                    i = P.Z.getGuild(null == n ? void 0 : n.getGuildId());
                null != i && (0, x.hk)(i.id);
            }),
            en(this, 'handleSetReactionRef', (e) => {
                this.setState({ reactionRef: e });
            }),
            en(this, 'trackReactionTooltipViewed', () => {
                let { emoji: e, message: t, type: n } = this.props,
                    i = D.default.getCurrentUser(),
                    s = L.Z.getChannel(t.getChannelId()),
                    o = n === H.O.BURST,
                    a = (0, F.I5)(i),
                    l = o ? q.cd.EMOJI_IN_BURST_REACTION_HOVER : q.cd.EMOJI_IN_REACTION_HOVER;
                o && !this.userCanBurstReact() && !a && (l = q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                    T.ZP.trackWithMetadata(J.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                        type: l,
                        expression_id: e.id,
                        expression_name: e.name,
                        is_animated: e.animated,
                        is_custom: null != e.id,
                        nonce: this.nonce
                    }),
                    o &&
                        null != s &&
                        !a &&
                        !this.userCanBurstReact() &&
                        B.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
                            type: q.cd.BURST_REACTION_UPSELL,
                            location: {
                                page: (null == s ? void 0 : s.getGuildId()) != null ? J.ZY5.GUILD_CHANNEL : J.ZY5.DM_CHANNEL,
                                section: (0, M.s4)(s),
                                object: J.qAy.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        });
            });
    }
}
en(ea, 'defaultProps', { emojiSize: 'jumbo' });
let el = o.memo((e) => {
        let { type: t, burst_colors: n, message: i, emoji: o } = e,
            a = t === H.O.BURST,
            l = (0, C.v)(a && null != n ? n : []),
            r = (0, u.e7)([V.Z], () => void 0 !== V.Z.getEffectForEmojiId(i.getChannelId(), i.id, o)),
            c = (0, u.e7)([g.Z], () => g.Z.useReducedMotion),
            d = y.Yk.useSetting(),
            h = D.default.getCurrentUser(),
            m = (0, F.I5)(h),
            p = (0, u.e7)([V.Z], () => V.Z.getReactionPickerAnimation(i.id, o.name, o.id)),
            f = a && (r || null != p);
        return (0, s.jsx)(ea, {
            ...e,
            colors: l,
            isBurstReaction: a,
            hideEmoji: f,
            userHasPremium: m,
            reduceMotion: c,
            animateEmoji: d,
            animationStartPosition: p
        });
    }),
    er = (e) => {
        var t, n, i;
        let { emojiId: o, expressionSourceGuild: a, hasJoinedExpressionSourceGuild: l, onClose: r, popoutData: c, currentGuildId: d, nonce: u } = e;
        (0, R.u)({
            emojiId: o,
            currentGuildId: d,
            popoutData: c,
            emojiSourceGuildId: null == a ? void 0 : a.id,
            nonce: u
        });
        let h = null !== (n = null == a ? void 0 : a.isDiscoverable()) && void 0 !== n && n,
            p = null != a && h,
            f = (null !== (i = null == a ? void 0 : null === (t = a.emojis) || void 0 === t ? void 0 : t.length) && void 0 !== i ? i : 0) > 1;
        return (0, s.jsx)(s.Fragment, {
            children: p
                ? null == a
                    ? null
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)('div', {
                                  className: $.reactionEmojiDetailsUnfurlGuildDetails,
                                  children: (0, s.jsx)(W.Oe, {
                                      expressionSourceGuild: a,
                                      hasJoinedExpressionSourceGuild: l,
                                      isDisplayingJoinGuildButtonInPopout: c.type === G.$.JOIN_GUILD
                                  })
                              }),
                              f &&
                                  (0, s.jsx)(W.n_, {
                                      emojiId: o,
                                      expressionSourceGuild: a,
                                      hasJoinedEmojiSourceGuild: l,
                                      onClose: r,
                                      popoutData: c,
                                      isDisplayingButtonInTopSection: !1
                                  })
                          ]
                      })
                : (0, s.jsx)(m.Text, {
                      variant: 'text-sm/normal',
                      'aria-label': c.type,
                      children: c.emojiDescription
                  })
        });
    },
    ec = (e) => {
        var t;
        let { emojiId: n, refreshPositionKey: i, onClose: a, nonce: r } = e,
            { joinedEmojiSourceGuild: c } = (0, u.cj)([b.ZP, P.Z], () => {
                let e = b.ZP.getCustomEmojiById(n);
                return { joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === I.B.GUILD ? P.Z.getGuild(null == e ? void 0 : e.guildId) : void 0 };
            }),
            [d, h] = o.useState(void 0),
            [p, f] = o.useState(void 0),
            [g, _] = o.useState(null),
            [T, v] = o.useState(!1),
            [E, C] = o.useState(!1),
            [R, x] = o.useState(!1),
            N = null != c,
            O = null !== (t = null == d ? void 0 : d.isDiscoverable()) && void 0 !== t && t,
            Z = w.Z.getGuildId(),
            A = null != Z && (Z === (null == d ? void 0 : d.id) || Z === (null == c ? void 0 : c.id)),
            j = D.default.getCurrentUser(),
            M = (0, G.a)({
                sourceType: g,
                expressionSourceApplication: null != p ? p : null,
                isPremium: F.ZP.isPremium(j),
                hasJoinedEmojiSourceGuild: N,
                isDiscoverable: O,
                emojiComesFromCurrentGuild: A,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1
            });
        o.useEffect(() => {
            if (!!T && !R)
                (async () => {
                    i(), C(!0);
                    let e = null != n ? await (0, S.Fi)(n) : null;
                    if (null != e)
                        switch ((_(e.type), e.type)) {
                            case S.w6.APPLICATION:
                                f(e.application);
                                break;
                            case S.w6.GUILD:
                                h(e.guild);
                        }
                    else h(null);
                    C(!1), x(!0), i();
                })();
        }, [n, T, R, i]);
        if (N) return null;
        let y = () => {
                v(!T);
            },
            L = T && (void 0 !== d || void 0 !== p);
        return (0, s.jsxs)('div', {
            children: [
                L
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)('div', { className: $.reactionEmojiDetailsDivider }),
                              null != M.emojiDescription &&
                                  M.type !== G.$.UNAVAILABLE &&
                                  (0, s.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      'aria-label': M.type,
                                      children: M.emojiDescription
                                  })
                          ]
                      })
                    : (() => {
                          let e = X.Z.Messages.INVENTORY_EMOJI_DETAILS_V2;
                          return (0, s.jsxs)(m.Clickable, {
                              onClick: y,
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
                                      className: l()($.reactionEmojiDetailsArrow, { [$.reactionEmojiDetailsArrowCollapsed]: !T })
                                  })
                              ]
                          });
                      })(),
                E
                    ? (0, s.jsx)(z.SE, { className: $.emojiDetailsLoader })
                    : L &&
                      (0, s.jsx)(er, {
                          emojiId: n,
                          expressionSourceGuild: d,
                          hasJoinedExpressionSourceGuild: N,
                          onClose: a,
                          popoutData: M,
                          currentGuildId: Z,
                          nonce: r
                      })
            ]
        });
    };
