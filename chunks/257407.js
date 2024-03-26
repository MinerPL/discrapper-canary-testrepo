"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("917351"),
  i = n("446674"),
  r = n("151426"),
  u = n("77078"),
  o = n("913144"),
  d = n("79112"),
  c = n("206230"),
  f = n("716241"),
  h = n("384997"),
  m = n("788506"),
  p = n("867805"),
  E = n("5667"),
  g = n("697218"),
  S = n("402671"),
  C = n("449008"),
  _ = n("719923"),
  I = n("229502"),
  T = n("82230"),
  v = n("568088"),
  x = n("397485"),
  N = n("463532"),
  A = n("718350"),
  M = n("258901"),
  R = n("626334"),
  j = n("49111"),
  L = n("99795"),
  y = n("958706"),
  O = n("646718"),
  P = n("397336"),
  D = n("782340"),
  b = n("531055");
let U = y.EmojiIntention.CHAT,
  w = {
    section: j.AnalyticsSections.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
    openPopoutType: "voice_channel_effect_emoji_picker"
  },
  F = [p.default.getByName("thumbsup"), p.default.getByName("eyes"), p.default.getByName("laughing"), p.default.getByName("watermelon"), p.default.getByName("fork_and_knife"), p.default.getByName("yum")].filter(C.isNotNullish);

function V(e) {
  var t;
  let {
    channel: n,
    closePopout: p,
    onFocus: C
  } = e, y = (0, i.useStateFromStores)([c.default], () => c.default.useReducedMotion), V = (0, i.useStateFromStores)([g.default], () => g.default.getCurrentUser()), H = _.default.canUseFancyVoiceChannelReactions(V), k = (0, i.useStateFromStores)([T.default], () => T.default.getState().animationType), B = l.useRef(!1), G = (0, m.useFrequentlyUsedEmojis)(n.guild_id), W = (0, s.uniqBy)([...G, ...F], "name").filter(e => !S.default.isEmojiFilteredOrLocked({
    emoji: e,
    channel: n,
    intention: U
  })).slice(0, L.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT), Y = null !== (t = v.default.recentlyUsedEmojis) && void 0 !== t ? t : [], z = Y.filter(e => !W.slice(0, L.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT - 1).some(t => t.name === e.name));
  z.length > 0 && W.splice(W.length - 1, 1, z[0]);
  let K = (0, x.sampleAnimationId)(k),
    Z = e => {
      o.default.dispatch({
        type: "VOICE_CHANNEL_EFFECT_RECENT_EMOJI",
        emoji: e
      }), (0, I.sendVoiceChannelEffect)({
        channel: n,
        emoji: e,
        location: I.VoiceChannelEffectSentLocation.EMOJI_PICKER,
        animationType: k,
        animationId: K,
        isPremium: H
      })
    },
    X = () => {
      (0, A.openEffectsUpsellModal)({
        analytics: {
          type: O.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED,
          object: j.AnalyticsObjects.BUTTON_CTA,
          section: j.AnalyticsSections.VOICE_CHANNEL_EFFECTS_BAR
        }
      })
    },
    Q = e => {
      B.current = e, e && f.default.trackWithMetadata(j.AnalyticEvents.VOICE_CHANNEL_EFFECT_EMOJI_PICKER_EXPANDED, {
        channel_id: q,
        guild_id: J
      })
    },
    {
      id: q,
      guild_id: J
    } = n;
  l.useEffect(() => {
    f.default.trackWithMetadata(j.AnalyticEvents.VOICE_CHANNEL_EFFECT_BAR_VIEWED, {
      channel_id: q,
      guild_id: J
    })
  }, [q, J]);
  let $ = y ? [r.DismissibleContent.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP] : [],
    ee = k === R.VoiceChannelEffectAnimationType.PREMIUM;
  return (0, a.jsx)(h.default, {
    contentTypes: $,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: l
      } = e, s = y && t === r.DismissibleContent.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP;
      return (0, a.jsx)(u.Popout, {
        position: "left",
        "aria-label": D.default.Messages.VOICE_CHANNEL_EFFECTS_MORE,
        shouldShow: s,
        renderPopout: () => (0, a.jsx)("div", {
          onMouseEnter: C,
          children: (0, a.jsx)(E.default, {
            className: b.reducedMotionTooltip,
            header: D.default.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_TITLE,
            content: D.default.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_BODY,
            onClick: () => {
              d.default.open(j.UserSettingsSections.ACCESSIBILITY, null, {
                scrollPosition: P.AccessibilityScrollPositions.REDUCED_MOTION
              }), p()
            },
            markAsDismissed: l,
            buttonCTA: D.default.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_CONFIRM,
            secondaryButtonCTA: D.default.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_CANCEL,
            caretPosition: E.CaretPosition.RIGHT_CENTER
          })
        }),
        children: () => (0, a.jsx)(M.default, {
          title: D.default.Messages.VOICE_CHANNEL_EFFECTS_HOTBAR_TITLE,
          channel: n,
          closePopout: p,
          onSelectEmoji: Z,
          onSelectDisabledEmoji: X,
          onFocus: C,
          onExpandedToggle: Q,
          analyticsOverride: w,
          emojiSearchProps: {
            accessory: (0, a.jsx)(N.default, {
              labelText: D.default.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE,
              value: ee,
              onChange: () => {
                if (H) return f.default.trackWithMetadata(j.AnalyticEvents.VOICE_CHANNEL_EFFECT_FANCY_ANIMATION_TOGGLED, {
                  channel_id: q,
                  guild_id: J,
                  enabled: !ee
                }), o.default.dispatch({
                  type: "VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE"
                })
              },
              onShowUpsell: () => (0, A.openEffectsUpsellModal)({
                analytics: {
                  type: B.current ? O.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED : O.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED,
                  object: j.AnalyticsObjects.VOICE_CHANNEL_EFFECTS_TOGGLE,
                  section: B.current ? j.AnalyticsSections.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER : j.AnalyticsSections.VOICE_CHANNEL_EFFECTS_BAR
                }
              })
            })
          },
          recentlyUsedEmojis: z
        })
      })
    }
  })
}