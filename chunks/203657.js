"use strict";
t.r(s), t.d(s, {
  default: function() {
    return C
  }
}), t("222007");
var a = t("37983"),
  l = t("884691"),
  i = t("414456"),
  n = t.n(i),
  d = t("917351"),
  r = t.n(d),
  c = t("446674"),
  o = t("77078"),
  u = t("716241"),
  h = t("305961"),
  x = t("677099"),
  N = t("282109"),
  I = t("476263"),
  T = t("660279"),
  m = t("109264"),
  f = t("578706"),
  v = t("564875"),
  _ = t("599110"),
  j = t("380353"),
  g = t("49111"),
  M = t("782340"),
  O = t("462294");

function C(e) {
  let {
    guildPlans: s,
    overrideGuild: t
  } = e, i = (0, c.useStateFromStores)([x.default], () => x.default.getFlattenedGuildIds()), [n, d] = l.useMemo(() => r(s).values().sortBy(e => {
    let s = i.indexOf(e.guildId);
    return -1 === s ? i.length : s
  }).partition(e => {
    var s;
    return (null !== (s = e.overrideMode) && void 0 !== s ? s : e.mode) === j.Mode.UseGreyDot
  }).value(), [s, i]), o = l.useCallback(e => {
    var a;
    return t(e, (null !== (a = s[e].overrideMode) && void 0 !== a ? a : s[e].mode) === j.Mode.UseGreyDot ? j.Mode.KeepAsIs : j.Mode.UseGreyDot)
  }, [t, s]);
  return (0, a.jsxs)("div", {
    className: O.container,
    children: [(0, a.jsx)(A, {
      header: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION2_TITLE,
      subheader: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION2_SUBTITLE,
      guildPlans: d,
      onClick: o
    }), (0, a.jsx)(A, {
      header: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION1_TITLE,
      subheader: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION1_SUBTITLE,
      guildPlans: n,
      onClick: o
    })]
  })
}

function A(e) {
  let {
    header: s,
    subheader: t,
    guildPlans: l,
    onClick: i
  } = e;
  return (0, a.jsxs)("div", {
    className: O.column,
    children: [(0, a.jsxs)("div", {
      className: O.header,
      children: [(0, a.jsxs)(o.Text, {
        className: O.sectionTitle,
        variant: "text-md/medium",
        color: "header-primary",
        children: [s, " (", l.length, ")"]
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: t
      })]
    }), (0, a.jsx)(o.Scroller, {
      className: O.scroller,
      children: (0, a.jsx)("div", {
        className: O.guilds,
        children: l.map(e => (0, a.jsx)(R, {
          plan: e,
          onClick: i
        }, e.guildId))
      })
    })]
  })
}

function R(e) {
  var s;
  let {
    plan: t,
    onClick: l
  } = e, i = (0, c.useStateFromStores)([h.default], () => h.default.getGuild(t.guildId));
  if (null == i) return null;
  let d = (null !== (s = t.overrideMode) && void 0 !== s ? s : t.mode) === j.Mode.UseGreyDot;

  function r() {
    _.default.track(g.AnalyticEvents.NOTIFICATION_MIGRATION_GUILD_CHANGED, {
      ...(0, u.collectGuildAnalyticsMetadata)(t.guildId),
      is_selected: !d,
      is_muted: N.default.isMuted(t.guildId),
      notification_setting: N.default.getMessageNotifications(t.guildId)
    }), l(t.guildId)
  }
  return (0, a.jsx)(o.Tooltip, {
    text: (0, a.jsxs)("div", {
      children: [(0, a.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: i.name
      }), (0, a.jsxs)("div", {
        className: O.tooltipRow,
        children: [(0, a.jsx)(m.default, {
          width: 12,
          height: 12
        }), (0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: t.messagePain ? M.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_BUSY : M.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_QUIET
        })]
      }), (0, a.jsxs)("div", {
        className: O.tooltipRow,
        children: [(0, a.jsx)(v.default, {
          width: 12,
          height: 12
        }), (0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: t.visitsALot ? M.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_ALOT : M.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_ALITTLE
        })]
      }), (0, a.jsxs)("div", {
        className: O.tooltipRow,
        children: [(0, a.jsx)(T.default, {
          width: 12,
          height: 12
        }), (0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: t.muted ? M.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_MUTED : M.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_NOT_MUTED
        })]
      })]
    }),
    "aria-label": t.debugReason,
    tooltipClassName: O.tooltip,
    children: e => (0, a.jsxs)(o.Clickable, {
      ...e,
      className: n(O.guild, d ? O.selected : void 0),
      onClick: r,
      children: [(0, a.jsx)(f.default, {
        className: O.checkmark,
        width: 16,
        height: 16,
        backgroundColor: "white"
      }), (0, a.jsx)(I.default, {
        "aria-hidden": !0,
        className: O.guildIcon,
        guild: i,
        size: I.default.Sizes.MEDIUM,
        active: !0,
        tabIndex: -1
      })]
    })
  })
}