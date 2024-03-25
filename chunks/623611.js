"use strict";
l.r(t), l.d(t, {
  default: function() {
    return M
  }
}), l("222007");
var i = l("37983"),
  a = l("884691"),
  n = l("65597"),
  s = l("77078"),
  r = l("812204"),
  o = l("685665"),
  c = l("42203"),
  d = l("665382"),
  u = l("155207"),
  f = l("516358"),
  v = l("507692"),
  h = l("58608"),
  m = l("550766"),
  I = l("986214"),
  E = l("161918"),
  x = l("744203"),
  C = l("248210"),
  T = l("525167"),
  p = l("698372"),
  S = l("969380"),
  g = l("817039"),
  A = l("141962"),
  _ = l("231457"),
  N = l("707181"),
  j = l("905647"),
  D = l("782340"),
  y = l("425354");

function M(e) {
  var t;
  let {
    applicationId: l,
    guildId: n,
    channelId: c,
    onActivityLaunch: f
  } = e, {
    analyticsLocations: I
  } = (0, o.default)(r.default.ACTIVITY_SHELF_ACTIVITY_DETAILS);
  a.useEffect(() => {
    (0, m.fetchShelf)({
      guildId: n
    })
  }, [n]);
  let x = (0, S.default)({
      applicationId: null != l ? l : "",
      size: 2048
    }),
    C = (0, E.useActivityShelfItemData)(null != n ? n : null, l);
  if (null == C) return null;
  let p = null != C.activity.activity_preview_video_asset_id ? (0, T.default)(l, C.activity.activity_preview_video_asset_id) : null,
    g = j.ACTIVITIES_EXTRA_DETAILS[l],
    A = (null == g ? void 0 : g.playersSuggestionMin) != null && (null == g ? void 0 : g.playersSuggestionMax) != null ? "".concat(g.playersSuggestionMin, " - ").concat(g.playersSuggestionMax) : void 0;
  return (0, i.jsx)(o.AnalyticsLocationProvider, {
    value: I,
    children: (0, i.jsx)("div", {
      className: y.scrollContainer,
      children: (0, i.jsxs)(s.Scroller, {
        className: y.scroller,
        children: [(0, i.jsx)("div", {
          className: y.launcherOuterContainer,
          children: (0, i.jsx)(L, {
            activityItem: C,
            onLaunch: f,
            channelId: c
          })
        }), (0, i.jsxs)("div", {
          className: y.activityDetailsContainer,
          children: [(0, i.jsxs)("div", {
            children: [null != p ? (0, i.jsx)("div", {
              className: y.heroVideoContainer,
              children: (0, i.jsx)(h.default, {
                loop: !0,
                autoPlay: !0,
                muted: !0,
                className: y.heroVideo,
                src: p,
                poster: x.url
              })
            }) : null, (0, i.jsx)("div", {
              className: y.detailsTitle,
              children: (0, i.jsx)(s.Heading, {
                variant: "heading-xxl/bold",
                children: C.application.name
              })
            }), (0, i.jsxs)("div", {
              className: y.detailsDetails,
              children: [null != A ? (0, i.jsxs)("div", {
                className: y.detailItem,
                children: [(0, i.jsx)(u.default, {
                  width: 16,
                  height: 16
                }), (0, i.jsx)(s.Text, {
                  variant: "text-xs/semibold",
                  className: y.detailItemText,
                  children: D.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({
                    nPlayers: A
                  })
                })]
              }) : null, (null == g ? void 0 : g.timeSuggestionMinutes) != null ? (0, i.jsxs)("div", {
                className: y.detailItem,
                children: [(0, i.jsx)(d.default, {
                  width: 16,
                  height: 16
                }), (0, i.jsx)(s.Text, {
                  variant: "text-xs/semibold",
                  className: y.detailItemText,
                  children: D.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({
                    nMinutes: g.timeSuggestionMinutes
                  })
                })]
              }) : null, (0, i.jsxs)("div", {
                className: y.detailItem,
                children: [(0, i.jsx)(v.default, {
                  width: 16,
                  height: 16
                }), (0, i.jsx)(s.Text, {
                  variant: "text-xs/semibold",
                  className: y.detailItemText,
                  children: C.application.tags.slice(0, 3).join(", ")
                })]
              })]
            })]
          }), (0, i.jsx)(s.Heading, {
            variant: "heading-lg/medium",
            className: y.detailsDescription,
            children: C.application.description
          }), (0, i.jsx)("div", {
            className: y.divider
          }), (0, i.jsx)("div", {
            className: y.imagesContainer,
            children: (null !== (t = null == g ? void 0 : g.gameplayImageUrls) && void 0 !== t ? t : []).map(e => (0, i.jsx)("img", {
              src: e,
              alt: D.default.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({
                activityName: C.application.name
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
    activityItem: d,
    onLaunch: u,
    channelId: v
  } = e, h = (0, S.default)({
    applicationId: d.application.id,
    size: 2048
  }), {
    analyticsLocations: m
  } = (0, o.default)(), E = (0, p.default)(), [T, j] = a.useState(null !== (t = (0, x.getActivityGuildSuggestion)({
    allowGdmActivityChannelSuggestion: !0
  })) && void 0 !== t ? t : void 0), [M, L] = a.useState(null !== (r = (0, C.getActivityVoiceChannelSuggestion)({
    guildId: T,
    allowGdmActivityChannelSuggestion: !0
  })) && void 0 !== r ? r : void 0), b = (0, n.useStateFromStores)([c.default], () => c.default.getChannel(M), [M]), V = (0, x.useSelectGuildOptions)(), R = (0, C.useSelectVoiceChannelOptions)(T), O = a.useCallback(() => {
    null != M && (0, I.default)({
      activityItem: d,
      currentEmbeddedApplication: E,
      channelId: M,
      guildId: T,
      embeddedActivitiesManager: A.default,
      analyticsLocations: m
    }).then(u)
  }, [d, m, E, u, M, T]), H = a.useCallback(() => {
    (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await l.el("159747").then(l.bind(l, "159747"));
      return t => (0, i.jsx)(e, {
        activityItem: d,
        ...t,
        analyticsLocations: m
      })
    })
  }, [d, m]), B = null == b || null != b.guild_id && !(null != T && null != M && V.some(e => e.value === T) && R.some(e => e.value.channel.id === M)) && !0;
  return (0, i.jsxs)("div", {
    className: y.launcherInnerContainer,
    children: [(0, i.jsx)(g.default, {
      applicationName: d.application.name,
      imageBackground: h,
      imageClassName: y.launchImage,
      imageNotFoundClassName: y.brokenLaunchImage
    }), (0, i.jsx)(s.Text, {
      variant: "text-md/medium",
      children: D.default.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
    }), null == v ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(s.Select, {
        placeholder: D.default.Messages.GUILD_SELECT,
        optionClassName: y.option,
        options: V,
        renderOptionValue: e => {
          let t = e.find(e => e.value === T);
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
        isSelected: e => e === T,
        select: e => {
          var t;
          j(e), L(null !== (t = (0, C.getActivityVoiceChannelSuggestion)({
            guildId: e
          })) && void 0 !== t ? t : void 0)
        },
        serialize: e => e
      }), (0, i.jsx)(s.Select, {
        placeholder: D.default.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
        optionClassName: y.option,
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
          return null == e ? null : (0, i.jsx)(_.SelectChannelOption, {
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
          return (0, i.jsx)(_.SelectChannelOption, {
            channel: t,
            users: l
          })
        }
      }), (0, i.jsx)(s.Button, {
        fullWidth: !0,
        disabled: B,
        onClick: O,
        children: D.default.Messages.START
      }), (0, i.jsx)("div", {
        className: y.divider
      }), (0, i.jsx)(s.Button, {
        fullWidth: !0,
        color: s.Button.Colors.PRIMARY,
        onClick: H,
        children: D.default.Messages.SHARE
      })]
    }) : (0, i.jsxs)("div", {
      className: y.singleRowShareContainer,
      children: [(0, i.jsx)(s.Button, {
        fullWidth: !0,
        disabled: B,
        onClick: O,
        children: D.default.Messages.START
      }), (0, i.jsx)(s.Button, {
        className: y.shareIconButton,
        color: s.Button.Colors.PRIMARY,
        onClick: H,
        children: (0, i.jsx)(f.default, {})
      })]
    })]
  })
}