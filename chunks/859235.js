"use strict";
n.d(t, {
  q: function() {
    return r
  }
});
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(91192),
  _ = n(481060),
  d = n(166459),
  c = n(404975),
  E = n(585483),
  I = n(43085),
  T = n(981631),
  h = n(689938),
  S = n(995941);

function f(e) {
  e.stopPropagation()
}(i = r || (r = {}))[i.SMALL = 0] = "SMALL", i[i.MEDIUM = 1] = "MEDIUM", i[i.CLIP = 2] = "CLIP";
t.Z = o.forwardRef(function(e, t) {
  let {
    id: n,
    channelId: i,
    className: r,
    children: o,
    actions: a,
    handleEditModal: N,
    keyboardModeEnabled: A,
    onKeyDown: m,
    draftType: O,
    size: R = 1
  } = e, {
    onFocus: C,
    ...p
  } = (0, u.JA)(n), {
    handleFocus: g,
    handleBlur: L
  } = (0, I.b)(C), v = 0 === R, D = null != a;
  return (0, s.jsx)(_.FocusRing, {
    children: (0, s.jsx)("li", {
      ...p,
      onFocus: g,
      onBlur: L,
      onKeyDown: e => {
        if (!!A) {
          switch (e.which) {
            case T.yXg.D:
              e.preventDefault(), d.Z.remove(i, n, O);
              return;
            case T.yXg.E:
              null != N && (e.preventDefault(), N(e));
              return;
            case T.yXg.BACKSPACE:
              e.ctrlKey ? (e.preventDefault(), d.Z.clearAll(i, O)) : (e.preventDefault(), d.Z.remove(i, n, O));
              return;
            case T.yXg.ARROW_UP:
              if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
              e.preventDefault(), E.S.dispatchToLastSubscribed(T.CkL.FOCUS_MESSAGES, {
                atEnd: !0
              })
          }
          null == m || m(e)
        }
      },
      className: l()(S.upload, r, {
        [S.sizeClip]: 2 === R
      }),
      ref: t,
      children: (0, s.jsxs)("div", {
        className: S.uploadContainer,
        children: [o, D ? (0, s.jsx)("div", {
          className: S.actionBarContainer,
          children: (0, s.jsx)("div", {
            className: l()(S.actionBar, {
              [S.smallActionBar]: v
            }),
            onContextMenu: f,
            "aria-label": h.Z.Messages.ATTACHMENT_UTILITIES,
            children: (0, s.jsx)(c.ZP, {
              className: l()({
                [S.miniPopover]: v
              }),
              children: a
            })
          })
        }) : null]
      })
    })
  })
})