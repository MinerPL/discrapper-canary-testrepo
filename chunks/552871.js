n.d(t, {
  u: function() {
return d;
  }
}), n(47120);
var r = n(259443),
  i = n(544891),
  a = n(881052),
  o = n(131951),
  s = n(403182),
  l = n(579806),
  u = n(981631);
let c = new r.Y('uploadRtcLogFiles');
async function d(e, t) {
  let n;
  if (null == l.Z.fileManager.readLogFiles)
throw new a.n0(a.cz.GENERAL);
  let r = [];
  try {
r = (r = await l.Z.fileManager.readLogFiles(e)).map(e => (0, s.qF)(e, 'application/octet-stream'));
  } catch (e) {
throw c.error('uploadDebugFiles: read error \''.concat(e, '\'')), new a.n0(a.cz.READ);
  }
  if (0 === r.length)
throw new a.n0(a.cz.NO_FILE);
  try {
let e = {
  extraInfo: t,
  mediaEngineState: o.Z.getState()
};
n = await i.tn.post({
  url: u.ANM.DEBUG_LOGS(u.GU0.RTC),
  attachments: [
    ...r.map(e => ({
      name: e.name,
      file: e,
      filename: e.name
    })),
    {
      name: 'media_engine_state.json',
      filename: 'media_engine_state.json',
      file: new Blob([JSON.stringify(e, void 0, 2)])
    }
  ]
});
  } catch (e) {
if (429 === e.status)
  throw new a.n0(a.cz.PROGRESS);
throw c.error('Debug log upload error: status: '.concat(e.status, ', message: ').concat(e.message)), new a.n0(a.cz.UPLOAD);
  }
  let d = r.length + 1;
  if ('success_count' in n.body && n.body.success_count !== d)
throw c.error('Debug log upload: stored files '.concat(n.body.success_count, ' !== ').concat(d)), new a.n0(a.cz.GENERAL);
  if ('store_success' in n.body && !n.body.store_success || 'id_match' in n.body && !n.body.id_match || 'all_success' in n.body && !n.body.all_success)
throw c.error('Debug log upload: store_success: '.concat(n.body.store_success, ' / ') + 'id_match: '.concat(n.body.id_match, ' / ') + 'all_success: '.concat(n.body.all_success)), new a.n0(a.cz.GENERAL);
}