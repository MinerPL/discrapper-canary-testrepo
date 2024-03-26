"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("424973"), n("222007"), n("881410");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("627445"),
  o = n.n(r),
  u = n("446674"),
  d = n("769846"),
  c = n("77078"),
  E = n("970728"),
  f = n("191225"),
  _ = n("969380"),
  T = n("817039"),
  I = n("812204"),
  m = n("685665"),
  N = n("442939"),
  p = n("419830"),
  S = n("813006"),
  C = n("42203"),
  A = n("305961"),
  h = n("957255"),
  g = n("697218"),
  M = n("174622"),
  O = n("98292"),
  R = n("811305"),
  L = n("159885"),
  v = n("793079"),
  P = n("49111"),
  D = n("91366"),
  x = n("782340"),
  y = n("257752");
let U = (0, L.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
  j = (0, L.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
  b = (0, L.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);

function G(e) {
  let {
    members: t,
    membersOnline: n,
    isLarge: a,
    isStacked: l
  } = e, r = [];
  return null != n && n > 0 && r.push((0, s.jsxs)("div", {
    className: y.statusWrapper,
    children: [(0, s.jsx)("i", {
      className: y.statusOnline
    }), (0, s.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: y.count,
      children: x.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
        membersOnline: n
      })
    })]
  }, "onlineCount")), null != t && r.push((0, s.jsxs)("div", {
    className: y.statusWrapper,
    children: [(0, s.jsx)("i", {
      className: y.statusOffline
    }), (0, s.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: y.count,
      children: x.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
        count: t
      })
    })]
  }, "memberCount")), (0, s.jsx)("div", {
    className: i(y.statusCounts, {
      [y.large]: a,
      [y.stacked]: l
    }),
    children: r
  })
}

function B(e) {
  let {
    channel: t,
    guild: n,
    isStacked: a,
    hasEnded: l
  } = e;
  if (null != t && null != n) {
    let e = (0, p.getChannelIconComponent)(t, n);
    return (0, s.jsxs)("div", {
      className: i(y.channel, {
        [y.stacked]: a,
        [y.ended]: l
      }),
      children: [null != e ? (0, s.jsx)(e, {
        className: y.channelIcon,
        width: 16,
        height: 16
      }) : null, (0, s.jsx)(O.default, {
        children: (0, s.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: x.default.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
            channelName: t.name,
            serverName: n.name
          })
        })
      })]
    })
  }
  return null != n ? (0, s.jsx)("div", {
    className: i(y.channel, {
      [y.stacked]: a,
      [y.ended]: l
    }),
    children: (0, s.jsx)(O.default, {
      children: (0, s.jsx)(c.Text, {
        variant: "text-xs/normal",
        children: x.default.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
          guildName: n.name
        })
      })
    })
  }) : null
}

