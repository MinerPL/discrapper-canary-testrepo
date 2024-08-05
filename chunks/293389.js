s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(442837),
  l = s(692547),
  c = s(481060),
  d = s(224706),
  _ = s(225433),
  E = s(570928),
  u = s(594190),
  T = s(320724),
  I = s(297700),
  S = s(77498),
  N = s(283595),
  C = s(626135),
  m = s(251625),
  A = s(358085),
  g = s(210887),
  h = s(981631),
  O = s(689938),
  p = s(49384),
  R = s(759823),
  x = s(483085),
  M = s(735194),
  f = s(549856);
let D = o.ZP.connectStores([g.Z], () => ({
theme: g.Z.theme
  }))(c.EmptyState),
  P = (0, A.isWindows)();

function L(e) {
  let {
onClose: t
  } = e, s = (0, o.e7)([u.ZP], () => u.ZP.getCandidateGames()), [i, l] = a.useState(null), _ = s.map(e => ({
key: e.pid,
value: e,
label: null != e.name ? e.name : ''
  }));
  return (0, n.jsxs)(c.Dialog, {
className: r()(p.addGamePopout, R.elevationBorderHigh),
'aria-label': O.Z.Messages.SETTINGS_GAMES_ADD_NEW_GAME,
children: [
  (0, n.jsx)(c.SearchableSelect, {
    placeholder: O.Z.Messages.SELECT,
    value: i,
    options: _,
    onChange: function(e) {
      l(e);
    },
    renderOptionLabel: e => (0, n.jsx)(c.Text, {
      variant: 'text-md/medium',
      color: 'text-normal',
      lineClamp: 1,
      children: e.label
    })
  }),
  (0, n.jsx)(c.FormDivider, {
    className: r()(f.marginTop8, f.marginBottom8)
  }),
  (0, n.jsxs)('div', {
    className: r()(p.actions, x.horizontal),
    children: [
      (0, n.jsx)(c.Button, {
        className: p.cancelButton,
        look: c.ButtonLooks.LINK,
        color: c.ButtonColors.PRIMARY,
        onClick: t,
        children: O.Z.Messages.CANCEL
      }),
      (0, n.jsx)(c.Button, {
        disabled: null == i,
        onClick: function() {
          if (null != i)
            d.Z.addGame(i.pid, i.name), t();
        },
        children: O.Z.Messages.SETTINGS_GAMES_ADD_NEW_GAME
      })
    ]
  })
]
  });
}

