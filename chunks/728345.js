"use strict";
n(789020), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(544891),
  r = n(570140),
  s = n(630388),
  o = n(812206),
  a = n(981631);
t.Z = {
  async createApplication(e) {
    let {
      name: t,
      guildId: n,
      type: s,
      teamId: o
    } = e, l = (await i.tn.post({
      url: a.ANM.APPLICATIONS,
      body: {
        name: t,
        type: s,
        guild_id: n,
        team_id: o
      }
    })).body;
    return null != n && null != s && r.Z.dispatch({
      type: "APPLICATION_FETCH_SUCCESS",
      application: l
    }), l
  },
  async getApplicationsForGuild(e) {
    let {
      includeTeam: t,
      ...n
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = (await i.tn.get({
      url: a.ANM.GUILD_APPLICATIONS(e),
      query: {
        ...n,
        include_team: t
      }
    })).body;
    return r.Z.dispatch({
      type: "APPLICATIONS_FETCH_SUCCESS",
      applications: s
    }), s
  },
  async transferApplication(e) {
    let {
      applicationId: t,
      teamId: n
    } = e, s = (await i.tn.post({
      url: a.ANM.APPLICATION_OWNER_TRANSFER(t),
      body: {
        team_id: n
      }
    })).body;
    return r.Z.dispatch({
      type: "APPLICATION_FETCH_SUCCESS",
      application: s
    }), s
  },
  async fetchApplications(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = e;
    if (!t && (n = e.filter(e => {
        var t, n;
        let i = o.Z.getApplication(e),
          r = (0, s.yE)(null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0, a.udG.EMBEDDED) && (null == i ? void 0 : null === (t = i.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
        return !(null != i && !r) && !o.Z.isFetchingApplication(e) && !o.Z.didFetchingApplicationFail(e) && e.length > 0
      })), n.length > 0) {
      let e;
      r.Z.dispatch({
        type: "APPLICATIONS_FETCH",
        applicationIds: n
      });
      try {
        e = await i.tn.get({
          url: a.ANM.APPLICATIONS_PUBLIC,
          query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
          oldFormErrors: !0
        })
      } catch (e) {
        throw r.Z.dispatch({
          type: "APPLICATIONS_FETCH_FAIL",
          applicationIds: n
        }), e
      }
      r.Z.dispatch({
        type: "APPLICATIONS_FETCH_SUCCESS",
        applications: e.body
      })
    }
  },
  fetchApplication(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return r.Z.dispatch({
      type: "APPLICATION_FETCH",
      applicationId: e
    }), i.tn.get({
      url: a.ANM.APPLICATION_PUBLIC(e),
      query: {
        with_guild: t
      },
      oldFormErrors: !0
    }).then(e => (r.Z.dispatch({
      type: "APPLICATION_FETCH_SUCCESS",
      application: e.body
    }), e.body)).catch(t => (r.Z.dispatch({
      type: "APPLICATION_FETCH_FAIL",
      applicationId: e
    }), Promise.reject(t)))
  }
}