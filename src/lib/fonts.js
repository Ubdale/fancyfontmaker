// Unicode font styles. Each style turns plain text into "fancy" text.

const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';

// Build a map from the Mathematical Alphanumeric block (and similar ranges).
function offsetMap(upperStart, lowerStart, digitStart, exceptions = {}) {
  const map = {};
  for (let i = 0; i < 26; i++) {
    if (upperStart) map[UPPER[i]] = String.fromCodePoint(upperStart + i);
    if (lowerStart) map[LOWER[i]] = String.fromCodePoint(lowerStart + i);
  }
  if (digitStart) {
    for (let i = 0; i < 10; i++) map[String(i)] = String.fromCodePoint(digitStart + i);
  }
  return Object.assign(map, exceptions);
}

// Map from two parallel strings (lowercase source -> target), used for both cases.
function listMap(target, { upperToo = true } = {}) {
  const chars = Array.from(target);
  const map = {};
  for (let i = 0; i < 26; i++) {
    map[LOWER[i]] = chars[i];
    if (upperToo) map[UPPER[i]] = chars[i];
  }
  return map;
}

function upperOnly(start) {
  const map = {};
  for (let i = 0; i < 26; i++) {
    const c = String.fromCodePoint(start + i);
    map[UPPER[i]] = c;
    map[LOWER[i]] = c;
  }
  return map;
}

const applyMap = (map) => (text) => Array.from(text).map((c) => map[c] ?? c).join('');
const combine = (mark) => (text) =>
  Array.from(text).map((c) => (c === ' ' ? c : c + mark)).join('');

const circled = offsetMap(0x24b6, 0x24d0, null, {
  0: '⓪', 1: '①', 2: '②', 3: '③', 4: '④', 5: '⑤', 6: '⑥', 7: '⑦', 8: '⑧', 9: '⑨',
});

const parenthesized = (() => {
  const map = {};
  for (let i = 0; i < 26; i++) {
    const c = String.fromCodePoint(0x249c + i);
    map[LOWER[i]] = c;
    map[UPPER[i]] = c;
  }
  return map;
})();

const UPSIDE = {
  a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ᴉ', j: 'ɾ', k: 'ʞ', l: 'l',
  m: 'ɯ', n: 'u', o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ', u: 'n', v: 'ʌ', w: 'ʍ', x: 'x',
  y: 'ʎ', z: 'z', A: '∀', B: 'ᗺ', C: 'Ɔ', D: 'ᗡ', E: 'Ǝ', F: 'Ⅎ', G: '⅁', H: 'H', I: 'I', J: 'ſ',
  K: 'ʞ', L: '˥', M: 'W', N: 'N', O: 'O', P: 'Ԁ', Q: 'Ό', R: 'ᴚ', S: 'S', T: '⊥', U: '∩', V: 'Λ',
  W: 'M', X: 'X', Y: '⅄', Z: 'Z', 1: 'Ɩ', 2: 'ᄅ', 3: 'Ɛ', 4: 'ㄣ', 5: 'ϛ', 6: '9', 7: 'ㄥ',
  8: '8', 9: '6', 0: '0', '.': '˙', ',': "'", "'": ',', '"': '„', '?': '¿', '!': '¡', '(': ')',
  ')': '(', '[': ']', ']': '[', '{': '}', '}': '{', '<': '>', '>': '<', '&': '⅋', _: '‾',
};

export function upsideDown(text) {
  return Array.from(text).map((c) => UPSIDE[c] ?? c).reverse().join('');
}

export function mirror(text) {
  return Array.from(text).reverse().join('');
}

