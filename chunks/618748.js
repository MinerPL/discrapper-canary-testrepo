"use strict";
t.d(s, {
  Z: function() {
    return b
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(481060),
  a = t(204875),
  r = t(715796),
  o = t(434404),
  c = t(999382),
  d = t(962086),
  u = t(225675),
  E = t(703656),
  _ = t(577275),
  I = t(430824),
  T = t(594174),
  N = t(823379),
  m = t(730647),
  S = t(584825),
  h = t(723047),
  g = t(303737),
  x = t(568074),
  C = t(411667),
  R = t(903773),
  L = t(822531),
  O = t(909656),
  A = t(210591),
  p = t(927731),
  M = t(798680),
  f = t(509026),
  v = t(981631),
  D = t(176505),
  Z = t(829857),
  j = t(689938),
  U = t(213079);

function G(e) {
  let {
    application: s,
    guild: t
  } = e, l = (0, S.YB)(t.id), a = (0, S.qi)(t.id), r = a.some(e => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset), o = (0, i.e7)([I.Z], () => I.Z.getRoles(t.id)), c = a.map(e => o[e.role_id]).some(e => null != e && 0 !== e.color), d = a.some(e => e.role_benefits.benefits.length > 0), u = null != s && t.hasFeature(v.oNc.ROLE_SUBSCRIPTIONS_ENABLED), E = [{
    title: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PAYMENT,
    items: [{
      description: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_PAYMENT_ENABLE,
      completed: u
    }]
  }, {
    title: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO,
    items: [{
      description: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_FORMAT,
      completed: !0
    }, {
      description: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_DESCRIPTION,
      completed: (null == l ? void 0 : l.description) != null && "" !== l.description
    }, {
      description: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_COVER_IMAGE,
      completed: (null == l ? void 0 : l.cover_image_asset) != null
    }]
  }, {
    title: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_TIERS,
    items: [{
      description: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_BASICS,
      completed: r
    }, {
      description: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_FLAIR,
      completed: c
    }, {
      description: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_PERKS,
      completed: d
    }]
  }];
  return (0, n.jsx)(A.Z, {
    children: E
  })
}

function P(e) {
  let {
    application: s
  } = e, {
    teams: t
  } = (0, _.Z)({
    refreshOnDepChange: !1
  }), i = t.find(e => {
    var t;
    return e.id === (null == s ? void 0 : null === (t = s.team) || void 0 === t ? void 0 : t.id)
  }), a = [Z.C.ACTION_REQUIRED, Z.C.BLOCKED, Z.C.SUSPENDED];
  return (null == i ? void 0 : i.payout_account_status) != null && a.includes(null == i ? void 0 : i.payout_account_status) ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.Spacer, {
      size: 16
    }), (0, n.jsx)(R.Z, {
      children: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYOUTS_PROBLEM_WARNING.format({
        url: v.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(i.id)
      })
    }), (0, n.jsx)(l.Spacer, {
      size: 16
    })]
  }) : null
}

function b(e) {
  let s, {
      guild: t,
      application: l
    } = e,
    a = (0, i.e7)([c.Z], () => c.Z.getProps().subsection),
    o = null != l && t.hasFeature(v.oNc.ROLE_SUBSCRIPTIONS_ENABLED);
  return (0, r.P)(t), s = o ? function(e) {
    if (e === v.KsC.ROLE_SUBSCRIPTION_EMOJI) return M.ue.EMOJIS;
    return M.ue.TIERS
  }(a) : M.ue.PAYMENT, (0, n.jsx)(m.l, {
    guildId: t.id,
    refetchOnMount: !0,
    children: (0, n.jsx)(h.in, {
      guildId: t.id,
      children: (0, n.jsx)(M.M7, {
        initialTab: s,
        children: (0, n.jsx)(B, {
          guild: t,
          application: l
        })
      })
    })
  })
}

