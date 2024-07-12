s.d(t, {
  Z: function() {
return N;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(481060),
  l = s(285952),
  c = s(490529),
  d = s(981631),
  _ = s(689938),
  E = s(354181);
let u = {
[d.gkr.HOUSE_1]: E.membershipDialogHouse1,
[d.gkr.HOUSE_2]: E.membershipDialogHouse2,
[d.gkr.HOUSE_3]: E.membershipDialogHouse3
  },
  T = {
[d.gkr.HOUSE_1]: E.houseLogoHouse1,
[d.gkr.HOUSE_2]: E.__invalid_houseLogoHouse2,
[d.gkr.HOUSE_3]: E.__invalid_houseLogoHouse3
  },
  I = {
[d.gkr.HOUSE_1]: s(246300),
[d.gkr.HOUSE_2]: s(797148),
[d.gkr.HOUSE_3]: s(374347)
  },
  S = e => ({
[d.gkr.HOUSE_1]: _.Z.Messages.HYPESQUAD_DESCRIPTION_HOUSE_1,
[d.gkr.HOUSE_2]: _.Z.Messages.HYPESQUAD_DESCRIPTION_HOUSE_2,
[d.gkr.HOUSE_3]: _.Z.Messages.HYPESQUAD_DESCRIPTION_HOUSE_3
  } [e]);
class N extends a.Component {
  render() {
let {
  houseMembership: e,
  isClaimed: t,
  isVerified: s
} = this.props;
if (!t || !s)
  return null;
if (null != e) {
  let t = _.Z.Messages.HYPESQUAD_MEMBERSHIP_HEADING.format({
    houseName: (0, c.X8)(e)
  });
  return (0, n.jsx)('div', {
    className: r()(E.membershipDialog, u[e]),
    children: (0, n.jsxs)('div', {
      className: E.membershipDialogContent,
      children: [
        (0, n.jsxs)(l.Z, {
          children: [
            (0, n.jsxs)(l.Z.Child, {
              grow: 1,
              shrink: 1,
              children: [
                (0, n.jsx)(o.Text, {
                  className: E.membershipDialogHeading,
                  variant: 'text-xs/bold',
                  children: _.Z.Messages.HYPESQUAD_YOUR_HOUSE
                }),
                (0, n.jsx)(o.Heading, {
                  className: E.membershipDialogHouseName,
                  variant: 'heading-sm/semibold',
                  children: t
                }),
                (0, n.jsx)(o.Text, {
                  className: E.membershipDialogHouseDescription,
                  variant: 'text-md/normal',
                  children: S(e)
                })
              ]
            }),
            (0, n.jsx)(l.Z.Child, {
              className: E.houseLogoWrapper,
              grow: 0,
              shrink: 0,
              wrap: !0,
              children: (0, n.jsx)('img', {
                className: r()(E.houseLogo, T[e]),
                src: I[e],
                alt: t
              })
            })
          ]
        }),
        (0, n.jsxs)(o.Text, {
          className: E.membershipDialogSwitchHouses,
          variant: 'text-md/normal',
          children: [
            _.Z.Messages.HYPESQUAD_SWITCH_HOUSES_PROMPT,
            (0, n.jsx)(o.Clickable, {
              className: E.membershipDialogSwitchHousesAction,
              onClick: this.handleJoinHypeSquadClick,
              tag: 'span',
              children: _.Z.Messages.HYPESQUAD_SWITCH_HOUSES_ACTION
            })
          ]
        })
      ]
    })
  });
}
return (0, n.jsxs)('div', {
  className: E.joinCTAWrapper,
  children: [
    (0, n.jsxs)(l.Z, {
      className: E.joinCTA,
      align: l.Z.Align.CENTER,
      justify: l.Z.Justify.CENTER,
      direction: l.Z.Direction.HORIZONTAL,
      children: [
        (0, n.jsx)(l.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, n.jsx)(o.Text, {
            variant: 'text-sm/normal',
            children: _.Z.Messages.HYPESQUAD_READY_TO_REP
          })
        }),
        (0, n.jsx)(l.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, n.jsx)(o.Button, {
            onClick: this.handleJoinHypeSquadClick,
            children: _.Z.Messages.HYPESQUAD_JOIN
          })
        })
      ]
    }),
    (0, n.jsx)(o.Text, {
      className: E.newsletterWarning,
      variant: 'text-sm/normal',
      children: _.Z.Messages.HYPESQUAD_NEWSLETTER_WARNING
    })
  ]
});
  }
  constructor(...e) {
var t, a, i;
super(...e), t = this, a = 'handleJoinHypeSquadClick', i = () => {
  (0, o.openModalLazy)(async () => {
    let {
      default: e
    } = await s.e('83264').then(s.bind(s, 711184));
    return t => (0, n.jsx)(e, {
      ...t
    });
  });
}, a in t ? Object.defineProperty(t, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[a] = i;
  }
}