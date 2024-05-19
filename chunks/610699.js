"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("653041"), n("47120"), n("390547");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("512722"),
  o = n.n(r),
  u = n("442837"),
  d = n("477690"),
  c = n("481060"),
  f = n("447543"),
  E = n("317381"),
  _ = n("778569"),
  m = n("182906"),
  T = n("100527"),
  I = n("906732"),
  p = n("835473"),
  h = n("471445"),
  N = n("601964"),
  S = n("592125"),
  C = n("430824"),
  A = n("496675"),
  g = n("594174"),
  M = n("197409"),
  R = n("514342"),
  v = n("602623"),
  O = n("624138"),
  x = n("358595"),
  L = n("981631"),
  D = n("245335"),
  P = n("689938"),
  y = n("137435");
let U = (0, O.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
  j = (0, O.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
  b = (0, O.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);

function B(e) {
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
      children: P.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
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
      children: P.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
        count: t
      })
    })]
  }, "memberCount")), (0, s.jsx)("div", {
    className: i()(y.statusCounts, {
      [y.large]: a,
      [y.stacked]: l
    }),
    children: r
  })
}

function F(e) {
  let {
    channel: t,
    guild: n,
    isStacked: a,
    hasEnded: l
  } = e;
  if (null != t && null != n) {
    let e = (0, h.getChannelIconComponent)(t, n);
    return (0, s.jsxs)("div", {
      className: i()(y.channel, {
        [y.stacked]: a,
        [y.ended]: l
      }),
      children: [null != e ? (0, s.jsx)(e, {
        className: y.channelIcon,
        width: 16,
        height: 16
      }) : null, (0, s.jsx)(R.default, {
        children: (0, s.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: P.default.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
            channelName: t.name,
            serverName: n.name
          })
        })
      })]
    })
  }
  return null != n ? (0, s.jsx)("div", {
    className: i()(y.channel, {
      [y.stacked]: a,
      [y.ended]: l
    }),
    children: (0, s.jsx)(R.default, {
      children: (0, s.jsx)(c.Text, {
        variant: "text-xs/normal",
        children: P.default.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
          guildName: n.name
        })
      })
    })
  }) : null
}

function G(e) {
  var t, n;
  let l, r, {
      invite: d,
      getAcceptInviteContext: h
    } = e,
    {
      approximate_member_count: R,
      approximate_presence_count: O,
      target_type: G,
      target_application: k
    } = d;
  o()(G === D.InviteTargetTypes.EMBEDDED_APPLICATION && null != k, "invalid application invite");
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
  let W = (0, u.useStateFromStores)([C.default], () => null != d.guild ? C.default.getGuild(d.guild.id) : null, [d]),
    z = (0, p.default)([k.id])[0],
    Q = (0, u.useStateFromStores)([E.default], () => {
      var e;
      return (null == d ? void 0 : d.channel) != null && (null === (e = E.default.getSelfEmbeddedActivityForChannel(d.channel.id)) || void 0 === e ? void 0 : e.applicationId) === k.id
    }),
    q = (0, u.useStateFromStores)([E.default], () => {
      var e;
      return ((null === (e = d.channel) || void 0 === e ? void 0 : e.id) != null ? E.default.getEmbeddedActivitiesForChannel(d.channel.id) : []).some(e => {
        let {
          applicationId: t
        } = e;
        return k.id === t
      })
    }),
    X = S.default.getChannel(null === (t = d.channel) || void 0 === t ? void 0 : t.id),
    Z = (0, u.useStateFromStores)([A.default], () => null != X && A.default.can(L.Permissions.USE_EMBEDDED_ACTIVITIES, X), [X]),
    {
      analyticsLocations: J
    } = (0, I.default)(T.default.INVITE_EMBED),
    $ = (0, _.default)({
      applicationId: k.id,
      size: U,
      names: ["embedded_cover"]
    }),
    ee = (0, u.useStateFromStoresArray)([E.default], () => null != X ? E.default.getEmbeddedActivitiesForChannel(X.id).filter(e => e.applicationId === k.id).flatMap(e => Array.from(e.userIds)) : [], [X, k.id]),
    et = (0, u.useStateFromStoresArray)([g.default], () => ee.map(e => g.default.getUser(e)), [ee]),
    en = d.state === L.InviteStates.ACCEPTING,
    es = null != W;
  if (null == W) {
    if (null == d.guild) return (0, s.jsx)(x.default, {});
    W = new N.default(d.guild)
  }
  let ea = es && !Z || es && Q,
    el = () => {
      f.default.acceptInviteAndTransitionToInviteChannel({
        inviteKey: d.code,
        context: h("Invite Button Embed"),
        analyticsLocations: J
      })
    };
  return (es && Q && (l = P.default.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY), !Z && (l = P.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS), r = Q ? P.default.Messages.INVITE_EMBED_JOINED : q || !es ? P.default.Messages.JOIN : P.default.Messages.START, null == d.code || "" === d.code) ? null : (0, s.jsxs)("div", {
    className: y.container,
    ref: w,
    children: [(0, s.jsx)("div", {
      className: i()(y.imgContainer, {
        [y.large]: H,
        [y.stacked]: Y
      }),
      children: (0, s.jsx)(m.default, {
        imageBackground: $,
        applicationName: null !== (n = null == z ? void 0 : z.name) && void 0 !== n ? n : "",
        imageClassName: i()(y.img, {
          [y.large]: H,
          [y.stacked]: Y
        }),
        imageNotFoundClassName: i()(y.brokenImg, {
          [y.large]: H,
          [y.stacked]: Y
        })
      })
    }), (0, s.jsxs)(M.default, {
      className: i()(y.content, {
        [y.large]: H,
        [y.stacked]: Y
      }),
      children: [(0, s.jsxs)("div", {
        className: y.info,
        children: [(0, s.jsx)(c.FormTitle, {
          children: es ? P.default.Messages.EMBEDDED_ACTIVITIES_EMBED_TITLE_INVITED_TO_JOIN : P.default.Messages.INVITE_BUTTON_TITLE_INVITED
        }), (0, s.jsx)(c.Heading, {
          className: y.heading,
          variant: "heading-xl/semibold",
          children: null == z ? void 0 : z.name
        }), (0, s.jsx)(F, {
          channel: X,
          guild: W,
          isStacked: Y,
          hasEnded: !q
        })]
      }), (0, s.jsxs)("div", {
        className: i()(y.currentState, {
          [y.large]: H,
          [y.split]: !q && Y
        }),
        children: [!q && es ? (0, s.jsxs)("div", {
          className: i()(y.endedNote, {
            [y.large]: H
          }),
          children: [(0, s.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: P.default.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED
          }), (0, s.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: P.default.Messages.EMBEDDED_ACTIVITIES_EMBED_START
          })]
        }) : null, es ? null : (0, s.jsx)(B, {
          members: R,
          membersOnline: O,
          isLarge: H,
          isStacked: Y
        }), (0, s.jsxs)("div", {
          className: y.cta,
          children: [null != W && q ? (0, s.jsx)("div", {
            className: y.avatars,
            children: (0, s.jsx)(v.default, {
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