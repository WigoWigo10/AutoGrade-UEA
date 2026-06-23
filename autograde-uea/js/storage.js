// ── STORAGE com cache em memória ─────────────────────────────────────────────
const SK='eca_data_v2';
let _cache=null;

function _loadStore(){
  if(_cache!==null)return _cache;
  try{_cache=JSON.parse(localStorage.getItem(SK)||'{}');}catch{_cache={};}
  return _cache;
}
function _saveStore(d){
  _cache=d;
  localStorage.setItem(SK,JSON.stringify(d));
}
const load=()=>_loadStore();
const save=d=>_saveStore(d);
const getSub=id=>{const s=load();return s[id]||{status:'pending',grade:'',semester:'',teachers:'',materials:'',notes:''}};
const setSub=(id,p)=>{const s=load();s[id]={...getSub(id),...p};save(s);};
