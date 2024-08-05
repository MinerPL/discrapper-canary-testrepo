n.d(t, {
  g: function() {
return N;
  }
});
var i = n(735250);
n(470079);
var s = n(913527),
  a = n.n(s),
  r = n(692547),
  l = n(481060),
  o = n(788080),
  c = n(800530),
  u = n(689938),
  d = n(454777);
let _ = e => a()().diff(a().unix(e), 'days');

function E(e) {
  let {
classificationId: t
  } = e;
  return (0, i.jsx)(l.Anchor, {
onClick: () => {
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('18831'),
      n.e('43973')
    ]).then(n.bind(n, 41164));
    return n => (0, i.jsx)(e, {
      classificationId: t,
      source: c.s.SystemDM,
      transitionState: n.transitionState,
      onClose: n.onClose
    });
  });
},
className: d.detailsButton,
children: u.Z.Messages.SAFETY_SYSTEM_NOTIFICATION_SEE_DETAILS_BUTTON
  });
}

function I(e) {
  let {
learnMoreLink: t
  } = e;
  return (0, i.jsx)(l.Anchor, {
className: d.detailsButton,
href: t,
children: u.Z.Messages.SAFETY_SYSTEM_NOTIFICATION_LEARN_MORE_BUTTON
  });
}

function m(e) {
  let {
ctaType: t,
classificationId: n,
learnMoreLink: s
  } = e;
  switch (t) {
case c.wo.POLICY_VIOLATION_DETAIL:
  if (null == n)
    return null;
  return (0, i.jsx)(E, {
    classificationId: n
  });
case c.wo.LEARN_MORE_LINK:
  if (null == s)
    return null;
  return (0, i.jsx)(I, {
    learnMoreLink: s
  });
default:
  return null;
  }
}

function T(e) {
  let {
iconType: t
  } = e, n = {
default: (0, i.jsx)(l.AnnouncementsIcon, {
  size: 'xs',
  color: r.Z.colors.TEXT_LINK.css
}),
danger: (0, i.jsx)(l.WarningIcon, {
  color: r.Z.colors.STATUS_DANGER
})
  };
  return null != t && t in n ? (0, i.jsx)('div', {
className: d.icon,
children: n[t]
  }) : null;
}

function h(e) {
  let {
children: t,
theme: n
  } = e, s = {
default: d.defaultFooterContainer,
danger: d.dangerFooterContainer
  };
  return (0, i.jsx)('div', {
className: s[null != n ? n : 'default'],
children: t
  });
}

function N(e) {
  var t, n;
  if (null == e.embed || null == e.embed.fields)
return null;
  let s = (0, o.fr)(e.embed);
  return null == s ? null : (0, i.jsxs)(l.Clickable, {
className: d.safetyPolicyNoticeContainer,
children: [
  (0, i.jsxs)('div', {
    className: d.noticeContent,
    children: [
      (0, i.jsxs)('div', {
        className: d.headerRow,
        children: [
          (0, i.jsx)(T, {
            iconType: s.icon
          }),
          (0, i.jsx)(l.Text, {
            variant: 'text-md/semibold',
            children: s.header
          })
        ]
      }),
      (0, i.jsx)('div', {
        className: d.incidentTiming,
        children: (0, i.jsx)(l.Text, {
          variant: 'text-xs/medium',
          children: u.Z.Messages.SAFETY_POLICY_NOTICE_DAYS_AGO.format({
            daysAgo: _(null !== (n = s.timestamp) && void 0 !== n ? n : 0)
          })
        })
      }),
      (0, i.jsx)('div', {
        className: d.noticeBody,
        children: (0, i.jsx)(l.Text, {
          variant: 'text-md/normal',
          color: 'text-muted',
          children: s.body
        })
      })
    ]
  }),
  (0, i.jsx)(h, {
    theme: s.theme,
    children: null === (t = s.ctas) || void 0 === t ? void 0 : t.map(e => (0, i.jsx)(m, {
      ctaType: e,
      classificationId: s.classification_id,
      learnMoreLink: s.learn_more_link
    }, e))
  })
]
  });
}