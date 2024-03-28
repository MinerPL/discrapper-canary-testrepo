"use strict";
a.r(e), a.d(e, {
  default: function() {
    return g
  }
}), a("47120");
var n = a("735250"),
  i = a("470079"),
  s = a("392711"),
  l = a("442837"),
  u = a("692547"),
  r = a("266075"),
  o = a("774867"),
  c = a("612165"),
  d = a("481060"),
  _ = a("594174"),
  S = a("531441"),
  E = a("451284"),
  T = a("959562"),
  f = a("800530"),
  A = a("689938"),
  I = a("614360");

function g() {
  let t = (0, E.useSafetyHubAccountStanding)(),
    e = (0, l.useStateFromStores)([_.default], () => _.default.getCurrentUser()),
    [a, g] = i.useState(36),
    N = i.useRef({
      [S.AccountStandingState.ALL_GOOD]: null,
      [S.AccountStandingState.LIMITED]: null,
      [S.AccountStandingState.VERY_LIMITED]: null,
      [S.AccountStandingState.AT_RISK]: null,
      [S.AccountStandingState.SUSPENDED]: null
    }),
    C = i.useCallback(() => {
      g(Math.max(Math.max(...Object.values(N.current).map(t => {
        var e;
        return null !== (e = null == t ? void 0 : t.getBoundingClientRect().height) && void 0 !== e ? e : 36
      })), 36))
    }, []);
  i.useEffect(() => {
    C();
    let t = (0, s.debounce)(C, 100);
    window.addEventListener("resize", t)
  }, [C]);
  let p = {
      [S.AccountStandingState.ALL_GOOD]: {
        title: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_TITLE_V2,
        description: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_DESCRIPTION_V2.format({
          termsOfService: f.SafetyHubLinks.TOS_LINK,
          communityGuidelines: f.SafetyHubLinks.COMMUNITY_GUIDELINES
        }),
        status: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_SHORT,
        Icon: r.CircleCheckIcon,
        color: u.default.colors.STATUS_POSITIVE
      },
      [S.AccountStandingState.LIMITED]: {
        title: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_TITLE_V2,
        description: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_DESCRIPTION_V2,
        status: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_SHORT,
        Icon: o.CircleExclamationPointIcon,
        color: u.default.colors.STATUS_WARNING
      },
      [S.AccountStandingState.VERY_LIMITED]: {
        title: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_TITLE_V2,
        description: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_DESCRIPTION_V2,
        status: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_SHORT,
        Icon: o.CircleExclamationPointIcon,
        color: u.default.unsafe_rawColors.ORANGE_345
      },
      [S.AccountStandingState.AT_RISK]: {
        title: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_TITLE_V2,
        description: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_DESCRIPTION,
        status: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_SHORT,
        Icon: o.CircleExclamationPointIcon,
        color: u.default.colors.STATUS_DANGER
      },
      [S.AccountStandingState.SUSPENDED]: {
        title: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_TITLE_V2,
        description: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_DESCRIPTION_V2,
        status: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_SHORT,
        Icon: c.CircleXIcon,
        color: u.default.colors.ICON_MUTED
      }
    },
    {
      title: m,
      description: U,
      color: h,
      Icon: H
    } = p[t.state],
    x = Object.keys(p).length;
  return (0, n.jsxs)(d.Card, {
    className: I.container,
    outline: !1,
    children: [(0, n.jsx)("div", {
      className: I.profile,
      children: (0, n.jsx)(T.default, {
        user: e,
        size: d.AvatarSizes.SIZE_80
      })
    }), (0, n.jsxs)("div", {
      className: I.status,
      children: [(0, n.jsxs)("div", {
        className: I.title,
        children: [(0, n.jsx)(d.Heading, {
          color: "header-primary",
          variant: "heading-lg/normal",
          children: m.format({
            hook: t => (0, n.jsx)(d.Text, {
              style: {
                color: h.css
              },
              variant: "heading-lg/bold",
              tag: "span",
              children: t
            })
          })
        }), (0, n.jsx)(d.Text, {
          color: "text-normal",
          variant: "text-sm/normal",
          children: U
        })]
      }), (0, n.jsxs)("div", {
        className: I.health,
        style: {
          height: a
        },
        children: [(0, n.jsx)("div", {
          className: I.line
        }), Object.entries(p).map((e, a) => {
          let [i, s] = e, l = parseInt(i) === t.state;
          return (0, n.jsxs)("div", {
            className: I.statusOption,
            ref: t => N.current[parseInt(i)] = t,
            children: [l ? (0, n.jsx)(H, {
              className: I.marker,
              color: s.color
            }) : (0, n.jsx)("div", {
              className: I.marker,
              style: {
                marginLeft: 0 === a ? -6 : 0,
                marginRight: a === x - 1 ? -6 : 0
              },
              children: (0, n.jsx)("div", {
                className: I.empty
              })
            }), s.status.format({
              hook: t => (0, n.jsx)(d.Text, {
                color: "text-normal",
                variant: "text-sm/normal",
                className: I.statusLabel,
                children: t
              })
            })]
          }, a)
        })]
      })]
    })]
  })
}