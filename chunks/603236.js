"use strict";
l.r(t), l.d(t, {
  InviteCopyInput: function() {
    return L
  },
  RawInviteCopyInputConnected: function() {
    return A
  }
}), l("47120");
var a = l("735250"),
  n = l("470079"),
  s = l("803997"),
  r = l.n(s),
  i = l("533800"),
  d = l("442837"),
  u = l("846519"),
  o = l("481060"),
  c = l("914010"),
  E = l("246946"),
  _ = l("626135"),
  f = l("572004"),
  T = l("630388"),
  h = l("971130"),
  I = l("530436"),
  N = l("245335"),
  m = l("981631"),
  x = l("689938"),
  v = l("651937"),
  g = l("717897"),
  S = l("605094"),
  C = l("794711");
let A = d.default.connectStores([E.default], () => ({
    hideValue: E.default.hideInstantInvites
  }))(e => {
    let {
      value: t,
      autoFocus: l,
      hideValue: s,
      onCopy: i,
      disabled: d
    } = e, [c, E] = n.useState(!1), [_, T] = n.useState(!1), h = n.useMemo(() => new u.DelayedCall(1e3, () => T(!1)), [T]);
    return n.useEffect(() => () => {
      h.cancel()
    }, [h]), (0, a.jsxs)("div", {
      className: r()(g.input, S.__invalid_flexJustifyBetween, S.flexCenter, {
        [g.success]: _,
        [g.focused]: c
      }),
      children: [(0, a.jsx)(o.TextInput, {
        className: v.copyInput,
        name: "invite",
        value: s ? x.default.Messages.INSTANT_INVITE_HIDDEN : t,
        editable: !1,
        inputClassName: v.input,
        autoFocus: l,
        onFocus: () => l ? E(!0) : null,
        onBlur: () => l ? E(!1) : null,
        spellCheck: "false",
        onClick: e => e.currentTarget.select(),
        "aria-label": x.default.Messages.FORM_LABEL_INVITE_LINK,
        disabled: d
      }), f.SUPPORTS_COPY ? (0, a.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        color: _ ? o.Button.Colors.GREEN : o.Button.Colors.BRAND,
        className: v.copyButton,
        onClick: () => {
          T(!0), h.delay(), i(t)
        },
        disabled: d,
        children: _ ? x.default.Messages.INVITE_COPIED : x.default.Messages.COPY
      }) : null]
    })
  }),
  L = e => {
    let {
      guild: t,
      noInvitesAvailable: l,
      showFriends: s,
      onClose: d,
      modalState: u,
      isGuestInviteCreationToggleEnabled: E,
      inviteFlags: g,
      setInviteFlags: S,
      showGuestInviteToggleForCurrentVoiceChannel: L,
      copyValue: p,
      changePage: M,
      inviteChannel: D,
      source: R,
      code: j,
      guildScheduledEvent: y,
      disabled: G
    } = e, {
      maxAge: V,
      maxUses: U,
      networkError: O,
      showVanityURL: B
    } = u, b = n.useCallback(() => {
      (0, f.copy)(p), _.default.track(m.AnalyticEvents.COPY_INSTANT_INVITE, {
        server: c.default.getGuildId(),
        channel: null == D ? void 0 : D.id,
        channel_type: null == D ? void 0 : D.type,
        location: R,
        code: j,
        guild_scheduled_event_id: null == y ? void 0 : y.id
      })
    }, [p, D, R, j, y]);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(A, {
        value: p,
        autoFocus: s,
        onCopy: b,
        disabled: G
      }), E ? (0, a.jsx)("div", {
        className: v.temporaryMembershipContainerBackground,
        children: (0, a.jsx)(o.FormSwitch, {
          className: v.temporaryMembershipContainer,
          value: (0, T.hasFlag)(g, i.GuildInviteFlags.IS_GUEST_INVITE),
          onChange: e => S((0, T.setFlag)(g, i.GuildInviteFlags.IS_GUEST_INVITE, e)),
          note: x.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
          disabled: G,
          hideBorder: !0,
          children: L ? x.default.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : x.default.Messages.GRANT_GUEST_MEMBERSHIP
        })
      }) : null, l || B ? null : (0, a.jsxs)(o.Text, {
        variant: "text-xs/normal",
        className: r()(C.marginTop8, v.footerText),
        children: [(0, h.maxAgeString)(V, U), " ", s ? (0, a.jsx)(o.Anchor, {
          onClick: () => M(N.InstantInviteModalPages.SETTINGS),
          children: x.default.Messages.INVITE_EDIT_LINK
        }) : null]
      }), !l && s && B ? (0, a.jsxs)(o.Text, {
        variant: "text-xs/normal",
        className: r()(C.marginTop8, v.footerText),
        children: [x.default.Messages.INVITE_VANITY_USED, " ", (0, a.jsx)(o.Anchor, {
          onClick: () => M(N.InstantInviteModalPages.SETTINGS),
          children: x.default.Messages.INVITE_EDIT_LINK
        })]
      }) : null, null != O ? (0, a.jsx)(I.InviteErrorMessage, {
        guild: t,
        error: O,
        onClose: d
      }) : null]
    })
  }