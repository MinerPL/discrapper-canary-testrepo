"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(907040),
  a = n(28546),
  l = n(401227),
  u = n(872635),
  _ = n(185923),
  d = n(364610);

function c(e) {
  var t;
  let {
    editorRef: n,
    options: c,
    channel: E
  } = e, I = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor(), T = r.useCallback((e, t) => {
    let i = n.current;
    null != e && null != i && i.insertEmoji(e, t, !1), t && (0, a._Q)()
  }, [n]);
  return null == I ? null : (0, i.jsxs)("div", {
    id: "slate-toolbar",
    className: d.staticToolbar,
    children: [(0, i.jsx)("div", {
      className: d.staticButtons,
      children: (0, i.jsx)(u.I, {
        editorRef: n,
        options: c,
        iconClassName: d.staticIcon,
        dividerClassName: d.staticDivider
      })
    }), (0, i.jsx)(s.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsx)(o.Z, {
          persistSearch: !0,
          channel: E,
          closePopout: t,
          onSelectEmoji: (e, n) => {
            T(e, n), n && t()
          },
          pickerIntention: _.Hz.COMMUNITY_CONTENT
        })
      },
      position: "bottom",
      animation: s.Popout.Animation.NONE,
      align: "left",
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, i.jsx)(l.Z, {
          ...e,
          active: n,
          className: d.emojiButton,
          tabIndex: 0
        })
      }
    })]
  })
}