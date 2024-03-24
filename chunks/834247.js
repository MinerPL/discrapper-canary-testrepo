"use strict";
t.r(n), t.d(n, {
  default: function() {
    return w
  }
});
var i = t("37983");
t("884691");
var l = t("77078"),
  u = t("272030"),
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
  T = t("85166"),
  h = t("170990"),
  C = t("304582"),
  A = t("72057"),
  S = t("300925"),
  v = t("563816"),
  N = t("489836"),
  p = t("406703"),
  g = t("502533"),
  I = t("314838"),
  y = t("383161"),
  U = t("421602"),
  L = t("459870"),
  R = t("692986"),
  O = t("806179"),
  b = t("97508"),
  G = t("816106"),
  D = t("623879"),
  H = t("49111"),
  F = t("782340"),
  w = (0, a.default)((0, r.default)(function(e) {
    let {
      user: n,
      guildId: t,
      channel: r,
      showMediaItems: a = !1,
      showChatItems: s = !0,
      showChannelCallItems: w = !1,
      showModalItems: P = !0,
      showStageChannelItems: j = !1,
      context: x,
      onSelect: k,
      onHeightUpdate: V
    } = e, B = {
      page: H.AnalyticsPages.GUILD_CHANNEL,
      section: H.AnalyticsSections.CHAT_USERNAME,
      object: H.AnalyticsObjects.CONTEXT_MENU_ITEM
    }, W = (0, O.default)(n.id, t, r.id), X = (0, y.default)(n, t, x), Y = (0, U.default)(n.id, x), z = (0, D.default)(n.id), K = (0, p.default)(n, x), q = (0, A.default)({
      user: n,
      guildId: t,
      context: x
    }), J = (0, C.default)(n), Q = (0, G.default)(n.id), Z = (0, R.default)(n.id), $ = (0, m.default)({
      guildId: t,
      userId: n.id,
      analyticsLocation: B,
      context: x
    }), ee = (0, I.default)(n, t), en = (0, d.default)(null, n), et = (0, h.default)(n), ei = (0, N.default)(n), el = (0, S.default)(n, t, r.id), eu = (0, b.default)(n.id, t), er = (0, L.default)(n, t), ea = (0, _.default)({
      id: n.id,
      label: F.default.Messages.COPY_ID_USER
    }), eo = (0, g.default)(n.id, r.id), ed = (0, f.default)(n.id), es = (0, c.default)(r.id), ec = (0, M.default)(n), ef = (0, T.default)(n, t, r.id), eE = (0, v.default)({
      commandType: o.ApplicationCommandType.USER,
      commandTargetId: n.id,
      channel: r,
      guildId: t,
      onHeightUpdate: V,
      context: x
    }), e_ = (0, E.default)(n.id), em = n.isNonUserBot();
    return (0, i.jsxs)(l.Menu, {
      navId: "user-context",
      onClose: u.closeContextMenu,
      "aria-label": F.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: k,
      children: [!em && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(l.MenuGroup, {
          children: [ec, j && ef]
        }), (0, i.jsxs)(l.MenuGroup, {
          children: [P && W, s && X, Y, K, P && q, P && J, z]
        }), a && (0, i.jsx)(l.MenuGroup, {
          children: Q
        }), (0, i.jsx)(l.MenuGroup, {
          children: P && en
        }), (0, i.jsxs)(l.MenuGroup, {
          children: [a && Z, a && eo, P && $, eE, P && ee, et, P && ei, w && e_]
        }), (0, i.jsx)(l.MenuGroup, {
          children: el
        }), (0, i.jsxs)(l.MenuGroup, {
          children: [eu, er]
        }), w && (0, i.jsxs)(l.MenuGroup, {
          children: [es, ed]
        })]
      }), (0, i.jsx)(l.MenuGroup, {
        children: ea
      })]
    })
  }, {
    object: H.AnalyticsObjects.CONTEXT_MENU
  }), [s.default.CONTEXT_MENU, s.default.GUILD_CHANNEL_USER_MENU])