a.d(s, {
  Z: function() {
return h;
  }
}), a(47120);
var t = a(735250),
  n = a(470079),
  i = a(120356),
  l = a.n(i),
  r = a(442837),
  c = a(481060),
  d = a(430824),
  o = a(771845),
  _ = a(259580),
  I = a(186523),
  N = a(553826),
  x = a(689938),
  m = a(731612),
  T = a(485621);

function h(e) {
  let {
count: s
  } = e, [a, i] = n.useState('server');
  return (0, t.jsxs)(c.Scroller, {
className: m.content,
children: [
  (0, t.jsxs)('div', {
    className: l()(m.header, T.header),
    children: [
      (0, t.jsx)(c.CircleCheckIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 40,
        height: 40
      }),
      (0, t.jsx)(c.Heading, {
        variant: 'heading-xl/bold',
        color: 'header-primary',
        children: x.Z.Messages.NOTIF_MIGRATION_TIPS_TITLE.format({
          count: s
        })
      }),
      (0, t.jsx)(c.Text, {
        className: m.__invalid_subtitle,
        variant: 'text-md/medium',
        color: 'header-secondary',
        children: x.Z.Messages.NOTIF_MIGRATION_TIPS_SUB_TITLE
      })
    ]
  }),
  (0, t.jsxs)('div', {
    className: T.tabs,
    children: [
      (0, t.jsx)('div', {
        className: T.tabBackground,
        style: {
          left: 'server' === a ? 0 : '50%'
        }
      }),
      (0, t.jsx)(c.Clickable, {
        className: T.tab,
        onClick: () => i('server'),
        children: (0, t.jsx)(c.Text, {
          variant: 'text-sm/medium',
          color: 'server' === a ? 'header-primary' : 'text-muted',
          children: x.Z.Messages.NOTIF_MIGRATION_TIPS_TAB1
        })
      }),
      (0, t.jsx)(c.Clickable, {
        className: T.tab,
        onClick: () => i('channel'),
        children: (0, t.jsx)(c.Text, {
          variant: 'text-sm/medium',
          color: 'channel' === a ? 'header-primary' : 'text-muted',
          children: x.Z.Messages.NOTIF_MIGRATION_TIPS_TAB2
        })
      })
    ]
  }),
  (0, t.jsxs)('div', {
    className: T.container,
    children: [
      (0, t.jsx)(u, {
        hidden: 'channel' === a
      }),
      (0, t.jsx)(O, {
        hidden: 'server' === a
      })
    ]
  })
]
  });
}

