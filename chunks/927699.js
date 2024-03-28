"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("803997"),
  l = n.n(a),
  r = n("481060"),
  u = n("541716"),
  o = n("752305"),
  c = n("893718"),
  d = n("993413"),
  m = n("131704"),
  f = n("474936"),
  p = n("981631"),
  S = n("689938"),
  _ = n("746161");
let I = (0, m.createChannelRecord)({
  id: "1",
  type: p.ChannelTypes.DM
});

function E(e) {
  let {
    sectionTitle: t,
    errors: n,
    onTextChange: a,
    pendingText: m,
    placeholder: p,
    currentText: E,
    className: P,
    innerClassName: T,
    disabled: N = !1,
    disableThemedBackground: h = !1
  } = e, [x, v] = s.useState(null != m ? m : E), [A, C] = s.useState((0, o.toRichValue)(x)), g = s.useRef(!1);
  return s.useEffect(() => {
    g.current = !0
  }, []), s.useEffect(() => {
    if (void 0 === m) {
      let e = (0, o.toRichValue)(E);
      v(E), C(e)
    }
  }, [m, E]), (0, i.jsx)("div", {
    className: l()(_.body, P),
    children: (0, i.jsxs)(d.default, {
      title: t,
      errors: n,
      disabled: N,
      children: [(0, i.jsx)(c.default, {
        innerClassName: l()(_.textArea, T),
        editorClassName: _.editorTextArea,
        maxCharacterCount: f.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
        onChange: function(e, t, n) {
          t !== x && (v(t), C(n), a(t))
        },
        placeholder: p,
        channel: I,
        textValue: x,
        richValue: A,
        type: u.ChatInputTypes.CUSTOM_GIFT,
        onBlur: () => {
          g.current = !1
        },
        onFocus: () => {
          g.current = !0
        },
        focused: g.current,
        onSubmit: function() {
          return new Promise(e => {
            e({
              shouldClear: !1,
              shouldRefocus: !0
            })
          })
        },
        disableThemedBackground: h
      }), (0, i.jsx)(r.HiddenVisually, {
        children: S.default.Messages.MAXIMUM_LENGTH.format({
          maxLength: f.CUSTOM_GIFT_MESSAGE_MAX_LENGTH
        })
      })]
    })
  })
}