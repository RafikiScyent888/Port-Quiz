/* ===================================================================
   Shared port/protocol reference data used by every game on this hub.

   WHAT CHANGED, AND WHY IT MATTERS

   This was one flat list of 27 ports labelled "A+ / Network+ / Security+
   / CySA+", as though the four exams tested the same thing. They do not.
   A+ Core 1 tests about fifteen ports. Network+ tests those plus voice,
   database and secure-mail variants. Security+ cares about the encrypted
   replacement for everything and about authentication ports A+ never
   mentions. CySA+ cares about the ports that show up in an alert — the
   database ports, the remote-management ports, and the ones that mean
   somebody is already inside.

   So every entry now carries the exams that actually test it, and the
   student picks their exam once. A student sitting Core 1 in three weeks
   should not be drilling RADIUS accounting.

   THE EXAM KEYS
     core1  A+ 220-1201, objective 2.1 — the ports objective
     core2  A+ 220-1202 — has NO ports objective. These are the ports its
            own topics lean on (remote access, file sharing, the browser),
            marked as supporting rather than tested. Included because
            students sitting Core 2 look for their exam by name.
     net    Network+ N10-009, objective 1.4
     sec    Security+ SY0-701 — the secure-protocol and authentication set
     cysa   CySA+ CS0-003 — what turns up in logs and alerts

   `overall` is not a tag. It is COMPUTED as the intersection of the four
   exams that genuinely test ports — the ports on every one of those
   lists. That is the "if you learn nothing else" set, and computing it
   rather than typing it means it cannot drift out of step with the tags.
   =================================================================== */

