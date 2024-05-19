"use strict";
n.r(t), n.d(t, {
  ClanUpsellButton: function() {
    return _
  },
  ClanUpsellInviteByline: function() {
    return p
  },
  ClanUpsellMessage: function() {
    return E
  },
  ClanUpsellTitle: function() {
    return g
  },
  default: function() {
    return S
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("658252"),
  i = n("481060"),
  r = n("100527"),
  o = n("428695"),
  u = n("703656"),
  d = n("970606"),
  c = n("308083"),
  f = n("981631"),
  h = n("921944"),
  m = n("689938"),
  C = n("207030");

function p() {
  return (0, l.jsxs)("div", {
    className: C.inviteContainer,
    children: [(0, l.jsx)(s.EnvelopeIcon, {
      color: "currentColor",
      height: 12,
      width: 12,
      className: C.envelope
    }), (0, l.jsx)(i.Text, {
      variant: "text-xs/bold",
      className: C.invite,
      children: m.default.Messages.CLAN_UPSELL_INVITE
    })]
  })
}

function g(e) {
  let {
    title: t
  } = e;
  return (0, l.jsx)(l.Fragment, {
    children: (0, l.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      className: C.title,
      children: t
    })
  })
}

function E(e) {
  let {
    message: t
  } = e;
  return (0, l.jsx)(i.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: C.message,
    children: t
  })
}

function _(e) {
  let {
    onClick: t
  } = e;
  return (0, l.jsx)(i.Button, {
    fullWidth: !0,
    look: i.ButtonLooks.FILLED,
    size: i.ButtonSizes.SMALL,
    color: i.ButtonColors.BRAND_NEW,
    className: C.button,
    onClick: t,
    children: (0, l.jsx)(i.Text, {
      variant: "text-sm/semibold",
      color: "always-white",
      children: m.default.Messages.CHECK_IT_OUT
    })
  })
}

function S(e) {
  let {
    guild: t,
    markAsDismissed: n,
    defaultGameId: s
  } = e;
  a.useEffect(() => {
    (0, d.trackClanAdminInviteViewed)({
      guildId: t.id,
      location: r.default.GUILD_CHANNEL_LIST
    })
  }, [t.id]);
  let i = s === c.GENSHIN_ID ? m.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_GENSHIN_TITLE : s === c.VALORANT_ID ? m.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_VALORANT_TITLE : m.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_TITLE,
    p = a.useCallback(() => (0, l.jsx)(E, {
      message: m.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE
    }), []),
    S = a.useCallback(() => (0, l.jsx)(g, {
      title: i
    }), [i]),
    I = a.useCallback(() => {
      (0, d.trackClanAdminInviteClicked)({
        guildId: t.id,
        location: r.default.GUILD_CHANNEL_LIST
      }), (0, u.transitionTo)(f.Routes.GUILD_DISCOVERY)
    }, [t.id]),
    N = a.useCallback(() => (0, l.jsx)(_, {
      onClick: I
    }), [I]);
  return (0, l.jsx)(o.default, {
    className: C.notice,
    guild: t,
    onDismissed: () => n(h.ContentDismissActionType.DISMISS),
    title: S,
    message: p,
    cta: N,
    trackingSource: f.ChannelNoticeCtaSources.CLAN_ADMIN_UPSELL,
    type: f.ChannelNoticeTypes.CLAN_ADMIN_UPSELL
  })
}