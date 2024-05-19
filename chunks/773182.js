"use strict";
n.r(t), n.d(t, {
  GuildsBarClanAdminUpsellPopout: function() {
    return L
  },
  GuildsBarClanUserUpsellPopout: function() {
    return A
  },
  GuildsBarFixedFooter: function() {
    return v
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("266067"),
  o = n("727075"),
  u = n("524437"),
  d = n("481060"),
  c = n("350810"),
  f = n("100527"),
  h = n("970606"),
  m = n("824991"),
  C = n("878241"),
  p = n("243778"),
  g = n("602147"),
  E = n("981631"),
  _ = n("308083"),
  S = n("921944"),
  I = n("689938"),
  N = n("41004");

function T(e) {
  let {
    title: t,
    message: n,
    dismissibleContent: s,
    defaultGameId: i,
    onPopoutVisible: u,
    onClick: f,
    children: h,
    isEligibleForUpsell: C = !0,
    withInviteIcon: I = !0
  } = e, T = (0, r.useLocation)(), [A, L] = (0, p.useSelectedDismissibleContent)([s], S.DismissibleContentGroupName.SIDEBAR), v = A !== s, x = (0, c.default)(), R = C && !x && !v && T.pathname !== E.Routes.GUILD_DISCOVERY;
  a.useEffect(() => {
    R && u()
  }, [R, u]);
  let M = a.useMemo(() => {
      switch (i) {
        case _.VALORANT_ID:
          return N.valorantBackgroundImage;
        case _.GENSHIN_ID:
          return N.genshinBackgroundImage;
        default:
          return
      }
    }, [i]),
    y = a.useCallback(() => {
      L(S.ContentDismissActionType.TAKE_ACTION), f(), (0, g.handleDiscoveryButtonClick)()
    }, [L, f]),
    O = a.useCallback(e => {
      e(), L(S.ContentDismissActionType.USER_DISMISS)
    }, [L]);
  return (0, l.jsxs)("div", {
    className: N.container,
    children: [(0, l.jsx)(d.Popout, {
      shouldShow: R,
      renderPopout: e => {
        let {
          closePopout: a
        } = e;
        return (0, l.jsxs)("div", {
          className: N.popoutContainer,
          children: [(0, l.jsx)("div", {
            className: M
          }), (0, l.jsx)(d.Clickable, {
            onClick: () => O(a),
            className: N.close,
            children: (0, l.jsx)(o.CloseSmallIcon, {
              width: 16,
              height: 16,
              color: d.tokens.colors.WHITE
            })
          }), (0, l.jsxs)("div", {
            className: N.popoutContent,
            children: [I && (0, l.jsx)(m.ClanUpsellInviteByline, {}), (0, l.jsx)(m.ClanUpsellTitle, {
              title: t
            }), (0, l.jsx)(m.ClanUpsellMessage, {
              message: n
            }), (0, l.jsx)(m.ClanUpsellButton, {
              onClick: y
            })]
          }), (0, l.jsx)("div", {
            className: N.popoutCaret
          })]
        })
      },
      position: "top",
      animationPosition: "top",
      align: "left",
      spacing: 16,
      children: e => (0, l.jsx)("div", {
        ...e,
        className: N.popoutAnchor
      })
    }), h({
      onClick: y
    })]
  })
}

function A(e) {
  let {
    defaultGameId: t,
    children: n
  } = e, s = a.useCallback(() => {
    (0, h.trackClanUserInviteViewed)({
      location: f.default.GUILDS_LIST
    })
  }, []), i = a.useCallback(() => {
    (0, h.trackClanUserInviteClicked)({
      location: f.default.GUILDS_LIST
    })
  }, []), [r, o] = a.useMemo(() => {
    switch (t) {
      case _.GENSHIN_ID:
        return [I.default.Messages.CLAN_GUILD_LIST_USER_UPSELL_GENSHIN_TITLE, I.default.Messages.CLAN_GUILD_LIST_USER_UPSELL_GENSHIN_MESSAGE];
      case _.VALORANT_ID:
        return [I.default.Messages.CLAN_GUILD_LIST_USER_UPSELL_VALORANT_TITLE, I.default.Messages.CLAN_GUILD_LIST_USER_UPSELL_VALORANT_MESSAGE];
      default:
        return [void 0, void 0]
    }
  }, [t]);
  return (0, l.jsx)(T, {
    title: r,
    message: o,
    dismissibleContent: u.DismissibleContent.GUILD_LIST_CLAN_USER_UPSELL,
    defaultGameId: t,
    onClick: i,
    onPopoutVisible: s,
    withInviteIcon: !1,
    children: n
  })
}

function L(e) {
  let {
    defaultGameId: t,
    children: n
  } = e, s = (0, C.useGuildsEligibleForClanConversion)({
    location: "GuildsBarClanAdminUpsellPopout"
  }).length > 0, i = a.useCallback(() => {
    (0, h.trackClanAdminInviteViewed)({
      location: f.default.GUILDS_LIST
    })
  }, []), r = a.useCallback(() => {
    (0, h.trackClanAdminInviteClicked)({
      location: f.default.GUILDS_LIST
    })
  }, []), [o, d] = a.useMemo(() => {
    switch (t) {
      case _.GENSHIN_ID:
        return [I.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_GENSHIN_TITLE, I.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE];
      case _.VALORANT_ID:
        return [I.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_VALORANT_TITLE, I.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE];
      default:
        return [void 0, void 0]
    }
  }, [t]);
  return (0, l.jsx)(T, {
    title: o,
    message: d,
    dismissibleContent: u.DismissibleContent.GUILD_LIST_CLAN_ADMIN_UPSELL,
    defaultGameId: t,
    onClick: r,
    isEligibleForUpsell: s,
    onPopoutVisible: i,
    children: n
  })
}

function v(e) {
  let {
    hideGradient: t,
    children: n
  } = e;
  return (0, l.jsxs)("div", {
    className: N.footer,
    children: [(0, l.jsx)("div", {
      className: i()(N.gradient, {
        [N.gradientHidden]: t
      })
    }), n]
  })
}