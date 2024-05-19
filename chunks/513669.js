"use strict";
A.r(t), A.d(t, {
  default: function() {
    return h
  }
}), A("47120");
var a = A("735250"),
  l = A("470079"),
  s = A("120356"),
  n = A.n(s),
  r = A("481060"),
  i = A("813197"),
  o = A("54264"),
  d = A("185403"),
  u = A("740727"),
  c = A("689938"),
  f = A("42258");
let g = "custom-image",
  C = l.forwardRef(function(e, t) {
    let {
      selectedImageName: A,
      onChange: l,
      disabled: s = !1,
      name: i,
      alt: o,
      data: d
    } = e, u = i === A, c = (0, r.useRadioItem)({
      isSelected: u,
      label: o
    }), g = s ? void 0 : () => {
      l(d, i)
    };
    return (0, a.jsx)(r.Clickable, {
      ref: t,
      className: n()(f.radioOption, {
        [f.selected]: u,
        [f.disabled]: s
      }),
      onClick: g,
      "aria-disabled": s,
      ...c,
      children: (0, a.jsx)("img", {
        src: d,
        alt: o,
        className: f.radioOptionImage
      })
    })
  });

function h(e) {
  let {
    presetImages: t,
    image: A,
    imageName: s,
    savedImageName: h,
    onChange: m,
    uploadButtonLabel: T = c.default.Messages.UPLOAD_IMAGE,
    radioGroupAriaLabel: p = c.default.Messages.CUSTOM_IMAGE_SELECTOR_RADIO_GROUP_ARIA_LABEL,
    disabled: U = !1
  } = e, v = s === g, [I, E] = l.useState(v ? A : null), [x, N] = l.useState(null), D = l.useRef(null), q = l.useRef(null);
  l.useEffect(() => {
    h !== g && (E(null), N(null))
  }, [h]);
  let L = null != x ? c.default.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE_WITH_FILENAME.format({
      filename: x
    }) : c.default.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE,
    O = (0, r.useRadioGroup)({
      orientation: "horizontal",
      isDisabled: U
    }),
    R = () => {
      var e;
      return null === (e = D.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
    },
    P = () => {
      s === g && m(t[0].data, t[0].name), E(null), N(null)
    };
  return l.useEffect(() => {
    if (v && null != x) {
      var e, t;
      null === (t = q.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus()
    }
  }, [v, x]), (0, a.jsxs)("div", {
    className: f.imageSelectionContainer,
    children: [(0, a.jsx)(r.FocusRing, {
      within: !0,
      children: (0, a.jsxs)("div", {
        className: n()(f.uploadButton, {
          [f.disabled]: U,
          [f.hidden]: null != I
        }),
        "aria-disabled": U,
        children: [(0, a.jsx)(o.default, {
          width: 16,
          height: 16,
          color: "currentColor",
          "aria-hidden": !0
        }), (0, a.jsx)(r.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          "aria-hidden": !0,
          children: T
        }), (0, a.jsx)(i.default, {
          ref: D,
          tabIndex: 0,
          onChange: (e, t) => {
            null != t && (N(t.name), E(e), m(e, g))
          },
          "aria-label": T
        })]
      })
    }), null != I && (0, a.jsxs)("div", {
      className: f.customImageActionContainer,
      children: [(0, a.jsx)(r.Tooltip, {
        text: c.default.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_IMAGE_TOOLTIP,
        hideOnClick: !0,
        children: e => (0, a.jsx)(r.Clickable, {
          ...e,
          className: f.customImageAction,
          onClick: R,
          "aria-label": c.default.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_CUSTOM_IMAGE_ARIA_LABEL.format({
            filename: x
          }),
          children: (0, a.jsx)(d.default, {
            className: f.editIcon
          })
        })
      }), (0, a.jsx)(r.Tooltip, {
        text: c.default.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_IMAGE_TOOLTIP,
        hideOnClick: !0,
        children: e => (0, a.jsx)(r.Clickable, {
          ...e,
          className: f.customImageAction,
          onClick: P,
          "aria-label": c.default.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_CUSTOM_IMAGE_ARIA_LABEL.format({
            filename: x
          }),
          children: (0, a.jsx)(u.default, {
            className: f.deleteIcon
          })
        })
      })]
    }), (0, a.jsxs)("div", {
      "aria-label": p,
      ...O,
      className: f.radioGroup,
      children: [null != I && (0, a.jsx)(C, {
        ref: q,
        selectedImageName: s,
        onChange: m,
        disabled: U,
        name: g,
        alt: L,
        data: I
      }), t.map(e => (0, a.jsx)(C, {
        selectedImageName: s,
        onChange: m,
        disabled: U,
        ...e
      }, e.name))]
    })]
  })
}