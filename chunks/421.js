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
  o = l("906732"),
  c = l("592125"),
  d = l("729565"),
  u = l("158010"),
  v = l("351167"),
  f = l("943802"),
  h = l("810090"),
  m = l("566620"),
  I = l("266820"),
  E = l("678173"),
  x = l("636508"),
  T = l("696068"),
  C = l("361213"),
  S = l("952561"),
  p = l("778569"),
  A = l("182906"),
  g = l("513202"),
  _ = l("412019"),
  N = l("431136"),
  D = l("226799"),
  j = l("689938"),
  y = l("702361");

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
      } = await Promise.all([l.e("49237"), l.e("99387"), l.e("60133"), l.e("9347")]).then(l.bind(l, "827940"));
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
        optionClassName: y.__invalid_option,
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