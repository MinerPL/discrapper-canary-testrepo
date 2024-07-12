n.d(t, {
  f: function() {
return a;
  }
});
var s, a, r = n(735250);
n(470079);
var i = n(120356),
  o = n.n(i),
  u = n(780384),
  _ = n(918701),
  l = n(78826),
  T = n(981631),
  E = n(272467);
(s = a || (a = {}))[s.SMALL = 24] = 'SMALL', s[s.MEDIUM = 32] = 'MEDIUM';
t.Z = function(e) {
  let {
className: t,
gameTileSize: n = 24,
quest: s,
theme: a = T.BRd.DARK,
withGameTile: i = !0
  } = e, I = (0, u.wj)(a) ? T.BRd.DARK : T.BRd.LIGHT;
  return (0, r.jsxs)('div', {
className: o()(E.partnerBranding, t),
children: [
  i && (0, r.jsx)(l.Fl, {
    id: 'QuestPartnerBranding_gameTile',
    children: e => (0, r.jsx)('img', {
      ref: e,
      className: E.partnerBrandingGameTile,
      alt: '',
      src: (0, _.uo)(s, I),
      style: {
        borderRadius: function(e) {
          switch (e) {
            case 24:
              return 3;
            case 32:
              return 4;
          }
        }(n),
        width: n,
        height: n
      }
    })
  }),
  (0, r.jsx)(l.Fl, {
    id: 'QuestPartnerBranding_gameLogotype',
    children: e => (0, r.jsx)('img', {
      ref: e,
      className: E.partnerBrandingLogotype,
      alt: s.config.messages.gameTitle,
      src: (0, _.Gs)(s, I)
    })
  })
]
  });
};