function b(e) {
  var t;
  let {
rawGame: s,
nowPlaying: i = !1,
isOverride: T
  } = e, m = (0, o.cj)([
S.Z,
u.ZP,
N.Z
  ], () => (0, u.FZ)(s)), [A, g] = a.useState(!1), [R, f] = a.useState(null !== (t = m.name) && void 0 !== t ? t : '???'), D = r()(x.flexCenter, {
[p.game]: !i,
[p.activeGame]: i,
[M.card]: !i,
[p.nowPlaying]: null != m && i
  });

  function L() {
d.Z.deleteEntry(m);
  }

  function b() {
m.name !== R && d.Z.editName(m, R);
  }

  function Z(e) {
13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault());
  }

  function v() {
d.Z.toggleDetection(m);
  }

  function j() {
if (A)
  return;
let e = null != m.id ? S.Z.getDetectableGame(m.id) : null;
C.default.track(h.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
  application_id: null == e ? void 0 : e.id,
  game_name: m.name
}), (0, c.showToast)((0, c.createToast)(O.Z.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION_CONFIRMATION.format({
  gameName: m.name
}), c.ToastType.SUCCESS)), g(!0);
  }
  return (0, n.jsxs)('div', {
className: D,
children: [
  (0, n.jsxs)('div', {
    className: r()(p.gameNameLastPlayed, x.vertical),
    children: [
      m.verified && !T ? (0, n.jsxs)('div', {
        className: p.detectedApplication,
        children: [
          (0, n.jsx)('div', {
            className: p.gameName,
            children: m.name
          }),
          (0, n.jsx)(c.Tooltip, {
            text: O.Z.Messages.SETTINGS_GAMES_VERIFIED_ICON,
            children: e => (0, n.jsx)(I.Z, {
              className: p.gameVerifiedIcon,
              size: 18,
              color: l.Z.unsafe_rawColors.BRAND_500.css,
              ...e,
              children: (0, n.jsx)(c.CheckmarkSmallIcon, {
                size: 'custom',
                width: 18,
                height: 18,
                color: l.Z.unsafe_rawColors.WHITE_500.css
              })
            })
          })
        ]
      }) : (0, n.jsx)('input', {
        className: r()(p.gameName, p.gameNameInput),
        type: 'text',
        maxLength: 128,
        value: R,
        onBlur: b,
        onKeyDown: Z,
        onChange: e => f(e.target.value)
      }),
      function() {
        let e;
        let {
          played: t,
          exePath: s
        } = m;
        return i ? e = O.Z.Messages.SETTINGS_GAMES_NOW_PLAYING_STATE : null != t && '' !== t && (e = O.Z.Messages.SETTINGS_GAMES_LAST_PLAYED.format({
          when: t
        })), (0, n.jsx)('div', {
          className: p.lastPlayed,
          children: (0, n.jsx)(E.Z, {
            hoverText: null != s && '' !== s ? s.toUpperCase() : '',
            children: e
          })
        });
      }()
    ]
  }),
  T ? null : A ? null : (0, n.jsx)('div', {
    className: r()(x.flexCenter, x.noWrap, x.justifyBetween, p.toggleContainer),
    children: (0, n.jsx)(c.Tooltip, {
      text: O.Z.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: s
        } = e;
        return (0, n.jsx)(c.Clickable, {
          'aria-label': O.Z.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
          className: p.toggleIcon,
          onClick: j,
          onMouseEnter: t,
          onMouseLeave: s,
          children: (0, n.jsx)(c.FlagIcon, {
            size: 'md',
            color: 'currentColor',
            className: p.toggleIconOn,
            colorClass: p.fill
          })
        });
      }
    })
  }),
  function() {
    let {
      detectable: e
    } = m, t = e ? (0, n.jsx)(c.EyeIcon, {
      size: 'md',
      color: 'currentColor',
      className: p.toggleIconOn,
      colorClass: p.fill
    }) : (0, n.jsx)(c.EyeSlashIcon, {
      size: 'md',
      color: 'currentColor',
      className: p.toggleIconOff,
      colorClass: p.fill
    });
    return (0, n.jsx)('div', {
      className: r()(x.flexCenter, x.noWrap, x.justifyBetween, p.toggleContainer),
      children: (0, n.jsx)(c.Tooltip, {
        text: O.Z.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
        children: e => {
          let {
            onMouseEnter: s,
            onMouseLeave: a
          } = e;
          return (0, n.jsx)(c.Clickable, {
            'aria-label': O.Z.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
            className: p.toggleIcon,
            onClick: v,
            onMouseEnter: s,
            onMouseLeave: a,
            children: t
          });
        }
      })
    });
  }(),
  function() {
    if (!P)
      return null;
    let {
      overlay: e,
      overlayWarn: t
    } = m, s = e ? (0, n.jsx)(c.ScreenIcon, {
      size: 'md',
      color: 'currentColor',
      className: p.toggleIconOn,
      colorClass: p.fill
    }) : (0, n.jsx)(c.ScreenSlashIcon, {
      size: 'md',
      color: 'currentColor',
      className: p.toggleIconOff,
      colorClass: p.fill
    }), a = t ? (0, n.jsx)(c.Tooltip, {
      text: O.Z.Messages.SETTINGS_GAMES_OVERLAY_WARNING,
      children: e => (0, n.jsx)('i', {
        className: p.overlayWarningIcon,
        ...e
      })
    }) : null;
    return (0, n.jsxs)('div', {
      className: r()(x.flexCenter, x.noWrap, x.justifyBetween, p.toggleContainer),
      children: [
        a,
        (0, n.jsx)(c.Tooltip, {
          text: O.Z.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
          children: t => {
            let {
              onMouseEnter: a,
              onMouseLeave: i
            } = t;
            return (0, n.jsx)(c.Clickable, {
              'aria-label': O.Z.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
              className: p.toggleIcon,
              onClick: () => {
                var t;
                return t = !e, void d.Z.toggleOverlay(m, t);
              },
              onMouseEnter: a,
              onMouseLeave: i,
              children: s
            });
          }
        })
      ]
    });
  }(),
  !i || T ? (0, n.jsx)(_.Z, {
    className: p.removeGame,
    onClick: L
  }) : null
]
  });
}

