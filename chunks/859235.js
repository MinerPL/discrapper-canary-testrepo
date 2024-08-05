n.d(t, {
  q: function() {
return i;
  }
});
var r, i, a = n(735250),
  s = n(470079),
  o = n(120356),
  l = n.n(o),
  u = n(91192),
  c = n(481060),
  d = n(166459),
  _ = n(404975),
  E = n(585483),
  f = n(43085),
  h = n(981631),
  p = n(689938),
  m = n(568838);

function I(e) {
  e.stopPropagation();
}
(r = i || (i = {}))[r.SMALL = 0] = 'SMALL', r[r.MEDIUM = 1] = 'MEDIUM', r[r.CLIP = 2] = 'CLIP';
t.Z = s.forwardRef(function(e, t) {
  let {
id: n,
channelId: r,
className: i,
children: s,
actions: o,
handleEditModal: T,
keyboardModeEnabled: g,
onKeyDown: S,
draftType: A,
size: N = 1
  } = e, {
onFocus: v,
...O
  } = (0, u.JA)(n), {
handleFocus: R,
handleBlur: C
  } = (0, f.b)(v), y = 0 === N, D = null != o;
  return (0, a.jsx)(c.FocusRing, {
children: (0, a.jsx)('li', {
  ...O,
  onFocus: R,
  onBlur: C,
  onKeyDown: e => {
    if (!!g) {
      switch (e.which) {
        case h.yXg.D:
          e.preventDefault(), d.Z.remove(r, n, A);
          return;
        case h.yXg.E:
          null != T && (e.preventDefault(), T(e));
          return;
        case h.yXg.BACKSPACE:
          e.ctrlKey ? (e.preventDefault(), d.Z.clearAll(r, A)) : (e.preventDefault(), d.Z.remove(r, n, A));
          return;
        case h.yXg.ARROW_UP:
          if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey)
            return;
          e.preventDefault(), E.S.dispatchToLastSubscribed(h.CkL.FOCUS_MESSAGES, {
            atEnd: !0
          });
      }
      null == S || S(e);
    }
  },
  className: l()(m.upload, i, {
    [m.sizeClip]: 2 === N
  }),
  ref: t,
  children: (0, a.jsxs)('div', {
    className: m.uploadContainer,
    children: [
      s,
      D ? (0, a.jsx)('div', {
        className: m.actionBarContainer,
        children: (0, a.jsx)('div', {
          className: l()(m.actionBar, {
            [m.smallActionBar]: y
          }),
          onContextMenu: I,
          'aria-label': p.Z.Messages.ATTACHMENT_UTILITIES,
          children: (0, a.jsx)(_.ZP, {
            className: l()({
              [m.miniPopover]: y
            }),
            children: o
          })
        })
      }) : null
    ]
  })
})
  });
});