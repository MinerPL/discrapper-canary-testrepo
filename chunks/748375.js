    "use strict";
    r.r(t), r("424973"), r("222007"), r("854508");
    let n = (e, t, r, n) => {
      var o;
      let i;
      let {
        fineTuning: a,
        fineTuningResolution: u,
        duration: l
      } = r, f = Math.floor(t / n.waveformBlockWidth);
      if (a >= 0) {
        let t = Math.floor(e.length * (a - u * a / l) / l),
          r = Math.floor(e.length * (a + u * (l - a) / l) / l);
        i = e.slice(t, r)
      } else i = e;
      let s = Math.floor(i.length / f),
        c = [];
      for (let e = 0; e < f; e++) {
        let t = s * e,
          r = 0;
        for (let e = 0; e < s; e++) r += Math.abs(i[t + e]);
        c.push(r / s)
      }
      let h = Math.pow(Math.max(...c), -1),
        p = c.map(e => e * h),
        d = [...c].sort()[Math.floor(.95 * c.length)],
        v = Math.min((null !== (o = n.loudnessThreshold) && void 0 !== o ? o : d) / d, 1);
      return {
        normalizedData: p,
        normalizedVolumeMultipler: v
      }
    };
    self.addEventListener("message", e => {
      let {
        data: {
          rawBufferData: t,
          width: r,
          options: o,
          config: i,
          id: a
        }
      } = e, {
        normalizedData: u,
        normalizedVolumeMultipler: l
      } = n(t, r, o, i);
      self.postMessage({
        waveform: u,
        id: a,
        normalizedVolumeMultipler: l
      })
    })