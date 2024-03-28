"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
});
var a = l("735250"),
  n = l("470079"),
  s = l("803997"),
  i = l.n(s),
  o = l("399606"),
  r = l("481060"),
  d = l("230711"),
  c = l("556296"),
  u = l("13140"),
  p = l("435064"),
  f = l("981631"),
  m = l("689938"),
  v = l("95551");

function h(e) {
  let {
    isEmptyBecauseQuery: t,
    closePopout: l
  } = e, s = (0, o.useStateFromStores)([c.default], () => c.default.getKeybindForAction(f.GlobalKeybindActions.SAVE_CLIP)), h = (0, o.useStateFromStores)([p.default], () => p.default.getSettings().clipsEnabled), C = t ? v.noSearchResultsImage : v.noClipsImage, g = n.useCallback(() => {
    l(), d.default.open(f.UserSettingsSections.CLIPS)
  }, [l]), x = (() => {
    if (!h) return m.default.Messages.CLIPS_GALLERY_NO_CLIPS_CLIPS_NOT_ENABLED.format({
      onClick: g
    });
    if (t) return m.default.Messages.CLIPS_GALLERY_NO_CLIPS_MATCH_QUERY;
    if (null == s) return m.default.Messages.CLIPS_GALLERY_NO_CLIPS_NO_KEYBIND_SET.format({
      onClick: g
    });
    {
      let e = u.toString(s.shortcut, !0);
      return m.default.Messages.CLIPS_GALLERY_NO_CLIPS.format({
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
        className: C
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