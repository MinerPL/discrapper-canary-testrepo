n.d(t, {
  i: function() {
return _;
  }
});
var i = n(735250);
n(470079);
var a = n(913527),
  s = n.n(a),
  r = n(692547),
  l = n(481060),
  o = n(800530),
  c = n(689938),
  u = n(660921);
let d = e => s()().diff(s().unix(e), 'days');

function _(e) {
  var t, a, s, _, E;
  if (null == e.message.embeds || null == e.message.embeds[0].fields)
return null;
  let I = e.message.embeds[0],
m = null !== (s = null === (t = I.fields) || void 0 === t ? void 0 : t.find(e => e.rawName === o.Cg.CLASSIFICATION_ID)) && void 0 !== s ? s : void 0,
T = null !== (_ = null == m ? void 0 : m.rawValue) && void 0 !== _ ? _ : void 0,
h = null !== (E = null === (a = I.fields) || void 0 === a ? void 0 : a.find(e => e.rawName === o.Cg.INCIDENT_TIMESTAMP)) && void 0 !== E ? E : void 0,
N = null == h || null == h.rawValue ? void 0 : parseFloat(h.rawValue);
  return null == T || null == N ? null : (0, i.jsxs)(l.Clickable, {
onClick: () => {
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('18831'),
      n.e('73255')
    ]).then(n.bind(n, 41164));
    return t => (0, i.jsx)(e, {
      classificationId: T,
      source: o.s.SystemDM,
      transitionState: t.transitionState,
      onClose: t.onClose
    });
  });
},
className: u.safetyPolicyNoticeContainer,
children: [
  (0, i.jsxs)('div', {
    className: u.noticeContent,
    children: [
      (0, i.jsxs)('div', {
        className: u.headerRow,
        children: [
          (0, i.jsx)(l.WarningIcon, {
            className: u.warningIcon,
            color: r.Z.colors.STATUS_DANGER
          }),
          (0, i.jsx)(l.Text, {
            variant: 'text-md/semibold',
            children: c.Z.Messages.SAFETY_POLICY_NOTICE_HEADER
          })
        ]
      }),
      (0, i.jsx)('div', {
        className: u.incidentTiming,
        children: (0, i.jsx)(l.Text, {
          variant: 'text-xs/medium',
          children: c.Z.Messages.SAFETY_POLICY_NOTICE_DAYS_AGO.format({
            daysAgo: d(N)
          })
        })
      }),
      (0, i.jsx)('div', {
        className: u.noticeBody,
        children: (0, i.jsx)(l.Text, {
          variant: 'text-md/normal',
          color: 'text-muted',
          children: c.Z.Messages.SAFETY_POLICY_NOTICE_BODY
        })
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: u.footerContainer,
    children: (0, i.jsx)(l.Button, {
      look: l.Button.Looks.BLANK,
      className: u.detailsButton,
      color: l.Button.Colors.WHITE,
      children: c.Z.Messages.SAFETY_POLICY_NOTICE_BUTTON
    })
  })
]
  });
}