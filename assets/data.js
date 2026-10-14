/* ============================================================
   SITE DATA — single source of truth.
   Add a project, experience entry, or extracurricular by
   pushing a new object into the matching array below.
   Nothing elsewhere in the site needs to change.
   ============================================================ */

/* ---------------- PROJECTS ----------------
   id       — used in the URL: project.html?id=THIS_ID
   title, tagline, description, image, skills[]
   links    — { github, demo } — set either to null to hide that button

   sections — an ORDERED array that controls the entire content
              of this project's case-study page. See the big
              comment block at the top of assets/project-render.js
              for the full list of section types and their fields.

              - Remove a section: delete its object from this array.
              - Add a section: push a new object with a valid `type`.
              - Reorder sections: reorder the objects in this array.

              Every section type silently disappears on the page
              if its content is empty — you never end up with a
              blank heading or empty box.
------------------------------------------------------------- */

const projectsData = [
  {
    id: "pulse-inspired-presence-scanner",
    title: "Pulse-Inspired Human Presence Scanner",
    tagline: "A human-presence detector inspired by Pulse's scanner in Rainbow Six Siege.",
    description: "Built a digital circuit prototype and wiring diagram for an ESP32, LD2410C mmWave radar, and TFT display. Physical assembly is underway.",
    status: "Physical build in progress",
    image: "assets/images/CardiacSensor_3D.png",
    skills: ["ESP32", "LD2410C mmWave radar", "Tinkercad", "Circuit design"],
    links: { github: null, demo: null },
    sections: [
      {
        type: "text",
        title: "Overview",
        body: "Inspired by Pulse's scanner in Rainbow Six Siege, this project explores a compact human-presence detector with a visual readout. The current Tinkercad design combines an ESP32 DevKit, an LD2410C mmWave radar module, and a 2.8-inch TFT display. The prototype and wiring diagram are digital; physical assembly is now underway."
      },
      {
        type: "textColumns",
        title: "Design Goal / Scope",
        columns: [
          { heading: "DESIGN GOAL", body: "Build a device that uses a presence sensor to drive a clear scanner-style display, then evaluate how the physical system behaves as distance and obstacles change." },
          { heading: "SCOPE", body: "The radar is intended to detect presence. Any heartbeat-style graphic or value is simulated for the interface; the device does not measure heart rate or diagnose a cardiac condition. Through-wall performance has not been tested." }
        ]
      },
      {
        type: "steps",
        title: "System Concept",
        items: [
          { title: "Detect presence", description: "The LD2410C module provides the planned human-presence input to the ESP32. The current behavior is shown in a Tinkercad simulation, not measured from assembled hardware.", image: null },
          { title: "Drive the display", description: "The ESP32 connects the sensor input to a TFT interface that presents the scanner's status. Any heartbeat-style output is a simulated visual element, separate from the radar measurement.", image: null },
          { title: "Assemble and evaluate", description: "Move from the digital circuit and wiring diagram to a physical build, then document sensor behavior under controlled conditions before making performance claims.", image: null }
        ]
      },
      {
        type: "techStack",
        title: "Prototype Components",
        groups: [
          { label: "CONTROLLER & SENSOR", items: ["ESP32 DevKit V1", "LD2410C mmWave radar"] },
          { label: "DISPLAY & DESIGN", items: ["2.8-inch TFT LCD (ILI9341)", "Tinkercad Circuits", "Wiring schematic"] }
        ]
      },
      {
        type: "gallery",
        title: "Digital Prototype",
        images: [
          { src: "assets/images/CardiacSensor_3D.png", caption: "Tinkercad circuit simulation showing the ESP32, radar module, display, and presence output." },
          { src: "assets/images/CardiacSensor_wiring_diagram.png", caption: "Wiring schematic for the controller, radar module, TFT display, and power connections." }
        ]
      },
      {
        type: "challenges",
        title: "Engineering Questions",
        items: [
          { challenge: "A Pulse-inspired display can imply that the device measures a real heartbeat, even when the prototype only uses a presence signal.", solution: "Keep the sensor output and any simulated heartbeat visualization clearly separate in the design and explain what is and is not measured." },
          { challenge: "The digital circuit can show intended connections and simulated behavior, but it cannot establish how the assembled sensor will perform in a room or through an obstacle.", solution: "Treat physical assembly and repeatable testing as the next milestone; report real sensor behavior and limitations before claiming a detection range or through-wall capability." }
        ]
      },
      {
        type: "timeline",
        title: "Progress",
        items: [
          { date: "Complete", title: "Digital prototype and wiring diagram", description: "Created the Tinkercad circuit model and a separate wiring schematic for the proposed controller, radar, display, and power setup.", image: null },
          { date: "In progress", title: "Physical assembly", description: "Building the circuit hardware. Real-world sensor behavior and obstacle testing have not yet been validated.", image: null }
        ]
      },
      {
        type: "text",
        title: "Current Results",
        body: "The Tinkercad simulation displays a presence state and the digital wiring diagram is complete. The physical device is not yet assembled, so there are no real-sensor measurements or verified range and through-wall results. The cardiac-style readout is simulated rather than a heart-rate measurement."
      },
      {
        type: "text",
        title: "Next Steps",
        list: [
          "Complete the physical circuit and confirm each connection and display behavior.",
          "Compare the radar's presence output against controlled distance and obstacle conditions.",
          "Record test setup and results; keep simulated display output distinct from sensor measurements."
        ]
      }
    ]
  },
  {
    id: "ai-physics-tutor",
    title: "AP Physics Lab Assistant",
    tagline: "Seven interactive AP Physics 1 labs, each paired with an AI lab assistant grounded in the student's own trial data.",
    description: "Interactive AP Physics 1 lab simulations paired with an AI lab assistant grounded in each student's own trial data.",
    status: "Demo Available",
    image: "assets/images/ai-physics-tutor-screenshot.png",
    skills: ["Next.js", "React", "Supabase", "Anthropic API", "Recharts"],
    links: { github: null, demo: null },

    sections: [
      {
        type: "text",
        title: "Overview",
        body: "A demo version is available now. This Next.js web app includes seven interactive AP Physics 1 lab simulations — kinematics, projectile motion, Newton's second law, energy conservation, momentum conservation, pendulum motion, and circular motion. Each lab pairs the simulation with a chat-based lab assistant grounded in the student's own trial data, so guidance connects to what they actually measured."
      },
      {
        type: "textColumns",
        title: "Problem / Solution",
        columns: [
          { heading: "PROBLEM", body: "Most AI physics help answers questions in the abstract, disconnected from what a specific student measured in their own lab trial — so the response doesn't map onto the data they're actually looking at." },
          { heading: "SOLUTION", body: "Each lab's chat assistant is given a system prompt built from that student's live trial data and regression results (slope, intercept, R²), and is explicitly instructed to ask a clarifying question before giving a full answer rather than writing the student's conclusions for them." }
        ]
      },
      {
        type: "steps",
        title: "How It Works",
        items: [
          { title: "Run the lab", description: "Each of the seven labs is its own simulation — for example, the pendulum lab lets a student vary length, record period, and build up a trial table with a live graph.", image: null },
          { title: "Ask the lab assistant", description: "A chat panel next to the simulation sends the student's question to a server-side API route, along with a system prompt containing their current trial data and regression fit for that lab.", image: null },
          { title: "Grounded, Socratic response", description: "The assistant (Claude, via the Anthropic API) defaults to asking a clarifying question before giving a full answer — especially for \"why\" questions — instead of writing the lab conclusions for the student.", image: null },
          { title: "Save and continue", description: "If signed in with Google, a student's trials and chat history for each lab auto-save to Supabase (debounced ~800ms) and reload automatically the next time they open that lab.", image: null }
        ]
      },
      {
        type: "text",
        title: "Key Features",
        list: [
          "Seven interactive lab simulations covering the AP Physics 1 investigation set",
          "Lab assistant chat grounded in each student's live trial data and regression fit, not generic Q&A",
          "Auto-saving trials and chat history per student per lab via Supabase",
          "Fully usable while signed out — only saving progress requires a Google account",
          "Two-layer rate limiting on the chat endpoint to control API cost",
          "Teacher dashboard showing trial counts per student per lab"
        ]
      },
      {
        type: "techStack",
        title: "Technical Implementation",
        groups: [
          { label: "FRONTEND", items: ["Next.js", "React", "Recharts"] },
          { label: "BACKEND / API", items: ["Next.js API routes", "Anthropic API (Claude)"] },
          { label: "DATA & AUTH", items: ["Supabase (Postgres + Row Level Security)", "Google OAuth"] }
        ]
      },
      {
        type: "challenges",
        title: "Challenges & Iteration",
        items: [
          {
            challenge: "The first version kept all seven labs mounted at once (hidden via CSS) so switching tabs wouldn't lose trial data — but that meant a hidden lab's animation kept running in the background.",
            solution: "Rebuilt each lab as its own Next.js route, code-split so a student's browser only loads the lab they're using. Navigating away now fully unmounts the component — trading off in-progress trial data (which the persistence layer below addresses) for a more standard, bug-free app structure."
          },
          {
            challenge: "A student could spam the chat endpoint and run up Anthropic API costs.",
            solution: "Added two layers of rate limiting: an always-on in-memory sliding-window limiter per IP as a first line of defense, plus a persistent per-user hourly cap backed by a Supabase table once auth is configured."
          },
          {
            challenge: "The teacher dashboard needs to read every student's trial data, but Supabase's row-level security is designed by default to block exactly that kind of cross-user read.",
            solution: "Wrote a security-definer Postgres function that checks a manually-set is_teacher flag without recursing through row-level security on the table it's reading — giving teachers a controlled, explicit exception rather than weakening security for everyone."
          }
        ]
      },
      {
        type: "timeline",
        title: "Progression / Milestones",
        items: [
          { date: "Prototype", title: "Single-file, all-labs-mounted version", description: "All seven labs stayed mounted at once (hidden via CSS) so switching tabs preserved trial data — at the cost of a hidden lab's animation continuing to run in the background.", image: null },
          { date: "v2", title: "Routed per-lab architecture", description: "Rebuilt each lab as its own route, code-split via next/dynamic. Fixed the background-animation issue; losing trial data on navigating away became the concrete reason to prioritize a persistence layer next.", image: null },
          { date: "Current", title: "Auth, persistence, and safeguards", description: "Added optional Google sign-in, Supabase-backed auto-save of trials and chat history, two-layer chat rate limiting, a per-lab error boundary, and a teacher dashboard.", image: null }
        ]
      },
      {
        type: "text",
        title: "Results",
        body: "All seven labs, the grounded chat assistant, optional Google sign-in with auto-saving, chat rate limiting, and the teacher dashboard are built and working. It hasn't been deployed for real classroom use yet — a FERPA/privacy review is still planned before that, since the app stores student emails and per-lab trial/chat data."
      },
      {
        type: "text",
        title: "Future Improvements",
        list: [
          "FERPA/privacy review before real classroom deployment",
          "Admin UI for setting a teacher's is_teacher flag (currently set manually in the Supabase table editor)",
          "Deploy to Vercel for real classroom use"
        ]
      }
    ]
  },

  {
    id: "bus-tracking-app",
    title: "Bussing",
    tagline: "Real-time Chicago CTA bus tracking with reliability scoring.",
    description: "Live CTA bus tracker with per-stop arrival boards, a reliability score, and a leave-now nudge based on live conditions.",
    status: "In Testing",
    image: "assets/images/bussing-transitpulse.png",
    skills: ["Node.js", "Express", "Leaflet.js", "CTA Bus Tracker API", "OpenStreetMap Overpass API"],
    links: { github: null, demo: null },

    sections: [
      {
        type: "text",
        title: "Overview",
        body: "Bussing is a real-time Chicago CTA bus tracking web app, built for a pitch competition with an investor-ready user experience in mind. A rider picks a route, taps a stop, and sees live arrival times alongside a reliability score and nearby businesses pulled from OpenStreetMap — all without leaving the map."
      },
      {
        type: "textColumns",
        title: "Problem / Solution",
        columns: [
          { heading: "PROBLEM", body: "Riders checking bus arrivals usually only get a raw ETA, with no sense of how reliable that estimate is or what's around the stop while they wait." },
          { heading: "SOLUTION", body: "Bussing layers a reliability score and contextual stop information — like nearby businesses and a leave-now nudge — on top of live CTA data, so riders get more than just a countdown timer." }
        ]
      },
      {
        type: "steps",
        title: "How It Works",
        items: [
          { title: "Initial Concept", description: "Started as a straightforward CTA bus tracker, aimed at a pitch competition audience — the goal was an experience that felt investor-ready, not just functional.", image: null },
          { title: "Core Flow", description: "Route selection → stop click → nearby business data (via OpenStreetMap Overpass) → live ETA → arrival notifications. Built with Node.js/Express on the backend and Leaflet.js for the live map, pulling live data from the CTA Bus Tracker API.", image: null }
        ]
      },
      {
        type: "text",
        title: "Key Features",
        list: [
          "Live/Demo mode toggle",
          "Per-stop arrival boards",
          "Reliability score",
          "Leave-now nudge",
          "SafeStop Score (illustrative lighting/crowding signals, clearly labeled as such)",
          "Nearby business lookup at each stop, via OpenStreetMap Overpass",
          "Light/dark theming"
        ]
      },
      {
        type: "techStack",
        title: "Technical Implementation",
        groups: [
          { label: "BACKEND", items: ["Node.js", "Express"] },
          { label: "DATA & MAPPING", items: ["Leaflet.js", "CTA Bus Tracker API", "OpenStreetMap Overpass API"] }
        ]
      },
      {
        type: "challenges",
        title: "Challenges & Iteration",
        items: [
          { challenge: "The SafeStop Score — combining a time-of-day lighting proxy with a stop-ID-derived crowding signal — initially risked reading as verified safety data rather than an estimate.", solution: "Relabeled it clearly as an illustrative signal rather than measured data, prioritizing an honest representation over a more impressive-sounding pitch." }
        ]
      },
      {
        type: "text",
        title: "Results",
        body: "Built primarily as a pitch-competition demo. It's not yet deployed with real riders or usage metrics — that validation is the current priority before adding new features."
      },
      {
        type: "text",
        title: "Future Improvements",
        list: [
          "Validate the app with real riders and gather actual usage metrics",
          "Move the reliability and safety signals from illustrative proxies toward verified data sources"
        ]
      }
    ]
  }
];

