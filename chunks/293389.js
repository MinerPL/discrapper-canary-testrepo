"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("442837"),
  o = s("692547"),
  d = s("481060"),
  u = s("224706"),
  c = s("225433"),
  S = s("594190"),
  E = s("320724"),
  T = s("77498"),
  _ = s("283595"),
  f = s("186095"),
  m = s("797717"),
  g = s("546591"),
  h = s("794358"),
  N = s("880008"),
  I = s("795295"),
  p = s("169278"),
  C = s("931003"),
  A = s("507957"),
  O = s("626135"),
  x = s("251625"),
  R = s("358085"),
  M = s("210887"),
  v = s("981631"),
  D = s("689938"),
  L = s("837474"),
  P = s("344534"),
  j = s("605094"),
  b = s("850169"),
  U = s("794711");
let y = r.default.connectStores([M.default], () => ({
    theme: M.default.theme
  }))(f.default),
  B = (0, R.isWindows)();

function F(e) {
  let {
    onClose: t
  } = e, s = (0, r.useStateFromStores)([S.default], () => S.default.getCandidateGames()), [l, o] = n.useState(null), c = s.map(e => ({
    value: e.pid,
    label: null != e.name ? e.name : ""
  }));
  return (0, a.jsxs)(d.Dialog, {
    className: i()(L.addGamePopout, P.elevationBorderHigh),
    "aria-label": D.default.Messages.SETTINGS_GAMES_ADD_NEW_GAME,
    children: [(0, a.jsx)(d.SearchableSelect, {
      placeholder: D.default.Messages.SELECT,
      value: l,
      options: c,
      onChange: function(e) {
        o(e)
      }
    }), (0, a.jsx)(d.FormDivider, {
      className: i()(U.marginTop8, U.marginBottom8)
    }), (0, a.jsxs)("div", {
      className: i()(L.actions, j.horizontal),
      children: [(0, a.jsx)(d.Button, {
        className: L.cancelButton,
        look: d.ButtonLooks.LINK,
        color: d.ButtonColors.PRIMARY,
        onClick: t,
        children: D.default.Messages.CANCEL
      }), (0, a.jsx)(d.Button, {
        disabled: null == l,
        onClick: function() {
          null != l && (u.default.addGame(l), t())
        },
        children: D.default.Messages.SETTINGS_GAMES_ADD_NEW_GAME
      })]
    })]
  })
}

