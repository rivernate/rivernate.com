const {PostRow,Tabs,Input,Icon}=window.RivernateDesignSystem_665cb5;

function WritingScreen({go}){
  const [tab,setTab]=React.useState('all');
  const [q,setQ]=React.useState('');
  const all=window.RN_DATA.posts;
  const posts=all.filter(p=>p.title.toLowerCase().includes(q.toLowerCase()));
  return (<div style={{display:'flex',flexDirection:'column',gap:'var(--sp-6)'}}>
    <h1 style={{fontSize:'var(--fs-h2)'}}>writing</h1>
    <p style={{color:'var(--text-muted)',maxWidth:'var(--measure)',margin:0}}>
      notes on systems that stayed up, and the ones that did not. {all.length} posts.
    </p>
    {all.length?(<React.Fragment>
      <Tabs items={['all','notes','longform']} value={tab} onChange={setTab}/>
      <Input prefix="/" placeholder="filter by title" value={q} onChange={e=>setQ(e.target.value)}/>
      <div>{posts.map(p=><PostRow key={p.slug} {...p} href="#" onClick={e=>{e.preventDefault();go('post',p)}}/>)}
        {!posts.length?<div style={{padding:'var(--sp-6) 0',color:'var(--text-faint)'}}>no matches.</div>:null}
      </div>
    </React.Fragment>):(
      <div style={{padding:'var(--sp-6) 0',color:'var(--text-faint)'}}>nothing published yet.</div>
    )}
  </div>);
}
Object.assign(window,{WritingScreen});
