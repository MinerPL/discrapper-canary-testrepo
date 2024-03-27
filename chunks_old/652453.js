"use strict";
n.r(t), n.d(t, {
  RawInviteCopyInputConnected: function() {
    return x
  },
  InviteCopyInput: function() {
    return M
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("498574"),
  u = n("446674"),
  o = n("862337"),
  d = n("77078"),
  c = n("162771"),
  h = n("102985"),
  f = n("599110"),
  I = n("306160"),
  g = n("568734"),
  E = n("354023"),
  v = n("865699"),
  T = n("91366"),
  m = n("49111"),
  p = n("782340"),
  _ = n("696862"),
  N = n("182893"),
  C = n("125047"),
  S = n("890957");
let x = u.default.connectStores([h.default], () => ({
    hideValue: h.default.hideInstantInvites
  }))(e => {
    let {
      value: t,
      autoFocus: n,
      hideValue: s,
      onCopy: r,
      disabled: u
    } = e, [c, h] = a.useState(!1), [f, g] = a.useState(!1), E = a.useMemo(() => new o.DelayedCall(1e3, () => g(!1)), [g]);
    return a.useEffect(() => () => {
      E.cancel()
    }, [E]), (0, l.jsxs)("div", {
      className: i(N.input, C.flexJustifyBetween, C.flexCenter, {
        [N.success]: f,
        [N.focused]: c
      }),
      children: [(0, l.jsx)(d.TextInput, {
        className: _.copyInput,
        name: "invite",
        value: s ? p.default.Messages.INSTANT_INVITE_HIDDEN : t,
        editable: !1,
        inputClassName: _.input,
        autoFocus: n,
        onFocus: () => n ? h(!0) : null,
        onBlur: () => n ? h(!1) : null,
        spellCheck: "false",
        onClick: e => e.currentTarget.select(),
        "aria-label": p.default.Messages.FORM_LABEL_INVITE_LINK,
        disabled: u
      }), I.SUPPORTS_COPY ? (0, l.jsx)(d.Button, {
        size: d.Button.Sizes.SMALL,
        color: f ? d.Button.Colors.GREEN : d.Button.Colors.BRAND,
        className: _.copyButton,
        onClick: () => {
          g(!0), E.delay(), r(t)
        },
        disabled: u,
        children: f ? p.default.Messages.INVITE_COPIED : p.default.Messages.COPY
      }) : null]
    })
  }),
  M = e => {
    let {
      guild: t,
      noInvitesAvailable: n,
      showFriends: s,
      onClose: u,
      modalState: o,
      isGuestInviteCreationToggleEnabled: h,
      inviteFlags: N,
      setInviteFlags: C,
      showGuestInviteToggleForCurrentVoiceChannel: M,
      copyValue: A,
      changePage: y,
      inviteChannel: R,
      source: L,
      code: j,
      guildScheduledEvent: V,
      disabled: O
    } = e, {
      maxAge: D,
      maxUses: w,
      networkError: U,
      showVanityURL: G
    } = o, P = a.useCallback(() => {
      (0, I.copy)(A), f.default.track(m.AnalyticEvents.COPY_INSTANT_INVITE, {
        server: c.default.getGuildId(),
        channel: null == R ? void 0 : R.id,
        channel_type: null == R ? void 0 : R.type,
        location: L,
        code: j,
        guild_scheduled_event_id: null == V ? void 0 : V.id
      })
    }, [A, R, L, j, V]);
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(x, {
        value: A,
        autoFocus: s,
        onCopy: P,
        disabled: O
      }), h ? (0, l.jsx)("div", {
        className: _.temporaryMembershipContainerBackground,
        children: (0, l.jsx)(d.FormSwitch, {
          className: _.temporaryMembershipContainer,
          value: (0, g.hasFlag)(N, r.GuildInviteFlags.IS_GUEST_INVITE),
          onChange: e => C((0, g.setFlag)(N, r.GuildInviteFlags.IS_GUEST_INVITE, e)),
          note: p.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
          disabled: O,
          hideBorder: !0,
          children: M ? p.default.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : p.default.Messages.GRANT_GUEST_MEMBERSHIP
        })
      }) : null, n || G ? null : (0, l.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: i(S.marginTop8, _.footerText),
        children: [(0, E.maxAgeString)(D, w), " ", s ? (0, l.jsx)(d.Anchor, {
          onClick: () => y(T.InstantInviteModalPages.SETTINGS),
          children: p.default.Messages.INVITE_EDIT_LINK
        }) : null]
      }), !n && s && G ? (0, l.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: i(S.marginTop8, _.footerText),
        children: [p.default.Messages.INVITE_VANITY_USED, " ", (0, l.jsx)(d.Anchor, {
          onClick: () => y(T.InstantInviteModalPages.SETTINGS),
          children: p.default.Messages.INVITE_EDIT_LINK
        })]
      }) : null, null != U ? (0, l.jsx)(v.InviteErrorMessage, {
        guild: t,
        error: U,
        onClose: u
      }) : null]
    })
  }