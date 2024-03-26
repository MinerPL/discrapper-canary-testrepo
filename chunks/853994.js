"use strict";
n.r(t), n.d(t, {
  EMAILS_SUBSECTION: function() {
    return i
  },
  EmailCategories: function() {
    return s
  },
  MarketingEmailCategories: function() {
    return r
  },
  EmailCategoriesList: function() {
    return o
  }
});
var a, s, l = n("782340");
let i = "emails";
(a = s || (s = {})).COMMUNICATION = "communication", a.SOCIAL = "social", a.TIPS = "tips", a.RECOMMENDATIONS_AND_EVENTS = "recommendations_and_events", a.UPDATES_AND_ANNOUNCEMENTS = "updates_and_announcements", a.FAMILY_CENTER_DIGEST = "family_center_digest";
let r = ["tips", "recommendations_and_events", "updates_and_announcements"],
  o = [{
    category: "communication",
    label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION,
    subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION_SUBLABEL
  }, {
    category: "social",
    label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL,
    subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL_SUBLABEL
  }, {
    category: "updates_and_announcements",
    label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS,
    subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS_SUBLABEL
  }, {
    category: "tips",
    label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS,
    subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS_SUBLABEL
  }, {
    category: "recommendations_and_events",
    label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS,
    subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS_SUBLABEL
  }]