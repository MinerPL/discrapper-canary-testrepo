"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("481060"),
  i = s("541716"),
  r = s("752305"),
  o = s("893718"),
  d = s("131704"),
  u = s("153124"),
  c = s("993413"),
  S = s("981631"),
  E = s("689938"),
  T = s("920187");
let _ = (0, u.uid)(),
  f = (0, d.createChannelRecord)({
    id: "1",
    type: S.ChannelTypes.DM
  }),
  m = (0, u.uid)();

function g(e) {
  let {
    sectionTitle: t,
    errors: s,
    onBioChange: d,
    pendingBio: u,
    placeholder: g,
    currentBio: h,
    disabled: N = !1
  } = e, [I, p] = n.useState(null != u ? u : h), [C, A] = n.useState((0, r.toRichValue)(I)), O = n.useRef(!1);
  return n.useEffect(() => {
    if (void 0 === u) {
      let e = (0, r.toRichValue)(h);
      p(h), A(e)
    }
  }, [u, h]), (0, a.jsxs)(c.default, {
    title: t,
    titleId: _,
    description: E.default.Messages.USER_SETTINGS_ABOUT_ME_DETAILS,
    errors: s,
    disabled: N,
    children: [(0, a.jsx)(o.default, {
      "aria-describedby": m,
      "aria-labelledby": _,
      innerClassName: T.bioTextArea,
      maxCharacterCount: S.BIO_MAX_LENGTH,
      onChange: function(e, t, s) {
        t !== I && (p(t), A(s), d(t))
      },
      placeholder: g,
      channel: f,
      textValue: I,
      richValue: C,
      type: i.ChatInputTypes.PROFILE_BIO_INPUT,
      onBlur: () => {
        O.current = !1
      },
      onFocus: () => {
        O.current = !0
      },
      focused: O.current,
      onSubmit: function() {
        return new Promise(e => {
          e({
            shouldClear: !1,
            shouldRefocus: !0
          })
        })
      }
    }), (0, a.jsx)(l.HiddenVisually, {
      id: m,
      children: E.default.Messages.MAXIMUM_LENGTH.format({
        maxLength: S.BIO_MAX_LENGTH
      })
    })]
  })
}