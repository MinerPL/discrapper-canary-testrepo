"use strict";
a.r(t), a.d(t, {
  AttachmentListItemSizes: function() {
    return s
  },
  default: function() {
    return v
  }
});
var l, s, n = a("37983"),
  i = a("884691"),
  r = a("414456"),
  o = a.n(r),
  d = a("974667"),
  u = a("77078"),
  c = a("81594"),
  m = a("149279"),
  h = a("659500"),
  p = a("645406"),
  f = a("49111"),
  g = a("782340"),
  E = a("864147");

function M(e) {
  e.stopPropagation()
}(l = s || (s = {}))[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM";
var v = i.forwardRef(function(e, t) {
  let {
    id: a,
    channelId: l,
    className: s,
    children: i,
    actions: r,
    handleEditModal: v,
    keyboardModeEnabled: x,
    onKeyDown: T,
    draftType: L,
    size: j = 1
  } = e, {
    onFocus: A,
    ...I
  } = (0, d.useListItem)(a), {
    handleFocus: S,
    handleBlur: N
  } = (0, p.useFocusInside)(A), C = 0 === j, _ = null != r;
  return (0, n.jsx)(u.FocusRing, {
    children: (0, n.jsx)("li", {
      ...I,
      onFocus: S,
      onBlur: N,
      onKeyDown: e => {
        if (x) {
          switch (e.which) {
            case f.KeyboardKeys.D:
              e.preventDefault(), c.default.remove(l, a, L);
              return;
            case f.KeyboardKeys.E:
              null != v && (e.preventDefault(), v(e));
              return;
            case f.KeyboardKeys.BACKSPACE:
              e.ctrlKey ? (e.preventDefault(), c.default.clearAll(l, L)) : (e.preventDefault(), c.default.remove(l, a, L));
              return;
            case f.KeyboardKeys.ARROW_UP:
              let t = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey;
              if (t) return;
              e.preventDefault(), h.ComponentDispatch.dispatchToLastSubscribed(f.ComponentActions.FOCUS_MESSAGES, {
                atEnd: !0
              })
          }
          null == T || T(e)
        }
      },
      className: o(E.upload, s),
      ref: t,
      children: (0, n.jsxs)("div", {
        className: E.uploadContainer,
        children: [i, _ ? (0, n.jsx)("div", {
          className: E.actionBarContainer,
          children: (0, n.jsx)("div", {
            className: o(E.actionBar, {
              [E.smallActionBar]: C
            }),
            onContextMenu: M,
            "aria-label": g.default.Messages.ATTACHMENT_UTILITIES,
            children: (0, n.jsx)(m.default, {
              className: o({
                [E.miniPopover]: C
              }),
              children: r
            })
          })
        }) : null]
      })
    })
  })
})