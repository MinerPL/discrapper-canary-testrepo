"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("47120");
var a = n("735250"),
  u = n("470079"),
  l = n("960524"),
  i = n("442837"),
  s = n("524437"),
  r = n("481060"),
  d = n("706140"),
  o = n("9156"),
  f = n("594174"),
  c = n("672752"),
  S = n("466111"),
  _ = n("26290"),
  I = n("74538"),
  M = n("759198"),
  E = n("11352"),
  T = n("213931"),
  m = n("767157"),
  C = n("112440"),
  p = n("671105"),
  N = n("552958"),
  A = n("921944"),
  g = n("871465"),
  h = n("689938"),
  v = n("901464");

function R(e, t) {
  var n, R;
  let O = (0, p.useGuildCustomNotificationSound)(e),
    x = (0, p.useChannelCustomNotificationSound)(e, t),
    U = (0, i.useStateFromStores)([f.default], () => f.default.getCurrentUser()),
    F = (0, i.useStateFromStores)([o.default], () => o.default.isMuted(e), [e]),
    G = I.default.canUseCustomNotificationSounds(U),
    y = G ? null != x ? x : O : g.Soundpacks.CLASSIC,
    j = E.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [P, b] = u.useState(!1),
    {
      playSound: D
    } = (0, N.default)(),
    [L, k] = (0, d.useGetDismissibleContent)([s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE]),
    V = L === s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE;
  if (u.useEffect(() => () => {
      P && k(A.ContentDismissActionType.TAKE_ACTION)
    }, [P, k]), !j) return null;
  let W = n => {
      if (D(n), !G) {
        (0, m.default)(n, "contextMenu"), (0, C.default)();
        return
      }
      null != t ? (0, T.updateChannelCustomNotificationSound)(e, t, y, n, "contextMenu") : (0, T.updateGuildCustomNotificationSound)(e, y, n, "contextMenu")
    },
    w = G ? r.Text : M.default,
    Y = (0, g.getCustomNotificationSoundpackOptions)(),
    K = null !== (R = null === (n = Y.find(e => e.value === y)) || void 0 === n ? void 0 : n.label) && void 0 !== R ? R : h.default.Messages.SOUNDPACK_DEFAULT_LABEL;
  return (0, a.jsx)(r.MenuItem, {
    id: "notification-sounds",
    label: e => {
      let {
        isFocused: t
      } = e;
      return t && b(t), (0, a.jsxs)(a.Fragment, {
        children: [V && (0, a.jsx)(_.TextBadge, {
          className: v.newBadge,
          text: h.default.Messages.NEW
        }), (0, a.jsxs)("div", {
          className: v.headerContainer,
          children: [(0, a.jsx)(w, {
            className: v.text,
            color: t ? "always-white" : void 0,
            variant: "text-sm/medium",
            children: h.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
          }), (0, a.jsx)(S.default, {
            className: v.nitroWheel,
            color: t ? "white" : G ? void 0 : c.GradientCssUrls.PREMIUM_TIER_2,
            width: 16,
            height: 16
          })]
        }), null != K && (0, a.jsx)(w, {
          className: v.text,
          color: t ? "always-white" : void 0,
          variant: "text-xs/normal",
          children: K
        })]
      })
    },
    hasSubmenu: !0,
    children: (0, a.jsxs)(r.MenuGroup, {
      children: [Y.map((e, t) => (0, a.jsxs)(u.Fragment, {
        children: [G || e.value === g.Soundpacks.CLASSIC ? (0, a.jsx)(r.MenuRadioItem, {
          id: e.label,
          group: "notification-preset",
          checked: (null != y ? y : g.Soundpacks.CLASSIC) === e.value,
          label: e.label,
          action: () => W(e.value)
        }) : (0, a.jsx)(r.MenuItem, {
          id: e.label,
          label: t => {
            let {
              isFocused: n
            } = t;
            return (0, a.jsxs)("div", {
              className: v.labelContainer,
              children: [(0, a.jsx)(M.default, {
                color: n ? "always-white" : void 0,
                variant: "text-sm/medium",
                children: e.label
              }), (0, a.jsx)(l.CirclePlayIcon, {
                className: v.playButton,
                color: n ? r.tokens.colors.INTERACTIVE_ACTIVE : r.tokens.colors.INTERACTIVE_NORMAL
              })]
            })
          },
          action: () => W(e.value)
        }), e.value === g.Soundpacks.CLASSIC ? (0, a.jsx)(r.MenuSeparator, {}) : null]
      }, t)), F && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.MenuSeparator, {}), (0, a.jsx)(r.MenuItem, {
          id: "label",
          label: (0, a.jsx)(r.Text, {
            className: v.mutedLabel,
            variant: "text-sm/medium",
            children: h.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_WARNING
          })
        })]
      })]
    })
  })
}