"use strict";
n.r(t), n.d(t, {
  useCustomNotificationNewBadge: function() {
    return R
  },
  useCustomNotificationSoundDMContextMenuItem: function() {
    return U
  },
  useCustomNotificationSoundGuildContextMenuItem: function() {
    return x
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
  c = n("594174"),
  f = n("672752"),
  S = n("466111"),
  _ = n("26290"),
  M = n("74538"),
  E = n("759198"),
  I = n("11352"),
  m = n("213931"),
  T = n("767157"),
  C = n("112440"),
  g = n("671105"),
  N = n("552958"),
  A = n("981631"),
  p = n("921944"),
  v = n("871465"),
  h = n("689938"),
  O = n("621917");

function x(e, t) {
  let n = I.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }),
    u = F(e, void 0, s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, n.nestedEntry ? "trailing" : "top"),
    l = n.nestedEntry && t || !n.nestedEntry && !t;
  return (0, a.jsx)(a.Fragment, {
    children: l && u
  })
}

function U(e, t, n) {
  return F(e, t, s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, n)
}

function R() {
  let e = I.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }),
    [t] = (0, d.useGetDismissibleContent)([s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
  return (0, a.jsx)(a.Fragment, {
    children: e.enabled && e.nestedEntry && t === s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE && (0, a.jsx)(_.TextBadge, {
      className: O.newBadge,
      text: h.default.Messages.NEW
    })
  })
}

function F(e, t, s, x) {
  var U, R;
  let F = (0, g.useGuildCustomNotificationSound)(e),
    D = (0, g.useChannelCustomNotificationSound)(e, t),
    b = (0, i.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
    G = (0, i.useStateFromStores)([o.default], () => o.default.isMuted(e), [e]),
    j = M.default.canUseCustomNotificationSounds(b),
    y = j ? null != D ? D : F : v.Soundpacks.CLASSIC,
    L = I.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [P, V] = u.useState(!1),
    {
      playSound: k
    } = (0, N.default)(),
    [B, W] = (0, d.useGetDismissibleContent)([s]),
    w = B === s;
  if (u.useEffect(() => () => {
      P && W(p.ContentDismissActionType.TAKE_ACTION)
    }, [P, W]), !L) return null;
  let Y = n => {
      if (k(n), W(p.ContentDismissActionType.TAKE_ACTION), !j && n !== v.Soundpacks.CLASSIC) {
        (0, T.default)(n, "contextMenu"), (0, C.default)();
        return
      }
      null != t ? (0, m.updateChannelCustomNotificationSound)(e, t, y, n, "contextMenu") : (0, m.updateGuildCustomNotificationSound)(e, y, n, "contextMenu")
    },
    K = j ? r.Text : E.default,
    q = (0, v.getCustomNotificationSoundpackOptions)(),
    H = null !== (R = null === (U = q.find(e => e.value === y)) || void 0 === U ? void 0 : U.label) && void 0 !== R ? R : h.default.Messages.SOUNDPACK_DEFAULT_LABEL,
    z = (0, a.jsx)(_.TextBadge, {
      className: O.newBadge,
      text: h.default.Messages.NEW
    });
  return (0, a.jsx)(r.MenuItem, {
    id: "notification-sounds",
    label: e => {
      let {
        isFocused: t
      } = e;
      return t && V(t), (0, a.jsxs)("div", {
        className: O.rootContainer,
        children: [(0, a.jsxs)("div", {
          children: [w && "top" === x && z, (0, a.jsxs)("div", {
            className: O.headerContainer,
            children: [(0, a.jsx)(K, {
              className: O.text,
              color: t ? "always-white" : void 0,
              variant: "text-sm/medium",
              children: h.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
            }), (0, a.jsx)(S.default, {
              className: O.nitroWheel,
              color: t ? "white" : j ? void 0 : f.GradientCssUrls.PREMIUM_TIER_2,
              width: 16,
              height: 16
            })]
          }), null != H && (0, a.jsx)(K, {
            className: O.text,
            color: t ? "always-white" : void 0,
            variant: "text-xs/normal",
            children: H
          })]
        }), w && "trailing" === x && z]
      })
    },
    action: e !== A.ZERO_STRING_GUILD_ID ? () => (0, r.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("86977"), n.e("5863"), n.e("86426")]).then(n.bind(n, "751212"));
      return n => (0, a.jsx)(t, {
        ...n,
        guildId: e
      })
    }) : void 0,
    hasSubmenu: !0,
    children: (0, a.jsxs)(r.MenuGroup, {
      children: [q.map((e, t) => (0, a.jsxs)(u.Fragment, {
        children: [j || e.value === v.Soundpacks.CLASSIC ? (0, a.jsx)(r.MenuRadioItem, {
          id: e.label,
          group: "notification-preset",
          checked: (null != y ? y : v.Soundpacks.CLASSIC) === e.value,
          label: e.label,
          action: () => Y(e.value)
        }) : (0, a.jsx)(r.MenuItem, {
          id: e.label,
          label: t => {
            let {
              isFocused: n
            } = t;
            return (0, a.jsxs)("div", {
              className: O.labelContainer,
              children: [(0, a.jsx)(E.default, {
                color: n ? "always-white" : void 0,
                variant: "text-sm/medium",
                children: e.label
              }), (0, a.jsx)(l.CirclePlayIcon, {
                className: O.playButton,
                color: n ? r.tokens.colors.INTERACTIVE_ACTIVE : r.tokens.colors.INTERACTIVE_NORMAL
              })]
            })
          },
          action: () => Y(e.value)
        }), e.value === v.Soundpacks.CLASSIC ? (0, a.jsx)(r.MenuSeparator, {}) : null]
      }, t)), G && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.MenuSeparator, {}), (0, a.jsx)(r.MenuItem, {
          id: "label",
          label: (0, a.jsx)(r.Text, {
            className: O.mutedLabel,
            variant: "text-sm/medium",
            children: h.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_WARNING
          })
        })]
      })]
    })
  })
}