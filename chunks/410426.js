"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
});
var a = l("735250"),
  n = l("470079"),
  s = l("120356"),
  i = l.n(s),
  o = l("399606"),
  r = l("481060"),
  u = l("547972"),
  c = l("556296"),
  d = l("13140"),
  f = l("435064"),
  m = l("981631"),
  p = l("332325"),
  C = l("689938"),
  v = l("103703");

function h(e) {
  let {
    isEmptyBecauseQuery: t,
    closePopout: l
  } = e, s = (0, o.useStateFromStores)([c.default], () => c.default.getKeybindForAction(m.GlobalKeybindActions.SAVE_CLIP)), h = (0, o.useStateFromStores)([f.default], () => f.default.getSettings().clipsEnabled), g = t ? v.noSearchResultsImage : v.noClipsImage, S = n.useCallback(() => {
    l(), (0, u.default)(p.GameSettingsTab.CLIPS)
  }, [l]), x = (() => {
    if (!h) return C.default.Messages.CLIPS_GALLERY_NO_CLIPS_CLIPS_NOT_ENABLED.format({
      onClick: S
    });
    if (t) return C.default.Messages.CLIPS_GALLERY_NO_CLIPS_MATCH_QUERY;
    if (null == s) return C.default.Messages.CLIPS_GALLERY_NO_CLIPS_NO_KEYBIND_SET.format({
      onClick: S
    });
    {
      let e = d.toString(s.shortcut, !0);
      return C.default.Messages.CLIPS_GALLERY_NO_CLIPS.format({
        keybind: e,
        keybindHook: () => (0, a.jsx)("span", {
          className: v.keybindHintKeys,
          children: (0, a.jsx)(r.KeyCombo, {
            className: v.keybindShortcut,
            shortcut: e
          })
        })
      })
    }
  })();
  return (0, a.jsx)("div", {
    className: v.container,
    children: (0, a.jsxs)("div", {
      className: v.content,
      children: [(0, a.jsx)("div", {
        className: g
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        className: i()(v.noClipsText, {
          [v.noSearchResultsText]: t
        }),
        children: x
      })]
    })
  })
}