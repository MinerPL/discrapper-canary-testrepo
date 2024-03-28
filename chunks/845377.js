"use strict";
s.r(t), s("47120"), s("724458");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("498607"),
  o = s.n(r),
  d = s("913527"),
  u = s.n(d),
  c = s("442837"),
  E = s("692547"),
  _ = s("481060"),
  I = s("946314"),
  T = s("984933"),
  S = s("696202"),
  f = s("759231"),
  m = s("63063"),
  N = s("709054"),
  g = s("434404"),
  h = s("981631"),
  C = s("689938"),
  R = s("774969");
let x = e => {
  let {
    name: t,
    failingName: s,
    description: l,
    checked: n,
    pending: i,
    pendingDescription: r,
    failingDescription: o
  } = e, d = t, u = null, c = null;
  return i ? (u = (0, a.jsx)(f.default, {
    color: E.default.unsafe_rawColors.YELLOW_300.css,
    width: 20,
    height: 20
  }), c = null != r ? r : l) : n ? (u = (0, a.jsx)(_.Checkbox, {
    readOnly: !0,
    shape: _.Checkbox.Shapes.ROUND,
    size: 20,
    type: _.Checkbox.Types.INVERTED,
    value: !0
  }), c = l) : (u = (0, a.jsx)(S.default, {
    color: E.default.unsafe_rawColors.RED_400.css,
    width: 20,
    height: 20
  }), d = null != s ? s : t, c = null != o ? o : l), (0, a.jsxs)("div", {
    className: R.checklistItem,
    children: [(0, a.jsx)("div", {
      className: R.checklistIcon,
      children: u
    }), (0, a.jsxs)("div", {
      className: R.checklistText,
      children: [(0, a.jsx)(_.Heading, {
        variant: "heading-md/semibold",
        children: d
      }), (0, a.jsx)(_.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: c
      })]
    })]
  })
};

