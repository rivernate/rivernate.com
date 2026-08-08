const {Card,Badge,Tag,Icon,Button}=window.RivernateDesignSystem_665cb5;

function ProjectsScreen(){
  return (<div style={{display:'flex',flexDirection:'column',gap:'var(--sp-6)'}}>
    <h1 style={{fontSize:'var(--fs-h2)'}}>projects</h1>
    <p style={{color:'var(--text-muted)',maxWidth:'var(--measure)',margin:0}}>
      things I maintain in public. issues welcome, pull requests read slowly.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--sp-4)'}}>
      {window.RN_DATA.projects.map(p=>(
        <Card key={p.name} interactive title={p.name} meta={p.status==='archived'?'archived':p.stars+' ★'}>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-3)'}}>
            <span style={{color:'var(--text-muted)',lineHeight:'var(--lh-body)'}}>{p.desc}</span>
            <div style={{display:'flex',alignItems:'center',gap:'var(--sp-2)'}}>
              <Tag>{p.lang}</Tag>
              <Badge tone={p.status==='active'?'accent':'neutral'} dot={p.status==='active'}>{p.status}</Badge>
              <a href={'https://github.com/rivernate/'+p.name} target="_blank" rel="noreferrer" style={{marginLeft:'auto',border:'none'}}>
                <Icon name="external-link" size={13} color="var(--text-faint)"/>
              </a>
            </div>
          </div>
        </Card>))}
    </div>
    <div><Button prefix="$" onClick={()=>{}}>git clone --all</Button></div>
  </div>);
}
Object.assign(window,{ProjectsScreen});
