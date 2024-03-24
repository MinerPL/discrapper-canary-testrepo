"use strict";
A.r(t), A.d(t, {
  default: function() {
    return U
  }
}), A("222007");
var a = A("37983"),
  l = A("884691"),
  n = A("414456"),
  r = A.n(n),
  s = A("748820"),
  i = A("77078"),
  o = A("149022"),
  d = A("681060"),
  u = A("233069"),
  c = A("474643"),
  f = A("49111"),
  g = A("782340"),
  C = A("715633"),
  h = A("430594");
let m = (0, s.v4)(),
  p = (0, u.createChannelRecord)({
    id: "1",
    type: f.ChannelTypes.DM
  });

function T() {
  return new Promise(e => {
    e({
      shouldClear: !1,
      shouldRefocus: !0
    })
  })
}

function v(e) {
  var t;
  let {
    hasError: A,
    maxLength: l,
    text: n
  } = e;
  return (0, a.jsxs)("div", {
    className: r(h.maxLength, {
      [h.errorOverflow]: A
    }),
    "aria-hidden": "true",
    children: [null !== (t = null == n ? void 0 : n.length) && void 0 !== t ? t : 0, " ", null != l && "/ ".concat(l)]
  })
}

function U(e) {
  var t;
  let {
    "aria-labelledby": A,
    className: n,
    id: s,
    autoFocus: u,
    maxLength: f,
    onChange: h,
    onSubmit: U,
    showCharacterCount: I = !1,
    placeholder: E,
    required: x,
    value: N,
    enableThemedBackground: D = !1,
    parentModalKey: L
  } = e, q = (0, i.useFormContext)(), [O, R] = l.useState(() => (0, o.toRichValue)(N)), P = l.useRef(!0 === u), j = null != A ? A : null == q ? void 0 : q.titleId, V = null !== (t = null == q ? void 0 : q.errorId) && void 0 !== t ? t : m, b = l.useMemo(() => ({
    analyticsName: "simple",
    autocomplete: {
      alwaysUseLayer: !0,
      small: !0
    },
    disableAutoFocus: !0 !== u,
    drafts: {
      type: c.DraftType.ChannelMessage
    },
    emojis: {
      button: !0
    },
    permissions: {
      requireSendMessages: !1
    },
    submit: {
      useDisabledStylesOnSubmit: !0,
      disableEnterToSubmit: !0
    }
  }), [u]);
  return (0, a.jsxs)(d.default, {
    "aria-describedby": V,
    "aria-labelledby": j,
    innerClassName: r(n, C.textArea),
    id: s,
    maxCharacterCount: f,
    onChange: function(e, t, A) {
      h(t), R(A)
    },
    placeholder: E,
    required: x,
    channel: p,
    textValue: N,
    richValue: O,
    type: b,
    onBlur: () => {
      P.current = !1
    },
    onFocus: () => {
      P.current = !0
    },
    focused: P.current,
    onSubmit: null != U ? U : T,
    disableThemedBackground: !D,
    parentModalKey: L,
    emojiPickerCloseOnModalOuterClick: !0,
    children: [!0 === I && (0, a.jsx)(v, {
      hasError: null != q.error || null != f && N.length > f,
      text: N,
      maxLength: f
    }), null != f && (0, a.jsx)(i.HiddenVisually, {
      id: m,
      children: g.default.Messages.MAXIMUM_LENGTH.format({
        maxLength: f
      })
    })]
  })
}