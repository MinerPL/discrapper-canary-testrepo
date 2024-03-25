"use strict";
i.r(t), i.d(t, {
  default: function() {
    return R
  }
}), i("222007");
var n = i("37983"),
  a = i("884691"),
  l = i("414456"),
  s = i.n(l),
  r = i("446674"),
  o = i("77078"),
  d = i("567062"),
  u = i("50926"),
  c = i("526253"),
  f = i("567054"),
  E = i("859130"),
  I = i("613786"),
  T = i("462579"),
  m = i("641892"),
  _ = i("690343"),
  x = i("782340"),
  h = i("854743"),
  p = i("108288");

function M(e) {
  let {
    guild: t,
    isExpanded: l,
    emptyFormFields: s,
    hasTermsField: r
  } = e, d = t.hasVerificationGate(), [c, f] = a.useState(d), E = e => {
    e.preventDefault(), e.stopPropagation()
  }, I = async e => {
    try {
      f(e), await u.default.enableVerificationForm(t.id, e)
    } catch {
      f(c)
    }
  }, M = e => {
    e && s ? (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: t
      } = await i.el("77078").then(i.bind(i, "77078"));
      return i => (0, n.jsx)(t, {
        ...i,
        header: x.default.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
        cancelText: x.default.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
        confirmText: x.default.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
        onConfirm: () => I(e),
        children: (0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          children: x.default.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
        })
      })
    }) : I(e)
  }, R = () => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await i.el("93184").then(i.bind(i, "93184"));
      return i => (0, n.jsx)(e, {
        ...i,
        guildId: t.id,
        isPreview: !0
      })
    })
  };
  return (0, n.jsxs)("div", {
    className: h.itemWrapper,
    children: [(0, n.jsxs)("div", {
      className: h.itemContent,
      children: [(0, n.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: x.default.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }), (l || s && !c) && (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: x.default.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !l && (0, n.jsx)("div", {
        className: p.pillRow,
        children: r && (0, n.jsxs)(o.Text, {
          color: "interactive-normal",
          variant: "text-xs/medium",
          className: h.valuePill,
          children: [(0, n.jsx)(m.default, {
            width: 16,
            height: 16
          }), x.default.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL]
        })
      })]
    }), (0, n.jsx)("div", {
      className: p.previewAndEnable,
      children: l || c || !s ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Clickable, {
          onMouseDown: E,
          onMouseUp: E,
          onClick: e => {
            E(e), R()
          },
          children: (0, n.jsx)(o.Tooltip, {
            tooltipContentClassName: p.tooltip,
            text: x.default.Messages.PREVIEW,
            children: e => (0, n.jsx)(T.default, {
              height: 24,
              width: 24,
              className: p.previewIcon,
              ...e
            })
          })
        }), (0, n.jsx)(_.default, {
          checked: c,
          onChange: () => M(!c)
        })]
      }) : (0, n.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        children: x.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}

function R(e) {
  var t;
  let {
    guild: i
  } = e, [l, o] = a.useState(!1), [T, m] = a.useState(!1), _ = a.useRef(!1), x = a.useCallback(() => {
    _.current = !0
  }, []), R = (0, E.useSubmittedGuildJoinRequestTotal)({
    guildId: i.id
  }), F = (0, r.useStateFromStores)([c.default], () => c.default.get(i.id)), v = null !== (t = null == F ? void 0 : F.formFields) && void 0 !== t ? t : [];
  return a.useEffect(() => {
    u.default.fetchVerificationForm(i.id).then(() => {
      m(!0)
    })
  }, [i.id]), (0, n.jsx)(d.default, {
    renderHeader: (0, n.jsx)(M, {
      guild: i,
      isExpanded: l,
      emptyFormFields: (null == v ? void 0 : v.length) == null || (null == v ? void 0 : v.length) === 0,
      hasTermsField: null == v ? void 0 : v.some(e => e.field_type === f.VerificationFormFieldTypes.TERMS)
    }),
    isExpanded: l,
    onExpand: () => o(!l),
    children: (0, n.jsx)("div", {
      className: s(h.itemBodyContainer, p.rulesScreeningItems),
      children: T && (0, n.jsx)(I.default, {
        guild: i,
        submittedGuildJoinRequestsCount: R,
        formFields: v,
        onFormFieldUpdate: x,
        hideVerificationLevelField: !0
      })
    })
  })
}