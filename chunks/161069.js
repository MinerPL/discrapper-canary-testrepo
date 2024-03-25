"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  E = s("77078"),
  n = s("448993"),
  i = s("592407"),
  _ = s("62418"),
  o = s("583789"),
  r = s("49111"),
  I = s("782340"),
  u = s("890957");

function d(e) {
  let {
    guild: t,
    onClose: s,
    hideColors: d
  } = e, [c, N] = l.useState(t.verificationLevel), [L, R] = l.useState(null), T = t.hasFeature(r.GuildFeatures.COMMUNITY), C = (0, _.generateVerificationLevelOptions)(T, d).filter(e => !e.disabled), M = l.useCallback(async () => {
    null != L && R(null);
    try {
      await i.default.saveGuild(t.id, {
        verificationLevel: c
      }), i.default.updateGuild({
        verificationLevel: c
      }), s()
    } catch (t) {
      let e = new n.APIError(t);
      R(e.getAnyErrorMessage())
    }
  }, [L, t.id, c, s]);
  return (0, a.jsx)(o.default, {
    ...e,
    title: I.default.Messages.FORM_LABEL_VERIFICATION_LEVEL,
    errorText: L,
    onConfirm: M,
    onCancel: s,
    children: (0, a.jsxs)(E.FormSection, {
      children: [(0, a.jsx)(E.FormText, {
        type: E.FormText.Types.DESCRIPTION,
        className: u.marginBottom20,
        children: I.default.Messages.FORM_HELP_VERIFICATION_LEVEL.format()
      }), (0, a.jsx)(E.RadioGroup, {
        value: c,
        options: C,
        onChange: e => N(e.value)
      })]
    })
  })
}