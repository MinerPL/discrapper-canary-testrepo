"use strict";
t(47120), t(724458);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(498607),
  o = t.n(r),
  c = t(913527),
  d = t.n(c),
  u = t(442837),
  E = t(692547),
  _ = t(481060),
  I = t(946314),
  T = t(984933),
  N = t(696202),
  m = t(759231),
  S = t(63063),
  h = t(709054),
  g = t(434404),
  x = t(981631),
  C = t(689938),
  R = t(935873);
let L = e => {
  let {
    name: s,
    failingName: t,
    description: i,
    checked: l,
    pending: a,
    pendingDescription: r,
    failingDescription: o
  } = e, c = s, d = null, u = null;
  return a ? (d = (0, n.jsx)(m.Z, {
    color: E.Z.unsafe_rawColors.YELLOW_300.css,
    width: 20,
    height: 20
  }), u = null != r ? r : i) : l ? (d = (0, n.jsx)(_.Checkbox, {
    readOnly: !0,
    shape: _.Checkbox.Shapes.ROUND,
    size: 20,
    type: _.Checkbox.Types.INVERTED,
    value: !0
  }), u = i) : (d = (0, n.jsx)(N.Z, {
    color: E.Z.unsafe_rawColors.RED_400.css,
    width: 20,
    height: 20
  }), c = null != t ? t : s, u = null != o ? o : i), (0, n.jsxs)("div", {
    className: R.checklistItem,
    children: [(0, n.jsx)("div", {
      className: R.checklistIcon,
      children: d
    }), (0, n.jsxs)("div", {
      className: R.checklistText,
      children: [(0, n.jsx)(_.Heading, {
        variant: "heading-md/semibold",
        children: c
      }), (0, n.jsx)(_.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: u
      })]
    })]
  })
};