const PORT_DATA = [
  /* ---- the ports nearly everything tests ---- */
  { port: "20/21",      protocol: "FTP",                transport: "TCP",     use: "File transfer (data / control)",
    exams: ["core1", "net", "sec", "cysa"] },
  { port: "22",         protocol: "SSH / SFTP / SCP",   transport: "TCP",     use: "Secure remote access, secure file transfer",
    exams: ["core1", "core2", "net", "sec", "cysa"] },
  { port: "23",         protocol: "Telnet",             transport: "TCP",     use: "Unencrypted remote access",
    exams: ["core1", "net", "sec", "cysa"] },
  { port: "25",         protocol: "SMTP",               transport: "TCP",     use: "Email sending",
    exams: ["core1", "net", "sec", "cysa"] },
  { port: "53",         protocol: "DNS",                transport: "TCP/UDP", use: "Name resolution",
    exams: ["core1", "core2", "net", "sec", "cysa"] },
  { port: "67/68",      protocol: "DHCP",               transport: "UDP",     use: "IP address assignment",
    exams: ["core1", "core2", "net"] },
  { port: "69",         protocol: "TFTP",               transport: "UDP",     use: "Trivial file transfer",
    exams: ["core1", "net"] },
  { port: "80",         protocol: "HTTP",               transport: "TCP",     use: "Unencrypted web traffic",
    exams: ["core1", "core2", "net", "sec", "cysa"] },
  { port: "110",        protocol: "POP3",               transport: "TCP",     use: "Email retrieval",
    exams: ["core1", "net", "sec"] },
  { port: "123",        protocol: "NTP",                transport: "UDP",     use: "Time synchronization",
    exams: ["net", "sec", "cysa"] },
  { port: "135",        protocol: "RPC",                transport: "TCP",     use: "Remote procedure calls (Windows)",
    exams: ["core1", "cysa"] },
  { port: "137-139",    protocol: "NetBIOS / NetBT",    transport: "TCP/UDP", use: "Legacy Windows file/print sharing",
    exams: ["core1", "cysa"] },
  { port: "143",        protocol: "IMAP",               transport: "TCP",     use: "Email retrieval (syncs across devices)",
    exams: ["core1", "net", "sec"] },
  { port: "161/162",    protocol: "SNMP",               transport: "UDP",     use: "Network device monitoring",
    exams: ["core1", "net", "sec", "cysa"] },
  { port: "389",        protocol: "LDAP",               transport: "TCP/UDP", use: "Directory services",
    exams: ["core1", "net", "sec", "cysa"] },
  { port: "443",        protocol: "HTTPS",              transport: "TCP",     use: "Encrypted web traffic",
    exams: ["core1", "core2", "net", "sec", "cysa"] },
  { port: "445",        protocol: "SMB / CIFS",         transport: "TCP",     use: "Windows file sharing",
    exams: ["core1", "core2", "net", "sec", "cysa"] },
  { port: "3389",       protocol: "RDP",                transport: "TCP/UDP", use: "Remote Desktop",
    exams: ["core1", "core2", "net", "sec", "cysa"] },

  /* ---- the secure replacements: Network+ and Security+ territory ---- */
  { port: "465",        protocol: "SMTPS",              transport: "TCP",     use: "Encrypted SMTP (implicit TLS)",
    exams: ["net", "sec"] },
  { port: "587",        protocol: "SMTP (submission)",  transport: "TCP",     use: "Authenticated mail submission (STARTTLS)",
    exams: ["net", "sec"] },
  { port: "636",        protocol: "LDAPS",              transport: "TCP",     use: "Encrypted LDAP",
    exams: ["net", "sec", "cysa"] },
  { port: "993",        protocol: "IMAPS",              transport: "TCP",     use: "Encrypted IMAP",
    exams: ["net", "sec"] },
  { port: "995",        protocol: "POP3S",              transport: "TCP",     use: "Encrypted POP3",
    exams: ["net", "sec"] },
  { port: "989/990",    protocol: "FTPS",               transport: "TCP",     use: "FTP over TLS (data / control)",
    exams: ["sec"] },
  { port: "514",        protocol: "Syslog",             transport: "UDP",     use: "Log forwarding (SIEM / log analysis)",
    exams: ["net", "sec", "cysa"] },
  { port: "6514",       protocol: "Syslog over TLS",    transport: "TCP",     use: "Encrypted log forwarding",
    exams: ["sec", "cysa"] },

  /* ---- authentication and tunnelling: Security+ ---- */
  { port: "49",         protocol: "TACACS+",            transport: "TCP",     use: "Device administration AAA (encrypts the whole payload)",
    exams: ["sec"] },
  { port: "88",         protocol: "Kerberos",           transport: "TCP/UDP", use: "Ticket-based authentication (Active Directory)",
    exams: ["sec", "cysa"] },
  { port: "500",        protocol: "IKE / ISAKMP",       transport: "UDP",     use: "IPsec VPN key exchange",
    exams: ["net", "sec"] },
  { port: "1701",       protocol: "L2TP",               transport: "UDP",     use: "VPN tunnelling (paired with IPsec)",
    exams: ["net", "sec"] },
  { port: "1723",       protocol: "PPTP",               transport: "TCP",     use: "Legacy VPN tunnelling — deprecated, insecure",
    exams: ["net", "sec"] },
  { port: "1812/1813",  protocol: "RADIUS",             transport: "UDP",     use: "Network access AAA (authentication / accounting)",
    exams: ["net", "sec"] },
  { port: "3268/3269",  protocol: "Global Catalog",     transport: "TCP",     use: "Active Directory forest-wide lookups (plain / LDAPS)",
    exams: ["sec"] },

  /* ---- voice and media: Network+ ---- */
  { port: "5060/5061",  protocol: "SIP",                transport: "TCP/UDP", use: "VoIP call signalling (plain / TLS)",
    exams: ["net", "sec"] },
  { port: "5004/5005",  protocol: "RTP / RTCP",         transport: "UDP",     use: "The voice and video itself, once SIP has set up the call",
    exams: ["net"] },
  { port: "1720",       protocol: "H.323",              transport: "TCP",     use: "Legacy VoIP call setup",
    exams: ["net"] },

  /* ---- databases and management: Network+ and CySA+ ---- */
  { port: "1433",       protocol: "MS SQL Server",      transport: "TCP",     use: "Microsoft database traffic",
    exams: ["net", "cysa"] },
  { port: "1521",       protocol: "Oracle DB",          transport: "TCP",     use: "Oracle database listener",
    exams: ["net", "cysa"] },
  { port: "3306",       protocol: "MySQL / MariaDB",    transport: "TCP",     use: "Database traffic",
    exams: ["net", "cysa"] },
  { port: "5432",       protocol: "PostgreSQL",         transport: "TCP",     use: "Database traffic",
    exams: ["cysa"] },
  { port: "5985/5986",  protocol: "WinRM",              transport: "TCP",     use: "Windows remote management (plain / HTTPS) — common lateral-movement path",
    exams: ["cysa"] },
  { port: "5900",       protocol: "VNC",                transport: "TCP",     use: "Remote desktop sharing, cross-platform",
    exams: ["core2", "net", "cysa"] },

  /* ---- what turns up in an alert: CySA+ ---- */
  { port: "8080",       protocol: "HTTP alternate",     transport: "TCP",     use: "Proxies, web admin consoles, and web traffic trying not to look like web traffic",
    exams: ["cysa"] },
  { port: "8443",       protocol: "HTTPS alternate",    transport: "TCP",     use: "Admin consoles and appliances over TLS",
    exams: ["cysa"] },
  { port: "1080",       protocol: "SOCKS proxy",        transport: "TCP",     use: "Proxying and tunnelling — often how traffic leaves without being inspected",
    exams: ["cysa"] },
  { port: "4444",       protocol: "Metasploit default", transport: "TCP",     use: "Default reverse-shell listener — seeing it is not a configuration, it is a finding",
    exams: ["cysa"] },
  { port: "6667",       protocol: "IRC",                transport: "TCP",     use: "Chat, and a long-standing command-and-control channel for botnets",
    exams: ["cysa"] }
];

