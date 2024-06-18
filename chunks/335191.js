"use strict";
n.d(t, {
  E3: function() {
    return L
  },
  OA: function() {
    return D
  },
  tH: function() {
    return v
  }
}), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(692547),
  l = n(780384),
  u = n(481060),
  _ = n(99690),
  d = n(726542),
  c = n(367907),
  E = n(132871),
  I = n(147890),
  T = n(122021),
  h = n(275759),
  S = n(323588),
  f = n(753194),
  N = n(598077),
  A = n(671533),
  m = n(880008),
  O = n(49012),
  R = n(981631),
  C = n(856651),
  p = n(689938),
  g = n(16367);

function L(e) {
  var t, n;
  let r, s, _, {
    connectedAccount: E,
    theme: I,
    locale: N,
    userId: L,
    className: v,
    showMetadata: D,
    showInvisibleIcon: M
  } = e;
  null == D && (D = !0);
  let P = null !== (n = E.metadata) && void 0 !== n ? n : {},
    y = D ? (0, h.FI)(P[C.PC.CREATED_AT], N) : null,
    U = (0, u.useToken)(a.Z.unsafe_rawColors.TWITTER).hex(),
    b = p.Z.Messages.CONNECTION_VERIFIED;
  if (D) switch (E.type) {
    case R.ABu.REDDIT:
      r = (0, S.oP)(P);
      break;
    case R.ABu.STEAM:
      r = (0, S.Dq)(P);
      break;
    case R.ABu.TWITTER:
      r = (0, S.rJ)(P), "1" === P[C.PC.TWITTER_VERIFIED] && (s = U, b = p.Z.Messages.CONNECTION_VERIFIED_ON_TWITTER);
      break;
    case R.ABu.PAYPAL:
      r = (0, S.li)(P);
      break;
    case R.ABu.EBAY:
      r = (0, S.ul)(P);
      break;
    case R.ABu.TIKTOK:
      r = (0, S.hf)(P)
  }
  let G = d.Z.get((0, T.rR)(E.type)),
    w = null == G ? void 0 : null === (t = G.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(G, E);
  null != M && M ? _ = (0, i.jsx)(m.Z, {
    className: o()(g.__invalid_connectedAccountOpenIconContainer, g.connectedAccountHideIcon),
    foregroundColor: "currentColor"
  }) : null != w && (_ = (0, i.jsx)(u.Anchor, {
    href: w,
    onClick: e => {
      var t, n;
      t = E.type, n = L, (0, c.yw)(R.rMx.CONNECTED_ACCOUNT_VIEWED, {
        platform_type: t,
        other_user_id: n
      }), (0, O.q)({
        href: w,
        trusted: (null == G ? void 0 : G.type) !== R.ABu.DOMAIN
      }, e)
    },
    children: (0, i.jsx)(A.Z, {
      className: g.connectedAccountOpenIcon,
      direction: A.Z.Directions.RIGHT
    })
  }));
  let k = (0, u.useToken)(a.Z.colors.INTERACTIVE_MUTED).hex(),
    B = (0, u.useToken)(a.Z.colors.INTERACTIVE_ACTIVE).hex(),
    x = E.verified ? (0, i.jsx)(f.Z, {
      className: g.connectedAccountVerifiedIcon,
      color: null != s ? s : k,
      forcedIconColor: B,
      size: 16,
      tooltipText: b
    }) : null;
  return (0, i.jsxs)("div", {
    className: o()(g.connectedAccountContainer, null != r && r.length > 0 || null != y ? g.connectedAccountContainerWithMetadata : null, v),
    children: [(0, i.jsxs)("div", {
      className: g.connectedAccount,
      children: [(0, i.jsx)(u.Tooltip, {
        text: null == G ? void 0 : G.name,
        children: e => (0, i.jsx)("img", {
          ...e,
          alt: p.Z.Messages.IMG_ALT_LOGO.format({
            name: null == G ? void 0 : G.name
          }),
          className: g.connectedAccountIcon,
          src: (0, l.wj)(I) ? null == G ? void 0 : G.icon.darkSVG : null == G ? void 0 : G.icon.lightSVG
        })
      }), (0, i.jsxs)("div", {
        className: g.connectedAccountNameContainer,
        children: [(0, i.jsxs)("div", {
          className: g.connectedAccountName,
          children: [(0, i.jsxs)("div", {
            className: g.connectedAccountNameTextContainer,
            children: [(0, i.jsx)(u.Tooltip, {
              overflowOnly: !0,
              text: E.name,
              children: e => (0, i.jsx)(u.Text, {
                ...e,
                variant: "text-md/semibold",
                color: "interactive-active",
                className: g.connectedAccountNameText,
                children: E.name
              })
            }), x]
          }), _]
        }), null != y ? (0, i.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: p.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
            date: y
          })
        }) : null]
      })]
    }), null != r && r.length > 0 ? (0, i.jsx)("div", {
      className: g.connectedAccountChildren,
      children: r
    }) : null]
  })
}