function G(e) {
  var t;
  let {
    rawGame: s,
    nowPlaying: l = !1,
    isOverride: E
  } = e, f = (0, r.useStateFromStoresObject)([T.default, S.default, _.default], () => (0, S.transformForGameSettings)(s)), [x, R] = n.useState(!1), [M, P] = n.useState(null !== (t = f.name) && void 0 !== t ? t : "???"), U = i()(j.flexCenter, {
    [L.game]: !l,
    [L.activeGame]: l,
    [b.card]: !l,
    [L.nowPlaying]: null != f && l
  });

  function y() {
    u.default.deleteEntry(f)
  }

  function F() {
    f.name !== M && u.default.editName(f, M)
  }

  function G(e) {
    13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault())
  }

  function k() {
    u.default.toggleDetection(f)
  }

  function H() {
    if (x) return;
    let e = null != f.id ? T.default.getDetectableGame(f.id) : null;
    O.default.track(v.AnalyticEvents.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
      application_id: null == e ? void 0 : e.id,
      game_name: f.name
    }), (0, d.showToast)((0, d.createToast)(D.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION_CONFIRMATION.format({
      gameName: f.name
    }), d.ToastType.SUCCESS)), R(!0)
  }
  return (0, a.jsxs)("div", {
    className: U,
    children: [(0, a.jsxs)("div", {
      className: i()(L.gameNameLastPlayed, j.vertical),
      children: [f.verified && !E ? (0, a.jsxs)("div", {
        className: L.detectedApplication,
        children: [(0, a.jsx)("div", {
          className: L.gameName,
          children: f.name
        }), (0, a.jsx)(d.Tooltip, {
          text: D.default.Messages.SETTINGS_GAMES_VERIFIED_ICON,
          children: e => (0, a.jsx)(m.default, {
            className: L.gameVerifiedIcon,
            size: 18,
            color: o.default.unsafe_rawColors.BRAND_500.css,
            ...e,
            children: (0, a.jsx)(A.default, {
              width: 18,
              height: 18,
              color: o.default.unsafe_rawColors.WHITE_500.css
            })
          })
        })]
      }) : (0, a.jsx)("input", {
        className: i()(L.gameName, L.gameNameInput),
        type: "text",
        maxLength: 128,
        value: M,
        onBlur: F,
        onKeyDown: G,
        onChange: e => P(e.target.value)
      }), function() {
        let e;
        let {
          played: t,
          exePath: s
        } = f;
        return l ? e = D.default.Messages.SETTINGS_GAMES_NOW_PLAYING_STATE : null != t && "" !== t && (e = D.default.Messages.SETTINGS_GAMES_LAST_PLAYED.format({
          when: t
        })), (0, a.jsx)("div", {
          className: L.lastPlayed,
          children: (0, a.jsx)(g.default, {
            hoverText: null != s && "" !== s ? s.toUpperCase() : "",
            children: e
          })
        })
      }()]
    }), E ? null : x ? null : (0, a.jsx)("div", {
      className: i()(j.flexCenter, j.noWrap, j.justifyBetween, L.toggleContainer),
      children: (0, a.jsx)(d.Tooltip, {
        text: D.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: s
          } = e;
          return (0, a.jsx)(d.Clickable, {
            "aria-label": D.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
            className: L.toggleIcon,
            onClick: H,
            onMouseEnter: t,
            onMouseLeave: s,
            children: (0, a.jsx)(I.default, {
              className: L.toggleIconOn,
              foreground: L.fill,
              width: 24,
              height: 24
            })
          })
        }
      })
    }), function() {
      let {
        detectable: e
      } = f, t = e ? (0, a.jsx)(h.default, {
        className: L.toggleIconOn,
        foreground: L.fill,
        width: 24,
        height: 24
      }) : (0, a.jsx)(N.default, {
        className: L.toggleIconOff,
        background: L.fill,
        foreground: L.fill,
        width: 24,
        height: 24
      });
      return (0, a.jsx)("div", {
        className: i()(j.flexCenter, j.noWrap, j.justifyBetween, L.toggleContainer),
        children: (0, a.jsx)(d.Tooltip, {
          text: D.default.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
          children: e => {
            let {
              onMouseEnter: s,
              onMouseLeave: n
            } = e;
            return (0, a.jsx)(d.Clickable, {
              "aria-label": D.default.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
              className: L.toggleIcon,
              onClick: k,
              onMouseEnter: s,
              onMouseLeave: n,
              children: t
            })
          }
        })
      })
    }(), function() {
      if (!B) return null;
      let {
        overlay: e,
        overlayWarn: t
      } = f, s = e ? (0, a.jsx)(p.default, {
        className: L.toggleIconOn,
        foreground: L.fill
      }) : (0, a.jsx)(C.default, {
        className: L.toggleIconOff,
        foreground: L.fill
      }), n = t ? (0, a.jsx)(d.Tooltip, {
        text: D.default.Messages.SETTINGS_GAMES_OVERLAY_WARNING,
        children: e => (0, a.jsx)("i", {
          className: L.overlayWarningIcon,
          ...e
        })
      }) : null;
      return (0, a.jsxs)("div", {
        className: i()(j.flexCenter, j.noWrap, j.justifyBetween, L.toggleContainer),
        children: [n, (0, a.jsx)(d.Tooltip, {
          text: D.default.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
          children: t => {
            let {
              onMouseEnter: n,
              onMouseLeave: l
            } = t;
            return (0, a.jsx)(d.Clickable, {
              "aria-label": D.default.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
              className: L.toggleIcon,
              onClick: () => {
                var t;
                return t = !e, void u.default.toggleOverlay(f, t)
              },
              onMouseEnter: n,
              onMouseLeave: l,
              children: s
            })
          }
        })]
      })
    }(), !l || E ? (0, a.jsx)(c.default, {
      className: L.removeGame,
      onClick: y
    }) : null]
  })
}

