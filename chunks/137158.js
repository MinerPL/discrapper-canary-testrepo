"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("47120");
var a = n("735250"),
  i = n("470079"),
  r = n("120356"),
  s = n.n(r),
  l = n("392711"),
  o = n("942389"),
  c = n("299468"),
  d = n("490236"),
  u = n("692547"),
  f = n("481060"),
  m = n("548343"),
  h = n("689938"),
  E = n("915580");

function T(e) {
  let {
    title: t,
    children: n,
    onEdit: i,
    onRemove: r,
    canRemove: l,
    actionsLocation: o
  } = e;
  return (0, a.jsxs)("div", {
    className: E.backgroundContainer,
    children: [(0, a.jsxs)("div", {
      className: E.containerPadding,
      children: [(0, a.jsx)(f.FormTitle, {
        tag: "h3",
        className: E.containerTitle,
        children: t
      }), n]
    }), "footer" === o && (0, a.jsxs)(f.FormSection, {
      className: E.containerFooter,
      children: [(0, a.jsx)(f.Tooltip, {
        text: h.default.Messages.CLAN_APPLICATION_CANT_REMOVE_FIELD,
        shouldShow: !l,
        children: e => (0, a.jsx)(f.Button, {
          ...e,
          className: s()(E.removeButton, E.button),
          size: f.Button.Sizes.SMALL,
          look: f.Button.Looks.BLANK,
          onClick: r,
          disabled: !l,
          children: h.default.Messages.REMOVE
        })
      }), (0, a.jsx)(f.Button, {
        className: E.button,
        size: f.Button.Sizes.SMALL,
        color: f.Button.Colors.PRIMARY,
        onClick: i,
        children: h.default.Messages.EDIT
      })]
    })]
  })
}
let p = "FORM_FIELD";

function _(e) {
  let {
    index: t,
    field: n,
    isDropHovered: r,
    onDrop: c
  } = e, d = (0, l.debounce)(async (e, t, n) => {
    await c(e, t, n)
  }), f = i.useRef(null), [, h] = (0, o.useDrag)({
    type: p,
    item: {
      index: t,
      field: n
    },
    end: (e, t) => {
      null != e && !t.didDrop() && d(e.field, null, !0)
    }
  }), [, _] = (0, o.useDrop)({
    accept: p,
    hover: (e, n) => {
      var a;
      let {
        index: i
      } = e, r = null === (a = f.current) || void 0 === a ? void 0 : a.getBoundingClientRect(), s = n.getClientOffset();
      if (null == r || null == s) return;
      let l = (r.bottom - r.top) / 2,
        o = s.y - r.top;
      (!(i < t) || !(o < l)) && (!(i > t) || !(o < l)) && i !== t && d(e.field, t, !1)
    },
    drop: e => {
      d(e.field, t, !0)
    }
  });
  return i.useLayoutEffect(() => (h(_(f)), () => {
    _(null), h(null)
  }), [h, _]), (0, a.jsxs)("div", {
    ref: f,
    "data-dnd-name": "field-".concat(t),
    className: s()(E.dragContainer, {
      [E.dropHovered]: r
    }),
    children: [(0, a.jsx)("div", {
      className: E.dragIconContainer,
      children: (0, a.jsx)(m.default, {
        className: E.dragIcon,
        color: u.default.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, a.jsx)(T, {
      ...e
    })]
  })
}

function C(e) {
  return (0, a.jsxs)("div", {
    className: E.formFieldContainer,
    children: [(0, a.jsx)("div", {
      className: E.spacingContainer,
      children: e.isDragEnabled ? (0, a.jsx)(_, {
        ...e
      }) : (0, a.jsx)(T, {
        ...e
      })
    }), "side" === e.actionsLocation && (0, a.jsxs)("div", {
      className: E.actionButtonsContainer,
      children: [(0, a.jsx)(f.Clickable, {
        className: E.actionButton,
        onClick: e.onEdit,
        "aria-label": h.default.Messages.EDIT,
        children: (0, a.jsx)(c.PencilIcon, {
          width: 16,
          height: 16
        })
      }), e.canRemove && (0, a.jsx)(f.Clickable, {
        className: E.actionButton,
        onClick: e.onRemove,
        "aria-label": h.default.Messages.REMOVE,
        children: (0, a.jsx)(d.TrashIcon, {
          width: 16,
          height: 16
        })
      })]
    })]
  })
}