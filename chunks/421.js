"use strict";
l.r(t), l.d(t, {
  default: function() {
    return M
  }
}), l("47120");
var i = l("735250"),
  a = l("470079"),
  n = l("399606"),
  s = l("481060"),
  r = l("100527"),
  d = l("906732"),
  o = l("592125"),
  c = l("729565"),
  u = l("158010"),
  v = l("351167"),
  f = l("943802"),
  h = l("810090"),
  I = l("566620"),
  m = l("266820"),
  E = l("678173"),
  C = l("636508"),
  T = l("696068"),
  x = l("361213"),
  S = l("952561"),
  p = l("778569"),
  A = l("182906"),
  _ = l("513202"),
  g = l("412019"),
  N = l("431136"),
  j = l("226799"),
  y = l("689938"),
  D = l("295521");

function M(e) {
  var t;
  let {
    applicationId: l,
    guildId: v,
    channelId: m,
    onActivityLaunch: C
  } = e, {
    analyticsLocations: T
  } = (0, d.default)(r.default.ACTIVITY_SHELF_ACTIVITY_DETAILS);
  a.useEffect(() => {
    (0, I.fetchShelf)({
      guildId: v
    })
  }, [v]);
  let S = (0, p.default)({
      applicationId: null != l ? l : "",
      size: 2048
    }),
    A = (0, n.useStateFromStores)([o.default], () => o.default.getChannel(m)),
    _ = (0, E.useActivityShelfItemData)(null != v ? v : null, l, A);
  if (null == _) return null;
  let g = null != _.activity.activity_preview_video_asset_id ? (0, x.default)(l, _.activity.activity_preview_video_asset_id) : null,
    N = j.ACTIVITIES_EXTRA_DETAILS[l],
    M = (null == N ? void 0 : N.playersSuggestionMin) != null && (null == N ? void 0 : N.playersSuggestionMax) != null ? "".concat(N.playersSuggestionMin, " - ").concat(N.playersSuggestionMax) : void 0;
  return (0, i.jsx)(d.AnalyticsLocationProvider, {
    value: T,
    children: (0, i.jsx)("div", {
      className: D.scrollContainer,
      children: (0, i.jsxs)(s.Scroller, {
        className: D.scroller,
        children: [(0, i.jsx)("div", {
          className: D.launcherOuterContainer,
          children: (0, i.jsx)(L, {
            activityItem: _,
            onLaunch: C,
            channelId: m
          })
        }), (0, i.jsxs)("div", {
          className: D.activityDetailsContainer,
          children: [(0, i.jsxs)("div", {
            children: [null != g ? (0, i.jsx)("div", {
              className: D.heroVideoContainer,
              children: (0, i.jsx)(h.default, {
                loop: !0,
                autoPlay: !0,
                muted: !0,
                className: D.heroVideo,
                src: g,
                poster: S.url
              })
            }) : null, (0, i.jsx)("div", {
              className: D.detailsTitle,
              children: (0, i.jsx)(s.Heading, {
                variant: "heading-xxl/bold",
                children: _.application.name
              })
            }), (0, i.jsxs)("div", {
              className: D.detailsDetails,
              children: [null != M ? (0, i.jsxs)("div", {
                className: D.detailItem,
                children: [(0, i.jsx)(u.default, {
                  width: 16,
                  height: 16
                }), (0, i.jsx)(s.Text, {
                  variant: "text-xs/semibold",
                  className: D.detailItemText,
                  children: y.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({
                    nPlayers: M
                  })
                })]
              }) : null, (null == N ? void 0 : N.timeSuggestionMinutes) != null ? (0, i.jsxs)("div", {
                className: D.detailItem,
                children: [(0, i.jsx)(c.default, {
                  width: 16,
                  height: 16
                }), (0, i.jsx)(s.Text, {
                  variant: "text-xs/semibold",
                  className: D.detailItemText,
                  children: y.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({
                    nMinutes: N.timeSuggestionMinutes
                  })
                })]
              }) : null, (0, i.jsxs)("div", {
                className: D.detailItem,
                children: [(0, i.jsx)(f.default, {
                  width: 16,
                  height: 16
                }), (0, i.jsx)(s.Text, {
                  variant: "text-xs/semibold",
                  className: D.detailItemText,
                  children: _.application.tags.slice(0, 3).join(", ")
                })]
              })]
            })]
          }), (0, i.jsx)(s.Heading, {
            variant: "heading-lg/medium",
            className: D.detailsDescription,
            children: _.application.description
          }), (0, i.jsx)("div", {
            className: D.divider
          }), (0, i.jsx)("div", {
            className: D.imagesContainer,
            children: (null !== (t = null == N ? void 0 : N.gameplayImageUrls) && void 0 !== t ? t : []).map(e => (0, i.jsx)("img", {
              src: e,
              alt: y.default.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({
                activityName: _.application.name
              }),
              className: D.activityImage
            }, e))
          })]
        })]
      })
    })
  })
}

