"use strict";
n.r(t), n.d(t, {
  ActivityEntryPointTile: function() {
    return y
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("151426"),
  u = n("669491"),
  o = n("77078"),
  d = n("997289"),
  c = n("91761"),
  f = n("441821"),
  h = n("478272"),
  m = n("812204"),
  p = n("685665"),
  E = n("10641"),
  g = n("36562"),
  S = n("945330"),
  C = n("381546"),
  _ = n("564875"),
  I = n("82636"),
  T = n("924506"),
  v = n("599110"),
  x = n("439932"),
  N = n("784981"),
  A = n("49111"),
  M = n("954016"),
  R = n("782340"),
  j = n("885399"),
  L = n("861948");

function y(e) {
  let {
    channel: t,
    guild: n,
    width: l,
    inPopout: s,
    handleClose: i,
    userParticipantCount: r
  } = e;
  return l < 250 ? (0, a.jsx)(O, {
    channel: t,
    guild: n,
    width: l,
    inPopout: s,
    handleClose: i,
    userParticipantCount: r
  }) : r > 1 ? (0, a.jsx)(b, {
    channel: t,
    guild: n,
    width: l,
    inPopout: s,
    handleClose: i,
    userParticipantCount: r
  }) : (0, a.jsx)(P, {
    channel: t,
    guild: n,
    width: l,
    inPopout: s
  })
}

function O(e) {
  let {
    channel: t,
    inPopout: n,
    handleClose: l
  } = e, {
    analyticsLocations: s
  } = (0, p.default)(m.default.VC_TILE_ACTIVITY_SHELF_BUTTON), r = (0, d.useAnalyticsContext)(), c = (0, o.useToken)(u.default.colors.INTERACTIVE_NORMAL).hex(), f = () => {
    (0, h.default)({
      channel: t,
      guildId: t.guild_id,
      locationObject: r.location,
      openInPopout: n,
      analyticsLocations: s
    })
  };
  return (0, a.jsx)(p.AnalyticsLocationProvider, {
    value: s,
    children: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.Tooltip, {
        text: R.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY,
        children: e => {
          let {
            onClick: t,
            ...n
          } = e;
          return (0, a.jsx)(o.Clickable, {
            ...n,
            className: j.clickableTile,
            onClick: () => {
              null == t || t(), f()
            },
            children: (0, a.jsx)(N.default, {
              className: j.root,
              children: (0, a.jsx)("div", {
                className: j.iconContainer,
                children: (0, a.jsx)(T.default, {
                  width: 40,
                  height: 40
                })
              })
            })
          })
        }
      }), (0, a.jsx)(o.Clickable, {
        onClick: l,
        className: i((0, x.getThemeClass)(A.ThemeTypes.DARK), j.shelfButtonCloseButton),
        children: (0, a.jsx)(C.default, {
          width: 24,
          height: 24,
          className: j.closeButtonIcon,
          backgroundColor: c
        })
      })]
    })
  })
}