/* ===================================================================
   THE EXAMS, AND HOW THE PICKER DESCRIBES THEM.
   =================================================================== */
const EXAMS = [
  { key: "overall", label: "Overall — the ports on every exam",
    blurb: "The ports that appear on A+ Core 1, Network+, Security+ AND CySA+. If you learn nothing else, learn these." },
  { key: "core1",   label: "A+ Core 1 (220-1201)",
    blurb: "Objective 2.1 — the ports objective. This is the whole list Core 1 asks you for." },
  { key: "core2",   label: "A+ Core 2 (220-1202)",
    blurb: "Core 2 has no ports objective of its own. These are the ports its topics lean on — remote access, file sharing, the browser — so they support the exam rather than being tested as a list." },
  { key: "net",     label: "Network+ (N10-009)",
    blurb: "Objective 1.4 — everything Core 1 asks for, plus voice, databases, and the encrypted mail and directory variants." },
  { key: "sec",     label: "Security+ (SY0-701)",
    blurb: "The secure replacement for everything, plus the authentication and VPN ports: RADIUS, TACACS+, Kerberos, IKE." },
  { key: "cysa",    label: "CySA+ (CS0-003)",
    blurb: "What turns up in a log or an alert — databases, remote management, proxies, and the ports that mean somebody is already inside." },
  { key: "all",     label: "Everything — all exams combined",
    blurb: "Every port on this site, whichever exam tests it. Use it for a final sweep, not for a first pass." }
];

/* The exams that genuinely test ports as an objective. Core 2 is
   deliberately not among them: its ports are supporting material, and
   folding it into the intersection would shrink the common set on the
   strength of an exam that never asks for a port list. */
const PORT_TESTED_EXAMS = ["core1", "net", "sec", "cysa"];

/* The ports for one selection. `overall` is the intersection of the four
   exams that test ports; `all` is everything. Computed, never typed, so
   the tags above are the single source of truth. */
function portsFor(examKey) {
  if (!examKey || examKey === "all") return PORT_DATA.slice();
  if (examKey === "overall") {
    return PORT_DATA.filter(function (p) {
      return PORT_TESTED_EXAMS.every(function (e) { return p.exams.indexOf(e) !== -1; });
    });
  }
  return PORT_DATA.filter(function (p) { return p.exams.indexOf(examKey) !== -1; });
}

function examByKey(key) {
  for (var i = 0; i < EXAMS.length; i++) if (EXAMS[i].key === key) return EXAMS[i];
  return EXAMS[0];
}

/* ===================================================================
   WHICH EXAM THE STUDENT PICKED, remembered between visits.

   Chosen once on the hub and read by all five games, so a student cannot
   end up with Port Match set to Security+ and Port Blitz set to Core 1
   without noticing. Wrapped in try/catch because a browser with site
   data blocked throws on access rather than returning null, and a
   student in a locked-down lab should still get a working game.
   =================================================================== */
var EXAM_STORAGE_KEY = "portquiz_exam_v1";

function getExam() {
  try {
    var v = localStorage.getItem(EXAM_STORAGE_KEY);
    if (v && examByKey(v).key === v) return v;
  } catch (e) { /* site data blocked — fall through to the default */ }
  return "overall";
}

function setExam(key) {
  try { localStorage.setItem(EXAM_STORAGE_KEY, key); } catch (e) { /* nothing to do */ }
}

/* The pool every game should draw from, already filtered. One call, so a
   game cannot forget to filter and quietly serve the wrong exam. */
function examPool() { return portsFor(getExam()); }
