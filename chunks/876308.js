"use strict";
n.r(t), n("411104");
var o = n("735250"),
  a = n("470079"),
  r = n("817080"),
  i = n("442837"),
  u = n("481060"),
  s = n("668781"),
  d = n("239091"),
  l = n("883385"),
  c = n("108843"),
  f = n("100527"),
  O = n("496675"),
  p = n("358085"),
  S = n("998502"),
  D = n("22382"),
  N = n("51078"),
  w = n("710111"),
  _ = n("981631"),
  b = n("689938");
t.default = (0, c.default)((0, l.default)(function(e) {
  let {
    soundGuild: t,
    sound: l,
    activeCallGuildId: c,
    onSelect: f
  } = e, _ = function(e, t) {
    let {
      canManageGuildExpressions: r
    } = (0, i.useStateFromStoresObject)([O.default], () => null == t ? {
      canManageGuildExpressions: !1
    } : O.default.getGuildPermissionProps(t), [t]), s = a.useCallback(() => {
      if ((null == t ? void 0 : t.id) == null) return null;
      (0, u.openModalLazy)(async () => {
        let {
          default: a
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("56035"), n.e("358")]).then(n.bind(n, "758961"));
        return n => (0, o.jsx)(a, {
          ...n,
          existingSound: e,
          guildId: t.id
        })
      })
    }, [t, e]);
    return r ? (0, o.jsx)(u.MenuItem, {
      id: "edit-soundboard-sound",
      label: b.default.Messages.SOUNDBOARD_CONTEXT_MENU_EDIT_SOUND,
      action: s
    }, "edit-soundboard-sound") : null
  }(l, t), m = function(e) {
    let {
      soundId: t
    } = e, n = a.useCallback(async () => {
      try {
        let e = (0, D.default)(t),
          n = await fetch(e),
          o = await n.blob(),
          a = function(e) {
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
          i = "".concat(t, ".").concat(a);
        p.isPlatformEmbedded ? await S.default.saveFile(e, i) : (0, r.saveAs)(o, i)
      } catch (e) {
        s.default.show({
          title: b.default.Messages.SOUNDBOARD_DOWNLOAD_SOUND_FAILED_TITLE,
          body: b.default.Messages.SOUNDBOARD_DOWNLOAD_SOUND_FAILED_BODY,
          confirmText: b.default.Messages.OKAY
        })
      }
    }, [t]);
    return e.guildId === w.DEFAULT_SOUND_GUILD_ID ? null : (0, o.jsx)(u.MenuItem, {
      id: "download-soundboard-sound",
      label: b.default.Messages.SOUNDBOARD_CONTEXT_MENU_DOWNLOAD_SOUND,
      action: n
    }, "download-soundboard-sound")
  }(l), y = (0, N.default)(l, c);
  return (0, o.jsx)(u.Menu, {
    navId: "sound-button-context",
    onClose: d.closeContextMenu,
    "aria-label": b.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: f,
    children: (0, o.jsxs)(u.MenuGroup, {
      children: [_, y, m]
    })
  })
}, {
  object: _.AnalyticsObjects.CONTEXT_MENU
}), [f.default.CONTEXT_MENU, f.default.SOUNDBOARD_BUTTON])