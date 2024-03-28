"use strict";
n.r(t), n.d(t, {
  ActivityEntryPointTile: function() {
    return O
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("524437"),
  o = n("692547"),
  u = n("481060"),
  d = n("2052"),
  c = n("127255"),
  f = n("5200"),
  h = n("403404"),
  m = n("100527"),
  p = n("906732"),
  E = n("605236"),
  C = n("448239"),
  g = n("465670"),
  S = n("696202"),
  _ = n("988951"),
  T = n("944581"),
  I = n("36113"),
  A = n("626135"),
  v = n("792125"),
  N = n("607187"),
  x = n("981631"),
  M = n("701488"),
  R = n("689938"),
  L = n("619727"),
  y = n("334732");

function O(e) {
  let {
    channel: t,
    guild: n,
    width: l,
    inPopout: s,
    handleClose: i,
    userParticipantCount: r
  } = e;
  return l < 250 ? (0, a.jsx)(j, {
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

function j(e) {
  let {
    channel: t,
    inPopout: n,
    handleClose: l
  } = e, {
    analyticsLocations: s
  } = (0, p.default)(m.default.VC_TILE_ACTIVITY_SHELF_BUTTON), r = (0, d.useAnalyticsContext)(), c = (0, u.useToken)(o.default.colors.INTERACTIVE_NORMAL).hex(), f = () => {
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
      children: [(0, a.jsx)(u.Tooltip, {
        text: R.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY,
        children: e => {
          let {
            onClick: t,
            ...n
          } = e;
          return (0, a.jsx)(u.Clickable, {
            ...n,
            className: L.clickableTile,
            onClick: () => {
              null == t || t(), f()
            },
            children: (0, a.jsx)(N.default, {
              className: L.root,
              children: (0, a.jsx)("div", {
                className: L.iconContainer,
                children: (0, a.jsx)(I.default, {
                  width: 40,
                  height: 40
                })
              })
            })
          })
        }
      }), (0, a.jsx)(u.Clickable, {
        onClick: l,
        className: i()((0, v.getThemeClass)(x.ThemeTypes.DARK), L.shelfButtonCloseButton),
        children: (0, a.jsx)(S.default, {
          width: 24,
          height: 24,
          className: L.closeButtonIcon,
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
    A.default.track(x.AnalyticEvents.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity invite",
      n_participants: 1
    })
  }, []);
  let o = (0, d.useAnalyticsContext)(),
    {
      analyticsLocations: c
    } = (0, p.default)(m.default.VC_TILE_ACTIVITY_INVITE);
  return (0, a.jsx)(p.AnalyticsLocationProvider, {
    value: c,
    children: (0, a.jsxs)(N.default, {
      className: L.root,
      children: [r > 400 ? (0, a.jsx)("img", {
        src: y,
        className: L.art,
        alt: R.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT
      }) : null, (0, a.jsx)(u.Text, {
        className: L.heading,
        variant: "text-md/semibold",
        children: R.default.Messages.EMBEDDED_ACTIVITIES_VC_TILE_ENTRY_POINT_INVITE
      }), (0, a.jsxs)("div", {
        className: L.buttonContainer,
        children: [(0, a.jsxs)(u.Button, {
          size: u.Button.Sizes.LARGE,
          color: u.Button.Colors.PRIMARY,
          className: L.button,
          innerClassName: L.buttonContents,
          onClick: function() {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("99387"), n.e("7654"), n.e("92893")]).then(n.bind(n, "560114"));
              return n => (0, a.jsx)(e, {
                ...n,
                guild: s,
                channel: t,
                source: x.InstantInviteSources.ACTIVITY_ENTRY_POINT_TILE
              })
            }, {
              contextKey: i ? u.POPOUT_MODAL_CONTEXT : u.DEFAULT_MODAL_CONTEXT
            })
          },
          children: [(0, a.jsx)(_.default, {
            width: 16,
            height: 16
          }), (0, a.jsx)(u.Text, {
            variant: "text-sm/medium",
            children: R.default.Messages.INVITE_FRIENDS
          })]
        }), (0, a.jsxs)(u.Button, {
          size: u.Button.Sizes.LARGE,
          className: L.button,
          innerClassName: L.buttonContents,
          onClick: function() {
            (0, h.default)({
              channel: t,
              guildId: t.guild_id,
              locationObject: o.location,
              openInPopout: i,
              analyticsLocations: c
            })
          },
          children: [(0, a.jsx)(T.default, {
            width: 16,
            height: 16
          }), (0, a.jsx)(u.Text, {
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
    width: o,
    userParticipantCount: d
  } = e;
  l.useEffect(() => {
    A.default.track(x.AnalyticEvents.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
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
      className: L.root,
      children: [o > 480 ? (0, a.jsx)("img", {
        className: L.art,
        src: y,
        alt: R.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT
      }) : null, o > 300 ? (0, a.jsx)(u.Text, {
        className: L.heading,
        variant: o > 550 ? "text-md/semibold" : "text-sm/semibold",
        children: R.default.Messages.EMBEDDED_ACTIVITIES_VC_TILE_ENTRY_POINT_TITLE
      }) : null, (0, a.jsx)("div", {
        className: i()(L.activitiesContainer, {
          [L.activitiesContainerSmol]: o <= 300
        }),
        children: c.map(e => (0, a.jsx)(f.ActivitySuggestion, {
          channel: t,
          activityItem: e,
          aspectRatio: f.ActivitySuggestion.AspectRatio.SIXTEEN_BY_NINE,
          animatedDivClass: L.activitySuggestion
        }, e.application.id))
      }), (0, a.jsxs)(u.Clickable, {
        className: L.checkboxContainer,
        onClick: function() {
          A.default.track(x.AnalyticEvents.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "permanent",
            n_participants: d
          }), (0, E.markDismissibleContentAsDismissed)(r.DismissibleContent.VC_TILE_ACTIVITIES_ENTRY_POINT)
        },
        children: [(0, a.jsx)(C.default, {}), (0, a.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: R.default.Messages.DONT_SHOW_AGAIN
        })]
      }), (0, a.jsx)(u.Clickable, {
        className: L.closeButtonContainer,
        onClick: function() {
          A.default.track(x.AnalyticEvents.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "temporary",
            n_participants: d
          }), s()
        },
        children: (0, a.jsx)(g.default, {
          className: L.closeButton
        })
      })]
    })
  })
}