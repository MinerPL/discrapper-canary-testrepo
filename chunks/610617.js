"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("47120");
var i = s("735250"),
  a = s("470079"),
  n = s("120356"),
  l = s.n(n),
  r = s("392711"),
  o = s.n(r),
  d = s("831209"),
  u = s("442837"),
  c = s("524437"),
  h = s("433517"),
  S = s("481060"),
  N = s("243778"),
  g = s("430824"),
  f = s("9156"),
  m = s("594174"),
  E = s("466111"),
  T = s("759231"),
  _ = s("26290"),
  I = s("74538"),
  x = s("671105"),
  C = s("552958"),
  O = s("213931"),
  p = s("940165"),
  M = s("820408"),
  v = s("921944"),
  L = s("871465"),
  A = s("689938"),
  j = s("190087");

function R(e) {
  let {
    guildId: t,
    onClose: s,
    isRedesign: n = !1
  } = e, r = (0, u.useStateFromStores)([g.default], () => g.default.getGuild(t)), R = (0, u.useStateFromStores)([m.default], () => m.default.getCurrentUser()), {
    playSound: b,
    isPlaying: U,
    soundpackPlaying: G
  } = (0, C.default)(), F = (0, x.useGuildCustomNotificationSound)(t), P = I.default.canUseCustomNotificationSounds(R), D = P ? F : L.Soundpacks.CLASSIC, k = a.useRef(0), y = a.useRef(-1), [H, w] = a.useState(!1), B = (0, L.getCustomNotificationSoundpackOptions)(), Y = a.useCallback(() => {
    clearTimeout(y.current), k.current += 1, k.current > 10 && (w(!0), h.Storage.set(L.CUSTOM_NOTIFICATION_SOUNDS_ASMR_STORAGE_KEY, !0)), y.current = setTimeout(() => {
      k.current = 0
    }, 1e3)
  }, []), [V, W] = o().partition(B, e => !e.requirePremium || e.requirePremium && P), z = V.map(e => {
    var t, s, i, a;
    return {
      name: e.label,
      value: e.value,
      desc: e.description,
      radioBarClassName: (t = e.value, s = G, i = U, a = n, l()(j.option, {
        [j.optionRedesign]: a,
        [j.optionPlaying]: t === s && i
      }))
    }
  }), [K, X] = (0, N.useSelectedDismissibleContent)([c.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]), q = K === c.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  a.useEffect(() => () => {
    X(v.ContentDismissActionType.AUTO_DISMISS)
  }, [X]);
  let J = I.default.canUseCustomNotificationSounds(R),
    Q = (0, u.useStateFromStores)([f.default], () => f.default.isMuted(t), [t]);
  return null == R ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsxs)("div", {
      className: j.header,
      children: [(0, i.jsx)(S.Heading, {
        variant: "heading-md/semibold",
        children: A.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
      }), (0, i.jsx)(S.Clickable, {
        onClick: Y,
        className: j.nitroWheelContainer,
        children: (0, i.jsx)(E.default, {
          className: j.nitroWheel
        })
      }), q && (0, i.jsx)(_.TextBadge, {
        className: j.newBadge,
        text: A.default.Messages.NEW
      })]
    }), (0, i.jsx)(S.Text, {
      className: j.subheader,
      variant: "text-sm/normal",
      children: A.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_DESCRIPTION_V2.format({
        guildName: (e, t) => (0, i.jsx)(S.Text, {
          tag: "span",
          variant: "text-sm/medium",
          children: null == r ? void 0 : r.name
        }, t)
      })
    }), Q && (0, i.jsxs)("div", {
      className: j.warningContainer,
      children: [(0, i.jsx)(T.default, {
        color: d.default.STATUS_WARNING
      }), (0, i.jsx)(S.Text, {
        className: j.warningLabel,
        variant: "text-sm/medium",
        children: A.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_WARNING
      })]
    }), (0, i.jsx)(S.FormItem, {
      className: j.optionsContainer,
      title: A.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_LABEL,
      children: (0, i.jsxs)("div", {
        className: l()({
          [j.options]: !J
        }),
        children: [(0, i.jsx)(S.RadioGroup, {
          className: l()({
            [j.options]: J
          }),
          value: null != D ? D : L.Soundpacks.CLASSIC,
          onChange: e => {
            b(e.value), P && (0, O.updateGuildCustomNotificationSound)(t, D, e.value, "notificationSettings")
          },
          options: z,
          radioItemClassName: j.option
        }), W.map((e, t) => (0, i.jsx)(p.default, {
          className: j.playableOption,
          label: e.label,
          description: e.description,
          soundpack: e.value,
          location: "notificationSettings"
        }, "sound_option_".concat(t)))]
      })
    }), !J && (0, i.jsx)(M.default, {
      onClose: s
    })]
  })
}