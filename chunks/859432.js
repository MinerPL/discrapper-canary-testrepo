t.r(n), t(47120);
var a = t(735250),
  l = t(470079),
  i = t(512722),
  s = t.n(i),
  o = t(442837),
  r = t(704215),
  d = t(481060),
  u = t(5036),
  c = t(553385),
  E = t(52011),
  I = t(890477),
  _ = t(458034),
  g = t(706140),
  M = t(362658),
  A = t(241851),
  N = t(294978),
  f = t(513102),
  h = t(976192),
  T = t(429824),
  L = t(466330),
  C = t(191471),
  p = t(162157),
  x = t(623624),
  Z = t(894059),
  m = t(771212),
  D = t(434404),
  S = t(41776),
  R = t(837949),
  b = t(11352),
  G = t(703656),
  U = t(271383),
  v = t(496675),
  O = t(9156),
  P = t(594174),
  j = t(709586),
  y = t(626135),
  w = t(981631),
  B = t(647086),
  k = t(689938),
  H = t(369339);

function V(e) {
  (0, d.openModal)(n => (0, a.jsx)(A.g, {
...n,
guild: e
  }));
}
let F = l.memo(function(e) {
  let {
guild: n,
onClose: i,
onSelect: A
  } = e, F = (0, o.e7)([P.default], () => P.default.getCurrentUser());
  s()(null != F, 'GuildHeaderPopout: user cannot be undefined'), l.useEffect(() => {
y.default.track(w.rMx.GUILD_DROPDOWN_MENU_VIEWED, {
  guild_id: n.id
});
  });
  let Y = (0, o.e7)([O.ZP], () => O.ZP.isGuildCollapsed(n.id), [n.id]),
{
  canAccessSettings: z,
  canManageChannels: K,
  showGuildAnalytics: W
} = (0, o.cj)([v.Z], () => {
  let e = v.Z.can(w.Plq.VIEW_GUILD_ANALYTICS, n) && n.hasFeature(w.oNc.COMMUNITY);
  return {
    canAccessSettings: v.Z.canAccessGuildSettings(n),
    canManageChannels: v.Z.can(w.Plq.MANAGE_CHANNELS, n),
    showGuildAnalytics: (0, m.Fv)(n.id) || e
  };
}, [n]),
q = (0, p.N8)(n),
X = n.isOwner(F),
J = (0, o.e7)([S.Z], () => S.Z.isLurking(n.id), [n.id]),
Q = (0, o.e7)([U.ZP], () => U.ZP.isCurrentUserGuest(n.id)),
$ = (0, Z.Z)(n.id, !0),
ee = (0, _.ZP)(n),
en = (0, L.Z)({
  source: w.t4x.GUILD_HEADER,
  guild: n
}),
et = (0, h.Z)({
  guildId: n.id,
  userId: F.id,
  analyticsLocation: {
    page: w.ZY5.GUILD_CHANNEL,
    section: w.jXE.GUILD_DROPDOWN_MENU
  },
  icon: d.PencilIcon
}),
ea = n.hasFeature(w.oNc.HUB),
el = n.id === B._,
ei = (0, R.Z)(n.id),
es = (0, N.Z)(n),
eo = (0, f.Z)(n),
er = (0, T.Z)(n, !0),
{
  isFavoritesPerk: ed
} = (0, M.z)('GuildHeaderPopout'),
{
  triggerDeadchat: eu
} = I.Z.useExperiment({
  guildId: n.id,
  location: 'guild header'
}, {
  autoTrackExposure: !1
}),
{
  triggerGamingStats: ec
} = E.F.useExperiment({
  guildId: n.id,
  location: 'guild header'
}, {
  autoTrackExposure: !1
}),
eE = b.Y.useExperiment({
  location: 'GuildHeaderPopout'
}, {
  autoTrackExposure: !0
}).enabled,
[eI] = (0, g.c)([r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
e_ = eE && eI === r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  return J || Q ? (0, a.jsx)(d.Menu, {
onSelect: A,
navId: 'guild-header-popout',
variant: 'fixed',
onClose: i,
'aria-label': k.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
children: (0, a.jsx)(d.MenuItem, {
  id: 'leave-guild',
  label: k.Z.Messages.LEAVE_SERVER,
  icon: d.DoorExitIcon,
  action: () => {
    D.Z.leaveGuild(n.id), !Q && (0, G.uL)(w.Z5c.GUILD_DISCOVERY);
  }
})
  }) : el ? (0, a.jsxs)(d.Menu, {
onSelect: A,
navId: 'favorites-header-popout',
variant: 'fixed',
onClose: i,
'aria-label': k.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
children: [
  (0, a.jsxs)(d.MenuGroup, {
    children: [
      ed && (0, a.jsx)(d.MenuItem, {
        id: 'add-channel',
        label: k.Z.Messages.FAVORITES_ADD_A_CHANNEL,
        color: 'brand',
        icon: d.CirclePlusIcon,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await t.e('29608').then(t.bind(t, 178125));
          return n => (0, a.jsx)(e, {
            ...n
          });
        })
      }),
      (0, a.jsx)(d.MenuItem, {
        id: 'create-category',
        label: k.Z.Messages.CREATE_CATEGORY,
        icon: d.FolderPlusIcon,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await t.e('1812').then(t.bind(t, 477782));
          return n => (0, a.jsx)(e, {
            ...n
          });
        })
      })
    ]
  }),
  (0, a.jsx)(d.MenuGroup, {
    children: (0, a.jsx)(d.MenuCheckboxItem, {
      id: 'hide-muted-channels',
      label: k.Z.Messages.HIDE_MUTED_CHANNELS,
      checked: Y,
      action: () => u.Z.toggleCollapseGuild(n.id)
    })
  })
]
  }) : ea ? (0, a.jsxs)(d.Menu, {
onSelect: A,
navId: 'guild-header-popout',
variant: 'fixed',
onClose: i,
'aria-label': k.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
children: [
  (0, a.jsxs)(d.MenuGroup, {
    children: [
      z ? (0, a.jsx)(d.MenuItem, {
        id: 'settings',
        label: k.Z.Messages.SERVER_SETTINGS,
        icon: d.SettingsIcon,
        action: () => {
          D.Z.open(n.id, w.pNK.OVERVIEW);
        }
      }) : null,
      en,
      (0, a.jsx)(d.MenuItem, {
        id: 'privacy',
        label: k.Z.Messages.PRIVACY_SETTINGS,
        icon: d.ShieldIcon,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([
            t.e('96427'),
            t.e('77298'),
            t.e('23357'),
            t.e('19503'),
            t.e('15972'),
            t.e('12013'),
            t.e('47006'),
            t.e('29609'),
            t.e('32776'),
            t.e('95900'),
            t.e('33053'),
            t.e('8016'),
            t.e('50654'),
            t.e('76540'),
            t.e('68136'),
            t.e('87624'),
            t.e('22646'),
            t.e('5528'),
            t.e('23831'),
            t.e('30419'),
            t.e('18824'),
            t.e('48870'),
            t.e('9644')
          ]).then(t.bind(t, 241420));
          return t => (0, a.jsx)(e, {
            ...t,
            guild: n
          });
        })
      }),
      et
    ]
  }),
  X ? null : (0, a.jsx)(d.MenuGroup, {
    children: (0, a.jsx)(d.MenuItem, {
      id: 'leave',
      label: k.Z.Messages.LEAVE_HUB,
      icon: d.DoorExitIcon,
      color: 'danger',
      action: () => V(n)
    })
  })
]
  }) : (0, a.jsxs)(d.Menu, {
onSelect: A,
navId: 'guild-header-popout',
variant: 'fixed',
onClose: i,
'aria-label': k.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
children: [
  (0, a.jsx)(d.MenuGroup, {
    children: (0, a.jsx)(d.MenuItem, {
      id: 'premium-subscribe',
      label: k.Z.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
      icon: (0, d.makeIconCompat)(j.Z),
      action: () => {
        (0, x.f)({
          guildId: n.id,
          location: {
            section: w.jXE.GUILD_HEADER_POPOUT
          }
        });
      }
    })
  }),
  (0, a.jsxs)(d.MenuGroup, {
    children: [
      X && F.isStaff() && eu ? (0, a.jsx)(d.MenuItem, {
        id: 'create-deadchat',
        label: 'Deadchat Ping',
        icon: d.ChatCheckIcon,
        action: () => {
          (0, c.j8)(n.id, w.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
        }
      }) : null,
      X && F.isStaff() && ec ? (0, a.jsx)(d.MenuItem, {
        id: 'create-gaming-ping',
        label: 'Gaming Stats Ping',
        icon: d.ChatCheckIcon,
        action: () => {
          (0, c.j8)(n.id, w.uaV.GUILD_GAMING_STATS_PROMPT);
        }
      }) : null,
      en,
      z ? (0, a.jsx)(d.MenuItem, {
        id: 'settings',
        label: k.Z.Messages.SERVER_SETTINGS,
        icon: d.SettingsIcon,
        action: () => {
          D.Z.open(n.id, w.pNK.OVERVIEW);
        }
      }) : null,
      W ? (0, a.jsx)(d.MenuItem, {
        id: 'insights',
        label: k.Z.Messages.SERVER_INSIGHTS,
        icon: d.AnalyticsIcon,
        action: () => D.Z.open(n.id, w.pNK.ANALYTICS)
      }) : null,
      K ? (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(d.MenuItem, {
            id: 'create-channel',
            label: k.Z.Messages.CREATE_CHANNEL,
            icon: d.CirclePlusIcon,
            action: () => (0, d.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([
                t.e('45094'),
                t.e('33574')
              ]).then(t.bind(t, 218613));
              return t => (0, a.jsx)(e, {
                ...t,
                channelType: w.d4z.GUILD_TEXT,
                guildId: n.id
              });
            })
          }),
          (0, a.jsx)(d.MenuItem, {
            id: 'create-category',
            label: k.Z.Messages.CREATE_CATEGORY,
            icon: d.FolderPlusIcon,
            action: () => (0, d.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([
                t.e('45094'),
                t.e('33574')
              ]).then(t.bind(t, 218613));
              return t => (0, a.jsx)(e, {
                ...t,
                channelType: w.d4z.GUILD_CATEGORY,
                guildId: n.id
              });
            })
          })
        ]
      }) : null,
      $,
      es,
      eo,
      ee
    ]
  }),
  (0, a.jsxs)(d.MenuGroup, {
    children: [
      ei,
      (0, a.jsx)(d.MenuItem, {
        id: 'notifications',
        label: (0, a.jsxs)('div', {
          className: H.newBadgeRow,
          children: [
            k.Z.Messages.NOTIFICATION_SETTINGS,
            e_ && (0, a.jsx)(d.TextBadge, {
              className: H.newBadge,
              text: k.Z.Messages.NEW
            })
          ]
        }),
        icon: e_ ? void 0 : d.BellIcon,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([
            t.e('5863'),
            t.e('12876')
          ]).then(t.bind(t, 751212));
          return t => (0, a.jsx)(e, {
            ...t,
            guildId: n.id
          });
        })
      }),
      (0, a.jsx)(d.MenuItem, {
        id: 'privacy',
        label: k.Z.Messages.PRIVACY_SETTINGS,
        icon: d.ShieldIcon,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([
            t.e('96427'),
            t.e('77298'),
            t.e('23357'),
            t.e('19503'),
            t.e('15972'),
            t.e('12013'),
            t.e('47006'),
            t.e('29609'),
            t.e('32776'),
            t.e('95900'),
            t.e('33053'),
            t.e('8016'),
            t.e('50654'),
            t.e('76540'),
            t.e('68136'),
            t.e('87624'),
            t.e('22646'),
            t.e('5528'),
            t.e('23831'),
            t.e('30419'),
            t.e('18824'),
            t.e('48870'),
            t.e('9644')
          ]).then(t.bind(t, 241420));
          return t => (0, a.jsx)(e, {
            ...t,
            guild: n
          });
        })
      })
    ]
  }),
  (0, a.jsxs)(d.MenuGroup, {
    children: [
      et,
      (0, a.jsx)(d.MenuCheckboxItem, {
        id: 'hide-muted-channels',
        label: k.Z.Messages.HIDE_MUTED_CHANNELS,
        checked: Y,
        action: () => u.Z.toggleCollapseGuild(n.id)
      })
    ]
  }),
  (0, a.jsxs)(d.MenuGroup, {
    children: [
      er,
      q && n.isCommunity() ? (0, a.jsx)(d.MenuItem, {
        id: 'report-raid',
        label: k.Z.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
        icon: d.ShieldIcon,
        color: 'danger',
        action: () => (0, C.J)(n.id)
      }) : null,
      X ? null : (0, a.jsx)(d.MenuItem, {
        id: 'leave',
        label: k.Z.Messages.LEAVE_SERVER,
        icon: d.DoorExitIcon,
        color: 'danger',
        action: () => V(n)
      })
    ]
  })
]
  });
});
n.default = F;