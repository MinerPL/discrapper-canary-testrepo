"use strict";
n.r(t), n("47120");
var a = n("735250"),
  i = n("470079"),
  r = n("481060"),
  s = n("467138"),
  l = n("246364"),
  o = n("983736"),
  c = n("5056"),
  d = n("565321"),
  u = n("297619"),
  f = n("456935"),
  m = n("446945"),
  h = n("700833"),
  E = n("592286"),
  T = n("689938");
t.default = function(e) {
  let {
    guild: t,
    submittedGuildJoinRequestsCount: n,
    onFormFieldUpdate: p,
    hideVerificationLevelField: _,
    isClanContext: C,
    formDescription: g,
    onFieldsSave: x,
    onDescriptionSave: I
  } = e, v = i.useRef(!1), [N, S] = i.useState(null), [A, R] = i.useState(e.formFields), M = i.useRef(e.formFields), L = i.useMemo(() => A.filter(o.isAutomaticApprovalFormField), [A]), b = i.useMemo(() => A.filter(o.isManualApprovalFormField), [A]), y = b.length, j = i.useMemo(() => A.length === E.MAX_FORM_ELEMENTS, [A]), O = i.useMemo(() => A.some(l.isTermsFormField), [A]), D = i.useMemo(() => A.some(e => !(0, l.isTermsFormField)(e)), [A]), P = y > 1, F = (0, s.useIsMemberVerificationManualApproval)(t.id) || C, w = i.useCallback(() => {
    (0, r.showToast)((0, r.createToast)(T.default.Messages.ERROR_GENERIC_TITLE, r.ToastType.FAILURE))
  }, []), U = i.useCallback(async e => {
    if (!v.current) {
      v.current = !0, C && (e = e.filter(e => e.field_type !== l.VerificationFormFieldTypes.TERMS));
      try {
        await x(t.id, e), p(), R(e), M.current = e
      } catch (e) {
        throw R(M.current), e
      } finally {
        null != N && S(null), v.current = !1
      }
    }
  }, [N, t.id, p, x, C]), G = i.useCallback(async e => {
    let t = e.field_type === l.VerificationFormFieldTypes.TERMS ? [e, ...A] : [...A, e];
    await U(t)
  }, [A, U]), B = i.useCallback(async (e, t) => {
    if (A[e] === t) return;
    let n = [...A];
    n[e] = t, await U(n)
  }, [A, U]), k = i.useCallback(async (e, t, n) => {
    let a = A.indexOf(e),
      i = [...A];
    if (null != t && t !== a && (i.splice(a, 1), i.splice(t, 0, e), R(i)), n) try {
      await U(i), null !== N && S(null)
    } catch (e) {
      w()
    } else N !== t && S(t)
  }, [N, A, U, w]), H = i.useCallback(async e => {
    try {
      await U([...A.slice(0, e), ...A.slice(e + 1)])
    } catch (e) {
      w()
    }
  }, [A, U, w]), V = (0, a.jsxs)(a.Fragment, {
    children: [!_ && (0, a.jsx)(f.default, {
      guild: t
    }), (0, a.jsx)(d.default, {
      formDescription: g,
      guildId: t.id,
      onSave: I
    }), !O && !j && (0, a.jsx)(u.default, {
      addFormField: G,
      guild: t
    }), L.map(e => (0, h.getFormFieldBuilderComponent)({
      dropHoveredIndex: N,
      formField: e,
      guild: t,
      index: A.indexOf(e),
      isDragEnabled: !1,
      submittedGuildJoinRequestsCount: n,
      removeFormField: H,
      updateFormField: B,
      updateFormFieldOrder: k,
      canRemove: !0,
      actionsLocation: C ? "side" : "footer"
    }))]
  });
  return F ? (0, a.jsxs)(a.Fragment, {
    children: [!C && V, !D && (0, a.jsx)(c.default, {
      addFormField: G,
      showManualApprovalWarning: !C && !(y > 0),
      guild: t,
      showHeader: !C
    }), b.map(e => (0, h.getFormFieldBuilderComponent)({
      dropHoveredIndex: N,
      formField: e,
      guild: t,
      index: A.indexOf(e),
      isDragEnabled: P,
      submittedGuildJoinRequestsCount: n,
      removeFormField: H,
      updateFormField: B,
      updateFormFieldOrder: k,
      canRemove: !(C && b.length <= 1),
      actionsLocation: C ? "side" : "footer"
    })), D && !j && (0, a.jsx)(m.default, {
      addFormField: G,
      guild: t
    })]
  }) : V
}