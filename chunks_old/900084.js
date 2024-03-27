"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("834022");
var a = s("37983"),
  l = s("884691"),
  n = s("77078"),
  i = s("353575"),
  r = s("296839"),
  o = s("348934"),
  d = s("449008"),
  u = s("431451"),
  c = s("772871"),
  E = s("766829"),
  _ = s("782340"),
  I = s("494454");

function T() {
  let e = "• ";
  return (0, a.jsxs)("div", {
    className: I.changelog,
    children: [(0, a.jsx)("img", {
      className: I.changelogImage,
      src: s("195238"),
      alt: "changelog"
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        className: I.updatesHeader,
        children: _.default.Messages.GUILD_SETTINGS_SAFETY_UPDATES_HEADER
      }), (0, a.jsx)(n.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: I.updatesDescription,
        children: _.default.Messages.GUILD_SETTINGS_SAFETY_UPDATES_LINE_1
      }), (0, a.jsx)(n.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: I.updatesDescription,
        children: _.default.Messages.GUILD_SETTINGS_SAFETY_UPDATES_LINE_2
      }), (0, a.jsxs)(n.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [e, _.default.Messages.GUILD_SETTINGS_SAFETY_UPDATES_ITEM_1]
      }), (0, a.jsxs)(n.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [e, _.default.Messages.GUILD_SETTINGS_SAFETY_UPDATES_ITEM_2]
      }), (0, a.jsxs)(n.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [e, _.default.Messages.GUILD_SETTINGS_SAFETY_UPDATES_ITEM_3]
      }), (0, a.jsxs)(n.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [e, _.default.Messages.GUILD_SETTINGS_SAFETY_UPDATES_ITEM_4]
      })]
    })]
  })
}

function S(e) {
  let {
    title: t,
    subtitle: s,
    icon: l,
    page: i
  } = e;
  return (0, a.jsxs)("div", {
    className: I.safetyStepRow,
    children: [(0, a.jsxs)("div", {
      className: I.safetyStepContent,
      children: [(0, a.jsx)(n.Avatar, {
        src: l,
        size: n.AvatarSizes.SIZE_40,
        "aria-label": t
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(n.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: t
        }), (0, a.jsx)(n.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: s
        })]
      })]
    }), (0, a.jsx)(n.Button, {
      className: I.editButton,
      size: n.Button.Sizes.SMALL,
      color: n.Button.Colors.PRIMARY,
      look: n.Button.Looks.OUTLINED,
      borderColor: n.Button.BorderColors.PRIMARY,
      onClick: () => (0, u.setSafetyPage)(i),
      children: _.default.Messages.EDIT
    })]
  })
}

function f(e) {
  let {
    guild: t,
    hideChangelog: u
  } = e;
  (0, i.useSyncAutomodRulesEffect)(t.id);
  let f = (0, r.useAvailableTriggerTypes)(t.id),
    {
      rulesByTriggerType: m
    } = (0, i.useAutomodRulesList)(t.id),
    {
      numEnabledRules: N,
      numRules: g
    } = l.useMemo(() => {
      let e = 0,
        t = 0;
      if (null == m) return {
        numEnabledRules: e,
        numRules: t
      };
      let s = Object.values(f).flat();
      return s.forEach(s => {
        var a;
        let l = null === (a = m[s]) || void 0 === a ? void 0 : a.filter(d.isNotNullish);
        if (null == l || 0 === l.length) {
          t++;
          return
        }
        l.forEach(s => {
          s.enabled && e++, t++
        })
      }), {
        numEnabledRules: e,
        numRules: t
      }
    }, [f, m]),
    h = (0, E.getGuildSafetySettings)(t),
    C = h[c.GuildSettingsSafetyPage.CAPTCHA_AND_RAID_PROTECTION],
    R = h[c.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION],
    x = h[c.GuildSettingsSafetyPage.PERMISSIONS],
    L = (0, o.useCanCurrentUserManageAutomod)(t.id);
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(n.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: I.header,
      children: _.default.Messages.GUILD_SETTINGS_SAFETY_SETUP_HEADER
    }), !u && (0, a.jsx)(T, {}), (0, a.jsxs)("div", {
      className: I.safetyChecklist,
      children: [(0, a.jsx)(S, {
        icon: s("373558"),
        title: _.default.Messages.GUILD_SETTINGS_SAFETY_CAPTCHA_RAID_PROTECTION,
        subtitle: _.default.Messages.GUILD_SETTINGS_SAFETY_OVERVIEW_NUM_ENABLED.format({
          enabled: C.filter(e => e.enabled).length,
          total: C.length
        }),
        page: c.GuildSettingsSafetyPage.CAPTCHA_AND_RAID_PROTECTION
      }), (0, a.jsx)("div", {
        className: I.divider
      }), (0, a.jsx)(S, {
        icon: s("119134"),
        title: _.default.Messages.GUILD_SETTINGS_SAFETY_DM_SPAM_PROTECTION,
        subtitle: _.default.Messages.GUILD_SETTINGS_SAFETY_OVERVIEW_NUM_ENABLED.format({
          enabled: R.filter(e => e.enabled).length,
          total: R.length
        }),
        page: c.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION
      }), (0, a.jsx)("div", {
        className: I.divider
      }), L && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(S, {
          icon: s("799036"),
          title: _.default.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
          subtitle: _.default.Messages.GUILD_SETTINGS_SAFETY_OVERVIEW_NUM_ENABLED.format({
            enabled: N,
            total: g
          }),
          page: c.GuildSettingsSafetyPage.AUTOMOD
        }), (0, a.jsx)("div", {
          className: I.divider
        })]
      }), (0, a.jsx)(S, {
        icon: s("444964"),
        title: _.default.Messages.PERMISSIONS,
        subtitle: _.default.Messages.GUILD_SETTINGS_SAFETY_OVERVIEW_NUM_ENABLED.format({
          enabled: x.filter(e => e.enabled).length,
          total: x.length
        }),
        page: c.GuildSettingsSafetyPage.PERMISSIONS
      })]
    })]
  })
}