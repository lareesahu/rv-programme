# Robert Vicencio · A Programme

A birthday website, built as one long theatre programme in six acts plus an encore, in the visual
language of his own 100-page introduction.

## The design comes from his deck

Everything on the page is taken from the deck he sent on 16 September 2026 rather than invented:

| His deck | The site |
|---|---|
| Black pages, white caps, no colour except photography | `--ink: #000`, `--white: #fff`, one accent only |
| Century Gothic (embedded in the deck) | Poppins, the closest free stand-in, self-hosted |
| The four-role orbit on the cover | The same orbit, redrawn in CSS and again as the top-left mark |
| Slate-blue nodes, sampled at `#3F5169` | `--slate`, used for numerals, dots and labels |
| Small letterspaced captions bottom-left on photo pages | The caption under every plate |

## Open it

Double-click `index.html` (Chrome, Edge or Safari). No server, no build step, no internet needed:
fonts are embedded and every image is local.

## What's on the page

| Section | Content |
|---|---|
| Hero | Name, the four-role orbit from his own cover, one-line premise, index of the six acts |
| The brief | Public bio, condensed from his own 100-page introduction |
| I · The Stage | Miss Saigon (3,000 performances as General Thuy), Jesus Christ Superstar, Arachid |
| II · The Screen | PHANTACITY 《幻乐之城》 for Hunan TV, the music film teaser 《心在跳》, 唱游天下, music videos |
| III · The Chair | 13 The Musical (2026), Bring It On (2025), the Sydney reality show concept, The Other School |
| IV · The Room | Bvlgari, Piaget, Lincoln, Chivas, Atlantis Sanya, the 五大连池 water show, 金枝玉叶, casting |
| V · The Maker | RRRUN!, the two books, the musicals, Live Our Dreams, My Other Brain, Vermuthology |
| VI · The Next | Two TEDx talks, AI and robotics work, casting |
| Plates | Ten frames from the archive; the last two are 4K stills from the Hangzhou robot show |
| Encore | The birthday message, signed |
| Colophon | Says where all of it came from |

## Image quality

Every frame sits at the largest resolution that exists for it. The largest are 2933 px wide, lifted
straight out of his deck; the ceiling for the older stage and brand-event pages is the deck's own
embedded raster, and public press archives for those Chinese TV and luxury events only carry
500–800 px, so nothing better exists.

The exception is the robot-show material: `band-robots.jpg`, `plate-robots-a.jpg` and
`plate-robots-b.jpg` are stills pulled at full resolution from the 3840x2160 source footage shot in
Hangzhou on 4 October 2026. Those are the sharpest images on the page; swap the caption if the date
or place needs saying differently.

## Editing it

- All copy lives in `index.html`. It is plain HTML, so anything between tags can be retyped.
- The two paragraphs of the Encore section (`<section class="finale">`, near the bottom) are the
  personal part. Rewrite them in your own words; the current text is a placeholder written to be
  safe to say out loud.
- Images are in `assets/img/`, named after what they are. Replace a file with the same name and the
  page picks it up, or point the `src=` at a new file.
- Colours, type sizes and spacing are the custom properties at the top of `css/styles.css`.

## Privacy

Nothing from private chats appears on the page. No phone, email, address, passport, birth date or
co-founder terms. Photography is his own, credited in the colophon.

## If it ever goes public

- Check each photograph for a third party before publishing (a few frames include performers and
  recognisable faces from events).
- Ask before naming clients in a public context, and get his sign-off on the personal copy.
- Add a contact route only if he wants one; the current page deliberately has none.
