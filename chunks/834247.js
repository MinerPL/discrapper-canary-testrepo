"use strict";
t.r(n), t.d(n, {
  default: function() {
    return P
  }
});
var i = t("37983");
t("884691");
var u = t("77078"),
  l = t("272030"),
  r = t("838446"),
  a = t("158534"),
  o = t("798609"),
  d = t("846883"),
  s = t("812204"),
  c = t("243288"),
  f = t("321135"),
  E = t("873254"),
  _ = t("861370"),
  m = t("230947"),
  M = t("726750"),
  h = t("85166"),
  T = t("170990"),
  S = t("304582"),
  C = t("72057"),
  A = t("300925"),
  I = t("563816"),
  N = t("489836"),
  v = t("406703"),
  p = t("502533"),
  g = t("314838"),
  U = t("383161"),
  b = t("421602"),
  R = t("459870"),
  y = t("692986"),
  L = t("806179"),
  O = t("97508"),
  G = t("816106"),
  D = t("623879"),
  H = t("49111"),
  F = t("782340"),
  P = (0, a.default)((0, r.default)(function(e) {
    let {
      user: n,
      guildId: t,
      channel: r,
      showMediaItems: a = !1,
      showChatItems: s = !0,
      showChannelCallItems: P = !1,
      showModalItems: w = !0,
      showStageChannelItems: x = !1,
      context: j,
      onSelect: k,
      onHeightUpdate: B
    } = e, V = {
      page: H.AnalyticsPages.GUILD_CHANNEL,
      section: H.AnalyticsSections.CHAT_USERNAME,
      object: H.AnalyticsObjects.CONTEXT_MENU_ITEM
    }, W = (0, L.default)(n.id, t, r.id), X = (0, U.default)(n, t, j), Y = (0, b.default)(n.id, j), z = (0, D.default)(n.id), K = (0, v.default)(n, j), q = (0, C.default)({
      user: n,
      guildId: t,
      context: j
    }), J = (0, S.default)(n), Q = (0, G.default)(n.id), Z = (0, y.default)(n.id), $ = (0, m.default)({
      guildId: t,
      userId: n.id,
      analyticsLocation: V,
      context: j
    }), ee = (0, g.default)(n, t), en = (0, d.default)(null, n), et = (0, T.default)(n), ei = (0, N.default)(n), eu = (0, A.default)(n, t, r.id), el = (0, O.default)(n.id, t), er = (0, R.default)(n, t), ea = (0, _.default)({
      id: n.id,
      label: F.default.Messages.COPY_ID_USER
    }), eo = (0, p.default)(n.id, r.id), ed = (0, f.default)(n.id), es = (0, c.default)(r.id), ec = (0, M.default)(n), ef = (0, h.default)(n, t, r.id), eE = (0, I.default)({
      commandType: o.ApplicationCommandType.USER,
      commandTargetId: n.id,
      channel: r,
      guildId: t,
      onHeightUpdate: B,
      context: j
    }), e_ = (0, E.default)(n.id), em = n.isNonUserBot();
    return (0, i.jsxs)(u.Menu, {
      navId: "user-context",
      onClose: l.closeContextMenu,
      "aria-label": F.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: k,
      children: [!em && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(u.MenuGroup, {
          children: [ec, x && ef]
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [w && W, s && X, Y, K, w && q, w && J, z]
        }), a && (0, i.jsx)(u.MenuGroup, {
          children: Q
        }), (0, i.jsx)(u.MenuGroup, {
          children: w && en
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [a && Z, a && eo, w && $, eE, w && ee, et, w && ei, P && e_]
        }), (0, i.jsx)(u.MenuGroup, {
          children: eu
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [el, er]
        }), P && (0, i.jsxs)(u.MenuGroup, {
          children: [es, ed]
        })]
      }), (0, i.jsx)(u.MenuGroup, {
        children: ea
      })]
    })
  }, {
    object: H.AnalyticsObjects.CONTEXT_MENU
  }), [s.default.CONTEXT_MENU, s.default.GUILD_CHANNEL_USER_MENU])