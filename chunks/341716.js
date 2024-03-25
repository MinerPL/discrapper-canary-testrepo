"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("627445"),
  o = n.n(r),
  u = n("866227"),
  d = n.n(u),
  c = n("77078"),
  E = n("427953"),
  f = n("550766"),
  _ = n("478272"),
  T = n("812204"),
  I = n("685665"),
  m = n("996554"),
  N = n("574073"),
  p = n("38600"),
  S = n("981601"),
  A = n("64791"),
  C = n("315102"),
  h = n("888400"),
  g = n("927632"),
  M = n("195483"),
  O = n("49111"),
  R = n("406291"),
  v = n("782340"),
  L = n("356296");

function P(e) {
  let {
    width: t = 6,
    height: n = 10,
    color: a = "currentColor",
    className: l,
    foreground: i
  } = e;
  return (0, s.jsx)("svg", {
    className: l,
    width: t,
    height: n,
    viewBox: "0 0 6 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, s.jsx)("path", {
      d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
      className: i,
      fill: a
    })
  })
}

function D(e) {
  var t;
  let n;
  let {
    message: l,
    channel: r
  } = e, {
    analyticsLocations: u
  } = (0, I.default)(T.default.EXECUTED_COMMAND), D = a.useMemo(() => (e, t, n) => (o(null != r && null != t, "ExecuteCommand: user and channel cannot be undefined"), (0, s.jsx)(S.default, {
    ...e,
    channelId: r.id,
    messageId: l.id,
    guildId: r.guild_id,
    userId: t.id,
    newAnalyticsLocations: n
  })), [r, l.id]), x = a.useMemo(() => e => (o(null != r, "ExecutedCommand: channel cannot be null"), (0, s.jsx)(g.default, {
    ...e,
    channel: r,
    messageId: l.id,
    interactionData: l.interactionData
  })), [r, l.id, l.interactionData]), y = (0, N.useNullableUserAuthor)(null === (t = l.interaction) || void 0 === t ? void 0 : t.user, r), U = a.useMemo(() => e.compact ? (0, p.default)((0, h.dateFormat)(d(), "LT")) : null, [e.compact]), j = (0, E.useIsActivitiesInTextEnabled)(r.id, "ExecutedCommand"), {
    enabled: b
  } = m.AppLauncherOnboardingExperiment.useExperiment({
    location: "Executed Command"
  }, {
    autoTrackExposure: !1
  }), G = l.interaction;
  if (null == G || null == y) return null;
  let B = () => {
    let t = function(e, t) {
        let n, {
          message: a,
          compact: l,
          channel: r,
          isInteractionUserBlocked: o,
          showAvatarPopout: u,
          onClickAvatar: d,
          onUserContextMenu: E,
          onPopoutRequestClose: f
        } = e;
        if (l && null == a.activityInstance || o) return (0, s.jsx)("div", {
          className: L.replyBadge,
          children: (0, s.jsx)(P, {
            className: L.commandIcon
          })
        });
        if (null != a.interaction) {
          var _, T, I;
          let e = (0, N.getUserAuthor)(a.interaction.user, r);
          n = null !== (I = C.default.getGuildMemberAvatarURL({
            avatar: null !== (_ = e.guildMemberAvatar) && void 0 !== _ ? _ : void 0,
            userId: a.interaction.user.id,
            guildId: null !== (T = null == r ? void 0 : r.guild_id) && void 0 !== T ? T : ""
          })) && void 0 !== I ? I : void 0
        }
        let m = () => null != a.interaction && function(e) {
          let {
            user: t,
            guildId: n,
            guildAvatar: a,
            onClick: l,
            onContextMenu: r,
            onMouseDown: o
          } = e;
          return (0, s.jsx)("img", {
            alt: "",
            src: null != a ? a : t.getAvatarURL(n, 16),
            onClick: l,
            onContextMenu: r,
            onMouseDown: o,
            className: i({
              [L.executedCommandAvatar]: !0,
              [L.clickable]: null != l
            })
          })
        }({
          user: a.interaction.user,
          guildId: r.guild_id,
          guildAvatar: n,
          onClick: d,
          onContextMenu: E
        });
        return null != t && null != u ? (0, s.jsx)(c.Popout, {
          renderPopout: t,
          shouldShow: u,
          position: "right",
          onRequestClose: f,
          children: m
        }) : m()
      }(e, e => D(e, G.user, [T.default.AVATAR])),
      n = function(e, t, n) {
        var a;
        let {
          message: l,
          channel: i,
          showUsernamePopout: r,
          onClickUsername: o,
          onUserContextMenu: u,
          onPopoutRequestClose: d
        } = e;
        return (0, s.jsx)(M.default, {
          compact: !0,
          author: t,
          message: l,
          channel: i,
          userOverride: null === (a = l.interaction) || void 0 === a ? void 0 : a.user,
          showPopout: r,
          renderPopout: n,
          onClick: o,
          onContextMenu: u,
          onPopoutRequestClose: d
        })
      }(e, y, e => D(e, G.user));
    return (0, s.jsxs)(a.Fragment, {
      children: [t, n]
    }, "user")
  };
  if ((null == l ? void 0 : l.activityInstance) !== null) {
    let e = () => {
      (0, _.default)({
        channel: r,
        guildId: r.guild_id,
        locationObject: {
          page: r.isPrivate() ? O.AnalyticsPages.DM_CHANNEL : O.AnalyticsPages.GUILD_CHANNEL,
          section: O.AnalyticsSections.CHANNEL_TEXT_AREA,
          object: O.AnalyticsObjects.APP_COMMAND,
          objectType: O.AnalyticsObjectTypes.ACTIVITY
        },
        openInPopout: !1,
        enableSelectedTextChannelInvite: !0,
        analyticsLocations: u
      }), (0, f.fetchShelf)({
        guildId: r.guild_id
      })
    };
    n = j ? v.default.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED.format({
      userHook: B,
      activityHook: () => (0, s.jsx)(c.Clickable, {
        tag: "span",
        onClick: e,
        children: (0, s.jsx)("div", {
          className: i(L.commandName, L.clickable),
          children: v.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY
        })
      })
    }) : v.default.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED_CANNOT_LAUNCH.format({
      userHook: B
    })
  } else n = v.default.Messages.APPLICATION_COMMAND_USED_SHORT.format({
    userHook: B,
    commandHook: () => {
      let t = function(e, t, n) {
        let {
          showDataPopout: a,
          message: l,
          onClickCommand: r,
          onPopoutRequestClose: o
        } = e, u = l.interaction.displayName;
        return (0, s.jsx)(c.Popout, {
          renderPopout: t,
          shouldShow: a,
          position: "top",
          align: "center",
          onRequestClose: o,
          animation: c.Popout.Animation.FADE,
          positionKey: null != l.interactionData ? "ready" : "loading",
          children: e => {
            let {
              onClick: t,
              ...a
            } = e;
            return l.type === O.MessageTypes.CHAT_INPUT_COMMAND || l.type === O.MessageTypes.INTERACTION_PREMIUM_UPSELL ? (0, s.jsx)(c.Clickable, {
              ...a,
              tag: "span",
              onClick: r,
              children: (0, s.jsxs)("div", {
                className: i({
                  [L.commandName]: !n
                }, {
                  [L.appLauncherOnboardingCommandName]: n
                }, L.clickable),
                children: [n && (0, s.jsx)(A.default, {
                  height: 10,
                  width: 10,
                  className: L.appsIcon
                }), n ? u : R.COMMAND_SENTINEL + u]
              })
            }) : (0, s.jsx)("div", {
              className: L.commandName,
              children: u
            })
          }
        })
      }(e, x, b);
      return (0, s.jsx)(a.Fragment, {
        children: t
      }, "command")
    }
  });
  return (0, s.jsx)(I.AnalyticsLocationProvider, {
    value: u,
    children: (0, s.jsx)("div", {
      className: i(L.repliedMessage, L.executedCommand, U),
      "aria-hidden": !e.compact,
      children: n
    })
  })
}