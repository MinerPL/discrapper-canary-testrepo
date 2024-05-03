"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("993365"),
  u = n("153867"),
  d = n("900211"),
  c = n("580747"),
  f = n("740492"),
  h = n("871499"),
  m = n("402113"),
  p = n("944486"),
  E = n("594174"),
  C = n("110456"),
  g = n("602623"),
  S = n("585483"),
  _ = n("792125"),
  T = n("566620"),
  I = n("317381"),
  A = n("619915"),
  N = n("952561"),
  v = n("563218"),
  x = n("719296"),
  M = n("651612"),
  R = n("918559"),
  L = n("981631"),
  y = n("689938"),
  O = n("986636");
let j = {
  [R.FocusedActivityLayouts.NO_CHAT]: O.noChat,
  [R.FocusedActivityLayouts.RESIZABLE]: O.resizable
};

function P(e) {
  var t, n, s;
  let {
    maxHeight: P,
    connectedChannelId: D,
    renderExternalHeader: b
  } = e, U = (0, N.default)(), F = (0, r.useStateFromStoresArray)([I.default], () => null != D ? I.default.getEmbeddedActivitiesForChannel(D) : [], [D]), w = (0, A.useEmbeddedApps)(F), k = (0, A.useEmbeddedAppsWithPresence)(w), H = l.useCallback(() => {
    (0, T.updateActivityPanelMode)(R.ActivityPanelModes.PIP)
  }, []), B = l.useRef(null), G = (0, r.useStateFromStores)([I.default], () => I.default.getFocusedLayout()), V = G !== R.FocusedActivityLayouts.NO_CHAT, [W, Y] = l.useState(null !== (s = f.default.activityPanelHeight) && void 0 !== s ? s : P), z = l.useCallback(e => {
    u.default.updatedUnsyncedSettings({
      activityPanelHeight: e
    })
  }, []), K = l.useRef(null), [Z, q] = l.useState({
    width: 0,
    height: 0
  });
  l.useLayoutEffect(() => {
    if (null == K.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, a;
      q({
        width: null !== (n = null === (e = K.current) || void 0 === e ? void 0 : e.clientWidth) && void 0 !== n ? n : 0,
        height: null !== (a = null === (t = K.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== a ? a : 0
      })
    });
    return e.observe(K.current), () => e.disconnect()
  }, []);
  let X = Z.width / Math.max(Z.height, 1) < R.LANDSCAPE_ACTIVITY_ASPECT_RATIO,
    Q = 0,
    J = 0,
    $ = (0, c.default)("activity_panel_iframe_fills_container");
  if (!$) {
    let e = Z.width,
      t = Z.height;
    X ? ((t = Z.width / R.LANDSCAPE_ACTIVITY_ASPECT_RATIO) > Z.height && (e = (t = Z.height) * R.LANDSCAPE_ACTIVITY_ASPECT_RATIO), J = (Z.height - t) / 2) : ((e = Math.min(Z.height * R.LANDSCAPE_ACTIVITY_ASPECT_RATIO)) > Z.width && (t = (e = Z.width) / R.LANDSCAPE_ACTIVITY_ASPECT_RATIO), Q = (Z.width - e) / 2)
  }
  let ee = (0, r.useStateFromStores)([p.default], () => p.default.getChannelId());
  if (null == U) return null;
  let et = k.get(null === (n = w[0]) || void 0 === n ? void 0 : null === (t = n.application) || void 0 === t ? void 0 : t.id),
    en = [];
  return null != et && (en = Array.from(et.embeddedActivity.userIds).map(e => E.default.getUser(e)).filter(e => null != e && void 0 !== e)), (0, a.jsxs)("div", {
    className: i()(O.wrapper, j[G], (0, _.getThemeClass)(L.ThemeTypes.DARK)),
    ref: B,
    style: V && null != W ? {
      minHeight: 200,
      maxHeight: P,
      height: W
    } : void 0,
    children: [null == b ? void 0 : b(), (0, a.jsxs)("div", {
      className: O.activityPanelContainer,
      children: [V ? null : (0, a.jsx)("div", {
        className: O.header,
        children: (0, a.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          className: O.headerTitle,
          children: null == U ? void 0 : U.name
        })
      }), (0, a.jsx)("div", {
        className: i()(O.activityContainer, {
          [O.activityContainerNoMargin]: $
        }),
        style: {
          paddingLeft: Q,
          paddingRight: Q,
          paddingTop: J,
          paddingBottom: J
        },
        ref: K,
        children: (0, a.jsx)(v.default, {
          className: O.iframe,
          embedId: (0, x.default)(D, U.id)
        })
      }), null != ee ? (0, a.jsxs)("div", {
        className: O.footer,
        children: [(0, a.jsx)(g.default, {
          renderIcon: !1,
          users: en,
          size: 32,
          max: 6,
          className: O.userAvatars
        }), (0, a.jsxs)("div", {
          className: O.footerButtons,
          children: [(0, a.jsx)(M.default, {
            channelId: ee,
            className: O.circularButton
          }), (0, a.jsx)("div", {
            className: O.leaveButtonContainer,
            children: (0, a.jsx)(m.default, {
              applicationId: U.id,
              channelId: D,
              centerButton: !0,
              color: "red",
              className: O.leaveActivityButton
            })
          }), (0, a.jsx)(h.CenterControlButton, {
            label: y.default.Messages.EMBEDDED_ACTIVITIES_MINIMIZE_A11Y_LABEL,
            onClick: H,
            iconComponent: C.default,
            themeable: !0,
            className: O.circularButton
          })]
        }), (0, a.jsx)("div", {
          className: O.flex
        })]
      }) : null]
    }), V ? (0, a.jsx)(d.default, {
      minHeight: 480,
      maxHeight: P,
      resizableNode: B,
      onResize: e => {
        S.ComponentDispatch.dispatch(L.ComponentActions.MANUAL_IFRAME_RESIZING, {
          resizing: !0
        }), Y(e)
      },
      onResizeEnd: e => {
        S.ComponentDispatch.dispatch(L.ComponentActions.MANUAL_IFRAME_RESIZING, {
          resizing: !1
        }), z(e)
      }
    }) : null]
  })
}