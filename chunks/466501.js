i.r(t), i.d(t, {
  default: function() {
return h;
  }
});
var n = i(735250),
  o = i(470079),
  a = i(481060),
  l = i(651711),
  r = i(434404),
  s = i(202858),
  c = i(587431),
  d = i(400842),
  u = i(271267),
  _ = i(981631),
  E = i(689938),
  M = i(892463),
  A = i(653904);

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
eligibility: t,
eligibilityLoading: i,
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
  ]), h = (0, l.Z)(t, C);
  return null != E ? (0, n.jsx)('div', {
className: M.paddedContainer,
children: (0, n.jsx)(c.Z, {
  children: E.message
})
  }) : null == h || i ? (0, n.jsx)('div', {
className: M.paddedContainer,
children: (0, n.jsx)(a.Spinner, {})
  }) : (0, n.jsx)('div', {
children: h.map((e, t) => (0, n.jsxs)(o.Fragment, {
  children: [
    (0, n.jsx)(d.d, {
      name: e.checked ? e.checkedLabel : e.uncheckedLabel,
      description: e.description,
      checked: e.checked,
      actionLabel: e.actionLabel,
      actionHandler: e.actionHandler
    }),
    t < h.length - 1 ? (0, n.jsx)(a.FormDivider, {}) : null
  ]
}, e.checkedLabel))
  });
}

function h(e) {
  let {
eligibility: t,
eligibilityLoading: i,
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
      eligibility: t,
      eligibilityLoading: i,
      eligibilityError: o,
      guildId: r,
      onEligibilityBecameStale: l
    })
  })
]
  });
}