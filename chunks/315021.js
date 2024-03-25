"use strict";
n.r(t), n.d(t, {
  SafetySystemNotification: function() {
    return S
  }
});
var s = n("37983");
n("884691");
var l = n("866227"),
  a = n.n(l),
  i = n("669491"),
  r = n("779807"),
  o = n("77078"),
  u = n("733160"),
  d = n("736393"),
  c = n("170213"),
  E = n("782340"),
  f = n("749230");
let _ = e => a().diff(a.unix(e), "days");

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
    learnMoreLink: l
  } = e;
  switch (t) {
    case c.SafetySystemNotificationCtaType.POLICY_VIOLATION_DETAIL:
      if (null == n) return null;
      return (0, s.jsx)(T, {
        classificationId: n
      });
    case c.SafetySystemNotificationCtaType.LEARN_MORE_LINK:
      if (null == l) return null;
      return (0, s.jsx)(I, {
        learnMoreLink: l
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
  } = e, l = {
    default: f.defaultFooterContainer,
    danger: f.dangerFooterContainer
  };
  return (0, s.jsx)("div", {
    className: l[null != n ? n : "default"],
    children: t
  })
}

function S(e) {
  var t, n;
  if (null == e.embed || null == e.embed.fields) return null;
  let l = (0, d.parseMessageEmbedForProps)(e.embed);
  return null == l ? null : (0, s.jsxs)(o.Clickable, {
    className: f.safetyPolicyNoticeContainer,
    children: [(0, s.jsxs)("div", {
      className: f.noticeContent,
      children: [(0, s.jsxs)("div", {
        className: f.headerRow,
        children: [(0, s.jsx)(N, {
          iconType: l.icon
        }), (0, s.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: l.header
        })]
      }), (0, s.jsx)("div", {
        className: f.incidentTiming,
        children: (0, s.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: E.default.Messages.SAFETY_POLICY_NOTICE_DAYS_AGO.format({
            daysAgo: _(null !== (n = l.timestamp) && void 0 !== n ? n : 0)
          })
        })
      }), (0, s.jsx)("div", {
        className: f.noticeBody,
        children: (0, s.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: l.body
        })
      })]
    }), (0, s.jsx)(p, {
      theme: l.theme,
      children: null === (t = l.ctas) || void 0 === t ? void 0 : t.map(e => (0, s.jsx)(m, {
        ctaType: e,
        classificationId: l.classification_id,
        learnMoreLink: l.learn_more_link
      }, e))
    })]
  })
}