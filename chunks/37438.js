var n = a(261168),
  t = {
date: (0, n.Z)({
  formats: {
    full: 'EEEE d MMMM y',
    long: 'd MMMM y',
    medium: 'd MMM y',
    short: 'dd/MM/y'
  },
  defaultWidth: 'full'
}),
time: (0, n.Z)({
  formats: {
    full: 'HH:mm:ss zzzz',
    long: 'HH:mm:ss z',
    medium: 'HH:mm:ss',
    short: 'HH:mm'
  },
  defaultWidth: 'full'
}),
dateTime: (0, n.Z)({
  formats: {
    full: '{{date}} \'à\' {{time}}',
    long: '{{date}} \'à\' {{time}}',
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}'
  },
  defaultWidth: 'full'
})
  };
i.Z = t;