function L(e) {
  var t, r;
  let {
    activityItem: c,
    onLaunch: u,
    channelId: f
  } = e, h = (0, p.default)({
    applicationId: c.application.id,
    size: 2048
  }), {
    analyticsLocations: I
  } = (0, d.default)(), E = (0, S.default)(), [x, j] = a.useState(null !== (t = (0, C.getActivityGuildSuggestion)({
    allowGdmActivityChannelSuggestion: !0
  })) && void 0 !== t ? t : void 0), [M, L] = a.useState(null !== (r = (0, T.getActivityVoiceChannelSuggestion)({
    guildId: x,
    allowGdmActivityChannelSuggestion: !0
  })) && void 0 !== r ? r : void 0), V = (0, n.useStateFromStores)([o.default], () => o.default.getChannel(M), [M]), R = (0, C.useSelectGuildOptions)(), O = (0, T.useSelectVoiceChannelOptions)(x), b = a.useCallback(() => {
    var e;
    null != M && (0, m.default)({
      targetApplicationId: null == c ? void 0 : null === (e = c.application) || void 0 === e ? void 0 : e.id,
      currentEmbeddedApplication: E,
      channelId: M,
      guildId: x,
      embeddedActivitiesManager: _.default,
      analyticsLocations: I
    }).then(u)
  }, [c, I, E, u, M, x]), H = a.useCallback(() => {
    (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([l.e("49237"), l.e("99387"), l.e("60133"), l.e("9347")]).then(l.bind(l, "827940"));
      return t => (0, i.jsx)(e, {
        activityItem: c,
        ...t,
        analyticsLocations: I
      })
    })
  }, [c, I]), F = null == V || null != V.guild_id && !(null != x && null != M && R.some(e => e.value === x) && O.some(e => e.value.channel.id === M)) && !0;
  return (0, i.jsxs)("div", {
    className: D.launcherInnerContainer,
    children: [(0, i.jsx)(A.default, {
      applicationName: c.application.name,
      imageBackground: h,
      imageClassName: D.launchImage,
      imageNotFoundClassName: D.brokenLaunchImage
    }), (0, i.jsx)(s.Text, {
      variant: "text-md/medium",
      children: y.default.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
    }), null == f ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(s.Select, {
        placeholder: y.default.Messages.GUILD_SELECT,
        optionClassName: D.__invalid_option,
        options: R,
        renderOptionValue: e => {
          let t = e.find(e => e.value === x);
          return null == t ? null : (0, i.jsx)(N.SelectGuildOption, {
            guildId: t.value
          })
        },
        renderOptionLabel: e => {
          let {
            value: t
          } = e;
          return (0, i.jsx)(N.SelectGuildOption, {
            guildId: t
          })
        },
        isSelected: e => e === x,
        select: e => {
          var t;
          j(e), L(null !== (t = (0, T.getActivityVoiceChannelSuggestion)({
            guildId: e
          })) && void 0 !== t ? t : void 0)
        },
        serialize: e => e
      }), (0, i.jsx)(s.Select, {
        placeholder: y.default.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
        optionClassName: D.__invalid_option,
        options: O,
        isSelected: e => {
          let {
            channel: t
          } = e;
          return t.id === M
        },
        select: e => {
          let {
            channel: t
          } = e;
          return L(t.id)
        },
        serialize: e => {
          let {
            channel: t
          } = e;
          return t.id
        },
        renderOptionValue: () => {
          let e = O.find(e => e.value.channel.id === M);
          return null == e ? null : (0, i.jsx)(g.SelectChannelOption, {
            channel: e.value.channel,
            users: e.value.users
          })
        },
        renderOptionLabel: e => {
          let {
            value: {
              channel: t,
              users: l
            }
          } = e;
          return (0, i.jsx)(g.SelectChannelOption, {
            channel: t,
            users: l
          })
        }
      }), (0, i.jsx)(s.Button, {
        fullWidth: !0,
        disabled: F,
        onClick: b,
        children: y.default.Messages.START
      }), (0, i.jsx)("div", {
        className: D.divider
      }), (0, i.jsx)(s.Button, {
        fullWidth: !0,
        color: s.Button.Colors.PRIMARY,
        onClick: H,
        children: y.default.Messages.SHARE
      })]
    }) : (0, i.jsxs)("div", {
      className: D.singleRowShareContainer,
      children: [(0, i.jsx)(s.Button, {
        fullWidth: !0,
        disabled: F,
        onClick: b,
        children: y.default.Messages.START
      }), (0, i.jsx)(s.Button, {
        className: D.shareIconButton,
        color: s.Button.Colors.PRIMARY,
        onClick: H,
        children: (0, i.jsx)(v.default, {})
      })]
    })]
  })
}