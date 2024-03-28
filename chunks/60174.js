"use strict";
n.r(t), n.d(t, {
  ButtonAddReaction: function() {
    return x
  }
}), n("789020"), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("954955"),
  o = n.n(r),
  u = n("507274"),
  d = n("481060"),
  c = n("130402"),
  f = n("466794"),
  E = n("659215"),
  _ = n("222677"),
  T = n("995774"),
  m = n("931651"),
  I = n("594174"),
  p = n("250690"),
  h = n("506917"),
  N = n("630388"),
  S = n("74538"),
  C = n("566006"),
  A = n("981631"),
  g = n("185923"),
  M = n("474936"),
  R = n("689938"),
  O = n("903380"),
  v = n("317363");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class x extends a.Component {
  render() {
    let {
      type: e,
      message: t,
      className: n,
      children: a,
      useChatFontScaling: l
    } = this.props, {
      isReactionPickerActive: r
    } = this.state, o = t.state === A.MessageStates.SENDING, u = e === C.ReactionTypes.BURST;
    if (o || (0, N.hasFlag)(t.flags, A.MessageFlags.EPHEMERAL)) return null;
    let E = I.default.getCurrentUser(),
      _ = (0, S.isPremium)(E),
      T = u ? R.default.Messages.ADD_BURST_REACTION : R.default.Messages.ADD_REACTION;
    !_ && u && (T = (0, s.jsx)(f.NitroTooltipLabel, {
      tooltipText: R.default.Messages.ADD_BURST_REACTION
    }));
    let m = l ? v : O;
    return (0, s.jsx)(d.Popout, {
      shouldShow: r,
      onRequestClose: this.handleReactionPickerToggle,
      renderPopout: this.renderReactionPopout,
      position: "right",
      children: (e, t) => {
        let {
          isShown: l
        } = t;
        return (0, s.jsx)(d.TooltipContainer, {
          text: T,
          color: d.TooltipColors.PRIMARY,
          "aria-label": u ? R.default.Messages.ADD_BURST_REACTION : R.default.Messages.ADD_REACTION,
          tooltipClassName: m.__invalid_addReactionTooltip,
          children: (0, s.jsxs)(d.Clickable, {
            ...e,
            onClick: e => {
              this.handleAddReactionClick(e)
            },
            onMouseEnter: () => (0, c.initiateEmojiInteraction)(g.EmojiInteractionPoint.AddReactionPopoutMouseEntered),
            onFocus: () => (0, c.initiateEmojiInteraction)(g.EmojiInteractionPoint.AddReactionPopoutFocused),
            className: i()(m.reactionBtn, {
              [m.active]: l
            }, n),
            children: [u ? (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(h.default, {
                className: m.icon
              })
            }) : (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(p.default, {
                className: m.icon
              })
            }), a]
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), L(this, "state", {
      isReactionPickerActive: !1
    }), L(this, "onAddReaction", (e, t) => {
      if (null == e) return;
      let {
        channel: n,
        message: s,
        isForumToolbar: a
      } = this.props;
      (0, _.addReaction)(n.id, s.id, (0, T.toReactionEmoji)(e), a ? _.ReactionLocations.FORUM_TOOLBAR : _.ReactionLocations.MESSAGE, {
        burst: t
      })
    }), L(this, "handleReactionPickerToggle", () => {
      this.setState(e => ({
        isReactionPickerActive: !e.isReactionPickerActive
      }))
    }), L(this, "handleAddReactionClick", e => {
      let {
        type: t,
        channel: n
      } = this.props;
      e.stopPropagation();
      let s = I.default.getCurrentUser();
      t === C.ReactionTypes.BURST && !(0, S.isPremium)(s) && (0, E.openBurstReactionsUpsellModal)({
        analytics: {
          type: M.PremiumUpsellTypes.BURST_REACTION_UPSELL,
          page: null != n.getGuildId() ? A.AnalyticsPages.GUILD_CHANNEL : A.AnalyticsPages.DM_CHANNEL,
          section: (0, T.getBurstAnalyticsSection)(n),
          object: A.AnalyticsObjects.INLINE_REACTION_PICKER_UPSELL
        }
      }), this.handleReactionPickerToggle()
    }), L(this, "renderReactionPopout", e => {
      let {
        closePopout: t
      } = e, {
        type: n,
        channel: a,
        message: l
      } = this.props, i = {
        openPopoutType: "message_reaction_emoji_picker",
        ...n === C.ReactionTypes.BURST && {
          openPopoutType: "message_super_reaction_emoji_picker",
          page: null != a.getGuildId() ? A.AnalyticsPages.GUILD_CHANNEL : A.AnalyticsPages.DM_CHANNEL,
          section: (0, T.getBurstAnalyticsSection)(a),
          object: A.AnalyticsObjects.REACTION_RAIL
        }
      }, r = (0, s.jsx)(m.ReactionPicker, {
        closePopout: t,
        channel: a,
        onSelectEmoji: (e, n, s) => {
          this.onAddReaction(e, s), n && (s ? o()(t, 150)() : t())
        },
        analyticsOverride: i,
        messageId: l.id
      });
      return (0, s.jsx)(u.DialogContext.Consumer, {
        children: e => e ? (0, s.jsx)(d.Dialog, {
          "aria-label": R.default.Messages.REACTION_PICKER,
          children: r
        }) : r
      })
    })
  }
}