n.d(t, {
  Z: function() {
return h;
  }
});
var a = n(735250),
  l = n(470079),
  i = n(120356),
  s = n.n(i),
  o = n(399606),
  r = n(481060),
  c = n(547972),
  d = n(556296),
  u = n(13140),
  m = n(435064),
  p = n(981631),
  C = n(332325),
  v = n(689938),
  g = n(341858);

function h(e) {
  let {
isEmptyBecauseQuery: t,
closePopout: n
  } = e, i = (0, o.e7)([d.Z], () => d.Z.getKeybindForAction(p.kg4.SAVE_CLIP)), h = (0, o.e7)([m.Z], () => m.Z.getSettings().clipsEnabled), x = t ? g.noSearchResultsImage : g.noClipsImage, E = l.useCallback(() => {
n(), (0, c.Z)(C.Z.CLIPS);
  }, [n]), f = (() => {
if (!h)
  return v.Z.Messages.CLIPS_GALLERY_NO_CLIPS_CLIPS_NOT_ENABLED.format({
    onClick: E
  });
if (t)
  return v.Z.Messages.CLIPS_GALLERY_NO_CLIPS_MATCH_QUERY;
if (null == i)
  return v.Z.Messages.CLIPS_GALLERY_NO_CLIPS_NO_KEYBIND_SET.format({
    onClick: E
  });
{
  let e = u.BB(i.shortcut, !0);
  return v.Z.Messages.CLIPS_GALLERY_NO_CLIPS.format({
    keybind: e,
    keybindHook: () => (0, a.jsx)('span', {
      className: g.keybindHintKeys,
      children: (0, a.jsx)(r.KeyCombo, {
        className: g.keybindShortcut,
        shortcut: e
      })
    })
  });
}
  })();
  return (0, a.jsx)('div', {
className: g.container,
children: (0, a.jsxs)('div', {
  className: g.content,
  children: [
    (0, a.jsx)('div', {
      className: x
    }),
    (0, a.jsx)(r.Text, {
      variant: 'text-md/medium',
      className: s()(g.noClipsText, {
        [g.noSearchResultsText]: t
      }),
      children: f
    })
  ]
})
  });
}