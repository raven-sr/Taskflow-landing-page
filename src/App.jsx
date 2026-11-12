// import React, { useState } from "react";
// import {
//   ArrowRight, Check, CheckCircle2, ChevronDown, CircleHelp, Clock3,
//   Command, LayoutDashboard, ListTodo, Menu, MessageSquare, MousePointer2,
//   Play, ShieldCheck, Sparkles, Target, TrendingUp, Users, X, Zap
// } from "lucide-react";

// const features = [
//   { icon: LayoutDashboard, title: "One clear workspace", text: "Bring projects, tasks, files, and conversations together so your team always knows where work stands.", tone: "purple" },
//   { icon: Target, title: "Priorities that stay visible", text: "Set owners, due dates, and priorities. Keep important work moving without endless status meetings.", tone: "blue" },
//   { icon: TrendingUp, title: "Progress you can see", text: "Turn everyday activity into a simple picture of team momentum, workload, and what needs attention.", tone: "orange" },
//   { icon: MessageSquare, title: "Context in every task", text: "Keep decisions and updates next to the work, so useful information never gets buried in a chat thread.", tone: "green" },
//   { icon: Zap, title: "Less repetitive work", text: "Use lightweight workflows to reduce hand-offs and make recurring team processes easier to manage.", tone: "pink" },
//   { icon: ShieldCheck, title: "Built for focused teams", text: "Give everyone a clear view of their responsibilities with sensible project-level access controls.", tone: "yellow" }
// ];

// const plans = [
//   { name: "Starter", price: "$0", period: "forever", description: "For individuals and small teams getting organized.", features: ["Up to 3 active projects", "Unlimited tasks", "Basic project views", "Community support"], cta: "Start for free", popular: false },
//   { name: "Pro", price: "$12", period: "per user / month", description: "For growing teams that need more visibility and control.", features: ["Unlimited projects", "Timeline and workload views", "Advanced task workflows", "Priority email support"], cta: "Choose Pro", popular: true },
//   { name: "Business", price: "$24", period: "per user / month", description: "For teams coordinating work across departments.", features: ["Everything in Pro", "Team-level reporting", "Custom roles and permissions", "Dedicated onboarding"], cta: "Talk to sales", popular: false }
// ];

// function DashboardPreview() {
//   return (
//     <div className="dashboard-wrap">
//       <div className="glow glow-one" /><div className="glow glow-two" />
//       <div className="dashboard">
//         <aside className="dash-sidebar">
//           <div className="dash-brand"><span className="brand-mark small"><Command size={15}/></span><b>taskflow</b></div>
//           <div className="dash-label">WORKSPACE</div>
//           <div className="dash-nav active"><LayoutDashboard size={15}/> Overview</div>
//           <div className="dash-nav"><ListTodo size={15}/> My tasks <span className="nav-count">4</span></div>
//           <div className="dash-nav"><Users size={15}/> Team</div>
//           <div className="dash-label mt-4">YOUR PROJECTS</div>
//           <div className="project-link"><i className="dot violet"/> Website redesign</div>
//           <div className="project-link"><i className="dot blue"/> Mobile app</div>
//           <div className="project-link"><i className="dot orange"/> Brand refresh</div>
//           <div className="dash-profile"><div className="avatar">JD</div><div><b>Jamie Davis</b><small>Workspace admin</small></div></div>
//         </aside>
//         <main className="dash-main">
//           <div className="dash-top"><span>Monday, October 21, 2026</span><div className="dash-top-right"><span className="avatar mini">JD</span><span className="avatar mini second">AK</span><span className="avatar mini third">+3</span></div></div>
//           <div className="dash-heading"><div><small>WORKSPACE OVERVIEW</small><h3>Good morning, Jamie <span>✦</span></h3><p>Here's what's happening with your projects today.</p></div><button className="dash-add">＋ New task</button></div>
//           <div className="stats-grid">
//             <div className="stat-card"><small>Tasks completed</small><strong>28 <em>+12%</em></strong><div className="mini-bars"><i/><i/><i/><i/><i/><i/><i/></div></div>
//             <div className="stat-card"><small>In progress</small><strong>14</strong><div className="stat-note"><span className="green-text">●</span> 6 due this week</div></div>
//             <div className="stat-card"><small>Team productivity</small><strong>86%</strong><div className="progress-line"><i/></div></div>
//           </div>
//           <div className="dash-lower">
//             <div className="dash-panel tasks-panel"><div className="panel-title"><b>My tasks</b><span>View all →</span></div>
//               {[["Finalize homepage wireframes","Website redesign","Today","purple"],["Review API documentation","Mobile app","Tomorrow","blue"],["Share campaign concepts","Brand refresh","Oct 25","orange"]].map((t,i)=><div className="task-row" key={t[0]}><span className="task-check">{i===0?<Check size={12}/>:null}</span><div className="task-info"><b>{t[0]}</b><small><i className={`dot ${t[3]}`}/>{t[1]}</small></div><span className="task-date">{t[2]}</span></div>)}
//             </div>
//             <div className="dash-panel activity-panel"><div className="panel-title"><b>Project progress</b><span>•••</span></div><div className="progress-project"><div><b>Website redesign</b><strong>72%</strong></div><div className="progress-line"><i/></div></div><div className="progress-project"><div><b>Mobile app</b><strong>48%</strong></div><div className="progress-line blue-line"><i/></div></div><div className="progress-project"><div><b>Brand refresh</b><strong>91%</strong></div><div className="progress-line orange-line"><i/></div></div></div>
//           </div>
//         </main>
//       </div>
//       <div className="floating-note"><span className="note-icon"><CheckCircle2 size={17}/></span><div><b>You're on track!</b><small>Weekly goal completed</small></div></div>
//     </div>
//   );
// }

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [form, setForm] = useState({ name: "", email: "", team: "", message: "" });
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [billing, setBilling] = useState("monthly");

