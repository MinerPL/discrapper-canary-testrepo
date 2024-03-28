"use strict";
i.r(t), i("47120");
var a = i("735250"),
  l = i("470079"),
  n = i("481060"),
  s = i("863249"),
  r = i("467138"),
  o = i("246364"),
  d = i("983736"),
  c = i("5056"),
  u = i("565321"),
  f = i("297619"),
  m = i("456935"),
  E = i("446945"),
  I = i("243371"),
  x = i("700833"),
  h = i("592286"),
  T = i("981631"),
  M = i("689938");
t.default = function(e) {
  let {
    guild: t,
    submittedGuildJoinRequestsCount: i,
    onFormFieldUpdate: F,
    hideVerificationLevelField: _
  } = e, v = t.hasFeature(T.GuildFeatures.CLAN), R = l.useRef(!1), [p, C] = l.useState(null), [N, g] = l.useState(e.formFields), j = l.useRef(e.formFields), L = l.useMemo(() => N.filter(d.isAutomaticApprovalFormField), [N]), y = l.useMemo(() => N.filter(d.isManualApprovalFormField), [N]), A = y.length, S = l.useMemo(() => N.length === h.MAX_FORM_ELEMENTS, [N]), V = l.useMemo(() => N.some(o.isTermsFormField), [N]), w = l.useMemo(() => N.some(e => !(0, o.isTermsFormField)(e)), [N]), O = A > 1, P = (0, r.useIsMemberVerificationManualApproval)(t.id), D = l.useCallback(() => {
    (0, n.showToast)((0, n.createToast)(M.default.Messages.ERROR_GENERIC_TITLE, n.ToastType.FAILURE))
  }, []), b = l.useCallback(async e => {
    if (!R.current) {
      R.current = !0;
      try {
        await s.default.updateVerificationForm(t.id, e), F(), g(e), j.current = e
      } catch (e) {
        throw g(j.current), e
      } finally {
        null != p && C(null), R.current = !1
      }
    }
  }, [p, t.id, F]), B = l.useCallback(async e => {
    let t = e.field_type === o.VerificationFormFieldTypes.TERMS ? [e, ...N] : [...N, e];
    await b(t)
  }, [N, b]), G = l.useCallback(async (e, t) => {
    if (N[e] === t) return;
    let i = [...N];
    i[e] = t, await b(i)
  }, [N, b]), H = l.useCallback(async (e, t, i) => {
    let a = N.indexOf(e),
      l = [...N];
    if (null != t && t !== a && (l.splice(a, 1), l.splice(t, 0, e), g(l)), i) try {
      await b(l), null !== p && C(null)
    } catch (e) {
      D()
    } else p !== t && C(t)
  }, [p, N, b, D]), U = l.useCallback(async e => {
    try {
      await b([...N.slice(0, e), ...N.slice(e + 1)])
    } catch (e) {
      D()
    }
  }, [N, b, D]), k = (0, a.jsxs)(a.Fragment, {
    children: [!_ && (0, a.jsx)(m.default, {
      guild: t
    }), (0, a.jsx)(u.default, {
      guildId: t.id
    }), !V && !S && (0, a.jsx)(f.default, {
      addFormField: B,
      guild: t
    }), L.map(e => (0, x.getFormFieldBuilderComponent)({
      dropHoveredIndex: p,
      formField: e,
      guild: t,
      index: N.indexOf(e),
      isDragEnabled: !1,
      submittedGuildJoinRequestsCount: i,
      removeFormField: U,
      updateFormField: G,
      updateFormFieldOrder: H
    }))]
  });
  return P ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(I.default, {
      text: M.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_AUTOMATIC_APPROVAL_DIVIDER
    }), k, (0, a.jsx)(I.default, {
      text: M.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_DIVIDER
    }), !w && (0, a.jsx)(c.default, {
      addFormField: B,
      showManualApprovalWarning: !v && !(A > 0),
      guild: t
    }), y.map(e => (0, x.getFormFieldBuilderComponent)({
      dropHoveredIndex: p,
      formField: e,
      guild: t,
      index: N.indexOf(e),
      isDragEnabled: O,
      submittedGuildJoinRequestsCount: i,
      removeFormField: U,
      updateFormField: G,
      updateFormFieldOrder: H
    })), w && !S && (0, a.jsx)(E.default, {
      addFormField: B,
      guild: t
    })]
  }) : k
}