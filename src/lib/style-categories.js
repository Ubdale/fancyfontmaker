export const STYLE_CATEGORIES = [
  { id: 'all', label: 'All styles' },
  { id: 'bold', label: 'Bold' },
  { id: 'cursive', label: 'Cursive' },
  { id: 'aesthetic', label: 'Aesthetic' },
  { id: 'gaming', label: 'Gaming names' },
];

export function matchesCategory(result, category) {
  if (category === 'all') return true;
  if (category === 'gaming') return result.decorated === true;
  if (result.decorated) return false;
  if (category === 'bold') return result.label.includes('Bold');
  if (category === 'cursive') return result.label.includes('Script');
  if (category === 'aesthetic') return ['Aesthetic', 'Wide', 'Small Caps', 'Tiny', 'Bubble', 'Hearts', 'Stars'].includes(result.label);
  return false;
}
