"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("577776"),
  o = n("452804"),
  d = n("579408"),
  c = n("890503"),
  f = n("168973"),
  h = n("981913"),
  m = n("576242"),
  p = n("18494"),
  E = n("697218"),
  g = n("717018"),
  S = n("811305"),
  C = n("659500"),
  _ = n("439932"),
  I = n("550766"),
  T = n("191225"),
  v = n("575136"),
  x = n("698372"),
  N = n("401207"),
  A = n("320817"),
  M = n("803997"),
  R = n("272505"),
  j = n("49111"),
  L = n("782340"),
  y = n("986304");
let O = {
  [R.FocusedActivityLayouts.NO_CHAT]: y.noChat,
  [R.FocusedActivityLayouts.RESIZABLE]: y.resizable
};

function P(e) {
  var t, n, s;
  let {
    maxHeight: P,
    connectedChannelId: D,
    renderExternalHeader: b
  } = e, U = (0, x.default)(), w = (0, r.useStateFromStoresArray)([T.default], () => null != D ? T.default.getEmbeddedActivitiesForChannel(D) : [], [D]), F = (0, v.useEmbeddedApps)(w), V = (0, v.useEmbeddedAppsWithPresence)(F), k = l.useCallback(() => {
    (0, I.updateActivityPanelMode)(R.ActivityPanelModes.PIP)
  }, []), H = l.useRef(null), G = (0, r.useStateFromStores)([T.default], () => T.default.getFocusedLayout()), B = G !== R.FocusedActivityLayouts.NO_CHAT, [W, Y] = l.useState(null !== (s = f.default.activityPanelHeight) && void 0 !== s ? s : P), z = l.useCallback(e => {
    o.default.updatedUnsyncedSettings({
      activityPanelHeight: e
    })
  }, []), K = l.useRef(null), [Z, X] = l.useState({
    width: 0,
    height: 0
  });
  l.useLayoutEffect(() => {
    if (null == K.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, a;
      let l = null !== (n = null === (e = K.current) || void 0 === e ? void 0 : e.clientWidth) && void 0 !== n ? n : 0;
      X({
        width: l,
        height: null !== (a = null === (t = K.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== a ? a : 0
      })
    });
    return e.observe(K.current), () => e.disconnect()
  }, []);
  let Q = Z.width / Math.max(Z.height, 1),
    q = Q < R.LANDSCAPE_ACTIVITY_ASPECT_RATIO,
    J = 0,
    $ = 0,
    ee = (0, c.default)("activity_panel_iframe_fills_container");
  if (!ee) {
    let e = Z.width,
      t = Z.height;
    q ? ((t = Z.width / R.LANDSCAPE_ACTIVITY_ASPECT_RATIO) > Z.height && (e = (t = Z.height) * R.LANDSCAPE_ACTIVITY_ASPECT_RATIO), $ = (Z.height - t) / 2) : ((e = Math.min(Z.height * R.LANDSCAPE_ACTIVITY_ASPECT_RATIO)) > Z.width && (t = (e = Z.width) / R.LANDSCAPE_ACTIVITY_ASPECT_RATIO), J = (Z.width - e) / 2)
  }
  let et = (0, r.useStateFromStores)([p.default], () => p.default.getChannelId());
  if (null == U) return null;
  let en = V.get(null === (n = F[0]) || void 0 === n ? void 0 : null === (t = n.application) || void 0 === t ? void 0 : t.id),
    ea = [];
  return null != en && (ea = Array.from(en.embeddedActivity.userIds).map(e => E.default.getUser(e)).filter(e => null != e && void 0 !== e)), (0, a.jsxs)("div", {
    className: i(y.wrapper, O[G], (0, _.getThemeClass)(j.ThemeTypes.DARK)),
    ref: H,
    style: B && null != W ? {
      minHeight: 200,
      maxHeight: P,
      height: W
    } : void 0,
    children: [null == b ? void 0 : b(), (0, a.jsxs)("div", {
      className: y.activityPanelContainer,
      children: [B ? null : (0, a.jsx)("div", {
        className: y.header,
        children: (0, a.jsx)(u.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          className: y.headerTitle,
          children: null == U ? void 0 : U.name
        })
      }), (0, a.jsx)("div", {
        className: i(y.activityContainer, {
          [y.activityContainerNoMargin]: ee
        }),
        style: {
          paddingLeft: J,
          paddingRight: J,
          paddingTop: $,
          paddingBottom: $
        },
        ref: K,
        children: (0, a.jsx)(N.default, {
          className: y.iframe,
          embedId: (0, A.default)(D, U.id)
        })
      }), null != et ? (0, a.jsxs)("div", {
        className: y.footer,
        children: [(0, a.jsx)(S.default, {
          renderIcon: !1,
          users: ea,
          size: 32,
          max: 6,
          className: y.userAvatars
        }), (0, a.jsxs)("div", {
          className: y.footerButtons,
          children: [(0, a.jsx)(M.default, {
            channelId: et
          }), (0, a.jsx)("div", {
            className: y.leaveButtonContainer,
            children: (0, a.jsx)(m.default, {
              applicationId: U.id,
              channelId: D,
              centerButton: !0,
              color: "red"
            })
          }), (0, a.jsx)(h.CenterControlButton, {
            label: L.default.Messages.EMBEDDED_ACTIVITIES_MINIMIZE_A11Y_LABEL,
            onClick: k,
            iconComponent: g.default,
            themeable: !0
          })]
        }), (0, a.jsx)("div", {
          className: y.flex
        })]
      }) : null]
    }), B ? (0, a.jsx)(d.default, {
      minHeight: 480,
      maxHeight: P,
      resizableNode: H,
      onResize: e => {
        C.ComponentDispatch.dispatch(j.ComponentActions.MANUAL_IFRAME_RESIZING, {
          resizing: !0
        }), Y(e)
      },
      onResizeEnd: e => {
        C.ComponentDispatch.dispatch(j.ComponentActions.MANUAL_IFRAME_RESIZING, {
          resizing: !1
        }), z(e)
      }
    }) : null]
  })
}