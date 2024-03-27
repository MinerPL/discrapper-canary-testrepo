"use strict";
i.r(t), i.d(t, {
  default: function() {
    return _
  }
}), i("222007");
var n = i("37983"),
  a = i("884691"),
  l = i("414456"),
  s = i.n(l),
  r = i("917351"),
  o = i("476042"),
  d = i("669491"),
  u = i("77078"),
  c = i("673220"),
  f = i("782340"),
  E = i("935090");

function I(e) {
  let {
    title: t,
    children: i,
    onEdit: a,
    onRemove: l
  } = e;
  return (0, n.jsxs)("div", {
    className: E.backgroundContainer,
    children: [(0, n.jsxs)("div", {
      className: E.containerPadding,
      children: [(0, n.jsx)(u.FormTitle, {
        tag: "h3",
        className: E.containerTitle,
        children: t
      }), i]
    }), (0, n.jsxs)(u.FormSection, {
      className: E.containerFooter,
      children: [(0, n.jsx)(u.Button, {
        className: s(E.removeButton, E.button),
        size: u.Button.Sizes.SMALL,
        look: u.Button.Looks.BLANK,
        onClick: l,
        children: f.default.Messages.REMOVE
      }), (0, n.jsx)(u.Button, {
        className: E.button,
        size: u.Button.Sizes.SMALL,
        color: u.Button.Colors.PRIMARY,
        onClick: a,
        children: f.default.Messages.EDIT
      })]
    })]
  })
}
let T = "FORM_FIELD";

function m(e) {
  let {
    index: t,
    field: i,
    isDropHovered: l,
    onDrop: u
  } = e, f = (0, r.debounce)(async (e, t, i) => {
    await u(e, t, i)
  }), m = a.useRef(null), [, _] = (0, o.useDrag)({
    type: T,
    item: {
      index: t,
      field: i
    },
    end: (e, t) => {
      null != e && !t.didDrop() && f(e.field, null, !0)
    }
  }), [, x] = (0, o.useDrop)({
    accept: T,
    hover: (e, i) => {
      var n;
      let {
        index: a
      } = e, l = null === (n = m.current) || void 0 === n ? void 0 : n.getBoundingClientRect(), s = i.getClientOffset();
      if (null == l || null == s) return;
      let r = (l.bottom - l.top) / 2,
        o = s.y - l.top;
      (!(a < t) || !(o < r)) && (!(a > t) || !(o < r)) && a !== t && f(e.field, t, !1)
    },
    drop: e => {
      f(e.field, t, !0)
    }
  });
  return a.useLayoutEffect(() => (_(x(m)), () => {
    x(null), _(null)
  }), [_, x]), (0, n.jsxs)("div", {
    ref: m,
    "data-dnd-name": "field-".concat(t),
    className: s(E.dragContainer, {
      [E.dropHovered]: l
    }),
    children: [(0, n.jsx)("div", {
      className: E.dragIconContainer,
      children: (0, n.jsx)(c.default, {
        className: E.dragIcon,
        color: d.default.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, n.jsx)(I, {
      ...e
    })]
  })
}

function _(e) {
  return (0, n.jsx)("div", {
    className: E.spacingContainer,
    children: e.isDragEnabled ? (0, n.jsx)(m, {
      ...e
    }) : (0, n.jsx)(I, {
      ...e
    })
  })
}