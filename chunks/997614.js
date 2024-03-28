"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var a = n("735250");
n("470079");
var l = n("399606"),
  s = n("524437"),
  i = n("239091"),
  r = n("706140"),
  o = n("242291"),
  u = n("792165"),
  d = n("603074"),
  c = n("294629"),
  f = n("390322"),
  h = n("871499"),
  m = n("131951"),
  p = n("503705"),
  E = n("304388"),
  C = n("689938");

function g(e) {
  let {
    channel: t,
    themeable: g
  } = e, S = t.getGuildId(), {
    mute: _,
    suppress: T
  } = (0, c.default)(t), I = (0, l.useStateFromStores)([m.default], () => m.default.isDeaf()), A = _ || T || I, v = (0, o.useSoundBoardDismissContentTypes)({
    isSoundboardButtonDisabled: A
  }), [N, x] = (0, r.useGetDismissibleContent)(v);

  function M(e) {
    null != S && (0, i.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, "338991"));
      return t => (0, a.jsx)(e, {
        guildId: S,
        ...t
      })
    })
  }
  return (0, a.jsx)(E.default, {
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, a.jsx)(f.default, {
        children: (0, a.jsx)(d.default, {
          guildId: S,
          channel: t,
          onClose: n,
          gridNotice: N === s.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, a.jsx)(u.CustomCallSoundUpsell, {
            onClose: n,
            markAsDismissed: x
          }),
          analyticsSource: "action bar button"
        })
      })
    },
    children: e => (0, a.jsx)(h.default, {
      themeable: g,
      label: function() {
        if (_) return C.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
        if (T) return C.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
        if (I) return C.default.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED
      }(),
      iconComponent: p.default,
      disabled: A,
      onContextMenu: M,
      ...e
    })
  })
}