const {TerminalWindow,Prompt,PostRow,Button,Badge,Icon}=window.RivernateDesignSystem_665cb5;

function SectionHead({label,action,onAction}){
  return (<div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',
    borderBottom:'var(--rule)',paddingBottom:'var(--sp-2)',marginBottom:'var(--sp-2)'}}>
    <span style={{font:'var(--fw-medium) var(--fs-micro)/1 var(--font-mono)',letterSpacing:'var(--ls-caps)',
      textTransform:'uppercase',color:'var(--text-muted)'}}>{label}</span>
    {action?<a href="#" onClick={e=>{e.preventDefault();onAction&&onAction()}}
      style={{fontSize:'var(--fs-tiny)',border:'none'}}>{action}</a>:null}
  </div>);
}

function HomeScreen({go}){
  const posts=window.RN_DATA.posts.slice(0,3);
  return (<div style={{display:'flex',flexDirection:'column',gap:'var(--sp-9)'}}>
    <TerminalWindow title="~" scanlines glow>
      <Prompt command="whoami"/>
      <div style={{color:'var(--text-primary)',fontSize:'var(--fs-lg)',lineHeight:'var(--row)',margin:'var(--sp-2) 0'}}>
        river nate — backend and infrastructure engineer. distributed systems, data pipelines, and build times.
      </div>
      <div style={{color:'var(--text-muted)',maxWidth:'var(--measure)'}}>
        currently: engineering team lead building cloud infrastructure and data platforms in ed-tech. ~19 years writing software, most of it backend and infra.
      </div>
      <div style={{marginTop:'var(--sp-3)'}}><Prompt command="cat now.txt"/></div>
      <div style={{color:'var(--text-secondary)',maxWidth:'var(--measure)'}}>
        terraform, GCP, and a lot of postgres. slowly finishing this site.
      </div>
      <div style={{marginTop:'var(--sp-3)'}}><Prompt command="" caret/></div>
    </TerminalWindow>

    <div>
      <SectionHead label="selected writing" action="all posts ->" onAction={()=>go('writing')}/>
      {posts.length
        ?posts.map(p=><PostRow key={p.slug} {...p} href="#" onClick={e=>{e.preventDefault();go('post',p)}}/>)
        :<div style={{padding:'var(--sp-4) 0',color:'var(--text-faint)'}}>nothing published yet.</div>}
    </div>

    <div style={{display:'flex',gap:'var(--sp-3)',alignItems:'center',flexWrap:'wrap'}}>
      <Button variant="primary" prefix="->" onClick={()=>go('projects')}>projects</Button>
      <Button onClick={()=>go('about')}>about</Button>
      <Button onClick={()=>go('resume')}>resume</Button>
      <span style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:8,fontSize:'var(--fs-tiny)',color:'var(--text-faint)'}}>
        <Icon name="git-branch" size={13} color="var(--text-faint)"/> main
      </span>
    </div>
  </div>);
}
Object.assign(window,{HomeScreen,SectionHead});
