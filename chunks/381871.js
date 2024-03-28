"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("392711"),
  i = n("442837"),
  r = n("524437"),
  o = n("481060"),
  u = n("570140"),
  d = n("230711"),
  c = n("607070"),
  f = n("367907"),
  h = n("243778"),
  m = n("543241"),
  p = n("633302"),
  E = n("970731"),
  C = n("594174"),
  g = n("176354"),
  S = n("823379"),
  _ = n("74538"),
  T = n("401062"),
  I = n("696900"),
  A = n("456631"),
  v = n("963838"),
  N = n("535879"),
  x = n("310892"),
  M = n("12168"),
  R = n("353368"),
  L = n("981631"),
  y = n("354459"),
  O = n("185923"),
  j = n("474936"),
  P = n("526761"),
  D = n("689938"),
  b = n("641831");
let U = O.EmojiIntention.CHAT,
  F = {
    section: L.AnalyticsSections.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
    openPopoutType: "voice_channel_effect_emoji_picker"
  },
  w = [p.default.getByName("thumbsup"), p.default.getByName("eyes"), p.default.getByName("laughing"), p.default.getByName("watermelon"), p.default.getByName("fork_and_knife"), p.default.getByName("yum")].filter(S.isNotNullish);

function k(e) {
  var t;
  let {
    channel: n,
    closePopout: p,
    onFocus: S
  } = e, O = (0, i.useStateFromStores)([c.default], () => c.default.useReducedMotion), k = (0, i.useStateFromStores)([C.default], () => C.default.getCurrentUser()), H = _.default.canUseFancyVoiceChannelReactions(k), B = (0, i.useStateFromStores)([I.default], () => I.default.getState().animationType), G = l.useRef(!1), V = (0, m.useFrequentlyUsedEmojis)(n.guild_id), W = (0, s.uniqBy)([...V, ...w], "name").filter(e => !g.default.isEmojiFilteredOrLocked({
    emoji: e,
    channel: n,
    intention: U
  })).slice(0, y.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT), Y = (null !== (t = A.default.recentlyUsedEmojis) && void 0 !== t ? t : []).filter(e => !W.slice(0, y.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT - 1).some(t => t.name === e.name));
  Y.length > 0 && W.splice(W.length - 1, 1, Y[0]);
  let z = (0, v.sampleAnimationId)(B),
    Z = e => {
      u.default.dispatch({
        type: "VOICE_CHANNEL_EFFECT_RECENT_EMOJI",
        emoji: e
      }), (0, T.sendVoiceChannelEffect)({
        channel: n,
        emoji: e,
        location: T.VoiceChannelEffectSentLocation.EMOJI_PICKER,
        animationType: B,
        animationId: z,
        isPremium: H
      })
    },
    K = () => {
      (0, x.openEffectsUpsellModal)({
        analytics: {
          type: j.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED,
          object: L.AnalyticsObjects.BUTTON_CTA,
          section: L.AnalyticsSections.VOICE_CHANNEL_EFFECTS_BAR
        }
      })
    },
    X = e => {
      G.current = e, e && f.default.trackWithMetadata(L.AnalyticEvents.VOICE_CHANNEL_EFFECT_EMOJI_PICKER_EXPANDED, {
        channel_id: q,
        guild_id: Q
      })
    },
    {
      id: q,
      guild_id: Q
    } = n;
  l.useEffect(() => {
    f.default.trackWithMetadata(L.AnalyticEvents.VOICE_CHANNEL_EFFECT_BAR_VIEWED, {
      channel_id: q,
      guild_id: Q
    })
  }, [q, Q]);
  let J = O ? [r.DismissibleContent.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP] : [],
    $ = B === R.VoiceChannelEffectAnimationType.PREMIUM;
  return (0, a.jsx)(h.default, {
    contentTypes: J,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: l
      } = e, s = O && t === r.DismissibleContent.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP;
      return (0, a.jsx)(o.Popout, {
        position: "left",
        "aria-label": D.default.Messages.VOICE_CHANNEL_EFFECTS_MORE,
        shouldShow: s,
        renderPopout: () => (0, a.jsx)("div", {
          onMouseEnter: S,
          children: (0, a.jsx)(E.default, {
            className: b.reducedMotionTooltip,
            header: D.default.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_TITLE,
            content: D.default.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_BODY,
            onClick: () => {
              d.default.open(L.UserSettingsSections.ACCESSIBILITY, null, {
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
          onSelectDisabledEmoji: K,
          onFocus: S,
          onExpandedToggle: X,
          analyticsOverride: F,
          emojiSearchProps: {
            accessory: (0, a.jsx)(N.default, {
              labelText: D.default.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE,
              value: $,
              onChange: () => {
                if (H) return f.default.trackWithMetadata(L.AnalyticEvents.VOICE_CHANNEL_EFFECT_FANCY_ANIMATION_TOGGLED, {
                  channel_id: q,
                  guild_id: Q,
                  enabled: !$
                }), u.default.dispatch({
                  type: "VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE"
                })
              },
              onShowUpsell: () => (0, x.openEffectsUpsellModal)({
                analytics: {
                  type: G.current ? j.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED : j.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED,
                  object: L.AnalyticsObjects.VOICE_CHANNEL_EFFECTS_TOGGLE,
                  section: G.current ? L.AnalyticsSections.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER : L.AnalyticsSections.VOICE_CHANNEL_EFFECTS_BAR
                }
              })
            })
          },
          recentlyUsedEmojis: Y
        })
      })
    }
  })
}