//   const goTo = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const next = {};
//     if (!form.name.trim()) next.name = "Please enter your name.";
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
//     if (!form.message.trim()) next.message = "Tell us briefly what you need.";
//     setErrors(next);
//     if (Object.keys(next).length === 0) setSubmitted(true);
//   };

//   const startPlan = (plan) => {
//     setForm((prev) => ({ ...prev, message: `I'm interested in the ${plan} plan.` }));
//     goTo("contact");
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg site-nav">
//         <div className="container nav-inner">
//           <a className="navbar-brand brand" href="#home" onClick={(e)=>{e.preventDefault();goTo("home");}}><span className="brand-mark"><Command size={19}/></span>taskflow<span className="brand-period">.</span></a>
//           <button className="mobile-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<X/>:<Menu/>}</button>
//           <div className={`nav-links ${menuOpen?"open":""}`}>
//             <a href="#features" onClick={(e)=>{e.preventDefault();goTo("features");}}>Features</a>
//             <a href="#how-it-works" onClick={(e)=>{e.preventDefault();goTo("how-it-works");}}>How it works</a>
//             <a href="#pricing" onClick={(e)=>{e.preventDefault();goTo("pricing");}}>Pricing</a>
//             <a href="#contact" onClick={(e)=>{e.preventDefault();goTo("contact");}}>Contact</a>
//             <button className="nav-cta" onClick={()=>goTo("contact")}>Get started <ArrowRight size={15}/></button>
//           </div>
//         </div>
//       </nav>

//       <main>
//         <section className="hero-section" id="home">
//           <div className="hero-orb orb-a"/><div className="hero-orb orb-b"/>
//           <div className="container hero-container">
//             <div className="hero-copy">
//               <div className="eyebrow"><span className="eyebrow-pulse"/> THE CALMER WAY TO GET WORK DONE</div>
//               <h1>Great work happens<br/>when everything<br/><span>flows together.</span></h1>
//               <p className="hero-description">Meet the workspace that brings your projects, people, and priorities into one clear view. Less chasing updates. More meaningful progress.</p>
//               <div className="hero-actions"><button className="btn-primary-custom" onClick={()=>goTo("contact")}>Start for free <ArrowRight size={17}/></button><button className="btn-play" onClick={()=>goTo("how-it-works")}><span><Play size={13} fill="currentColor"/></span> See how it works</button></div>
//               <div className="hero-proof"><div className="proof-avatars"><span>JD</span><span>AK</span><span>MR</span><span>+</span></div><div><div className="stars">★★★★★</div><small>Loved by teams that get things done</small></div></div>
//             </div>
//             <div className="hero-visual"><DashboardPreview/></div>
//           </div>
//           <div className="hero-bottom container"><span>BUILT FOR TEAMS THAT THINK BIG</span><div className="trusted-logos"><b>vertex</b><b>◈ northstar</b><b>◎ layers</b><b>horizon<span>.</span></b><b>◉ orbit</b></div></div>
//         </section>

//         <section className="section trust-strip"><div className="container trust-inner"><div><strong>2.4k+</strong><span>teams moving forward</span></div><div><strong>98%</strong><span>customer satisfaction</span></div><div><strong>35%</strong><span>less time in status meetings</span></div><div className="trust-quote">“Finally, a workspace that feels like it works <i>with</i> us.”</div></div></section>

//         <section className="section features-section" id="features">
//           <div className="container">
//             <div className="section-heading text-center"><div className="eyebrow dark-eyebrow">EVERYTHING IN SYNC</div><h2>All your work. One <span>clear view.</span></h2><p>Give good ideas the space to become great outcomes with tools that keep your team aligned.</p></div>
//             <div className="row g-4 feature-grid">{features.map(({icon:Icon,title,text,tone})=><div className="col-md-6 col-lg-4" key={title}><article className="feature-card"><div className={`feature-icon ${tone}`}><Icon size={22}/></div><h3>{title}</h3><p>{text}</p><a href="#how-it-works" onClick={(e)=>{e.preventDefault();goTo("how-it-works");}}>Explore feature <ArrowRight size={14}/></a></article></div>)}</div>
//           </div>
//         </section>

