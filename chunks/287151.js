"use strict";
i.r(t), i.d(t, {
  REACTION_MIN_WIDTH_DIGITS: function() {
    return el
  },
  Reaction: function() {
    return ed
  },
  isMeReaction: function() {
    return er
  },
  showReactionsModal: function() {
    return eo
  }
}), i("47120");
var n, a = i("735250"),
  s = i("470079"),
  l = i("803997"),
  o = i.n(l),
  r = i("153832"),
  u = i("748780"),
  d = i("866442"),
  c = i("442837"),
  h = i("846519"),
  f = i("507274"),
  m = i("481060"),
  p = i("596454"),
  g = i("785388"),
  T = i("607070"),
  v = i("367907"),
  S = i("98474"),
  E = i("339085"),
  R = i("906411"),
  I = i("56314"),
  N = i("400106"),
  C = i("944386"),
  _ = i("305325"),
  x = i("33154"),
  O = i("692147"),
  j = i("197115"),
  A = i("659215"),
  M = i("222677"),
  b = i("995774"),
  y = i("695346"),
  L = i("592125"),
  P = i("430824"),
  U = i("542578"),
  w = i("914010"),
  F = i("594174"),
  D = i("451478"),
  B = i("18732"),
  k = i("672752"),
  H = i("605403"),
  V = i("466111"),
  G = i("626135"),
  z = i("74538"),
  W = i("960020"),
  K = i("566006"),
  J = i("886132"),
  Y = i("183023"),
  Z = i("524444"),
  X = i("89729"),
  q = i("640753"),
  Q = i("981631"),
  $ = i("474936"),
  ee = i("689938"),
  et = i("163237"),
  ei = i("903380"),
  en = i("317363"),
  ea = i("309327");

function es(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}
let el = 9;

function eo(e, t, i) {
  (0, m.openModal)(e => (0, a.jsx)(g.default, {
    ...e,
    message: t,
    selectedReaction: i
  }))
}

