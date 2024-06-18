"use strict";
t.d(s, {
  Z: function() {
    return m
  }
}), t(536091);
var n = t(735250),
  i = t(470079),
  l = t(481060),
  a = t(727072),
  r = t(85960),
  o = t(676317),
  c = t(823379),
  d = t(84613),
  u = t(740903),
  E = t(598622),
  _ = t(689938),
  I = t(19957);

function T() {
  let e = "• ";
  return (0, n.jsxs)("div", {
    className: I.changelog,
    children: [(0, n.jsx)("img", {
      className: I.changelogImage,
      src: t(531945),
      alt: "changelog"
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        className: I.updatesHeader,
        children: _.Z.Messages.GUILD_SETTINGS_SAFETY_UPDATES_HEADER
      }), (0, n.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: I.updatesDescription,
        children: _.Z.Messages.GUILD_SETTINGS_SAFETY_UPDATES_LINE_1
      }), (0, n.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: I.updatesDescription,
        children: _.Z.Messages.GUILD_SETTINGS_SAFETY_UPDATES_LINE_2
      }), (0, n.jsxs)(l.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [e, _.Z.Messages.GUILD_SETTINGS_SAFETY_UPDATES_ITEM_1]
      }), (0, n.jsxs)(l.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [e, _.Z.Messages.GUILD_SETTINGS_SAFETY_UPDATES_ITEM_2]
      }), (0, n.jsxs)(l.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [e, _.Z.Messages.GUILD_SETTINGS_SAFETY_UPDATES_ITEM_3]
      }), (0, n.jsxs)(l.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [e, _.Z.Messages.GUILD_SETTINGS_SAFETY_UPDATES_ITEM_4]
      })]
    })]
  })
}

function N(e) {
  let {
    title: s,
    subtitle: t,
    icon: i,
    page: a
  } = e;
  return (0, n.jsxs)("div", {
    className: I.safetyStepRow,
    children: [(0, n.jsxs)("div", {
      className: I.safetyStepContent,
      children: [(0, n.jsx)(l.Avatar, {
        src: i,
        size: l.AvatarSizes.SIZE_40,
        "aria-label": s
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: s
        }), (0, n.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: t
        })]
      })]
    }), (0, n.jsx)(l.Button, {
      className: I.__invalid_editButton,
      size: l.Button.Sizes.SMALL,
      color: l.Button.Colors.PRIMARY,
      look: l.Button.Looks.OUTLINED,
      onClick: () => (0, d.K)(a),
      children: _.Z.Messages.EDIT
    })]
  })
}

function m(e) {
  let {
    guild: s,
    hideChangelog: d
  } = e;
  (0, a.RD)(s.id);
  let m = (0, r.Z6)(s.id),
    {
      rulesByTriggerType: S
    } = (0, a.pH)(s.id),
    {
      numEnabledRules: h,
      numRules: g
    } = i.useMemo(() => {
      let e = 0,
        s = 0;
      return null == S ? {
        numEnabledRules: e,
        numRules: s
      } : (Object.values(m).flat().forEach(t => {
        var n;
        let i = null === (n = S[t]) || void 0 === n ? void 0 : n.filter(c.lm);
        if (null == i || 0 === i.length) {
          s++;
          return
        }
        i.forEach(t => {
          t.enabled && e++, s++
        })
      }), {
        numEnabledRules: e,
        numRules: s
      })
    }, [m, S]),
    x = (0, E.Q)(s),
    C = x[u.u.CAPTCHA_AND_RAID_PROTECTION],
    R = x[u.u.DM_AND_SPAM_PROTECTION],
    L = x[u.u.PERMISSIONS],
    O = (0, o.pr)(s.id);
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: I.header,
      children: _.Z.Messages.GUILD_SETTINGS_SAFETY_SETUP_HEADER
    }), !d && (0, n.jsx)(T, {}), (0, n.jsxs)("div", {
      className: I.safetyChecklist,
      children: [(0, n.jsx)(N, {
        icon: t(14215),
        title: _.Z.Messages.GUILD_SETTINGS_SAFETY_CAPTCHA_RAID_PROTECTION,
        subtitle: _.Z.Messages.GUILD_SETTINGS_SAFETY_OVERVIEW_NUM_ENABLED.format({
          enabled: C.filter(e => e.enabled).length,
          total: C.length
        }),
        page: u.u.CAPTCHA_AND_RAID_PROTECTION
      }), (0, n.jsx)("div", {
        className: I.divider
      }), (0, n.jsx)(N, {
        icon: t(128724),
        title: _.Z.Messages.GUILD_SETTINGS_SAFETY_DM_SPAM_PROTECTION,
        subtitle: _.Z.Messages.GUILD_SETTINGS_SAFETY_OVERVIEW_NUM_ENABLED.format({
          enabled: R.filter(e => e.enabled).length,
          total: R.length
        }),
        page: u.u.DM_AND_SPAM_PROTECTION
      }), (0, n.jsx)("div", {
        className: I.divider
      }), O && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(N, {
          icon: t(145136),
          title: _.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
          subtitle: _.Z.Messages.GUILD_SETTINGS_SAFETY_OVERVIEW_NUM_ENABLED.format({
            enabled: h,
            total: g
          }),
          page: u.u.AUTOMOD
        }), (0, n.jsx)("div", {
          className: I.divider
        })]
      }), (0, n.jsx)(N, {
        icon: t(913414),
        title: _.Z.Messages.PERMISSIONS,
        subtitle: _.Z.Messages.GUILD_SETTINGS_SAFETY_OVERVIEW_NUM_ENABLED.format({
          enabled: L.filter(e => e.enabled).length,
          total: L.length
        }),
        page: u.u.PERMISSIONS
      })]
    })]
  })
}