function k() {
  return (0, a.jsx)("div", {
    className: i()(j.flexCenter, L.notDetected, L.activeGame),
    children: (0, a.jsxs)("div", {
      className: i()(L.gameNameLastPlayed, j.vertical),
      children: [(0, a.jsx)("div", {
        className: L.gameName,
        children: D.default.Messages.SETTINGS_GAMES_NO_GAME_DETECTED
      }), (0, a.jsx)("div", {
        className: L.lastPlayed,
        children: D.default.Messages.SETTINGS_GAMES_NOT_PLAYING
      })]
    })
  })
}

function H(e) {
  let {
    children: t
  } = e;
  return (0, a.jsxs)(y, {
    className: U.marginTop40,
    children: [(0, a.jsx)(f.EmptyStateImage, {
      darkSrc: s("879601"),
      lightSrc: s("889000"),
      width: 430,
      height: 250
    }), t]
  })
}
let w = (0, x.cachedFunction)(function() {
  for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
  return new Set(t.map(e => e.exePath))
});
t.default = function() {
  let e = (0, r.useStateFromStoresArray)([S.default], () => S.default.getGamesSeen(!0)),
    {
      runningGame: t,
      overrideExePaths: s
    } = (0, r.useStateFromStoresObject)([S.default], () => ({
      runningGame: S.default.getVisibleGame(),
      overrideExePaths: w(...S.default.getOverrides())
    }));
  return n.useEffect(() => ((0, E.watchCandidateGames)(), E.stopWatchingCandidateGames), []), (0, a.jsxs)(d.FormSection, {
    tag: "h1",
    title: D.default.Messages.REGISTERED_GAMES,
    children: [null != t ? (0, a.jsx)(G, {
      rawGame: t,
      isOverride: s.has(t.exePath),
      nowPlaying: !0
    }, (0, S.gameKey)(t)) : (0, a.jsx)(k, {}), (0, a.jsxs)("div", {
      className: i()(L.nowPlayingAdd, U.marginReset, U.marginTop8, U.marginBottom20),
      children: [(0, a.jsx)("span", {
        children: D.default.Messages.SETTINGS_GAMES_NOT_SEEING_GAME
      }), (0, a.jsx)(d.Popout, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, a.jsx)(F, {
            onClose: t
          })
        },
        align: "center",
        position: "bottom",
        children: e => (0, a.jsx)(d.Button, {
          ...e,
          look: d.ButtonLooks.LINK,
          size: d.ButtonSizes.MIN,
          color: d.ButtonColors.LINK,
          children: D.default.Messages.SETTINGS_GAMES_ADD_GAME
        })
      })]
    }), 0 === e.length ? (0, a.jsx)(H, {
      children: (0, a.jsx)(f.EmptyStateText, {
        children: D.default.Messages.SETTINGS_GAMES_NO_GAMES_HEADER
      })
    }) : (0, a.jsxs)(d.FormSection, {
      className: U.marginTop40,
      children: [(0, a.jsx)(d.FormTitle, {
        className: U.marginBottom4,
        children: D.default.Messages.SETTINGS_GAMES_ADDED_GAMES_LABEL
      }), e.map(e => (0, a.jsx)(G, {
        rawGame: e,
        isOverride: s.has(e.exePath)
      }, (0, S.gameKey)(e)))]
    })]
  })
}