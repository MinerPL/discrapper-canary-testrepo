"use strict";
i.r(t), i.d(t, {
  REACTION_MIN_WIDTH_DIGITS: function() {
    return ea
  },
  showReactionsModal: function() {
    return el
  },
  isMeReaction: function() {
    return eo
  },
  Reaction: function() {
    return er
  }
}), i("222007");
var n = i("37983"),
  a = i("884691"),
  l = i("414456"),
  o = i.n(l),
  s = i("748820"),
  r = i("458960"),
  u = i("509043"),
  c = i("446674"),
  d = i("862337"),
  h = i("130969"),
  m = i("77078"),
  f = i("430568"),
  p = i("57155"),
  T = i("206230"),
  R = i("716241"),
  g = i("58533"),
  E = i("385976"),
  I = i("858619"),
  N = i("102873"),
  S = i("101263"),
  _ = i("865453"),
  v = i("233322"),
  C = i("13066"),
  j = i("785621"),
  O = i("635956"),
  A = i("85589"),
  x = i("166257"),
  M = i("432173"),
  b = i("845579"),
  y = i("42203"),
  P = i("305961"),
  L = i("486996"),
  U = i("162771"),
  B = i("697218"),
  k = i("471671"),
  D = i("738107"),
  w = i("791106"),
  V = i("256170"),
  F = i("216422"),
  G = i("599110"),
  H = i("719923"),
  z = i("15935"),
  K = i("875978"),
  W = i("412745"),
  J = i("459698"),
  Y = i("933629"),
  X = i("331011"),
  Z = i("81924"),
  q = i("49111"),
  Q = i("646718"),
  $ = i("782340"),
  ee = i("325417"),
  et = i("159441"),
  ei = i("450076"),
  en = i("363454");
let ea = 9;

function el(e, t, i) {
  (0, m.openModal)(e => (0, n.jsx)(p.default, {
    ...e,
    message: t,
    selectedReaction: i
  }))
}

