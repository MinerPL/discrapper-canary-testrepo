"use strict";
i.r(t), i.d(t, {
  default: function() {
    return p
  }
}), i("222007");
var n = i("37983"),
  a = i("884691"),
  l = i("77078"),
  s = i("50926"),
  r = i("520141"),
  o = i("567054"),
  d = i("409464"),
  u = i("414989"),
  c = i("64284"),
  f = i("335724"),
  E = i("925993"),
  I = i("832285"),
  T = i("26754"),
  m = i("546470"),
  _ = i("394294"),
  x = i("49111"),
  h = i("782340"),
  p = function(e) {
    let {
      guild: t,
      submittedGuildJoinRequestsCount: i,
      onFormFieldUpdate: p,
      hideVerificationLevelField: M
    } = e, R = t.hasFeature(x.GuildFeatures.CLAN), F = a.useRef(!1), [v, N] = a.useState(null), [S, C] = a.useState(e.formFields), g = a.useRef(e.formFields), A = a.useMemo(() => S.filter(d.isAutomaticApprovalFormField), [S]), L = a.useMemo(() => S.filter(d.isManualApprovalFormField), [S]), j = L.length, y = a.useMemo(() => S.length === _.MAX_FORM_ELEMENTS, [S]), O = a.useMemo(() => S.some(o.isTermsFormField), [S]), U = a.useMemo(() => S.some(e => !(0, o.isTermsFormField)(e)), [S]), D = j > 1, V = (0, r.useIsMemberVerificationManualApproval)(t.id), w = a.useCallback(() => {
      (0, l.showToast)((0, l.createToast)(h.default.Messages.ERROR_GENERIC_TITLE, l.ToastType.FAILURE))
    }, []), G = a.useCallback(async e => {
      if (!F.current) {
        F.current = !0;
        try {
          await s.default.updateVerificationForm(t.id, e), p(), C(e), g.current = e
        } catch (e) {
          throw C(g.current), e
        } finally {
          null != v && N(null), F.current = !1
        }
      }
    }, [v, t.id, p]), B = a.useCallback(async e => {
      let t = e.field_type === o.VerificationFormFieldTypes.TERMS ? [e, ...S] : [...S, e];
      await G(t)
    }, [S, G]), b = a.useCallback(async (e, t) => {
      if (S[e] === t) return;
      let i = [...S];
      i[e] = t, await G(i)
    }, [S, G]), P = a.useCallback(async (e, t, i) => {
      let n = S.indexOf(e),
        a = [...S];
      if (null != t && t !== n && (a.splice(n, 1), a.splice(t, 0, e), C(a)), i) try {
        await G(a), null !== v && N(null)
      } catch (e) {
        w()
      } else v !== t && N(t)
    }, [v, S, G, w]), H = a.useCallback(async e => {
      try {
        await G([...S.slice(0, e), ...S.slice(e + 1)])
      } catch (e) {
        w()
      }
    }, [S, G, w]), k = (0, n.jsxs)(n.Fragment, {
      children: [!M && (0, n.jsx)(E.default, {
        guild: t
      }), (0, n.jsx)(c.default, {
        guildId: t.id
      }), !O && !y && (0, n.jsx)(f.default, {
        addFormField: B,
        guild: t
      }), A.map(e => (0, m.getFormFieldBuilderComponent)({
        dropHoveredIndex: v,
        formField: e,
        guild: t,
        index: S.indexOf(e),
        isDragEnabled: !1,
        submittedGuildJoinRequestsCount: i,
        removeFormField: H,
        updateFormField: b,
        updateFormFieldOrder: P
      }))]
    });
    return V ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(T.default, {
        text: h.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_AUTOMATIC_APPROVAL_DIVIDER
      }), k, (0, n.jsx)(T.default, {
        text: h.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_DIVIDER
      }), !U && (0, n.jsx)(u.default, {
        addFormField: B,
        showManualApprovalWarning: !R && !(j > 0),
        guild: t
      }), L.map(e => (0, m.getFormFieldBuilderComponent)({
        dropHoveredIndex: v,
        formField: e,
        guild: t,
        index: S.indexOf(e),
        isDragEnabled: D,
        submittedGuildJoinRequestsCount: i,
        removeFormField: H,
        updateFormField: b,
        updateFormFieldOrder: P
      })), U && !y && (0, n.jsx)(I.default, {
        addFormField: B,
        guild: t
      })]
    }) : k
  }