function L(e, t) {
  return o()(null == e ? void 0 : e.map(e => {
    let [t, s] = e;
    return null == t ? void 0 : t.id
  }), null == t ? void 0 : t.map(e => {
    let [t, s] = e;
    return null == t ? void 0 : t.id
  }))
}
t.default = e => {
  let {
    guild: t,
    guildId: n,
    className: r,
    noHeader: o = !1,
    failedItemsOnly: d = !1
  } = e, [E, S] = (0, c.useStateFromStoresArray)([I.default], () => [I.default.getDiscoveryChecklist(n), I.default.isLoading()], [n]), {
    nsfwProperties: f
  } = null != E ? E : {}, O = null == t ? void 0 : t.hasFeature(h.GuildFeatures.PARTNERED), A = null == f ? void 0 : f.channels_banned_keywords, p = (0, c.useStateFromStores)([T.default], () => {
    var e, s, a;
    if (null == A) return [];
    let l = null !== (s = (null !== (e = T.default.getChannels(t.id)) && void 0 !== e ? e : {})[T.GUILD_SELECTABLE_CHANNELS_KEY]) && void 0 !== s ? s : [],
      n = null !== (a = null == l ? void 0 : l.map(e => e.channel).reduce((e, t) => ({
        ...e,
        [t.id]: t
      }), {})) && void 0 !== a ? a : {};
    return null == A ? [] : Object.entries(A).map(e => {
      let [t, s] = e;
      return [n[t], s]
    })
  }, [t.id, A], L);
  if (S || null == E) return (0, a.jsxs)("div", {
    className: i()(R.container, R.loaderContainer, r),
    children: [(0, a.jsx)(_.Heading, {
      className: R.loadingText,
      variant: "heading-md/semibold",
      color: "header-secondary",
      children: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_LOADING
    }), (0, a.jsx)(_.Spinner, {
      className: R.__invalid_spinner
    })]
  });
  let M = O ? C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE_DESCRIPTION_FAILING_PARTNERS : C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE_DESCRIPTION_FAIL,
    D = [{
      name: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE,
      failingName: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE_FAILING,
      description: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE_DESCRIPTION,
      failingDescription: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE_DESCRIPTION_FAILING_GUIDELINES.format({
        termsURL: h.MarketingURLs.TERMS,
        guidelinesURL: m.default.getArticleURL(h.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES)
      }),
      checked: null == E ? void 0 : E.safeEnvironment
    }, {
      name: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE.format({
        minMembers: E.minimumGuildSize
      }),
      failingName: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE_FAIL.format({
        minMembers: E.minimumGuildSize.toLocaleString()
      }),
      description: null,
      failingDescription: M.format({
        minMembers: E.minimumGuildSize.toLocaleString()
      }),
      checked: null == E ? void 0 : E.size
    }, {
      name: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE,
      failingName: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE_FAILING,
      description: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE_DESCRIPTION.format({
        minimumGuildAge: Math.ceil(E.minimumGuildAge / 7)
      }),
      failingDescription: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE_DESCRIPTION_FAILING.format({
        minimumGuildAge: Math.ceil(E.minimumGuildAge / 7),
        passDate: u()(N.default.extractTimestamp(n)).add(E.minimumGuildAge, "days").format("LL")
      }),
      checked: null == E ? void 0 : E.age
    }, {
      name: (null == E ? void 0 : E.healthScorePending) ? C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_PENDING : C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY,
      failingName: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_FAILING,
      description: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION,
      failingDescription: (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(_.Text, {
          color: "text-muted",
          className: R.healthFailingDescription,
          variant: "text-sm/normal",
          children: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION_FAILING
        }), (null == E ? void 0 : E.engagementHealthy) ? null : (0, a.jsx)(_.Text, {
          color: "text-danger",
          variant: "text-sm/normal",
          children: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_ENGAGEMENT_FAILING
        }), (null == E ? void 0 : E.retentionHealthy) ? null : (0, a.jsx)(_.Text, {
          color: "text-danger",
          variant: "text-sm/normal",
          children: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_RETENTION_FAILING
        }), (() => {
          if (null == E || null == E.healthScore) return !1;
          let {
            retentionHealthy: e,
            engagementHealthy: t,
            healthScore: s
          } = E, {
            avg_nonnew_participators: a,
            avg_nonnew_communicators: l,
            perc_ret_w1_intentful: n
          } = s;
          return !e && null != n || !t && null != a && null != l
        })() && (0, a.jsx)(_.Button, {
          className: R.detailsButton,
          look: _.Button.Looks.LINK,
          size: _.Button.Sizes.NONE,
          color: _.Button.Colors.LINK,
          onClick: () => (0, _.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([s.e("99387"), s.e("23401")]).then(s.bind(s, "666599"));
            return t => (0, a.jsx)(e, {
              ...t,
              guildChecklist: E
            })
          }),
          children: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTH_VIEW_DETAILS
        })]
      }),
      pendingDescription: (null == E ? void 0 : E.size) ? C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION_PENDING.format({
        checkBackHook: (e, t) => (0, a.jsx)("strong", {
          className: R.healthPending,
          children: e
        }, t)
      }) : C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION_PENDING_SIZE.format({
        minMembers: 200
      }),
      checked: null == E ? void 0 : E.healthy,
      pending: null == E ? void 0 : E.healthScorePending
    }, {
      name: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_NSFW,
      failingName: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_NSFW_FAILING,
      description: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_NSFW_DESCRIPTION,
      failingDescription: (0, a.jsxs)(a.Fragment, {
        children: [(null == f ? void 0 : f.channels) != null ? (0, a.jsx)(_.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_CHANGE_CHANNEL_NAMES_2.format({
            channelHook: (e, t) => (0, a.jsx)("span", {
              className: R.doesNot,
              children: e
            }, t)
          })
        }) : null, p.length > 0 ? (0, a.jsx)("div", {
          className: R.indent,
          children: p.map(e => {
            let [t, s] = e;
            return null != t ? (0, a.jsxs)(_.Text, {
              color: "text-muted",
              variant: "text-sm/normal",
              children: ["#", t.name, ": ", s.join(", ")]
            }, t.id) : null
          })
        }) : null, (null == f ? void 0 : f.name) != null ? (0, a.jsx)(_.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_CHANGE_NAME.format({
            nameHook: (e, t) => (0, a.jsx)("span", {
              className: R.doesNot,
              children: e
            }, t)
          })
        }) : null, (null == f ? void 0 : f.description) != null ? (0, a.jsx)(_.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_CHANGE_DESCRIPTION.format({
            descriptionHook: (e, t) => (0, a.jsx)("span", {
              className: R.doesNot,
              children: e
            }, t)
          })
        }) : null]
      }),
      checked: null == f || 0 === Object.keys(f).length
    }, {
      name: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA,
      failingName: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA_FAILING,
      description: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA_DESCRIPTION,
      failingDescription: C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA_DESCRIPTION_FAILING.format({
        onClick: () => g.default.setSection(h.GuildSettingsSections.SAFETY, h.GuildSettingsSubsections.SAFETY_PERMISSIONS)
      }),
      checked: null == E ? void 0 : E.protected
    }];
  return (0, a.jsxs)("div", {
    className: i()(R.container, r),
    children: [(() => {
      let e = C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_DOES_NOT_PASS,
        t = (null == E ? void 0 : E.sufficient) ? s("909425") : s("177266");
      return o ? null : (0, a.jsxs)("div", {
        className: R.header,
        children: [(0, a.jsx)("img", {
          alt: "",
          src: t,
          className: R.headerIcon,
          width: 40
        }), (0, a.jsx)(_.Heading, {
          variant: "heading-md/semibold",
          children: (null == E ? void 0 : E.sufficient) ? C.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_GOOD_STANDING : e.format({
            doesNotHook: (e, t) => (0, a.jsx)("strong", {
              className: R.doesNot,
              children: e
            }, t)
          })
        })]
      })
    })(), D.filter(e => !d || null == e.checked || !e.checked).map((e, t) => (0, a.jsxs)(l.Fragment, {
      children: [(0, a.jsx)(x, {
        ...e
      }), t < D.length - 1 ? (0, a.jsx)("hr", {
        className: R.separator
      }) : null]
    }, e.name))]
  })
}