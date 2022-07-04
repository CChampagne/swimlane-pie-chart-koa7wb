const regions: string[] = [
  'WARL',
  'WMUR',
  'WCHR',
  'WOTT',
  'WEMA',
  'WVER',
  'WLIE',
  'WMOR',
  'WNAM',
  'WTAR',
];

export const single = [];
regions.forEach((region) => {
  single.push({
    value: Math.random() * 100,
    name: 'OK ' + region,
  });
  single.push({
    value: Math.random() * 100,
    name: 'NOK ' + region,
  });
  single.push({
    value: Math.random() * 100,
    name: 'NULL ' + region,
  });
});
