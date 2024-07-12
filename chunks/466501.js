t.r(i), t.d(i, {
  default: function() {
return h;
  }
});
var n = t(735250),
  o = t(470079),
  a = t(481060),
  l = t(651711),
  r = t(434404),
  s = t(202858),
  c = t(587431),
  d = t(400842),
  u = t(271267),
  _ = t(981631),
  E = t(689938),
  M = t(892463),
  A = t(653904);

function b() {
  return (0, n.jsxs)('div', {
className: M.eligibilityHeader,
children: [
  (0, n.jsx)(a.Heading, {
    className: M.eligibilityHeaderText,
    variant: 'heading-lg/extrabold',
    color: 'header-primary',
    children: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_NOT_ELIGIBLE_TITLE_V2
  }),
  (0, n.jsx)('img', {
    className: M.eligibilityHeaderImage,
    src: A,
    alt: ''
  }),
  (0, n.jsx)(a.ModalCloseButton, {
    className: M.eligibilityHeaderCloseButton,
    onClick: () => {
      (0, a.closeModal)(u.Q);
    }
  })
]
  });
}

function C(e) {
  let {
eligibility: i,
eligibilityLoading: t,
eligibilityError: E,
guildId: A,
onEligibilityBecameStale: b
  } = e, C = o.useMemo(() => ({
onEligibilityBecameStale: b,
sortedByIneligible: !0,
actions: {
  onEnableMFAClick: s.ZP.enableMFA,
  onRequireModeratorMFAClick: () => {
    (0, a.closeModal)(u.Q), r.Z.open(A, _.pNK.SAFETY, void 0, _.KsC.SAFETY_PERMISSIONS);
  }
}
  }), [
A,
b
  ]), h = (0, l.Z)(i, C);
  return null != E ? (0, n.jsx)('div', {
className: M.paddedContainer,
children: (0, n.jsx)(c.Z, {
  children: E.message
})
  }) : null == h || t ? (0, n.jsx)('div', {
className: M.paddedContainer,
children: (0, n.jsx)(a.Spinner, {})
  }) : (0, n.jsx)('div', {
children: h.map((e, i) => (0, n.jsxs)(o.Fragment, {
  children: [
    (0, n.jsx)(d.d, {
      name: e.checked ? e.checkedLabel : e.uncheckedLabel,
      description: e.description,
      checked: e.checked,
      actionLabel: e.actionLabel,
      actionHandler: e.actionHandler
    }),
    i < h.length - 1 ? (0, n.jsx)(a.FormDivider, {}) : null
  ]
}, e.checkedLabel))
  });
}

function h(e) {
  let {
eligibility: i,
eligibilityLoading: t,
eligibilityError: o,
refreshEligibility: l,
guildId: r,
transitionState: s
  } = e;
  return (0, n.jsxs)(a.ModalRoot, {
className: M.eligibilityModal,
size: a.ModalSize.MEDIUM,
transitionState: s,
children: [
  (0, n.jsx)(b, {}),
  (0, n.jsx)(a.ModalContent, {
    children: (0, n.jsx)(C, {
      eligibility: i,
      eligibilityLoading: t,
      eligibilityError: o,
      guildId: r,
      onEligibilityBecameStale: l
    })
  })
]
  });
}