//         <section className="section how-section" id="how-it-works"><div className="container"><div className="row align-items-center g-5"><div className="col-lg-5"><div className="eyebrow dark-eyebrow">SIMPLE BY DESIGN</div><h2>From scattered<br/>to <span>in sync.</span></h2><p className="how-intro">TaskFlow gives your team a shared rhythm. Set up your workspace once, then make progress visible at every step.</p><div className="steps">
//           <div className="step"><span>01</span><div><h4>Bring your team together</h4><p>Create a workspace and invite the people you work with.</p></div></div>
//           <div className="step"><span>02</span><div><h4>Make a plan that makes sense</h4><p>Organize work into projects, tasks, owners, and deadlines.</p></div></div>
//           <div className="step"><span>03</span><div><h4>Keep momentum visible</h4><p>See what's moving, what's next, and where a hand is needed.</p></div></div>
//         </div><button className="btn-primary-custom" onClick={()=>goTo("pricing")}>Find your plan <ArrowRight size={17}/></button></div><div className="col-lg-7"><div className="workflow-visual"><div className="workflow-top"><div><small>TEAM WORKSPACE</small><h3>Launch something great.</h3></div><span className="live-pill"><i/> LIVE WORKSPACE</span></div><div className="workflow-board"><div className="board-column"><div className="board-col-title"><span>To do</span><b>2</b></div><div className="board-card"><small>DESIGN</small><b>Explore visual directions</b><div className="board-card-foot"><span className="avatar tiny">AK</span><span>Oct 24</span></div></div><div className="board-card"><small>CONTENT</small><b>Draft launch announcement</b><div className="board-card-foot"><span className="avatar tiny pink-avatar">MR</span><span>Oct 26</span></div></div></div><div className="board-column"><div className="board-col-title"><span>In progress</span><b>2</b></div><div className="board-card highlighted"><small>DEVELOPMENT</small><b>Build landing page</b><div className="board-progress"><i/></div><div className="board-card-foot"><span className="avatar tiny">JD</span><span>Oct 23</span></div></div><div className="board-card"><small>RESEARCH</small><b>Customer interviews</b><div className="board-card-foot"><span className="avatar tiny green-avatar">LS</span><span>Oct 25</span></div></div></div><div className="board-column"><div className="board-col-title"><span>Done</span><b>3</b></div><div className="board-card done-card"><small>STRATEGY</small><b>Define project goals</b><div className="board-card-foot"><span className="avatar tiny pink-avatar">MR</span><span><CheckCircle2 size={13}/> Done</span></div></div><div className="board-card done-card"><small>PLANNING</small><b>Map key milestones</b><div className="board-card-foot"><span className="avatar tiny">AK</span><span><CheckCircle2 size={13}/> Done</span></div></div></div></div><div className="workflow-footer"><div className="avatar-stack"><span>JD</span><span>AK</span><span>MR</span><span>LS</span></div><span>4 teammates collaborating</span><span className="footer-online"><i/> Everyone is up to date</span></div></div></div></div></div></section>

//         <section className="section quote-section"><div className="container"><div className="quote-card"><div className="quote-spark"><Sparkles size={22}/></div><div className="quote-stars">★★★★★</div><blockquote>“TaskFlow gave us something we didn't know we were missing: <span>a little more headspace.</span>”</blockquote><div className="quote-author"><div className="avatar quote-avatar">SC</div><div><b>Sarah Chen</b><small>Operations Lead, Northstar Studio</small></div></div></div></div></section>

//         <section className="section pricing-section" id="pricing"><div className="container"><div className="section-heading text-center"><div className="eyebrow dark-eyebrow">SIMPLE, HONEST PRICING</div><h2>A plan for your kind<br/>of <span>momentum.</span></h2><p>Start small, grow when you're ready. No complicated surprises.</p><div className="billing-toggle"><button className={billing==="monthly"?"selected":""} onClick={()=>setBilling("monthly")}>Monthly</button><button className={billing==="yearly"?"selected":""} onClick={()=>setBilling("yearly")}>Yearly <span>Save 20%</span></button></div></div><div className="row g-4 pricing-grid">{plans.map((plan)=><div className="col-lg-4" key={plan.name}><article className={`price-card ${plan.popular?"popular":""}`}>{plan.popular&&<div className="popular-label">MOST POPULAR</div>}<div className="price-name">{plan.name}</div><p>{plan.description}</p><div className="price-amount">{plan.price==="$0"?"$0":billing==="yearly"?(plan.price==="$12"?"$9.60":"$19.20"):plan.price}<small>{plan.period}</small></div><button className={plan.popular?"btn-primary-custom w-100":"btn-outline-custom w-100"} onClick={()=>startPlan(plan.name)}>{plan.cta} <ArrowRight size={16}/></button><div className="plan-divider"/><small className="included-label">WHAT'S INCLUDED</small>{plan.features.map(f=><div className="plan-feature" key={f}><Check size={16}/>{f}</div>)}</article></div>)}</div><p className="pricing-note"><ShieldCheck size={15}/> All plans include secure access and no setup fees. Prices are sample content for this demo.</p></div></section>

//         <section className="section faq-section"><div className="container"><div className="row g-5"><div className="col-lg-4"><div className="eyebrow dark-eyebrow">GOOD TO KNOW</div><h2>A few things<br/>you might be <span>wondering.</span></h2><p>Still have questions? Send us a note and we'll be happy to help.</p><button className="text-link" onClick={()=>goTo("contact")}>Talk to our team <ArrowRight size={15}/></button></div><div className="col-lg-7 offset-lg-1 faq-list">{[["Can I try TaskFlow before choosing a plan?","Absolutely. The Starter plan is free to use, so you can explore the core workspace and see if it fits your team's rhythm."],["Can I change plans later?","Yes. You can move to a different plan as your team and projects grow."],["Does my whole team need an account?","Each teammate who needs to create or update work should have their own account. You can invite collaborators from your workspace."],["Is TaskFlow available on mobile?","This landing page is responsive and the product concept is designed for teams working across desktop and mobile devices."]].map(([q,a],i)=><details className="faq-item" key={q} open={i===0}><summary>{q}<ChevronDown size={18}/></summary><p>{a}</p></details>)}</div></div></div></section>