function P(e) {
  let {
    channel: t,
    guild: s,
    inPopout: i,
    width: r
  } = e;
  l.useEffect(() => {
    v.default.track(A.AnalyticEvents.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity invite",
      n_participants: 1
    })
  }, []);
  let u = (0, d.useAnalyticsContext)(),
    {
      analyticsLocations: c
    } = (0, p.default)(m.default.VC_TILE_ACTIVITY_INVITE);
  return (0, a.jsx)(p.AnalyticsLocationProvider, {
    value: c,
    children: (0, a.jsxs)(N.default, {
      className: j.root,
      children: [r > 400 ? (0, a.jsx)("img", {
        src: L,
        className: j.art,
        alt: R.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT
      }) : null, (0, a.jsx)(o.Text, {
        className: j.heading,
        variant: "text-md/semibold",
        children: R.default.Messages.EMBEDDED_ACTIVITIES_VC_TILE_ENTRY_POINT_INVITE
      }), (0, a.jsxs)("div", {
        className: j.buttonContainer,
        children: [(0, a.jsxs)(o.Button, {
          size: o.Button.Sizes.LARGE,
          color: o.Button.Colors.PRIMARY,
          className: j.button,
          innerClassName: j.buttonContents,
          onClick: function() {
            (0, o.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("310688").then(n.bind(n, "310688"));
              return n => (0, a.jsx)(e, {
                ...n,
                guild: s,
                channel: t,
                source: A.InstantInviteSources.ACTIVITY_ENTRY_POINT_TILE
              })
            }, {
              contextKey: i ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT
            })
          },
          children: [(0, a.jsx)(_.default, {
            width: 16,
            height: 16
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: R.default.Messages.INVITE_FRIENDS
          })]
        }), (0, a.jsxs)(o.Button, {
          size: o.Button.Sizes.LARGE,
          className: j.button,
          innerClassName: j.buttonContents,
          onClick: function() {
            (0, h.default)({
              channel: t,
              guildId: t.guild_id,
              locationObject: u.location,
              openInPopout: i,
              analyticsLocations: c
            })
          },
          children: [(0, a.jsx)(I.default, {
            width: 16,
            height: 16
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: R.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_ENTRY_POINT_TILE_CHOOSE_AN_ACTIVITY
          })]
        })]
      })]
    })
  })
}
let D = e => {
  let {
    userParticipantCount: t,
    guildId: n
  } = e, a = (0, c.default)({
    guildId: n
  });
  if (2 === t) {
    let e = [],
      t = [(0, M.WATCH_YOUTUBE_PROD_APP_ID), (0, M.PUTT_PARTY_APPLICATION_ID), (0, M.CHESS_IN_THE_PARK_APP_ID)].filter(Boolean).slice(0, 3);
    return a.forEach(n => {
      let a = t.indexOf(n.application.id);
      !(a < 0) && (e[a] = n)
    }), e
  }
  return a.slice(0, 3)
};

function b(e) {
  let {
    channel: t,
    guild: n,
    handleClose: s,
    width: u,
    userParticipantCount: d
  } = e;
  l.useEffect(() => {
    v.default.track(A.AnalyticEvents.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity suggestion",
      n_participants: d
    })
  }, []);
  let c = D({
      userParticipantCount: d,
      guildId: n.id
    }),
    {
      analyticsLocations: h
    } = (0, p.default)(m.default.VC_TILE_ACTIVITY_SUGGESTION);
  return (0, a.jsx)(p.AnalyticsLocationProvider, {
    value: h,
    children: (0, a.jsxs)(N.default, {
      className: j.root,
      children: [u > 480 ? (0, a.jsx)("img", {
        className: j.art,
        src: L,
        alt: R.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT
      }) : null, u > 300 ? (0, a.jsx)(o.Text, {
        className: j.heading,
        variant: u > 550 ? "text-md/semibold" : "text-sm/semibold",
        children: R.default.Messages.EMBEDDED_ACTIVITIES_VC_TILE_ENTRY_POINT_TITLE
      }) : null, (0, a.jsx)("div", {
        className: i(j.activitiesContainer, {
          [j.activitiesContainerSmol]: u <= 300
        }),
        children: c.map(e => (0, a.jsx)(f.ActivitySuggestion, {
          channel: t,
          activityItem: e,
          aspectRatio: f.ActivitySuggestion.AspectRatio.SIXTEEN_BY_NINE,
          animatedDivClass: j.activitySuggestion
        }, e.application.id))
      }), (0, a.jsxs)(o.Clickable, {
        className: j.checkboxContainer,
        onClick: function() {
          v.default.track(A.AnalyticEvents.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "permanent",
            n_participants: d
          }), (0, E.markDismissibleContentAsDismissed)(r.DismissibleContent.VC_TILE_ACTIVITIES_ENTRY_POINT)
        },
        children: [(0, a.jsx)(g.default, {}), (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          children: R.default.Messages.DONT_SHOW_AGAIN
        })]
      }), (0, a.jsx)(o.Clickable, {
        className: j.closeButtonContainer,
        onClick: function() {
          v.default.track(A.AnalyticEvents.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "temporary",
            n_participants: d
          }), s()
        },
        children: (0, a.jsx)(S.default, {
          className: j.closeButton
        })
      })]
    })
  })
}