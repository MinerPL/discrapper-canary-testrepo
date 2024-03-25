"use strict";
n.r(t), n.d(t, {
  useMultiAccountMenuItems: function() {
    return T
  }
}), n("424973");
var a = n("37983");
n("884691");
var s = n("446674"),
  l = n("77078"),
  i = n("449918"),
  r = n("766274"),
  o = n("102985"),
  u = n("697218"),
  d = n("578706"),
  c = n("423487"),
  f = n("599110"),
  E = n("158998"),
  h = n("694787"),
  _ = n("770032"),
  C = n("927101"),
  S = n("891964"),
  I = n("49111"),
  m = n("782340"),
  p = n("945526");

function T() {
  let e = (0, s.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
    t = (0, s.useStateFromStores)([o.default], () => o.default.hidePersonalInformation),
    {
      multiAccountUsers: n
    } = (0, C.useMultiAccountUsers)(),
    T = t => {
      t !== (null == e ? void 0 : e.id) && (f.default.track(I.AnalyticEvents.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
        location: {
          section: I.AnalyticsSections.PROFILE_POPOUT
        }
      }), h.switchAccount(t))
    },
    g = n.map(n => {
      let s = new r.default(n),
        o = s.id === (null == e ? void 0 : e.id),
        u = n.tokenStatus === _.MultiAccountTokenStatus.INVALID,
        f = t ? null : "#".concat(s.discriminator);
      return (0, a.jsx)(l.MenuItem, {
        id: s.id,
        focusedClassName: p.focused,
        label: e => {
          let {
            isFocused: r
          } = e;
          return (0, a.jsxs)("div", {
            className: p.userMenuItem,
            children: [(0, a.jsx)(l.Avatar, {
              src: s.getAvatarURL(void 0, 40),
              size: l.AvatarSizes.SIZE_24,
              "aria-label": n.username
            }), (0, a.jsxs)("div", {
              className: p.userMenuUsername,
              children: [(0, a.jsx)(l.Text, {
                className: p.userMenuText,
                variant: "text-sm/normal",
                children: E.default.getUserTag(s, {
                  mode: "username",
                  identifiable: t ? "never" : "always"
                })
              }), !s.isPomelo() && (0, a.jsx)(l.Text, {
                className: p.userMenuDiscriminator,
                variant: "text-sm/normal",
                children: f
              })]
            }), o && (0, a.jsx)(d.default, {
              color: (0, i.getColor)(r ? I.Color.WHITE_500 : I.Color.BRAND_500),
              backgroundColor: (0, i.getColor)(r ? I.Color.BRAND_500 : I.Color.WHITE_500),
              width: 18,
              height: 18,
              className: p.activeIcon
            }), u && (0, a.jsx)(c.default, {
              color: (0, i.getColor)(I.Color.RED_400),
              backgroundColor: (0, i.getColor)(I.Color.WHITE_500),
              width: 15,
              height: 15,
              className: p.activeIcon
            })]
          })
        },
        action: () => {
          u ? (0, S.default)() : T(s.id)
        }
      }, s.id)
    });
  return g.push((0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.MenuSeparator, {}), (0, a.jsx)(l.MenuItem, {
      id: "manage-accounts",
      label: m.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
      action: S.default
    })]
  })), g
}