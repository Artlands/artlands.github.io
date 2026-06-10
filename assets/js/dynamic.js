// Dynamic behaviors: typing tagline, scroll reveals, console greeting,
// and the hidden HPC terminal easter egg.
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------ *
   * 1. Typing effect on the about-page subtitle
   * ------------------------------------------------------------------ */
  function initTyping() {
    var el = document.getElementById("typed-subtitle");
    if (!el) return;

    var phrases = ["Post-doctoral Researcher @ Texas Tech University", "High-Performance Computing", "Systems Security", "AI Infrastructure"];

    if (prefersReducedMotion) {
      el.textContent = phrases[0];
      return;
    }

    var cursor = document.createElement("span");
    cursor.className = "typed-cursor";
    el.after(cursor);

    var phraseIdx = 0,
      charIdx = 0,
      deleting = false;

    function tick() {
      var phrase = phrases[phraseIdx];
      el.textContent = phrase.slice(0, charIdx);

      var delay;
      if (!deleting && charIdx < phrase.length) {
        charIdx++;
        delay = 45 + Math.random() * 40;
      } else if (!deleting) {
        deleting = true;
        delay = 2200; // hold the full phrase
      } else if (charIdx > 0) {
        charIdx--;
        delay = 22;
      } else {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        delay = 400;
      }
      setTimeout(tick, delay);
    }
    tick();
  }

  /* ------------------------------------------------------------------ *
   * 2. Scroll-reveal animations
   * ------------------------------------------------------------------ */
  function initReveals() {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

    var selectors = [
      ".post article > .clearfix > p",
      ".post article > h2",
      ".news .row",
      ".publications ol.bibliography > li",
      ".projects .card",
      ".repositories .repo",
      ".cv > div",
    ];
    var nodes = document.querySelectorAll(selectors.join(", "));
    if (!nodes.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );

    nodes.forEach(function (node) {
      node.classList.add("reveal");
      observer.observe(node);
    });
  }

  /* ------------------------------------------------------------------ *
   * 3. Console greeting for curious developers
   * ------------------------------------------------------------------ */
  function consoleGreeting() {
    var art = [
      "        _ _        _ _ ",
      "       (_|_)      | (_)",
      "        _ _  ___  | |_ ",
      "       | | |/ _ \\ | | |",
      "       | | |  __/_| | |",
      "       | |_|\\___(__)_|_|",
      "      _/ |             ",
      "     |__/   lijie.me   ",
    ].join("\n");
    try {
      console.log("%c" + art, "color:#4cc9f0; font-family:monospace;");
      console.log(
        "%cHey, fellow terminal dweller. Try the Konami code (↑↑↓↓←→←→BA) or type “hpc” anywhere on the page — there is a login node hiding here.",
        "color:#8b949e; font-size:12px;"
      );
    } catch (e) {
      /* no console, no party */
    }
  }

  /* ------------------------------------------------------------------ *
   * 4. Hidden HPC terminal easter egg
   * ------------------------------------------------------------------ */
  var term = {
    el: null,
    body: null,
    input: null,
    history: [],
    histIdx: -1,
    bootTime: Date.now(),
  };

  var MOTD = [
    "Welcome to login-01.lijie.me (REPACSS-flavored, definitely not production)",
    "",
    "  * Documentation:  type 'help'",
    "  * Last login: just now, from somewhere curious",
    "",
  ].join("\n");

  var COMMANDS = {
    help: function () {
      return [
        "Available commands:",
        "  whoami        who is this Jie Li person anyway",
        "  squeue        show the (research) job queue",
        "  sinfo         cluster partition info",
        "  cite          a BibTeX entry, free of charge",
        "  ls            look around",
        "  cat <file>    read a file (try secrets.txt)",
        "  uptime        how long has this thing been on",
        "  fortune       HPC fortune cookie",
        "  clear         clear the screen",
        "  exit          close the terminal",
      ].join("\n");
    },
    whoami: function () {
      return [
        "jie.li — Post-doctoral Researcher, Texas Tech University",
        "Technical lead, DISCL & NSF CAC IUCRC.",
        "Builds supercomputers (REPACSS, $12.25M), monitors them (MonSTer),",
        "schedules them (Disaggregation-Aware Scheduler), and keeps them secure.",
        "Once studied architecture — the building kind. Now builds architectures",
        "of the computing kind. The pivot compiled successfully.",
      ].join("\n");
    },
    squeue: function () {
      return [
        "JOBID   PARTITION  NAME                 USER     ST  TIME      NODES",
        "1001    research   secure-hpc           jie.li   R   2y4mo     128",
        "1002    research   energy-efficient-ai  jie.li   R   1y2mo     64",
        "1003    research   repacss-ops          jie.li   R   3y0mo     512",
        "1004    life       reply-to-emails      jie.li   PD  inf       1",
        "1005    research   your-next-collab     you      PD  0:00      ? (email jie.li@ttu.edu)",
      ].join("\n");
    },
    sinfo: function () {
      return [
        "PARTITION  AVAIL  TIMELIMIT  NODES  STATE  NODELIST",
        "research   up     infinite   704    alloc  rpg-[001-704]",
        "quantum    up     infinite   1      mix    schrodinger-01 (state uncertain)",
        "coffee     up     08:00:00   1      drain  espresso-01 (needs refill)",
      ].join("\n");
    },
    cite: function () {
      return [
        "@misc{li2026website,",
        "  author       = {Li, Jie},",
        "  title        = {You found the hidden terminal},",
        "  howpublished = {\\url{https://lijie.me}},",
        "  year         = {2026},",
        "  note         = {Achievement unlocked: curious visitor}",
        "}",
      ].join("\n");
    },
    ls: function () {
      return "publications/  projects/  cv.pdf  monster/  repacss/  secrets.txt";
    },
    cat: function (arg) {
      if (arg === "secrets.txt") {
        return [
          "# secrets.txt",
          "1. The cluster is never fully utilized on Fridays.",
          "2. 90% of HPC debugging is reading logs nobody else wants to read.",
          "3. This website's easter egg took longer than expected. Worth it.",
          "4. sudo will not help you here.",
        ].join("\n");
      }
      if (arg === "cv.pdf") return "cat: cv.pdf: binary file — try the CV page in the navbar instead";
      if (!arg) return "usage: cat <file>";
      return "cat: " + arg + ": No such file or directory";
    },
    uptime: function () {
      var s = Math.floor((Date.now() - term.bootTime) / 1000);
      return "up " + s + "s,  1 user,  load average: 0.42, 4.04, 12.25";
    },
    fortune: function () {
      var fortunes = [
        "A supercomputer is a device for turning compute-bound problems into I/O-bound problems.",
        "There are two hard things in HPC: cache invalidation, naming clusters, and off-by-one errors in MPI ranks.",
        "Your job will start right after the 2048-node reservation ahead of you. Probably.",
        "The fastest code is the code the scheduler never ran.",
        "Renewable energy powers REPACSS. Coffee powers its operators.",
      ];
      return fortunes[Math.floor(Math.random() * fortunes.length)];
    },
    sudo: function () {
      return "jie.li is not in the sudoers file. This incident will be reported. (To no one. It's a website.)";
    },
    exit: function () {
      closeTerminal();
      return "";
    },
    clear: function () {
      term.body.querySelector("pre").textContent = "";
      return "";
    },
  };

  function buildTerminal() {
    if (term.el) return;

    var overlay = document.createElement("div");
    overlay.id = "hpc-terminal";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-label", "Hidden terminal");
    overlay.innerHTML =
      '<div class="terminal-window">' +
      '<div class="terminal-titlebar">' +
      '<span class="dot dot-red" title="close"></span>' +
      '<span class="dot dot-yellow"></span>' +
      '<span class="dot dot-green"></span>' +
      '<span class="terminal-title">jie.li@login-01: ~ (ssh, allegedly)</span>' +
      "</div>" +
      '<div class="terminal-body"><pre></pre></div>' +
      '<div class="terminal-input-row">' +
      '<span class="term-prompt">[jie.li@login-01 ~]$</span>' +
      '<input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="terminal input">' +
      "</div>" +
      "</div>";
    document.body.appendChild(overlay);

    term.el = overlay;
    term.body = overlay.querySelector(".terminal-body");
    term.input = overlay.querySelector("input");

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeTerminal();
    });
    overlay.querySelector(".dot-red").addEventListener("click", closeTerminal);

    term.input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        var raw = term.input.value.trim();
        term.input.value = "";
        if (raw) {
          term.history.push(raw);
          term.histIdx = term.history.length;
          runCommand(raw);
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (term.histIdx > 0) term.input.value = term.history[--term.histIdx] || "";
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (term.histIdx < term.history.length) term.input.value = term.history[++term.histIdx] || "";
      } else if (e.key === "Escape") {
        closeTerminal();
      }
    });
  }

  function print(text) {
    var pre = term.body.querySelector("pre");
    pre.textContent += (pre.textContent ? "\n" : "") + text;
    term.body.scrollTop = term.body.scrollHeight;
  }

  function runCommand(raw) {
    print("[jie.li@login-01 ~]$ " + raw);
    var parts = raw.split(/\s+/);
    var cmd = parts[0].toLowerCase();
    var handler = COMMANDS[cmd];
    var out = handler ? handler(parts.slice(1).join(" ")) : "bash: " + cmd + ": command not found (try 'help')";
    if (out) print(out);
  }

  function openTerminal() {
    buildTerminal();
    if (term.el.classList.contains("open")) return;
    term.el.classList.add("open");
    var pre = term.body.querySelector("pre");
    if (!pre.textContent) print(MOTD);
    setTimeout(function () {
      term.input.focus();
    }, 50);
  }

  function closeTerminal() {
    if (term.el) term.el.classList.remove("open");
  }

  /* trigger 1: Konami code */
  var KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  var konamiPos = 0;

  /* trigger 2: typing "hpc" anywhere (outside inputs) */
  var keywordBuffer = "";

  document.addEventListener("keydown", function (e) {
    var tag = (e.target.tagName || "").toLowerCase();
    var typingInField = tag === "input" || tag === "textarea" || e.target.isContentEditable;

    // konami
    var expected = KONAMI[konamiPos];
    var key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (key === expected) {
      konamiPos++;
      if (konamiPos === KONAMI.length) {
        konamiPos = 0;
        if (!typingInField) openTerminal();
      }
    } else {
      konamiPos = key === KONAMI[0] ? 1 : 0;
    }

    // keyword
    if (!typingInField && e.key.length === 1) {
      keywordBuffer = (keywordBuffer + e.key.toLowerCase()).slice(-3);
      if (keywordBuffer === "hpc") {
        keywordBuffer = "";
        openTerminal();
      }
    }
  });

  /* ------------------------------------------------------------------ */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  function init() {
    initTyping();
    initReveals();
    consoleGreeting();
  }
})();
