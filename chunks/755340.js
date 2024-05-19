"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("481060"),
  i = a("467138"),
  l = a("246364"),
  o = a("983736"),
  c = a("5056"),
  d = a("565321"),
  u = a("297619"),
  f = a("456935"),
  m = a("446945"),
  h = a("700833"),
  p = a("592286"),
  E = a("689938");
t.default = function(e) {
  let {
    guild: t,
    submittedGuildJoinRequestsCount: a,
    onFormFieldUpdate: T,
    hideVerificationLevelField: C,
    isClanContext: x,
    formDescription: _,
    onFieldsSave: g,
    onDescriptionSave: I
  } = e, N = r.useRef(!1), [v, A] = r.useState(null), [S, L] = r.useState(e.formFields), R = r.useRef(e.formFields), y = r.useMemo(() => S.filter(o.isAutomaticApprovalFormField), [S]), b = r.useMemo(() => S.filter(o.isManualApprovalFormField), [S]), M = b.length, j = r.useMemo(() => S.length === p.MAX_FORM_ELEMENTS, [S]), O = r.useMemo(() => S.some(l.isTermsFormField), [S]), D = r.useMemo(() => S.some(e => !(0, l.isTermsFormField)(e)), [S]), P = M > 0, F = (0, i.useIsMemberVerificationManualApproval)(t.id) || x, w = r.useCallback(() => {
    (0, s.showToast)((0, s.createToast)(E.default.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE))
  }, []), B = r.useCallback(async e => {
    if (!N.current) {
      N.current = !0, x && (e = e.filter(e => e.field_type !== l.VerificationFormFieldTypes.TERMS));
      try {
        await g(t.id, e), T(), L(e), R.current = e
      } catch (e) {
        throw L(R.current), e
      } finally {
        null != v && A(null), N.current = !1
      }
    }
  }, [v, t.id, T, g, x]), G = r.useCallback(async e => {
    let t = e.field_type === l.VerificationFormFieldTypes.TERMS ? [e, ...S] : [...S, e];
    await B(t)
  }, [S, B]), U = r.useCallback(async (e, t) => {
    if (S[e] === t) return;
    let a = [...S];
    a[e] = t, await B(a)
  }, [S, B]), H = r.useCallback(async (e, t, a) => {
    let n = S.indexOf(e),
      r = [...S];
    if (null != t && t !== n && (r.splice(n, 1), r.splice(t, 0, e), L(r)), a) try {
      await B(r), null !== v && A(null)
    } catch (e) {
      w()
    } else v !== t && A(t)
  }, [v, S, B, w]), k = r.useCallback(async e => {
    try {
      await B([...S.slice(0, e), ...S.slice(e + 1)])
    } catch (e) {
      w()
    }
  }, [S, B, w]), V = (0, n.jsxs)(n.Fragment, {
    children: [!C && (0, n.jsx)(f.default, {
      guild: t
    }), (0, n.jsx)(d.default, {
      formDescription: _,
      guildId: t.id,
      onSave: I
    }), !O && !j && (0, n.jsx)(u.default, {
      addFormField: G,
      guild: t
    }), y.map(e => (0, h.getFormFieldBuilderComponent)({
      dropHoveredIndex: v,
      formField: e,
      guild: t,
      index: S.indexOf(e),
      isDragEnabled: !1,
      submittedGuildJoinRequestsCount: a,
      removeFormField: k,
      updateFormField: U,
      updateFormFieldOrder: H,
      canRemove: !0,
      actionsLocation: x ? "side" : "footer"
    }))]
  });
  return F ? (0, n.jsxs)(n.Fragment, {
    children: [!x && V, !D && (0, n.jsx)(c.default, {
      addFormField: G,
      showManualApprovalWarning: !x && !P,
      guild: t,
      showHeader: !x
    }), b.map(e => (0, h.getFormFieldBuilderComponent)({
      dropHoveredIndex: v,
      formField: e,
      guild: t,
      index: S.indexOf(e),
      isDragEnabled: P,
      submittedGuildJoinRequestsCount: a,
      removeFormField: k,
      updateFormField: U,
      updateFormFieldOrder: H,
      canRemove: !(x && b.length <= 1),
      actionsLocation: x ? "side" : "footer"
    })), D && !j && (0, n.jsx)(m.default, {
      addFormField: G,
      guild: t
    })]
  }) : V
}