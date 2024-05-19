"use strict";
a.r(t), a.d(t, {
  default: function() {
    return v
  }
}), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("442837"),
  o = a("481060"),
  c = a("11265"),
  d = a("863249"),
  u = a("944163"),
  f = a("246364"),
  m = a("571728"),
  h = a("755340"),
  p = a("794358"),
  E = a("931468"),
  T = a("449226"),
  C = a("689938"),
  x = a("212723"),
  _ = a("5288");

function g(e) {
  let {
    guild: t,
    isExpanded: s,
    emptyFormFields: i,
    hasTermsField: l
  } = e, c = t.hasVerificationGate(), [u, f] = r.useState(c), m = e => {
    e.preventDefault(), e.stopPropagation()
  }, h = async e => {
    try {
      f(e), await d.default.enableVerificationForm(t.id, e)
    } catch {
      f(u)
    }
  }, g = e => {
    e && i ? (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: t
      } = await Promise.resolve().then(a.bind(a, "481060"));
      return a => (0, n.jsx)(t, {
        ...a,
        header: C.default.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
        cancelText: C.default.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
        confirmText: C.default.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
        onConfirm: () => h(e),
        children: (0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          children: C.default.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
        })
      })
    }) : h(e)
  }, I = () => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("49237"), a.e("99387"), a.e("80026"), a.e("36869")]).then(a.bind(a, "645264"));
      return a => (0, n.jsx)(e, {
        ...a,
        guildId: t.id,
        isPreview: !0
      })
    })
  };
  return (0, n.jsxs)("div", {
    className: x.itemWrapper,
    children: [(0, n.jsxs)("div", {
      className: x.itemContent,
      children: [(0, n.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: C.default.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }), (s || i && !u) && (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: C.default.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !s && (0, n.jsx)("div", {
        className: _.pillRow,
        children: l && (0, n.jsxs)(o.Text, {
          color: "interactive-normal",
          variant: "text-xs/medium",
          className: x.valuePill,
          children: [(0, n.jsx)(E.default, {
            width: 16,
            height: 16
          }), C.default.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL]
        })
      })]
    }), (0, n.jsx)("div", {
      className: _.previewAndEnable,
      children: s || u || !i ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Clickable, {
          onMouseDown: m,
          onMouseUp: m,
          onClick: e => {
            m(e), I()
          },
          children: (0, n.jsx)(o.Tooltip, {
            tooltipContentClassName: _.__invalid_tooltip,
            text: C.default.Messages.PREVIEW,
            children: e => (0, n.jsx)(p.default, {
              height: 24,
              width: 24,
              className: _.previewIcon,
              ...e
            })
          })
        }), (0, n.jsx)(T.default, {
          checked: u,
          onChange: () => g(!u)
        })]
      }) : (0, n.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        children: C.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}
async function I(e, t) {
  await d.default.updateVerificationForm(e, t)
}
async function N(e, t) {
  await d.default.updateVerificationFormDescription(e, t)
}

function v(e) {
  var t, a, s;
  let {
    guild: o,
    isClanContext: p = !1,
    onFieldsSave: E,
    onDescriptionSave: T,
    verificationForm: C
  } = e, [v, A] = r.useState(p), S = r.useRef(!1), L = r.useCallback(() => {
    S.current = !0
  }, []), R = null !== (t = (0, m.useSubmittedGuildJoinRequestTotal)({
    guildId: o.id
  })) && void 0 !== t ? t : 0, y = (0, l.useStateFromStores)([u.default], () => null != C ? C : u.default.get(o.id)), b = null !== (a = null == y ? void 0 : y.formFields) && void 0 !== a ? a : [];
  r.useEffect(() => {
    d.default.fetchVerificationForm(o.id)
  }, [o.id]);
  let M = !p;
  return (0, n.jsx)(c.default, {
    renderHeader: M ? (0, n.jsx)(g, {
      guild: o,
      isExpanded: v,
      emptyFormFields: (null == b ? void 0 : b.length) == null || (null == b ? void 0 : b.length) === 0,
      hasTermsField: null == b ? void 0 : b.some(e => e.field_type === f.VerificationFormFieldTypes.TERMS)
    }) : null,
    isExpanded: v,
    onExpand: () => A(!v),
    disableAnimation: p,
    disableBackground: !M,
    children: (0, n.jsx)("div", {
      className: i()(x.itemBodyContainer, {
        [x.noPadding]: !M,
        [_.rulesScreeningItemsNoBorder]: !M
      }),
      children: null != y && (0, n.jsx)(h.default, {
        guild: o,
        submittedGuildJoinRequestsCount: R,
        formFields: b,
        onFormFieldUpdate: L,
        hideVerificationLevelField: !0,
        isClanContext: p,
        onFieldsSave: null != E ? E : I,
        onDescriptionSave: null != T ? T : N,
        formDescription: null !== (s = null == y ? void 0 : y.description) && void 0 !== s ? s : ""
      })
    })
  })
}