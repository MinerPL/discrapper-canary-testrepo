"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120");
var a = n("735250"),
  i = n("470079"),
  r = n("120356"),
  s = n.n(r),
  l = n("442837"),
  o = n("481060"),
  c = n("11265"),
  d = n("863249"),
  u = n("944163"),
  f = n("246364"),
  m = n("571728"),
  h = n("755340"),
  E = n("794358"),
  T = n("931468"),
  p = n("449226"),
  _ = n("689938"),
  C = n("875058"),
  g = n("453522");

function x(e) {
  let {
    guild: t,
    isExpanded: r,
    emptyFormFields: s,
    hasTermsField: l
  } = e, c = t.hasVerificationGate(), [u, f] = i.useState(c), m = e => {
    e.preventDefault(), e.stopPropagation()
  }, h = async e => {
    try {
      f(e), await d.default.enableVerificationForm(t.id, e)
    } catch {
      f(u)
    }
  }, x = e => {
    e && s ? (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: t
      } = await Promise.resolve().then(n.bind(n, "481060"));
      return n => (0, a.jsx)(t, {
        ...n,
        header: _.default.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
        cancelText: _.default.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
        confirmText: _.default.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
        onConfirm: () => h(e),
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: _.default.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
        })
      })
    }) : h(e)
  }, I = () => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("80026"), n.e("36869")]).then(n.bind(n, "645264"));
      return n => (0, a.jsx)(e, {
        ...n,
        guildId: t.id,
        isPreview: !0
      })
    })
  };
  return (0, a.jsxs)("div", {
    className: C.itemWrapper,
    children: [(0, a.jsxs)("div", {
      className: C.itemContent,
      children: [(0, a.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: _.default.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }), (r || s && !u) && (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: _.default.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !r && (0, a.jsx)("div", {
        className: g.pillRow,
        children: l && (0, a.jsxs)(o.Text, {
          color: "interactive-normal",
          variant: "text-xs/medium",
          className: C.valuePill,
          children: [(0, a.jsx)(T.default, {
            width: 16,
            height: 16
          }), _.default.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL]
        })
      })]
    }), (0, a.jsx)("div", {
      className: g.previewAndEnable,
      children: r || u || !s ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.Clickable, {
          onMouseDown: m,
          onMouseUp: m,
          onClick: e => {
            m(e), I()
          },
          children: (0, a.jsx)(o.Tooltip, {
            tooltipContentClassName: g.__invalid_tooltip,
            text: _.default.Messages.PREVIEW,
            children: e => (0, a.jsx)(E.default, {
              height: 24,
              width: 24,
              className: g.previewIcon,
              ...e
            })
          })
        }), (0, a.jsx)(p.default, {
          checked: u,
          onChange: () => x(!u)
        })]
      }) : (0, a.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        children: _.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}
async function I(e, t) {
  await d.default.updateVerificationForm(e, t)
}
async function v(e, t) {
  await d.default.updateVerificationFormDescription(e, t)
}

function N(e) {
  var t, n, r;
  let {
    guild: o,
    isClanContext: E = !1,
    onFieldsSave: T,
    onDescriptionSave: p,
    verificationForm: _
  } = e, [N, S] = i.useState(E), A = i.useRef(!1), R = i.useCallback(() => {
    A.current = !0
  }, []), M = null !== (t = (0, m.useSubmittedGuildJoinRequestTotal)({
    guildId: o.id
  })) && void 0 !== t ? t : 0, L = (0, l.useStateFromStores)([u.default], () => null != _ ? _ : u.default.get(o.id)), b = null !== (n = null == L ? void 0 : L.formFields) && void 0 !== n ? n : [];
  i.useEffect(() => {
    d.default.fetchVerificationForm(o.id)
  }, [o.id]);
  let y = !E;
  return (0, a.jsx)(c.default, {
    renderHeader: y ? (0, a.jsx)(x, {
      guild: o,
      isExpanded: N,
      emptyFormFields: (null == b ? void 0 : b.length) == null || (null == b ? void 0 : b.length) === 0,
      hasTermsField: null == b ? void 0 : b.some(e => e.field_type === f.VerificationFormFieldTypes.TERMS)
    }) : null,
    isExpanded: N,
    onExpand: () => S(!N),
    disableAnimation: E,
    disableBackground: !y,
    children: (0, a.jsx)("div", {
      className: s()(C.itemBodyContainer, {
        [C.noPadding]: !y,
        [g.rulesScreeningItemsNoBorder]: !y
      }),
      children: null != L && (0, a.jsx)(h.default, {
        guild: o,
        submittedGuildJoinRequestsCount: M,
        formFields: b,
        onFormFieldUpdate: R,
        hideVerificationLevelField: !0,
        isClanContext: E,
        onFieldsSave: null != T ? T : I,
        onDescriptionSave: null != p ? p : v,
        formDescription: null !== (r = null == L ? void 0 : L.description) && void 0 !== r ? r : ""
      })
    })
  })
}