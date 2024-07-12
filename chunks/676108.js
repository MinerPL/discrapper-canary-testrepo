n.d(t, {
  Z: function() {
return _;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(481060),
  o = n(907040),
  s = n(28546),
  l = n(401227),
  u = n(872635),
  c = n(185923),
  d = n(227285);

function _(e) {
  var t;
  let {
editorRef: n,
options: _,
channel: E
  } = e, f = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor(), h = i.useCallback((e, t) => {
let r = n.current;
null != e && null != r && r.insertEmoji(e, t, !1), t && (0, s._Q)();
  }, [n]);
  return null == f ? null : (0, r.jsxs)('div', {
id: 'slate-toolbar',
className: d.staticToolbar,
children: [
  (0, r.jsx)('div', {
    className: d.staticButtons,
    children: (0, r.jsx)(u.I, {
      editorRef: n,
      options: _,
      iconClassName: d.staticIcon,
      dividerClassName: d.staticDivider
    })
  }),
  (0, r.jsx)(a.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.Z, {
        persistSearch: !0,
        channel: E,
        closePopout: t,
        onSelectEmoji: (e, n) => {
          h(e, n), n && t();
        },
        pickerIntention: c.Hz.COMMUNITY_CONTENT
      });
    },
    position: 'bottom',
    animation: a.Popout.Animation.NONE,
    align: 'left',
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, r.jsx)(l.Z, {
        ...e,
        active: n,
        className: d.emojiButton,
        tabIndex: 0
      });
    }
  })
]
  });
}