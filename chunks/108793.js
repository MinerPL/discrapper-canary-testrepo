"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
}), a("47120");
var s = a("735250"),
  i = a("470079"),
  n = a("718017"),
  l = a("481060"),
  o = a("230711"),
  r = a("318661"),
  d = a("63063"),
  u = a("51144"),
  c = a("544508"),
  E = a("801461"),
  m = a("981631"),
  S = a("689938"),
  f = a("659338");

function g(e) {
  let {
    userRef: t,
    usernameSuggestionLoading: a = !1,
    oneClickFlow: g = !1,
    ..._
  } = e, {
    user: T,
    editState: I,
    onClose: O
  } = _, h = (0, r.default)(T.id), N = function(e, t, a) {
    switch (e) {
      case E.EditState.EDIT_USERNAME:
        return {
          header: S.default.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE, subtitle: S.default.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
        };
      case E.EditState.EDIT_DISPLAY_NAME:
        return {
          header: S.default.Messages.POMELO_EXISTING_FLOW_STEP_1_TITLE, subtitle: S.default.Messages.POMELO_EXISTING_FLOW_STEP_1_SUBTITLE
        };
      case E.EditState.PREVIEW:
        return {
          header: S.default.Messages.POMELO_EXISTING_FLOW_COMPLETION_TITLE.format({
            displayName: t
          }), subtitle: S.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
            onClick: () => {
              a(), o.default.open(m.UserSettingsSections.ACCOUNT)
            }
          })
        };
      case E.EditState.SUGGESTION:
        return {
          header: S.default.Messages.POMELO_ACTION_LABEL_OCF, subtitle: S.default.Messages.POMELO_EXISTING_FLOW_PROMPT_OCF.format(), link: S.default.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({
            helpdeskArticle: d.default.getArticleURL(m.HelpdeskArticles.POMELO_FAQ)
          })
        };
      default:
        return {
          header: S.default.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE, subtitle: S.default.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
        }
    }
  }(I, u.default.getName(T), O), [M, L] = (0, n.useSpring)(() => ({
    opacity: 0,
    y: 10
  }));
  return i.useEffect(() => {
    L({
      y: 0,
      opacity: 1,
      from: {
        y: 10,
        opacity: 0
      }
    })
  }, [L, I]), (0, s.jsxs)("div", {
    className: f.displayNameContainer,
    children: [(0, s.jsxs)(n.animated.div, {
      style: {
        opacity: M.opacity,
        y: M.y
      },
      children: [(0, s.jsx)(l.Heading, {
        className: f.title,
        color: "header-primary",
        variant: "heading-xl/extrabold",
        children: N.header
      }), (0, s.jsxs)("div", {
        className: f.subtitle,
        children: [(0, s.jsx)(l.Heading, {
          color: "header-secondary",
          variant: "heading-sm/medium",
          children: N.subtitle
        }), null != N.link && (0, s.jsx)(l.Text, {
          className: f.link,
          color: "header-secondary",
          variant: "text-sm/medium",
          children: N.link
        })]
      })]
    }), (0, s.jsx)(c.default, {
      ..._,
      displayProfile: h,
      ref: t,
      usernameSuggestionLoading: a,
      oneClickFlow: g
    })]
  })
}