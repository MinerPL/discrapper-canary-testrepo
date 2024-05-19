"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("481060"),
  i = a("881052"),
  l = a("484455"),
  o = a("592286"),
  c = a("689938"),
  d = a("17359");
t.default = function(e) {
  let {
    guildId: t,
    onSave: a,
    formDescription: u
  } = e, [f, m] = r.useState(null), [h, p] = r.useState(u), E = r.useRef(!1), T = r.useRef(!1);
  r.useEffect(() => () => {
    T.current = !0
  }, []);
  let C = r.useCallback(async () => {
    if (!E.current) {
      m(null);
      try {
        await a(t, h)
      } catch (e) {
        if (T.current) return;
        m(new i.APIError(e).getAnyErrorMessage())
      } finally {
        if (T.current) return;
        E.current = !1
      }
    }
  }, [h, t, a]);
  return (0, n.jsxs)(l.default, {
    title: c.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
    children: [(0, n.jsx)(s.TextArea, {
      className: d.fieldBackground,
      maxLength: o.MAX_DESCRIPTION_LENGTH,
      value: null != h ? h : "",
      placeholder: c.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
      onChange: e => {
        p(e)
      },
      onBlur: C,
      autosize: !0
    }), null != f && "" !== f ? (0, n.jsx)(s.Text, {
      className: d.errorText,
      variant: "text-xs/normal",
      color: "text-danger",
      children: f
    }) : null]
  })
}