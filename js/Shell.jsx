const {NavBar,IconButton,Tooltip,ThemeSelector}=window.RivernateDesignSystem_665cb5;

function Shell({route,go,children}){
  const [scheme,setScheme]=React.useState(()=>{
    try{return JSON.parse(localStorage.getItem('rn-scheme'))||{theme:'',font:''}}catch(e){return {theme:'',font:''}}
  });
  React.useEffect(()=>{const el=document.documentElement;
    scheme.theme?el.setAttribute('data-theme',scheme.theme):el.removeAttribute('data-theme');
    scheme.font?el.setAttribute('data-font',scheme.font):el.removeAttribute('data-font');
    try{localStorage.setItem('rn-scheme',JSON.stringify(scheme))}catch(e){}},[scheme]);
  return (
    <div style={{minHeight:'100%',background:'var(--surface-page)',display:'flex',flexDirection:'column'}}>
      <NavBar items={['writing','projects','about']} active={route==='post'?'writing':route} onNavigate={go}
        right={<>
          <ThemeSelector theme={scheme.theme} font={scheme.font} onChange={setScheme}/>
          <Tooltip label="github" side="bottom"><IconButton name="github" label="GitHub" size="sm" variant="ghost" onClick={()=>window.open('https://github.com/rivernate','_blank')}/></Tooltip>
        </>}/>
      <main style={{flex:1,width:'100%',maxWidth:'var(--content-max)',margin:'0 auto',padding:'var(--sp-9) var(--sp-6) var(--sp-11)'}}>{children}</main>
      <footer style={{borderTop:'var(--rule)',padding:'var(--sp-5) var(--sp-6)'}}>
        <div style={{maxWidth:'var(--content-max)',margin:'0 auto',display:'flex',justifyContent:'space-between',
          gap:'var(--sp-4)',flexWrap:'wrap',fontSize:'var(--fs-tiny)',color:'var(--text-faint)'}}>
          <span>rivernate.com — built with plain html, deployed on push</span>
          <a href="https://github.com/rivernate/rivernate.com" style={{border:'none',color:'var(--text-faint)'}}>source</a>
        </div>
      </footer>
    </div>);
}
Object.assign(window,{Shell});
