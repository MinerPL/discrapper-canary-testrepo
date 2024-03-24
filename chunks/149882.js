"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var a = n("37983");
n("884691");
var l = n("65597"),
  s = n("151426"),
  i = n("272030"),
  r = n("235145"),
  u = n("78581"),
  o = n("429829"),
  d = n("191191"),
  c = n("244390"),
  f = n("124824"),
  h = n("981913"),
  m = n("42887"),
  p = n("754576"),
  E = n("814711"),
  g = n("782340");

function S(e) {
  let {
    channel: t,
    themeable: S
  } = e, C = t.getGuildId(), {
    mute: _,
    suppress: I
  } = (0, c.default)(t), T = (0, l.useStateFromStores)([m.default], () => m.default.isDeaf()), v = _ || I || T, x = (0, u.useSoundBoardDismissContentTypes)({
    isSoundboardButtonDisabled: v
  }), [N, A] = (0, r.useGetDismissibleContent)(x);

  function M(e) {
    null != C && (0, i.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("136137").then(n.bind(n, "136137"));
      return t => (0, a.jsx)(e, {
        guildId: C,
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
          guildId: C,
          channel: t,
          onClose: n,
          gridNotice: N === s.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, a.jsx)(o.CustomCallSoundUpsell, {
            onClose: n,
            markAsDismissed: A
          }),
          analyticsSource: "action bar button"
        })
      })
    },
    children: e => (0, a.jsx)(h.default, {
      themeable: S,
      label: function() {
        if (_) return g.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
        if (I) return g.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
        if (T) return g.default.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED
      }(),
      iconComponent: p.default,
      disabled: v,
      onContextMenu: M,
      ...e
    })
  })
}