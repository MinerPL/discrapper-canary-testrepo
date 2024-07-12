var i = a(261168),
  n = {
date: (0, i.Z)({
  formats: {
    full: 'y. MMMM d., EEEE',
    long: 'y. MMMM d.',
    medium: 'y. MMM d.',
    short: 'y. MM. dd.'
  },
  defaultWidth: 'full'
}),
time: (0, i.Z)({
  formats: {
    full: 'H:mm:ss zzzz',
    long: 'H:mm:ss z',
    medium: 'H:mm:ss',
    short: 'H:mm'
  },
  defaultWidth: 'full'
}),
dateTime: (0, i.Z)({
  formats: {
    full: '{{date}} {{time}}',
    long: '{{date}} {{time}}',
    medium: '{{date}} {{time}}',
    short: '{{date}} {{time}}'
  },
  defaultWidth: 'full'
})
  };
t.Z = n;