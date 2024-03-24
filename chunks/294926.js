"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
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
  c = n("168973"),
  f = n("981913"),
  h = n("576242"),
  m = n("18494"),
  p = n("697218"),
  E = n("717018"),
  g = n("811305"),
  S = n("659500"),
  C = n("439932"),
  _ = n("550766"),
  I = n("191225"),
  T = n("575136"),
  v = n("698372"),
  x = n("401207"),
  N = n("320817"),
  A = n("803997"),
  M = n("272505"),
  R = n("49111"),
  j = n("782340"),
  L = n("986304");
let y = {
  [M.FocusedActivityLayouts.NO_CHAT]: L.noChat,
  [M.FocusedActivityLayouts.RESIZABLE]: L.resizable
};

function O(e) {
  var t, n, s;
  let {
    maxHeight: O,
    connectedChannelId: P,
    renderExternalHeader: D
  } = e, b = (0, v.default)(), U = (0, r.useStateFromStoresArray)([I.default], () => null != P ? I.default.getEmbeddedActivitiesForChannel(P) : [], [P]), w = (0, T.useEmbeddedApps)(U), F = (0, T.useEmbeddedAppsWithPresence)(w), V = l.useCallback(() => {
    (0, _.updateActivityPanelMode)(M.ActivityPanelModes.PIP)
  }, []), k = l.useRef(null), H = (0, r.useStateFromStores)([I.default], () => I.default.getFocusedLayout()), B = H !== M.FocusedActivityLayouts.NO_CHAT, [G, W] = l.useState(null !== (s = c.default.activityPanelHeight) && void 0 !== s ? s : O), Y = l.useCallback(e => {
    o.default.updatedUnsyncedSettings({
      activityPanelHeight: e
    })
  }, []), z = l.useRef(null), [K, Z] = l.useState({
    width: 0,
    height: 0
  });
  l.useLayoutEffect(() => {
    if (null == z.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, a;
      let l = null !== (n = null === (e = z.current) || void 0 === e ? void 0 : e.clientWidth) && void 0 !== n ? n : 0;
      Z({
        width: l,
        height: null !== (a = null === (t = z.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== a ? a : 0
      })
    });
    return e.observe(z.current), () => e.disconnect()
  }, []);
  let X = K.width / Math.max(K.height, 1),
    Q = X < M.LANDSCAPE_ACTIVITY_ASPECT_RATIO,
    q = 0,
    J = 0,
    $ = K.width,
    ee = K.height;
  Q ? ((ee = K.width / M.LANDSCAPE_ACTIVITY_ASPECT_RATIO) > K.height && ($ = (ee = K.height) * M.LANDSCAPE_ACTIVITY_ASPECT_RATIO), J = (K.height - ee) / 2) : (($ = Math.min(K.height * M.LANDSCAPE_ACTIVITY_ASPECT_RATIO)) > K.width && (ee = ($ = K.width) / M.LANDSCAPE_ACTIVITY_ASPECT_RATIO), q = (K.width - $) / 2);
  let et = (0, r.useStateFromStores)([m.default], () => m.default.getChannelId());
  if (null == b) return null;
  let en = F.get(null === (n = w[0]) || void 0 === n ? void 0 : null === (t = n.application) || void 0 === t ? void 0 : t.id),
    ea = [];
  return null != en && (ea = Array.from(en.embeddedActivity.userIds).map(e => p.default.getUser(e)).filter(e => null != e && void 0 !== e)), (0, a.jsxs)("div", {
    className: i(L.wrapper, y[H], (0, C.getThemeClass)(R.ThemeTypes.DARK)),
    ref: k,
    style: B && null != G ? {
      minHeight: 200,
      maxHeight: O,
      height: G
    } : void 0,
    children: [null == D ? void 0 : D(), (0, a.jsxs)("div", {
      className: L.activityPanelContainer,
      children: [B ? null : (0, a.jsx)("div", {
        className: L.header,
        children: (0, a.jsx)(u.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          className: L.headerTitle,
          children: null == b ? void 0 : b.name
        })
      }), (0, a.jsx)("div", {
        className: L.activityContainer,
        style: {
          paddingLeft: q,
          paddingRight: q,
          paddingTop: J,
          paddingBottom: J
        },
        ref: z,
        children: (0, a.jsx)(x.default, {
          className: L.iframe,
          embedId: (0, N.default)(P, b.id)
        })
      }), null != et ? (0, a.jsxs)("div", {
        className: L.footer,
        children: [(0, a.jsx)(g.default, {
          renderIcon: !1,
          users: ea,
          size: 32,
          max: 6,
          className: L.userAvatars
        }), (0, a.jsxs)("div", {
          className: L.footerButtons,
          children: [(0, a.jsx)(A.default, {
            channelId: et
          }), (0, a.jsx)("div", {
            className: L.leaveButtonContainer,
            children: (0, a.jsx)(h.default, {
              applicationId: b.id,
              channelId: P,
              centerButton: !0,
              color: "red"
            })
          }), (0, a.jsx)(f.CenterControlButton, {
            label: j.default.Messages.EMBEDDED_ACTIVITIES_MINIMIZE_A11Y_LABEL,
            onClick: V,
            iconComponent: E.default,
            themeable: !0
          })]
        }), (0, a.jsx)("div", {
          className: L.flex
        })]
      }) : null]
    }), B ? (0, a.jsx)(d.default, {
      minHeight: 480,
      maxHeight: O,
      resizableNode: k,
      onResize: e => {
        S.ComponentDispatch.dispatch(R.ComponentActions.MANUAL_IFRAME_RESIZING, {
          resizing: !0
        }), W(e)
      },
      onResizeEnd: e => {
        S.ComponentDispatch.dispatch(R.ComponentActions.MANUAL_IFRAME_RESIZING, {
          resizing: !1
        }), Y(e)
      }
    }) : null]
  })
}