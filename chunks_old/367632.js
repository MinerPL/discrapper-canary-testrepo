"use strict";
a.r(t), a.d(t, {
  fetchBugReportConfig: function() {
    return c
  },
  getFeatureId: function() {
    return u
  },
  getPriorities: function() {
    return d
  },
  submitReport: function() {
    return m
  }
}), a("424973");
var n = a("759843"),
  o = a("872717"),
  l = a("147746");
a("18108"), a("773336");
var s = a("840707"),
  r = a("49111"),
  i = a("782340");
async function c() {
  let e = await o.HTTP.get({
    url: r.Endpoints.BUG_REPORTS
  });
  return e.body
}

function u(e) {
  var t, a;
  return null !== (a = null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "" + (null == e ? void 0 : e.squad)) && void 0 !== a ? a : ""
}

function d() {
  return [{
    title: i.default.Messages.BUG_REPORT_PRIORITY_CRITICAL_TITLE,
    description: i.default.Messages.BUG_REPORT_PRIORITY_CRITICAL_DESCRIPTION.format(),
    emoji: "801497159479722084",
    value: 0
  }, {
    title: i.default.Messages.BUG_REPORT_PRIORITY_HIGH_TITLE,
    description: i.default.Messages.BUG_REPORT_PRIORITY_HIGH_DESCRIPTION.format(),
    emoji: "410336837563973632",
    value: 1
  }, {
    title: i.default.Messages.BUG_REPORT_PRIORITY_LOW_TITLE,
    description: i.default.Messages.BUG_REPORT_PRIORITY_LOW_DESCRIPTION.format(),
    emoji: "841420679643529296",
    value: 2
  }, {
    title: i.default.Messages.BUG_REPORT_PRIORITY_VERY_LOW_TITLE,
    description: i.default.Messages.BUG_REPORT_PRIORITY_VERY_LOW_DESCRIPTION.format(),
    emoji: "827645852352512021",
    value: 3
  }]
}
async function m(e, t, a) {
  var o, i;
  let c = [{
    name: "name",
    value: e.name
  }, {
    name: "priority",
    value: "".concat(e.priority)
  }, {
    name: "override_platform_information",
    value: "".concat(t.overridePlatformInformation)
  }];
  "" !== e.description && c.push({
    name: "description",
    value: e.description
  }), "" !== e.url && c.push({
    name: "external_url",
    value: e.url
  });
  let u = null === (o = e.feature) || void 0 === o ? void 0 : o.asana_inbox_id;
  null != u && "" !== u && c.push({
    name: "asana_inbox_id",
    value: "".concat(u)
  });
  let d = null === (i = e.feature) || void 0 === i ? void 0 : i.name;
  null != d && "" !== d && c.push({
    name: "feature_name",
    value: d
  }), t.overridePlatformInformation && (c.push({
    name: "device",
    value: t.device
  }), c.push({
    name: "os",
    value: t.operatingSystem
  }), c.push({
    name: "os_version",
    value: t.operatingSystemVersion
  }), c.push({
    name: "client_version",
    value: t.clientVersion
  }), c.push({
    name: "client_build_number",
    value: t.clientBuildNumber
  }), c.push({
    name: "release_channel",
    value: window.GLOBAL_ENV.RELEASE_CHANNEL
  }), c.push({
    name: "locale",
    value: t.locale
  })), (0, l.uploadDebugLogFiles)(r.DebugLogCategory.WEB_APP);
  try {
    return await s.default.post({
      url: r.Endpoints.BUG_REPORTS,
      attachments: a,
      fields: c,
      trackedActionData: {
        event: n.NetworkActionNames.BUG_REPORT_SUBMIT,
        properties: {
          priority: e.priority,
          asana_inbox_id: u
        }
      }
    })
  } catch (e) {
    return e
  }
}