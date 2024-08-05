n.d(t, {
  aO: function() {
return ei;
  },
  le: function() {
return el;
  },
  op: function() {
return es;
  },
  y4: function() {
return eo;
  }
}), n(47120);
var i, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  r = n(772848),
  c = n(748780),
  u = n(866442),
  d = n(442837),
  h = n(846519),
  m = n(481060),
  p = n(596454),
  g = n(785388),
  f = n(607070),
  T = n(446489),
  _ = n(367907),
  v = n(98474),
  b = n(339085),
  E = n(906411),
  I = n(56314),
  x = n(231053),
  C = n(944386),
  S = n(305325),
  R = n(33154),
  N = n(692147),
  O = n(197115),
  Z = n(659215),
  j = n(222677),
  M = n(995774),
  A = n(695346),
  y = n(592125),
  P = n(430824),
  L = n(542578),
  w = n(914010),
  U = n(594174),
  k = n(451478),
  B = n(672752),
  D = n(626135),
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
  $ = n(830645),
  Q = n(716862),
  ee = n(372178),
  et = n(946895);

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
class ea extends(i = o.PureComponent) {
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
let {
  autoUnfurlReactionTooltip: t
} = this.props;
k.Z.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), c.Z.parallel([
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
  isPendingMember: _,
  className: b,
  useChatFontScaling: E,
  message: I,
  hideEmoji: x,
  animationStartPosition: C
} = this.props, {
  shouldShowTooltip: S,
  tooltipTextAria: R,
  reactionRef: O,
  tooltipPositionKey: Z
} = this.state, j = E ? ee : Q, A = {
  transform: [{
    scale: this.scale
  }],
  opacity: this.opacity
}, y = a ? i : n;
if (a && null != o) {
  var P;
  let {
    accentColor: n,
    backgroundColor: i,
    opacity: s
  } = o, a = null !== (P = (0, u.wK)(null != i ? i : '', s)) && void 0 !== P ? P : '';
  this.isMe() && (A.borderColor = i), A.background = a, e = n, t = n;
}
let L = null == O ? void 0 : O.getBoundingClientRect(),
  w = null != C && null != L,
  U = null == C;
return (0, s.jsx)(s.Fragment, {
  children: (0, s.jsx)(m.Popout, {
    shouldShow: S,
    'aria-label': null != R && R,
    renderPopout: this.renderTooltip,
    nudgeAlignIntoViewport: !0,
    position: 'top',
    align: 'center',
    positionKey: Z,
    children: () => (0, s.jsx)('div', {
      onMouseEnter: this.handleEnter,
      onMouseLeave: this.handleLeave,
      ref: this.handleSetReactionRef,
      children: (0, s.jsx)(c.Z.div, {
        className: l()(j.reaction, b, {
          [j.reactionMe]: this.isMe(),
          [j.reactionReadOnly]: h && !g && !_ && !f,
          [j.shakeReaction]: x && null == C
        }),
        style: A,
        children: (0, s.jsx)(m.Popout, {
          renderPopout: this.renderLurkerModeUpsellPopout,
          position: 'top',
          children: n => (0, s.jsxs)(m.Clickable, {
            ...n,
            className: j.reactionInner,
            onClick: this.handleClick,
            'aria-disabled': h,
            'aria-label': (0, M.iD)(this.isMe(), y, d, a),
            'aria-pressed': this.isMe(),
            children: [
              (0, s.jsx)('div', {
                className: l()({
                  [j.burstGlow]: a
                }),
                style: {
                  boxShadow: '0 0 16px '.concat(t)
                }
              }),
              (0, s.jsxs)('div', {
                children: [
                  a ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      w && (0, s.jsx)(v.Z, {
                        messageId: I.id,
                        emoji: d,
                        startPosition: C,
                        targetPosition: L
                      }),
                      U && (0, s.jsx)(Y.Z, {
                        count: i,
                        emoji: d,
                        channelId: I.getChannelId(),
                        messageId: I.id,
                        useChatFontScaling: E,
                        color: t
                      })
                    ]
                  }) : null,
                  (0, s.jsx)(p.Z, {
                    className: l()({
                      [j.hideEmoji]: x
                    }),
                    emojiId: d.id,
                    emojiName: d.name,
                    size: 'reaction',
                    animated: d.animated
                  })
                ]
              }),
              r ? null : (0, s.jsx)(T.Z, {
                className: j.reactionCount,
                value: y,
                color: e,
                digitWidth: ei
              }),
              (0, s.jsx)(N.Z, {
                count: y,
                reactionRef: O
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
  } = this.props, c = y.Z.getChannel(t.getChannelId());
  if (a || l) {
    var u, d;
    null === (d = this.ctaRef) || void 0 === d || null === (u = d.current) || void 0 === u || u.focus();
    return;
  }
  let h = t.getChannelId(),
    m = r ? j.TW.FORUM_TOOLBAR : j.TW.MESSAGE_INLINE_BUTTON;
  if (s && !this.userCanBurstReact()) {
    (0, Z.openBurstReactionsUpsellModal)({
      analytics: {
        type: q.cd.BURST_REACTION_UPSELL,
        page: (null == c ? void 0 : c.getGuildId()) != null ? J.ZY5.GUILD_CHANNEL : J.ZY5.DM_CHANNEL,
        section: null != c ? (0, M.s4)(c) : void 0,
        object: J.qAy.EMOJI_REACTION_UPSELL
      }
    });
    return;
  }
  o ? this.handleShowVerificationGate() : !i && (this.isMe() ? (0, j.WO)({
    channelId: h,
    messageId: t.id,
    emoji: n,
    location: m,
    options: {
      burst: s
    }
  }) : (0, j.rU)(h, t.id, n, m, {
    burst: s
  }));
}), en(this, 'handleEnter', e => {
  let {
    emoji: t,
    message: n,
    type: i,
    reduceMotion: s,
    animateEmoji: o,
    autoUnfurlReactionTooltip: a
  } = this.props, l = i === H.O.BURST;
  l && !this.isReactionEventActive && !s && o && (0, j.T6)({
    channelId: n.getChannelId(),
    messageId: n.id,
    emoji: t,
    key: V.I.HOVER
  }), this.isReactionEventActive = !0, this.isKeyboardNavigation = 'focus' === e.type, this.timeout.start(l ? 750 : a ? 200 : 500, this.showTooltip, !1);
}), en(this, 'handleEnterTooltip', () => {
  this.isReactionEventActive = !0, this.handleShowTooltip();
}), en(this, 'handleShowTooltip', () => {
  this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), L.Z.addChangeListener(this.updateTooltipText));
}), en(this, 'showTooltip', () => {
  this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = !0;
}), en(this, 'handleLeave', () => {
  this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.timeout.stop(), L.Z.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1);
}), en(this, 'hideTooltip', () => {
  this.setState({
    shouldShowTooltip: !1
  }), this.hasShownTooltip && D.default.track(J.rMx.CLOSE_POPOUT, {
    nonce: this.nonce
  });
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
  let {
    closePopout: t
  } = e, {
    message: n,
    isLurking: i
  } = this.props, o = y.Z.getChannel(n.getChannelId()), a = P.Z.getGuild(null == o ? void 0 : o.getGuildId());
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
  } = this.props, {
    tooltipText: a
  } = this.state, r = n => {
    let i = y.Z.getChannel(t.getChannelId());
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
        let e = U.default.getCurrentUser();
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
                (0, s.jsx)(O.Z, {
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
  this.setState({
    tooltipPositionKey: String(Date.now())
  });
}), en(this, 'handleShowVerificationGate', () => {
  let {
    message: e,
    isPendingMember: t
  } = this.props;
  if (!t)
    return null;
  let n = y.Z.getChannel(e.getChannelId()),
    i = P.Z.getGuild(null == n ? void 0 : n.getGuildId());
  null != i && (0, S.hk)(i.id);
}), en(this, 'handleSetReactionRef', e => {
  this.setState({
    reactionRef: e
  });
}), en(this, 'trackReactionTooltipViewed', () => {
  let {
    emoji: e,
    message: t,
    type: n
  } = this.props, i = U.default.getCurrentUser(), s = y.Z.getChannel(t.getChannelId()), o = n === H.O.BURST, a = (0, F.I5)(i), l = o ? q.cd.EMOJI_IN_BURST_REACTION_HOVER : q.cd.EMOJI_IN_REACTION_HOVER;
  o && !this.userCanBurstReact() && !a && (l = q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), _.ZP.trackWithMetadata(J.rMx.EXPRESSION_TOOLTIP_VIEWED, {
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
      section: (0, M.s4)(s),
      object: J.qAy.EMOJI_REACTION_TOOLTIP_UPSELL
    }
  });
});
  }
}
en(ea, 'defaultProps', {
  emojiSize: 'jumbo'
});
let el = o.memo(e => {
let {
  type: t,
  burst_colors: n,
  message: i,
  emoji: o
} = e, a = t === H.O.BURST, l = (0, I.v)(a && null != n ? n : []), r = (0, d.e7)([V.Z], () => void 0 !== V.Z.getEffectForEmojiId(i.getChannelId(), i.id, o)), c = (0, d.e7)([f.Z], () => f.Z.useReducedMotion), u = A.Yk.useSetting(), h = U.default.getCurrentUser(), m = (0, F.I5)(h), p = (0, d.e7)([V.Z], () => V.Z.getReactionPickerAnimation(i.id, o.name, o.id)), g = a && (r || null != p);
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
  }),
  er = e => {
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
(0, C.u)({
  emojiId: n,
  currentGuildId: r,
  popoutData: l,
  emojiSourceGuildId: null == i ? void 0 : i.id,
  nonce: c
});
let u = null !== (t = null == i ? void 0 : i.isDiscoverable()) && void 0 !== t && t,
  d = null != i && u;
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
  },
  ec = e => {
var t;
let {
  emojiId: n,
  refreshPositionKey: i,
  onClose: a,
  nonce: r
} = e, {
  joinedEmojiSourceGuild: c
} = (0, d.cj)([
  b.Z,
  P.Z
], () => {
  let e = b.Z.getCustomEmojiById(n);
  return {
    joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === E.B.GUILD ? P.Z.getGuild(null == e ? void 0 : e.guildId) : void 0
  };
}), [u, h] = o.useState(void 0), [p, g] = o.useState(void 0), [f, T] = o.useState(null), [_, v] = o.useState(!1), [I, C] = o.useState(!1), [S, R] = o.useState(!1), N = null != c, O = null !== (t = null == u ? void 0 : u.isDiscoverable()) && void 0 !== t && t, Z = w.Z.getGuildId(), j = null != Z && (Z === (null == u ? void 0 : u.id) || Z === (null == c ? void 0 : c.id)), M = U.default.getCurrentUser(), A = (0, G.a)({
  sourceType: f,
  expressionSourceApplication: null != p ? p : null,
  isPremium: F.ZP.isPremium(M),
  hasJoinedEmojiSourceGuild: N,
  isDiscoverable: O,
  emojiComesFromCurrentGuild: j,
  isUnusableRoleSubscriptionEmoji: !1,
  userIsRoleSubscriber: !1,
  isRoleSubscriptionEmoji: !1,
  shouldHideRoleSubscriptionCTA: !1
});
o.useEffect(() => {
  if (!!_ && !S)
    (async () => {
      i(), C(!0);
      let e = null != n ? await (0, x.Fi)(n) : null;
      if (null != e)
        switch (T(e.type), e.type) {
          case x.w6.APPLICATION:
            g(e.application);
            break;
          case x.w6.GUILD:
            h(e.guild);
        }
      else
        h(null);
      C(!1), R(!0), i();
    })();
}, [
  n,
  _,
  S,
  i
]);
if (N)
  return null;
let y = () => {
    v(!_);
  },
  L = _ && (void 0 !== u || void 0 !== p);
return (0, s.jsxs)('div', {
  children: [
    L ? (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)('div', {
          className: $.reactionEmojiDetailsDivider
        }),
        null != A.emojiDescription && A.type !== G.$.UNAVAILABLE && (0, s.jsx)(m.Text, {
          variant: 'text-sm/normal',
          'aria-label': A.type,
          children: A.emojiDescription
        })
      ]
    }) : (() => {
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
            className: l()($.reactionEmojiDetailsArrow, {
              [$.reactionEmojiDetailsArrowCollapsed]: !_
            })
          })
        ]
      });
    })(),
    I ? (0, s.jsx)(z.SE, {
      className: $.emojiDetailsLoader
    }) : L && (0, s.jsx)(er, {
      emojiId: n,
      expressionSourceGuild: u,
      hasJoinedExpressionSourceGuild: N,
      onClose: a,
      popoutData: A,
      currentGuildId: Z,
      nonce: r
    })
  ]
});
  };