function B(e) {
  let s, {
      guild: t,
      application: r
    } = e,
    c = null != r && t.hasFeature(v.oNc.ROLE_SUBSCRIPTIONS_ENABLED),
    {
      currentTab: _,
      setCurrentTab: S
    } = (0, M.dw)(),
    h = (0, m.f)(),
    R = (0, i.e7)([T.default], () => T.default.getCurrentUser()),
    A = (0, x.Z)(t.id),
    Z = t.isOwner(R),
    b = () => {
      let e = I.Z.getRole(t.id, t.getEveryoneRoleId());
      if (null == e) return;
      o.Z.close();
      let s = {
        [e.id]: e
      };
      (0, d.iD)(t.id, {
        type: u.z.SERVER_SHOP,
        roles: s,
        initialTab: "role_subscriptions",
        returnToSection: v.pNK.ROLE_SUBSCRIPTIONS
      }), (0, g.be)(t.id), (0, E.uL)(v.Z5c.CHANNEL(t.id, D.oC.ROLE_SUBSCRIPTIONS))
    };
  if (!h) return (0, n.jsx)(l.Spinner, {});
  switch (_) {
    case M.ue.BASIC_INFO:
      s = (0, n.jsx)(O.Z, {
        guild: t
      });
      break;
    case M.ue.TIERS:
      s = (0, n.jsx)(p.Z, {
        guildId: t.id
      });
      break;
    case M.ue.PAYMENT:
      s = (0, n.jsx)(L.Z, {
        guild: t
      });
      break;
    case M.ue.EMOJIS:
      s = (0, n.jsx)(f.Z, {
        guild: t
      });
      break;
    default:
      (0, N.vE)(_)
  }
  return (0, n.jsxs)("div", {
    className: U.container,
    children: [(0, n.jsxs)("div", {
      className: U.mainContent,
      children: [(0, n.jsx)(l.FormTitle, {
        tag: "h1",
        children: j.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
      }), (0, n.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        children: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_DESCRIPTION
      }), (0, n.jsx)(C.Z, {
        guild: t
      }), c && (0, n.jsx)(P, {
        application: r
      }), (0, n.jsxs)("div", {
        className: U.tabBarContainer,
        children: [(0, n.jsxs)(l.TabBar, {
          className: U.tabBar,
          "aria-label": j.Z.Messages.OPTIONS,
          selectedItem: _,
          type: "top",
          look: "brand",
          onItemSelect: S,
          children: [(0, n.jsx)(a.Z, {
            id: M.ue.BASIC_INFO,
            disabledTooltip: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
            disabled: !c,
            children: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO
          }), (0, n.jsx)(a.Z, {
            id: M.ue.TIERS,
            disabledTooltip: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
            disabled: !c,
            children: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_TIERS
          }), (0, n.jsx)(a.Z, {
            id: M.ue.EMOJIS,
            disabledTooltip: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
            disabled: !c,
            children: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_EMOJI
          }), Z ? (0, n.jsx)(l.TabBar.Item, {
            className: U.__invalid_tabBarItem,
            id: M.ue.PAYMENT,
            children: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PAYMENT
          }) : null]
        }), c && (0, n.jsx)("div", {
          className: U.previewButton,
          children: (0, n.jsx)(l.Tooltip, {
            text: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PREVIEW_DISABLED,
            children: e => {
              let {
                onMouseEnter: s,
                onMouseLeave: t
              } = e;
              return (0, n.jsx)(l.Button, {
                disabled: A,
                onMouseEnter: A ? s : void 0,
                onMouseLeave: A ? t : void 0,
                onClick: b,
                color: l.Button.Colors.PRIMARY,
                size: l.Button.Sizes.SMALL,
                grow: !A,
                look: l.Button.Looks.OUTLINED,
                className: U.previewButton,
                children: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PREVIEW
              })
            }
          })
        })]
      }), s]
    }), (0, n.jsx)(G, {
      application: r,
      guild: t
    })]
  })
}