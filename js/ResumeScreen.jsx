const {TerminalWindow,Prompt,Card,Tag,IconButton,Tooltip}=window.RivernateDesignSystem_665cb5;
// SectionHead is defined in HomeScreen.jsx and exposed via window — this repo
// has no module system, so screens share globals instead of importing.
const SectionHead=window.SectionHead;

function Bullet({children}){
  return (<li style={{display:'flex',gap:'var(--sp-3)',color:'var(--text-secondary)',
    lineHeight:'var(--lh-body)'}}>
    <span aria-hidden="true" style={{color:'var(--text-accent)',flex:'none'}}>-</span>
    <span>{children}</span>
  </li>);
}

function ResumeListRow({primary,secondary,detail,dates}){
  return (<div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',
    gap:'var(--sp-3)',padding:'var(--sp-3) 0',borderBottom:'var(--rule)'}}>
    <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-1)'}}>
      <span style={{color:'var(--text-primary)'}}>{primary}</span>
      {secondary?<span style={{color:'var(--text-secondary)',fontSize:secondary.small?'var(--fs-tiny)':undefined}}>{secondary.text}</span>:null}
      {detail?<span style={{fontSize:'var(--fs-tiny)',color:'var(--text-faint)'}}>{detail}</span>:null}
    </div>
    <span style={{fontSize:'var(--fs-tiny)',color:'var(--text-faint)',flex:'none'}}>{dates}</span>
  </div>);
}

function ResumeRole({role}){
  return (<Card title={role.company} meta={role.dates}>
    <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-3)'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-1)'}}>
        {role.titles.map(t=>(
          <div key={t.title} style={{display:'flex',gap:'var(--sp-3)',flexWrap:'wrap',alignItems:'baseline'}}>
            <span style={{color:'var(--text-primary)'}}>{t.title}</span>
            <span style={{fontSize:'var(--fs-tiny)',color:'var(--text-faint)'}}>{t.dates}</span>
          </div>))}
      </div>
      <ul style={{display:'flex',flexDirection:'column',gap:'var(--sp-2)',listStyle:'none',margin:0,padding:0}}>
        {role.bullets.map((b,i)=><Bullet key={i}>{b}</Bullet>)}
      </ul>
    </div>
  </Card>);
}

function ResumeScreen(){
  const resume=window.RN_DATA.resume;
  const identity=window.RN_DATA.identity;
  return (<div style={{display:'flex',flexDirection:'column',gap:'var(--sp-9)'}}>
    <h1 style={{fontSize:'var(--fs-h2)'}}>resume</h1>

    <TerminalWindow title="~/resume">
      <Prompt command="cat contact.txt"/>
      <div style={{color:'var(--text-primary)',fontSize:'var(--fs-lg)',lineHeight:'var(--row)',margin:'var(--sp-2) 0'}}>
        {resume.name}
      </div>
      <div style={{color:'var(--text-muted)',maxWidth:'var(--measure)'}}>{resume.tagline}</div>
      <div style={{color:'var(--text-secondary)',maxWidth:'var(--measure)',marginTop:'var(--sp-2)'}}>{resume.summary}</div>
      <div style={{display:'flex',alignItems:'center',gap:'var(--sp-3)',marginTop:'var(--sp-3)'}}>
        <a href={'mailto:'+identity.contactEmail}>{identity.contactEmail}</a>
        <span style={{color:'var(--text-faint)'}}>·</span>
        <span style={{color:'var(--text-muted)'}}>{identity.location}</span>
        <Tooltip label="linkedin"><IconButton name="linkedin" label="LinkedIn" size="sm" variant="ghost" onClick={()=>window.open(identity.linkedin,'_blank','noopener,noreferrer')}/></Tooltip>
      </div>
    </TerminalWindow>

    <div>
      <SectionHead label="experience"/>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-4)',marginTop:'var(--sp-4)'}}>
        {resume.experience.map(role=><ResumeRole key={role.company} role={role}/>)}
      </div>
    </div>

    <div>
      <SectionHead label="education"/>
      <div style={{display:'flex',flexDirection:'column',marginTop:'var(--sp-3)'}}>
        {resume.education.map(e=>(
          <ResumeListRow key={e.school} primary={e.school}
            secondary={{text:e.degree}} detail={e.place+' · '+e.detail} dates={e.dates}/>))}
      </div>
    </div>

    <div>
      <SectionHead label="awards"/>
      <div style={{display:'flex',flexDirection:'column',marginTop:'var(--sp-3)'}}>
        {resume.awards.map(a=>(
          <ResumeListRow key={a.name} primary={a.name}
            secondary={{text:a.detail,small:true}} dates={a.dates}/>))}
      </div>
    </div>

    <div>
      <SectionHead label="skills"/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',
        gap:'var(--sp-3) var(--sp-6)',marginTop:'var(--sp-4)'}}>
        {resume.skills.map(s=>(
          <div key={s.group} style={{display:'flex',gap:'var(--sp-3)',alignItems:'baseline'}}>
            <span style={{font:'var(--fw-medium) var(--fs-micro)/1 var(--font-mono)',letterSpacing:'var(--ls-caps)',
              textTransform:'uppercase',color:'var(--text-muted)',flex:'0 0 auto',minWidth:'9em'}}>{s.group}</span>
            <div style={{display:'flex',gap:'var(--sp-2)',flexWrap:'wrap'}}>
              {s.items.map(i=><Tag key={i}>{i}</Tag>)}
            </div>
          </div>))}
      </div>
    </div>
  </div>);
}
Object.assign(window,{ResumeScreen});