export const STYLES = [
  { name: 'Bold', fn: applyMap(offsetMap(0x1d400, 0x1d41a, 0x1d7ce)) },
  { name: 'Italic', fn: applyMap(offsetMap(0x1d434, 0x1d44e, null, { h: 'ℎ' })) },
  { name: 'Bold Italic', fn: applyMap(offsetMap(0x1d468, 0x1d482)) },
  {
    name: 'Script',
    fn: applyMap(offsetMap(0x1d49c, 0x1d4b6, null, {
      B: 'ℬ', E: 'ℰ', F: 'ℱ', H: 'ℋ', I: 'ℐ', L: 'ℒ', M: 'ℳ', R: 'ℛ', e: 'ℯ', g: 'ℊ', o: 'ℴ',
    })),
  },
  { name: 'Bold Script', fn: applyMap(offsetMap(0x1d4d0, 0x1d4ea)) },
  {
    name: 'Gothic',
    fn: applyMap(offsetMap(0x1d504, 0x1d51e, null, { C: 'ℭ', H: 'ℌ', I: 'ℑ', R: 'ℜ', Z: 'ℨ' })),
  },
  { name: 'Bold Gothic', fn: applyMap(offsetMap(0x1d56c, 0x1d586)) },
  {
    name: 'Double Struck',
    fn: applyMap(offsetMap(0x1d538, 0x1d552, 0x1d7d8, {
      C: 'ℂ', H: 'ℍ', N: 'ℕ', P: 'ℙ', Q: 'ℚ', R: 'ℝ', Z: 'ℤ',
    })),
  },
  { name: 'Sans', fn: applyMap(offsetMap(0x1d5a0, 0x1d5ba, 0x1d7e2)) },
  { name: 'Sans Bold', fn: applyMap(offsetMap(0x1d5d4, 0x1d5ee, 0x1d7ec)) },
  { name: 'Sans Italic', fn: applyMap(offsetMap(0x1d608, 0x1d622)) },
  { name: 'Sans Bold Italic', fn: applyMap(offsetMap(0x1d63c, 0x1d656)) },
  { name: 'Monospace', fn: applyMap(offsetMap(0x1d670, 0x1d68a, 0x1d7f6)) },
  { name: 'Bubble', fn: applyMap(circled) },
  { name: 'Black Bubble', fn: applyMap(upperOnly(0x1f150)) },
  { name: 'Squares', fn: applyMap(upperOnly(0x1f130)) },
  { name: 'Black Squares', fn: applyMap(upperOnly(0x1f170)) },
  { name: 'Wide', fn: applyMap(offsetMap(0xff21, 0xff41, 0xff10)) },
  {
    name: 'Aesthetic',
    fn: (t) => Array.from(applyMap(offsetMap(0xff21, 0xff41, 0xff10))(t)).join(' '),
  },
  { name: 'Small Caps', fn: applyMap(listMap('ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ')) },
  { name: 'Tiny', fn: applyMap(listMap('ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ')) },
  { name: 'Parenthesis', fn: applyMap(parenthesized) },
  { name: 'Thai Style', fn: applyMap(listMap('ค๒ς๔єŦﻮђเןкɭ๓ภ๏קợгรՇยשฬאץչ')) },
  { name: 'Russian Style', fn: applyMap(listMap('ДБCDΣFGНІJКLМИФРQЯЅГЦVЩЖЧZ')) },
  { name: 'Greek Style', fn: applyMap(listMap('αв¢∂єƒgнιנкℓмησρqяѕтυνωχуz')) },
  { name: 'Magic', fn: applyMap(listMap('ąცƈɖɛʄɠɧıʝƙƖɱŋơ℘զཞʂɬų۷ῳҳყʑ')) },
  { name: 'Strikethrough', fn: combine('̶') },
  { name: 'Underline', fn: combine('̲') },
  { name: 'Double Underline', fn: combine('̳') },
  { name: 'Slash', fn: combine('̸') },
  { name: 'Overline', fn: combine('̅') },
  { name: 'Wavy', fn: combine('̰') },
  { name: 'Dotted', fn: combine('̤') },
  { name: 'Hearts', fn: (t) => Array.from(t).map((c) => (c === ' ' ? c : c + '♥')).join('') },
  { name: 'Stars', fn: (t) => Array.from(t).map((c) => (c === ' ' ? c : c + '✰')).join('') },
  { name: 'Upside Down', fn: upsideDown },
  { name: 'Mirror', fn: mirror },
];

// Decorations for gaming / social names. "X" is replaced by the styled name.
export const DECORATIONS = [
  '꧁X꧂', '꧁༒☬X☬༒꧂', '꧁༺X༻꧂', '★彡X彡★', '亗X亗', '乂X乂', '×͜×X', 'ᴳᵒᵈX',
  '『X』', '【X】', '「X」', '◥꧁ད X ཌ꧂◤', '✿X✿', '𓆩X𓆪', '⚡X⚡', '♛X♛', '☠X☠',
  '▄︻デX══━一', '•°•X•°•', '๖ۣۜX', 'X彡', 'ツX', 'Xツ', '𝓜𝓻.X', 'ⓍX', '☬X☬',
  '◦•●◉✿X✿◉●•◦', '⫷X⫸', '「✦X✦」', '•´¯`•. X .•´¯`•', '▀▄▀▄ X ▄▀▄▀', '♡X♡',
];

export function decorate(text, deco) {
  return deco.replace('X', text);
}
