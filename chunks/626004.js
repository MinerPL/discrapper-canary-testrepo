"use strict";
i.r(t), i.d(t, {
  default: function() {
    return v
  }
}), i("789020");
var l = i("735250"),
  a = i("470079"),
  n = i("120356"),
  s = i.n(n),
  r = i("481060"),
  o = i("860719"),
  c = i("974029"),
  d = i("158010"),
  u = i("284199"),
  p = i("63063"),
  m = i("49012"),
  _ = i("981631"),
  f = i("689938"),
  h = i("409091");
let I = p.default.getArticleURL(_.HelpdeskArticles.BOT_DATA_ACCESS);

function g(e) {
  let {
    icon: t,
    heading: i,
    body: a
  } = e;
  return (0, l.jsxs)("li", {
    className: h.intentContainer,
    children: [(0, l.jsx)("div", {
      children: (0, l.jsx)(t, {
        height: "24",
        width: "24"
      })
    }), (0, l.jsxs)("div", {
      className: h.intentTextContainer,
      children: [(0, l.jsx)("div", {
        children: (0, l.jsx)(r.Heading, {
          variant: "eyebrow",
          color: "header-secondary",
          children: i
        })
      }), (0, l.jsx)("div", {
        className: h.intentBody,
        children: (0, l.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: a
        })
      })]
    })]
  })
}

function v(e) {
  let {
    application: t
  } = e, {
    hasMessageContent: i,
    hasGuildPresences: n,
    hasGuildMembers: p,
    hasIntents: _
  } = (0, o.useBotDataAccess)({
    flags: null == t ? void 0 : t.flags
  }), v = a.useCallback(() => {
    (null == t ? void 0 : t.privacy_policy_url) != null && (0, m.handleClick)({
      href: t.privacy_policy_url
    })
  }, [null == t ? void 0 : t.privacy_policy_url]);
  return (0, l.jsxs)(l.Fragment, {
    children: [_ && (0, l.jsx)("div", {
      className: h.intentsListHeading,
      children: (0, l.jsx)(r.Text, {
        variant: "text-md/normal",
        children: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_INTENTS_LIST_HEADING
      })
    }), (0, l.jsxs)("div", {
      className: h.intentsContainer,
      children: [_ && (0, l.jsxs)("ul", {
        className: h.intentsList,
        children: [i && (0, l.jsx)(g, {
          icon: c.default,
          heading: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_HEADING,
          body: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_BODY
        }), n && (0, l.jsx)(g, {
          icon: u.default,
          heading: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_HEADING,
          body: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_BODY
        }), p && (0, l.jsx)(g, {
          icon: d.default,
          heading: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_HEADING,
          body: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_BODY
        })]
      }), (0, l.jsxs)("div", {
        className: s()({
          [h.hasSeparator]: _
        }),
        children: [(0, l.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: f.default.Messages.BOTS_DATA_ACCESS_BASELINE.format({
            helpCenterUrl: I
          })
        }), (null == t ? void 0 : t.privacy_policy_url) != null && (0, l.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: h.privacyPolicy,
          children: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_PRIVACY_POLICY_V2.format({
            onClick: v
          })
        })]
      })]
    })]
  })
}