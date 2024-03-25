"use strict";
a.r(t), a.d(t, {
  createAudioMP4FromVideoMP4: function() {
    return r
  }
}), a("222007"), a("424973");
var l = a("469520"),
  n = a.n(l);
async function r(e) {
  let t = n.createFile(),
    a = n.createFile(),
    l = {};
  e.fileStart = 0, t.onReady = e => {
    for (let n of (a.init({
        duration: e.duration,
        timescale: e.timescale
      }), e.audioTracks)) l[n.id] = n, t.setExtractionOptions(n.id, null, {
      nbSamples: 1 / 0
    }), a.addTrack({
      id: n.id,
      timescale: n.timescale,
      hdlr: "soun",
      type: "mp4a",
      duration: n.duration,
      layer: n.layer,
      channel_count: n.audio.channel_count,
      samplerate: n.audio.sample_rate,
      samplesize: n.audio.sample_size,
      name: n.name
    });
    t.start()
  };
  let r = new Promise(e => {
    t.onSamples = (n, r, i) => {
      for (let e of i) a.addSample(n, e.data, e);
      t.releaseUsedSamples(n, i.length), delete l[n];
      let s = a.getTrackById(n),
        u = t.getTrackById(n);
      if (null != u.edts) {
        let e = u.edts.elst;
        s.add("edts").boxes.push(e)
      }
      0 === Object.keys(l).length && e()
    }
  });
  return t.appendBuffer(e), t.flush(), await r, a.getBuffer()
}