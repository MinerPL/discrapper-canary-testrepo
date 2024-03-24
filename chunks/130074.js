"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
});
var i = n("37983");
n("884691");
var a = n("77078"),
  r = n("272030"),
  s = n("838446"),
  l = n("158534"),
  u = n("798609"),
  o = n("846883"),
  d = n("812204"),
  c = n("243288"),
  f = n("321135"),
  E = n("873254"),
  C = n("44141"),
  p = n("531674"),
  _ = n("861370"),
  h = n("972701"),
  v = n("390008"),
  S = n("936947"),
  g = n("918034"),
  N = n("976127"),
  T = n("856030"),
  I = n("726750"),
  A = n("170990"),
  m = n("304582"),
  R = n("72057"),
  y = n("563816"),
  M = n("489836"),
  O = n("406703"),
  U = n("126710"),
  L = n("502533"),
  P = n("314838"),
  b = n("151200"),
  F = n("692986"),
  G = n("806179"),
  x = n("816106"),
  D = n("623879"),
  w = n("49111"),
  V = n("782340"),
  j = (0, l.default)((0, s.default)(function(e) {
    let {
      user: t,
      channel: n,
      channelSelected: s = !1,
      showMute: l = !0,
      showMediaItems: d = !1,
      showChannelCallItems: w = !1,
      showModalItems: j = !0,
      targetIsUser: H = !1,
      context: W,
      onSelect: k,
      onHeightUpdate: Y
    } = e, B = (0, G.default)(t.id, null), Z = (0, O.default)(t, W), z = (0, R.default)({
      user: t,
      context: W
    }), q = (0, m.default)(t), K = (0, D.default)(t.id), X = (0, U.default)(n.id, s), Q = (0, P.default)(t), J = (0, o.default)(null, t), $ = (0, x.default)(t.id), ee = (0, b.default)(t.id, n.id), et = (0, A.default)(t), en = (0, F.default)(t.id), ei = (0, L.default)(t.id, n.id), ea = (0, M.default)(t), er = (0, p.default)(n), es = (0, _.default)({
      id: t.id,
      label: V.default.Messages.COPY_ID_USER
    }), el = (0, _.default)({
      id: n.id,
      label: V.default.Messages.COPY_ID_CHANNEL
    }), eu = (0, C.default)(n), eo = (0, f.default)(t.id), ed = (0, c.default)(n.id), ec = (0, I.default)(t), ef = (0, E.default)(t.id), eE = (0, y.default)({
      commandType: u.ApplicationCommandType.USER,
      commandTargetId: t.id,
      channel: n,
      guildId: void 0,
      onHeightUpdate: Y
    }), eC = (0, h.useAddToFavoritesItem)(n), ep = (0, h.useRemoveFromFavoritesItem)(n), e_ = (0, v.default)(n), eh = (0, S.default)(n), ev = (0, N.useMessageRequestItem)(n), eS = (0, g.useInappropriateConversationItem)(n), eg = (0, T.useSafetyWarningsItem)(n), eN = n.isManaged(), eT = t.isNonUserBot();
    return (0, i.jsxs)(a.Menu, {
      navId: "user-context",
      onClose: r.closeContextMenu,
      "aria-label": V.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: k,
      children: [(0, i.jsx)(a.MenuGroup, {
        children: !eT && eu
      }), (0, i.jsx)(a.MenuGroup, {
        children: ev
      }), (0, i.jsx)(a.MenuGroup, {
        children: eg
      }), (0, i.jsx)(a.MenuGroup, {
        children: eS
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [eC, e_, eh]
      }), (0, i.jsx)(a.MenuGroup, {
        children: !eT && ec
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [!eT && (0, i.jsxs)(i.Fragment, {
          children: [j && B, Z, !eN && ee, j && z, j && q, K]
        }), X]
      }), !eT && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.MenuGroup, {
          children: d && $
        }), (0, i.jsx)(a.MenuGroup, {
          children: j && J
        }), (0, i.jsxs)(a.MenuGroup, {
          children: [d && en, d && ei, eE, j && Q, et, j && ea, d && ef]
        }), (0, i.jsx)(a.MenuGroup, {
          children: l && er
        }), w && (0, i.jsxs)(a.MenuGroup, {
          children: [ed, eo]
        })]
      }), (0, i.jsx)(a.MenuGroup, {
        children: ep
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [es, !H && el]
      })]
    })
  }, {
    object: w.AnalyticsObjects.CONTEXT_MENU
  }), [d.default.CONTEXT_MENU, d.default.DM_USER_MENU])