function k(e) {
  var t, n;
  let l, r, {
      invite: d,
      getAcceptInviteContext: p
    } = e,
    {
      approximate_member_count: O,
      approximate_presence_count: L,
      target_type: k,
      target_application: F
    } = d;
  o(k === D.InviteTargetTypes.EMBEDDED_APPLICATION && null != F, "invalid application invite");
  let w = a.useRef(null),
    [H, V] = a.useState(!1),
    [Y, K] = a.useState(!1);
  a.useEffect(() => {
    let e = new ResizeObserver(() => (function() {
        var e;
        let t = null === (e = w.current) || void 0 === e ? void 0 : e.offsetWidth;
        null != t && (V(t < b + j), K(t <= 2 * U))
      })()),
      t = w.current;
    return null != t && e.observe(t), () => {
      e.disconnect()
    }
  }, [w, V, K]);
  let W = (0, u.useStateFromStores)([A.default], () => null != d.guild ? A.default.getGuild(d.guild.id) : null, [d]),
    z = (0, N.default)([F.id])[0],
    Q = (0, u.useStateFromStores)([f.default], () => {
      var e;
      return (null == d ? void 0 : d.channel) != null && (null === (e = f.default.getSelfEmbeddedActivityForChannel(d.channel.id)) || void 0 === e ? void 0 : e.applicationId) === F.id
    }),
    Z = (0, u.useStateFromStores)([f.default], () => {
      var e;
      let t = (null === (e = d.channel) || void 0 === e ? void 0 : e.id) != null ? f.default.getEmbeddedActivitiesForChannel(d.channel.id) : [];
      return t.some(e => {
        let {
          applicationId: t
        } = e;
        return F.id === t
      })
    }),
    J = C.default.getChannel(null === (t = d.channel) || void 0 === t ? void 0 : t.id),
    q = (0, u.useStateFromStores)([h.default], () => null != J && h.default.can(P.Permissions.USE_EMBEDDED_ACTIVITIES, J), [J]),
    {
      analyticsLocations: X
    } = (0, m.default)(I.default.INVITE_EMBED),
    $ = (0, _.default)({
      applicationId: F.id,
      size: U
    }),
    ee = (0, u.useStateFromStoresArray)([f.default], () => null != J ? f.default.getEmbeddedActivitiesForChannel(J.id).filter(e => e.applicationId === F.id).flatMap(e => Array.from(e.userIds)) : [], [J, F.id]),
    et = (0, u.useStateFromStoresArray)([g.default], () => ee.map(e => g.default.getUser(e)), [ee]),
    en = d.state === P.InviteStates.ACCEPTING,
    es = null != W;
  if (null == W) {
    if (null == d.guild) return (0, s.jsx)(v.default, {});
    W = new S.default(d.guild)
  }
  let ea = es && !q || es && Q,
    el = () => {
      E.default.acceptInviteAndTransitionToInviteChannel({
        inviteKey: d.code,
        context: p("Invite Button Embed"),
        analyticsLocations: X
      })
    };
  return (es && Q && (l = x.default.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY), !q && (l = x.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS), r = Q ? x.default.Messages.INVITE_EMBED_JOINED : Z || !es ? x.default.Messages.JOIN : x.default.Messages.START, null == d.code || "" === d.code) ? null : (0, s.jsxs)("div", {
    className: y.container,
    ref: w,
    children: [(0, s.jsx)("div", {
      className: i(y.imgContainer, {
        [y.large]: H,
        [y.stacked]: Y
      }),
      children: (0, s.jsx)(T.default, {
        imageBackground: $,
        applicationName: null !== (n = null == z ? void 0 : z.name) && void 0 !== n ? n : "",
        imageClassName: i(y.img, {
          [y.large]: H,
          [y.stacked]: Y
        }),
        imageNotFoundClassName: i(y.brokenImg, {
          [y.large]: H,
          [y.stacked]: Y
        })
      })
    }), (0, s.jsxs)(M.default, {
      className: i(y.content, {
        [y.large]: H,
        [y.stacked]: Y
      }),
      children: [(0, s.jsxs)("div", {
        className: y.info,
        children: [(0, s.jsx)(c.FormTitle, {
          children: es ? x.default.Messages.EMBEDDED_ACTIVITIES_EMBED_TITLE_INVITED_TO_JOIN : x.default.Messages.INVITE_BUTTON_TITLE_INVITED
        }), (0, s.jsx)(c.Heading, {
          className: y.heading,
          variant: "heading-xl/semibold",
          children: null == z ? void 0 : z.name
        }), (0, s.jsx)(B, {
          channel: J,
          guild: W,
          isStacked: Y,
          hasEnded: !Z
        })]
      }), (0, s.jsxs)("div", {
        className: i(y.currentState, {
          [y.large]: H,
          [y.split]: !Z && Y
        }),
        children: [!Z && es ? (0, s.jsxs)("div", {
          className: i(y.endedNote, {
            [y.large]: H
          }),
          children: [(0, s.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: x.default.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED
          }), (0, s.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: x.default.Messages.EMBEDDED_ACTIVITIES_EMBED_START
          })]
        }) : null, es ? null : (0, s.jsx)(G, {
          members: O,
          membersOnline: L,
          isLarge: H,
          isStacked: Y
        }), (0, s.jsxs)("div", {
          className: y.cta,
          children: [null != W && Z ? (0, s.jsx)("div", {
            className: y.avatars,
            children: (0, s.jsx)(R.default, {
              guildId: W.id,
              users: et,
              max: 4
            })
          }) : null, (0, s.jsx)(c.Tooltip, {
            text: l,
            children: e => {
              let {
                onClick: t,
                ...n
              } = e;
              return (0, s.jsx)(c.Button, {
                className: y.actionButton,
                onClick: () => {
                  el(), null == t || t()
                },
                wrapperClassName: y.tooltipButtonWrapper,
                ...n,
                submitting: en,
                disabled: ea,
                color: c.ButtonColors.GREEN,
                children: r
              })
            }
          })]
        })]
      })]
    })]
  })
}