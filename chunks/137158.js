"use strict";
i.r(t), i.d(t, {
  default: function() {
    return h
  }
}), i("47120");
var a = i("735250"),
  l = i("470079"),
  n = i("803997"),
  s = i.n(n),
  r = i("392711"),
  o = i("942389"),
  d = i("692547"),
  c = i("481060"),
  u = i("548343"),
  f = i("689938"),
  m = i("482249");

function E(e) {
  let {
    title: t,
    children: i,
    onEdit: l,
    onRemove: n
  } = e;
  return (0, a.jsxs)("div", {
    className: m.backgroundContainer,
    children: [(0, a.jsxs)("div", {
      className: m.containerPadding,
      children: [(0, a.jsx)(c.FormTitle, {
        tag: "h3",
        className: m.containerTitle,
        children: t
      }), i]
    }), (0, a.jsxs)(c.FormSection, {
      className: m.containerFooter,
      children: [(0, a.jsx)(c.Button, {
        className: s()(m.removeButton, m.button),
        size: c.Button.Sizes.SMALL,
        look: c.Button.Looks.BLANK,
        onClick: n,
        children: f.default.Messages.REMOVE
      }), (0, a.jsx)(c.Button, {
        className: m.button,
        size: c.Button.Sizes.SMALL,
        color: c.Button.Colors.PRIMARY,
        onClick: l,
        children: f.default.Messages.EDIT
      })]
    })]
  })
}
let I = "FORM_FIELD";

function x(e) {
  let {
    index: t,
    field: i,
    isDropHovered: n,
    onDrop: c
  } = e, f = (0, r.debounce)(async (e, t, i) => {
    await c(e, t, i)
  }), x = l.useRef(null), [, h] = (0, o.useDrag)({
    type: I,
    item: {
      index: t,
      field: i
    },
    end: (e, t) => {
      null != e && !t.didDrop() && f(e.field, null, !0)
    }
  }), [, T] = (0, o.useDrop)({
    accept: I,
    hover: (e, i) => {
      var a;
      let {
        index: l
      } = e, n = null === (a = x.current) || void 0 === a ? void 0 : a.getBoundingClientRect(), s = i.getClientOffset();
      if (null == n || null == s) return;
      let r = (n.bottom - n.top) / 2,
        o = s.y - n.top;
      (!(l < t) || !(o < r)) && (!(l > t) || !(o < r)) && l !== t && f(e.field, t, !1)
    },
    drop: e => {
      f(e.field, t, !0)
    }
  });
  return l.useLayoutEffect(() => (h(T(x)), () => {
    T(null), h(null)
  }), [h, T]), (0, a.jsxs)("div", {
    ref: x,
    "data-dnd-name": "field-".concat(t),
    className: s()(m.dragContainer, {
      [m.dropHovered]: n
    }),
    children: [(0, a.jsx)("div", {
      className: m.dragIconContainer,
      children: (0, a.jsx)(u.default, {
        className: m.dragIcon,
        color: d.default.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, a.jsx)(E, {
      ...e
    })]
  })
}

function h(e) {
  return (0, a.jsx)("div", {
    className: m.spacingContainer,
    children: e.isDragEnabled ? (0, a.jsx)(x, {
      ...e
    }) : (0, a.jsx)(E, {
      ...e
    })
  })
}