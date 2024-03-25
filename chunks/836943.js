"use strict";
n.r(t), n.d(t, {
  ButtonAddReaction: function() {
    return L
  }
}), n("702976"), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("483366"),
  o = n.n(r),
  u = n("130969"),
  d = n("77078"),
  c = n("558986"),
  E = n("62587"),
  f = n("85589"),
  _ = n("166257"),
  T = n("432173"),
  I = n("219013"),
  m = n("697218"),
  N = n("79945"),
  p = n("790950"),
  S = n("568734"),
  A = n("719923"),
  C = n("875978"),
  h = n("49111"),
  g = n("958706"),
  M = n("646718"),
  O = n("782340"),
  R = n("159441"),
  v = n("450076");
class L extends a.Component {
  render() {
    let {
      type: e,
      message: t,
      className: n,
      children: a,
      useChatFontScaling: l
    } = this.props, {
      isReactionPickerActive: r
    } = this.state, o = t.state === h.MessageStates.SENDING, u = e === C.ReactionTypes.BURST;
    if (o || (0, S.hasFlag)(t.flags, h.MessageFlags.EPHEMERAL)) return null;
    let f = m.default.getCurrentUser(),
      _ = (0, A.isPremium)(f),
      T = u ? O.default.Messages.ADD_BURST_REACTION : O.default.Messages.ADD_REACTION;
    !_ && u && (T = (0, s.jsx)(E.NitroTooltipLabel, {
      tooltipText: O.default.Messages.ADD_BURST_REACTION
    }));
    let I = l ? v : R;
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
          "aria-label": u ? O.default.Messages.ADD_BURST_REACTION : O.default.Messages.ADD_REACTION,
          tooltipClassName: I.addReactionTooltip,
          children: (0, s.jsxs)(d.Clickable, {
            ...e,
            onClick: e => {
              this.handleAddReactionClick(e)
            },
            onMouseEnter: () => (0, c.initiateEmojiInteraction)(g.EmojiInteractionPoint.AddReactionPopoutMouseEntered),
            onFocus: () => (0, c.initiateEmojiInteraction)(g.EmojiInteractionPoint.AddReactionPopoutFocused),
            className: i(I.reactionBtn, {
              [I.active]: l
            }, n),
            children: [u ? (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(p.default, {
                className: I.icon
              })
            }) : (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(N.default, {
                className: I.icon
              })
            }), a]
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      isReactionPickerActive: !1
    }, this.onAddReaction = (e, t) => {
      if (null == e) return;
      let {
        channel: n,
        message: s,
        isForumToolbar: a
      } = this.props;
      (0, _.addReaction)(n.id, s.id, (0, T.toReactionEmoji)(e), a ? _.ReactionLocations.FORUM_TOOLBAR : _.ReactionLocations.MESSAGE, {
        burst: t
      })
    }, this.handleReactionPickerToggle = () => {
      this.setState(e => ({
        isReactionPickerActive: !e.isReactionPickerActive
      }))
    }, this.handleAddReactionClick = e => {
      let {
        type: t,
        channel: n
      } = this.props;
      e.stopPropagation();
      let s = m.default.getCurrentUser();
      t === C.ReactionTypes.BURST && !(0, A.isPremium)(s) && (0, f.openBurstReactionsUpsellModal)({
        analytics: {
          type: M.PremiumUpsellTypes.BURST_REACTION_UPSELL,
          page: null != n.getGuildId() ? h.AnalyticsPages.GUILD_CHANNEL : h.AnalyticsPages.DM_CHANNEL,
          section: (0, T.getBurstAnalyticsSection)(n),
          object: h.AnalyticsObjects.INLINE_REACTION_PICKER_UPSELL
        }
      }), this.handleReactionPickerToggle()
    }, this.renderReactionPopout = e => {
      let {
        closePopout: t
      } = e, {
        type: n,
        channel: a,
        message: l
      } = this.props, i = n === C.ReactionTypes.BURST, r = {
        openPopoutType: "message_reaction_emoji_picker",
        ...i && {
          openPopoutType: "message_super_reaction_emoji_picker",
          page: null != a.getGuildId() ? h.AnalyticsPages.GUILD_CHANNEL : h.AnalyticsPages.DM_CHANNEL,
          section: (0, T.getBurstAnalyticsSection)(a),
          object: h.AnalyticsObjects.REACTION_RAIL
        }
      }, c = (0, s.jsx)(I.ReactionPicker, {
        closePopout: t,
        channel: a,
        onSelectEmoji: (e, n, s) => {
          this.onAddReaction(e, s), n && (s ? o(t, 150)() : t())
        },
        analyticsOverride: r,
        messageId: l.id
      });
      return (0, s.jsx)(u.DialogContext.Consumer, {
        children: e => e ? (0, s.jsx)(d.Dialog, {
          "aria-label": O.default.Messages.REACTION_PICKER,
          children: c
        }) : c
      })
    }
  }
}