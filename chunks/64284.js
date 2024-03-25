"use strict";
i.r(t), i.d(t, {
  default: function() {
    return I
  }
}), i("222007");
var n = i("37983"),
  a = i("884691"),
  l = i("446674"),
  s = i("77078"),
  r = i("448993"),
  o = i("50926"),
  d = i("526253"),
  u = i("192918"),
  c = i("394294"),
  f = i("782340"),
  E = i("935090"),
  I = function(e) {
    var t;
    let {
      guildId: i
    } = e, I = (0, l.useStateFromStores)([d.default], () => d.default.get(i)), [T, m] = a.useState(null), [_, x] = a.useState(null !== (t = null == I ? void 0 : I.description) && void 0 !== t ? t : ""), h = a.useRef(!1), p = a.useRef(!1);
    a.useEffect(() => () => {
      p.current = !0
    }, []);
    let M = a.useCallback(async () => {
      if (!h.current) {
        m(null);
        try {
          await o.default.updateVerificationFormDescription(i, _)
        } catch (t) {
          if (p.current) return;
          let e = new r.APIError(t);
          m(e.getAnyErrorMessage())
        } finally {
          if (p.current) return;
          h.current = !1
        }
      }
    }, [_, i]);
    return (0, n.jsxs)(u.default, {
      title: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
      children: [(0, n.jsx)(s.TextArea, {
        className: E.fieldBackground,
        maxLength: c.MAX_DESCRIPTION_LENGTH,
        value: null != _ ? _ : "",
        placeholder: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
        onChange: e => {
          x(e)
        },
        onBlur: M,
        autosize: !0
      }), null != T && "" !== T ? (0, n.jsx)(s.Text, {
        className: E.errorText,
        variant: "text-xs/normal",
        color: "text-danger",
        children: T
      }) : null]
    })
  }