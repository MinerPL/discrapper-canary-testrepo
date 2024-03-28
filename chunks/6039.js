"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("703656"),
  o = n("430824"),
  u = n("612744"),
  d = n("449934"),
  c = n("768581"),
  f = n("693546"),
  E = n("863249"),
  h = n("944163"),
  _ = n("246364"),
  C = n("937111"),
  m = n("523924"),
  S = n("390500"),
  I = n("200305"),
  p = n("981631"),
  T = n("756286"),
  g = n("689938"),
  A = n("165069");
t.default = e => {
  var t;
  let {
    guildId: n,
    inviteCode: N
  } = e, [v, O] = s.useState(T.WaveStates.INITIAL), R = (0, l.useStateFromStores)([h.default], () => h.default.get(n)), L = (0, l.useStateFromStores)([C.default], () => C.default.getRequest(n)), P = (0, l.useStateFromStores)([o.default], () => o.default.getGuild(n)), {
    hasFetchedRequestToJoinGuilds: M,
    guildPreviewDisabled: y
  } = (0, l.useStateFromStoresObject)([C.default], () => ({
    hasFetchedRequestToJoinGuilds: C.default.hasFetchedRequestToJoinGuilds,
    guildPreviewDisabled: C.default.getJoinRequestGuild(n)
  }));
  s.useEffect(() => {
    null != P && (0, r.transitionTo)(p.Routes.CHANNEL(n))
  }, [P, n]), s.useEffect(() => {
    !M && f.default.fetchRequestToJoinGuilds()
  }, [M]);
  let D = s.useCallback(e => {
      O(t => Math.max(t, e))
    }, []),
    b = (e, t) => () => {
      (0, i.openModal)(n => (0, a.jsx)(i.ConfirmModal, {
        header: g.default.Messages.MEMBER_VERIFICATION_CONFIRM_LEAVE_TITLE,
        cancelText: g.default.Messages.NEVERMIND,
        onConfirm: t,
        confirmText: g.default.Messages.YES_TEXT,
        confirmButtonColor: i.Button.Colors.RED,
        ...n,
        children: (0, a.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: e
        })
      }))
    },
    x = async e => {
      await E.default.submitVerificationForm(n, e)
    }, U = () => {
      f.default.resetGuildJoinRequest(n)
    }, j = b(g.default.Messages.LEAVE_SERVER_BODY.format({
      name: null == P ? void 0 : P.toString()
    }), () => {
      O(Math.max(v, T.WaveStates.FILLING)), f.default.removeGuildJoinRequest(n), (0, r.transitionTo)(p.Routes.ME)
    }), G = (null == R ? void 0 : null === (t = R.guild) || void 0 === t ? void 0 : t.splash) != null ? c.default.getGuildSplashURL({
      id: R.guild.id,
      splash: R.guild.splash
    }) : (0, d.getArtForPath)();
  return (0, a.jsx)("div", {
    className: A.page,
    children: (0, a.jsxs)(u.default, {
      embedded: !0,
      splash: G,
      waveState: v,
      showLogo: !1,
      updateWaveState: D,
      children: [(0, a.jsx)("div", {
        className: A.dragRegion
      }), (0, a.jsx)("div", {
        className: A.contentWrapper,
        children: (() => {
          switch (null == L ? void 0 : L.applicationStatus) {
            case _.GuildJoinRequestApplicationStatuses.SUBMITTED:
              return (0, a.jsx)(S.default, {
                onCancel: b(g.default.Messages.MEMBER_VERIFICATION_CANCEL_PENDING_APPLICATION_MODAL_TITLE, U),
                onLeave: j,
                guild: y
              });
            case _.GuildJoinRequestApplicationStatuses.REJECTED:
              return (0, a.jsx)(m.default, {
                reapplyText: g.default.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
                onReapply: U,
                confirmText: g.default.Messages.LEAVE_SERVER,
                onConfirm: j,
                rejectionReason: null == L ? void 0 : L.rejectionReason,
                guild: y
              });
            default:
              return (0, a.jsx)(I.default, {
                guildId: n,
                inviteCode: N,
                onComplete: x
              })
          }
        })()
      })]
    })
  })
}