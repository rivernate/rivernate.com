const {CodeBlock,Callout,Tag,Button,Badge,Icon}=window.RivernateDesignSystem_665cb5;

function PostScreen({post,go}){
  const p=post||window.RN_DATA.posts[0];
  if(!p){
    return (<div style={{display:'flex',flexDirection:'column',gap:'var(--sp-4)'}}>
      <a href="#" onClick={e=>{e.preventDefault();go('writing')}} style={{fontSize:'var(--fs-tiny)',border:'none'}}>&lt;- writing</a>
      <div style={{color:'var(--text-faint)'}}>post not found.</div>
    </div>);
  }
  return (<article style={{display:'flex',flexDirection:'column',gap:'var(--sp-5)'}}>
    <a href="#" onClick={e=>{e.preventDefault();go('writing')}} style={{fontSize:'var(--fs-tiny)',border:'none'}}>&lt;- writing</a>
    <div style={{display:'flex',gap:'var(--sp-4)',alignItems:'center',fontSize:'var(--fs-tiny)',color:'var(--text-faint)'}}>
      <span>{p.date}</span><span>{p.read}</span><Badge tone="accent" dot>published</Badge>
    </div>
    <h1 style={{fontSize:'var(--fs-h1)',maxWidth:'var(--measure-narrow)'}}>{p.title}</h1>
    <div style={{display:'flex',gap:'var(--sp-2)'}}>{p.tags.map(t=><Tag key={t}>{t}</Tag>)}</div>
    <div style={{maxWidth:'var(--measure)',color:'var(--text-secondary)',fontSize:'var(--fs-md)',lineHeight:'var(--lh-body)',display:'flex',flexDirection:'column',gap:'var(--sp-4)'}}>
      <p style={{margin:0,color:'var(--text-primary)',fontSize:'var(--fs-lg)'}}>{p.summary}</p>
      <p style={{margin:0}}>Our CI run took nineteen minutes. Half of that was one crate rebuilding because a build script touched a file in <code style={{color:'var(--text-accent)'}}>OUT_DIR</code> on every invocation. The fix was four lines.</p>
      <CodeBlock lang="toml" code={"[profile.dev]\nincremental = true\ncodegen-units = 256\n\n[build]\nrustflags = [\"-C\", \"link-arg=-fuse-ld=lld\"]"}/>
      <p style={{margin:0}}>The remaining time was test startup. We were spinning a fresh Postgres per test file; a shared container with a template database cut it to under a second.</p>
      <Callout tone="note" title="note">Numbers here are from a 32-core runner. On a laptop the ratios hold but the wall time does not.</Callout>
      <p style={{margin:0}}>Nothing in this post is novel. It is written down because I have now fixed the same three things at three companies.</p>
    </div>
    <div style={{borderTop:'var(--rule)',paddingTop:'var(--sp-4)',display:'flex',gap:'var(--sp-3)',alignItems:'center'}}>
      <Button size="sm" prefix={<Icon name="rss" size={12} color="var(--text-secondary)"/>} onClick={()=>{window.location.href='/feed.xml'}}>subscribe</Button>
      <Button size="sm" variant="ghost" onClick={()=>{window.location.href='mailto:river@rivernate.com'}}>reply by email</Button>
    </div>
  </article>);
}
Object.assign(window,{PostScreen});
