export const PANEL_VERSION = '2026.10.17.1';

export function coreRelease(config) {
  const coreVersion = typeof config.coreVersion === 'string' ? config.coreVersion : '';
  return {
    panelVersion: PANEL_VERSION,
    coreVersion,
    needsUpdate: coreVersion !== PANEL_VERSION,
    changes: [
      'IPv6 优选保留 # 后面的自定义名称，重名自动编号。',
      '官方直连回退改用 pp.xy.kg；更新配套内核后生效，手填 p 不受影响。',
    ],
    zipUrl: 'https://raw.githubusercontent.com/byJoey/cfnew/core-only/pages.zip',
    workerUrl: 'https://raw.githubusercontent.com/byJoey/cfnew/core-only/_worker.js',
  };
}
