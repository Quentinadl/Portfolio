import React, { createContext, useContext, useEffect, useState } from 'react'


const LanguageContext = createContext()


export function LanguageProvider({ children }){
const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'fr')
const [strings, setStrings] = useState({})
const [loading, setLoading] = useState(true)


useEffect(()=>{
let mounted = true
const load = async (code)=>{
try{
const r = await fetch(`/lang/${code}.json`, {cache:'no-cache'})
if(!r.ok) throw new Error('not found')
const j = await r.json()
if(mounted) setStrings(j)
}catch(e){
// fallback built-in minimal strings
const builtin = code === 'en' ? (await import('../../public/lang/en.json')).default : (await import('../../public/lang/fr.json')).default
if(mounted) setStrings(builtin)
}finally{ if(mounted) setLoading(false) }
}
load(lang)
return ()=>{ mounted = false }
}, [lang])


useEffect(()=>{ localStorage.setItem('lang', lang) }, [lang])


return (
<LanguageContext.Provider value={{ lang, setLang, strings, loading }}>
{children}
</LanguageContext.Provider>
)
}


export function useLanguage(){ return useContext(LanguageContext) }