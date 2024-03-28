"use strict";
t.r(l), t("47120"), t("757143");
var n = t("735250"),
  a = t("470079"),
  s = t("803997"),
  r = t.n(s),
  i = t("942389"),
  o = t("692547"),
  c = t("481060"),
  u = t("881052"),
  d = t("696202"),
  E = t("548343"),
  I = t("151785"),
  C = t("186523"),
  h = t("246364"),
  m = t("915509"),
  M = t("592286"),
  _ = t("689938"),
  x = t("665395");
let f = "MULTIPLE_CHOICE",
  N = e => {
    let {
      choice: l,
      index: t,
      onChange: s,
      onClear: o,
      onReorder: u,
      isDropHovered: I
    } = e, h = a.useRef(null), m = a.useRef(null), [, M, N] = (0, i.useDrag)({
      type: f,
      item: {
        choice: l,
        index: t
      },
      end: (e, l) => {
        null != e && !l.didDrop() && u(e.choice, null, !0)
      }
    }), [, g] = (0, i.useDrop)({
      accept: f,
      hover: (e, l) => {
        var n;
        let {
          index: a
        } = e, s = null === (n = h.current) || void 0 === n ? void 0 : n.getBoundingClientRect(), r = l.getClientOffset();
        if (null == s || null == r) return;
        let i = (s.bottom - s.top) / 2,
          o = r.y - s.top;
        (!(a < t) || !(o < i)) && (!(a > t) || !(o > i)) && u(e.choice, t, !1)
      },
      drop: e => {
        u(e.choice, t, !0)
      }
    });
    return a.useLayoutEffect(() => (M(m), N(g(h)), () => {
      M(null), g(null)
    }), [M, g, N]), (0, n.jsxs)("div", {
      ref: h,
      className: r()(x.draggableInputContainer, {
        [x.dragging]: I
      }),
      "data-dnd-name": l,
      children: [(0, n.jsx)("div", {
        className: x.radioIconEmptyContainer,
        children: (0, n.jsx)(C.default, {
          height: 20,
          width: 20,
          className: x.radioIconEmpty
        })
      }), (0, n.jsxs)("div", {
        className: x.inputWrapper,
        children: [(0, n.jsx)(c.TextInput, {
          autoFocus: !0,
          onChange: e => s(e),
          placeholder: _.default.Messages.MEMBER_VERIFICATION_MULTIPLE_CHOICE_PLACEHOLDER.format({
            index: t + 1
          }),
          value: l
        }), (0, n.jsx)(c.Button, {
          className: x.clearButton,
          onClick: o,
          look: c.Button.Looks.BLANK,
          size: c.Button.Sizes.NONE,
          children: (0, n.jsx)(d.default, {
            className: x.clearIcon
          })
        })]
      }), (0, n.jsx)("div", {
        ref: m,
        className: x.dragContainer,
        "data-dnd-name": l,
        children: (0, n.jsx)(E.default, {
          className: x.dragIcon
        })
      })]
    })
  };
l.default = function(e) {
  var l, t;
  let {
    field: s,
    onSave: r,
    onClose: i
  } = e, [d, E] = a.useState(null !== (l = null == s ? void 0 : s.label) && void 0 !== l ? l : ""), [C, f] = a.useState(null !== (t = null == s ? void 0 : s.choices) && void 0 !== t ? t : [""]), [g, p] = a.useState(null), [R, L] = a.useState(null), T = (e, l) => {
    null != g && p(null);
    let t = e.replace(/(\r\n|\n|\r)/g, " ");
    t.length > M.MAX_CHOICE_LENGTH && (t = t.slice(0, M.MAX_CHOICE_LENGTH));
    let n = [...C];
    n[l] = t, f(n)
  }, O = (e, l, t) => {
    if (null == C) return;
    null != g && p(null);
    let n = C.indexOf(e),
      a = [...C];
    null != l && l !== n && (a.splice(n, 1), a.splice(l, 0, e), f(a)), t ? null !== l && L(null) : l !== R && L(l)
  }, j = e => {
    null != g && p(null);
    let l = [...C.slice(0, e), ...C.slice(e + 1)];
    f(0 === l.length ? [""] : l)
  }, v = async () => {
    null != g && p(null);
    let e = d.trim();
    if ("" === e) {
      p(_.default.Messages.MEMBER_VERIFICATION_FIELD_QUESTION_REQUIRED_ERROR);
      return
    }
    if (0 === C.map(e => e.trim()).filter(e => "" !== e).length) {
      p(_.default.Messages.MEMBER_VERIFICATION_CHOICES_REQUIRED_ERROR);
      return
    }
    let l = {
      field_type: h.VerificationFormFieldTypes.MULTIPLE_CHOICE,
      label: e,
      choices: C,
      required: !0
    };
    try {
      await r(l), i()
    } catch (e) {
      p(new u.APIError(e).getAnyErrorMessage())
    }
  };
  return (0, n.jsxs)(m.default, {
    ...e,
    errorText: g,
    title: _.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
    onConfirm: v,
    onCancel: i,
    children: [(0, n.jsx)(c.TextInput, {
      autoFocus: !0,
      className: x.spacedItem,
      onChange: e => {
        null != g && p(null);
        let l = e.replace(/(\r\n|\n|\r)/g, " ");
        l.length > M.MAX_QUESTION_LENGTH && (l = e.slice(0, M.MAX_QUESTION_LENGTH)), E(l)
      },
      placeholder: _.default.Messages.MEMBER_VERIFICATION_FIELD_QUESTION,
      value: d
    }), (0, n.jsx)("div", {
      className: x.divider
    }), C.map((e, l) => (0, n.jsx)(N, {
      choice: e,
      index: l,
      onChange: e => T(e, l),
      onClear: () => j(l),
      onReorder: O,
      isDropHovered: l === R
    }, "choice-".concat(l))), C.length !== M.MAX_NUM_CHOICES && (0, n.jsxs)("div", {
      className: x.addItemContainer,
      children: [(0, n.jsx)(I.default, {
        height: 17,
        width: 17,
        color: o.default.unsafe_rawColors.BLUE_345.css
      }), (0, n.jsx)(c.Clickable, {
        className: x.addItemButton,
        onClick: () => {
          null != g && p(null), C.length !== M.MAX_NUM_CHOICES && f([...C, ""])
        },
        children: (0, n.jsx)(c.Text, {
          color: "text-link",
          variant: "text-md/normal",
          children: _.default.Messages.MEMBER_VERIFICATION_MULTIPLE_CHOICE_ADD
        })
      })]
    })]
  })
}