function Z() {
  return (0, n.jsx)('div', {
className: r()(x.flexCenter, p.notDetected, p.activeGame),
children: (0, n.jsxs)('div', {
  className: r()(p.gameNameLastPlayed, x.vertical),
  children: [
    (0, n.jsx)('div', {
      className: p.gameName,
      children: O.Z.Messages.SETTINGS_GAMES_NO_GAME_DETECTED
    }),
    (0, n.jsx)('div', {
      className: p.lastPlayed,
      children: O.Z.Messages.SETTINGS_GAMES_NOT_PLAYING
    })
  ]
})
  });
}

function v(e) {
  let {
children: t
  } = e;
  return (0, n.jsxs)(D, {
className: f.marginTop40,
children: [
  (0, n.jsx)(c.EmptyStateImage, {
    darkSrc: s(879601),
    lightSrc: s(889000),
    width: 430,
    height: 250
  }),
  t
]
  });
}
let j = (0, m.oH)(function() {
  for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
t[s] = arguments[s];
  return new Set(t.map(e => e.exePath));
});
t.Z = function(e) {
  let {
className: t,
showHeader: s = !0
  } = e, i = (0, o.Wu)([u.ZP], () => u.ZP.getGamesSeen(!0)), {
runningGame: l,
overrideExePaths: d
  } = (0, o.cj)([u.ZP], () => ({
runningGame: u.ZP.getVisibleGame(),
overrideExePaths: j(...u.ZP.getOverrides())
  }));
  return a.useEffect(() => ((0, T.Ky)(), T.P7), []), (0, n.jsxs)(c.FormSection, {
tag: 'h1',
title: s ? O.Z.Messages.REGISTERED_GAMES : null,
className: t,
children: [
  null != l ? (0, n.jsx)(b, {
    rawGame: l,
    isOverride: d.has(l.exePath),
    nowPlaying: !0
  }, (0, u.rH)(l)) : (0, n.jsx)(Z, {}),
  (0, n.jsxs)('div', {
    className: r()(p.nowPlayingAdd, f.marginReset, f.marginTop8, f.marginBottom20),
    children: [
      (0, n.jsx)('span', {
        children: O.Z.Messages.SETTINGS_GAMES_NOT_SEEING_GAME
      }),
      (0, n.jsx)(c.Popout, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, n.jsx)(L, {
            onClose: t
          });
        },
        align: 'center',
        position: 'bottom',
        children: e => (0, n.jsx)(c.Button, {
          ...e,
          look: c.ButtonLooks.LINK,
          size: c.ButtonSizes.MIN,
          color: c.ButtonColors.LINK,
          children: O.Z.Messages.SETTINGS_GAMES_ADD_GAME
        })
      })
    ]
  }),
  0 === i.length ? (0, n.jsx)(v, {
    children: (0, n.jsx)(c.EmptyStateText, {
      children: O.Z.Messages.SETTINGS_GAMES_NO_GAMES_HEADER
    })
  }) : (0, n.jsxs)(c.FormSection, {
    className: f.marginTop40,
    children: [
      (0, n.jsx)(c.FormTitle, {
        className: f.marginBottom4,
        children: O.Z.Messages.SETTINGS_GAMES_ADDED_GAMES_LABEL
      }),
      (0, n.jsx)(c.FormText, {
        type: c.FormTextTypes.DESCRIPTION,
        children: O.Z.Messages.SETTINGS_GAMES_IGDB_ATTRIBUTION.format({
          igdbLink: 'https://www.igdb.com/about'
        })
      }),
      i.map(e => (0, n.jsx)(b, {
        rawGame: e,
        isOverride: d.has(e.exePath)
      }, (0, u.rH)(e)))
    ]
  })
]
  });
};