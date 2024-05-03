"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("399606"),
  o = n("481060"),
  u = n("287734"),
  d = n("654904"),
  c = n("314897"),
  f = n("271383"),
  h = n("496675"),
  m = n("19780"),
  p = n("594174"),
  E = n("626135"),
  C = n("906605"),
  g = n("574176"),
  S = n("833858"),
  _ = n("223135"),
  T = n("625938"),
  I = n("981631"),
  A = n("689938"),
  N = n("8474");
t.default = e => {
  let {
    hangStatusActivity: t,
    userId: s,
    channel: v,
    previewIsOpen: x
  } = e, {
    enableHangStatus: M
  } = g.HangStatusExperiment.useExperiment({
    guildId: v.guild_id,
    location: "HangStatusPopout"
  }), R = (0, r.useStateFromStores)([c.default], () => c.default.getId()), L = (0, r.useStateFromStores)([p.default], () => p.default.getUser(s)), y = (0, r.useStateFromStores)([m.default], () => m.default.getChannelId() === v.id), O = (0, r.useStateFromStores)([h.default], () => h.default.can(I.Permissions.CONNECT, v)), j = (0, r.useStateFromStores)([f.default], () => null != v.guild_id && null != L ? f.default.getMember(v.guild_id, s) : null), P = l.useMemo(() => null != L ? (0, d.getPreviewAvatar)(void 0, j, L, {
    size: 40
  }) : void 0, [j, L]);
  return (l.useEffect(() => {
    M && null != t && x && null != L && R !== s && E.default.track(I.AnalyticEvents.VIEW_HANG_STATUS, {
      source: "HangStatusPopout",
      guild_id: v.guild_id,
      channel_id: v.id
    })
  }, [M, t, x, L, R, s, v]), M && null != L) ? R === s ? (0, a.jsx)("div", {
    className: i()(N.popoutWrapper, {
      [N.mounted]: x
    }),
    children: (0, a.jsx)(T.HangStatusPopout, {
      currentStatus: t
    })
  }) : null == t ? null : (0, a.jsx)("div", {
    className: i()(N.popoutWrapper, {
      [N.mounted]: x
    }),
    children: (0, a.jsxs)("div", {
      className: N.popout,
      children: [(0, a.jsxs)("div", {
        className: N.contentContainer,
        children: [(0, a.jsxs)("div", {
          className: N.statusGroup,
          children: [(0, a.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: A.default.Messages.STATUS_LEAD_IN_JUST
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: "text-normal",
            className: N.statusText,
            children: (0, S.getHangStatusText)(t)
          })]
        }), (0, a.jsxs)("div", {
          className: N.iconGroup,
          children: [(0, a.jsx)(_.default, {
            className: N.statusIcon,
            hangStatusActivity: t
          }), (0, a.jsxs)("div", {
            className: N.avatarWrapper,
            children: [(0, a.jsx)(o.Avatar, {
              className: N.avatar,
              size: o.AvatarSizes.SIZE_40,
              src: P,
              "aria-hidden": !0
            }), (0, a.jsx)("div", {
              className: N.outline
            })]
          })]
        })]
      }), !y && O ? (0, a.jsx)(o.Button, {
        className: N.cta,
        size: o.Button.Sizes.SMALL,
        onClick: () => {
          !y && O && (u.default.selectVoiceChannel(v.id), E.default.track(I.AnalyticEvents.HANG_STATUS_CTA_CLICKED, {
            source: "HangStatusPopout",
            guild_id: v.guild_id,
            channel_id: v.id
          }))
        },
        children: A.default.Messages.CUSTOM_HANG_STATUS_CTA
      }) : null, y ? (0, a.jsx)(o.Button, {
        className: N.cta,
        size: o.Button.Sizes.SMALL,
        onClick: () => {
          let e = t.state;
          e === I.HangStatusTypes.CUSTOM ? (0, o.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("1631")]).then(n.bind(n, "333541"));
            return n => (0, a.jsx)(e, {
              ...n,
              startingText: t.details,
              startingEmoji: t.emoji
            })
          }) : (0, C.updateHangStatus)(e, !0), E.default.track(I.AnalyticEvents.SWIPE_HANG_STATUS, {
            guild_id: v.guild_id,
            channel_id: v.id,
            media_session_id: m.default.getMediaSessionId()
          })
        },
        children: A.default.Messages.CUSTOM_HANGS_STATUS_COPY_CTA
      }) : null]
    })
  }) : null
}