function er(e, t, i) {
  return i === K.ReactionTypes.BURST && t || i === K.ReactionTypes.NORMAL && e
}
class eu extends(n = s.PureComponent) {
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
    D.default.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), u.default.parallel([u.default.timing(this.scale, {
      toValue: 1,
      duration: t ? 200 : 300,
      easing: u.default.Easing.inOut(u.default.Easing.back())
    }), u.default.timing(this.opacity, {
      toValue: 1,
      duration: t ? 200 : 300
    })]).start(e)) : (this.scale.setValue(1), this.opacity.setValue(1), e())
  }
  render() {
    let e, t;
    let {
      count: i,
      burst_count: n,
      colors: s,
      isBurstReaction: l,
      hideCount: r,
      emoji: c,
      readOnly: h,
      isLurking: f,
      isGuest: g,
      isPendingMember: T,
      className: v,
      useChatFontScaling: E,
      message: R,
      hideEmoji: I,
      animationStartPosition: N
    } = this.props, {
      shouldShowTooltip: C,
      tooltipTextAria: _,
      reactionRef: x,
      tooltipPositionKey: j
    } = this.state, A = E ? en : ei, M = {
      transform: [{
        scale: this.scale
      }],
      opacity: this.opacity
    }, y = l ? n : i;
    if (l && null != s) {
      var L;
      let {
        accentColor: i,
        backgroundColor: n,
        opacity: a
      } = s, l = null !== (L = (0, d.hex2rgb)(null != n ? n : "", a)) && void 0 !== L ? L : "";
      this.isMe() && (M.borderColor = n), M.background = l, e = i, t = i
    }
    let P = null == x ? void 0 : x.getBoundingClientRect(),
      U = null != N && null != P,
      w = null == N;
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(m.Popout, {
        shouldShow: C,
        "aria-label": null != _ && _,
        renderPopout: this.renderTooltip,
        nudgeAlignIntoViewport: !0,
        position: "top",
        align: "center",
        positionKey: j,
        children: () => (0, a.jsx)("div", {
          onMouseEnter: this.handleEnter,
          onMouseLeave: this.handleLeave,
          ref: this.handleSetReactionRef,
          children: (0, a.jsx)(u.default.div, {
            className: o()(A.reaction, v, {
              [A.reactionMe]: this.isMe(),
              [A.reactionReadOnly]: h && !f && !T && !g,
              [A.shakeReaction]: I && null == N
            }),
            style: M,
            children: (0, a.jsx)(m.Popout, {
              renderPopout: this.renderLurkerModeUpsellPopout,
              position: "top",
              children: i => (0, a.jsxs)(m.Clickable, {
                ...i,
                className: A.reactionInner,
                onClick: this.handleClick,
                "aria-disabled": h,
                "aria-label": (0, b.getAccessibleEmojiDisplayName)(this.isMe(), y, c, l),
                "aria-pressed": this.isMe(),
                children: [(0, a.jsx)("div", {
                  className: o()({
                    [A.burstGlow]: l
                  }),
                  style: {
                    boxShadow: "0 0 16px ".concat(t)
                  }
                }), (0, a.jsxs)("div", {
                  children: [l ? (0, a.jsxs)(a.Fragment, {
                    children: [U && (0, a.jsx)(S.default, {
                      messageId: R.id,
                      emoji: c,
                      startPosition: N,
                      targetPosition: P
                    }), w && (0, a.jsx)(q.default, {
                      count: n,
                      emoji: c,
                      channelId: R.getChannelId(),
                      messageId: R.id,
                      useChatFontScaling: E,
                      color: t
                    })]
                  }) : null, (0, a.jsx)(p.default, {
                    className: o()({
                      [A.hideEmoji]: I
                    }),
                    emojiId: c.id,
                    emojiName: c.name,
                    size: "reaction",
                    animated: c.animated
                  })]
                }), r ? null : (0, a.jsx)(B.default, {
                  className: A.reactionCount,
                  value: y,
                  color: e,
                  digitWidth: el
                }), (0, a.jsx)(O.default, {
                  count: y,
                  reactionRef: x
                })]
              })
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), es(this, "isReactionEventActive", !1), es(this, "isKeyboardNavigation", !1), es(this, "scale", new u.default.Value(1)), es(this, "opacity", new u.default.Value(1)), es(this, "timeout", new h.Timeout), es(this, "hideTimeout", new h.Timeout), es(this, "ctaRef", s.createRef()), es(this, "type", K.ReactionTypes.NORMAL), es(this, "colors", {
      backgroundColor: void 0,
      borderColor: void 0,
      textColor: void 0
    }), es(this, "state", {
      shouldShowTooltip: !1,
      tooltipText: null,
      tooltipTextAria: null,
      reactionRef: null,
      tooltipPositionKey: void 0
    }), es(this, "hasShownTooltip", !1), es(this, "nonce", (0, r.v4)()), es(this, "userCanBurstReact", () => this.props.userHasPremium), es(this, "handleClick", e => {
      e.stopPropagation();
      let {
        message: t,
        emoji: i,
        readOnly: n,
        isBurstReaction: a,
        isPendingMember: s,
        isLurking: l,
        isGuest: o,
        isForumToolbar: r
      } = this.props, u = L.default.getChannel(t.getChannelId());
      if (l || o) {
        var d, c;
        null === (c = this.ctaRef) || void 0 === c || null === (d = c.current) || void 0 === d || d.focus();
        return
      }
      let h = t.getChannelId(),
        f = r ? M.ReactionLocations.FORUM_TOOLBAR : M.ReactionLocations.MESSAGE;
      if (a && !this.userCanBurstReact()) {
        (0, A.openBurstReactionsUpsellModal)({
          analytics: {
            type: $.PremiumUpsellTypes.BURST_REACTION_UPSELL,
            page: (null == u ? void 0 : u.getGuildId()) != null ? Q.AnalyticsPages.GUILD_CHANNEL : Q.AnalyticsPages.DM_CHANNEL,
            section: null != u ? (0, b.getBurstAnalyticsSection)(u) : void 0,
            object: Q.AnalyticsObjects.EMOJI_REACTION_UPSELL
          }
        });
        return
      }
      s ? this.handleShowVerificationGate() : !n && (this.isMe() ? (0, M.removeReaction)(h, t.id, i, void 0, f, {
        burst: a
      }) : (0, M.addReaction)(h, t.id, i, f, {
        burst: a
      }))
    }), es(this, "handleEnter", e => {
      let {
        emoji: t,
        message: i,
        type: n,
        reduceMotion: a,
        animateEmoji: s,
        autoUnfurlReactionTooltip: l
      } = this.props, o = n === K.ReactionTypes.BURST;
      o && !this.isReactionEventActive && !a && s && (0, M.playBurstReaction)({
        channelId: i.getChannelId(),
        messageId: i.id,
        emoji: t,
        key: W.BurstReactionEffectSource.HOVER
      }), this.isReactionEventActive = !0, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(o ? 750 : l ? 200 : 500, this.showTooltip, !1)
    }), es(this, "handleEnterTooltip", () => {
      this.isReactionEventActive = !0, this.handleShowTooltip()
    }), es(this, "handleShowTooltip", () => {
      this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), U.default.addChangeListener(this.updateTooltipText))
    }), es(this, "showTooltip", () => {
      this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = !0
    }), es(this, "handleLeave", () => {
      this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.timeout.stop(), U.default.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1)
    }), es(this, "hideTooltip", () => {
      this.setState({
        shouldShowTooltip: !1
      }), this.hasShownTooltip && G.default.track(Q.AnalyticEvents.CLOSE_POPOUT, {
        nonce: this.nonce
      })
    }), es(this, "isMe", () => {
      let {
        me: e,
        me_burst: t,
        type: i
      } = this.props;
      return er(e, t, i)
    }), es(this, "updateTooltipText", () => {
      let {
        message: e,
        emoji: t,
        type: i
      } = this.props, n = (0, X.getReactionTooltipText)(e, t, i), a = this.isKeyboardNavigation ? n : (0, X.getReactionTooltipText)(e, t, i, Q.NOOP);
      this.setState({
        tooltipText: a,
        tooltipTextAria: n,
        shouldShowTooltip: null != a && "" !== a
      })
    }), es(this, "renderLurkerModeUpsellPopout", e => {
      let {
        closePopout: t
      } = e, {
        message: i,
        isLurking: n
      } = this.props, s = L.default.getChannel(i.getChannelId()), l = P.default.getGuild(null == s ? void 0 : s.getGuildId());
      return n && null != l ? (0, a.jsx)(x.default, {
        ctaRef: this.ctaRef,
        type: x.LurkerModeUpsellPopoutTypes.REACTIONS,
        guild: l,
        closePopout: t
      }) : (0, a.jsx)(a.Fragment, {})
    }), es(this, "renderEmojiDetails", () => {
      let e = this.props.emoji;
      return null != e.id && (0, a.jsx)(eh, {
        emojiId: e.id,
        refreshPositionKey: this.refreshTooltipPositionKey,
        onClose: this.handleLeave,
        nonce: this.nonce
      })
    }), es(this, "renderTooltip", () => {
      let {
        emoji: e,
        message: t,
        type: i,
        me_burst: n,
        isBurstReaction: s = !1
      } = this.props, {
        tooltipText: l
      } = this.state, r = i => {
        let n = L.default.getChannel(t.getChannelId());
        if (null != n) this.handleLeave(), eo(n, t, {
          emoji: e,
          reactionType: s ? K.ReactionTypes.BURST : K.ReactionTypes.NORMAL
        })
      }, u = "string" == typeof l ? "" === l.trim() : null == l, d = () => u || null == l ? null : (0, a.jsx)(m.Text, {
        variant: "text-sm/normal",
        className: ea.reactionTooltipText,
        "aria-label": l,
        children: l
      });
      return i === K.ReactionTypes.BURST ? (0, a.jsxs)(f.Dialog, {
        className: ea.reactionTooltip,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, a.jsx)(m.Clickable, {
          className: ea.burstReactionTooltipInner,
          onClick: r,
          children: (0, a.jsxs)("div", {
            className: ea.burstReactionTooltipMessage,
            children: [(0, a.jsx)(p.default, {
              className: ea.reactionTooltipEmoji,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSize
            }), d()]
          })
        }), (() => {
          let e = F.default.getCurrentUser();
          if (n) return (0, a.jsxs)("div", {
            className: o()(ea.burstReactionTooltipPrompt, ea.burstReactionTooltipSpacer),
            children: [(0, z.isPremium)(e) && (0, a.jsx)(V.default, {
              className: ea.burstReactionTooltipNitroIcon,
              color: k.GradientCssUrls.PREMIUM_TIER_2
            }), (0, a.jsx)(m.Text, {
              variant: "text-sm/normal",
              className: ea.reactionTooltipText,
              "aria-label": "super reaction tooltip cta",
              children: ee.default.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED
            })]
          });
          if (this.userCanBurstReact()) return (0, a.jsxs)("div", {
            className: o()(ea.burstReactionTooltipPrompt, ea.burstReactionTooltipSpacer, ea.burstReactionTooltipPromptClickable),
            children: [(0, a.jsx)(V.default, {
              className: ea.burstReactionTooltipNitroIcon,
              color: k.GradientCssUrls.PREMIUM_TIER_2
            }), (0, a.jsx)(m.Clickable, {
              onClick: this.handleClick,
              children: (0, a.jsx)(m.Text, {
                variant: "text-sm/normal",
                className: ea.reactionTooltipText,
                "aria-label": "super reaction tooltip cta",
                children: ee.default.Messages.SUPER_REACTION_TOOLTIP_CTA
              })
            })]
          });
          if (!this.userCanBurstReact() && !this.isKeyboardNavigation) return (0, a.jsx)("div", {
            className: o()(ea.burstReactionTooltipPrompt, ea.burstReactionTooltipSpacer),
            children: (0, a.jsxs)("div", {
              children: [(0, a.jsx)(m.Text, {
                variant: "text-sm/normal",
                "aria-label": "super reaction tooltip upsell",
                children: ee.default.Messages.SUPER_REACTION_TOOLTIP_UPSELL
              }), (0, a.jsx)(j.default, {
                subscriptionTier: $.PremiumSubscriptionSKUs.TIER_2,
                buttonText: ee.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                className: ea.burstReactionTooltipUpsellCta,
                onClick: e => e.stopPropagation()
              })]
            })
          });
          return null
        })(), this.renderEmojiDetails()]
      }) : (0, a.jsxs)(f.Dialog, {
        className: ea.reactionTooltip,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, a.jsx)(m.Clickable, {
          onClick: r,
          children: (0, a.jsxs)("div", {
            className: ea.reactionTooltipInner,
            children: [(0, a.jsx)(p.default, {
              className: ea.reactionTooltipEmoji,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSize
            }), d()]
          })
        }), this.renderEmojiDetails()]
      })
    }), es(this, "refreshTooltipPositionKey", () => {
      this.setState({
        tooltipPositionKey: String(Date.now())
      })
    }), es(this, "handleShowVerificationGate", () => {
      let {
        message: e,
        isPendingMember: t
      } = this.props;
      if (!t) return null;
      let i = L.default.getChannel(e.getChannelId()),
        n = P.default.getGuild(null == i ? void 0 : i.getGuildId());
      null != n && (0, _.openMemberVerificationModal)(n.id)
    }), es(this, "handleSetReactionRef", e => {
      this.setState({
        reactionRef: e
      })
    }), es(this, "trackReactionTooltipViewed", () => {
      let {
        emoji: e,
        message: t,
        type: i
      } = this.props, n = F.default.getCurrentUser(), a = L.default.getChannel(t.getChannelId()), s = i === K.ReactionTypes.BURST, l = (0, z.isPremium)(n), o = s ? $.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER : $.PremiumUpsellTypes.EMOJI_IN_REACTION_HOVER;
      s && !this.userCanBurstReact() && !l && (o = $.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), v.default.trackWithMetadata(Q.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
        type: o,
        expression_id: e.id,
        expression_name: e.name,
        is_animated: e.animated,
        is_custom: null != e.id,
        nonce: this.nonce
      }), s && null != a && !l && !this.userCanBurstReact() && G.default.track(Q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: $.PremiumUpsellTypes.BURST_REACTION_UPSELL,
        location: {
          page: (null == a ? void 0 : a.getGuildId()) != null ? Q.AnalyticsPages.GUILD_CHANNEL : Q.AnalyticsPages.DM_CHANNEL,
          section: (0, b.getBurstAnalyticsSection)(a),
          object: Q.AnalyticsObjects.EMOJI_REACTION_TOOLTIP_UPSELL
        }
      })
    })
  }
}
es(eu, "defaultProps", {
  emojiSize: "jumbo"
});
let ed = s.memo(e => {
    let {
      type: t,
      burst_colors: i,
      message: n,
      emoji: s
    } = e, l = t === K.ReactionTypes.BURST, o = (0, I.useEmojiColorPalette)(l && null != i ? i : []), r = (0, c.useStateFromStores)([W.default], () => void 0 !== W.default.getEffectForEmojiId(n.getChannelId(), n.id, s)), u = (0, c.useStateFromStores)([T.default], () => T.default.useReducedMotion), d = y.AnimateEmoji.useSetting(), h = F.default.getCurrentUser(), f = (0, z.isPremium)(h), m = (0, c.useStateFromStores)([W.default], () => W.default.getReactionPickerAnimation(n.id, s.name, s.id)), p = l && (r || null != m);
    return (0, a.jsx)(eu, {
      ...e,
      colors: o,
      isBurstReaction: l,
      hideEmoji: p,
      userHasPremium: f,
      reduceMotion: u,
      animateEmoji: d,
      animationStartPosition: m
    })
  }),
  ec = e => {
    var t;
    let {
      emojiId: i,
      expressionSourceGuild: n,
      hasJoinedExpressionSourceGuild: s,
      onClose: l,
      popoutData: o,
      currentGuildId: r,
      nonce: u
    } = e;
    (0, C.useTrackOpenPopout)({
      emojiId: i,
      currentGuildId: r,
      popoutData: o,
      emojiSourceGuildId: null == n ? void 0 : n.id,
      nonce: u
    });
    let d = null !== (t = null == n ? void 0 : n.isDiscoverable()) && void 0 !== t && t,
      c = null !== n && d;
    return (0, a.jsx)(a.Fragment, {
      children: c ? null == n ? null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: et.reactionEmojiDetailsUnfurlGuildDetails,
          children: (0, a.jsx)(Y.GuildDetails, {
            expressionSourceGuild: n,
            hasJoinedExpressionSourceGuild: s,
            isDisplayingJoinGuildButtonInPopout: o.type === J.EmojiPopoutType.JOIN_GUILD
          })
        }), (0, a.jsx)(Y.EmojiPopoutList, {
          emojiId: i,
          expressionSourceGuild: n,
          hasJoinedEmojiSourceGuild: s,
          onClose: l,
          popoutData: o,
          isDisplayingButtonInTopSection: !1
        })]
      }) : (0, a.jsx)(m.Text, {
        variant: "text-sm/normal",
        "aria-label": o.type,
        children: o.emojiDescription
      })
    })
  },
  eh = e => {
    var t;
    let {
      emojiId: i,
      refreshPositionKey: n,
      onClose: l,
      nonce: r
    } = e, {
      joinedEmojiSourceGuild: u
    } = (0, c.useStateFromStoresObject)([E.default, P.default], () => {
      let e = E.default.getCustomEmojiById(i);
      return {
        joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === R.EmojiTypes.GUILD ? P.default.getGuild(null == e ? void 0 : e.guildId) : void 0
      }
    }), [d, h] = s.useState(void 0), [f, p] = s.useState(!1), [g, T] = s.useState(!1), [v, S] = s.useState(!1), I = null != u, C = null !== (t = null == d ? void 0 : d.isDiscoverable()) && void 0 !== t && t, _ = w.default.getGuildId(), x = null != _ && (_ === (null == d ? void 0 : d.id) || _ === (null == u ? void 0 : u.id)), O = F.default.getCurrentUser(), j = (0, J.getEmojiPopoutData)({
      isPremium: z.default.isPremium(O),
      hasJoinedEmojiSourceGuild: I,
      isDiscoverable: C,
      emojiComesFromCurrentGuild: x,
      isUnusableRoleSubscriptionEmoji: !1,
      userIsRoleSubscriber: !1,
      isRoleSubscriptionEmoji: !1,
      shouldHideRoleSubscriptionCTA: !1
    });
    s.useEffect(() => {
      if (!!f && !v)(async () => {
        n(), T(!0), h(await N.default.getGuildFromEmojiId(i)), T(!1), S(!0), n()
      })()
    }, [i, f, v, n]);
    if (I) return null;
    let A = () => {
        p(!f)
      },
      M = f && void 0 !== d;
    return (0, a.jsxs)("div", {
      children: [M ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: et.reactionEmojiDetailsDivider
        }), null != j.emojiDescription && j.type !== J.EmojiPopoutType.UNAVAILABLE && (0, a.jsx)(m.Text, {
          variant: "text-sm/normal",
          "aria-label": j.type,
          children: j.emojiDescription
        })]
      }) : (() => {
        let e = ee.default.Messages.INVENTORY_EMOJI_DETAILS_V2;
        return (0, a.jsxs)(m.Clickable, {
          onClick: A,
          className: et.reactionEmojiDetailsClickable,
          children: [(0, a.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "none",
            "aria-label": e,
            children: e
          }), (0, a.jsx)(H.default, {
            width: 16,
            height: 16,
            className: o()(et.reactionEmojiDetailsArrow, {
              [et.reactionEmojiDetailsArrowCollapsed]: !f
            })
          })]
        })
      })(), g ? (0, a.jsx)(Z.PopoutLoadingAnimation, {
        className: et.emojiDetailsLoader
      }) : M && (0, a.jsx)(ec, {
        emojiId: i,
        expressionSourceGuild: d,
        hasJoinedExpressionSourceGuild: I,
        onClose: l,
        popoutData: j,
        currentGuildId: _,
        nonce: r
      })]
    })
  }