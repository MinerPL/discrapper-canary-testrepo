n(47120);
var i = n(846519),
  a = n(570140),
  s = n(287734),
  r = n(317770),
  l = n(199902),
  o = n(592125),
  c = n(430824),
  d = n(517100),
  u = n(19780),
  _ = n(70956),
  E = n(358085),
  h = n(981631);
let m = new i.V7(),
  I = new i.V7();
class g extends r.Z {
  _initialize() {
a.Z.subscribe('IDLE', this.handleIdleUpdate);
  }
  _terminate() {
m.stop(), I.stop(), a.Z.unsubscribe('IDLE', this.handleIdleUpdate);
  }
  handleIdleUpdate() {
let e = d.Z.getIdleSince();
if (!E.isPlatformEmbedded)
  return;
for (let e of (m.stop(), I.stop(), l.Z.getAllActiveStreams()))
  if (e.state !== h.jm8.ENDED)
    return;
if (null == e)
  return;
let t = u.Z.getChannelId();
if (null == t)
  return;
I.start(18000000, () => {
  s.default.selectVoiceChannel(null);
});
let n = c.Z.getGuild(u.Z.getGuildId());
if (null == n || null == n.afkChannelId || n.afkChannelId === t || null == n.afkTimeout)
  return;
let i = o.Z.getChannel(t);
if (null != i)
  !i.isGuildStageVoice() && m.start(e + n.afkTimeout * _.Z.Millis.SECOND - Date.now(), () => {
    null != (n = c.Z.getGuild(u.Z.getGuildId())) && null != n.afkChannelId && s.default.selectVoiceChannel(n.afkChannelId);
  });
  }
}
t.Z = new g();