"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("414456"),
  i = n.n(a),
  l = n("77078"),
  u = n("850391"),
  o = n("149022"),
  c = n("681060"),
  d = n("570697"),
  m = n("233069"),
  f = n("646718"),
  p = n("49111"),
  _ = n("782340"),
  S = n("716397");
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
    disableThemedBackground: A = !1
  } = e, [C, h] = r.useState(null != m ? m : E), [v, g] = r.useState((0, o.toRichValue)(C)), x = r.useRef(!1);
  return r.useEffect(() => {
    x.current = !0
  }, []), r.useEffect(() => {
    if (void 0 === m) {
      let e = (0, o.toRichValue)(E);
      h(E), g(e)
    }
  }, [m, E]), (0, s.jsx)("div", {
    className: i(S.body, P),
    children: (0, s.jsxs)(d.default, {
      title: t,
      errors: n,
      disabled: N,
      children: [(0, s.jsx)(c.default, {
        innerClassName: i(S.textArea, T),
        editorClassName: S.editorTextArea,
        maxCharacterCount: f.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
        onChange: function(e, t, n) {
          t !== C && (h(t), g(n), a(t))
        },
        placeholder: p,
        channel: I,
        textValue: C,
        richValue: v,
        type: u.ChatInputTypes.CUSTOM_GIFT,
        onBlur: () => {
          x.current = !1
        },
        onFocus: () => {
          x.current = !0
        },
        focused: x.current,
        onSubmit: function() {
          return new Promise(e => {
            e({
              shouldClear: !1,
              shouldRefocus: !0
            })
          })
        },
        disableThemedBackground: A
      }), (0, s.jsx)(l.HiddenVisually, {
        children: _.default.Messages.MAXIMUM_LENGTH.format({
          maxLength: f.CUSTOM_GIFT_MESSAGE_MAX_LENGTH
        })
      })]
    })
  })
}