/* ---------------- WORK EXPERIENCE ----------------
   organization, role, dates, description
   responsibilities[], accomplishments[], skills[], link
--------------------------------------------------- */

const experienceData = [
  {
    organization: "TNI — The Neuro Initiative",
    role: "Technical Director",
    dates: "July 2026 — Present",
    description: "Serve as technical director on a three-person team at a global nonprofit.",
    skills: ["Technical leadership", "Software", "Team collaboration"],
    link: null
  },
  {
    organization: "Code Ninjas",
    role: "Instructor",
    dates: "Jan 2024 — Present",
    description: "Started as a volunteer and moved into a paid instructor role (Aug 2025), teaching coding fundamentals to younger students.",
    skills: ["Teaching", "HTML", "CSS", "Javascript", "C#"],
    link: null
  },
];

/* ---------------- EXTRACURRICULARS ----------------
   activity, role, dates, description
   accomplishments[], skills[], link
----------------------------------------------------- */

const extracurricularsData = [
  {
    activity: "LEGO Robotics Workshops",
    role: "Organizer & Instructor",
    dates: "Independent community project",
    description: "Organized and taught weekly robotics and programming lessons for interested elementary and middle school students.",
    skills: ["Robotics", "Programming", "Teaching", "Lesson planning"],
    link: null
  },
  {
    activity: "VEX Robotics",
    role: "Team Member",
    dates: "Nov 2025 — Jan 2026",
    description: "Competition robot design and build for the 2025–26 VEX season.",
    accomplishments: ["2nd place at Regionals in the 2025–26 school year"],
    skills: ["CAD", "Mechanical Design", "Programming"],
    link: null
  },
  {
    activity: "Taekwondo",
    role: "Assistant Instructor",
    dates: "June 2022 — Aug 2024",
    description: "Supported instruction for lower-belt students after long-term training.",
    skills: ["Teaching", "Discipline"],
    link: null
  }
];