//         <section className="section contact-section" id="contact"><div className="container"><div className="contact-card"><div className="contact-copy"><div className="eyebrow">LET'S MAKE WORK FLOW</div><h2>Ready for a<br/>clearer kind of <span>workday?</span></h2><p>Tell us a little about your team. We'll help you find a better way to move work forward.</p><div className="contact-points"><div><CheckCircle2 size={17}/> No credit card required</div><div><Clock3 size={17}/> Get started in minutes</div><div><CircleHelp size={17}/> Friendly human support</div></div></div><div className="contact-form-wrap">{submitted?<div className="success-state"><div className="success-icon"><CheckCircle2 size={34}/></div><h3>Thanks, {form.name.split(" ")[0]}!</h3><p>Your demo request has been received in this demo. We'll be in touch soon.</p><button className="btn-outline-custom" onClick={()=>{setSubmitted(false);setForm({name:"",email:"",team:"",message:""});}}>Send another message</button></div>:<form onSubmit={handleSubmit} noValidate><div className="form-heading"><h3>Request a demo</h3><p>We'd love to hear what you're working on.</p></div><div className="row g-3"><div className="col-md-6"><label htmlFor="name">Your name</label><input id="name" className={`form-control custom-input ${errors.name?"invalid":""}`} placeholder="Jamie Davis" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>{errors.name&&<small className="error-text">{errors.name}</small>}</div><div className="col-md-6"><label htmlFor="email">Work email</label><input id="email" type="email" className={`form-control custom-input ${errors.email?"invalid":""}`} placeholder="jamie@company.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>{errors.email&&<small className="error-text">{errors.email}</small>}</div><div className="col-12"><label htmlFor="team">Team size <span>(optional)</span></label><select id="team" className="form-select custom-input" value={form.team} onChange={e=>setForm({...form,team:e.target.value})}><option value="">Select team size</option><option>Just me</option><option>2–10 people</option><option>11–50 people</option><option>51–200 people</option><option>201+ people</option></select></div><div className="col-12"><label htmlFor="message">What would you like to improve?</label><textarea id="message" rows="3" className={`form-control custom-input ${errors.message?"invalid":""}`} placeholder="Tell us about your team's workflow..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/>{errors.message&&<small className="error-text">{errors.message}</small>}</div><div className="col-12"><button type="submit" className="btn-primary-custom w-100">Request my demo <ArrowRight size={17}/></button><small className="form-privacy">By submitting, you agree to be contacted about TaskFlow.</small></div></div></form>}</div></div></div></section>
//       </main>

//       <footer className="site-footer"><div className="container"><div className="footer-main"><div><a className="brand footer-brand" href="#home" onClick={(e)=>{e.preventDefault();goTo("home");}}><span className="brand-mark"><Command size={19}/></span>taskflow<span className="brand-period">.</span></a><p>A little more clarity.<br/>A lot more momentum.</p></div><div className="footer-links"><div><b>Explore</b><a href="#features" onClick={(e)=>{e.preventDefault();goTo("features");}}>Features</a><a href="#how-it-works" onClick={(e)=>{e.preventDefault();goTo("how-it-works");}}>How it works</a><a href="#pricing" onClick={(e)=>{e.preventDefault();goTo("pricing");}}>Pricing</a></div><div><b>Get in touch</b><a href="#contact" onClick={(e)=>{e.preventDefault();goTo("contact");}}>Contact</a><a href="#contact" onClick={(e)=>{e.preventDefault();goTo("contact");}}>Request a demo</a><a href="mailto:hello@taskflow.example">hello@taskflow.example</a></div></div></div><div className="footer-bottom"><span>© 2026 TaskFlow. All rights reserved.</span><span>Made for better workdays <span className="heart">♥</span></span></div></div></footer>
//     </>
//   );
// }

// export default App;








import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Command,
  LayoutDashboard,
  ListTodo,
  Menu,
  MessageSquare,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
  CircleHelp,
  CalendarDays,
  Search,
  Bell,
  Plus,
  MoreHorizontal,
  Paperclip,
  Send,
  MoveUpRight,
  Layers3,
  Workflow,
  BarChart3,
  Star
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    number: "01",
    title: "One connected workspace",
    text: "Bring projects, tasks, files and conversations together. Everything your team needs, right where work happens.",
    color: "violet",
    size: "large"
  },
  {
    icon: Target,
    number: "02",
    title: "Know what matters",
    text: "Set priorities, assign owners and keep important deadlines visible.",
    color: "blue"
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Progress without guesswork",
    text: "See project health, team momentum and upcoming work at a glance.",
    color: "orange"
  },
  {
    icon: MessageSquare,
    number: "04",
    title: "Context stays together",
    text: "Keep conversations, feedback and decisions connected to the work.",
    color: "green"
  },
  {
    icon: Zap,
    number: "05",
    title: "Workflows that flow",
    text: "Reduce repetitive steps and make everyday processes simpler.",
    color: "pink"
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "A space for every team",
    text: "Give everyone clarity with organized projects and team permissions.",
    color: "yellow"
  }
];

const plans = [
  {
    name: "Starter",
    price: 0,
    description: "A better way to get organized.",
    features: [
      "Up to 3 active projects",
      "Unlimited tasks",
      "Basic project views",
      "Community support"
    ],
    cta: "Get started free"
  },
  {
    name: "Pro",
    price: 12,
    description: "For teams ready to move faster.",
    features: [
      "Unlimited projects",
      "Timeline and workload views",
      "Advanced task workflows",
      "Priority email support",
      "Team collaboration"
    ],
    cta: "Choose Pro",
    popular: true
  },
  {
    name: "Business",
    price: 24,
    description: "More control for growing teams.",
    features: [
      "Everything in Pro",
      "Team-level reporting",
      "Custom roles and permissions",
      "Dedicated onboarding",
      "Advanced workspace controls"
    ],
    cta: "Talk to sales"
  }
];

