"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  r = a("881052"),
  o = a("434404"),
  i = a("78451"),
  u = a("915509"),
  c = a("981631"),
  d = a("689938"),
  h = a("794711");

function m(e) {
  let {
    guild: t,
    onClose: a,
    hideColors: m
  } = e, [x, f] = s.useState(t.verificationLevel), [C, L] = s.useState(null), M = t.hasFeature(c.GuildFeatures.COMMUNITY), p = (0, i.generateVerificationLevelOptions)(M, m).filter(e => !e.disabled), v = s.useCallback(async () => {
    null != C && L(null);
    try {
      await o.default.saveGuild(t.id, {
        verificationLevel: x
      }), o.default.updateGuild({
        verificationLevel: x
      }), a()
    } catch (e) {
      L(new r.APIError(e).getAnyErrorMessage())
    }
  }, [C, t.id, x, a]);
  return (0, n.jsx)(u.default, {
    ...e,
    title: d.default.Messages.FORM_LABEL_VERIFICATION_LEVEL,
    errorText: C,
    onConfirm: v,
    onCancel: a,
    children: (0, n.jsxs)(l.FormSection, {
      children: [(0, n.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        className: h.marginBottom20,
        children: d.default.Messages.FORM_HELP_VERIFICATION_LEVEL.format()
      }), (0, n.jsx)(l.RadioGroup, {
        value: x,
        options: p,
        onChange: e => f(e.value)
      })]
    })
  })
}