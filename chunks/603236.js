l.d(n, {
  I: function() {
return Z;
  },
  S: function() {
return A;
  }
}), l(47120);
var s = l(735250),
  a = l(470079),
  t = l(120356),
  i = l.n(t),
  r = l(533800),
  o = l(442837),
  d = l(846519),
  c = l(481060),
  u = l(914010),
  E = l(246946),
  _ = l(626135),
  I = l(572004),
  x = l(630388),
  N = l(971130),
  m = l(530436),
  T = l(245335),
  h = l(981631),
  g = l(689938),
  v = l(352563),
  S = l(216315),
  C = l(483085),
  L = l(549856);
let A = o.ZP.connectStores([E.Z], () => ({
hideValue: E.Z.hideInstantInvites
  }))(e => {
let {
  value: n,
  autoFocus: l,
  hideValue: t,
  onCopy: r,
  disabled: o
} = e, [u, E] = a.useState(!1), [_, x] = a.useState(!1), N = a.useMemo(() => new d.sW(1000, () => x(!1)), [x]);
return a.useEffect(() => () => {
  N.cancel();
}, [N]), (0, s.jsxs)('div', {
  className: i()(S.input, C.__invalid_flexJustifyBetween, C.flexCenter, {
    [S.success]: _,
    [S.focused]: u
  }),
  children: [
    (0, s.jsx)(c.TextInput, {
      className: v.copyInput,
      name: 'invite',
      value: t ? g.Z.Messages.INSTANT_INVITE_HIDDEN : n,
      editable: !1,
      inputClassName: v.input,
      autoFocus: l,
      onFocus: () => l ? E(!0) : null,
      onBlur: () => l ? E(!1) : null,
      spellCheck: 'false',
      onClick: e => e.currentTarget.select(),
      'aria-label': g.Z.Messages.FORM_LABEL_INVITE_LINK,
      disabled: o
    }),
    I.wS ? (0, s.jsx)(c.Button, {
      size: c.Button.Sizes.SMALL,
      color: _ ? c.Button.Colors.GREEN : c.Button.Colors.BRAND,
      className: v.copyButton,
      onClick: () => {
        x(!0), N.delay(), r(n);
      },
      disabled: o,
      children: _ ? g.Z.Messages.INVITE_COPIED : g.Z.Messages.COPY
    }) : null
  ]
});
  }),
  Z = e => {
let {
  guild: n,
  noInvitesAvailable: l,
  showFriends: t,
  onClose: o,
  modalState: d,
  isGuestInviteCreationToggleEnabled: E,
  inviteFlags: S,
  setInviteFlags: C,
  showGuestInviteToggleForCurrentVoiceChannel: Z,
  copyValue: f,
  changePage: j,
  inviteChannel: M,
  source: D,
  code: p,
  guildScheduledEvent: R,
  disabled: V
} = e, {
  maxAge: G,
  maxUses: O,
  networkError: U,
  showVanityURL: y
} = d, b = a.useCallback(() => {
  (0, I.JG)(f), _.default.track(h.rMx.COPY_INSTANT_INVITE, {
    server: u.Z.getGuildId(),
    channel: null == M ? void 0 : M.id,
    channel_type: null == M ? void 0 : M.type,
    location: D,
    code: p,
    guild_scheduled_event_id: null == R ? void 0 : R.id
  });
}, [
  f,
  M,
  D,
  p,
  R
]);
return (0, s.jsxs)(s.Fragment, {
  children: [
    (0, s.jsx)(A, {
      value: f,
      autoFocus: t,
      onCopy: b,
      disabled: V
    }),
    E ? (0, s.jsx)('div', {
      className: v.temporaryMembershipContainerBackground,
      children: (0, s.jsx)(c.FormSwitch, {
        className: v.temporaryMembershipContainer,
        value: (0, x.yE)(S, r.$.IS_GUEST_INVITE),
        onChange: e => C((0, x.mB)(S, r.$.IS_GUEST_INVITE, e)),
        note: g.Z.Messages.GUEST_MEMBERSHIP_EXPLANATION,
        disabled: V,
        hideBorder: !0,
        children: Z ? g.Z.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : g.Z.Messages.GRANT_GUEST_MEMBERSHIP
      })
    }) : null,
    l || y ? null : (0, s.jsxs)(c.Text, {
      variant: 'text-xs/normal',
      className: i()(L.marginTop8, v.footerText),
      children: [
        (0, N.Vg)(G, O),
        ' ',
        t ? (0, s.jsx)(c.Anchor, {
          onClick: () => j(T.RV.SETTINGS),
          children: g.Z.Messages.INVITE_EDIT_LINK
        }) : null
      ]
    }),
    !l && t && y ? (0, s.jsxs)(c.Text, {
      variant: 'text-xs/normal',
      className: i()(L.marginTop8, v.footerText),
      children: [
        g.Z.Messages.INVITE_VANITY_USED,
        ' ',
        (0, s.jsx)(c.Anchor, {
          onClick: () => j(T.RV.SETTINGS),
          children: g.Z.Messages.INVITE_EDIT_LINK
        })
      ]
    }) : null,
    null != U ? (0, s.jsx)(m.W, {
      guild: n,
      error: U,
      onClose: o
    }) : null
  ]
});
  };