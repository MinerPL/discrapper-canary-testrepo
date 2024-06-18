"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(239091),
  l = n(665692),
  u = n(689938),
  _ = n(603649);

function d(e) {
  var t;
  let s, d, c, {
      className: E,
      activeCommand: I,
      activeOption: T,
      optionStates: h
    } = e,
    S = r.useCallback(e => {
      var t;
      let r = null == I ? void 0 : null === (t = I.rootCommand) || void 0 === t ? void 0 : t.id;
      if (null == r) {
        e.preventDefault();
        return
      }(0, a.jW)(e, async () => {
        let {
          default: e
        } = await n.e("5396").then(n.bind(n, 731646));
        return t => (0, i.jsx)(e, {
          ...t,
          id: r,
          label: u.Z.Messages.COPY_ID_COMMAND
        })
      })
    }, [null == I ? void 0 : null === (t = I.rootCommand) || void 0 === t ? void 0 : t.id]);
  if (null == I) return null;
  if (null != T) {
    let e = h[T.name].lastValidationResult;
    s = T.displayName, d = T.displayDescription, c = (null == e ? void 0 : e.success) ? null : null == e ? void 0 : e.error
  } else s = "".concat(l.GI).concat(I.displayName), d = I.displayDescription, c = null;
  return (0, i.jsxs)("div", {
    className: o()(E, _.bar),
    onContextMenu: S,
    children: [(0, i.jsx)("span", {
      className: _.name,
      children: s
    }), null != c ? (0, i.jsx)("span", {
      className: _.error,
      children: c
    }) : (0, i.jsx)("span", {
      className: _.description,
      children: d
    })]
  })
}