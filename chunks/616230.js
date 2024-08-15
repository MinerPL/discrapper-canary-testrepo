t.d(n, {
  Z: function() {
return I;
  }
}), t(47120);
var a = t(735250),
  r = t(470079),
  i = t(120356),
  s = t.n(i),
  o = t(442837),
  l = t(481060),
  c = t(11265),
  d = t(863249),
  u = t(944163),
  m = t(246364),
  _ = t(571728),
  f = t(755340),
  C = t(449226),
  h = t(689938),
  x = t(70529),
  p = t(136815);

function g(e) {
  let {
guild: n,
isExpanded: i,
emptyFormFields: s,
hasTermsField: o
  } = e, c = n.hasVerificationGate(), [u, m] = r.useState(c), _ = e => {
e.preventDefault(), e.stopPropagation();
  }, f = async e => {
try {
  m(e), await d.Z.enableVerificationForm(n.id, e);
} catch {
  m(u);
}
  }, g = e => {
e && s ? (0, l.openModalLazy)(async () => {
  let {
    ConfirmModal: n
  } = await Promise.resolve().then(t.bind(t, 481060));
  return t => (0, a.jsx)(n, {
    ...t,
    header: h.Z.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
    cancelText: h.Z.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
    confirmText: h.Z.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
    onConfirm: () => f(e),
    children: (0, a.jsx)(l.Text, {
      variant: 'text-md/normal',
      children: h.Z.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
    })
  });
}) : f(e);
  }, T = () => {
(0, l.openModalLazy)(async () => {
  let {
    default: e
  } = await Promise.all([
    t.e('80026'),
    t.e('36869')
  ]).then(t.bind(t, 645264));
  return t => (0, a.jsx)(e, {
    ...t,
    guildId: n.id,
    isPreview: !0
  });
});
  };
  return (0, a.jsxs)('div', {
className: x.itemWrapper,
children: [
  (0, a.jsxs)('div', {
    className: x.itemContent,
    children: [
      (0, a.jsx)(l.Heading, {
        variant: 'text-md/semibold',
        color: 'header-primary',
        children: h.Z.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }),
      (i || s && !u) && (0, a.jsx)(l.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        children: h.Z.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }),
      !i && (0, a.jsx)('div', {
        className: p.pillRow,
        children: o && (0, a.jsxs)(l.Text, {
          color: 'interactive-normal',
          variant: 'text-xs/medium',
          className: x.valuePill,
          children: [
            (0, a.jsx)(l.BookCheckIcon, {
              size: 'custom',
              color: 'currentColor',
              width: 16,
              height: 16
            }),
            h.Z.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL
          ]
        })
      })
    ]
  }),
  (0, a.jsx)('div', {
    className: p.previewAndEnable,
    children: i || u || !s ? (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)(l.Clickable, {
          onMouseDown: _,
          onMouseUp: _,
          onClick: e => {
            _(e), T();
          },
          children: (0, a.jsx)(l.Tooltip, {
            tooltipContentClassName: p.__invalid_tooltip,
            text: h.Z.Messages.PREVIEW,
            children: e => (0, a.jsx)(l.EyeIcon, {
              size: 'md',
              color: 'currentColor',
              className: p.previewIcon,
              ...e
            })
          })
        }),
        (0, a.jsx)(C.Z, {
          checked: u,
          onChange: () => g(!u)
        })
      ]
    }) : (0, a.jsx)(l.Button, {
      size: l.Button.Sizes.SMALL,
      children: h.Z.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
    })
  })
]
  });
}
async function T(e, n) {
  await d.Z.updateVerificationForm(e, n);
}
async function E(e, n) {
  await d.Z.updateVerificationFormDescription(e, n);
}

function I(e) {
  var n, t, i;
  let {
guild: l,
isClanContext: C = !1,
onFieldsSave: h,
onDescriptionSave: I,
verificationForm: b
  } = e, [N, v] = r.useState(C), y = r.useRef(!1), S = r.useCallback(() => {
y.current = !0;
  }, []), A = null !== (n = (0, _.A)({
guildId: l.id
  })) && void 0 !== n ? n : 0, M = (0, o.e7)([u.Z], () => null != b ? b : u.Z.get(l.id)), j = null !== (t = null == M ? void 0 : M.formFields) && void 0 !== t ? t : [];
  r.useEffect(() => {
d.Z.fetchVerificationForm(l.id);
  }, [l.id]);
  let R = null != M,
L = !C;
  return (0, a.jsx)(c.Z, {
renderHeader: L ? (0, a.jsx)(g, {
  guild: l,
  isExpanded: N,
  emptyFormFields: (null == j ? void 0 : j.length) == null || (null == j ? void 0 : j.length) === 0,
  hasTermsField: null == j ? void 0 : j.some(e => e.field_type === m.QJ.TERMS)
}) : null,
isExpanded: N,
onExpand: () => v(!N),
disableAnimation: C,
disableBackground: !L,
children: (0, a.jsx)('div', {
  className: s()(x.itemBodyContainer, {
    [x.noPadding]: !L,
    [p.rulesScreeningItemsNoBorder]: !L
  }),
  children: R && (0, a.jsx)(f.Z, {
    guild: l,
    submittedGuildJoinRequestsCount: A,
    formFields: j,
    onFormFieldUpdate: S,
    hideVerificationLevelField: !0,
    isClanContext: C,
    onFieldsSave: null != h ? h : T,
    onDescriptionSave: null != I ? I : E,
    formDescription: null !== (i = null == M ? void 0 : M.description) && void 0 !== i ? i : ''
  })
})
  });
}