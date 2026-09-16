const {TerminalWindow,Prompt,Card,Tag,IconButton,Tooltip}=window.RivernateDesignSystem_665cb5;

function Bullet({children}){
  return (<li style={{display:'flex',gap:'var(--sp-3)',color:'var(--text-secondary)',
    lineHeight:'var(--lh-body)'}}>
    <span aria-hidden="true" style={{color:'var(--text-accent)',flex:'none'}}>-</span>
    <span>{children}</span>
  </li>);
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
      {role.also?(
        <p style={{margin:0,fontSize:'var(--fs-tiny)',color:'var(--text-muted)',
          lineHeight:'var(--lh-body)',maxWidth:'var(--measure)'}}>{role.also}</p>
      ):null}
    </div>
  </Card>);
}

function ResumeScreen(){
  const SectionHead=window.SectionHead;
  const r=window.RN_DATA.resume;
  const identity=window.RN_DATA.identity;
  return (<div style={{display:'flex',flexDirection:'column',gap:'var(--sp-9)'}}>
    <h1 style={{fontSize:'var(--fs-h2)'}}>resume</h1>

    <TerminalWindow title="~/resume">
      <Prompt command="cat contact.txt"/>
      <div style={{color:'var(--text-primary)',fontSize:'var(--fs-lg)',lineHeight:'var(--row)',margin:'var(--sp-2) 0'}}>
        {r.name}
      </div>
      <div style={{color:'var(--text-muted)',maxWidth:'var(--measure)'}}>{r.tagline}</div>
      <div style={{color:'var(--text-secondary)',maxWidth:'var(--measure)',marginTop:'var(--sp-2)'}}>{r.summary}</div>
      <div style={{display:'flex',alignItems:'center',gap:'var(--sp-3)',marginTop:'var(--sp-3)'}}>
        <a href={'mailto:'+r.email}>{r.email}</a>
        <span style={{color:'var(--text-faint)'}}>·</span>
        <span style={{color:'var(--text-muted)'}}>{identity.location}</span>
        <Tooltip label="linkedin"><IconButton name="linkedin" label="LinkedIn" size="sm" variant="ghost" onClick={()=>window.open(identity.linkedin,'_blank')}/></Tooltip>
      </div>
    </TerminalWindow>

    <div>
      <SectionHead label="experience"/>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-4)',marginTop:'var(--sp-4)'}}>
        {r.experience.map(role=><ResumeRole key={role.company} role={role}/>)}
      </div>
    </div>

    <div>
      <SectionHead label="education"/>
      <div style={{display:'flex',flexDirection:'column',marginTop:'var(--sp-3)'}}>
        {r.education.map(e=>(
          <div key={e.school} style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',
            gap:'var(--sp-3)',padding:'var(--sp-3) 0',borderBottom:'var(--rule)'}}>
            <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-1)'}}>
              <span style={{color:'var(--text-primary)'}}>{e.school}</span>
              <span style={{color:'var(--text-secondary)'}}>{e.degree}</span>
              <span style={{fontSize:'var(--fs-tiny)',color:'var(--text-faint)'}}>{e.place} · {e.detail}</span>
            </div>
            <span style={{fontSize:'var(--fs-tiny)',color:'var(--text-faint)',flex:'none'}}>{e.dates}</span>
          </div>))}
      </div>
    </div>

    <div>
      <SectionHead label="awards"/>
      <div style={{display:'flex',flexDirection:'column',marginTop:'var(--sp-3)'}}>
        {r.awards.map(a=>(
          <div key={a.name} style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',
            gap:'var(--sp-3)',padding:'var(--sp-3) 0',borderBottom:'var(--rule)'}}>
            <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-1)'}}>
              <span style={{color:'var(--text-primary)'}}>{a.name}</span>
              <span style={{color:'var(--text-secondary)',fontSize:'var(--fs-tiny)'}}>{a.detail}</span>
            </div>
            <span style={{fontSize:'var(--fs-tiny)',color:'var(--text-faint)',flex:'none'}}>{a.dates}</span>
          </div>))}
      </div>
    </div>

    <div>
      <SectionHead label="skills"/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',
        gap:'var(--sp-3) var(--sp-6)',marginTop:'var(--sp-4)'}}>
        {r.skills.map(s=>(
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
Object.assign(window,{ResumeScreen,ResumeRole});
