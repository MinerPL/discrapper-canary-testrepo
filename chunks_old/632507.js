"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("70102");
var o = n("37983"),
  r = n("884691"),
  a = n("979897"),
  i = n("446674"),
  u = n("77078"),
  s = n("404118"),
  l = n("272030"),
  d = n("838446"),
  c = n("158534"),
  f = n("812204"),
  p = n("957255"),
  O = n("773336"),
  h = n("50885"),
  v = n("520497"),
  D = n("112646"),
  S = n("846325"),
  y = n("49111"),
  _ = n("782340"),
  g = (0, c.default)((0, d.default)(function(e) {
    let {
      soundGuild: t,
      sound: d,
      activeCallGuildId: c,
      onSelect: f
    } = e, y = function(e, t) {
      let {
        canManageGuildExpressions: a
      } = (0, i.useStateFromStoresObject)([p.default], () => null == t ? {
        canManageGuildExpressions: !1
      } : p.default.getGuildPermissionProps(t), [t]), s = r.useCallback(() => {
        if ((null == t ? void 0 : t.id) == null) return null;
        (0, u.openModalLazy)(async () => {
          let {
            default: r
          } = await n.el("823749").then(n.bind(n, "823749"));
          return n => (0, o.jsx)(r, {
            ...n,
            existingSound: e,
            guildId: t.id
          })
        })
      }, [t, e]);
      return a ? (0, o.jsx)(u.MenuItem, {
        id: "edit-soundboard-sound",
        label: _.default.Messages.SOUNDBOARD_CONTEXT_MENU_EDIT_SOUND,
        action: s
      }, "edit-soundboard-sound") : null
    }(d, t), g = function(e) {
      let {
        soundId: t
      } = e, n = r.useCallback(async () => {
        try {
          let e = (0, v.default)(t),
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
            i = "".concat(t, ".").concat(r);
          O.isPlatformEmbedded ? await h.default.saveFile(e, i) : (0, a.saveAs)(o, i)
        } catch (e) {
          s.default.show({
            title: _.default.Messages.SOUNDBOARD_DOWNLOAD_SOUND_FAILED_TITLE,
            body: _.default.Messages.SOUNDBOARD_DOWNLOAD_SOUND_FAILED_BODY,
            confirmText: _.default.Messages.OKAY
          })
        }
      }, [t]);
      return e.guildId === S.DEFAULT_SOUND_GUILD_ID ? null : (0, o.jsx)(u.MenuItem, {
        id: "download-soundboard-sound",
        label: _.default.Messages.SOUNDBOARD_CONTEXT_MENU_DOWNLOAD_SOUND,
        action: n
      }, "download-soundboard-sound")
    }(d), b = (0, D.default)(d, c);
    return (0, o.jsx)(u.Menu, {
      navId: "sound-button-context",
      onClose: l.closeContextMenu,
      "aria-label": _.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: f,
      children: (0, o.jsxs)(u.MenuGroup, {
        children: [y, b, g]
      })
    })
  }, {
    object: y.AnalyticsObjects.CONTEXT_MENU
  }), [f.default.CONTEXT_MENU, f.default.SOUNDBOARD_BUTTON])