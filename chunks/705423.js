"use strict";
n.r(t), n.d(t, {
  SafetyPolicyNotice: function() {
    return f
  }
});
var s = n("37983");
n("884691");
var a = n("866227"),
  l = n.n(a),
  i = n("669491"),
  r = n("779807"),
  o = n("77078"),
  u = n("170213"),
  d = n("782340"),
  c = n("743582");
let E = e => l().diff(l.unix(e), "days");

function f(e) {
  var t, a, l, f, _;
  if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
  let T = e.message.embeds[0],
    I = null !== (l = null === (t = T.fields) || void 0 === t ? void 0 : t.find(e => e.rawName === u.SafetyHubPolicyNoticeKeys.CLASSIFICATION_ID)) && void 0 !== l ? l : void 0,
    m = null !== (f = null == I ? void 0 : I.rawValue) && void 0 !== f ? f : void 0,
    N = null !== (_ = null === (a = T.fields) || void 0 === a ? void 0 : a.find(e => e.rawName === u.SafetyHubPolicyNoticeKeys.INCIDENT_TIMESTAMP)) && void 0 !== _ ? _ : void 0,
    p = null == N || null == N.rawValue ? void 0 : parseFloat(N.rawValue);
  return null == m || null == p ? null : (0, s.jsxs)(o.Clickable, {
    onClick: () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("825138").then(n.bind(n, "825138"));
        return t => (0, s.jsx)(e, {
          classificationId: m,
          source: u.SafetyHubAnalyticsActionSource.SystemDM,
          transitionState: t.transitionState,
          onClose: t.onClose
        })
      })
    },
    className: c.safetyPolicyNoticeContainer,
    children: [(0, s.jsxs)("div", {
      className: c.noticeContent,
      children: [(0, s.jsxs)("div", {
        className: c.headerRow,
        children: [(0, s.jsx)(r.WarningIcon, {
          className: c.warningIcon,
          color: i.default.colors.STATUS_DANGER
        }), (0, s.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: d.default.Messages.SAFETY_POLICY_NOTICE_HEADER
        })]
      }), (0, s.jsx)("div", {
        className: c.incidentTiming,
        children: (0, s.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: d.default.Messages.SAFETY_POLICY_NOTICE_DAYS_AGO.format({
            daysAgo: E(p)
          })
        })
      }), (0, s.jsx)("div", {
        className: c.noticeBody,
        children: (0, s.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: d.default.Messages.SAFETY_POLICY_NOTICE_BODY
        })
      })]
    }), (0, s.jsx)("div", {
      className: c.footerContainer,
      children: (0, s.jsx)(o.Button, {
        look: o.Button.Looks.BLANK,
        className: c.detailsButton,
        color: o.Button.Colors.WHITE,
        children: d.default.Messages.SAFETY_POLICY_NOTICE_BUTTON
      })
    })]
  })
}