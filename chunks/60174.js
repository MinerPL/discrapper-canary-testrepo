n.d(t, {
    X: function () {
        return M;
    }
}), n(789020), n(47120);
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(954955), o = n.n(r), c = n(507274), d = n(481060), u = n(130402), _ = n(466794), E = n(659215), m = n(222677), I = n(995774), T = n(931651), h = n(594174), N = n(630388), f = n(74538), p = n(566006), C = n(981631), g = n(185923), S = n(474936), A = n(689938), x = n(704963), O = n(667671);
function R(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class M extends a.Component {
    render() {
        let {
                type: e,
                message: t,
                className: n,
                children: a,
                useChatFontScaling: s
            } = this.props, {isReactionPickerActive: r} = this.state, o = t.state === C.yb.SENDING, c = e === p.O.BURST;
        if (o || (0, N.yE)(t.flags, C.iLy.EPHEMERAL))
            return null;
        let E = h.default.getCurrentUser(), m = (0, f.I5)(E), I = c ? A.Z.Messages.ADD_BURST_REACTION : A.Z.Messages.ADD_REACTION;
        !m && c && (I = (0, i.jsx)(_.X, { tooltipText: A.Z.Messages.ADD_BURST_REACTION }));
        let T = s ? O : x;
        return (0, i.jsx)(d.Popout, {
            shouldShow: r,
            onRequestClose: this.handleReactionPickerToggle,
            renderPopout: this.renderReactionPopout,
            position: 'right',
            children: (e, t) => {
                let {isShown: s} = t;
                return (0, i.jsx)(d.TooltipContainer, {
                    text: I,
                    color: d.TooltipColors.PRIMARY,
                    'aria-label': c ? A.Z.Messages.ADD_BURST_REACTION : A.Z.Messages.ADD_REACTION,
                    tooltipClassName: T.__invalid_addReactionTooltip,
                    children: (0, i.jsxs)(d.Clickable, {
                        ...e,
                        onClick: e => {
                            this.handleAddReactionClick(e);
                        },
                        onMouseEnter: () => (0, u.x)(g.qR.AddReactionPopoutMouseEntered),
                        onFocus: () => (0, u.x)(g.qR.AddReactionPopoutFocused),
                        className: l()(T.reactionBtn, { [T.active]: s }, n),
                        children: [
                            c ? (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(d.SuperReactionIcon, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: T.icon
                                })
                            }) : (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(d.ReactionIcon, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: T.icon
                                })
                            }),
                            a
                        ]
                    })
                });
            }
        });
    }
    constructor(...e) {
        super(...e), R(this, 'state', { isReactionPickerActive: !1 }), R(this, 'onAddReaction', (e, t) => {
            if (null == e)
                return;
            let {
                channel: n,
                message: i,
                isForumToolbar: a
            } = this.props;
            (0, m.rU)(n.id, i.id, (0, I.g1)(e), a ? m.TW.FORUM_TOOLBAR : m.TW.MESSAGE, { burst: t });
        }), R(this, 'handleReactionPickerToggle', () => {
            this.setState(e => ({ isReactionPickerActive: !e.isReactionPickerActive }));
        }), R(this, 'handleAddReactionClick', e => {
            let {
                type: t,
                channel: n
            } = this.props;
            e.stopPropagation();
            let i = h.default.getCurrentUser();
            t === p.O.BURST && !(0, f.I5)(i) && (0, E.openBurstReactionsUpsellModal)({
                analytics: {
                    type: S.cd.BURST_REACTION_UPSELL,
                    page: null != n.getGuildId() ? C.ZY5.GUILD_CHANNEL : C.ZY5.DM_CHANNEL,
                    section: (0, I.s4)(n),
                    object: C.qAy.INLINE_REACTION_PICKER_UPSELL
                }
            }), this.handleReactionPickerToggle();
        }), R(this, 'renderReactionPopout', e => {
            let {closePopout: t} = e, {
                    type: n,
                    channel: a,
                    message: s
                } = this.props, l = {
                    openPopoutType: 'message_reaction_emoji_picker',
                    ...n === p.O.BURST && {
                        openPopoutType: 'message_super_reaction_emoji_picker',
                        page: null != a.getGuildId() ? C.ZY5.GUILD_CHANNEL : C.ZY5.DM_CHANNEL,
                        section: (0, I.s4)(a),
                        object: C.qAy.REACTION_RAIL
                    }
                }, r = (0, i.jsx)(T.$, {
                    closePopout: t,
                    channel: a,
                    onSelectEmoji: (e, n, i) => {
                        this.onAddReaction(e, i), n && (i ? o()(t, 150)() : t());
                    },
                    analyticsOverride: l,
                    messageId: s.id
                });
            return (0, i.jsx)(c.M.Consumer, {
                children: e => e ? (0, i.jsx)(d.Dialog, {
                    'aria-label': A.Z.Messages.REACTION_PICKER,
                    children: r
                }) : r
            });
        });
    }
}
