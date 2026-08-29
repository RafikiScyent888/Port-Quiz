# Port & Protocol Game Hub

Five browser games for drilling CompTIA ports and protocols until recall is
automatic. No install, no accounts, no server — open `index.html` and play.
Everything runs in the student's own browser and nothing leaves their machine.

## The exam picker

The hub carries one control that changes all five games: **which exam are you
studying for?** Pick it once and every game narrows to just the ports that exam
draws on. The choice is remembered the next time you visit.

| Choice | Ports | What it is |
| --- | --- | --- |
| **Overall** | 11 | The intersection — only ports that appear on A+ Core 1, Network+, Security+ and CySA+ alike. Learn these first; they pay off on every exam. |
| **A+ Core 1 (220-1201)** | 17 | Objective 2.1's port list. |
| **A+ Core 2 (220-1202)** | 8 | Core 2 has no ports objective of its own. This is the set its topics lean on — RDP, SSH, SMB and so on — marked as supporting rather than tested. |
| **Network+ (N10-009)** | 33 | Objective 1.4, the broadest list of the five. |
| **Security+ (SY0-701)** | 30 | The secure/insecure pairings and the services attacks land on. |
| **CySA+ (CS0-003)** | 29 | The ports that show up in log review and traffic analysis. |
| **Every port here** | 47 | The full reference list, for a comprehensive review pass. |

**Overall is an intersection, not a top-11 list.** It is computed from the tags
in `data.js` rather than typed out, so it cannot drift away from the per-exam
lists underneath it. A+ Core 2 is deliberately excluded from that computation —
including an exam with no ports objective would have shrunk the common set for
no good reason.

## The games

| Game | What it drills |
| --- | --- |
| **Port Match** | Pair a port number with its protocol and use. Recognition. |
| **Port Memory** | Face-down grid, find the port/protocol pairs. Recall under load. |
| **Port Test** | Multiple choice, scored out of 100. Exam conditions. |
| **Port Blitz** | Timed speed round — protocol flashes, tap the port. Fluency. |
| **Secure Swap** | Match an insecure port to its encrypted replacement (21→990, 23→22, 80→443…). |

Secure Swap needs both halves of a pair in the pool to be playable. On A+ Core 2,
where too few pairs survive, it says so and offers a one-click switch to
Security+ rather than dealing a broken round.

Match and Memory build their round-size buttons from the pool that's actually
selected, so a button never offers more pairs than the exam has ports.

## Accessibility

Text on every page meets **WCAG AAA** — 7:1 for body text, 4.5:1 for large text
— verified by sampling the painted pixel rather than by reading the declared
CSS colour. That distinction matters: gradients, translucent plates and the
sheen over the hub tiles all mean an element is rarely the colour it is written
as. All 567 text elements across six pages and three viewport widths pass.

## Files

| File | Contents |
| --- | --- |
| `data.js` | The 47 ports, their per-exam tags, and `portsFor()` / `examPool()`. Single source of truth — every game reads from it. |
| `index.html` | The hub and the exam picker. |
| `match.html`, `memory.html`, `quiz.html`, `blitz.html`, `secure.html` | The games. |

To add or retag a port, edit `data.js` only. Nothing in the games hard-codes a
port list.

## A note on the port lists

The per-exam tags were assembled from the published objectives for 220-1201,
220-1202, N10-009, SY0-701 and CS0-003. Check them against your own copy of the
objectives before relying on them in class — objectives are revised, and the
tagging reflects a reading of them rather than an official mapping.

---

For educational purposes only — not affiliated with or endorsed by CompTIA.