function eo(e, t, i) {
  return i === K.ReactionTypes.BURST && t || i === K.ReactionTypes.NORMAL && e
}
class es extends a.PureComponent {
  componentWillAppear(e) {
    this.animateIn(e)
  }
  componentWillEnter(e) {
    this.animateIn(e)
  }
  componentWillUnmount() {
    this.hideTooltip()
  }
  animateIn(e) {
    let {
      autoUnfurlReactionTooltip: t
    } = this.props;
    k.default.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), r.default.parallel([r.default.timing(this.scale, {
      toValue: 1,
      duration: t ? 200 : 300,
      easing: r.default.Easing.inOut(r.default.Easing.back())
    }), r.default.timing(this.opacity, {
      toValue: 1,
      duration: t ? 200 : 300
    })]).start(e)) : (this.scale.setValue(1), this.opacity.setValue(1), e())
  }
  render() {
    let e, t;
    let {
      count: i,
      burst_count: a,
      colors: l,
      isBurstReaction: s,
      hideCount: c,
      emoji: d,
      readOnly: h,
      isLurking: p,
      isGuest: T,
      isPendingMember: R,
      className: E,
      useChatFontScaling: I,
      message: N,
      hideEmoji: S,
      animationStartPosition: _
    } = this.props, {
      shouldShowTooltip: v,
      tooltipTextAria: C,
      reactionRef: O,
      tooltipPositionKey: A
    } = this.state, x = I ? ei : et, b = {
      transform: [{
        scale: this.scale
      }],
      opacity: this.opacity
    }, y = s ? a : i;
    if (s && null != l) {
      var P;
      let {
        accentColor: i,
        backgroundColor: n,
        opacity: a
      } = l, o = null !== (P = (0, u.hex2rgb)(null != n ? n : "", a)) && void 0 !== P ? P : "";
      this.isMe() && (b.borderColor = n), b.background = o, e = i, t = i
    }
    let L = null == O ? void 0 : O.getBoundingClientRect(),
      U = null != _ && null != L,
      B = null == _;
    return (0, n.jsx)(n.Fragment, {
      children: (0, n.jsx)(m.Popout, {
        shouldShow: v,
        "aria-label": null != C && C,
        renderPopout: this.renderTooltip,
        nudgeAlignIntoViewport: !0,
        position: "top",
        align: "center",
        positionKey: A,
        children: () => (0, n.jsx)("div", {
          onMouseEnter: this.handleEnter,
          onMouseLeave: this.handleLeave,
          ref: this.handleSetReactionRef,
          children: (0, n.jsx)(r.default.div, {
            className: o(x.reaction, E, {
              [x.reactionMe]: this.isMe(),
              [x.reactionReadOnly]: h && !p && !R && !T,
              [x.shakeReaction]: S && null == _
            }),
            style: b,
            children: (0, n.jsx)(m.Popout, {
              renderPopout: this.renderLurkerModeUpsellPopout,
              position: "top",
              children: i => (0, n.jsxs)(m.Clickable, {
                ...i,
                className: x.reactionInner,
                onClick: this.handleClick,
                "aria-disabled": h,
                "aria-label": (0, M.getAccessibleEmojiDisplayName)(this.isMe(), y, d, s),
                "aria-pressed": this.isMe(),
                children: [(0, n.jsx)("div", {
                  className: o({
                    [x.burstGlow]: s
                  }),
                  style: {
                    boxShadow: "0 0 16px ".concat(t)
                  }
                }), (0, n.jsxs)("div", {
                  children: [s ? (0, n.jsxs)(n.Fragment, {
                    children: [U && (0, n.jsx)(g.default, {
                      messageId: N.id,
                      emoji: d,
                      startPosition: _,
                      targetPosition: L
                    }), B && (0, n.jsx)(Z.default, {
                      count: a,
                      emoji: d,
                      channelId: N.getChannelId(),
                      messageId: N.id,
                      useChatFontScaling: I,
                      color: t
                    })]
                  }) : null, (0, n.jsx)(f.default, {
                    className: o({
                      [x.hideEmoji]: S
                    }),
                    emojiId: d.id,
                    emojiName: d.name,
                    size: "reaction",
                    animated: d.animated
                  })]
                }), c ? null : (0, n.jsx)(D.default, {
                  className: x.reactionCount,
                  value: y,
                  color: e,
                  digitWidth: ea
                }), (0, n.jsx)(j.default, {
                  count: y,
                  reactionRef: O
                })]
              })
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.scale = new r.default.Value(1), this.opacity = new r.default.Value(1), this.timeout = new d.Timeout, this.hideTimeout = new d.Timeout, this.ctaRef = a.createRef(), this.type = K.ReactionTypes.NORMAL, this.colors = {
      backgroundColor: void 0,
      borderColor: void 0,
      textColor: void 0
    }, this.state = {
      shouldShowTooltip: !1,
      tooltipText: null,
      tooltipTextAria: null,
      reactionRef: null,
      tooltipPositionKey: void 0
    }, this.hasShownTooltip = !1, this.nonce = (0, s.v4)(), this.userCanBurstReact = () => this.props.userHasPremium, this.handleClick = e => {
      e.stopPropagation();
      let {
        message: t,
        emoji: i,
        readOnly: n,
        isBurstReaction: a,
        isPendingMember: l,
        isLurking: o,
        isGuest: s,
        isForumToolbar: r
      } = this.props, u = y.default.getChannel(t.getChannelId());
      if (o || s) {
        var c, d;
        null === (d = this.ctaRef) || void 0 === d || null === (c = d.current) || void 0 === c || c.focus();
        return
      }
      let h = t.getChannelId(),
        m = r ? x.ReactionLocations.FORUM_TOOLBAR : x.ReactionLocations.MESSAGE;
      if (a && !this.userCanBurstReact()) {
        (0, A.openBurstReactionsUpsellModal)({
          analytics: {
            type: Q.PremiumUpsellTypes.BURST_REACTION_UPSELL,
            page: (null == u ? void 0 : u.getGuildId()) != null ? q.AnalyticsPages.GUILD_CHANNEL : q.AnalyticsPages.DM_CHANNEL,
            section: null != u ? (0, M.getBurstAnalyticsSection)(u) : void 0,
            object: q.AnalyticsObjects.EMOJI_REACTION_UPSELL
          }
        });
        return
      }
      l ? this.handleShowVerificationGate() : !n && (this.isMe() ? (0, x.removeReaction)(h, t.id, i, void 0, m, {
        burst: a
      }) : (0, x.addReaction)(h, t.id, i, m, {
        burst: a
      }))
    }, this.handleEnter = e => {
      let {
        emoji: t,
        message: i,
        type: n,
        reduceMotion: a,
        animateEmoji: l,
        autoUnfurlReactionTooltip: o
      } = this.props, s = n === K.ReactionTypes.BURST;
      s && !this.isReactionEventActive && !a && l && (0, x.playBurstReaction)({
        channelId: i.getChannelId(),
        messageId: i.id,
        emoji: t,
        key: z.BurstReactionEffectSource.HOVER
      }), this.isReactionEventActive = !0, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(s ? 750 : o ? 200 : 500, this.showTooltip, !1)
    }, this.handleEnterTooltip = () => {
      this.isReactionEventActive = !0, this.handleShowTooltip()
    }, this.handleShowTooltip = () => {
      this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), L.default.addChangeListener(this.updateTooltipText))
    }, this.showTooltip = () => {
      this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = !0
    }, this.handleLeave = () => {
      this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.timeout.stop(), L.default.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1)
    }, this.hideTooltip = () => {
      this.setState({
        shouldShowTooltip: !1
      }), this.hasShownTooltip && G.default.track(q.AnalyticEvents.CLOSE_POPOUT, {
        nonce: this.nonce
      })
    }, this.isMe = () => {
      let {
        me: e,
        me_burst: t,
        type: i
      } = this.props;
      return eo(e, t, i)
    }, this.updateTooltipText = () => {
      let {
        message: e,
        emoji: t,
        type: i
      } = this.props, n = (0, X.getReactionTooltipText)(e, t, i), a = this.isKeyboardNavigation ? n : (0, X.getReactionTooltipText)(e, t, i, q.NOOP);
      this.setState({
        tooltipText: a,
        tooltipTextAria: n,
        shouldShowTooltip: null != a && "" !== a
      })
    }, this.renderLurkerModeUpsellPopout = e => {
      let {
        closePopout: t
      } = e, {
        message: i,
        isLurking: a
      } = this.props, l = y.default.getChannel(i.getChannelId()), o = P.default.getGuild(null == l ? void 0 : l.getGuildId());
      return a && null != o ? (0, n.jsx)(C.default, {
        ctaRef: this.ctaRef,
        type: C.LurkerModeUpsellPopoutTypes.REACTIONS,
        guild: o,
        closePopout: t
      }) : (0, n.jsx)(n.Fragment, {})
    }, this.renderEmojiDetails = () => {
      let e = this.props.emoji;
      return null != e.id && (0, n.jsx)(ec, {
        emojiId: e.id,
        refreshPositionKey: this.refreshTooltipPositionKey,
        onClose: this.handleLeave,
        nonce: this.nonce
      })
    }, this.renderTooltip = () => {
      let {
        emoji: e,
        message: t,
        type: i,
        me_burst: a,
        isBurstReaction: l = !1
      } = this.props, {
        tooltipText: s
      } = this.state, r = i => {
        let n = y.default.getChannel(t.getChannelId());
        if (null == n) return;
        this.handleLeave();
        let a = l ? K.ReactionTypes.BURST : K.ReactionTypes.NORMAL;
        el(n, t, {
          emoji: e,
          reactionType: a
        })
      }, u = "string" == typeof s, c = u ? "" === s.trim() : null == s, d = () => c || null == s ? null : (0, n.jsx)(m.Text, {
        variant: "text-sm/normal",
        className: en.reactionTooltipText,
        "aria-label": s,
        children: s
      });
      return i === K.ReactionTypes.BURST ? (0, n.jsxs)(h.Dialog, {
        className: en.reactionTooltip,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, n.jsx)(m.Clickable, {
          className: en.burstReactionTooltipInner,
          onClick: r,
          children: (0, n.jsxs)("div", {
            className: en.burstReactionTooltipMessage,
            children: [(0, n.jsx)(f.default, {
              className: en.reactionTooltipEmoji,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSize
            }), d()]
          })
        }), (() => {
          let e = B.default.getCurrentUser();
          if (a) return (0, n.jsxs)("div", {
            className: o(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
            children: [(0, H.isPremium)(e) && (0, n.jsx)(F.default, {
              className: en.burstReactionTooltipNitroIcon,
              color: w.GradientCssUrls.PREMIUM_TIER_2
            }), (0, n.jsx)(m.Text, {
              variant: "text-sm/normal",
              className: en.reactionTooltipText,
              "aria-label": "super reaction tooltip cta",
              children: $.default.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED
            })]
          });
          if (this.userCanBurstReact()) return (0, n.jsxs)("div", {
            className: o(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer, en.burstReactionTooltipPromptClickable),
            children: [(0, n.jsx)(F.default, {
              className: en.burstReactionTooltipNitroIcon,
              color: w.GradientCssUrls.PREMIUM_TIER_2
            }), (0, n.jsx)(m.Clickable, {
              onClick: this.handleClick,
              children: (0, n.jsx)(m.Text, {
                variant: "text-sm/normal",
                className: en.reactionTooltipText,
                "aria-label": "super reaction tooltip cta",
                children: $.default.Messages.SUPER_REACTION_TOOLTIP_CTA
              })
            })]
          });
          if (!this.userCanBurstReact() && !this.isKeyboardNavigation) return (0, n.jsx)("div", {
            className: o(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
            children: (0, n.jsxs)("div", {
              children: [(0, n.jsx)(m.Text, {
                variant: "text-sm/normal",
                "aria-label": "super reaction tooltip upsell",
                children: $.default.Messages.SUPER_REACTION_TOOLTIP_UPSELL
              }), (0, n.jsx)(O.default, {
                subscriptionTier: Q.PremiumSubscriptionSKUs.TIER_2,
                buttonText: $.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                className: en.burstReactionTooltipUpsellCta,
                onClick: e => e.stopPropagation()
              })]
            })
          });
          return null
        })(), this.renderEmojiDetails()]
      }) : (0, n.jsxs)(h.Dialog, {
        className: en.reactionTooltip,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, n.jsx)(m.Clickable, {
          onClick: r,
          children: (0, n.jsxs)("div", {
            className: en.reactionTooltipInner,
            children: [(0, n.jsx)(f.default, {
              className: en.reactionTooltipEmoji,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSize
            }), d()]
          })
        }), this.renderEmojiDetails()]
      })
    }, this.refreshTooltipPositionKey = () => {
      this.setState({
        tooltipPositionKey: String(Date.now())
      })
    }, this.handleShowVerificationGate = () => {
      let {
        message: e,
        isPendingMember: t
      } = this.props;
      if (!t) return null;
      let i = y.default.getChannel(e.getChannelId()),
        n = P.default.getGuild(null == i ? void 0 : i.getGuildId());
      null != n && (0, v.openMemberVerificationModal)(n.id)
    }, this.handleSetReactionRef = e => {
      this.setState({
        reactionRef: e
      })
    }, this.trackReactionTooltipViewed = () => {
      let {
        emoji: e,
        message: t,
        type: i
      } = this.props, n = B.default.getCurrentUser(), a = y.default.getChannel(t.getChannelId()), l = i === K.ReactionTypes.BURST, o = (0, H.isPremium)(n), s = l ? Q.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER : Q.PremiumUpsellTypes.EMOJI_IN_REACTION_HOVER;
      l && !this.userCanBurstReact() && !o && (s = Q.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), R.default.trackWithMetadata(q.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
        type: s,
        expression_id: e.id,
        expression_name: e.name,
        is_animated: e.animated,
        is_custom: null != e.id,
        nonce: this.nonce
      }), l && null != a && !o && !this.userCanBurstReact() && G.default.track(q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: Q.PremiumUpsellTypes.BURST_REACTION_UPSELL,
        location: {
          page: (null == a ? void 0 : a.getGuildId()) != null ? q.AnalyticsPages.GUILD_CHANNEL : q.AnalyticsPages.DM_CHANNEL,
          section: (0, M.getBurstAnalyticsSection)(a),
          object: q.AnalyticsObjects.EMOJI_REACTION_TOOLTIP_UPSELL
        }
      })
    }
  }
}
es.defaultProps = {
  emojiSize: "jumbo"
};
let er = a.memo(e => {
    let {
      type: t,
      burst_colors: i,
      message: a,
      emoji: l
    } = e, o = t === K.ReactionTypes.BURST, s = (0, N.useEmojiColorPalette)(o && null != i ? i : []), r = (0, c.useStateFromStores)([z.default], () => void 0 !== z.default.getEffectForEmojiId(a.getChannelId(), a.id, l)), u = (0, c.useStateFromStores)([T.default], () => T.default.useReducedMotion), d = b.AnimateEmoji.useSetting(), h = B.default.getCurrentUser(), m = (0, H.isPremium)(h), f = (0, c.useStateFromStores)([z.default], () => z.default.getReactionPickerAnimation(a.id, l.name, l.id)), p = o && (r || null != f);
    return (0, n.jsx)(es, {
      ...e,
      colors: s,
      isBurstReaction: o,
      hideEmoji: p,
      userHasPremium: m,
      reduceMotion: u,
      animateEmoji: d,
      animationStartPosition: f
    })
  }),
  eu = e => {
    var t;
    let {
      emojiId: i,
      expressionSourceGuild: a,
      hasJoinedExpressionSourceGuild: l,
      onClose: o,
      popoutData: s,
      currentGuildId: r,
      nonce: u
    } = e;
    (0, _.useTrackOpenPopout)({
      emojiId: i,
      currentGuildId: r,
      popoutData: s,
      emojiSourceGuildId: null == a ? void 0 : a.id,
      nonce: u
    });
    let c = null !== (t = null == a ? void 0 : a.isDiscoverable()) && void 0 !== t && t,
      d = null !== a && c;
    return (0, n.jsx)(n.Fragment, {
      children: d ? null == a ? null : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
          className: ee.reactionEmojiDetailsUnfurlGuildDetails,
          children: (0, n.jsx)(J.GuildDetails, {
            expressionSourceGuild: a,
            hasJoinedExpressionSourceGuild: l,
            isDisplayingJoinGuildButtonInPopout: s.type === W.EmojiPopoutType.JOIN_GUILD
          })
        }), (0, n.jsx)(J.EmojiPopoutList, {
          emojiId: i,
          expressionSourceGuild: a,
          hasJoinedEmojiSourceGuild: l,
          onClose: o,
          popoutData: s,
          isDisplayingButtonInTopSection: !1
        })]
      }) : (0, n.jsx)(m.Text, {
        variant: "text-sm/normal",
        "aria-label": s.type,
        children: s.emojiDescription
      })
    })
  },
  ec = e => {
    var t;
    let {
      emojiId: i,
      refreshPositionKey: l,
      onClose: s,
      nonce: r
    } = e, {
      joinedEmojiSourceGuild: u
    } = (0, c.useStateFromStoresObject)([E.default, P.default], () => {
      let e = E.default.getCustomEmojiById(i);
      return {
        joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === I.EmojiTypes.GUILD ? P.default.getGuild(null == e ? void 0 : e.guildId) : void 0
      }
    }), [d, h] = a.useState(void 0), [f, p] = a.useState(!1), [T, R] = a.useState(!1), [g, N] = a.useState(!1), _ = null != u, v = null !== (t = null == d ? void 0 : d.isDiscoverable()) && void 0 !== t && t, C = U.default.getGuildId(), j = null != C && (C === (null == d ? void 0 : d.id) || C === (null == u ? void 0 : u.id)), O = B.default.getCurrentUser(), A = (0, W.getEmojiPopoutData)({
      isPremium: H.default.isPremium(O),
      hasJoinedEmojiSourceGuild: _,
      isDiscoverable: v,
      emojiComesFromCurrentGuild: j,
      isUnusableRoleSubscriptionEmoji: !1,
      userIsRoleSubscriber: !1,
      isRoleSubscriptionEmoji: !1,
      shouldHideRoleSubscriptionCTA: !1
    });
    a.useEffect(() => {
      if (!f || g) return;
      let e = async () => {
        l(), R(!0);
        let e = await S.default.getGuildFromEmojiId(i);
        h(e), R(!1), N(!0), l()
      };
      e()
    }, [i, f, g, l]);
    if (_) return null;
    let x = () => {
        p(!f)
      },
      M = f && void 0 !== d;
    return (0, n.jsxs)("div", {
      children: [M ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
          className: ee.reactionEmojiDetailsDivider
        }), null != A.emojiDescription && A.type !== W.EmojiPopoutType.UNAVAILABLE && (0, n.jsx)(m.Text, {
          variant: "text-sm/normal",
          "aria-label": A.type,
          children: A.emojiDescription
        })]
      }) : (() => {
        let e = $.default.Messages.INVENTORY_EMOJI_DETAILS_V2;
        return (0, n.jsxs)(m.Clickable, {
          onClick: x,
          className: ee.reactionEmojiDetailsClickable,
          children: [(0, n.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "none",
            "aria-label": e,
            children: e
          }), (0, n.jsx)(V.default, {
            width: 16,
            height: 16,
            className: o(ee.reactionEmojiDetailsArrow, {
              [ee.reactionEmojiDetailsArrowCollapsed]: !f
            })
          })]
        })
      })(), T ? (0, n.jsx)(Y.PopoutLoadingAnimation, {
        className: ee.emojiDetailsLoader
      }) : M && (0, n.jsx)(eu, {
        emojiId: i,
        expressionSourceGuild: d,
        hasJoinedExpressionSourceGuild: _,
        onClose: s,
        popoutData: A,
        currentGuildId: C,
        nonce: r
      })]
    })
  }