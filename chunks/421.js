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
  c = l("592125"),
  o = l("729565"),
  u = l("158010"),
  v = l("351167"),
  f = l("943802"),
  h = l("810090"),
  I = l("566620"),
  m = l("146936"),
  E = l("678173"),
  T = l("636508"),
  x = l("696068"),
  C = l("361213"),
  S = l("952561"),
  p = l("778569"),
  A = l("182906"),
  _ = l("513202"),
  g = l("412019"),
  N = l("431136"),
  j = l("226799"),
  D = l("689938"),
  y = l("6863");

function M(e) {
  var t;
  let {
    applicationId: l,
    guildId: v,
    channelId: m,
    onActivityLaunch: T
  } = e, {
    analyticsLocations: x
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
    A = (0, n.useStateFromStores)([c.default], () => c.default.getChannel(m)),
    _ = (0, E.useActivityShelfItemData)(null != v ? v : null, l, A);
  if (null == _) return null;
  let g = null != _.activity.activity_preview_video_asset_id ? (0, C.default)(l, _.activity.activity_preview_video_asset_id) : null,
    N = j.ACTIVITIES_EXTRA_DETAILS[l],
    M = (null == N ? void 0 : N.playersSuggestionMin) != null && (null == N ? void 0 : N.playersSuggestionMax) != null ? "".concat(N.playersSuggestionMin, " - ").concat(N.playersSuggestionMax) : void 0;
  return (0, i.jsx)(d.AnalyticsLocationProvider, {
    value: x,
    children: (0, i.jsx)("div", {
      className: y.scrollContainer,
      children: (0, i.jsxs)(s.Scroller, {
        className: y.scroller,
        children: [(0, i.jsx)("div", {
          className: y.launcherOuterContainer,
          children: (0, i.jsx)(L, {
            activityItem: _,
            onLaunch: T,
            channelId: m
          })
        }), (0, i.jsxs)("div", {
          className: y.activityDetailsContainer,
          children: [(0, i.jsxs)("div", {
            children: [null != g ? (0, i.jsx)("div", {
              className: y.heroVideoContainer,
              children: (0, i.jsx)(h.default, {
                loop: !0,
                autoPlay: !0,
                muted: !0,
                className: y.heroVideo,
                src: g,
                poster: S.url
              })
            }) : null, (0, i.jsx)("div", {
              className: y.detailsTitle,
              children: (0, i.jsx)(s.Heading, {
                variant: "heading-xxl/bold",
                children: _.application.name
              })
            }), (0, i.jsxs)("div", {
              className: y.detailsDetails,
              children: [null != M ? (0, i.jsxs)("div", {
                className: y.detailItem,
                children: [(0, i.jsx)(u.default, {
                  width: 16,
                  height: 16
                }), (0, i.jsx)(s.Text, {
                  variant: "text-xs/semibold",
                  className: y.detailItemText,
                  children: D.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({
                    nPlayers: M
                  })
                })]
              }) : null, (null == N ? void 0 : N.timeSuggestionMinutes) != null ? (0, i.jsxs)("div", {
                className: y.detailItem,
                children: [(0, i.jsx)(o.default, {
                  width: 16,
                  height: 16
                }), (0, i.jsx)(s.Text, {
                  variant: "text-xs/semibold",
                  className: y.detailItemText,
                  children: D.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({
                    nMinutes: N.timeSuggestionMinutes
                  })
                })]
              }) : null, (0, i.jsxs)("div", {
                className: y.detailItem,
                children: [(0, i.jsx)(f.default, {
                  width: 16,
                  height: 16
                }), (0, i.jsx)(s.Text, {
                  variant: "text-xs/semibold",
                  className: y.detailItemText,
                  children: _.application.tags.slice(0, 3).join(", ")
                })]
              })]
            })]
          }), (0, i.jsx)(s.Heading, {
            variant: "heading-lg/medium",
            className: y.detailsDescription,
            children: _.application.description
          }), (0, i.jsx)("div", {
            className: y.divider
          }), (0, i.jsx)("div", {
            className: y.imagesContainer,
            children: (null !== (t = null == N ? void 0 : N.gameplayImageUrls) && void 0 !== t ? t : []).map(e => (0, i.jsx)("img", {
              src: e,
              alt: D.default.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({
                activityName: _.application.name
              }),
              className: y.activityImage
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
    activityItem: o,
    onLaunch: u,
    channelId: f
  } = e, h = (0, p.default)({
    applicationId: o.application.id,
    size: 2048
  }), {
    analyticsLocations: I
  } = (0, d.default)(), E = (0, S.default)(), [C, j] = a.useState(null !== (t = (0, T.getActivityGuildSuggestion)({
    allowGdmActivityChannelSuggestion: !0
  })) && void 0 !== t ? t : void 0), [M, L] = a.useState(null !== (r = (0, x.getActivityVoiceChannelSuggestion)({
    guildId: C,
    allowGdmActivityChannelSuggestion: !0
  })) && void 0 !== r ? r : void 0), V = (0, n.useStateFromStores)([c.default], () => c.default.getChannel(M), [M]), b = (0, T.useSelectGuildOptions)(), R = (0, x.useSelectVoiceChannelOptions)(C), O = a.useCallback(() => {
    var e;
    null != M && (0, m.default)({
      targetApplicationId: null == o ? void 0 : null === (e = o.application) || void 0 === e ? void 0 : e.id,
      currentEmbeddedApplication: E,
      channelId: M,
      guildId: C,
      embeddedActivitiesManager: _.default,
      analyticsLocations: I
    }).then(u)
  }, [o, I, E, u, M, C]), F = a.useCallback(() => {
    (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([l.e("49237"), l.e("99387"), l.e("60133"), l.e("9347")]).then(l.bind(l, "827940"));
      return t => (0, i.jsx)(e, {
        activityItem: o,
        ...t,
        analyticsLocations: I
      })
    })
  }, [o, I]), H = null == V || null != V.guild_id && !(null != C && null != M && b.some(e => e.value === C) && R.some(e => e.value.channel.id === M)) && !0;
  return (0, i.jsxs)("div", {
    className: y.launcherInnerContainer,
    children: [(0, i.jsx)(A.default, {
      applicationName: o.application.name,
      imageBackground: h,
      imageClassName: y.launchImage,
      imageNotFoundClassName: y.brokenLaunchImage
    }), (0, i.jsx)(s.Text, {
      variant: "text-md/medium",
      children: D.default.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
    }), null == f ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(s.Select, {
        placeholder: D.default.Messages.GUILD_SELECT,
        optionClassName: y.__invalid_option,
        options: b,
        renderOptionValue: e => {
          let t = e.find(e => e.value === C);
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
        isSelected: e => e === C,
        select: e => {
          var t;
          j(e), L(null !== (t = (0, x.getActivityVoiceChannelSuggestion)({
            guildId: e
          })) && void 0 !== t ? t : void 0)
        },
        serialize: e => e
      }), (0, i.jsx)(s.Select, {
        placeholder: D.default.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
        optionClassName: y.__invalid_option,
        options: R,
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
          let e = R.find(e => e.value.channel.id === M);
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
        disabled: H,
        onClick: O,
        children: D.default.Messages.START
      }), (0, i.jsx)("div", {
        className: y.divider
      }), (0, i.jsx)(s.Button, {
        fullWidth: !0,
        color: s.Button.Colors.PRIMARY,
        onClick: F,
        children: D.default.Messages.SHARE
      })]
    }) : (0, i.jsxs)("div", {
      className: y.singleRowShareContainer,
      children: [(0, i.jsx)(s.Button, {
        fullWidth: !0,
        disabled: H,
        onClick: O,
        children: D.default.Messages.START
      }), (0, i.jsx)(s.Button, {
        className: y.shareIconButton,
        color: s.Button.Colors.PRIMARY,
        onClick: F,
        children: (0, i.jsx)(v.default, {})
      })]
    })]
  })
}