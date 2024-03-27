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
  v = l("516358"),
  f = l("507692"),
  h = l("58608"),
  m = l("550766"),
  I = l("986214"),
  E = l("161918"),
  x = l("744203"),
  T = l("248210"),
  C = l("525167"),
  S = l("698372"),
  p = l("969380"),
  A = l("817039"),
  g = l("141962"),
  _ = l("231457"),
  N = l("707181"),
  D = l("905647"),
  j = l("782340"),
  y = l("425354");

function M(e) {
  var t;
  let {
    applicationId: l,
    guildId: n,
    channelId: c,
    onActivityLaunch: v
  } = e, {
    analyticsLocations: I
  } = (0, o.default)(r.default.ACTIVITY_SHELF_ACTIVITY_DETAILS);
  a.useEffect(() => {
    (0, m.fetchShelf)({
      guildId: n
    })
  }, [n]);
  let x = (0, p.default)({
      applicationId: null != l ? l : "",
      size: 2048
    }),
    T = (0, E.useActivityShelfItemData)(null != n ? n : null, l);
  if (null == T) return null;
  let S = null != T.activity.activity_preview_video_asset_id ? (0, C.default)(l, T.activity.activity_preview_video_asset_id) : null,
    A = D.ACTIVITIES_EXTRA_DETAILS[l],
    g = (null == A ? void 0 : A.playersSuggestionMin) != null && (null == A ? void 0 : A.playersSuggestionMax) != null ? "".concat(A.playersSuggestionMin, " - ").concat(A.playersSuggestionMax) : void 0;
  return (0, i.jsx)(o.AnalyticsLocationProvider, {
    value: I,
    children: (0, i.jsx)("div", {
      className: y.scrollContainer,
      children: (0, i.jsxs)(s.Scroller, {
        className: y.scroller,
        children: [(0, i.jsx)("div", {
          className: y.launcherOuterContainer,
          children: (0, i.jsx)(L, {
            activityItem: T,
            onLaunch: v,
            channelId: c
          })
        }), (0, i.jsxs)("div", {
          className: y.activityDetailsContainer,
          children: [(0, i.jsxs)("div", {
            children: [null != S ? (0, i.jsx)("div", {
              className: y.heroVideoContainer,
              children: (0, i.jsx)(h.default, {
                loop: !0,
                autoPlay: !0,
                muted: !0,
                className: y.heroVideo,
                src: S,
                poster: x.url
              })
            }) : null, (0, i.jsx)("div", {
              className: y.detailsTitle,
              children: (0, i.jsx)(s.Heading, {
                variant: "heading-xxl/bold",
                children: T.application.name
              })
            }), (0, i.jsxs)("div", {
              className: y.detailsDetails,
              children: [null != g ? (0, i.jsxs)("div", {
                className: y.detailItem,
                children: [(0, i.jsx)(u.default, {
                  width: 16,
                  height: 16
                }), (0, i.jsx)(s.Text, {
                  variant: "text-xs/semibold",
                  className: y.detailItemText,
                  children: j.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({
                    nPlayers: g
                  })
                })]
              }) : null, (null == A ? void 0 : A.timeSuggestionMinutes) != null ? (0, i.jsxs)("div", {
                className: y.detailItem,
                children: [(0, i.jsx)(d.default, {
                  width: 16,
                  height: 16
                }), (0, i.jsx)(s.Text, {
                  variant: "text-xs/semibold",
                  className: y.detailItemText,
                  children: j.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({
                    nMinutes: A.timeSuggestionMinutes
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
                  children: T.application.tags.slice(0, 3).join(", ")
                })]
              })]
            })]
          }), (0, i.jsx)(s.Heading, {
            variant: "heading-lg/medium",
            className: y.detailsDescription,
            children: T.application.description
          }), (0, i.jsx)("div", {
            className: y.divider
          }), (0, i.jsx)("div", {
            className: y.imagesContainer,
            children: (null !== (t = null == A ? void 0 : A.gameplayImageUrls) && void 0 !== t ? t : []).map(e => (0, i.jsx)("img", {
              src: e,
              alt: j.default.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({
                activityName: T.application.name
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
    channelId: f
  } = e, h = (0, p.default)({
    applicationId: d.application.id,
    size: 2048
  }), {
    analyticsLocations: m
  } = (0, o.default)(), E = (0, S.default)(), [C, D] = a.useState(null !== (t = (0, x.getActivityGuildSuggestion)({
    allowGdmActivityChannelSuggestion: !0
  })) && void 0 !== t ? t : void 0), [M, L] = a.useState(null !== (r = (0, T.getActivityVoiceChannelSuggestion)({
    guildId: C,
    allowGdmActivityChannelSuggestion: !0
  })) && void 0 !== r ? r : void 0), b = (0, n.useStateFromStores)([c.default], () => c.default.getChannel(M), [M]), V = (0, x.useSelectGuildOptions)(), R = (0, T.useSelectVoiceChannelOptions)(C), O = a.useCallback(() => {
    null != M && (0, I.default)({
      activityItem: d,
      currentEmbeddedApplication: E,
      channelId: M,
      guildId: C,
      embeddedActivitiesManager: g.default,
      analyticsLocations: m
    }).then(u)
  }, [d, m, E, u, M, C]), H = a.useCallback(() => {
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
  }, [d, m]), B = null == b || null != b.guild_id && !(null != C && null != M && V.some(e => e.value === C) && R.some(e => e.value.channel.id === M)) && !0;
  return (0, i.jsxs)("div", {
    className: y.launcherInnerContainer,
    children: [(0, i.jsx)(A.default, {
      applicationName: d.application.name,
      imageBackground: h,
      imageClassName: y.launchImage,
      imageNotFoundClassName: y.brokenLaunchImage
    }), (0, i.jsx)(s.Text, {
      variant: "text-md/medium",
      children: j.default.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
    }), null == f ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(s.Select, {
        placeholder: j.default.Messages.GUILD_SELECT,
        optionClassName: y.option,
        options: V,
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
          D(e), L(null !== (t = (0, T.getActivityVoiceChannelSuggestion)({
            guildId: e
          })) && void 0 !== t ? t : void 0)
        },
        serialize: e => e
      }), (0, i.jsx)(s.Select, {
        placeholder: j.default.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
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
        children: j.default.Messages.START
      }), (0, i.jsx)("div", {
        className: y.divider
      }), (0, i.jsx)(s.Button, {
        fullWidth: !0,
        color: s.Button.Colors.PRIMARY,
        onClick: H,
        children: j.default.Messages.SHARE
      })]
    }) : (0, i.jsxs)("div", {
      className: y.singleRowShareContainer,
      children: [(0, i.jsx)(s.Button, {
        fullWidth: !0,
        disabled: B,
        onClick: O,
        children: j.default.Messages.START
      }), (0, i.jsx)(s.Button, {
        className: y.shareIconButton,
        color: s.Button.Colors.PRIMARY,
        onClick: H,
        children: (0, i.jsx)(v.default, {})
      })]
    })]
  })
}