function O(e, s) {
  return o()(null == e ? void 0 : e.map(e => {
    let [s, t] = e;
    return null == s ? void 0 : s.id
  }), null == s ? void 0 : s.map(e => {
    let [s, t] = e;
    return null == s ? void 0 : s.id
  }))
}
s.Z = e => {
  let {
    guild: s,
    guildId: l,
    className: r,
    noHeader: o = !1,
    failedItemsOnly: c = !1
  } = e, [E, N] = (0, u.Wu)([I.ZP], () => [I.ZP.getDiscoveryChecklist(l), I.ZP.isLoading()], [l]), {
    nsfwProperties: m
  } = null != E ? E : {}, A = null == s ? void 0 : s.hasFeature(x.oNc.PARTNERED), p = null == m ? void 0 : m.channels_banned_keywords, M = (0, u.e7)([T.ZP], () => {
    var e, t, n;
    if (null == p) return [];
    let i = null !== (t = (null !== (e = T.ZP.getChannels(s.id)) && void 0 !== e ? e : {})[T.sH]) && void 0 !== t ? t : [],
      l = null !== (n = null == i ? void 0 : i.map(e => e.channel).reduce((e, s) => ({
        ...e,
        [s.id]: s
      }), {})) && void 0 !== n ? n : {};
    return null == p ? [] : Object.entries(p).map(e => {
      let [s, t] = e;
      return [l[s], t]
    })
  }, [s.id, p], O);
  if (N || null == E) return (0, n.jsxs)("div", {
    className: a()(R.container, R.loaderContainer, r),
    children: [(0, n.jsx)(_.Heading, {
      className: R.loadingText,
      variant: "heading-md/semibold",
      color: "header-secondary",
      children: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_LOADING
    }), (0, n.jsx)(_.Spinner, {
      className: R.__invalid_spinner
    })]
  });
  let f = A ? C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE_DESCRIPTION_FAILING_PARTNERS : C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE_DESCRIPTION_FAIL,
    v = [{
      name: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE,
      failingName: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE_FAILING,
      description: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE_DESCRIPTION,
      failingDescription: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE_DESCRIPTION_FAILING_GUIDELINES.format({
        termsURL: x.EYA.TERMS,
        guidelinesURL: S.Z.getArticleURL(x.BhN.PUBLIC_GUILD_GUILDLINES)
      }),
      checked: null == E ? void 0 : E.safeEnvironment
    }, {
      name: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE.format({
        minMembers: E.minimumGuildSize
      }),
      failingName: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE_FAIL.format({
        minMembers: E.minimumGuildSize.toLocaleString()
      }),
      description: null,
      failingDescription: f.format({
        minMembers: E.minimumGuildSize.toLocaleString()
      }),
      checked: null == E ? void 0 : E.size
    }, {
      name: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE,
      failingName: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE_FAILING,
      description: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE_DESCRIPTION.format({
        minimumGuildAge: Math.ceil(E.minimumGuildAge / 7)
      }),
      failingDescription: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE_DESCRIPTION_FAILING.format({
        minimumGuildAge: Math.ceil(E.minimumGuildAge / 7),
        passDate: d()(h.default.extractTimestamp(l)).add(E.minimumGuildAge, "days").format("LL")
      }),
      checked: null == E ? void 0 : E.age
    }, {
      name: (null == E ? void 0 : E.healthScorePending) ? C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_PENDING : C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY,
      failingName: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_FAILING,
      description: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION,
      failingDescription: (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(_.Text, {
          color: "text-muted",
          className: R.healthFailingDescription,
          variant: "text-sm/normal",
          children: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION_FAILING
        }), (null == E ? void 0 : E.engagementHealthy) ? null : (0, n.jsx)(_.Text, {
          color: "text-danger",
          variant: "text-sm/normal",
          children: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_ENGAGEMENT_FAILING
        }), (null == E ? void 0 : E.retentionHealthy) ? null : (0, n.jsx)(_.Text, {
          color: "text-danger",
          variant: "text-sm/normal",
          children: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_RETENTION_FAILING
        }), (() => {
          if (null == E || null == E.healthScore) return !1;
          let {
            retentionHealthy: e,
            engagementHealthy: s,
            healthScore: t
          } = E, {
            avg_nonnew_participators: n,
            avg_nonnew_communicators: i,
            perc_ret_w1_intentful: l
          } = t;
          return !e && null != l || !s && null != n && null != i
        })() && (0, n.jsx)(_.Button, {
          className: R.detailsButton,
          look: _.Button.Looks.LINK,
          size: _.Button.Sizes.NONE,
          color: _.Button.Colors.LINK,
          onClick: () => (0, _.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([t.e("99387"), t.e("23401")]).then(t.bind(t, 666599));
            return s => (0, n.jsx)(e, {
              ...s,
              guildChecklist: E
            })
          }),
          children: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTH_VIEW_DETAILS
        })]
      }),
      pendingDescription: (null == E ? void 0 : E.size) ? C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION_PENDING.format({
        checkBackHook: (e, s) => (0, n.jsx)("strong", {
          className: R.healthPending,
          children: e
        }, s)
      }) : C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION_PENDING_SIZE.format({
        minMembers: 200
      }),
      checked: null == E ? void 0 : E.healthy,
      pending: null == E ? void 0 : E.healthScorePending
    }, {
      name: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_NSFW,
      failingName: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_NSFW_FAILING,
      description: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_NSFW_DESCRIPTION,
      failingDescription: (0, n.jsxs)(n.Fragment, {
        children: [(null == m ? void 0 : m.channels) != null ? (0, n.jsx)(_.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_CHANGE_CHANNEL_NAMES_2.format({
            channelHook: (e, s) => (0, n.jsx)("span", {
              className: R.doesNot,
              children: e
            }, s)
          })
        }) : null, M.length > 0 ? (0, n.jsx)("div", {
          className: R.indent,
          children: M.map(e => {
            let [s, t] = e;
            return null != s ? (0, n.jsxs)(_.Text, {
              color: "text-muted",
              variant: "text-sm/normal",
              children: ["#", s.name, ": ", t.join(", ")]
            }, s.id) : null
          })
        }) : null, (null == m ? void 0 : m.name) != null ? (0, n.jsx)(_.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_CHANGE_NAME.format({
            nameHook: (e, s) => (0, n.jsx)("span", {
              className: R.doesNot,
              children: e
            }, s)
          })
        }) : null, (null == m ? void 0 : m.description) != null ? (0, n.jsx)(_.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_CHANGE_DESCRIPTION.format({
            descriptionHook: (e, s) => (0, n.jsx)("span", {
              className: R.doesNot,
              children: e
            }, s)
          })
        }) : null]
      }),
      checked: null == m || 0 === Object.keys(m).length
    }, {
      name: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA,
      failingName: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA_FAILING,
      description: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA_DESCRIPTION,
      failingDescription: C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA_DESCRIPTION_FAILING.format({
        onClick: () => g.Z.setSection(x.pNK.SAFETY, x.KsC.SAFETY_PERMISSIONS)
      }),
      checked: null == E ? void 0 : E.protected
    }];
  return (0, n.jsxs)("div", {
    className: a()(R.container, r),
    children: [(() => {
      let e = C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_DOES_NOT_PASS,
        s = (null == E ? void 0 : E.sufficient) ? t(909425) : t(177266);
      return o ? null : (0, n.jsxs)("div", {
        className: R.header,
        children: [(0, n.jsx)("img", {
          alt: "",
          src: s,
          className: R.headerIcon,
          width: 40
        }), (0, n.jsx)(_.Heading, {
          variant: "heading-md/semibold",
          children: (null == E ? void 0 : E.sufficient) ? C.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_GOOD_STANDING : e.format({
            doesNotHook: (e, s) => (0, n.jsx)("strong", {
              className: R.doesNot,
              children: e
            }, s)
          })
        })]
      })
    })(), v.filter(e => !c || null == e.checked || !e.checked).map((e, s) => (0, n.jsxs)(i.Fragment, {
      children: [(0, n.jsx)(L, {
        ...e
      }), s < v.length - 1 ? (0, n.jsx)("hr", {
        className: R.separator
      }) : null]
    }, e.name))]
  })
}