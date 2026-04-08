/**
 * Gradientes deterministas, variados y cohesionados con el tema dark + fondo azulado.
 *
 * Criterio de diseño:
 * - Temperatura fría o neutra — sin rojos, naranjas ni amarillos cálidos
 * - Luminosidad media-baja (0.13–0.30) para no competir con el contenido
 * - Saturación moderada (chroma 0.06–0.18) — presencia sin vibrar
 * - Familias: azul-índigo, cian-teal, verde-menta, violeta-malva, gris-pizarra, aurora mixta
 */
export function slugToGradient(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }
  const abs = Math.abs(hash);

  // [from, mid, to]
  const palettes: [string, string, string][] = [

    // ── Azul profundo → índigo ────────────────────────────────────
    ['oklch(0.28 0.15 264)', 'oklch(0.34 0.13 240)', 'oklch(0.38 0.10 210)'],
    ['oklch(0.26 0.17 255)', 'oklch(0.32 0.15 248)', 'oklch(0.37 0.11 230)'],

    // ── Cian → teal ───────────────────────────────────────────────
    ['oklch(0.24 0.09 210)', 'oklch(0.31 0.12 200)', 'oklch(0.37 0.09 195)'],
    ['oklch(0.26 0.11 195)', 'oklch(0.33 0.14 205)', 'oklch(0.39 0.08 185)'],

    // ── Azul → cian claro (tipo aurora) ──────────────────────────
    ['oklch(0.27 0.16 258)', 'oklch(0.34 0.13 225)', 'oklch(0.39 0.10 195)'],
    ['oklch(0.25 0.14 265)', 'oklch(0.32 0.11 220)', 'oklch(0.38 0.09 200)'],

    // ── Verde menta frío ──────────────────────────────────────────
    ['oklch(0.26 0.10 170)', 'oklch(0.33 0.13 165)', 'oklch(0.38 0.09 175)'],
    ['oklch(0.24 0.11 160)', 'oklch(0.31 0.14 168)', 'oklch(0.36 0.08 158)'],

    // ── Violeta frío → malva pálido ───────────────────────────────
    ['oklch(0.28 0.11 295)', 'oklch(0.34 0.13 285)', 'oklch(0.38 0.09 270)'],
    ['oklch(0.26 0.13 305)', 'oklch(0.32 0.15 295)', 'oklch(0.37 0.10 280)'],

    // ── Pizarra azulada (muy sutil, casi neutro) ──────────────────
    ['oklch(0.28 0.07 230)', 'oklch(0.34 0.08 240)', 'oklch(0.39 0.06 225)'],
    ['oklch(0.27 0.08 215)', 'oklch(0.33 0.09 230)', 'oklch(0.37 0.06 210)'],

    // ── Transiciones aurora ───────────────────────────────────────
    ['oklch(0.26 0.14 260)', 'oklch(0.33 0.11 215)', 'oklch(0.38 0.09 185)'], // azul→cian
    ['oklch(0.27 0.12 270)', 'oklch(0.33 0.13 240)', 'oklch(0.37 0.10 290)'], // índigo→violeta
    ['oklch(0.25 0.10 200)', 'oklch(0.31 0.12 175)', 'oklch(0.36 0.09 160)'], // teal→verde
    ['oklch(0.28 0.13 245)', 'oklch(0.34 0.10 270)', 'oklch(0.38 0.08 290)'], // azul→violeta suave
  ];

  const idx = abs % palettes.length;
  const angle = 125 + (abs % 95); // 125–220°
  const [c1, c2, c3] = palettes[idx];

  return `linear-gradient(${angle}deg, ${c1} 0%, ${c2} 55%, ${c3} 100%)`;
}
