"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("481060"),
  o = s("285952"),
  d = s("490529"),
  u = s("981631"),
  c = s("689938"),
  S = s("215744");
let E = {
    [u.HypeSquadHouses.HOUSE_1]: S.membershipDialogHouse1,
    [u.HypeSquadHouses.HOUSE_2]: S.membershipDialogHouse2,
    [u.HypeSquadHouses.HOUSE_3]: S.membershipDialogHouse3
  },
  T = {
    [u.HypeSquadHouses.HOUSE_1]: S.houseLogoHouse1,
    [u.HypeSquadHouses.HOUSE_2]: S.__invalid_houseLogoHouse2,
    [u.HypeSquadHouses.HOUSE_3]: S.__invalid_houseLogoHouse3
  },
  f = {
    [u.HypeSquadHouses.HOUSE_1]: s("246300"),
    [u.HypeSquadHouses.HOUSE_2]: s("797148"),
    [u.HypeSquadHouses.HOUSE_3]: s("374347")
  },
  m = e => ({
    [u.HypeSquadHouses.HOUSE_1]: c.default.Messages.HYPESQUAD_DESCRIPTION_HOUSE_1,
    [u.HypeSquadHouses.HOUSE_2]: c.default.Messages.HYPESQUAD_DESCRIPTION_HOUSE_2,
    [u.HypeSquadHouses.HOUSE_3]: c.default.Messages.HYPESQUAD_DESCRIPTION_HOUSE_3
  })[e];
class _ extends n.Component {
  render() {
    let {
      houseMembership: e,
      isClaimed: t,
      isVerified: s
    } = this.props;
    if (!t || !s) return null;
    if (null != e) {
      let t = c.default.Messages.HYPESQUAD_MEMBERSHIP_HEADING.format({
        houseName: (0, d.getHouseNameFromHouseID)(e)
      });
      return (0, a.jsx)("div", {
        className: i()(S.membershipDialog, E[e]),
        children: (0, a.jsxs)("div", {
          className: S.membershipDialogContent,
          children: [(0, a.jsxs)(o.default, {
            children: [(0, a.jsxs)(o.default.Child, {
              grow: 1,
              shrink: 1,
              children: [(0, a.jsx)(r.Text, {
                className: S.membershipDialogHeading,
                variant: "text-xs/bold",
                children: c.default.Messages.HYPESQUAD_YOUR_HOUSE
              }), (0, a.jsx)(r.Heading, {
                className: S.membershipDialogHouseName,
                variant: "heading-sm/semibold",
                children: t
              }), (0, a.jsx)(r.Text, {
                className: S.membershipDialogHouseDescription,
                variant: "text-md/normal",
                children: m(e)
              })]
            }), (0, a.jsx)(o.default.Child, {
              className: S.houseLogoWrapper,
              grow: 0,
              shrink: 0,
              wrap: !0,
              children: (0, a.jsx)("img", {
                className: i()(S.houseLogo, T[e]),
                src: f[e],
                alt: t
              })
            })]
          }), (0, a.jsxs)(r.Text, {
            className: S.membershipDialogSwitchHouses,
            variant: "text-md/normal",
            children: [c.default.Messages.HYPESQUAD_SWITCH_HOUSES_PROMPT, (0, a.jsx)(r.Clickable, {
              className: S.membershipDialogSwitchHousesAction,
              onClick: this.handleJoinHypeSquadClick,
              tag: "span",
              children: c.default.Messages.HYPESQUAD_SWITCH_HOUSES_ACTION
            })]
          })]
        })
      })
    }
    return (0, a.jsxs)("div", {
      className: S.joinCTAWrapper,
      children: [(0, a.jsxs)(o.default, {
        className: S.joinCTA,
        align: o.default.Align.CENTER,
        justify: o.default.Justify.CENTER,
        direction: o.default.Direction.HORIZONTAL,
        children: [(0, a.jsx)(o.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: c.default.Messages.HYPESQUAD_READY_TO_REP
          })
        }), (0, a.jsx)(o.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(r.Button, {
            onClick: this.handleJoinHypeSquadClick,
            children: c.default.Messages.HYPESQUAD_JOIN
          })
        })]
      }), (0, a.jsx)(r.Text, {
        className: S.newsletterWarning,
        variant: "text-sm/normal",
        children: c.default.Messages.HYPESQUAD_NEWSLETTER_WARNING
      })]
    })
  }
  constructor(...e) {
    var t, n, l;
    super(...e), t = this, n = "handleJoinHypeSquadClick", l = () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("83264")]).then(s.bind(s, "711184"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      })
    }, n in t ? Object.defineProperty(t, n, {
      value: l,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = l
  }
}