function v(e) {
  let {
    applicationRoleConnection: t,
    className: n,
    locale: r,
    onApplicationClicked: s,
    selectedGuildId: a
  } = e, l = (0, S.rm)(t, void 0, r), d = () => {
    null == s || s(), (0, I.goToAppDirectory)({
      view: E.ApplicationDirectoryViews.APPLICATION,
      applicationId: t.application.id,
      guildId: a,
      entrypoint: {
        name: E.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
      }
    })
  };
  return (0, i.jsxs)("div", {
    className: o()(g.connectedAccountContainer, null != l && l.length > 0 ? g.connectedAccountContainerWithMetadata : null, n),
    children: [(0, i.jsx)("div", {
      className: g.connectedAccount,
      children: (0, i.jsxs)(u.Clickable, {
        className: o()(g.connectedAccountNameContainer, g.connectedAccountNameContainerClickable),
        onClick: d,
        children: [null != t.platform_name ? (0, i.jsx)(u.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: t.platform_name
        }) : null, null != t.platform_username ? (0, i.jsx)("div", {
          className: g.connectedAccountName,
          children: (0, i.jsx)("div", {
            className: g.connectedAccountNameTextContainer,
            children: (0, i.jsx)(u.Text, {
              variant: "text-md/semibold",
              color: "interactive-active",
              className: g.connectedAccountNameText,
              children: t.platform_username
            })
          })
        }) : null]
      })
    }), null != l && l.length > 0 ? (0, i.jsx)("div", {
      className: o()(g.connectedAccountChildren, g.connectedAccountChildrenNoIcon),
      children: l
    }) : null, (0, i.jsx)("div", {
      children: (0, i.jsx)(u.Clickable, {
        className: g.connectedAccountPoweredBy,
        onClick: d,
        children: (0, i.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: p.Z.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
            applicationHook: () => (0, i.jsxs)("div", {
              className: g.connectedAccountPoweredByText,
              children: [null != t.application.bot ? (0, i.jsx)(_.Z, {
                user: new N.Z(t.application.bot),
                size: u.AvatarSizes.SIZE_16
              }) : null, (0, i.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "text-normal",
                children: t.application.name
              })]
            })
          })
        })
      })
    })]
  })
}
let D = 12633 == n.j ? r.forwardRef(function(e, t) {
  let {
    connectedAccounts: n,
    theme: r,
    locale: s,
    className: a,
    userId: l
  } = e;
  if (null == n || 0 === n.length) return null;
  let u = n.filter(e => d.Z.isSupported(e.type)).map(e => (0, i.jsx)(L, {
      connectedAccount: e,
      theme: r,
      locale: s,
      userId: l
    }, "".concat(e.type, ":").concat(e.id))),
    _ = [],
    c = [];
  for (let e = 0; e < u.length; e++) {
    let t = u[e];
    e % 2 == 0 ? _.push(t) : c.push(t)
  }
  return (0, i.jsxs)("div", {
    ref: t,
    className: o()(g.connectedAccounts, a),
    children: [(0, i.jsx)("div", {
      className: g.connectedAccountsColumn,
      children: _
    }), (0, i.jsx)("div", {
      className: g.connectedAccountsColumn,
      children: c
    })]
  })
}) : null