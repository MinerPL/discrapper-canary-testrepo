n.d(t, {
  h: function() {
return S;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(704215),
  o = n(692547),
  c = n(481060),
  u = n(2052),
  d = n(127255),
  h = n(5200),
  m = n(403404),
  p = n(100527),
  _ = n(906732),
  f = n(605236),
  E = n(448239),
  g = n(626135),
  C = n(792125),
  I = n(607187),
  x = n(981631),
  T = n(689938),
  N = n(187128),
  v = n(334732);

function S(e) {
  let {
channel: t,
guild: n,
width: a,
inPopout: s,
handleClose: l,
userParticipantCount: r
  } = e;
  return a < 250 ? (0, i.jsx)(Z, {
channel: t,
guild: n,
width: a,
inPopout: s,
handleClose: l,
userParticipantCount: r
  }) : r > 1 ? (0, i.jsx)(M, {
channel: t,
guild: n,
width: a,
inPopout: s,
handleClose: l,
userParticipantCount: r
  }) : (0, i.jsx)(A, {
channel: t,
guild: n,
width: a,
inPopout: s
  });
}

function Z(e) {
  let {
channel: t,
inPopout: n,
handleClose: a
  } = e, {
analyticsLocations: s
  } = (0, _.ZP)(p.Z.VC_TILE_ACTIVITY_SHELF_BUTTON), r = (0, u.O)(), d = () => {
(0, m.Z)({
  channel: t,
  guildId: t.guild_id,
  locationObject: r.location,
  openInPopout: n,
  analyticsLocations: s,
  opensAppLauncherModal: !0
});
  };
  return (0, i.jsx)(_.Gt, {
value: s,
children: (0, i.jsxs)(I.Z, {
  className: N.root,
  children: [
    (0, i.jsx)(c.Tooltip, {
      text: T.Z.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY,
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, i.jsx)(c.Clickable, {
          ...n,
          className: N.clickableTile,
          onClick: () => {
            null == t || t(), d();
          },
          children: (0, i.jsx)('div', {
            className: N.iconContainer,
            children: (0, i.jsx)(c.ActivitiesPlusIcon, {
              size: 'custom',
              color: 'currentColor',
              width: 40,
              height: 40
            })
          })
        });
      }
    }),
    (0, i.jsx)(c.Clickable, {
      onClick: a,
      className: l()((0, C.Q)(x.BRd.DARK), N.shelfButtonCloseButton),
      children: (0, i.jsx)(c.CircleXIcon, {
        size: 'md',
        color: 'currentColor',
        className: N.closeButtonIcon,
        secondaryColor: o.Z.colors.INTERACTIVE_NORMAL.css
      })
    })
  ]
})
  });
}

function A(e) {
  let {
channel: t,
guild: s,
inPopout: l,
width: r
  } = e;
  a.useEffect(() => {
g.default.track(x.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
  tile_type: 'activity invite',
  n_participants: 1
});
  }, []);
  let o = (0, u.O)(),
{
  analyticsLocations: d
} = (0, _.ZP)(p.Z.VC_TILE_ACTIVITY_INVITE);
  return (0, i.jsx)(_.Gt, {
value: d,
children: (0, i.jsxs)(I.Z, {
  className: N.root,
  children: [
    r > 400 ? (0, i.jsx)('img', {
      src: v,
      className: N.art,
      alt: T.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT
    }) : null,
    (0, i.jsx)(c.Text, {
      className: N.heading,
      variant: 'text-md/semibold',
      color: 'always-white',
      children: T.Z.Messages.EMBEDDED_ACTIVITIES_VC_TILE_ENTRY_POINT_INVITE
    }),
    (0, i.jsxs)('div', {
      className: N.buttonContainer,
      children: [
        (0, i.jsxs)(c.Button, {
          size: c.Button.Sizes.LARGE,
          color: c.Button.Colors.PRIMARY,
          className: N.button,
          innerClassName: N.buttonContents,
          onClick: function() {
            (0, c.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([
                n.e('7654'),
                n.e('66633')
              ]).then(n.bind(n, 560114));
              return n => (0, i.jsx)(e, {
                ...n,
                guild: s,
                channel: t,
                source: x.t4x.ACTIVITY_ENTRY_POINT_TILE
              });
            }, {
              contextKey: l ? c.POPOUT_MODAL_CONTEXT : c.DEFAULT_MODAL_CONTEXT
            });
          },
          children: [
            (0, i.jsx)(c.FriendsIcon, {
              size: 'xs',
              color: 'currentColor'
            }),
            T.Z.Messages.INVITE_FRIENDS
          ]
        }),
        (0, i.jsxs)(c.Button, {
          size: c.Button.Sizes.LARGE,
          className: N.button,
          innerClassName: N.buttonContents,
          onClick: function() {
            (0, m.Z)({
              channel: t,
              guildId: t.guild_id,
              locationObject: o.location,
              openInPopout: l,
              analyticsLocations: d,
              opensAppLauncherModal: !0
            });
          },
          children: [
            (0, i.jsx)(c.ActivitiesIcon, {
              size: 'xs',
              color: 'currentColor'
            }),
            T.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_ENTRY_POINT_TILE_CHOOSE_AN_ACTIVITY
          ]
        })
      ]
    })
  ]
})
  });
}

