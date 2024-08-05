n.d(t, {
  Z: function() {
return v;
  }
});
var a = n(735250),
  l = n(470079),
  s = n(120356),
  i = n.n(s),
  o = n(399606),
  r = n(481060),
  c = n(547972),
  d = n(556296),
  u = n(13140),
  m = n(435064),
  p = n(981631),
  C = n(332325),
  g = n(689938),
  h = n(341858);

function v(e) {
  let {
isEmptyBecauseQuery: t,
closePopout: n
  } = e, s = (0, o.e7)([d.Z], () => d.Z.getKeybindForAction(p.kg4.SAVE_CLIP)), v = (0, o.e7)([m.Z], () => m.Z.getSettings().clipsEnabled), x = t ? h.noSearchResultsImage : h.noClipsImage, f = l.useCallback(() => {
n(), (0, c.Z)(C.Z.CLIPS);
  }, [n]), E = (() => {
if (!v)
  return g.Z.Messages.CLIPS_GALLERY_NO_CLIPS_CLIPS_NOT_ENABLED.format({
    onClick: f
  });
if (t)
  return g.Z.Messages.CLIPS_GALLERY_NO_CLIPS_MATCH_QUERY;
if (null == s)
  return g.Z.Messages.CLIPS_GALLERY_NO_CLIPS_NO_KEYBIND_SET.format({
    onClick: f
  });
{
  let e = u.BB(s.shortcut, !0);
  return g.Z.Messages.CLIPS_GALLERY_NO_CLIPS.format({
    keybind: e,
    keybindHook: () => (0, a.jsx)('span', {
      className: h.keybindHintKeys,
      children: (0, a.jsx)(r.KeyCombo, {
        className: h.keybindShortcut,
        shortcut: e
      })
    })
  });
}
  })();
  return (0, a.jsx)('div', {
className: h.container,
children: (0, a.jsxs)('div', {
  className: h.content,
  children: [
    (0, a.jsx)('div', {
      className: x
    }),
    (0, a.jsx)(r.Text, {
      variant: 'text-md/medium',
      className: i()(h.noClipsText, {
        [h.noSearchResultsText]: t
      }),
      children: E
    })
  ]
})
  });
}