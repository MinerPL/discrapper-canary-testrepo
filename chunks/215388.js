"use strict";
A.r(t), A.d(t, {
  default: function() {
    return v
  }
}), A("47120");
var a = A("735250"),
  l = A("470079"),
  s = A("803997"),
  n = A.n(s),
  r = A("153832"),
  i = A("481060"),
  o = A("752305"),
  d = A("893718"),
  u = A("131704"),
  c = A("703558"),
  f = A("981631"),
  g = A("689938"),
  C = A("614439"),
  h = A("989255");
let m = (0, r.v4)(),
  T = (0, u.createChannelRecord)({
    id: "1",
    type: f.ChannelTypes.DM
  });

function p() {
  return new Promise(e => {
    e({
      shouldClear: !1,
      shouldRefocus: !0
    })
  })
}

function U(e) {
  var t;
  let {
    hasError: A,
    maxLength: l,
    text: s
  } = e;
  return (0, a.jsxs)("div", {
    className: n()(h.maxLength, {
      [h.errorOverflow]: A
    }),
    "aria-hidden": "true",
    children: [null !== (t = null == s ? void 0 : s.length) && void 0 !== t ? t : 0, " ", null != l && "/ ".concat(l)]
  })
}

function v(e) {
  var t;
  let {
    "aria-labelledby": A,
    className: s,
    id: r,
    autoFocus: u,
    maxLength: f,
    onChange: h,
    onSubmit: v,
    showCharacterCount: I = !1,
    placeholder: E,
    required: x,
    value: N,
    enableThemedBackground: D = !1,
    parentModalKey: q
  } = e, L = (0, i.useFormContext)(), [O, R] = l.useState(() => (0, o.toRichValue)(N)), P = l.useRef(!0 === u), V = null != A ? A : null == L ? void 0 : L.titleId, j = null !== (t = null == L ? void 0 : L.errorId) && void 0 !== t ? t : m, b = l.useMemo(() => ({
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
    "aria-describedby": j,
    "aria-labelledby": V,
    innerClassName: n()(s, C.textArea),
    id: r,
    maxCharacterCount: f,
    onChange: function(e, t, A) {
      h(t), R(A)
    },
    placeholder: E,
    required: x,
    channel: T,
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
    onSubmit: null != v ? v : p,
    disableThemedBackground: !D,
    parentModalKey: q,
    emojiPickerCloseOnModalOuterClick: !0,
    children: [!0 === I && (0, a.jsx)(U, {
      hasError: null != L.error || null != f && N.length > f,
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