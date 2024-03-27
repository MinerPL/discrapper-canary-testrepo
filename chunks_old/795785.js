"use strict";
A.r(t), A.d(t, {
  default: function() {
    return h
  }
}), A("222007");
var a = A("37983"),
  l = A("884691"),
  n = A("414456"),
  r = A.n(n),
  s = A("77078"),
  i = A("694187"),
  o = A("818643"),
  d = A("987772"),
  u = A("228220"),
  c = A("782340"),
  f = A("981476");
let g = "custom-image",
  C = l.forwardRef(function(e, t) {
    let {
      selectedImageName: A,
      onChange: l,
      disabled: n = !1,
      name: i,
      alt: o,
      data: d
    } = e, u = i === A, c = (0, s.useRadioItem)({
      isSelected: u,
      label: o
    }), g = n ? void 0 : () => {
      l(d, i)
    };
    return (0, a.jsx)(s.Clickable, {
      ref: t,
      className: r(f.radioOption, {
        [f.selected]: u,
        [f.disabled]: n
      }),
      onClick: g,
      "aria-disabled": n,
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
    imageName: n,
    savedImageName: h,
    onChange: m,
    uploadButtonLabel: p = c.default.Messages.UPLOAD_IMAGE,
    radioGroupAriaLabel: T = c.default.Messages.CUSTOM_IMAGE_SELECTOR_RADIO_GROUP_ARIA_LABEL,
    disabled: v = !1
  } = e, U = n === g, [I, E] = l.useState(U ? A : null), [x, N] = l.useState(null), D = l.useRef(null), L = l.useRef(null);
  l.useEffect(() => {
    h !== g && (E(null), N(null))
  }, [h]);
  let q = null != x ? c.default.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE_WITH_FILENAME.format({
      filename: x
    }) : c.default.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE,
    O = (0, s.useRadioGroup)({
      orientation: "horizontal",
      isDisabled: v
    }),
    R = () => {
      var e;
      return null === (e = D.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
    },
    P = () => {
      n === g && m(t[0].data, t[0].name), E(null), N(null)
    };
  return l.useEffect(() => {
    if (U && null != x) {
      var e, t;
      null === (t = L.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus()
    }
  }, [U, x]), (0, a.jsxs)("div", {
    className: f.imageSelectionContainer,
    children: [(0, a.jsx)(s.FocusRing, {
      within: !0,
      children: (0, a.jsxs)("div", {
        className: r(f.uploadButton, {
          [f.disabled]: v,
          [f.hidden]: null != I
        }),
        "aria-disabled": v,
        children: [(0, a.jsx)(o.default, {
          width: 16,
          height: 16,
          color: "currentColor",
          "aria-hidden": !0
        }), (0, a.jsx)(s.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          "aria-hidden": !0,
          children: p
        }), (0, a.jsx)(i.default, {
          ref: D,
          tabIndex: 0,
          onChange: (e, t) => {
            null != t && (N(t.name), E(e), m(e, g))
          },
          "aria-label": p
        })]
      })
    }), null != I && (0, a.jsxs)("div", {
      className: f.customImageActionContainer,
      children: [(0, a.jsx)(s.Tooltip, {
        text: c.default.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_IMAGE_TOOLTIP,
        hideOnClick: !0,
        children: e => (0, a.jsx)(s.Clickable, {
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
      }), (0, a.jsx)(s.Tooltip, {
        text: c.default.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_IMAGE_TOOLTIP,
        hideOnClick: !0,
        children: e => (0, a.jsx)(s.Clickable, {
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
      "aria-label": T,
      ...O,
      className: f.radioGroup,
      children: [null != I && (0, a.jsx)(C, {
        ref: L,
        selectedImageName: n,
        onChange: m,
        disabled: v,
        name: g,
        alt: q,
        data: I
      }), t.map(e => (0, a.jsx)(C, {
        selectedImageName: n,
        onChange: m,
        disabled: v,
        ...e
      }, e.name))]
    })]
  })
}