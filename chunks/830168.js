let r, i;
n(47120), n(411104);
var a = n(570140),
    s = n(330516),
    o = n(710845),
    l = n(594174),
    u = n(436181),
    c = n(626135),
    d = n(358085),
    _ = n(998502),
    E = n(981631),
    f = n(186901);
let h = new o.Z('NativeDispatchUtils');
function p() {
    return null == i && h.warn('Tried getting Dispatch instance before instantiated'), i;
}
function m(e) {
    let t = JSON.parse(e);
    return h.log('Native Dispatch error', t), new s.Z(t);
}
function I(e, t) {
    '' !== e && m(e);
}
t.Z = {
    init(e) {
        let { userToken: t, userId: n, installPaths: a, platform: s, stateCallback: o, errorCallback: u } = e;
        if (null == i)
            (null != r
                ? Promise.resolve(r)
                : (0, d.isDesktop)()
                  ? Promise.all([_.ZP.ensureModule('discord_dispatch'), _.ZP.ensureModule('discord_modules')]).then(() => {
                        _.ZP.requireModule('discord_modules');
                        let e = _.ZP.getDispatch();
                        return null != e ? ((r = e), e) : Promise.reject(Error('dispatch not found'));
                    })
                  : Promise.reject(Error('not desktop client'))
            ).then((e) => {
                var r;
                let d = {
                        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                        build_number: '319217'
                    },
                    _ = l.default.getCurrentUser();
                null != _ && ((d.user_id = _.id), (d.user_name = _.tag), null != _.email && (d.email = _.email));
                let f = {
                    user_token: t,
                    user_id: n,
                    install_paths: a.map((e) => {
                        let { path: t } = e;
                        return t;
                    }),
                    api_endpoint: ''.concat(((r = 'https:'), 'https:')).concat(window.GLOBAL_ENV.API_ENDPOINT),
                    environment: window.GLOBAL_ENV.PROJECT_ENV,
                    sentry: d,
                    platform: s
                };
                i = new e.Dispatch(
                    JSON.stringify(f),
                    (e) => {
                        let t = JSON.parse(e);
                        o({
                            applications: t.applications,
                            paused: t.paused,
                            currentTask:
                                null != t.current_task
                                    ? {
                                          applicationId: t.current_task.application_id,
                                          branchId: t.current_task.branch_id
                                      }
                                    : null,
                            nextTask:
                                null != t.next_task
                                    ? {
                                          applicationId: t.next_task.application_id,
                                          branchId: t.next_task.branch_id
                                      }
                                    : null
                        });
                    },
                    (e) => {
                        u(m(e));
                    },
                    (e) => {
                        !(function (e) {
                            let { properties: t } = e;
                            switch ((null != t.stage && null != t.stage.type && (t.stage = t.stage.type), e.event_name)) {
                                case E.rMx.DISPATCH_PATCH_STARTED:
                                case E.rMx.DISPATCH_PATCH_PAUSED:
                                case E.rMx.DISPATCH_PATCH_FAILED:
                                case E.rMx.DISPATCH_PATCH_VERIFICATION_FAILED:
                                case E.rMx.DISPATCH_PATCH_COMPLETE:
                                case E.rMx.DISPATCH_PATCH_CANCELLED:
                                case E.rMx.DISPATCH_APPLICATION_UNINSTALLED:
                                    c.default.track(e.event_name, t);
                            }
                        })(JSON.parse(e));
                    }
                );
            });
    },
    destroy() {
        let e = p();
        null != e && void 0 !== e.destroy && (e.destroy(), (i = null));
    },
    setTargetManifest(e) {
        let { applicationId: t, applicationName: n, applicationIcon: r, branchId: i, buildId: a, manifestIds: s, installationPath: o } = e,
            l = p();
        if (null != l)
            l.command(
                JSON.stringify({
                    command: 'SetTargetManifest',
                    application_id: t,
                    application_name: n,
                    application_icon: r,
                    branch_id: i,
                    build_id: a,
                    manifest_ids: s,
                    install_path: o
                }),
                I
            );
    },
    setCurrentTask(e, t, n, r, i) {
        let a = p();
        return (
            null != a &&
            (a.command(
                JSON.stringify({
                    command: 'SetCurrentTask',
                    application_id: e,
                    branch_id: t,
                    action: n,
                    user_id: r,
                    user_token: i
                }),
                I
            ),
            !0)
        );
    },
    setCredentials(e, t) {
        let n = p();
        null != n &&
            n.command(
                JSON.stringify({
                    command: 'SetCredentials',
                    user_id: e,
                    user_token: t
                }),
                I
            );
    },
    cancel(e, t) {
        let n = p();
        if (null != n)
            n.command(
                JSON.stringify({
                    command: 'Cancel',
                    application_id: e,
                    branch_id: t
                }),
                I
            );
    },
    uninstall(e, t) {
        let n = p();
        if (null != n)
            n.command(
                JSON.stringify({
                    command: 'Uninstall',
                    application_id: e,
                    branch_id: t
                }),
                I
            );
    },
    pause() {
        let e = p();
        if (null != e) e.command(JSON.stringify({ command: 'Pause' }), I);
    },
    resume() {
        let e = p();
        if (null != e) e.command(JSON.stringify({ command: 'Resume' }), I);
    },
    queryDirectory(e, t) {
        let n = p();
        if (null != n)
            n.command(
                JSON.stringify({
                    command: 'QueryDirectory',
                    path: e
                }),
                (e, n) => {
                    if ('' !== e) t(JSON.parse(e));
                    else if (null != n) {
                        let e = JSON.parse(n);
                        t(null, {
                            hasPermission: e.has_permission,
                            availableKB: parseInt(e.available_kb),
                            totalKB: parseInt(e.total_kb)
                        });
                    }
                }
            );
    },
    runLaunchSetup: (e, t) =>
        u.Z.isRunning()
            ? Promise.reject(Error('Already running launch setup.'))
            : (a.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_START' }),
              new Promise((n, r) => {
                  let i = p();
                  if (null == i) {
                      r(Error('native dispatch instance not found'));
                      return;
                  }
                  i.command(
                      JSON.stringify({
                          command: 'RunLaunchSetup',
                          application_id: e,
                          branch_id: t
                      }),
                      (e, t, i) => {
                          if ('' !== e) {
                              a.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE' });
                              let t = m(e);
                              a.Z.dispatch({
                                  type: 'DISPATCH_APPLICATION_ERROR',
                                  error: t
                              }),
                                  null != t.code && t.code === f.ff.POST_INSTALL_CANCELLED ? r(t) : n();
                              return;
                          }
                          if ('' !== t) {
                              a.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE' }), n();
                              return;
                          }
                          if ('' !== i) {
                              let e = JSON.parse(i);
                              a.Z.dispatch({
                                  type: 'DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE',
                                  progress: e.progress,
                                  total: e.total,
                                  name: e.name
                              });
                          }
                      }
                  );
              })),
    launch: (e, t, n, r) =>
        new Promise((i, a) => {
            let s = p();
            if (null == s) {
                a(Error('native dispatch instance not found'));
                return;
            }
            s.command(
                JSON.stringify({
                    command: 'Launch',
                    application_id: e,
                    branch_id: t,
                    option_name: n,
                    environment: r
                }),
                function (e, t) {
                    '' !== e ? a(m(e)) : i([JSON.parse(t).pid]);
                }
            );
        })
};
