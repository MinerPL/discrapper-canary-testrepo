"use strict";
s.r(t), s.d(t, {
  CustomizationQuestionsUpsell: function() {
    return u
  },
  DefaultChannelsUpsell: function() {
    return d
  },
  HomeSettingsUpsell: function() {
    return c
  },
  SafetyCheckUpsell: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var l = s("481060");
s("93879"), s("988951");
var n = s("983135"),
  i = s("689938"),
  r = s("102451");

function o() {
  return (0, a.jsxs)("div", {
    className: r.container,
    children: [(0, a.jsx)(l.Text, {
      variant: "text-xs/semibold",
      color: "header-secondary",
      className: r.stepHeader,
      children: i.default.Messages.STEP_NUMBER.format({
        number: 1
      })
    }), (0, a.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: r.header,
      children: i.default.Messages.GUILD_ONBOARDING_UPSELL_SAFETY_TITLE
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: i.default.Messages.GUILD_ONBOARDING_UPSELL_SAFETY_TITLE_TOOLTIP
    }), (0, a.jsx)(l.Button, {
      className: r.button,
      onClick: () => (0, n.dismissEducationUpsell)("Safety Check"),
      children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_OVERVIEW_CTA
    })]
  })
}

function d() {
  return (0, a.jsxs)("div", {
    className: r.container,
    children: [(0, a.jsx)(l.Text, {
      variant: "text-xs/semibold",
      color: "header-secondary",
      className: r.stepHeader,
      children: i.default.Messages.STEP_NUMBER.format({
        number: 2
      })
    }), (0, a.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: r.header,
      children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_DEFAULT_CHANNELS_TITLE
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_DEFAULT_CHANNELS_SUBTITLE
    }), (0, a.jsx)(l.Button, {
      className: r.button,
      onClick: () => (0, n.dismissEducationUpsell)("Default Channels"),
      children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_OVERVIEW_CTA
    })]
  })
}

function u() {
  return (0, a.jsxs)("div", {
    className: r.container,
    children: [(0, a.jsx)(l.Text, {
      variant: "text-xs/semibold",
      color: "header-secondary",
      className: r.stepHeader,
      children: i.default.Messages.STEP_NUMBER.format({
        number: 3
      })
    }), (0, a.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: r.header,
      children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_CUSTOMIZATION_QUESTIONS_TITLE
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_CUSTOMIZATION_QUESTIONS_SUBTITLE
    }), (0, a.jsx)(l.Button, {
      className: r.button,
      onClick: () => (0, n.dismissEducationUpsell)("Customization Questions"),
      children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_OVERVIEW_CTA
    })]
  })
}

function c() {
  return (0, a.jsxs)("div", {
    className: r.container,
    children: [(0, a.jsx)(l.Text, {
      variant: "text-xs/semibold",
      color: "header-secondary",
      className: r.stepHeader,
      children: i.default.Messages.STEP_NUMBER.format({
        number: 4
      })
    }), (0, a.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: r.header,
      children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_HOME_TITLE
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_HOME_SUBTITLE
    }), (0, a.jsx)(l.Button, {
      className: r.button,
      onClick: () => (0, n.dismissEducationUpsell)("Home Settings"),
      children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_OVERVIEW_CTA
    })]
  })
}