const faqs = [
  {
    question: "Can I try TaskFlow before choosing a plan?",
    answer:
      "Absolutely. The Starter plan is free to use, so you can explore the core workspace and see whether TaskFlow fits your team's workflow."
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes. You can move to a different plan as your team grows and your project management needs change."
  },
  {
    question: "Does my whole team need an account?",
    answer:
      "Each teammate who needs to create or update work should have their own account. You can invite collaborators into your workspace."
  },
  {
    question: "Is TaskFlow available on mobile?",
    answer:
      "TaskFlow is designed around responsive experiences, helping teams stay connected across desktop, tablet and mobile devices."
  },
  {
    question: "Is my team's information secure?",
    answer:
      "TaskFlow is designed with workspace-level access controls to help teams organize their projects and manage who can access information."
  }
];

function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tasks = [
    {
      title: "Finalize homepage design",
      project: "Website redesign",
      date: "Today",
      color: "violet",
      checked: true
    },
    {
      title: "Review API documentation",
      project: "Mobile application",
      date: "Tomorrow",
      color: "blue"
    },
    {
      title: "Share campaign concepts",
      project: "Brand refresh",
      date: "Oct 25",
      color: "orange"
    }
  ];

  return (
    <div className="dashboard-shell">
      <div className="dashboard-window">
        <aside className="dashboard-sidebar">
          <div className="dashboard-brand">
            <span className="brand-mark">
              <Command size={17} />
            </span>
            <strong>taskflow<span>.</span></strong>
          </div>

          <div className="sidebar-label">WORKSPACE</div>

          {[
            { name: "Overview", icon: LayoutDashboard },
            { name: "My tasks", icon: ListTodo },
            { name: "Messages", icon: MessageSquare },
            { name: "Team", icon: Users }
          ].map(({ name, icon: Icon }) => (
            <button
              key={name}
              className={`sidebar-link ${activeTab === name ? "active" : ""}`}
              onClick={() => setActiveTab(name)}
            >
              <Icon size={15} />
              {name}
              {name === "My tasks" && <span className="sidebar-count">4</span>}
            </button>
          ))}

          <div className="sidebar-label project-label">YOUR PROJECTS</div>

          <div className="sidebar-project">
            <i className="project-dot violet-dot" />
            Website redesign
          </div>
          <div className="sidebar-project">
            <i className="project-dot blue-dot" />
            Mobile app
          </div>
          <div className="sidebar-project">
            <i className="project-dot orange-dot" />
            Brand refresh
          </div>

          <div className="sidebar-user">
            <div className="user-avatar">JD</div>
            <div>
              <strong>Jamie Davis</strong>
              <small>Workspace admin</small>
            </div>
            <MoreHorizontal size={17} />
          </div>
        </aside>

        <div className="dashboard-content">
          <div className="dashboard-topbar">
            <div className="dashboard-breadcrumb">
              Workspace <span>/</span> {activeTab}
            </div>
            <div className="dashboard-top-actions">
              <button aria-label="Search"><Search size={15} /></button>
              <button aria-label="Notifications"><Bell size={15} /></button>
              <div className="user-avatar small-avatar">JD</div>
            </div>
          </div>

          <div className="dashboard-heading">
            <div>
              <span className="dashboard-overline">MONDAY, OCTOBER 21</span>
              <h3>Good morning, Jamie <span>✦</span></h3>
              <p>Here's what's happening with your projects.</p>
            </div>
            <button className="dashboard-add">
              <Plus size={14} /> New task
            </button>
          </div>

          <div className="dashboard-stats">
            <div className="dashboard-stat">
              <div className="stat-heading">
                <span>Completed tasks</span>
                <span className="stat-icon violet-stat"><Check size={14} /></span>
              </div>
              <strong>28</strong>
              <small><TrendingUp size={12} /> 12% this week</small>
              <div className="stat-bars">
                {[30, 45, 38, 65, 48, 82, 100].map((height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>

            <div className="dashboard-stat">
              <div className="stat-heading">
                <span>In progress</span>
                <span className="stat-icon blue-stat"><Clock3 size={14} /></span>
              </div>
              <strong>14</strong>
              <small>6 due this week</small>
              <div className="stat-bottom-line blue-line" />
            </div>

            <div className="dashboard-stat">
              <div className="stat-heading">
                <span>Team productivity</span>
                <span className="stat-icon green-stat"><TrendingUp size={14} /></span>
              </div>
              <strong>86%</strong>
              <small>Looking good this week</small>
              <div className="stat-bottom-line green-line" />
            </div>
          </div>

          <div className="dashboard-bottom">
            <div className="dashboard-panel">
              <div className="panel-heading">
                <strong>My tasks</strong>
                <button>View all <ArrowUpRight size={13} /></button>
              </div>

              {tasks.map((task) => (
                <div className="dashboard-task" key={task.title}>
                  <span className={`task-checkbox ${task.checked ? "checked" : ""}`}>
                    {task.checked && <Check size={11} />}
                  </span>
                  <div className="dashboard-task-info">
                    <strong>{task.title}</strong>
                    <small><i className={`project-dot ${task.color}-dot`} />{task.project}</small>
                  </div>
                  <span className="task-deadline">{task.date}</span>
                </div>
              ))}
            </div>

            <div className="dashboard-panel progress-panel">
              <div className="panel-heading">
                <strong>Project progress</strong>
                <MoreHorizontal size={17} />
              </div>

              {[
                ["Website redesign", "72%", "violet-progress", 72],
                ["Mobile app", "48%", "blue-progress", 48],
                ["Brand refresh", "91%", "orange-progress", 91]
              ].map(([name, value, color, width]) => (
                <div className="project-progress" key={name}>
                  <div><strong>{name}</strong><span>{value}</span></div>
                  <div className="progress-track">
                    <i className={color} style={{ width: `${width}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-footer">
            <div className="avatar-stack">
              <span>JD</span>
              <span>AK</span>
              <span>MR</span>
              <span>+3</span>
            </div>
            <span>5 teammates online</span>
            <span className="online-indicator"><i /> All systems running</span>
          </div>
        </div>
      </div>

      <div className="dashboard-floating-card">
        <div className="floating-check"><CheckCircle2 size={19} /></div>
        <div>
          <strong>You're on track!</strong>
          <span>Weekly goal completed</span>
        </div>
        <Sparkles size={17} className="floating-sparkle" />
      </div>
    </div>
  );
}

function WorkflowPreview() {
  const [selected, setSelected] = useState("In progress");

  const columns = [
    {
      name: "To do",
      color: "todo",
      tasks: [
        ["Explore visual directions", "DESIGN", "AK"],
        ["Draft launch announcement", "CONTENT", "MR"]
      ]
    },
    {
      name: "In progress",
      color: "doing",
      tasks: [
        ["Build landing page", "DEVELOPMENT", "JD"],
        ["Customer interviews", "RESEARCH", "LS"]
      ]
    },
    {
      name: "Done",
      color: "done",
      tasks: [
        ["Define project goals", "STRATEGY", "MR"],
        ["Map key milestones", "PLANNING", "AK"]
      ]
    }
  ];

  return (
    <div className="workflow-preview">
      <div className="workflow-preview-top">
        <div>
          <span className="dashboard-overline">TEAM WORKSPACE</span>
          <h3>Launch something great.</h3>
        </div>
        <span className="live-badge"><i /> LIVE WORKSPACE</span>
      </div>

      <div className="workflow-tabs">
        {columns.map((column) => (
          <button
            key={column.name}
            className={selected === column.name ? "selected" : ""}
            onClick={() => setSelected(column.name)}
          >
            {column.name}
            <span>{column.tasks.length}</span>
          </button>
        ))}
      </div>

      <div className="workflow-columns">
        {columns.map((column) => (
          <div
            key={column.name}
            className={`workflow-column ${selected === column.name ? "column-selected" : ""}`}
          >
            <div className="workflow-column-heading">
              <span className={`column-indicator ${column.color}`} />
              <strong>{column.name}</strong>
              <span>{column.tasks.length}</span>
            </div>

            {column.tasks.map(([title, category, avatar]) => (
              <div className="workflow-task" key={title}>
                <small>{category}</small>
                <strong>{title}</strong>
                <div className="workflow-task-bottom">
                  <span className="user-avatar task-avatar">{avatar}</span>
                  <span>Oct 24</span>
                  {column.name === "Done" && <CheckCircle2 size={14} />}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="workflow-preview-footer">
        <div className="avatar-stack">
          <span>JD</span>
          <span>AK</span>
          <span>MR</span>
          <span>LS</span>
        </div>
        <span>4 teammates collaborating</span>
        <span className="online-indicator"><i /> Up to date</span>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    team: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [billing, setBilling] = useState("monthly");
  const [activeFaq, setActiveFaq] = useState(0);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Tell us briefly what you need.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const startPlan = (plan) => {
    setForm((previous) => ({
      ...previous,
      message: `I'm interested in the ${plan} plan.`
    }));
    setErrors({});
    goTo("contact");
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", team: "", message: "" });
    setErrors({});
  };

  const navItems = [
    ["Features", "features"],
    ["How it works", "how-it-works"],
    ["Pricing", "pricing"],
    ["FAQ", "faq"],
    ["Contact", "contact"]
  ];

  return (
    <div className="taskflow-app">
      <nav className="site-nav">
        <div className="container nav-inner">
          <a
            href="#home"
            className="brand"
            onClick={(event) => {
              event.preventDefault();
              goTo("home");
            }}
          >
            <span className="brand-mark"><Command size={18} /></span>
            taskflow<span className="brand-dot">.</span>
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map(([label, id]) => (
              <a
                href={`#${id}`}
                key={id}
                onClick={(event) => {
                  event.preventDefault();
                  goTo(id);
                }}
              >
                {label}
              </a>
            ))}
            <button className="nav-cta" onClick={() => goTo("contact")}>
              Get started <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-grid-bg" />
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-container">
            <div className="hero-copy">
              <div className="hero-eyebrow">
                <span className="eyebrow-dot" />
                THE WORKSPACE FOR WHAT'S NEXT
              </div>

              <h1>
                Less busywork.
                <br />
                <span>More great work.</span>
              </h1>

              <p className="hero-description">
                Bring your projects, people and priorities into one
                beautifully simple workspace. Stay aligned, move faster
                and make room for your best work.
              </p>

              <div className="hero-actions">
                <button
                  className="button-primary"
                  onClick={() => goTo("contact")}
                >
                  Start for free <ArrowRight size={17} />
                </button>
                <button
                  className="button-secondary"
                  onClick={() => goTo("how-it-works")}
                >
                  <span className="play-icon"><Play size={12} fill="currentColor" /></span>
                  Explore the workflow
                </button>
              </div>

              <div className="hero-social-proof">
                <div className="avatar-stack">
                  <span>JD</span>
                  <span>AK</span>
                  <span>MR</span>
                  <span>LS</span>
                </div>
                <div>
                  <div className="hero-stars">★★★★★</div>
                  <span>Designed for teams that do great things</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <DashboardPreview />
            </div>
          </div>

          <div className="container hero-bottom">
            <span>ONE SPACE. EVERY POSSIBILITY.</span>
            <div className="trusted-logos">
              <strong><Layers3 size={16} /> vertex</strong>
              <strong><Workflow size={16} /> northstar</strong>
              <strong><Command size={16} /> layers</strong>
              <strong><Target size={16} /> horizon</strong>
              <strong><Zap size={16} /> orbit</strong>
            </div>
          </div>
        </section>

        <section className="metrics-section">
          <div className="container metrics-grid">
            <div>
              <strong>2.4k<span>+</span></strong>
              <small>Teams moving forward</small>
            </div>
            <div>
              <strong>98<span>%</span></strong>
              <small>Customer satisfaction</small>
            </div>
            <div>
              <strong>35<span>%</span></strong>
              <small>Less time in status meetings</small>
            </div>
            <div className="metrics-message">
              Better work starts with a little more clarity.
            </div>
          </div>
        </section>

        <section className="section features-section" id="features">
          <div className="container">
            <div className="section-heading">
              <div className="section-kicker">A BETTER WAY TO WORK</div>
              <h2>
                Everything in sync.
                <br />
                <span>Nothing in the way.</span>
              </h2>
              <p>
                The tools your team needs, thoughtfully brought together
                in one space that makes work feel easier.
              </p>
            </div>

            <div className="features-grid">
              {features.map(({ icon: Icon, number, title, text, color }) => (
                <article className={`feature-card feature-${color}`} key={title}>
                  <div className="feature-card-top">
                    <span className="feature-icon"><Icon size={22} /></span>
                    <span className="feature-number">{number}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <button onClick={() => goTo("how-it-works")} className="feature-link">
                    Discover more <ArrowUpRight size={15} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section workflow-section" id="how-it-works">
          <div className="container workflow-layout">
            <div className="workflow-copy">
              <div className="section-kicker">SIMPLE BY DESIGN</div>
              <h2>
                From scattered
                <br />
                to <span>in sync.</span>
              </h2>
              <p>
                Give your team a shared rhythm. Organize the work,
                make ownership clear and keep every important update
                close to where it belongs.
              </p>

              <div className="workflow-steps">
                <div className="workflow-step">
                  <span>01</span>
                  <div>
                    <h4>Bring everyone together</h4>
                    <p>Create a workspace and invite your team.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <span>02</span>
                  <div>
                    <h4>Make a plan that works</h4>
                    <p>Organize projects, tasks, owners and deadlines.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <span>03</span>
                  <div>
                    <h4>Keep momentum visible</h4>
                    <p>See what's moving and what needs attention.</p>
                  </div>
                </div>
              </div>

              <button className="button-primary" onClick={() => goTo("pricing")}>
                Find your plan <ArrowRight size={17} />
              </button>
            </div>

            <div className="workflow-visual">
              <WorkflowPreview />
            </div>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="container">
            <div className="testimonial-card">
              <div className="testimonial-decoration decoration-one" />
              <div className="testimonial-decoration decoration-two" />
              <div className="testimonial-content">
                <div className="testimonial-icon"><Sparkles size={21} /></div>
                <div className="testimonial-stars">★★★★★</div>
                <blockquote>
                  "The best work doesn't happen when you do more.
                  It happens when <span>everything finally clicks.</span>"
                </blockquote>
                <div className="testimonial-author">
                  <div className="user-avatar testimonial-avatar">SC</div>
                  <div>
                    <strong>Sarah Chen</strong>
                    <span>Operations Lead, Northstar Studio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="pricing">
          <div className="container">
            <div className="section-heading">
              <div className="section-kicker">PRICING THAT MAKES SENSE</div>
              <h2>
                Room to grow.
                <br />
                <span>Plans that flow.</span>
              </h2>
              <p>
                Start with what you need. Scale when you're ready.
                No complicated surprises.
              </p>

              <div className="billing-switch">
                <button
                  className={billing === "monthly" ? "active" : ""}
                  onClick={() => setBilling("monthly")}
                >
                  Monthly
                </button>
                <button
                  className={billing === "yearly" ? "active" : ""}
                  onClick={() => setBilling("yearly")}
                >
                  Yearly <span>Save 20%</span>
                </button>
              </div>
            </div>

            <div className="pricing-grid">
              {plans.map((plan) => {
                const price = billing === "yearly"
                  ? Math.round(plan.price * 0.8 * 100) / 100
                  : plan.price;

                return (
                  <article className={`pricing-card ${plan.popular ? "pricing-popular" : ""}`} key={plan.name}>
                    {plan.popular && (
                      <div className="popular-ribbon">
                        <Sparkles size={13} /> MOST POPULAR
                      </div>
                    )}

                    <div className="pricing-card-top">
                      <span className="plan-name">{plan.name}</span>
                      <span className="plan-symbol">
                        {plan.name === "Starter" ? <Zap size={18} /> : plan.name === "Pro" ? <Star size={18} /> : <Layers3 size={18} />}
                      </span>
                    </div>

                    <p className="plan-description">{plan.description}</p>

                    <div className="plan-price">
                      <strong>${price === 0 ? "0" : Number.isInteger(price) ? price : price.toFixed(2)}</strong>
                      <span>{plan.price === 0 ? "forever" : "/ user / month"}</span>
                    </div>

                    <button
                      className={plan.popular ? "button-primary pricing-button" : "button-outline pricing-button"}
                      onClick={() => startPlan(plan.name)}
                    >
                      {plan.cta} <ArrowRight size={16} />
                    </button>

                    <div className="pricing-divider" />

                    <span className="included-title">WHAT'S INCLUDED</span>

                    <div className="plan-features">
                      {plan.features.map((feature) => (
                        <div key={feature}>
                          <span><Check size={13} /></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="pricing-disclaimer">
              <ShieldCheck size={16} />
              Prices shown are sample content for this demonstration.
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <div className="faq-intro">
              <div className="section-kicker">GOOD TO KNOW</div>
              <h2>
                A few things
                <br />
                you might be
                <br />
                <span>wondering.</span>
              </h2>
              <p>
                Have another question? Our team would be happy to help
                you find your way.
              </p>
              <button className="feature-link" onClick={() => goTo("contact")}>
                Talk to our team <ArrowUpRight size={15} />
              </button>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div className={`faq-item ${activeFaq === index ? "faq-active" : ""}`} key={faq.question}>
                  <button
                    className="faq-question"
                    onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                    aria-expanded={activeFaq === index}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle">
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  {activeFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-card">
              <div className="contact-left">
                <div className="contact-orb" />
                <div className="section-kicker light-kicker">LET'S MAKE WORK FLOW</div>
                <h2>
                  Ready for a
                  <br />
                  clearer kind of
                  <br />
                  <span>workday?</span>
                </h2>
                <p>
                  Tell us a little about your team. We'll help you
                  find a better way to move work forward.
                </p>

                <div className="contact-benefits">
                  <div><CheckCircle2 size={17} /> No credit card required</div>
                  <div><Clock3 size={17} /> Get started in minutes</div>
                  <div><CircleHelp size={17} /> Friendly human support</div>
                </div>

                <div className="contact-decoration">
                  <Command size={100} />
                </div>
              </div>

              <div className="contact-right">
                {submitted ? (
                  <div className="success-state">
                    <div className="success-icon"><CheckCircle2 size={34} /></div>
                    <span className="success-label">FORM COMPLETED</span>
                    <h3>Thanks, {form.name.split(" ")[0]}!</h3>
                    <p>
                      Your demo request has been received in this demonstration.
                      No message has been sent to a recipient.
                    </p>
                    <button className="button-outline" onClick={resetForm}>
                      Send another message <ArrowRight size={15} />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-heading">
                      <span>LET'S TALK</span>
                      <h3>Request a demo</h3>
                      <p>We'd love to hear what you're working on.</p>
                    </div>

                    <div className="form-grid">
                      <div className="form-field">
                        <label htmlFor="name">Your name</label>
                        <input
                          id="name"
                          className={errors.name ? "input-error" : ""}
                          placeholder="Jamie Davis"
                          value={form.name}
                          onChange={(event) => setForm({ ...form, name: event.target.value })}
                        />
                        {errors.name && <small className="error-message">{errors.name}</small>}
                      </div>

                      <div className="form-field">
                        <label htmlFor="email">Work email</label>
                        <input
                          id="email"
                          type="email"
                          className={errors.email ? "input-error" : ""}
                          placeholder="jamie@company.com"
                          value={form.email}
                          onChange={(event) => setForm({ ...form, email: event.target.value })}
                        />
                        {errors.email && <small className="error-message">{errors.email}</small>}
                      </div>

                      <div className="form-field full-field">
                        <label htmlFor="team">Team size <span>Optional</span></label>
                        <select
                          id="team"
                          value={form.team}
                          onChange={(event) => setForm({ ...form, team: event.target.value })}
                        >
                          <option value="">Select team size</option>
                          <option>Just me</option>
                          <option>2–10 people</option>
                          <option>11–50 people</option>
                          <option>51–200 people</option>
                          <option>201+ people</option>
                        </select>
                      </div>

                      <div className="form-field full-field">
                        <label htmlFor="message">How can we help?</label>
                        <textarea
                          id="message"
                          rows="4"
                          className={errors.message ? "input-error" : ""}
                          placeholder="Tell us about your team's workflow..."
                          value={form.message}
                          onChange={(event) => setForm({ ...form, message: event.target.value })}
                        />
                        {errors.message && <small className="error-message">{errors.message}</small>}
                      </div>

                      <div className="form-field full-field">
                        <button type="submit" className="button-primary submit-button">
                          Submit request <ArrowRight size={17} />
                        </button>
                        <small className="form-note">
                          This is a frontend demo. Your information is not sent or stored.
                        </small>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand-area">
              <a
                href="#home"
                className="brand"
                onClick={(event) => {
                  event.preventDefault();
                  goTo("home");
                }}
              >
                <span className="brand-mark"><Command size={18} /></span>
                taskflow<span className="brand-dot">.</span>
              </a>
              <p>A little more clarity.<br />A lot more momentum.</p>
            </div>

            <div className="footer-column">
              <strong>Explore</strong>
              <button onClick={() => goTo("features")}>Features</button>
              <button onClick={() => goTo("how-it-works")}>How it works</button>
              <button onClick={() => goTo("pricing")}>Pricing</button>
            </div>

            <div className="footer-column">
              <strong>Get in touch</strong>
              <button onClick={() => goTo("contact")}>Contact</button>
              <button onClick={() => goTo("faq")}>FAQs</button>
              <button onClick={() => goTo("contact")}>Request a demo</button>
            </div>

            <div className="footer-newsletter">
              <span>MAKE ROOM FOR GREAT WORK</span>
              <h3>Work better.<br />Feel lighter.</h3>
              <button onClick={() => goTo("contact")}>
                Get started <ArrowUpRight size={15} />
              </button>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 TaskFlow. All rights reserved.</span>
            <span>Made for better workdays <span className="footer-heart">♥</span></span>
          </div>
        </div>
      </footer>

      <button
        className="back-to-top"
        onClick={() => goTo("home")}
        aria-label="Back to top"
      >
        <ArrowUpRight size={18} />
      </button>
    </div>
  );
}

export default App;
