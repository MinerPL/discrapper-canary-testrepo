"use strict";
a.r(t), a.d(t, {
  fetchBugReportConfig: function() {
    return u
  },
  getFeatureId: function() {
    return d
  },
  getPriorities: function() {
    return c
  },
  submitReport: function() {
    return m
  }
}), a("653041");
var n = a("990547"),
  l = a("544891"),
  s = a("729345");
a("488832"), a("358085");
var i = a("573261"),
  r = a("981631"),
  o = a("689938");
async function u() {
  return (await l.HTTP.get({
    url: r.Endpoints.BUG_REPORTS
  })).body
}

function d(e) {
  var t, a;
  return null !== (a = null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "" + (null == e ? void 0 : e.squad)) && void 0 !== a ? a : ""
}

function c() {
  return [{
    title: o.default.Messages.BUG_REPORT_PRIORITY_CRITICAL_TITLE,
    description: o.default.Messages.BUG_REPORT_PRIORITY_CRITICAL_DESCRIPTION.format(),
    emoji: "801497159479722084",
    value: 0
  }, {
    title: o.default.Messages.BUG_REPORT_PRIORITY_HIGH_TITLE,
    description: o.default.Messages.BUG_REPORT_PRIORITY_HIGH_DESCRIPTION.format(),
    emoji: "410336837563973632",
    value: 1
  }, {
    title: o.default.Messages.BUG_REPORT_PRIORITY_LOW_TITLE,
    description: o.default.Messages.BUG_REPORT_PRIORITY_LOW_DESCRIPTION.format(),
    emoji: "841420679643529296",
    value: 2
  }, {
    title: o.default.Messages.BUG_REPORT_PRIORITY_VERY_LOW_TITLE,
    description: o.default.Messages.BUG_REPORT_PRIORITY_VERY_LOW_DESCRIPTION.format(),
    emoji: "827645852352512021",
    value: 3
  }]
}
async function m(e, t, a) {
  var l, o;
  let u = [{
    name: "name",
    value: e.name
  }, {
    name: "priority",
    value: "".concat(e.priority)
  }, {
    name: "override_platform_information",
    value: "".concat(t.overridePlatformInformation)
  }];
  "" !== e.description && u.push({
    name: "description",
    value: e.description
  }), "" !== e.url && u.push({
    name: "external_url",
    value: e.url
  });
  let d = null === (l = e.feature) || void 0 === l ? void 0 : l.asana_inbox_id;
  null != d && "" !== d && u.push({
    name: "asana_inbox_id",
    value: "".concat(d)
  });
  let c = null === (o = e.feature) || void 0 === o ? void 0 : o.name;
  null != c && "" !== c && u.push({
    name: "feature_name",
    value: c
  }), t.overridePlatformInformation && (u.push({
    name: "device",
    value: t.device
  }), u.push({
    name: "os",
    value: t.operatingSystem
  }), u.push({
    name: "os_version",
    value: t.operatingSystemVersion
  }), u.push({
    name: "client_version",
    value: t.clientVersion
  }), u.push({
    name: "client_build_number",
    value: t.clientBuildNumber
  }), u.push({
    name: "release_channel",
    value: window.GLOBAL_ENV.RELEASE_CHANNEL
  }), u.push({
    name: "locale",
    value: t.locale
  })), (0, s.uploadDebugLogFiles)(r.DebugLogCategory.WEB_APP);
  try {
    return await i.default.post({
      url: r.Endpoints.BUG_REPORTS,
      attachments: a,
      fields: u,
      trackedActionData: {
        event: n.NetworkActionNames.BUG_REPORT_SUBMIT,
        properties: {
          priority: e.priority,
          asana_inbox_id: d
        }
      }
    })
  } catch (e) {
    return e
  }
}