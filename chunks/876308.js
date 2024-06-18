"use strict";
n.r(t), n(411104);
var o = n(735250),
  r = n(470079),
  i = n(817080),
  a = n(442837),
  u = n(481060),
  s = n(668781),
  c = n(239091),
  d = n(883385),
  l = n(108843),
  f = n(100527),
  p = n(496675),
  O = n(358085),
  N = n(998502),
  w = n(22382),
  S = n(51078),
  b = n(710111),
  y = n(981631),
  g = n(689938);
t.default = (0, l.Z)((0, d.Z)(function(e) {
  let {
    soundGuild: t,
    sound: d,
    activeCallGuildId: l,
    onSelect: f
  } = e, y = function(e, t) {
    let {
      canManageGuildExpressions: i
    } = (0, a.cj)([p.Z], () => null == t ? {
      canManageGuildExpressions: !1
    } : p.Z.getGuildPermissionProps(t), [t]), s = r.useCallback(() => {
      if ((null == t ? void 0 : t.id) == null) return null;
      (0, u.openModalLazy)(async () => {
        let {
          default: r
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("56035"), n.e("358")]).then(n.bind(n, 758961));
        return n => (0, o.jsx)(r, {
          ...n,
          existingSound: e,
          guildId: t.id
        })
      })
    }, [t, e]);
    return i ? (0, o.jsx)(u.MenuItem, {
      id: "edit-soundboard-sound",
      label: g.Z.Messages.SOUNDBOARD_CONTEXT_MENU_EDIT_SOUND,
      action: s
    }, "edit-soundboard-sound") : null
  }(d, t), D = function(e) {
    let {
      soundId: t
    } = e, n = r.useCallback(async () => {
      try {
        let e = (0, w.Z)(t),
          n = await fetch(e),
          o = await n.blob(),
          r = function(e) {
            switch (e.type) {
              case "audio/mpeg":
              case "audio/mpeg3":
                return "mp3";
              case "audio/ogg":
                return "ogg";
              default:
                throw Error("unable to determine file type")
            }
          }(o),
          a = "".concat(t, ".").concat(r);
        O.isPlatformEmbedded ? await N.ZP.saveFile(e, a) : (0, i.saveAs)(o, a)
      } catch (e) {
        s.Z.show({
          title: g.Z.Messages.SOUNDBOARD_DOWNLOAD_SOUND_FAILED_TITLE,
          body: g.Z.Messages.SOUNDBOARD_DOWNLOAD_SOUND_FAILED_BODY,
          confirmText: g.Z.Messages.OKAY
        })
      }
    }, [t]);
    return e.guildId === b.X8 ? null : (0, o.jsx)(u.MenuItem, {
      id: "download-soundboard-sound",
      label: g.Z.Messages.SOUNDBOARD_CONTEXT_MENU_DOWNLOAD_SOUND,
      action: n
    }, "download-soundboard-sound")
  }(d), h = (0, S.Z)(d, l);
  return (0, o.jsx)(u.Menu, {
    navId: "sound-button-context",
    onClose: c.Zy,
    "aria-label": g.Z.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: f,
    children: (0, o.jsxs)(u.MenuGroup, {
      children: [y, h, D]
    })
  })
}, {
  object: y.qAy.CONTEXT_MENU
}), [f.Z.CONTEXT_MENU, f.Z.SOUNDBOARD_BUTTON])