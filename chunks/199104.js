n.d(t, {
  Z: function() {
return p;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(704215),
  r = n(481060),
  l = n(410575),
  o = n(100527),
  c = n(906732),
  d = n(243778),
  u = n(352455),
  _ = n(480294),
  h = n(153124),
  E = n(791359),
  I = n(981631),
  m = n(689938),
  g = n(955430);

function p() {
  let {
analyticsLocations: e
  } = (0, c.ZP)(o.Z.ACTIVE_NOW_COLUMN), t = (0, a.e7)([_.Z], () => _.Z.hasConsented(I.pjP.PERSONALIZATION)) ? [] : [s.z.NOW_PLAYING_CONSENT_CARD], n = (0, h.Dt)();
  return (0, i.jsx)(c.Gt, {
value: e,
children: (0, i.jsx)(l.Z, {
  section: I.jXE.ACTIVE_NOW_COLUMN,
  children: (0, i.jsx)('aside', {
    className: g.container,
    'aria-labelledby': n,
    children: (0, i.jsxs)(r.Scroller, {
      className: g.scroller,
      children: [
        (0, i.jsx)(r.Heading, {
          variant: 'heading-lg/semibold',
          className: g.header,
          id: n,
          children: m.Z.Messages.GAME_FEED_CURRENT_HEADER_TITLE
        }),
        (0, i.jsx)(d.Z, {
          contentTypes: t,
          children: e => {
            let {
              visibleContent: t,
              markAsDismissed: n
            } = e;
            if (t === s.z.NOW_PLAYING_CONSENT_CARD)
              return (0, i.jsx)(u.Z, {
                className: g.__invalid_consentCard,
                markAsDismissed: n
              });
          }
        }),
        (0, i.jsx)(E.Z, {})
      ]
    })
  })
})
  });
}