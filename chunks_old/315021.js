"use strict";
n.r(t), n.d(t, {
  SafetySystemNotification: function() {
    return S
  }
});
var s = n("37983");
n("884691");
var a = n("866227"),
  l = n.n(a),
  i = n("669491"),
  r = n("779807"),
  o = n("77078"),
  u = n("733160"),
  d = n("736393"),
  c = n("170213"),
  E = n("782340"),
  f = n("749230");
let _ = e => l().diff(l.unix(e), "days");

function T(e) {
  let {
    classificationId: t
  } = e;
  return (0, s.jsx)(o.Anchor, {
    onClick: () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("825138").then(n.bind(n, "825138"));
        return n => (0, s.jsx)(e, {
          classificationId: t,
          source: c.SafetyHubAnalyticsActionSource.SystemDM,
          transitionState: n.transitionState,
          onClose: n.onClose
        })
      })
    },
    className: f.detailsButton,
    children: E.default.Messages.SAFETY_SYSTEM_NOTIFICATION_SEE_DETAILS_BUTTON
  })
}

function I(e) {
  let {
    learnMoreLink: t
  } = e;
  return (0, s.jsx)(o.Anchor, {
    className: f.detailsButton,
    href: t,
    children: E.default.Messages.SAFETY_SYSTEM_NOTIFICATION_LEARN_MORE_BUTTON
  })
}

function m(e) {
  let {
    ctaType: t,
    classificationId: n,
    learnMoreLink: a
  } = e;
  switch (t) {
    case c.SafetySystemNotificationCtaType.POLICY_VIOLATION_DETAIL:
      if (null == n) return null;
      return (0, s.jsx)(T, {
        classificationId: n
      });
    case c.SafetySystemNotificationCtaType.LEARN_MORE_LINK:
      if (null == a) return null;
      return (0, s.jsx)(I, {
        learnMoreLink: a
      });
    default:
      return null
  }
}

function N(e) {
  let {
    iconType: t
  } = e, n = {
    default: (0, s.jsx)(u.default, {
      color: i.default.colors.TEXT_LINK.css
    }),
    danger: (0, s.jsx)(r.WarningIcon, {
      color: i.default.colors.STATUS_DANGER
    })
  };
  return null != t && t in n ? (0, s.jsx)("div", {
    className: f.icon,
    children: n[t]
  }) : null
}

function p(e) {
  let {
    children: t,
    theme: n
  } = e, a = {
    default: f.defaultFooterContainer,
    danger: f.dangerFooterContainer
  };
  return (0, s.jsx)("div", {
    className: a[null != n ? n : "default"],
    children: t
  })
}

function S(e) {
  var t, n;
  if (null == e.embed || null == e.embed.fields) return null;
  let a = (0, d.parseMessageEmbedForProps)(e.embed);
  return null == a ? null : (0, s.jsxs)(o.Clickable, {
    className: f.safetyPolicyNoticeContainer,
    children: [(0, s.jsxs)("div", {
      className: f.noticeContent,
      children: [(0, s.jsxs)("div", {
        className: f.headerRow,
        children: [(0, s.jsx)(N, {
          iconType: a.icon
        }), (0, s.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: a.header
        })]
      }), (0, s.jsx)("div", {
        className: f.incidentTiming,
        children: (0, s.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: E.default.Messages.SAFETY_POLICY_NOTICE_DAYS_AGO.format({
            daysAgo: _(null !== (n = a.timestamp) && void 0 !== n ? n : 0)
          })
        })
      }), (0, s.jsx)("div", {
        className: f.noticeBody,
        children: (0, s.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: a.body
        })
      })]
    }), (0, s.jsx)(p, {
      theme: a.theme,
      children: null === (t = a.ctas) || void 0 === t ? void 0 : t.map(e => (0, s.jsx)(m, {
        ctaType: e,
        classificationId: a.classification_id,
        learnMoreLink: a.learn_more_link
      }, e))
    })]
  })
}