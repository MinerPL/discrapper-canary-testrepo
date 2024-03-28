"use strict";
n.r(t), n.d(t, {
  SafetySystemNotification: function() {
    return N
  }
});
var s = n("735250");
n("470079");
var a = n("913527"),
  l = n.n(a),
  i = n("692547"),
  r = n("495056"),
  o = n("481060"),
  u = n("316949"),
  d = n("788080"),
  c = n("800530"),
  f = n("689938"),
  E = n("117265");
let _ = e => l()().diff(l().unix(e), "days");

function T(e) {
  let {
    classificationId: t
  } = e;
  return (0, s.jsx)(o.Anchor, {
    onClick: () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("18831"), n.e("34842")]).then(n.bind(n, "41164"));
        return n => (0, s.jsx)(e, {
          classificationId: t,
          source: c.SafetyHubAnalyticsActionSource.SystemDM,
          transitionState: n.transitionState,
          onClose: n.onClose
        })
      })
    },
    className: E.detailsButton,
    children: f.default.Messages.SAFETY_SYSTEM_NOTIFICATION_SEE_DETAILS_BUTTON
  })
}

function m(e) {
  let {
    learnMoreLink: t
  } = e;
  return (0, s.jsx)(o.Anchor, {
    className: E.detailsButton,
    href: t,
    children: f.default.Messages.SAFETY_SYSTEM_NOTIFICATION_LEARN_MORE_BUTTON
  })
}

function I(e) {
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
      return (0, s.jsx)(m, {
        learnMoreLink: a
      });
    default:
      return null
  }
}

function p(e) {
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
    className: E.icon,
    children: n[t]
  }) : null
}

function h(e) {
  let {
    children: t,
    theme: n
  } = e, a = {
    default: E.defaultFooterContainer,
    danger: E.dangerFooterContainer
  };
  return (0, s.jsx)("div", {
    className: a[null != n ? n : "default"],
    children: t
  })
}

function N(e) {
  var t, n;
  if (null == e.embed || null == e.embed.fields) return null;
  let a = (0, d.parseMessageEmbedForProps)(e.embed);
  return null == a ? null : (0, s.jsxs)(o.Clickable, {
    className: E.safetyPolicyNoticeContainer,
    children: [(0, s.jsxs)("div", {
      className: E.noticeContent,
      children: [(0, s.jsxs)("div", {
        className: E.headerRow,
        children: [(0, s.jsx)(p, {
          iconType: a.icon
        }), (0, s.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: a.header
        })]
      }), (0, s.jsx)("div", {
        className: E.incidentTiming,
        children: (0, s.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: f.default.Messages.SAFETY_POLICY_NOTICE_DAYS_AGO.format({
            daysAgo: _(null !== (n = a.timestamp) && void 0 !== n ? n : 0)
          })
        })
      }), (0, s.jsx)("div", {
        className: E.noticeBody,
        children: (0, s.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: a.body
        })
      })]
    }), (0, s.jsx)(h, {
      theme: a.theme,
      children: null === (t = a.ctas) || void 0 === t ? void 0 : t.map(e => (0, s.jsx)(I, {
        ctaType: e,
        classificationId: a.classification_id,
        learnMoreLink: a.learn_more_link
      }, e))
    })]
  })
}