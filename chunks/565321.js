"use strict";
i.r(t), i("47120");
var a = i("735250"),
  l = i("470079"),
  n = i("442837"),
  s = i("481060"),
  r = i("881052"),
  o = i("863249"),
  d = i("944163"),
  c = i("484455"),
  u = i("592286"),
  f = i("689938"),
  m = i("482249");
t.default = function(e) {
  var t;
  let {
    guildId: i
  } = e, E = (0, n.useStateFromStores)([d.default], () => d.default.get(i)), [I, x] = l.useState(null), [h, T] = l.useState(null !== (t = null == E ? void 0 : E.description) && void 0 !== t ? t : ""), M = l.useRef(!1), F = l.useRef(!1);
  l.useEffect(() => () => {
    F.current = !0
  }, []);
  let _ = l.useCallback(async () => {
    if (!M.current) {
      x(null);
      try {
        await o.default.updateVerificationFormDescription(i, h)
      } catch (e) {
        if (F.current) return;
        x(new r.APIError(e).getAnyErrorMessage())
      } finally {
        if (F.current) return;
        M.current = !1
      }
    }
  }, [h, i]);
  return (0, a.jsxs)(c.default, {
    title: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
    children: [(0, a.jsx)(s.TextArea, {
      className: m.fieldBackground,
      maxLength: u.MAX_DESCRIPTION_LENGTH,
      value: null != h ? h : "",
      placeholder: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
      onChange: e => {
        T(e)
      },
      onBlur: _,
      autosize: !0
    }), null != I && "" !== I ? (0, a.jsx)(s.Text, {
      className: m.errorText,
      variant: "text-xs/normal",
      color: "text-danger",
      children: I
    }) : null]
  })
}