function M(e) {
  let {
channel: t,
guild: n,
handleClose: s,
width: o,
userParticipantCount: u
  } = e;
  a.useEffect(() => {
g.default.track(x.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
  tile_type: 'activity suggestion',
  n_participants: u
});
  }, []);
  let m = (0, d.Z)({
  guildId: n.id
}).slice(0, 3),
{
  analyticsLocations: C
} = (0, _.ZP)(p.Z.VC_TILE_ACTIVITY_SUGGESTION);
  return (0, i.jsx)(_.Gt, {
value: C,
children: (0, i.jsxs)(I.Z, {
  className: N.root,
  children: [
    o > 480 ? (0, i.jsx)('img', {
      className: N.art,
      src: v,
      alt: T.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT
    }) : null,
    o > 300 ? (0, i.jsx)(c.Text, {
      className: N.heading,
      variant: o > 550 ? 'text-md/semibold' : 'text-sm/semibold',
      children: T.Z.Messages.EMBEDDED_ACTIVITIES_VC_TILE_ENTRY_POINT_TITLE
    }) : null,
    (0, i.jsx)('div', {
      className: l()(N.activitiesContainer, {
        [N.activitiesContainerSmol]: o <= 300
      }),
      children: m.map(e => (0, i.jsx)(h.Y, {
        channel: t,
        activityItem: e,
        aspectRatio: h.Y.AspectRatio.SIXTEEN_BY_NINE,
        animatedDivClass: N.activitySuggestion
      }, e.application.id))
    }),
    (0, i.jsxs)(c.Clickable, {
      className: N.checkboxContainer,
      onClick: function() {
        g.default.track(x.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
          tile_type: 'activity suggestion',
          close_type: 'permanent',
          n_participants: u
        }), (0, f.EW)(r.z.VC_TILE_ACTIVITIES_ENTRY_POINT);
      },
      children: [
        (0, i.jsx)(E.Z, {}),
        (0, i.jsx)(c.Text, {
          variant: 'text-sm/medium',
          children: T.Z.Messages.DONT_SHOW_AGAIN
        })
      ]
    }),
    (0, i.jsx)(c.Clickable, {
      className: N.closeButtonContainer,
      onClick: function() {
        g.default.track(x.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
          tile_type: 'activity suggestion',
          close_type: 'temporary',
          n_participants: u
        }), s();
      },
      children: (0, i.jsx)(c.XSmallIcon, {
        size: 'md',
        color: 'currentColor',
        className: N.closeButton
      })
    })
  ]
})
  });
}