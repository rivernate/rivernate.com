const {TerminalWindow,Prompt,Input,Textarea,Button,Checkbox,Callout,Select,IconButton,Tooltip}=window.RivernateDesignSystem_665cb5;

const CONTACT_ADDR=['contact','rivernate.com'].join('@');

function AboutScreen(){
  const [cc,setCc]=React.useState(true);
  const [form,setForm]=React.useState({name:'',email:'',reason:'a post',message:''});
  const set=(k)=>(e)=>setForm(f=>({...f,[k]:e.target.value}));
  const submit=(e)=>{
    e.preventDefault();
    const subject=encodeURIComponent('rivernate.com — '+form.reason+(form.name?' — '+form.name:''));
    const body=encodeURIComponent(form.message+(form.email?'\n\n— '+form.email:''));
    window.location.href='mailto:'+CONTACT_ADDR+'?subject='+subject+'&body='+body+(cc&&form.email?'&cc='+encodeURIComponent(form.email):'');
  };
  return (<div style={{display:'flex',flexDirection:'column',gap:'var(--sp-7)'}}>
    <h1 style={{fontSize:'var(--fs-h2)'}}>about</h1>
    <TerminalWindow title="~/about">
      <Prompt command="cat bio.txt"/>
      <div style={{color:'var(--text-secondary)',maxWidth:'var(--measure)'}}>
        Nathan Mills. backend and infrastructure engineer. I like systems that are legible at 3am
        and boring the rest of the time.
      </div>
      <div style={{marginTop:'var(--sp-3)'}}><Prompt command="uname -a"/></div>
      <div style={{color:'var(--text-muted)'}}>NixOS (flakes) · Hyprland · zsh</div>
      <div style={{marginTop:'var(--sp-3)'}}><Prompt command="cat contact.txt"/></div>
      <div style={{display:'flex',alignItems:'center',gap:'var(--sp-3)'}}>
        <span style={{color:'var(--text-muted)'}}>salt lake city · replies within a week</span>
        <Tooltip label="linkedin"><IconButton name="linkedin" label="LinkedIn" size="sm" variant="ghost" onClick={()=>window.open('https://www.linkedin.com/in/nathan-mills/','_blank')}/></Tooltip>
      </div>
    </TerminalWindow>

    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--sp-6)'}}>
      <form style={{display:'flex',flexDirection:'column',gap:'var(--sp-4)'}} onSubmit={submit}>
        <span style={{font:'var(--fw-medium) var(--fs-micro)/1 var(--font-mono)',letterSpacing:'var(--ls-caps)',
          textTransform:'uppercase',color:'var(--text-muted)'}}>get in touch</span>
        <Input label="name" placeholder="who is this" value={form.name} onChange={set('name')}/>
        <Input label="email" prefix="@" placeholder="you@host" type="email" value={form.email} onChange={set('email')} required/>
        <Select label="about" options={['a post','a project','work','something else']} value={form.reason} onChange={set('reason')}/>
        <Textarea label="message" rows={4} placeholder="keep it short" value={form.message} onChange={set('message')} required/>
        <Checkbox label="cc me a copy" checked={cc} onChange={e=>setCc(e.target.checked)}/>
        <div><Button type="submit" variant="primary" prefix="$">send</Button></div>
      </form>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-4)'}}>
        <Callout tone="note" title="no newsletter">
          No analytics, no cookie banner, no popup — just email if you want to reach me.
        </Callout>
        <Callout tone="accent" title="uses">
          NixOS, configured declaratively with flakes · Hyprland · Neovim · zsh · tmux.
        </Callout>
      </div>
    </div>
  </div>);
}
Object.assign(window,{AboutScreen});
