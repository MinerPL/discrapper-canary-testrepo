"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("669491"),
  u = n("77078"),
  d = n("20606"),
  c = n("915639"),
  E = n("266926"),
  f = n("240481"),
  _ = n("773336"),
  T = n("227231"),
  I = n("782340"),
  m = n("220350"),
  N = function(e) {
    var t;
    let {
      className: n,
      color: l = o.default.colors.WHITE,
      quest: N,
      isInventory: p
    } = e, S = (null === (t = N.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, A = (0, r.useStateFromStores)([c.default], () => c.default.locale), C = a.useMemo(() => (0, T.calculatePercentComplete)(N), [N]), h = 100 * C, g = (0, _.isWeb)() && !S, M = () => (0, s.jsxs)("div", {
      className: m.desktopTooltip,
      style: {
        marginTop: p ? 8 : 0
      },
      children: [(0, s.jsx)(E.default, {
        className: m.infoIcon,
        height: p ? 16 : 12,
        width: p ? 16 : 12,
        color: p ? d.default.TEXT_MUTED : d.default.WHITE
      }), (0, s.jsx)(u.Text, {
        className: m.desktopTooltipText,
        color: p ? "text-muted" : "always-white",
        variant: p ? "text-xs/normal" : "text-xxs/normal",
        children: I.default.Messages.QUESTS_PROGRESS_WEB_TIP
      })]
    });
    return g && !p ? (0, s.jsx)(M, {}) : (0, s.jsxs)("div", {
      className: i(m.wrapper, n),
      style: {
        color: l.css
      },
      children: [(0, s.jsxs)("div", {
        className: m.percentCompleteWrapper,
        children: [(0, s.jsx)(u.Text, {
          variant: "text-xs/semibold",
          className: m.percentCompleteLabel,
          color: "none",
          children: (0, f.formatPercent)(A, C, {
            roundingMode: "floor"
          })
        }), (0, s.jsx)("div", {
          className: m.percentCompleteLabelOffset,
          style: {
            width: "".concat(100 - h, "%")
          }
        })]
      }), (0, s.jsx)("div", {
        className: m.progressBar,
        role: "progressbar",
        "aria-valuenow": h,
        children: (0, s.jsx)("div", {
          className: m.progressBarFill,
          style: {
            width: "".concat(h, "%")
          }
        })
      }), g && (0, s.jsx)(M, {})]
    })
  }