function u(e) {
  let {
hidden: s
  } = e, a = (0, r.e7)([
d.Z,
o.ZP
  ], () => {
var e;
return null === (e = d.Z.getGuild(o.ZP.getFlattenedGuildIds()[0])) || void 0 === e ? void 0 : e.name;
  }), [i, I] = n.useState(0);
  return n.useEffect(() => {
if (s)
  return;
let e = 0,
  a = [
    1500,
    1000,
    1000,
    500
  ].map((s, a) => setTimeout(() => I(a + 1), e += s));
return () => {
  a.forEach(e => clearTimeout(e)), setTimeout(() => I(0), 150);
};
  }, [s]), (0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsx)('div', {
    className: T.containerInner,
    children: (0, t.jsxs)('div', {
      className: l()(T.serversSection, {
        [T.hidden]: s,
        [T.showBigMenu]: i >= 1,
        [T.fadeChannels]: i >= 1,
        [T.showModal]: i >= 3
      }),
      children: [
        (0, t.jsxs)('div', {
          className: T.channels,
          children: [
            (0, t.jsxs)('div', {
              className: T.guildName,
              children: [
                (0, t.jsx)(c.Text, {
                  variant: 'text-md/medium',
                  color: 'interactive-active',
                  lineClamp: 1,
                  children: null != a ? a : 'Keyboard Nerds'
                }),
                i >= 1 ? (0, t.jsx)(c.XSmallIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: T.icon
                }) : (0, t.jsx)(_.Z, {
                  className: l()(T.__invalid_downCaret, T.icon),
                  width: 24,
                  height: 24
                })
              ]
            }),
            (0, t.jsx)(j, {
              name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2
            }),
            (0, t.jsx)(j, {
              name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1
            }),
            (0, t.jsx)(j, {
              grey: !0,
              name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3
            }),
            (0, t.jsx)(j, {
              grey: !0,
              name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4
            }),
            (0, t.jsx)(j, {
              grey: !0,
              name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5
            }),
            (0, t.jsx)(j, {
              nodot: !0,
              name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_6
            }),
            (0, t.jsx)(j, {
              nodot: !0,
              name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_7
            })
          ]
        }),
        (0, t.jsxs)('div', {
          className: T.bigMenu,
          children: [
            (0, t.jsx)(b, {
              text: x.Z.Messages.INVITE_PEOPLE,
              icon: (0, t.jsx)(c.GroupPlusIcon, {
                size: 'sm',
                className: T.icon
              })
            }),
            (0, t.jsx)('div', {
              className: T.divider
            }),
            (0, t.jsx)(b, {
              active: i >= 2,
              text: x.Z.Messages.NOTIFICATION_SETTINGS,
              icon: (0, t.jsx)(c.BellIcon, {
                size: 'sm',
                color: 'currentColor',
                className: T.icon
              })
            }),
            (0, t.jsx)(b, {
              text: x.Z.Messages.PRIVACY_SETTINGS,
              icon: (0, t.jsx)(c.ShieldIcon, {
                size: 'sm',
                color: 'currentColor',
                className: T.icon
              })
            }),
            (0, t.jsx)(b, {
              text: x.Z.Messages.SERVER_SETTINGS,
              icon: (0, t.jsx)(c.SettingsIcon, {
                size: 'sm',
                color: 'currentColor',
                className: T.icon
              })
            }),
            (0, t.jsx)(b, {
              text: x.Z.Messages.CREATE_EVENTS,
              icon: (0, t.jsx)(c.CalendarPlusIcon, {
                size: 'sm',
                color: 'currentColor',
                className: T.icon
              })
            })
          ]
        }),
        (0, t.jsxs)('div', {
          className: T.notifModal,
          children: [
            (0, t.jsx)(c.Text, {
              className: T.modalHeader,
              variant: 'text-md/medium',
              color: 'interactive-active',
              children: x.Z.Messages.NOTIFICATION_SETTINGS
            }),
            (0, t.jsxs)('div', {
              className: T.notifTabs,
              children: [
                (0, t.jsxs)('div', {
                  className: T.notifTab,
                  children: [
                    (0, t.jsx)(c.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor'
                    }),
                    (0, t.jsx)(c.Text, {
                      variant: 'text-xs/medium',
                      color: 'text-muted',
                      lineClamp: 1,
                      children: x.Z.Messages.NOTIFICATION_PRESET_1
                    })
                  ]
                }),
                (0, t.jsxs)('div', {
                  className: T.activeNotifTab,
                  children: [
                    (0, t.jsx)(c.AtIcon, {
                      size: 'md',
                      color: 'currentColor'
                    }),
                    (0, t.jsx)(c.Text, {
                      variant: 'text-xs/medium',
                      color: 'interactive-active',
                      lineClamp: 1,
                      children: x.Z.Messages.NOTIFICATION_PRESET_2
                    })
                  ]
                }),
                (0, t.jsxs)('div', {
                  className: T.notifTab,
                  children: [
                    (0, t.jsx)(c.BellSlashIcon, {
                      size: 'md',
                      color: 'currentColor'
                    }),
                    (0, t.jsx)(c.Text, {
                      variant: 'text-xs/medium',
                      color: 'text-muted',
                      lineClamp: 1,
                      children: x.Z.Messages.NOTIFICATION_PRESET_3
                    })
                  ]
                })
              ]
            }),
            (0, t.jsxs)('div', {
              className: T.controls,
              children: [
                (0, t.jsxs)('div', {
                  className: T.control,
                  children: [
                    (0, t.jsx)('div', {
                      className: T.controlPlaceholder
                    }),
                    (0, t.jsx)('div', {
                      className: T.switchOn
                    })
                  ]
                }),
                (0, t.jsxs)('div', {
                  className: T.control,
                  children: [
                    (0, t.jsx)('div', {
                      className: T.controlPlaceholder
                    }),
                    (0, t.jsx)('div', {
                      className: T.switchOff
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    })
  }),
  (0, t.jsx)(g, {
    text: x.Z.Messages.NOTIF_MIGRATION_TIPS_TAB1_TIP2,
    className: T.tipServers2,
    hidden: s || i < 4
  })
]
  });
}

function O(e) {
  let {
hidden: s
  } = e, [a, i] = n.useState(0);
  return n.useEffect(() => {
if (s)
  return;
let e = 0,
  a = [
    1000,
    1000,
    1000,
    800,
    800
  ].map((s, a) => setTimeout(() => i(a + 1), e += s));
return () => {
  a.forEach(e => clearTimeout(e)), setTimeout(() => i(0), 150);
};
  }, [s]), (0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsx)('div', {
    className: T.containerInner,
    children: (0, t.jsxs)('div', {
      className: l()(T.channelsSection, {
        [T.hidden]: s,
        [T.fadeOtherChannels]: a >= 2,
        [T.showLeftMenu]: a >= 2,
        [T.showRightMenu]: a >= 3
      }),
      children: [
        (0, t.jsxs)('div', {
          className: T.channels,
          children: [
            (0, t.jsx)(j, {
              selected: a >= 1,
              grey: a >= 5,
              name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2
            }),
            (0, t.jsx)(j, {
              name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1
            }),
            (0, t.jsx)(j, {
              grey: !0,
              name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3
            }),
            (0, t.jsx)(j, {
              grey: !0,
              name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4
            }),
            (0, t.jsx)(j, {
              grey: !0,
              name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5
            }),
            (0, t.jsx)(j, {
              nodot: !0,
              name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_6
            }),
            (0, t.jsx)(j, {
              nodot: !0,
              name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_7
            })
          ]
        }),
        (0, t.jsxs)('div', {
          className: l()(T.menu, T.leftMenu),
          children: [
            (0, t.jsx)(b, {
              small: !0,
              text: x.Z.Messages.MUTE,
              icon: (0, t.jsx)(_.Z, {
                className: T.caret,
                width: 12,
                height: 12
              })
            }),
            (0, t.jsx)(b, {
              small: !0,
              text: x.Z.Messages.NOTIFICATIONS,
              active: a >= 3,
              icon: (0, t.jsx)(_.Z, {
                className: T.caret,
                width: 12,
                height: 12
              })
            })
          ]
        }),
        (0, t.jsxs)('div', {
          className: l()(T.menu, T.rightMenu),
          children: [
            (0, t.jsx)(b, {
              small: !0,
              text: x.Z.Messages.NOTIFICATION_PRESET_1,
              icon: a <= 4 ? (0, t.jsx)(N.Z, {
                className: T.icon,
                width: 12,
                height: 12
              }) : (0, t.jsx)(I.Z, {
                className: T.icon,
                width: 12,
                height: 12
              }),
              active: a <= 4
            }),
            (0, t.jsx)(b, {
              small: !0,
              text: x.Z.Messages.NOTIFICATION_PRESET_2,
              icon: a >= 5 ? (0, t.jsx)(N.Z, {
                className: T.icon,
                width: 12,
                height: 12
              }) : (0, t.jsx)(I.Z, {
                className: T.icon,
                width: 12,
                height: 12
              }),
              active: a >= 5
            }),
            (0, t.jsx)(b, {
              small: !0,
              text: x.Z.Messages.NOTIFICATION_PRESET_3,
              icon: (0, t.jsx)(I.Z, {
                className: T.icon,
                width: 12,
                height: 12
              })
            }),
            (0, t.jsx)(b, {
              small: !0,
              text: x.Z.Messages.NOTIFICATION_PRESET_CUSTOM,
              icon: (0, t.jsx)(I.Z, {
                className: T.icon,
                width: 12,
                height: 12
              })
            })
          ]
        })
      ]
    })
  }),
  (0, t.jsx)(g, {
    text: x.Z.Messages.NOTIF_MIGRATION_TIPS_TAB2_TIP1,
    className: T.tipChannels1,
    hidden: s || a < 4
  }),
  (0, t.jsx)(g, {
    text: x.Z.Messages.NOTIF_MIGRATION_TIPS_TAB2_TIP2,
    className: T.tipChannels2,
    hidden: s || a < 4
  })
]
  });
}

function g(e) {
  let {
text: s,
className: a,
hidden: n
  } = e;
  return (0, t.jsxs)('div', {
className: l()(a, T.tip, {
  [T.hidden]: n
}),
children: [
  (0, t.jsx)(c.Text, {
    className: T.__invalid_tipText,
    variant: 'text-sm/normal',
    color: 'text-secondary',
    children: s
  }),
  (0, t.jsx)('div', {
    className: T.tipLine
  })
]
  });
}

function j(e) {
  let {
grey: s,
nodot: a,
selected: n,
name: i
  } = e;
  return (0, t.jsxs)('div', {
className: l()(T.channel, {
  [T.grey]: s || a,
  [T.nodot]: a,
  [T.selected]: n
}),
children: [
  (0, t.jsx)(c.TextIcon, {
    size: 'xs',
    color: 'currentColor',
    className: T.channelIcon
  }),
  (0, t.jsx)(c.Text, {
    variant: 'text-md/medium',
    className: T.channelName,
    children: i
  })
]
  });
}

function b(e) {
  let {
text: s,
active: a,
small: n,
icon: i
  } = e;
  return (0, t.jsxs)('div', {
className: l()(T.menuItem, {
  [T.active]: a
}),
children: [
  (0, t.jsx)(c.Text, {
    variant: n ? 'text-xs/normal' : 'text-sm/normal',
    color: a ? 'always-white' : 'interactive-normal',
    children: s
  }),
  i
]
  });
}