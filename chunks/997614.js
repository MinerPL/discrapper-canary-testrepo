"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("399606"),
  i = n("524437"),
  r = n("239091"),
  o = n("706140"),
  u = n("242291"),
  d = n("792165"),
  c = n("603074"),
  f = n("294629"),
  h = n("390322"),
  m = n("871499"),
  p = n("131951"),
  E = n("503705"),
  C = n("459273"),
  g = n("304388"),
  S = n("981631"),
  _ = n("689938");

function T(e) {
  let {
    channel: t,
    themeable: T
  } = e, I = t.getGuildId(), {
    mute: A,
    suppress: N
  } = (0, f.default)(t), v = (0, s.useStateFromStores)([p.default], () => p.default.isDeaf()), x = A || N || v, M = (0, u.useSoundBoardDismissContentTypes)({
    isSoundboardButtonDisabled: x
  }), [R, L] = (0, o.useGetDismissibleContent)(M);

  function y(e) {
    null != I && (0, r.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, "338991"));
      return t => (0, a.jsx)(e, {
        guildId: I,
        ...t
      })
    })
  }
  let O = l.useRef(null),
    j = l.useCallback(() => {
      var e;
      null === (e = O.current) || void 0 === e || e.hidePopout()
    }, []);
  return (0, C.useComponentAction)({
    event: S.ComponentActions.TOGGLE_SOUNDBOARD,
    handler: j
  }), (0, a.jsx)(g.default, {
    ref: O,
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, a.jsx)(h.default, {
        children: (0, a.jsx)(c.default, {
          guildId: I,
          channel: t,
          onClose: n,
          gridNotice: R === i.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, a.jsx)(d.CustomCallSoundUpsell, {
            onClose: n,
            markAsDismissed: L
          }),
          analyticsSource: "action bar button"
        })
      })
    },
    children: e => (0, a.jsx)(m.default, {
      themeable: T,
      label: function() {
        if (A) return _.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
        if (N) return _.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
        if (v) return _.default.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED
      }(),
      iconComponent: E.default,
      disabled: x,
      onContextMenu: y,
      ...e
    })
  })
}