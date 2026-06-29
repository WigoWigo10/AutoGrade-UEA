// ── PERIOD COLORS ────────────────────────────────────────────────────────────
const PC=[null,
  {main:'#ff6b6b',light:'rgba(255,107,107,.11)'},
  {main:'#ff9f43',light:'rgba(255,159,67,.11)'},
  {main:'#f7d794',light:'rgba(247,215,148,.11)'},
  {main:'#26de81',light:'rgba(38,222,129,.11)'},
  {main:'#45aaf2',light:'rgba(69,170,242,.11)'},
  {main:'#a29bfe',light:'rgba(162,155,254,.11)'},
  {main:'#fd79a8',light:'rgba(253,121,168,.11)'},
  {main:'#fdcb6e',light:'rgba(253,203,110,.11)'},
  {main:'#55efc4',light:'rgba(85,239,196,.11)'},
  {main:'#74b9ff',light:'rgba(116,185,255,.11)'},
];

// ── DATA ─────────────────────────────────────────────────────────────────────
const DATA={
"ECA_2014":[
  // ── 1º PERÍODO ──
  {id:'com_exp',   name:'Comunicação e Expressão',              code:'ESTBAS006', period:1,  hours:'60h',  pre:[],                              unlocks:[]},
  {id:'fis1',      name:'Física I',                              code:'ESTBAS007', period:1,  hours:'60h',  pre:[],                              unlocks:['fis2','mec1','cont1','lab_cont1']},
  {id:'quim',      name:'Química Geral',                         code:'ESTBAS005', period:1,  hours:'60h',  pre:[],                              unlocks:[]},
  {id:'alglin1',   name:'Álgebra Linear I',                      code:'ESTBAS001', period:1,  hours:'60h',  pre:[],                              unlocks:['alglin2']},
  {id:'prog1',     name:'Ling. de Programação I',                code:'ESTECP001', period:1,  hours:'60h',  pre:[],                              unlocks:['prog2']},
  {id:'intro_amb', name:'Intro. Ciências do Ambiente',           code:'ESTBAS004', period:1,  hours:'30h',  pre:[],                              unlocks:[]},
  {id:'intro_eca', name:'Intro. à Eng. Controle e Automação',    code:'ESTBAS003', period:1,  hours:'30h',  pre:[],                              unlocks:[]},
  {id:'calc1',     name:'Cálculo I',                             code:'ESTBAS002', period:1,  hours:'90h',  pre:[],                              unlocks:['calc2','prob_est']},

  // ── 2º PERÍODO ──
  {id:'intro_econ',name:'Introdução à Economia',                 code:'ESTBAS017', period:2,  hours:'45h',  pre:[],                              unlocks:[]},
  {id:'fis2',      name:'Física II',                             code:'ESTBAS013', period:2,  hours:'60h',  pre:['fis1'],                        unlocks:['fis3','mec_flu','lab_fis1']},
  {id:'intro_adm', name:'Introdução à Administração',            code:'ESTBAS011', period:2,  hours:'45h',  pre:[],                              unlocks:[]},
  {id:'alglin2',   name:'Álgebra Linear II',                     code:'ESTBAS008', period:2,  hours:'60h',  pre:['alglin1'],                     unlocks:['sist_din']},
  {id:'prog2',     name:'Ling. de Programação II',               code:'ESTECP002', period:2,  hours:'60h',  pre:['prog1'],                       unlocks:[]},
  {id:'des_bas',   name:'Desenho Básico',                        code:'ESTBAS010', period:2,  hours:'60h',  pre:[],                              unlocks:[]},
  {id:'prob_est',  name:'Probabilidade e Estatística',           code:'ESTBAS012', period:2,  hours:'60h',  pre:['calc1'],                       unlocks:[]},
  {id:'calc2',     name:'Cálculo II',                            code:'ESTBAS009', period:2,  hours:'75h',  pre:['calc1'],                       unlocks:['calc3']},

  // ── 3º PERÍODO ──
  {id:'mec1',      name:'Mecânica I',                            code:'ESTECI002', period:3,  hours:'60h',  pre:['fis1'],                        unlocks:['mec_sol']},
  {id:'fis3',      name:'Física III',                            code:'ESTBAS015', period:3,  hours:'60h',  pre:['fis2'],                        unlocks:['fis4','lab_fis2','circ1','lab_circ1']},
  {id:'lab_fis1',  name:'Lab. de Física I',                      code:'ESTBAS016', period:3,  hours:'30h',  pre:['fis2'],                        unlocks:[]},
  {id:'mec_flu',   name:'Mecânica dos Fluídos',                  code:'ESTEME004', period:3,  hours:'60h',  pre:['fis2'],                        unlocks:[]},
  {id:'prat_prof', name:'Prática Profissional e Ética',          code:'ESTBAS022', period:3,  hours:'30h',  pre:[],                              unlocks:[]},
  {id:'intro_mat', name:'Intro. Ciências dos Materiais',         code:'ESTBAS025', period:3,  hours:'60h',  pre:[],                              unlocks:['proc_trans']},
  {id:'empreend',  name:'Empreendedorismo e Inovação',           code:'ESTEMA062', period:3,  hours:'45h',  pre:[],                              unlocks:[]},
  {id:'calc3',     name:'Cálculo III',                           code:'ESTBAS014', period:3,  hours:'75h',  pre:['calc2'],                       unlocks:['calc4','calc_num','sist_din']},
  {id:'intro_ca',  name:'Introdução ao Controle e Automação',    code:'ESTEMA001', period:3,  hours:'60h',  pre:[],                              unlocks:[]},

  // ── 4º PERÍODO ──
  {id:'mec_sol',   name:'Mecânica dos Sólidos',                  code:'ESTEME01',  period:4,  hours:'60h',  pre:['mec1'],                        unlocks:[]},
  {id:'fis4',      name:'Física IV',                             code:'ESTBAS018', period:4,  hours:'60h',  pre:['fis3'],                        unlocks:['eletromag']},
  {id:'lab_fis2',  name:'Lab. de Física II',                     code:'ESTBAS020', period:4,  hours:'30h',  pre:['fis3'],                        unlocks:[]},
  {id:'circ1',     name:'Circuitos Elétricos I',                 code:'ESTEEL001', period:4,  hours:'60h',  pre:['fis3'],                        unlocks:['circ2','elet_ana','lab_elet_ana','inst_ind','lab_inst','lab_circ2']},
  {id:'lab_circ1', name:'Lab. de Circuitos I',                   code:'ESTEEL002', period:4,  hours:'30h',  pre:['fis3'],                        unlocks:['lab_circ2','lab_elet_ana']},
  {id:'calc_num',  name:'Cálculo Numérico',                      code:'ESTEBAS049',period:4,  hours:'60h',  pre:['calc3'],                       unlocks:[]},
  {id:'sist_din',  name:'Sistemas Dinâmicos',                    code:'ESTEMA007', period:4,  hours:'60h',  pre:['calc3'],                       unlocks:[]},
  {id:'calc4',     name:'Cálculo IV',                            code:'ESTBAS019', period:4,  hours:'60h',  pre:['calc3'],                       unlocks:['sinais']},

  // ── 5º PERÍODO ──
  {id:'cont1',     name:'Controle I',                            code:'ESTEMT003', period:5,  hours:'60h',  pre:['fis1'],                        unlocks:['cont2','lab_cont1','lab_cont2']},
  {id:'lab_cont1', name:'Lab. de Controle I',                    code:'ESTEMA008', period:5,  hours:'30h',  pre:['fis1'],                        unlocks:['lab_cont2']},
  {id:'circ2',     name:'Circuitos Elétricos II',                code:'ESTEEL003', period:5,  hours:'60h',  pre:['circ1'],                       unlocks:['sist_pot']},
  {id:'elet_ana',  name:'Eletrônica Analógica',                  code:'ESTEMA003', period:5,  hours:'60h',  pre:['circ1'],                       unlocks:['elet_dig','lab_elet_dig']},
  {id:'inst_ind',  name:'Instrumentação Industrial',             code:'ESTEMA005', period:5,  hours:'60h',  pre:['circ1'],                       unlocks:['lab_inst']},
  {id:'lab_inst',  name:'Lab. de Instrumentação Industrial',     code:'ESTEMA006', period:5,  hours:'30h',  pre:['circ1'],                       unlocks:[]},
  {id:'lab_circ2', name:'Lab. de Circuitos Elétricos II',        code:'ESTEEL004', period:5,  hours:'30h',  pre:['circ1','lab_circ1'],           unlocks:[]},
  {id:'lab_elet_ana',name:'Lab. de Eletrônica Analógica',        code:'ESTEMA004', period:5,  hours:'45h',  pre:['circ1','lab_circ1'],           unlocks:[]},
  {id:'sinais',    name:'Análise de Sinais e Sistemas',          code:'ESTEMA002', period:5,  hours:'60h',  pre:['calc4'],                       unlocks:['mod_sim']},

  // ── 6º PERÍODO ──
  {id:'cont2',     name:'Controle II',                           code:'ESTEMT004', period:6,  hours:'60h',  pre:['cont1'],                       unlocks:['cont3','lab_cont3']},
  {id:'lab_cont2', name:'Lab. de Controle II',                   code:'ESTEMA010', period:6,  hours:'30h',  pre:['cont1','lab_cont1'],           unlocks:['lab_cont3']},
  {id:'sist_pot',  name:'Sist. Eletrônicos de Potência',         code:'ESTEMT006', period:6,  hours:'60h',  pre:['circ2'],                       unlocks:[]},
  {id:'elet_dig',  name:'Eletrônica Digital',                    code:'ESTMA009',  period:6,  hours:'60h',  pre:['elet_ana'],                    unlocks:[]},
  {id:'lab_elet_dig',name:'Lab. de Eletrônica Digital',          code:'ESTEMA061', period:6,  hours:'45h',  pre:['elet_ana'],                    unlocks:[]},
  {id:'proc_trans',name:'Processos de Transformação',            code:'ESTEMA013', period:6,  hours:'60h',  pre:['intro_mat'],                   unlocks:['gest_op']},
  {id:'eletromag', name:'Eletromagnetismo',                      code:'ESTEEL013', period:6,  hours:'60h',  pre:['fis4'],                        unlocks:['maq_elet','lab_maq']},
  {id:'mod_sim',   name:'Modelagem e Simulação de Sist. Disc.',  code:'ESTEMT001', period:6,  hours:'60h',  pre:['sinais'],                      unlocks:['auto_sup']},

  // ── 7º PERÍODO ──
  {id:'cont3',     name:'Controle III',                          code:'ESTEMAS015',period:7,  hours:'45h',  pre:['cont2'],                       unlocks:[]},
  {id:'lab_cont3', name:'Lab. de Controle III',                  code:'ESTEMAS018',period:7,  hours:'30h',  pre:['cont2','lab_cont2'],           unlocks:[]},
  {id:'estagio1',  name:'Estágio em ECA I',                      code:'ESTEMA011', period:7,  hours:'450h', pre:['com_exp','fis1','quim','alglin1','prog1','intro_amb','intro_eca','calc1','intro_econ','fis2','intro_adm','alglin2','prog2','des_bas','prob_est','calc2','mec1','fis3','lab_fis1','mec_flu','prat_prof','intro_mat','empreend','calc3','intro_ca','mec_sol','fis4','lab_fis2','circ1','lab_circ1','calc_num','sist_din','calc4','cont1','lab_cont1','circ2','elet_ana','inst_ind','lab_inst','lab_circ2','lab_elet_ana','sinais','cont2','lab_cont2','sist_pot','elet_dig','lab_elet_dig','proc_trans','eletromag','mod_sim'], unlocks:['estagio2']},
  {id:'hig_seg',   name:'Higiene e Segurança do Trabalho',       code:'ESTECI024', period:7,  hours:'60h',  pre:[],                              unlocks:[]},
  {id:'opt1_14',   name:'Optativa I',                            code:'—',         period:7,  hours:'—',    pre:[],                              unlocks:[],  optional:true},
  {id:'maq_elet',  name:'Máquinas Elétricas e Acionamentos',     code:'ESTEEL027', period:7,  hours:'60h',  pre:['eletromag'],                   unlocks:['lab_maq']},
  {id:'lab_maq',   name:'Lab. de Máquinas Elétricas',            code:'ESTEMA012', period:7,  hours:'45h',  pre:['eletromag'],                   unlocks:[]},

  // ── 8º PERÍODO ──
  {id:'opt2_14',   name:'Optativa II',                           code:'—',         period:8,  hours:'—',    pre:[],                              unlocks:[],  optional:true},
  {id:'opt3_14',   name:'Optativa III',                          code:'—',         period:8,  hours:'—',    pre:[],                              unlocks:[],  optional:true},
  {id:'estagio2',  name:'Estágio em ECA II',                     code:'ESTEMA021', period:8,  hours:'450h', pre:['estagio1'],                    unlocks:[]},
  {id:'cmd_elet',  name:'Comandos Eletropneumáticos e Hid.',     code:'ESTEMA031', period:8,  hours:'60h',  pre:['mec_flu'],                     unlocks:['lab_cmd']},
  {id:'opt4_14',   name:'Optativa IV',                           code:'—',         period:8,  hours:'—',    pre:[],                              unlocks:[],  optional:true},
  {id:'gest_op',   name:'Gestão de Operações',                   code:'ESTEMA017', period:8,  hours:'45h',  pre:['proc_trans'],                  unlocks:[]},

  // ── 9º PERÍODO ──
  {id:'tcc1',      name:'TCC I',                                  code:'ESTEMA036', period:9,  hours:'45h',  pre:['com_exp','fis1','quim','alglin1','prog1','intro_amb','intro_eca','calc1','intro_econ','fis2','intro_adm','alglin2','prog2','des_bas','prob_est','calc2','mec1','fis3','lab_fis1','mec_flu','prat_prof','intro_mat','empreend','calc3','intro_ca','mec_sol','fis4','lab_fis2','circ1','lab_circ1','calc_num','sist_din','calc4','cont1','lab_cont1','circ2','elet_ana','inst_ind','lab_inst','lab_circ2','lab_elet_ana','sinais','cont2','lab_cont2','sist_pot','elet_dig','lab_elet_dig','proc_trans','eletromag','mod_sim','cont3','lab_cont3','hig_seg','maq_elet','lab_maq'], unlocks:['tcc2']},
  {id:'top_esp1',  name:'Tópicos Especiais em ECA I',             code:'ESTEMA100', period:9,  hours:'60h',  pre:['com_exp','fis1','quim','alglin1','prog1','intro_amb','intro_eca','calc1','intro_econ','fis2','intro_adm','alglin2','prog2','des_bas','prob_est','calc2','mec1','fis3','lab_fis1','mec_flu','prat_prof','intro_mat','empreend','calc3','intro_ca','mec_sol','fis4','lab_fis2','circ1','lab_circ1','calc_num','sist_din','calc4','cont1','lab_cont1','circ2','elet_ana','inst_ind','lab_inst','lab_circ2','lab_elet_ana','sinais','cont2','lab_cont2','sist_pot','elet_dig','lab_elet_dig','proc_trans','eletromag','mod_sim'], unlocks:[]},
  {id:'opt5_14',   name:'Optativa V',                             code:'—',         period:9,  hours:'—',    pre:[],                              unlocks:[],  optional:true},
  {id:'lab_cmd',   name:'Lab. Comandos Eletropneumáticos e Hid.', code:'ESTMA820',  period:9,  hours:'30h',  pre:['cmd_elet'],                    unlocks:[]},
  {id:'opt6_14',   name:'Optativa VI',                            code:'—',         period:9,  hours:'—',    pre:[],                              unlocks:[],  optional:true},
  {id:'opt7_14',   name:'Optativa VII',                           code:'—',         period:9,  hours:'—',    pre:[],                              unlocks:[],  optional:true},
  {id:'auto_sup',  name:'Automação e Supervisão de Proc.',        code:'ESTEMA026', period:9,  hours:'45h',  pre:['mod_sim'],                     unlocks:[]},

  // ── 10º PERÍODO ──
  {id:'tcc2',      name:'TCC II',                                 code:'ESTEMA046', period:10, hours:'45h',  pre:['tcc1'],                        unlocks:[]},
  {id:'top_esp2',  name:'Tópicos Especiais em ECA II',            code:'ESTEMA102', period:10, hours:'60h',  pre:['com_exp','fis1','quim','alglin1','prog1','intro_amb','intro_eca','calc1','intro_econ','fis2','intro_adm','alglin2','prog2','des_bas','prob_est','calc2','mec1','fis3','lab_fis1','mec_flu','prat_prof','intro_mat','empreend','calc3','intro_ca','mec_sol','fis4','lab_fis2','circ1','lab_circ1','calc_num','sist_din','calc4','cont1','lab_cont1','lab_circ2','elet_ana','inst_ind','lab_inst','lab_elet_ana','sinais','cont2','lab_cont2','sist_pot','elet_dig','lab_elet_dig','proc_trans','eletromag','mod_sim'], unlocks:[]},
  {id:'opt8_14',   name:'Optativa VIII',                          code:'—',         period:10, hours:'—',    pre:[],                              unlocks:[],  optional:true},
  {id:'opt9_14',   name:'Optativa IX',                            code:'—',         period:10, hours:'—',    pre:[],                              unlocks:[],  optional:true},
  {id:'opt10_14',  name:'Optativa X',                             code:'—',         period:10, hours:'—',    pre:[],                              unlocks:[],  optional:true},
],
"ECA_2023":[
  // ── 1º PERÍODO ──
  {id:'com_exp_23',     name:'Comunicação e Expressão',           code:'ESTBAS006', period:1,  hours:'60h',  pre:[],                              unlocks:[]},
  {id:'intro_eca_23',   name:'Intro. Eng. Controle e Aut.',       code:'ESTEMA103', period:1,  hours:'30h',  pre:[],                              unlocks:['intro_ca_23','inst_bas_23']},
  {id:'intro_amb_23',   name:'Intro. Ciências do Ambiente',       code:'ESTBAS004', period:1,  hours:'30h',  pre:[],                              unlocks:[]},
  {id:'fis1_23',        name:'Física I',                          code:'ESTBAS007', period:1,  hours:'60h',  pre:[],                              unlocks:['fis2_23','mec_sol_23']},
  {id:'quim_23',        name:'Química Geral',                     code:'ESTBAS005', period:1,  hours:'60h',  pre:[],                              unlocks:['intro_mat_23']},
  {id:'alglin1_23',     name:'Álgebra Linear I',                  code:'ESTBAS001', period:1,  hours:'60h',  pre:[],                              unlocks:['alglin2_23']},
  {id:'prog1_23',       name:'Ling. de Programação I',            code:'ESTECP001', period:1,  hours:'60h',  pre:[],                              unlocks:['prog2_23']},
  {id:'calc1_23',       name:'Cálculo I',                         code:'ESTBAS002', period:1,  hours:'90h',  pre:[],                              unlocks:['calc2_23','prob_est_23','intro_adm_23']},
  {id:'intro_econ_23',  name:'Introdução à Economia',             code:'ESTBAS017', period:1,  hours:'45h',  pre:[],                              unlocks:[]},

  // ── 2º PERÍODO ──
  {id:'fis2_23',        name:'Física II',                         code:'ESTBAS013', period:2,  hours:'60h',  pre:['fis1_23'],                     unlocks:['fis3_23','fen_trans_23','lab_fis1_23']},
  {id:'alglin2_23',     name:'Álgebra Linear II',                 code:'ESTBAS008', period:2,  hours:'60h',  pre:['alglin1_23'],                  unlocks:[]},
  {id:'prog2_23',       name:'Ling. de Programação II',           code:'ESTECP002', period:2,  hours:'60h',  pre:['prog1_23'],                    unlocks:[]},
  {id:'prob_est_23',    name:'Probabilidade e Estatística',       code:'ESTBAS012', period:2,  hours:'60h',  pre:['calc1_23'],                    unlocks:[]},
  {id:'calc2_23',       name:'Cálculo II',                        code:'ESTBAS009', period:2,  hours:'75h',  pre:['calc1_23'],                    unlocks:['met_mat_23','calc_vet_23']},
  {id:'des_tec_23',     name:'Desenho Técnico Ass. Comp.',        code:'ESTEMA201', period:2,  hours:'60h',  pre:[],                              unlocks:[]},
  {id:'intro_adm_23',   name:'Introdução à Administração',        code:'ESTBAS011', period:2,  hours:'45h',  pre:['calc1_23'],                    unlocks:[]},

  // ── 3º PERÍODO ──
  {id:'fis3_23',        name:'Física III',                        code:'ESTBAS015', period:3,  hours:'60h',  pre:['fis2_23'],                     unlocks:['fis4_23','circ1_23','lab_circ1_23','lab_fis2_23']},
  {id:'lab_fis1_23',    name:'Lab. Física I',                     code:'ESTBAS016', period:3,  hours:'30h',  pre:['fis2_23'],                     unlocks:[]},
  {id:'mec_sol_23',     name:'Mecânica dos Sólidos',              code:'ESTEMA301', period:3,  hours:'60h',  pre:['fis1_23'],                     unlocks:[]},
  {id:'fen_trans_23',   name:'Fenômenos de Transporte',           code:'ESTEMA302', period:3,  hours:'60h',  pre:['fis2_23'],                     unlocks:['cmd_pn_23']},
  {id:'intro_mat_23',   name:'Intro. Ciências dos Materiais',     code:'ESTEMA305', period:3,  hours:'60h',  pre:['quim_23'],                     unlocks:['proc_fab_23']},
  {id:'inst_bas_23',    name:'Instrumentação Básica',             code:'ESTEMA304', period:3,  hours:'45h',  pre:['intro_eca_23'],                unlocks:[]},
  {id:'intro_ca_23',    name:'Intro. Controle e Automação',       code:'ESTEMA303', period:3,  hours:'30h',  pre:['intro_eca_23'],                unlocks:['sist_ev_23']},
  {id:'met_mat_23',     name:'Métodos Matemáticos',               code:'ESTEMA300', period:3,  hours:'60h',  pre:['calc2_23'],                    unlocks:['sist_din_23','sinais_23','calc_num_23']},
  {id:'prat_prof_23',   name:'Prática Profissional e Ética',      code:'ESTBAS022', period:3,  hours:'60h',  pre:[],                              unlocks:[]},

  // ── 4º PERÍODO ──
  {id:'fis4_23',        name:'Física IV',                         code:'ESTBAS018', period:4,  hours:'60h',  pre:['fis3_23'],                     unlocks:[]},
  {id:'lab_fis2_23',    name:'Lab. Física II',                    code:'ESTBAS020', period:4,  hours:'30h',  pre:['fis3_23'],                     unlocks:[]},
  {id:'circ1_23',       name:'Circuitos Elétricos I',             code:'ESTEEL001', period:4,  hours:'60h',  pre:['fis3_23'],                     unlocks:['circ2_23','elet_ana_23','lab_circ2_23','lab_elet_ana_23','inst_ind_23','lab_inst_23']},
  {id:'lab_circ1_23',   name:'Lab. Circuitos Elétricos I',        code:'ESTEMA403', period:4,  hours:'30h',  pre:['fis3_23'],                     unlocks:['lab_circ2_23','lab_elet_ana_23','lab_inst_23']},
  {id:'calc_vet_23',    name:'Cálculo Vetorial',                  code:'ESTEMA400', period:4,  hours:'75h',  pre:['calc2_23'],                    unlocks:[]},
  {id:'sinais_23',      name:'Sinais e Sistemas',                 code:'ESTEMA401', period:4,  hours:'60h',  pre:['met_mat_23'],                  unlocks:[]},
  {id:'sist_din_23',    name:'Sistemas Dinâmicos',                code:'ESTEMA007', period:4,  hours:'60h',  pre:['met_mat_23'],                  unlocks:['cont1_23','lab_cont1_23']},
  {id:'calc_num_23',    name:'Cálculo Numérico',                  code:'ESTBAS049', period:4,  hours:'60h',  pre:['met_mat_23'],                  unlocks:[]},

  // ── 5º PERÍODO ──
  {id:'circ2_23',       name:'Circuitos Elétricos II',            code:'ESTEEL003', period:5,  hours:'60h',  pre:['circ1_23'],                    unlocks:['sist_pot_23']},
  {id:'elet_ana_23',    name:'Eletrônica Analógica',              code:'ESTEMA003', period:5,  hours:'60h',  pre:['circ1_23'],                    unlocks:['elet_dig_23','lab_elet_dig_23']},
  {id:'inst_ind_23',    name:'Instrumentação Industrial',         code:'ESTEMA005', period:5,  hours:'60h',  pre:['circ1_23'],                    unlocks:[]},
  {id:'cont1_23',       name:'Controle I',                        code:'ESTEMA500', period:5,  hours:'60h',  pre:['sist_din_23'],                 unlocks:['cont2_23','lab_cont2_23']},
  {id:'lab_cont1_23',   name:'Lab. Controle I',                   code:'ESTEMA501', period:5,  hours:'45h',  pre:['sist_din_23'],                 unlocks:['lab_cont2_23']},
  {id:'sist_ev_23',     name:'Sist. a Eventos Discretos',         code:'ESTEMA402', period:5,  hours:'60h',  pre:['intro_ca_23'],                 unlocks:['auto_sist1_23']},
  {id:'lab_circ2_23',   name:'Lab. Circuitos Elétricos II',       code:'ESTEEL004', period:5,  hours:'30h',  pre:['circ1_23','lab_circ1_23'],     unlocks:[]},
  {id:'lab_elet_ana_23',name:'Lab. Eletrônica Analógica',         code:'ESTEMA004', period:5,  hours:'45h',  pre:['circ1_23','lab_circ1_23'],     unlocks:[]},
  {id:'lab_inst_23',    name:'Lab. Instrumentação Industrial',    code:'ESTEMA006', period:5,  hours:'30h',  pre:['circ1_23','lab_circ1_23'],     unlocks:[]},

  // ── 6º PERÍODO ──
  {id:'sist_pot_23',    name:'Sist. Eletrônicos de Potência',     code:'ESTMT006',  period:6,  hours:'60h',  pre:['circ2_23'],                    unlocks:['maq_elet_23']},
  {id:'elet_dig_23',    name:'Eletrônica Digital',                code:'ESTEMA009', period:6,  hours:'60h',  pre:['elet_ana_23'],                 unlocks:['micro_23']},
  {id:'lab_elet_dig_23',name:'Lab. Eletrônica Digital',           code:'ESTEMA061', period:6,  hours:'45h',  pre:['elet_ana_23'],                 unlocks:[]},
  {id:'hig_seg_23',     name:'Higiene e Segurança',               code:'ESTECI024', period:6,  hours:'60h',  pre:[],                              unlocks:[]},
  {id:'proc_fab_23',    name:'Proc. de Fabricação Mecânica',      code:'ESTEMA502', period:6,  hours:'60h',  pre:['intro_mat_23'],                unlocks:['gest_op_23']},
  {id:'cont2_23',       name:'Controle II',                       code:'ESTEMA600', period:6,  hours:'60h',  pre:['cont1_23'],                    unlocks:['cont3_23','lab_cont3_23']},
  {id:'auto_sist1_23',  name:'Automação de Sistemas I',           code:'ESTEMA503', period:6,  hours:'60h',  pre:['sist_ev_23'],                  unlocks:['redes_ind_23']},
  {id:'lab_cont2_23',   name:'Lab. Controle II',                  code:'ESTEMA601', period:6,  hours:'30h',  pre:['cont1_23','lab_cont1_23'],     unlocks:['lab_cont3_23']},

  // ── 7º PERÍODO ──
  {id:'maq_elet_23',    name:'Máquinas Elétricas e Acion.',       code:'ESTEEL027', period:7,  hours:'60h',  pre:['sist_pot_23'],                 unlocks:['lab_maq_23']},
  {id:'micro_23',       name:'Microcontroladores',                code:'ESTEMA700', period:7,  hours:'45h',  pre:['elet_dig_23'],                 unlocks:['auto_sist2_23']},
  {id:'cont3_23',       name:'Controle III',                      code:'ESTEMA701', period:7,  hours:'60h',  pre:['cont2_23'],                    unlocks:['cont_dig_23','robotica_23','cont_proc_23']},
  {id:'estagio1_23',    name:'Estágio Supervisionado I em ECA',   code:'ESTEMA602', period:7,  hours:'390h', pre:['alglin1_23','calc1_23','intro_eca_23','intro_amb_23','quim_23','com_exp_23','fis1_23','prog1_23','alglin2_23','calc2_23','des_tec_23','intro_adm_23','prob_est_23','fis2_23','prog2_23','intro_econ_23','met_mat_23','fis3_23','lab_fis1_23','prat_prof_23','mec_sol_23','fen_trans_23','intro_ca_23','inst_bas_23','intro_mat_23','fis4_23','calc_vet_23','lab_fis2_23','calc_num_23','sist_din_23','sinais_23','circ1_23','lab_circ1_23','circ2_23','lab_circ2_23','elet_ana_23','lab_elet_ana_23','inst_ind_23','lab_inst_23','sist_ev_23','cont1_23','lab_cont1_23','elet_dig_23','lab_elet_dig_23','proc_fab_23','sist_pot_23','auto_sist1_23','hig_seg_23','cont2_23','lab_cont2_23'], unlocks:['estagio2_23']},
  {id:'cmd_pn_23',      name:'Comandos Pneumáticos e Hid.',       code:'ESTEMA603', period:7,  hours:'60h',  pre:['fen_trans_23'],                unlocks:['lab_cmd_23']},
  {id:'lab_cont3_23',   name:'Lab. Controle III',                 code:'ESTEMA702', period:7,  hours:'30h',  pre:['cont2_23','lab_cont2_23'],     unlocks:[]},

  // ── 8º PERÍODO ──
  {id:'lab_maq_23',     name:'Lab. Máq. Elétricas e Acion.',      code:'ESTEMA704', period:8,  hours:'45h',  pre:['maq_elet_23'],                 unlocks:[]},
  {id:'lab_cmd_23',     name:'Lab. Comandos Eletropneumáticos',   code:'ESTEMA020', period:8,  hours:'30h',  pre:['cmd_pn_23'],                   unlocks:[]},
  {id:'cont_dig_23',    name:'Controle Digital',                  code:'ESTEMA705', period:8,  hours:'60h',  pre:['cont3_23'],                    unlocks:[]},
  {id:'gest_op_23',     name:'Gestão de Operações de Manuf.',     code:'ESTEMA801', period:8,  hours:'30h',  pre:['proc_fab_23'],                 unlocks:[]},
  {id:'estagio2_23',    name:'Estágio Supervisionado II em ECA',  code:'ESTEMA703', period:8,  hours:'390h', pre:['estagio1_23'],                 unlocks:[]},
  {id:'redes_ind_23',   name:'Redes Industriais de Comunic.',     code:'ESTEMA024', period:8,  hours:'60h',  pre:['auto_sist1_23'],               unlocks:[]},
  {id:'auto_sist2_23',  name:'Automação de Sistemas II',          code:'ESTEMA802', period:8,  hours:'45h',  pre:['micro_23'],                    unlocks:['auto_sist3_23']},
  {id:'opt1_23',        name:'Optativa I',                        code:'—',         period:8,  hours:'—',    pre:[],                              unlocks:[],  optional:true},

  // ── 9º PERÍODO ──
  {id:'tcc1_23',        name:'TCC I',                             code:'ESTEMA803', period:9,  hours:'45h',  pre:['alglin1_23','calc1_23','intro_eca_23','intro_amb_23','quim_23','com_exp_23','fis1_23','prog1_23','alglin2_23','calc2_23','des_tec_23','intro_adm_23','prob_est_23','fis2_23','prog2_23','intro_econ_23','met_mat_23','fis3_23','lab_fis1_23','prat_prof_23','mec_sol_23','fen_trans_23','intro_ca_23','inst_bas_23','intro_mat_23','fis4_23','calc_vet_23','lab_fis2_23','calc_num_23','sist_din_23','sinais_23','circ1_23','lab_circ1_23','circ2_23','lab_circ2_23','elet_ana_23','lab_elet_ana_23','inst_ind_23','lab_inst_23','sist_ev_23','cont1_23','lab_cont1_23','elet_dig_23','lab_elet_dig_23','proc_fab_23','sist_pot_23','auto_sist1_23','hig_seg_23','cont2_23','lab_cont2_23','estagio1_23','cmd_pn_23','maq_elet_23','micro_23','cont3_23','lab_cont3_23'], unlocks:['tcc2_23']},
  {id:'auto_sist3_23',  name:'Automação de Sistemas III',         code:'ESTEMA900', period:9,  hours:'60h',  pre:['auto_sist2_23'],               unlocks:[]},
  {id:'top_esp1_23',    name:'Tópicos Especiais em ECA I',        code:'ESTEMA804', period:9,  hours:'60h',  pre:['alglin1_23','calc1_23','intro_eca_23','intro_amb_23','quim_23','com_exp_23','fis1_23','prog1_23','alglin2_23','calc2_23','des_tec_23','intro_adm_23','prob_est_23','fis2_23','prog2_23','intro_econ_23','met_mat_23','fis3_23','lab_fis1_23','prat_prof_23','mec_sol_23','fen_trans_23','intro_ca_23','inst_bas_23','intro_mat_23','fis4_23','calc_vet_23','lab_fis2_23','calc_num_23','sist_din_23','sinais_23','circ1_23','lab_circ1_23','circ2_23','lab_circ2_23','elet_ana_23','lab_elet_ana_23','inst_ind_23','lab_inst_23','sist_ev_23','cont1_23','lab_cont1_23','elet_dig_23','lab_elet_dig_23','proc_fab_23','sist_pot_23','auto_sist1_23','hig_seg_23','cont2_23','lab_cont2_23'], unlocks:[]},
  {id:'opt2_23',        name:'Optativa II',                       code:'—',         period:9,  hours:'—',    pre:[],                              unlocks:[],  optional:true},
  {id:'opt3_23',        name:'Optativa III',                      code:'—',         period:9,  hours:'—',    pre:[],                              unlocks:[],  optional:true},

  // ── 10º PERÍODO ──
  {id:'tcc2_23',        name:'TCC II',                            code:'ESTEMA902', period:10, hours:'45h',  pre:['tcc1_23'],                     unlocks:[]},
  {id:'cont_proc_23',   name:'Controle de Processos',             code:'ESTEMA901', period:10, hours:'60h',  pre:['cont3_23'],                    unlocks:[]},
  {id:'gest_proj_23',   name:'Gestão de Projetos',                code:'ESTEMT048', period:10, hours:'60h',  pre:[],                              unlocks:[]},
  {id:'robotica_23',    name:'Robótica Industrial',               code:'ESTEMT015', period:10, hours:'60h',  pre:['cont3_23'],                    unlocks:[]},
  {id:'top_esp2_23',    name:'Tópicos Especiais em ECA II',       code:'ESTEMA903', period:10, hours:'60h',  pre:['alglin1_23','calc1_23','intro_eca_23','intro_amb_23','quim_23','com_exp_23','fis1_23','prog1_23','alglin2_23','calc2_23','des_tec_23','intro_adm_23','prob_est_23','fis2_23','prog2_23','intro_econ_23','met_mat_23','fis3_23','lab_fis1_23','prat_prof_23','mec_sol_23','fen_trans_23','intro_ca_23','inst_bas_23','intro_mat_23','fis4_23','calc_vet_23','lab_fis2_23','calc_num_23','sist_din_23','sinais_23','circ1_23','lab_circ1_23','circ2_23','lab_circ2_23','elet_ana_23','lab_elet_ana_23','inst_ind_23','lab_inst_23','sist_ev_23','cont1_23','lab_cont1_23','elet_dig_23','lab_elet_dig_23','proc_fab_23','sist_pot_23','auto_sist1_23','hig_seg_23','cont2_23','lab_cont2_23'], unlocks:[]},
  {id:'empr_23',        name:'Empreendedorismo e Inovação',       code:'ESTEMA904', period:10, hours:'60h',  pre:[],                              unlocks:[]},
  {id:'opt4_23',        name:'Optativa IV',                       code:'—',         period:10, hours:'—',    pre:[],                              unlocks:[],  optional:true},
  {id:'opt5_23',        name:'Optativa V',                        code:'—',         period:10, hours:'—',    pre:[],                              unlocks:[],  optional:true},
]
};

// ── COMPUTAÇÃO 2018 (ECP_2018 / EST08MCPD) ───────────────────────────────────
// All IDs prefixed with cp_ to avoid localStorage collision with ECA subjects.
DATA["CMP_2018"]=[
  // ── 1º PERÍODO ──
  {id:'cp_alglin1',    name:'Álgebra Linear I',                          code:'ESTBAS001', period:1,  hours:'60h',  pre:[],                unlocks:['cp_alglin2']},
  {id:'cp_calc1',      name:'Cálculo I',                                 code:'ESTBAS002', period:1,  hours:'90h',  pre:[],                unlocks:['cp_calc2','cp_prob_est']},
  {id:'cp_intro_eng',  name:'Introdução à Engenharia',                   code:'ESTBAS003', period:1,  hours:'30h',  pre:[],                unlocks:[]},
  {id:'cp_intro_amb',  name:'Introdução às Ciências do Ambiente',        code:'ESTBAS004', period:1,  hours:'30h',  pre:[],                unlocks:[]},
  {id:'cp_quim',       name:'Química Geral',                             code:'ESTBAS005', period:1,  hours:'60h',  pre:[],                unlocks:[]},
  {id:'cp_com_exp',    name:'Comunicação e Expressão',                   code:'ESTBAS006', period:1,  hours:'60h',  pre:[],                unlocks:[]},
  {id:'cp_fis1',       name:'Física I',                                  code:'ESTBAS007', period:1,  hours:'60h',  pre:[],                unlocks:['cp_fis2']},
  {id:'cp_prog1',      name:'Introdução a Programação de Computadores',  code:'ESTCMP009', period:1,  hours:'60h',  pre:[],                unlocks:['cp_prog2']},

  // ── 2º PERÍODO ──
  {id:'cp_alglin2',    name:'Álgebra Linear II',                         code:'ESTBAS008', period:2,  hours:'60h',  pre:['cp_alglin1'],     unlocks:[]},
  {id:'cp_calc2',      name:'Cálculo II',                                code:'ESTBAS009', period:2,  hours:'75h',  pre:['cp_calc1'],       unlocks:['cp_circ1','cp_calc_comp']},
  {id:'cp_des_bas',    name:'Desenho Básico',                            code:'ESTBAS010', period:2,  hours:'60h',  pre:[],                unlocks:[]},
  {id:'cp_intro_adm',  name:'Introdução à Administração',                code:'ESTBAS011', period:2,  hours:'45h',  pre:[],                unlocks:['cp_empr']},
  {id:'cp_prob_est',   name:'Probabilidade e Estatística',               code:'ESTBAS050', period:2,  hours:'60h',  pre:['cp_calc1'],       unlocks:['cp_sim_desemp']},
  {id:'cp_fis2',       name:'Física II',                                 code:'ESTBAS013', period:2,  hours:'60h',  pre:['cp_fis1'],        unlocks:['cp_fis3','cp_lab_fis1','cp_mec']},
  {id:'cp_intro_econ', name:'Introdução à Economia',                     code:'ESTBAS017', period:2,  hours:'45h',  pre:[],                unlocks:[]},
  {id:'cp_prog2',      name:'Programação de Computadores e Algoritmos',  code:'ESTCMP010', period:2,  hours:'60h',  pre:['cp_prog1'],       unlocks:['cp_aesd1','cp_pp']},

  // ── 3º PERÍODO ──
  {id:'cp_aesd1',      name:'Algoritmos e Estrutura de Dados I',         code:'ESTCMP011', period:3,  hours:'60h',  pre:['cp_prog2'],       unlocks:['cp_aesd2']},
  {id:'cp_pp',         name:'Projeto de Programas',                      code:'ESTCMP021', period:3,  hours:'60h',  pre:['cp_prog2'],       unlocks:['cp_mps','cp_ihc']},
  {id:'cp_mat_disc',   name:'Matemática Discreta',                       code:'ESTCMP029', period:3,  hours:'60h',  pre:[],                unlocks:['cp_ftc','cp_grafos']},
  {id:'cp_circ1',      name:'Circuitos Elétricos I',                     code:'ESTEEL507', period:3,  hours:'60h',  pre:['cp_calc2'],       unlocks:['cp_elet1','cp_sd1']},
  {id:'cp_fis3',       name:'Física III',                                code:'ESTBAS015', period:3,  hours:'60h',  pre:['cp_fis2'],        unlocks:[]},
  {id:'cp_lab_fis1',   name:'Laboratório de Física I',                   code:'ESTBAS101', period:3,  hours:'30h',  pre:['cp_fis2'],        unlocks:[]},
  {id:'cp_calc_comp',  name:'Cálculo para Computação',                   code:'ESTECP103', period:3,  hours:'60h',  pre:['cp_calc2'],       unlocks:['cp_calc_num','cp_sinais']},
  {id:'cp_comp_eth',   name:'Computação, Ética, Homem e Sociedade',      code:'ESTCMP050', period:3,  hours:'60h',  pre:[],                unlocks:[]},

  // ── 4º PERÍODO ──
  {id:'cp_calc_num',   name:'Cálculo Numérico',                          code:'ESTBAS049', period:4,  hours:'60h',  pre:['cp_calc_comp'],   unlocks:[]},
  {id:'cp_aesd2',      name:'Algoritmos e Estrutura de Dados II',        code:'ESTCMP012', period:4,  hours:'60h',  pre:['cp_aesd1'],       unlocks:['cp_paa','cp_bd1']},
  {id:'cp_mps',        name:'Modelagem e Projeto de Sistemas',           code:'ESTCMP024', period:4,  hours:'60h',  pre:['cp_pp'],          unlocks:['cp_es']},
  {id:'cp_ftc',        name:'Fundamentos Teóricos da Computação',        code:'ESTCMP030', period:4,  hours:'60h',  pre:['cp_mat_disc'],    unlocks:['cp_ia1']},
  {id:'cp_elet1',      name:'Eletrônica I',                              code:'ESTEEL508', period:4,  hours:'60h',  pre:['cp_circ1'],       unlocks:[]},
  {id:'cp_sd1',        name:'Sistemas Digitais para Computação I',       code:'ESTCMP040', period:4,  hours:'60h',  pre:['cp_circ1'],       unlocks:['cp_sd2','cp_org_comp']},
  {id:'cp_met_cien',   name:'Metodologia Científica para Computação',    code:'ESTCMP051', period:4,  hours:'60h',  pre:[],                unlocks:[]},

  // ── 5º PERÍODO ──
  {id:'cp_paa',        name:'Projeto e Análise de Algoritmos',           code:'ESTCMP013', period:5,  hours:'60h',  pre:['cp_aesd2'],       unlocks:['cp_redes1']},
  {id:'cp_bd1',        name:'Banco de Dados I',                          code:'ESTCMP022', period:5,  hours:'60h',  pre:['cp_aesd2'],       unlocks:[]},
  {id:'cp_grafos',     name:'Teoria dos Grafos',                         code:'ESTCMP014', period:5,  hours:'60h',  pre:['cp_mat_disc'],    unlocks:[]},
  {id:'cp_sim_desemp', name:'Simulação e Análise de Desempenho',         code:'ESTCMP015', period:5,  hours:'60h',  pre:['cp_prob_est'],    unlocks:[]},
  {id:'cp_sd2',        name:'Sistemas Digitais para Computação II',      code:'ESTCMP041', period:5,  hours:'60h',  pre:['cp_sd1'],         unlocks:['cp_emb']},
  {id:'cp_sinais',     name:'Sinais e Sistemas',                         code:'ESTEEL012', period:5,  hours:'60h',  pre:['cp_calc_comp'],   unlocks:['cp_ctrl1','cp_pds']},
  {id:'cp_org_comp',   name:'Organização de Computadores',               code:'ESTCMP003', period:5,  hours:'60h',  pre:['cp_sd1'],         unlocks:['cp_so1','cp_arq_comp']},
  {id:'cp_mec',        name:'Fundamentos de Mecânica dos Sólidos e Fluídos', code:'ESTECI055', period:5, hours:'60h', pre:['cp_fis2'],      unlocks:[]},

  // ── 6º PERÍODO ──
  {id:'cp_hsa',        name:'Homem, Sociedade e Meio-Ambiente ou Tecnologia', code:'ESTECP116', period:6, hours:'60h', pre:[],              unlocks:[]},
  {id:'cp_ihc',        name:'Interação Homem - Computador',              code:'ESTCMP027', period:6,  hours:'60h',  pre:['cp_pp'],          unlocks:[]},
  {id:'cp_ia1',        name:'Inteligência Artificial I',                 code:'ESTCMP031', period:6,  hours:'60h',  pre:['cp_ftc'],         unlocks:[]},
  {id:'cp_es',         name:'Engenharia de Software',                    code:'ESTCMP025', period:6,  hours:'60h',  pre:['cp_mps'],         unlocks:['cp_top1','cp_top2','cp_top3','cp_top4']},
  {id:'cp_ctrl1',      name:'Sistemas de Controle I',                    code:'ESTEEL018', period:6,  hours:'60h',  pre:['cp_sinais'],      unlocks:[]},
  {id:'cp_so1',        name:'Sistemas Operacionais I',                   code:'ESTCMP007', period:6,  hours:'60h',  pre:['cp_org_comp'],    unlocks:[]},
  {id:'cp_arq_comp',   name:'Arquitetura de Computadores',               code:'ESTCMP004', period:6,  hours:'60h',  pre:['cp_org_comp'],    unlocks:[]},
  {id:'cp_mat_intro',  name:'Introdução à Ciência dos Materiais',        code:'ESTECP120', period:6,  hours:'60h',  pre:[],                unlocks:[]},

  // ── 7º PERÍODO ──
  {id:'cp_pds',        name:'Processamento Digital de Sinais',           code:'ESTEEL030', period:7,  hours:'60h',  pre:['cp_sinais'],      unlocks:['cp_cg_pdi']},
  {id:'cp_emb',        name:'Desenvolvimento de Sistemas Embarcados',    code:'ESTCMP042', period:7,  hours:'60h',  pre:['cp_sd2'],         unlocks:['cp_auto_ind']},
  {id:'cp_redes1',     name:'Redes de Computadores I',                   code:'ESTCMP016', period:7,  hours:'60h',  pre:['cp_paa'],         unlocks:['cp_spd','cp_redes2','cp_telecom']},
  {id:'cp_top1',       name:'Tópicos Especiais para Computação I',       code:'ESTCMP068', period:7,  hours:'60h',  pre:['cp_es'],          unlocks:[]},

  // ── 8º PERÍODO ──
  {id:'cp_cg_pdi',     name:'Computação Gráfica e PDI',                  code:'ESTECP127', period:8,  hours:'60h',  pre:['cp_pds'],         unlocks:[]},
  {id:'cp_empr',       name:'Empreendedorismo Digital I',                code:'ESTCMP034', period:8,  hours:'60h',  pre:['cp_intro_adm'],   unlocks:[]},
  {id:'cp_spd',        name:'Sistemas Paralelos e Distribuídos',         code:'ESTCMP020', period:8,  hours:'60h',  pre:['cp_redes1'],      unlocks:[]},
  {id:'cp_redes2',     name:'Redes de Computadores II',                  code:'ESTECP130', period:8,  hours:'60h',  pre:['cp_redes1'],      unlocks:[]},
  {id:'cp_top2',       name:'Tópicos Especiais para Computação II',      code:'ESTCMP069', period:8,  hours:'60h',  pre:['cp_es'],          unlocks:[]},
  {id:'opt1_cp',       name:'Optativa I',                                code:'—',         period:8,  hours:'—',    pre:[],                unlocks:[],  optional:true},

  // ── 9º PERÍODO ──
  {id:'cp_top3',       name:'Tópicos Especiais para Computação III',     code:'ESTCMP070', period:9,  hours:'60h',  pre:['cp_es'],          unlocks:[]},
  {id:'cp_telecom',    name:'Sistemas de Telecomunicações',              code:'ESTEEL024', period:9,  hours:'60h',  pre:['cp_redes1'],      unlocks:[]},
  {id:'cp_tcc1',       name:'TCC I',                                     code:'ESTCMP052', period:9,  hours:'45h',  pre:['cp_alglin1','cp_calc1','cp_intro_eng','cp_intro_amb','cp_quim','cp_com_exp','cp_fis1','cp_prog1','cp_alglin2','cp_calc2','cp_des_bas','cp_intro_adm','cp_prob_est','cp_fis2','cp_intro_econ','cp_prog2','cp_aesd1','cp_pp','cp_mat_disc','cp_circ1','cp_fis3','cp_lab_fis1','cp_calc_comp','cp_comp_eth','cp_calc_num','cp_aesd2','cp_mps','cp_ftc','cp_elet1','cp_sd1','cp_met_cien','cp_paa','cp_bd1','cp_grafos','cp_sim_desemp','cp_sd2','cp_sinais','cp_org_comp','cp_mec','cp_hsa','cp_ia1','cp_es','cp_ctrl1','cp_so1','cp_arq_comp','cp_mat_intro','cp_pds','cp_emb','cp_redes1','cp_top1','cp_cg_pdi','cp_empr','cp_spd','cp_redes2','cp_top2'], unlocks:['cp_tcc2']},
  {id:'cp_est1',       name:'Estágio Supervisionado em Eng. Computação I', code:'ESTECP135', period:9,  hours:'450h', pre:['cp_alglin1','cp_calc1','cp_intro_eng','cp_intro_amb','cp_quim','cp_com_exp','cp_fis1','cp_prog1','cp_alglin2','cp_calc2','cp_des_bas','cp_intro_adm','cp_prob_est','cp_fis2','cp_intro_econ','cp_prog2','cp_aesd1','cp_pp','cp_mat_disc','cp_circ1','cp_fis3','cp_lab_fis1','cp_calc_comp','cp_comp_eth','cp_calc_num','cp_aesd2','cp_mps','cp_ftc','cp_elet1','cp_sd1','cp_met_cien','cp_paa','cp_bd1','cp_grafos','cp_sim_desemp','cp_sd2','cp_sinais','cp_org_comp','cp_mec','cp_hsa','cp_ihc','cp_ia1','cp_es','cp_so1','cp_arq_comp','cp_mat_intro'], unlocks:['cp_est2']},
  {id:'opt2_cp',       name:'Optativa II',                               code:'—',         period:9,  hours:'—',    pre:[],                unlocks:[],  optional:true},

  // ── 10º PERÍODO ──
  {id:'cp_tcc2',       name:'TCC II',                                    code:'ESTCMP053', period:10, hours:'45h',  pre:['cp_tcc1'],        unlocks:[]},
  {id:'cp_auto_ind',   name:'Automação Industrial',                      code:'ESTECP139', period:10, hours:'60h',  pre:['cp_emb'],         unlocks:[]},
  {id:'cp_est2',       name:'Estágio Supervisionado em Eng. Computação II', code:'ESTECP140', period:10, hours:'450h', pre:['cp_est1'],     unlocks:[]},
  {id:'cp_top4',       name:'Tópicos Especiais em Computação IV',        code:'ESTECP136', period:10, hours:'60h',  pre:['cp_es'],          unlocks:[]},
];

// ── OPTATIVAS CATALOG (Grade 2014 — EST18MCAD EMA_2014) ─────────────────────
// pre arrays use UEA official codes; patchOptSlots() resolves them to IDs at runtime.
// Codes referencing OTHER optativas use the OPT_ECA key; obrigatórias use their CM_ECA code.
const OPT_ECA={
  'EST0826':   {name:'Língua Brasileira de Sinais (Libras)',         hours:'—',  pre:[]},
  'ESTECP014': {name:'Redes de Computadores I',                      hours:'—',  pre:[]},
  'ESTECP018': {name:'Redes de Computadores II',                     hours:'—',  pre:['ESTECP014']},
  'ESTECP024': {name:'Tecnologia WEB',                               hours:'—',  pre:['ESTECP014']},
  'ESTECP025': {name:'Interface Usuário-Sist. Computacionais',       hours:'—',  pre:['ESTEMT004']},
  'ESTECP038': {name:'Projeto de Sistemas Embarcados',               hours:'—',  pre:['ESTEMA022']},
  'ESTEEL007': {name:'Eletrônica II',                                hours:'—',  pre:[]},
  'ESTEEL008': {name:'Lab. de Eletrônica II',                        hours:'—',  pre:[]},
  'ESTEEL021': {name:'Tecnologia de Hardware Reprogramável',         hours:'—',  pre:[]},
  'ESTEEL029': {name:'Sist. de Comunicações Móveis Celulares',       hours:'—',  pre:['ESTEMA013']},
  'ESTEEL044': {name:'Processamento Digital de Imagens',             hours:'—',  pre:['ESTEMA002']},
  'ESTEEL046': {name:'Instalações Elétricas',                        hours:'—',  pre:[]},
  'ESTEEL063': {name:'Manutenção de Equip. Elétricos',               hours:'—',  pre:['ESTEEL001']},
  'ESTEMA019': {name:'Processamento e Controle Digital',             hours:'—',  pre:['ESTEMA004']},
  'ESTEMA022': {name:'Microprocessadores e Microcontroladores',      hours:'—',  pre:['ESTECP002','ESTEMA009']},
  'ESTEMA024': {name:'Redes Industriais de Comunicação',             hours:'—',  pre:['ESTECP014']},
  'ESTEMA029': {name:'Manufatura Integrada por Comp. e Robótica',    hours:'—',  pre:[]},
  'ESTEMA030': {name:'Inteligência Artificial Aplic. à Automação',   hours:'—',  pre:['ESTECP002']},
  'ESTEMA033': {name:'Planejamento e Gestão da Qualidade',           hours:'—',  pre:['ESTBAS012']},
  'ESTEMA034': {name:'Estágio Supervisionado III em ECA',            hours:'450h',pre:[]},
  'ESTEMA035': {name:'Estágio Supervisionado IV em ECA',             hours:'450h',pre:['ESTEMA011']},
  'ESTEMA037': {name:'Controle Robusto',                             hours:'—',  pre:['ESTEMA039']},
  'ESTEMA038': {name:'Controle Preditivo',                           hours:'—',  pre:['ESTEMA039']},
  'ESTEMA039': {name:'Controle Não Linear',                          hours:'—',  pre:['ESTEMT004']},
  'ESTEMA040': {name:'Identificação de Sist. de Controle',           hours:'—',  pre:['ESTEMT004']},
  'ESTEMA042': {name:'Estágio Supervisionado III em ECA',            hours:'450h',pre:['ESTEMA011']},
  'ESTEMA044': {name:'Comandos Eletropneumáticos I',                 hours:'—',  pre:['ESTEMA031']},
  'ESTEMA067': {name:'Sistema Supervisório',                         hours:'—',  pre:['ESTEMT001']},
  'ESTEME005': {name:'Intro. Projeto de Sist. Mecânicos',            hours:'—',  pre:['ESTBAS010']},
  'ESTEME036': {name:'Intro. Método dos Elementos Finitos',          hours:'—',  pre:['ESTBAS019']},
  'ESTEME041': {name:'Programação e Operação de CNC',                hours:'—',  pre:['ESTECP002']},
  'ESTEMT013': {name:'Projetos de Experimentos e Confiabilidade',    hours:'—',  pre:[]},
  'ESTEMT015': {name:'Robótica Industrial',                          hours:'—',  pre:['ESTBAS049']},
  'ESTEMT019': {name:'Nanotecnologia',                               hours:'—',  pre:[]},
  'ESTEMT020': {name:'Programação de Robôs',                         hours:'—',  pre:['ESTEMT015']},
  'ESTEMT024': {name:'Introdução à Biomecânica',                     hours:'—',  pre:[]},
  'ESTEMT027': {name:'Sistemas Microprocessados',                    hours:'—',  pre:['ESTEMA009']},
  'ESTEMT048': {name:'Gestão de Projeto',                            hours:'—',  pre:['ESTEME005']},
  'ESTEPR016': {name:'Projeto do Produto e Processo',                hours:'—',  pre:[]},
  'ESTEPR023': {name:'Sistemas de Gestão Ambiental',                 hours:'—',  pre:[]},
  'ESTEPR026': {name:'Gestão de Manutenção',                         hours:'—',  pre:[]},
  'ESTEPR203': {name:'Legislação da Zona Franca de Manaus',          hours:'—',  pre:[]},
};

// ── GRADE-2014 EQUIVALENCES (old/parallel codes → subject id) ───────────────
// These appear in PDFs when a student used an equivalent discipline to fulfil
// a grade-2014 slot. Checked before CM so they never fall through to null.
const EQUIV_ECA={
  'ESTEEL012':'sinais',       // Análise de Sinais e Sistemas (equiv ESTEMA002)
  'ESTEMA401':'sinais',       // idem (segunda equivalência)
  'ESTEEL009':'elet_dig',     // Eletrônica Digital (equiv ESTEMA009)
  'ESTEEL010':'lab_elet_dig', // Lab. Eletrônica Digital (equiv ESTEMA061)
  'ESTEMA060':'lab_elet_dig', // idem (segunda equivalência)
  'ESTEMA502':'proc_trans',   // Processos de Transformação (equiv ESTEMA013)
  'ESTEMA020':'lab_cmd',      // Lab. Comandos Eletropneumáticos (código atual)
  'ESTEEL054':'elet_ana',     // Eletrônica Analógica (equiv ESTEMA003)
  'ESTEEL057':'inst_ind',     // Instrumentação Industrial (equiv ESTEMA005)
  'ESTEEL022':'sist_pot',     // Sist. Eletrônicos de Potência (equiv ESTEMT006)
  'ESTEEL0503':'eletromag',   // Eletromagnetismo (equiv ESTEEL013)
  // TCC e Tópicos Especiais — códigos equivalentes/alternativos
  'ESTEMA023':'tcc1',     'ESTEMT018':'tcc1',     'ESTEMA803':'tcc1',
  'ESTEMA025':'tcc2',     'ESTEMT022':'tcc2',     'ESTEMA902':'tcc2',
  'ESTEMA101':'top_esp1', 'ESTEMT028':'top_esp1', 'ESTEMA804':'top_esp1',
  'ESTEMA903':'top_esp2',
};

// ── CODE MAP (histórico code → subject id in grade 2014) ────────────────────
const CM_ECA={
  // 1º Período
  'ESTBAS006':'com_exp',
  'ESTBAS007':'fis1',
  'ESTBAS005':'quim',
  'ESTBAS001':'alglin1',
  'ESTECP001':'prog1',
  'ESTBAS004':'intro_amb',   'ESTEBAS004':'intro_amb',
  'ESTBAS003':'intro_eca',   'ESTEBAS003':'intro_eca',
  'ESTBAS002':'calc1',
  // 2º Período
  'ESTBAS017':'intro_econ',
  'ESTBAS013':'fis2',
  'ESTBAS011':'intro_adm',
  'ESTBAS008':'alglin2',
  'ESTECP002':'prog2',
  'ESTBAS010':'des_bas',
  'ESTBAS012':'prob_est',
  'ESTBAS009':'calc2',
  // 3º Período
  'ESTECI002':'mec1',     'ESTBAS015':'fis3',     'ESTBAS016':'lab_fis1',
  'ESTEME004':'mec_flu',  'ESTBAS022':'prat_prof','ESTBAS025':'intro_mat',
  'ESTEMA062':'empreend', 'ESTBAS014':'calc3',    'ESTEMA001':'intro_ca',
  // 4º Período
  'ESTEME01':'mec_sol',   'ESTEME001':'mec_sol',  'ESTBAS018':'fis4',
  'ESTBAS020':'lab_fis2', 'ESTEEL001':'circ1',    'ESTEEL002':'lab_circ1',
  'ESTEBAS049':'calc_num','ESTBAS049':'calc_num', 'ESTEMA007':'sist_din',
  'ESTBAS019':'calc4',
  // 5º Período
  'ESTEMT003':'cont1',    'ESTEMA008':'lab_cont1','ESTEEL003':'circ2',
  'ESTEMA003':'elet_ana', 'ESTEMA005':'inst_ind', 'ESTEMA006':'lab_inst',
  'ESTEEL004':'lab_circ2','ESTEEL0206':'lab_circ2','ESTEMA004':'lab_elet_ana',
  'ESTEMA002':'sinais',
  // 6º Período
  'ESTEMT004':'cont2',    'ESTEMA010':'lab_cont2','ESTEMT006':'sist_pot',
  'ESTMA009':'elet_dig',  'ESTEMA009':'elet_dig', 'ESTEMA061':'lab_elet_dig',
  'ESTEMA013':'proc_trans','ESTEEL013':'eletromag','ESTEMT001':'mod_sim',
  // 7º Período
  'ESTEMAS015':'cont3',   'ESTEMA015':'cont3',    'ESTEMA701':'cont3',
  'ESTEMAS018':'lab_cont3','ESTEMA018':'lab_cont3','ESTEMA702':'lab_cont3',
  'ESTEMA011':'estagio1', 'ESTECI024':'hig_seg',
  'ESTEEL027':'maq_elet', 'ESTEMA012':'lab_maq',
  'ESTEMA601':'lab_cont2',
  // 8º Período
  'ESTEMA021':'estagio2', 'ESTEMA031':'cmd_elet', 'ESTEMA017':'gest_op',
  // 9º Período
  'ESTEMA036':'tcc1',  'ESTMA036':'tcc1',
  'ESTEMA100':'top_esp1', 'ESTMA100':'top_esp1',
  'ESTMA820':'lab_cmd',
  'ESTEMA026':'auto_sup', 'ESTMA026':'auto_sup',
  // 10º Período
  'ESTEMA046':'tcc2',     'ESTEMA102':'top_esp2',
  // Disciplinas fora da grade 2014 → null (optativas / grade 2023)
  // Nota: ESTEMA502 foi removido daqui — é tratado por EQUIV_ECA (grade 2014)
  //       e pelo fallback DATA[G] (grade 2023 → proc_fab_23)
  'ESTEMA300':null, 'ESTEMA302':null, 'ESTEEL0503':null, 'ESTEEL063':null,
  'ESTEMA033':null, 'ESTEMA039':null, 'ESTEEL021':null,  'ESTEMA030':null,
  'ESTEMT013':null, 'ESTEMT024':null, 'ESTEMA603':null,
};

// ── CMP_2018 OPTATIVAS CATALOG ────────────────────────────────────────────────
const OPT_CMP={
  'ESTCMP00233':{name:'Redes Neurais Artificiais',                       hours:'60h',  pre:[]},
  'ESTCMP005':  {name:'Paradigmas de Linguagens de Programação',         hours:'60h',  pre:[]},
  'ESTCMP023':  {name:'Banco de Dados II',                               hours:'60h',  pre:[]},
  'ESTCMP064':  {name:'Oficina de Desenvolvimento de Sistemas I',        hours:'60h',  pre:[]},
  'ESTCMP200':  {name:'Compiladores',                                    hours:'60h',  pre:[]},
  'ESTCMP212':  {name:'Desenvolvimento de Drivers de Dispositivo',       hours:'60h',  pre:[]},
  'ESTCMP213':  {name:'Computação Científica',                           hours:'60h',  pre:[]},
  'ESTCMP215':  {name:'Teoria da Informação',                            hours:'60h',  pre:[]},
  'ESTCMP216':  {name:'Programação Competitiva',                         hours:'60h',  pre:[]},
  'ESTCMP225':  {name:'Ciência de Dados I',                              hours:'60h',  pre:[]},
  'ESTCMP226':  {name:'Ciência de Dados II',                             hours:'60h',  pre:[]},
  'ESTCMP233':  {name:'Redes Neurais Artificiais',                       hours:'60h',  pre:[]},
  'ESTCMP240':  {name:'Sistemas Colaborativos',                          hours:'60h',  pre:[]},
  'ESTCMP241':  {name:'Computação Ubíqua e Pervasiva',                   hours:'60h',  pre:[]},
  'ESTCMP242':  {name:'Introdução à Visão Computacional',                hours:'60h',  pre:[]},
  'ESTCMP243':  {name:'Realidade Virtual Aumentada',                     hours:'60h',  pre:[]},
  'ESTCMP244':  {name:'Introdução à Criptografia',                       hours:'60h',  pre:[]},
  'ESTCMP245':  {name:'Computação Evolucionária',                        hours:'60h',  pre:[]},
  'ESTCMP246':  {name:'Mineração de Dados',                              hours:'60h',  pre:[]},
  'ESTCMP247':  {name:'Sistemas Fuzzy',                                  hours:'60h',  pre:[]},
  'ESTCMP248':  {name:'Banco de Dados Não Relacionais',                  hours:'60h',  pre:[]},
  'ESTCMP249':  {name:'Introdução à Robótica para Computação',           hours:'60h',  pre:[]},
  'ESTCMP250':  {name:'Representação do Conhecimento',                   hours:'60h',  pre:[]},
  'ESTCMP251':  {name:'Projeto Integrado de Hardware e Software',        hours:'60h',  pre:[]},
  'ESTECP021':  {name:'Robótica Industrial',                             hours:'60h',  pre:[]},
  'ESTECP024':  {name:'Tecnologia WEB',                                  hours:'60h',  pre:[]},
  'ESTECP027':  {name:'Computação Gráfica',                              hours:'60h',  pre:[]},
  'ESTECP030':  {name:'Arquiteturas Avançadas de Computadores',          hours:'60h',  pre:[]},
  'ESTECP031':  {name:'Processamento de Imagens',                        hours:'60h',  pre:[]},
  'ESTECP033':  {name:'Conceitos Gerais de Automação',                   hours:'60h',  pre:[]},
  'ESTECP036':  {name:'Multimídia',                                      hours:'60h',  pre:[]},
  'ESTECP039':  {name:'Realidade Virtual',                               hours:'60h',  pre:[]},
  'ESTECP040':  {name:'Simulação de Sistemas',                           hours:'60h',  pre:[]},
  'ESTECP042':  {name:'Sistemas de Informação Gráfica',                  hours:'60h',  pre:[]},
  'ESTECP047':  {name:'Computação para Automação',                       hours:'60h',  pre:[]},
  'ESTECP052':  {name:'Estágio Supervisionado em Eng. de Computação IV', hours:'450h', pre:[]},
  'ESTECP144':  {name:'Libras',                                          hours:'60h',  pre:[]},
  'ESTECP145':  {name:'Estágio Supervisionado em Eng. da Computação III',hours:'450h', pre:[]},
  'ESTECP147':  {name:'Criptografia',                                    hours:'60h',  pre:[]},
  'ESTECP149':  {name:'Desenvolvimento de Aplicativos Móveis',           hours:'60h',  pre:[]},
  'ESTECP150':  {name:'Teste de Software',                               hours:'60h',  pre:[]},
};

// ── CMP_2018 CODE MAP (histórico code → subject id) ──────────────────────────
const CM_CMP={
  // 1º Período
  'ESTBAS001':'cp_alglin1', 'ESTBAS002':'cp_calc1', 'ESTBAS003':'cp_intro_eng',
  'ESTBAS004':'cp_intro_amb', 'ESTBAS005':'cp_quim', 'ESTBAS006':'cp_com_exp',
  'ESTBAS007':'cp_fis1',    'ESTCMP009':'cp_prog1',
  // 2º Período
  'ESTBAS008':'cp_alglin2', 'ESTBAS009':'cp_calc2', 'ESTBAS010':'cp_des_bas',
  'ESTBAS011':'cp_intro_adm','ESTBAS050':'cp_prob_est','ESTBAS012':'cp_prob_est',
  'ESTBAS013':'cp_fis2',    'ESTBAS017':'cp_intro_econ','ESTCMP010':'cp_prog2',
  // 3º Período
  'ESTCMP011':'cp_aesd1',   'ESTCMP021':'cp_pp',    'ESTCMP029':'cp_mat_disc',
  'ESTEEL507':'cp_circ1',   'ESTEEL001':'cp_circ1', 'ESTBAS015':'cp_fis3',
  'ESTBAS101':'cp_lab_fis1','ESTECP103':'cp_calc_comp','ESTBAS019':'cp_calc_comp',
  'ESTCMP050':'cp_comp_eth','ESTBAS022':'cp_comp_eth',
  // 4º Período
  'ESTBAS049':'cp_calc_num','ESTCMP012':'cp_aesd2', 'ESTCMP024':'cp_mps',
  'ESTCMP030':'cp_ftc',     'ESTEEL508':'cp_elet1', 'ESTEEL005':'cp_elet1',
  'ESTCMP040':'cp_sd1',     'ESTEEL009':'cp_sd1',   'ESTCMP051':'cp_met_cien',
  // 5º Período
  'ESTCMP013':'cp_paa',     'ESTCMP022':'cp_bd1',   'ESTCMP014':'cp_grafos',
  'ESTCMP015':'cp_sim_desemp','ESTCMP041':'cp_sd2', 'ESTEEL012':'cp_sinais',
  'ESTCMP003':'cp_org_comp','ESTECI055':'cp_mec',   'EST0502':'cp_mec',
  // 6º Período
  'ESTECP116':'cp_hsa',     'ESTCMP027':'cp_ihc',   'ESTECP025':'cp_ihc',
  'ESTCMP031':'cp_ia1',     'ESTCMP025':'cp_es',    'ESTEEL018':'cp_ctrl1',
  'ESTCMP007':'cp_so1',     'ESTECP009':'cp_so1',   'ESTCMP004':'cp_arq_comp',
  'ESTECP120':'cp_mat_intro',
  // 7º Período
  'ESTEEL030':'cp_pds',     'ESTCMP042':'cp_emb',   'ESTCMP016':'cp_redes1',
  'ESTECP014':'cp_redes1',  'ESTCMP068':'cp_top1',
  // 8º Período
  'ESTECP127':'cp_cg_pdi',  'ESTCMP034':'cp_empr',  'ESTCMP020':'cp_spd',
  'ESTECP130':'cp_redes2',  'ESTECP018':'cp_redes2','ESTCMP069':'cp_top2',
  // 9º Período
  'ESTCMP070':'cp_top3',    'ESTEEL024':'cp_telecom','ESTECP023':'cp_telecom',
  'ESTCMP052':'cp_tcc1',    'ESTECP135':'cp_est1',
  // 10º Período
  'ESTCMP053':'cp_tcc2',    'ESTECP139':'cp_auto_ind','ESTECP140':'cp_est2',
  'ESTECP136':'cp_top4',
  // Equivalences — old/parallel codes map to same subject
  'ESTECP058':'cp_prog1',   'ESTECP001':'cp_prog1',
  'ESTECP059':'cp_prog2',   'ESTECP002':'cp_prog2',
  'ESTECP100':'cp_aesd1',   'ESTECP101':'cp_pp',
  'ESTECP102':'cp_mat_disc','ESTECP004':'cp_mat_disc',
  'ESTECP105':'cp_aesd2',   'ESTECP106':'cp_mps',
  'ESTECP107':'cp_ftc',     'ESTECP006':'cp_ftc',
  'ESTECP108':'cp_sd1',     'ESTECP109':'cp_met_cien',
  'ESTECP110':'cp_paa',     'ESTECP012':'cp_paa',
  'ESTECP111':'cp_bd1',     'ESTECP010':'cp_bd1',
  'ESTECP112':'cp_grafos',  'ESTECP113':'cp_sim_desemp','ESTBAS021':'cp_sim_desemp',
  'ESTECP114':'cp_sd2',     'ESTEEL064':'cp_sd2',
  'ESTECP115':'cp_org_comp','ESTECP008':'cp_org_comp',
  'ESTECP117':'cp_ia1',     'ESTECP118':'cp_es',   'ESTECP015':'cp_es',
  'ESTECP121':'cp_arq_comp','ESTECP124':'cp_emb',   'ESTECP038':'cp_emb',
  'ESTECP126':'cp_top1',    'ESTECP044':'cp_top1',
  'ESTECP128':'cp_empr',    'ESTBAS035':'cp_empr',
  'ESTECP129':'cp_spd',     'ESTECP013':'cp_spd',
  'ESTECP131':'cp_top2',    'ESTECP132':'cp_top3',
  'ESTECP026':'cp_tcc1',    'ESTECP134':'cp_tcc1',
  'ESTECP138':'cp_tcc2',    'ESTECP028':'cp_tcc2',
  // Codes in CMP PDFs that are NOT in CMP_2018 grade (optativas handled separately)
  'ESTBAS016':null, 'ESTBAS018':null, 'ESTBAS020':null,
};

// ── CÓDIGO → ID  (ECA 2023) ──────────────────────────────────────────────────
const CM_ECA_2023={
  // 1º Período
  'ESTBAS006':'com_exp_23',    'ESTEMA103':'intro_eca_23',   'ESTBAS004':'intro_amb_23',
  'ESTBAS007':'fis1_23',       'ESTBAS005':'quim_23',        'ESTBAS001':'alglin1_23',
  'ESTECP001':'prog1_23',      'ESTBAS002':'calc1_23',       'ESTBAS017':'intro_econ_23',
  // 2º Período
  'ESTBAS013':'fis2_23',       'ESTBAS008':'alglin2_23',     'ESTECP002':'prog2_23',
  'ESTBAS012':'prob_est_23',   'ESTBAS009':'calc2_23',       'ESTEMA201':'des_tec_23',
  'ESTBAS011':'intro_adm_23',
  // 3º Período
  'ESTBAS015':'fis3_23',       'ESTBAS016':'lab_fis1_23',    'ESTEMA301':'mec_sol_23',
  'ESTEMA302':'fen_trans_23',  'ESTEMA305':'intro_mat_23',   'ESTEMA304':'inst_bas_23',
  'ESTEMA303':'intro_ca_23',   'ESTEMA300':'met_mat_23',     'ESTBAS022':'prat_prof_23',
  // 4º Período
  'ESTBAS018':'fis4_23',       'ESTBAS020':'lab_fis2_23',    'ESTEEL001':'circ1_23',
  'ESTEMA403':'lab_circ1_23',  'ESTEMA400':'calc_vet_23',    'ESTEMA401':'sinais_23',
  'ESTEMA007':'sist_din_23',   'ESTBAS049':'calc_num_23',
  // 5º Período
  'ESTEEL003':'circ2_23',      'ESTEMA003':'elet_ana_23',    'ESTEMA005':'inst_ind_23',
  'ESTEMA500':'cont1_23',      'ESTEMA501':'lab_cont1_23',   'ESTEMA402':'sist_ev_23',
  'ESTEEL004':'lab_circ2_23',  'ESTEMA004':'lab_elet_ana_23','ESTEMA006':'lab_inst_23',
  // 6º Período
  'ESTMT006':'sist_pot_23',    'ESTEMT006':'sist_pot_23',    'ESTEMA009':'elet_dig_23',
  'ESTECI024':'hig_seg_23',    'ESTEMA502':'proc_fab_23',    'ESTEMA600':'cont2_23',
  'ESTEMA503':'auto_sist1_23', 'ESTEMA601':'lab_cont2_23',
  // 7º Período
  'ESTEMA061':'lab_elet_dig_23','ESTEEL027':'maq_elet_23',  'ESTEMA700':'micro_23',
  'ESTEMA701':'cont3_23',      'ESTEMA602':'estagio1_23',   'ESTEMA603':'cmd_pn_23',
  'ESTEMA702':'lab_cont3_23',
  // 8º Período
  'ESTEMA704':'lab_maq_23',    'ESTEMA020':'lab_cmd_23',    'ESTEMA705':'cont_dig_23',
  'ESTEMA801':'gest_op_23',    'ESTEMA703':'estagio2_23',   'ESTEMA024':'redes_ind_23',
  'ESTEMA802':'auto_sist2_23',
  // 9º Período
  'ESTEMA803':'tcc1_23',       'ESTEMA900':'auto_sist3_23', 'ESTEMA804':'top_esp1_23',
  // 10º Período
  'ESTEMA902':'tcc2_23',       'ESTEMA901':'cont_proc_23',  'ESTEMT048':'gest_proj_23',
  'ESTEMT015':'robotica_23',   'ESTEMA903':'top_esp2_23',   'ESTEMA904':'empr_23',
};

// ── EEL_2014 (Engenharia Elétrica 2014) ──────────────────────────────────────
DATA['EEL_2014']=[
  // 1º Período
  {id:'eel_alglin1',       name:'Álgebra Linear I',                    code:'ESTBAS001',  period:1,  hours:'60h',  pre:[],                                                                                                                              unlocks:['eel_alglin2']},
  {id:'eel_calc1',         name:'Cálculo I',                           code:'ESTBAS002',  period:1,  hours:'90h',  pre:[],                                                                                                                              unlocks:['eel_calc2','eel_prob_est']},
  {id:'eel_intro_eng',     name:'Introdução à Engenharia',             code:'ESTBAS003',  period:1,  hours:'30h',  pre:[],                                                                                                                              unlocks:[]},
  {id:'eel_intro_amb',     name:'Intro. Ciências do Ambiente',         code:'ESTBAS004',  period:1,  hours:'30h',  pre:[],                                                                                                                              unlocks:[]},
  {id:'eel_quim',          name:'Química Geral',                       code:'ESTBAS005',  period:1,  hours:'60h',  pre:[],                                                                                                                              unlocks:[]},
  {id:'eel_com_exp',       name:'Comunicação e Expressão',             code:'ESTBAS006',  period:1,  hours:'60h',  pre:[],                                                                                                                              unlocks:[]},
  {id:'eel_fis1',          name:'Física I',                            code:'ESTBAS007',  period:1,  hours:'60h',  pre:[],                                                                                                                              unlocks:['eel_fis2']},
  {id:'eel_prog1',         name:'Ling. de Programação I',              code:'ESTECP001',  period:1,  hours:'60h',  pre:[],                                                                                                                              unlocks:['eel_prog2']},
  // 2º Período
  {id:'eel_alglin2',       name:'Álgebra Linear II',                   code:'ESTBAS008',  period:2,  hours:'60h',  pre:['eel_alglin1'],                                                                                                                 unlocks:[]},
  {id:'eel_calc2',         name:'Cálculo II',                          code:'ESTBAS009',  period:2,  hours:'75h',  pre:['eel_calc1'],                                                                                                                   unlocks:['eel_calc3','eel_circ1','eel_lab_circ1']},
  {id:'eel_des_bas',       name:'Desenho Básico',                      code:'ESTBAS010',  period:2,  hours:'60h',  pre:[],                                                                                                                              unlocks:[]},
  {id:'eel_intro_adm',     name:'Intro. à Administração',              code:'ESTBAS011',  period:2,  hours:'45h',  pre:[],                                                                                                                              unlocks:[]},
  {id:'eel_prob_est',      name:'Probabilidade e Estatística',         code:'ESTBAS012',  period:2,  hours:'60h',  pre:['eel_calc1'],                                                                                                                   unlocks:[]},
  {id:'eel_fis2',          name:'Física II',                           code:'ESTBAS013',  period:2,  hours:'60h',  pre:['eel_fis1'],                                                                                                                    unlocks:['eel_fis3','eel_lab_fis1','eel_mec_flu']},
  {id:'eel_intro_econ',    name:'Introdução à Economia',               code:'ESTBAS017',  period:2,  hours:'45h',  pre:[],                                                                                                                              unlocks:[]},
  {id:'eel_prog2',         name:'Ling. de Programação II',             code:'ESTECP002',  period:2,  hours:'60h',  pre:['eel_prog1'],                                                                                                                   unlocks:[]},
  // 3º Período
  {id:'eel_calc3',         name:'Cálculo III',                         code:'ESTBAS014',  period:3,  hours:'75h',  pre:['eel_calc2'],                                                                                                                   unlocks:['eel_calc4','eel_calc_num']},
  {id:'eel_fis3',          name:'Física III',                          code:'ESTBAS015',  period:3,  hours:'60h',  pre:['eel_fis2'],                                                                                                                    unlocks:['eel_fis4','eel_lab_fis2','eel_eletromag1']},
  {id:'eel_lab_fis1',      name:'Lab. de Física I',                    code:'ESTBAS016',  period:3,  hours:'30h',  pre:['eel_fis2'],                                                                                                                    unlocks:[]},
  {id:'eel_mec_flu',       name:'Mecânica dos Fluídos',                code:'ESTEME004',  period:3,  hours:'60h',  pre:['eel_fis2'],                                                                                                                    unlocks:[]},
  {id:'eel_circ1',         name:'Circuitos Elétricos I',               code:'ESTEEL001',  period:3,  hours:'60h',  pre:['eel_calc2'],                                                                                                                   unlocks:['eel_circ2','eel_elet_ana1','eel_lab_elet_ana1','eel_lab_circ2','eel_mat_elet']},
  {id:'eel_lab_circ1',     name:'Lab. Circuítos Elétricos I',          code:'ESTEEL002',  period:3,  hours:'30h',  pre:['eel_calc2'],                                                                                                                   unlocks:[]},
  {id:'eel_etica',         name:'Ética e Prática Profissional',        code:'ESTEEL0204', period:3,  hours:'30h',  pre:[],                                                                                                                              unlocks:[]},
  {id:'eel_inst_bas',      name:'Instrumentação Básica',               code:'ESTEEL0205', period:3,  hours:'30h',  pre:[],                                                                                                                              unlocks:[]},
  // 4º Período
  {id:'eel_calc4',         name:'Cálculo IV',                          code:'ESTBAS019',  period:4,  hours:'60h',  pre:['eel_calc3'],                                                                                                                   unlocks:['eel_sinais']},
  {id:'eel_calc_num',      name:'Cálculo Numérico',                    code:'ESTBAS049',  period:4,  hours:'60h',  pre:['eel_calc3'],                                                                                                                   unlocks:[]},
  {id:'eel_fis4',          name:'Física IV',                           code:'ESTBAS018',  period:4,  hours:'60h',  pre:['eel_fis3'],                                                                                                                    unlocks:[]},
  {id:'eel_lab_fis2',      name:'Lab. de Física II',                   code:'ESTBAS020',  period:4,  hours:'30h',  pre:['eel_fis3'],                                                                                                                    unlocks:[]},
  {id:'eel_circ2',         name:'Circuitos Elétricos II',              code:'ESTEEL003',  period:4,  hours:'60h',  pre:['eel_circ1'],                                                                                                                   unlocks:['eel_conv_energ','eel_efic_energ','eel_energias_renov','eel_inst_elet1','eel_pot_anali1']},
  {id:'eel_elet_ana1',     name:'Eletrônica Analógica I',              code:'ESTEEL0207', period:4,  hours:'60h',  pre:['eel_circ1'],                                                                                                                   unlocks:['eel_elet_dig1','eel_lab_elet_dig1','eel_elet_ana2','eel_lab_elet_ana2','eel_princ_com1']},
  {id:'eel_lab_elet_ana1', name:'Lab. Eletrônica Analógica I',         code:'ESTEEL0208', period:4,  hours:'45h',  pre:['eel_circ1'],                                                                                                                   unlocks:[]},
  {id:'eel_lab_circ2',     name:'Lab. Circuítos Elétricos II',         code:'ESTEEL0206', period:4,  hours:'30h',  pre:['eel_circ1'],                                                                                                                   unlocks:[]},
  // 5º Período
  {id:'eel_elet_dig1',     name:'Eletrônica Digital I',                code:'ESTEEL009',  period:5,  hours:'60h',  pre:['eel_elet_ana1'],                                                                                                               unlocks:['eel_elet_dig2']},
  {id:'eel_lab_elet_dig1', name:'Lab. Eletrônica Digital I',           code:'ESTEEL010',  period:5,  hours:'45h',  pre:['eel_elet_ana1'],                                                                                                               unlocks:[]},
  {id:'eel_elet_ana2',     name:'Eletrônica Analógica II',             code:'ESTEEL0601', period:5,  hours:'60h',  pre:['eel_elet_ana1'],                                                                                                               unlocks:['eel_elet_ana3','eel_elet_pot1','eel_lab_elet_pot1']},
  {id:'eel_lab_elet_ana2', name:'Lab. Eletrônica Analógica II',        code:'ESTEEL0211', period:5,  hours:'45h',  pre:['eel_elet_ana1'],                                                                                                               unlocks:[]},
  {id:'eel_eletromag1',    name:'Eletromagnetismo I',                  code:'ESTEEL0503', period:5,  hours:'60h',  pre:['eel_fis3'],                                                                                                                    unlocks:[]},
  {id:'eel_princ_com1',    name:'Princípios de Comunicações I',        code:'ESTEEL011',  period:5,  hours:'60h',  pre:['eel_elet_ana1'],                                                                                                               unlocks:['eel_princ_com2']},
  {id:'eel_conv_energ',    name:'Conversão de Energia',                code:'ESTEEL020',  period:5,  hours:'60h',  pre:['eel_circ2'],                                                                                                                   unlocks:['eel_maq_elet','eel_lab_conv_energ']},
  {id:'eel_sinais',        name:'Sinais e Sistemas',                   code:'ESTEEL012',  period:5,  hours:'60h',  pre:['eel_calc4'],                                                                                                                   unlocks:['eel_controle1','eel_lab_controle1','eel_pds']},
  // 6º Período
  {id:'eel_elet_ana3',     name:'Eletrônica Analógica III',            code:'ESTEEL0703', period:6,  hours:'60h',  pre:['eel_elet_ana2'],                                                                                                               unlocks:[]},
  {id:'eel_elet_dig2',     name:'Eletrônica Digital II',               code:'ESTEEL064',  period:6,  hours:'60h',  pre:['eel_elet_dig1'],                                                                                                               unlocks:['eel_microp','eel_redes_com1','eel_microcontrol','eel_fpga','eel_info_ind']},
  {id:'eel_princ_com2',    name:'Princípios de Comunicações II',       code:'ESTEEL017',  period:6,  hours:'60h',  pre:['eel_princ_com1'],                                                                                                              unlocks:['eel_telecom','eel_com_dig']},
  {id:'eel_elet_pot1',     name:'Eletrônica de Potência I',            code:'ESTEEL022',  period:6,  hours:'60h',  pre:['eel_elet_ana2'],                                                                                                               unlocks:[]},
  {id:'eel_lab_elet_pot1', name:'Lab. Eletrônica de Potência I',       code:'ESTEEL023',  period:6,  hours:'45h',  pre:['eel_elet_ana2'],                                                                                                               unlocks:[]},
  {id:'eel_maq_elet',      name:'Máquinas Elétricas e Acionamentos',   code:'ESTEEL027',  period:6,  hours:'60h',  pre:['eel_conv_energ'],                                                                                                              unlocks:[]},
  {id:'eel_lab_conv_energ',name:'Lab. Conversão de Energia',           code:'ESTEEL026',  period:6,  hours:'30h',  pre:['eel_conv_energ'],                                                                                                              unlocks:[]},
  // 7º Período
  {id:'eel_microp',        name:'Sistemas Microprocessados',           code:'ESTEEL016',  period:7,  hours:'60h',  pre:['eel_elet_dig2'],                                                                                                               unlocks:[]},
  {id:'eel_mat_elet',      name:'Materiais Elétricos',                 code:'ESTEEL0209', period:7,  hours:'60h',  pre:['eel_circ1'],                                                                                                                   unlocks:[]},
  {id:'eel_controle1',     name:'Sistemas de Controle I',              code:'ESTEEL018',  period:7,  hours:'60h',  pre:['eel_sinais'],                                                                                                                  unlocks:['eel_controle2']},
  {id:'eel_lab_controle1', name:'Lab. de Controle I',                  code:'ESTEEL0714', period:7,  hours:'45h',  pre:['eel_sinais'],                                                                                                                  unlocks:[]},
  {id:'eel_pds',           name:'Proc. Digital de Sinais',             code:'ESTEEL030',  period:7,  hours:'60h',  pre:['eel_sinais'],                                                                                                                  unlocks:[]},
  {id:'eel_estagio1',      name:'Estágio Supervisionado EEl I',        code:'ESTEEL0704', period:7,  hours:'390h', pre:['eel_alglin1','eel_calc1','eel_intro_eng','eel_intro_amb','eel_quim','eel_com_exp','eel_fis1','eel_prog1','eel_alglin2','eel_calc2','eel_des_bas','eel_intro_adm','eel_prob_est','eel_fis2','eel_intro_econ','eel_prog2','eel_calc3','eel_fis3','eel_lab_fis1','eel_mec_flu','eel_circ1','eel_lab_circ1','eel_etica','eel_inst_bas','eel_calc4','eel_calc_num','eel_fis4','eel_lab_fis2','eel_circ2','eel_lab_circ2','eel_elet_ana1','eel_lab_elet_ana1','eel_elet_dig1','eel_lab_elet_dig1','eel_elet_ana2','eel_lab_elet_ana2','eel_eletromag1','eel_princ_com1','eel_conv_energ','eel_sinais','eel_elet_ana3','eel_elet_dig2','eel_princ_com2','eel_elet_pot1','eel_lab_elet_pot1','eel_maq_elet','eel_lab_conv_energ'], unlocks:['eel_estagio2']},
  // 8º Período
  {id:'eel_telecom',       name:'Sistemas de Telecomunicações',        code:'ESTEEL024',  period:8,  hours:'60h',  pre:['eel_princ_com2'],                                                                                                              unlocks:[]},
  {id:'eel_controle2',     name:'Sistemas de Controle II',             code:'ESTEEL0705', period:8,  hours:'60h',  pre:['eel_controle1'],                                                                                                               unlocks:[]},
  {id:'eel_redes_com1',    name:'Redes de Comunicações de Dados I',    code:'ESTEEL0706', period:8,  hours:'60h',  pre:['eel_elet_dig2'],                                                                                                               unlocks:[]},
  {id:'eel_microcontrol',  name:'Microcontroladores',                  code:'ESTEEL0708', period:8,  hours:'60h',  pre:['eel_elet_dig2'],                                                                                                               unlocks:[]},
  {id:'eel_fpga',          name:'Hardware Reprogramável',              code:'ESTEEL021',  period:8,  hours:'60h',  pre:['eel_elet_dig2'],                                                                                                               unlocks:[]},
  {id:'eel_estagio2',      name:'Estágio Supervisionado EEl II',       code:'ESTEEL0710', period:8,  hours:'390h', pre:['eel_estagio1'],                                                                                                                unlocks:[]},
  {id:'eel_opt1',          name:'Optativa I',                          code:'—',          period:8,  hours:'—',    pre:[],                                                                                                                              unlocks:[], optional:true},
  {id:'eel_opt2',          name:'Optativa II',                         code:'—',          period:8,  hours:'—',    pre:[],                                                                                                                              unlocks:[], optional:true},
  // 9º Período
  {id:'eel_tcc1',          name:'TCC I',                               code:'ESTEEL0711', period:9,  hours:'45h',  pre:['eel_alglin1','eel_calc1','eel_intro_eng','eel_intro_amb','eel_quim','eel_com_exp','eel_fis1','eel_prog1','eel_alglin2','eel_calc2','eel_des_bas','eel_intro_adm','eel_prob_est','eel_fis2','eel_intro_econ','eel_prog2','eel_calc3','eel_fis3','eel_lab_fis1','eel_mec_flu','eel_circ1','eel_lab_circ1','eel_etica','eel_inst_bas','eel_calc4','eel_calc_num','eel_fis4','eel_lab_fis2','eel_circ2','eel_lab_circ2','eel_elet_ana1','eel_lab_elet_ana1','eel_elet_dig1','eel_lab_elet_dig1','eel_elet_ana2','eel_lab_elet_ana2','eel_eletromag1','eel_princ_com1','eel_conv_energ','eel_sinais','eel_elet_ana3','eel_elet_dig2','eel_princ_com2','eel_elet_pot1','eel_lab_elet_pot1','eel_maq_elet','eel_lab_conv_energ','eel_microp','eel_mat_elet','eel_controle1','eel_pds','eel_telecom','eel_controle2','eel_redes_com1','eel_microcontrol','eel_fpga'], unlocks:['eel_tcc2']},
  {id:'eel_efic_energ',    name:'Eficiência Energética',               code:'ESTEEL0901', period:9,  hours:'60h',  pre:['eel_circ2'],                                                                                                                   unlocks:['eel_top_esp1']},
  {id:'eel_energias_renov',name:'Energias Renováveis',                 code:'ESTEEL0902', period:9,  hours:'60h',  pre:['eel_circ2'],                                                                                                                   unlocks:['eel_top_esp1']},
  {id:'eel_com_dig',       name:'Comunicações Digitais',               code:'ESTEEL033',  period:9,  hours:'60h',  pre:['eel_princ_com2'],                                                                                                              unlocks:[]},
  {id:'eel_inst_elet1',    name:'Instalações Elétricas I',             code:'ESTEEL0713', period:9,  hours:'60h',  pre:['eel_circ2'],                                                                                                                   unlocks:[]},
  {id:'eel_opt3',          name:'Optativa III',                        code:'—',          period:9,  hours:'—',    pre:[],                                                                                                                              unlocks:[], optional:true},
  {id:'eel_opt4',          name:'Optativa IV',                         code:'—',          period:9,  hours:'—',    pre:[],                                                                                                                              unlocks:[], optional:true},
  // 10º Período
  {id:'eel_pot_anali1',    name:'Análise de Sist. de Potência I',      code:'ESTEEL0709', period:10, hours:'60h',  pre:['eel_circ2'],                                                                                                                   unlocks:[]},
  {id:'eel_ergo_seg',      name:'Ergonomia e Segurança do Trabalho',   code:'ESTEEL0203', period:10, hours:'60h',  pre:[],                                                                                                                              unlocks:[]},
  {id:'eel_info_ind',      name:'Informática Industrial',              code:'ESTEEL0707', period:10, hours:'60h',  pre:['eel_elet_dig2'],                                                                                                               unlocks:[]},
  {id:'eel_tcc2',          name:'TCC II',                              code:'ESTEEL105',  period:10, hours:'45h',  pre:['eel_tcc1'],                                                                                                                    unlocks:[]},
  {id:'eel_top_esp1',      name:'Tópicos Especiais EEl I',             code:'ESTEEL104',  period:10, hours:'60h',  pre:['eel_energias_renov','eel_efic_energ'],                                                                                         unlocks:[]},
  {id:'eel_opt5',          name:'Optativa V',                          code:'—',          period:10, hours:'—',    pre:[],                                                                                                                              unlocks:[], optional:true},
  {id:'eel_opt6',          name:'Optativa VI',                         code:'—',          period:10, hours:'—',    pre:[],                                                                                                                              unlocks:[], optional:true},
];

// ── OPTATIVAS CATALOG (Grade EEL 2014 — EET_2014) ─────────────────────────────
const OPT_EEL={
  'EST0826':    {name:'Língua Brasileira de Sinais (Libras)',                 hours:'—', pre:[]},
  'ESTCMP069':  {name:'Tópicos Especiais para Computação II',                 hours:'—', pre:[]},
  'ESTECI024':  {name:'Higiene e Segurança do Trabalho',                      hours:'—', pre:[]},
  'ESTECP018':  {name:'Redes de Computadores II',                             hours:'—', pre:['ESTECP014']},
  'ESTEEL0011': {name:'Proteção de Sistemas de Energia',                      hours:'—', pre:['ESTEEL003']},
  'ESTEEL0012': {name:'Energia Solar Fotovoltaica',                           hours:'—', pre:['ESTEEL003']},
  'ESTEEL0013': {name:'Máquinas Elétricas II',                                hours:'—', pre:['ESTEEL027']},
  'ESTEEL0014': {name:'Centrais Hidrelétricas e Termelétricas',               hours:'—', pre:['ESTEEL027']},
  'ESTEEL0015': {name:'Planejamento e Projeto de Circuitos Eletrônicos',      hours:'—', pre:['ESTEEL0703']},
  'ESTEEL0016': {name:'Projeto de Sistemas em FPGA',                          hours:'—', pre:['ESTEEL0708']},
  'ESTEEL0017': {name:'Processamento de Sinais Biológicos',                   hours:'—', pre:['ESTEEL030']},
  'ESTEEL0018': {name:'Planejamento e Regulação em Telecomunicações',         hours:'—', pre:['ESTEEL024']},
  'ESTEEL0019': {name:'Padrões de Transmissão de TV Digital',                 hours:'—', pre:['ESTEEL033']},
  'ESTEEL0020': {name:'Padrões de Compressão de Áudio e Vídeo',               hours:'—', pre:['ESTEEL030']},
  'ESTEEL0021': {name:'Projeto de Rádio Enlace Digital',                      hours:'—', pre:['ESTEEL024']},
  'ESTEEL0022': {name:'Sistemas de TV Digital',                               hours:'—', pre:['ESTEEL030']},
  'ESTEEL0023': {name:'Sistemas de Comunicações Ópticas',                     hours:'—', pre:['ESTEEL017']},
  'ESTEEL0024': {name:'Sistemas de Transmissão de Via Satélite',              hours:'—', pre:['ESTEEL024']},
  'ESTEEL0025': {name:'Teoria da Informação',                                 hours:'—', pre:['ESTEEL024']},
  'ESTEEL0027': {name:'Microeletrônica',                                      hours:'—', pre:['ESTEEL0703']},
  'ESTEEL0033': {name:'Instalações Elétricas II',                             hours:'—', pre:['ESTEEL0713']},
  'ESTEEL0034': {name:'Acionamentos Elétricos e Eletrônicos',                 hours:'—', pre:['ESTEEL027']},
  'ESTEEL0036': {name:'Fundamentos de Automação',                             hours:'—', pre:['ESTEEL0703']},
  'ESTEEL0037': {name:'Telefonia',                                            hours:'—', pre:['ESTEEL024']},
  'ESTEEL0038': {name:'Redes de Comunicação de Dados II',                     hours:'—', pre:['ESTEEL0706']},
  'ESTEEL0045': {name:'Planejamento e Regulação em Energia Elétrica',         hours:'—', pre:['ESTEEL003']},
  'ESTEEL0048': {name:'Instrumentação Eletrônica e Sensores Industriais',     hours:'—', pre:['ESTEEL0703']},
  'ESTEEL029':  {name:'Sist. de Comunicações Móveis Celulares',               hours:'—', pre:['ESTEEL017']},
  'ESTEEL039':  {name:'Distribuição de Energia Elétrica',                     hours:'—', pre:['ESTEEL003']},
  'ESTEEL040':  {name:'Estágio Supervisionado em Eng. Elétrica IV',           hours:'390h', pre:[]},
  'ESTEEL044':  {name:'Processamento Digital de Imagens',                     hours:'—', pre:['ESTEEL030']},
  'ESTEEL045':  {name:'Criptografia',                                         hours:'—', pre:['ESTEEL012']},
  'ESTEEL047':  {name:'Linhas de Transmissão',                                hours:'—', pre:['ESTEEL003']},
  'ESTEEL048':  {name:'Centrais Telefônicas',                                 hours:'—', pre:['ESTEEL017']},
  'ESTEEL049':  {name:'Hidrelétricas e Termelétricas',                        hours:'—', pre:['ESTEEL003']},
  'ESTEEL050':  {name:'Componentes Simétricos',                               hours:'—', pre:['ESTEEL003']},
  'ESTEEL051':  {name:'HDTV',                                                 hours:'—', pre:['ESTEEL017']},
  'ESTEEL052':  {name:'Códigos Corretores de Erro',                           hours:'—', pre:['ESTEEL012']},
  'ESTEEL053':  {name:'Subestações',                                          hours:'—', pre:['ESTEEL0713']},
  'ESTEEL055':  {name:'Eletricidade Geral',                                   hours:'—', pre:['ESTBAS015']},
  'ESTEEL056':  {name:'Lab. de Eletricidade Geral',                           hours:'—', pre:['ESTBAS015']},
  'ESTEEL057':  {name:'Instrumentação Eletrônica',                            hours:'—', pre:[]},
  'ESTEEL058':  {name:'Propagação e Antenas',                                 hours:'—', pre:['ESTEEL0503']},
  'ESTEEL059':  {name:'Codecs de Vídeo',                                      hours:'—', pre:['ESTEEL017']},
  'ESTEEL060':  {name:'Geração e Transmissão de Energia Elétrica',            hours:'—', pre:['ESTEEL003']},
  'ESTEEL061':  {name:'Telefonia I',                                          hours:'—', pre:['ESTEEL017']},
  'ESTEEL062':  {name:'Telefonia II',                                         hours:'—', pre:['ESTEEL017']},
  'ESTEEL063':  {name:'Manutenção de Equipamentos Elétricos',                 hours:'—', pre:['ESTEEL003']},
  'ESTEEL0641': {name:'Análise de Sistemas de Potência II',                   hours:'—', pre:['ESTEEL0709']},
  'ESTEEL066':  {name:'Sistemas de Áudio',                                    hours:'—', pre:['ESTEEL012']},
  'ESTEEL0701': {name:'Eletrônica de Potência II',                            hours:'—', pre:['ESTEEL022']},
  'ESTEEL0712': {name:'Estágio Supervisionado em Eng. Elétrica III',          hours:'390h', pre:['ESTEEL0503']},
  'ESTEEL0715': {name:'Eletromagnetismo II',                                  hours:'—', pre:['ESTEEL0503']},
  'ESTEEL103':  {name:'Tóp. Esp. em Eng. Elétrica: Sist. Fotovoltaico',      hours:'—', pre:['ESTEEL003']},
  'ESTEEL107':  {name:'Tóp. Esp. em Eng. Elétrica I: Cód. Corret. de Erros', hours:'—', pre:['ESTEEL009']},
  'ESTEMA014':  {name:'Comandos Eletropneumáticos',                           hours:'—', pre:['ESTEEL027']},
  'ESTEMA024':  {name:'Redes Industriais de Comunicação',                     hours:'—', pre:['ESTEEL0706']},
  'ESTEMA030':  {name:'Inteligência Artificial Aplic. à Automação',           hours:'—', pre:['ESTECP002']},
  'ESTEMA033':  {name:'Planejamento e Gestão da Qualidade',                   hours:'—', pre:['ESTBAS012']},
  'ESTEME001':  {name:'Mecânica dos Sólidos I',                               hours:'—', pre:['ESTBAS007']},
  'ESTEME006':  {name:'Mecânica dos Sólidos II',                              hours:'—', pre:['ESTEME001']},
  'ESTEME036':  {name:'Introdução ao Método dos Elementos Finitos',           hours:'—', pre:['ESTBAS049']},
  'ESTEMT001':  {name:'Modelagem e Simulação de Sistemas Discretos',          hours:'—', pre:['ESTEEL012']},
  'ESTEMT015':  {name:'Robótica Industrial',                                  hours:'—', pre:['ESTEEL0708']},
  'ESTEMT019':  {name:'Nanotecnologia',                                       hours:'—', pre:['ESTEEL0708']},
  'ESTEMT048':  {name:'Gestão de Projeto',                                    hours:'—', pre:['ESTBAS012']},
  'ESTEPR023':  {name:'Sistemas de Gestão Ambiental',                         hours:'—', pre:['ESTBAS004']},
  'ESTEQM226':  {name:'Empreendedorismo em Engenharia',                       hours:'—', pre:['ESTBAS017']},
};

// ── CODE MAP (histórico code → subject id in EEL_2014) ──────────────────────
const CM_EEL={
  // 1º Período
  'ESTBAS001':'eel_alglin1',     'ESTBAS002':'eel_calc1',        'ESTBAS003':'eel_intro_eng',
  'ESTBAS004':'eel_intro_amb',   'ESTBAS005':'eel_quim',         'ESTBAS006':'eel_com_exp',
  'ESTBAS007':'eel_fis1',        'ESTECP001':'eel_prog1',
  // 2º Período
  'ESTBAS008':'eel_alglin2',     'ESTBAS009':'eel_calc2',        'ESTBAS010':'eel_des_bas',
  'ESTBAS011':'eel_intro_adm',   'ESTBAS012':'eel_prob_est',     'ESTBAS013':'eel_fis2',
  'ESTBAS017':'eel_intro_econ',  'ESTECP002':'eel_prog2',
  // 3º Período
  'ESTBAS014':'eel_calc3',       'ESTBAS015':'eel_fis3',         'ESTBAS016':'eel_lab_fis1',
  'ESTEME004':'eel_mec_flu',     'ESTEEL001':'eel_circ1',        'ESTEEL002':'eel_lab_circ1',
  'ESTEEL0204':'eel_etica',      'ESTEEL0205':'eel_inst_bas',
  // 4º Período
  'ESTBAS019':'eel_calc4',       'ESTBAS049':'eel_calc_num',     'ESTBAS018':'eel_fis4',
  'ESTBAS020':'eel_lab_fis2',    'ESTEEL003':'eel_circ2',        'ESTEEL0207':'eel_elet_ana1',
  'ESTEEL0208':'eel_lab_elet_ana1','ESTEEL0206':'eel_lab_circ2',
  // 5º Período
  'ESTEEL009':'eel_elet_dig1',   'ESTEEL010':'eel_lab_elet_dig1','ESTEEL0601':'eel_elet_ana2',
  'ESTEEL0211':'eel_lab_elet_ana2','ESTEEL0503':'eel_eletromag1','ESTEEL011':'eel_princ_com1',
  'ESTEEL020':'eel_conv_energ',  'ESTEEL012':'eel_sinais',
  // 6º Período
  'ESTEEL0703':'eel_elet_ana3',  'ESTEEL064':'eel_elet_dig2',    'ESTEEL017':'eel_princ_com2',
  'ESTEEL022':'eel_elet_pot1',   'ESTEEL023':'eel_lab_elet_pot1','ESTEEL027':'eel_maq_elet',
  'ESTEEL026':'eel_lab_conv_energ',
  // 7º Período
  'ESTEEL016':'eel_microp',      'ESTEEL0209':'eel_mat_elet',    'ESTEEL018':'eel_controle1',
  'ESTEEL0714':'eel_lab_controle1','ESTEEL030':'eel_pds',        'ESTEEL0704':'eel_estagio1',
  // 8º Período
  'ESTEEL024':'eel_telecom',     'ESTEEL0705':'eel_controle2',   'ESTEEL0706':'eel_redes_com1',
  'ESTEEL0708':'eel_microcontrol','ESTEEL021':'eel_fpga',        'ESTEEL0710':'eel_estagio2',
  // 9º Período
  'ESTEEL0711':'eel_tcc1',       'ESTEEL0901':'eel_efic_energ',  'ESTEEL0902':'eel_energias_renov',
  'ESTEEL033':'eel_com_dig',     'ESTEEL0713':'eel_inst_elet1',
  // 10º Período
  'ESTEEL0709':'eel_pot_anali1', 'ESTEEL0203':'eel_ergo_seg',    'ESTEEL0707':'eel_info_ind',
  'ESTEEL105':'eel_tcc2',        'ESTEEL104':'eel_top_esp1',
};

// ── EEN_2015 (Engenharia Eletrônica 2015) ─────────────────────────────────────
DATA['EEN_2015']=[
  // 1º Período
  {id:'een_fmat1',       name:'Fund. Matemáticos Eng. Eletr. I',        code:'EEN01',  period:1,  hours:'60h',  pre:[],              unlocks:['een_fmat2','een_teoria_em','een_metnum']},
  {id:'een_fund_eletmec',name:'Fund. Sistemas Eletromecânicos',          code:'EEN02',  period:1,  hours:'60h',  pre:[],              unlocks:['een_mecsol']},
  {id:'een_avet',        name:'Análise Vetorial na Eng. Eletrônica',     code:'EEN03',  period:1,  hours:'60h',  pre:[],              unlocks:[]},
  {id:'een_lmat1',       name:'Lab. Matemático Eng. Eletr. I',           code:'EEN04',  period:1,  hours:'30h',  pre:[],              unlocks:['een_lmat2']},
  {id:'een_prog1',       name:'Técnicas de Programação em Eng. Eletr. I',code:'EEN05',  period:1,  hours:'60h',  pre:[],              unlocks:['een_prog2']},
  {id:'een_soc1',        name:'Engenharia Eletrônica e Sociedade I',     code:'EEN06',  period:1,  hours:'30h',  pre:[],              unlocks:['een_soc2']},
  {id:'een_exgraf',      name:'Intro. Expressão Gráfica',                code:'EEN07',  period:1,  hours:'30h',  pre:[],              unlocks:[]},
  {id:'een_ciamb',       name:'Ciências Ambientais p/ Eng. Eletrônica',  code:'EEN08',  period:1,  hours:'30h',  pre:[],              unlocks:[]},
  // 2º Período
  {id:'een_comexp',      name:'Comunicação e Expressão p/ Engenheiros',  code:'EEN26',  period:2,  hours:'60h',  pre:[],              unlocks:[]},
  {id:'een_eletroquim',  name:'Introdução à Eletroquímica',              code:'EEN27',  period:2,  hours:'60h',  pre:[],              unlocks:[]},
  {id:'een_fmat2',       name:'Fund. Matemáticos Eng. Eletr. II',        code:'EEN20',  period:2,  hours:'60h',  pre:['een_fmat1'],   unlocks:['een_sinais','een_proc_esto','een_ams1']},
  {id:'een_teoria_em',   name:'Introdução à Teoria Eletromagnética',     code:'EEN21',  period:2,  hours:'60h',  pre:['een_fmat1'],   unlocks:['een_eletromag']},
  {id:'een_fcirc',       name:'Fund. p/ Análise de Circuítos Elétricos', code:'EEN22',  period:2,  hours:'60h',  pre:[],              unlocks:['een_circ1']},
  {id:'een_lmat2',       name:'Lab. Matemático Eng. Eletr. II',          code:'EEN23',  period:2,  hours:'30h',  pre:['een_lmat1'],   unlocks:[]},
  {id:'een_prog2',       name:'Técnicas de Programação em Eng. Eletr. II',code:'EEN24', period:2,  hours:'60h',  pre:['een_prog1'],   unlocks:['een_so_emb']},
  {id:'een_econ',        name:'Economia p/ Eng. Eletrônica',             code:'EEN25',  period:2,  hours:'45h',  pre:[],              unlocks:[]},
  // 3º Período
  {id:'een_sinais',      name:'Análise de Sinais',                       code:'EEN30',  period:3,  hours:'60h',  pre:['een_fmat2'],   unlocks:[]},
  {id:'een_ftransp1',    name:'Fenômenos de Transporte I',               code:'EEN31',  period:3,  hours:'60h',  pre:[],              unlocks:['een_ftransp2']},
  {id:'een_din_ond',     name:'Dinâmica de Fenômenos Ondulatórios',      code:'EEN32',  period:3,  hours:'60h',  pre:[],              unlocks:[]},
  {id:'een_lelet1',      name:'Lab. de Eletrônica I',                    code:'EEN33',  period:3,  hours:'30h',  pre:[],              unlocks:[]},
  {id:'een_proc_esto',   name:'Introdução aos Processos Estocásticos',   code:'EEN34',  period:3,  hours:'60h',  pre:['een_fmat2'],   unlocks:['een_teoinfo']},
  {id:'een_circ1',       name:'Análise de Circuítos Elétricos I',        code:'EEN35',  period:3,  hours:'60h',  pre:['een_fcirc'],   unlocks:['een_fund_elet','een_circ2']},
  {id:'een_adm',         name:'Adm. de Empresas e Org. da Produção',     code:'EEN36',  period:3,  hours:'45h',  pre:[],              unlocks:[]},
  // 4º Período
  {id:'een_ams1',        name:'Análise, Modelagem e Sim. de Sist. Din. I',code:'EEN40', period:4,  hours:'60h',  pre:['een_fmat2'],   unlocks:['een_ams2']},
  {id:'een_ftransp2',    name:'Fenômenos de Transporte II',              code:'EEN41',  period:4,  hours:'60h',  pre:['een_ftransp1'],unlocks:[]},
  {id:'een_circlog',     name:'Circuítos Lógicos',                       code:'EEN42',  period:4,  hours:'60h',  pre:[],              unlocks:['een_micro','een_microelet']},
  {id:'een_lelet2',      name:'Lab. de Eletrônica II',                   code:'EEN43',  period:4,  hours:'30h',  pre:[],              unlocks:[]},
  {id:'een_fund_elet',   name:'Fundamentos da Eletrônica',               code:'EEN44',  period:4,  hours:'60h',  pre:['een_circ1'],   unlocks:['een_lelet3','een_eletap1']},
  {id:'een_circ2',       name:'Análise de Circuítos Elétricos II',       code:'EEN45',  period:4,  hours:'60h',  pre:['een_circ1'],   unlocks:['een_controle']},
  {id:'een_cad',         name:'CAD para Eletrônica',                     code:'EEN46',  period:4,  hours:'30h',  pre:[],              unlocks:[]},
  {id:'een_constr',      name:'Construção Eletrônica',                   code:'EEN47',  period:4,  hours:'30h',  pre:[],              unlocks:[]},
  // 5º Período
  {id:'een_ams2',        name:'Análise, Modelagem e Sim. de Sist. Din.', code:'EEN50',  period:5,  hours:'60h',  pre:['een_ams1'],    unlocks:[]},
  {id:'een_eletromag',   name:'Eletromagnetismo Aplic. à Eng. Eletrônica',code:'EEN51', period:5,  hours:'60h',  pre:['een_teoria_em'],unlocks:['een_eletric1']},
  {id:'een_micro',       name:'Microprocessadores e Microcontroladores', code:'EEN52',  period:5,  hours:'60h',  pre:['een_circlog'],  unlocks:['een_projmicro']},
  {id:'een_lelet3',      name:'Lab. de Eletrônica III',                  code:'EEN53',  period:5,  hours:'30h',  pre:['een_fund_elet'],unlocks:[]},
  {id:'een_soc2',        name:'Eng. Eletrônica e Sociedade II',          code:'EEN54',  period:5,  hours:'30h',  pre:['een_soc1'],    unlocks:[]},
  {id:'een_eletap1',     name:'Eletrônica Aplicada I',                   code:'EEN55',  period:5,  hours:'60h',  pre:['een_fund_elet'],unlocks:['een_sensor','een_eletpot','een_eletap2']},
  {id:'een_redes',       name:'Introdução às Redes de Comunicação',      code:'EEN56',  period:5,  hours:'60h',  pre:[],              unlocks:[]},
  // 6º Período
  {id:'een_metnum',      name:'Métodos Numéricos em Eng. Eletrônica',    code:'EEN60',  period:6,  hours:'60h',  pre:['een_fmat1'],   unlocks:[]},
  {id:'een_eletric1',    name:'Eletricidade Aplicada I',                 code:'EEN61',  period:6,  hours:'60h',  pre:['een_eletromag'],unlocks:['een_eletric2']},
  {id:'een_sensor',      name:'Sensores e Instrumentação Eletrônica',    code:'EEN62',  period:6,  hours:'60h',  pre:['een_eletap1'], unlocks:[]},
  {id:'een_lelet4',      name:'Lab. de Eletrônica IV',                   code:'EEN63',  period:6,  hours:'30h',  pre:[],              unlocks:[]},
  {id:'een_eletpot',     name:'Eletrônica de Potência',                  code:'EEN64',  period:6,  hours:'60h',  pre:['een_eletap1'], unlocks:[]},
  {id:'een_eletap2',     name:'Eletrônica Aplicada II',                  code:'EEN65',  period:6,  hours:'60h',  pre:['een_eletap1'], unlocks:[]},
  {id:'een_gerproj',     name:'Gerência de Projetos',                    code:'EEN66',  period:6,  hours:'60h',  pre:[],              unlocks:[]},
  // 7º Período
  {id:'een_controle',    name:'Controle e Servomecanismo',               code:'EEN70',  period:7,  hours:'60h',  pre:['een_circ2'],   unlocks:['een_robotica']},
  {id:'een_eletric2',    name:'Eletricidade Aplicada II',                code:'EEN71',  period:7,  hours:'60h',  pre:['een_eletric1'],unlocks:[]},
  {id:'een_projmicro',   name:'Projetos de Sistemas Microprocessados',   code:'EEN72',  period:7,  hours:'60h',  pre:['een_micro'],   unlocks:[]},
  {id:'een_cmdelet',     name:'Comandos Elétricos',                      code:'EEN73',  period:7,  hours:'60h',  pre:[],              unlocks:[]},
  {id:'een_mecsol',      name:'Mecânica dos Sólidos p/ Eng. Eletrônica', code:'EEN74',  period:7,  hours:'60h',  pre:['een_fund_eletmec'],unlocks:[]},
  {id:'een_tecmod',      name:'Técnicas de Modulação',                   code:'EEN75',  period:7,  hours:'60h',  pre:[],              unlocks:[]},
  // 8º Período
  {id:'een_teoinfo',     name:'Teoria da Informação e Codificação',      code:'EEN80',  period:8,  hours:'60h',  pre:['een_proc_esto'],unlocks:[]},
  {id:'een_so_emb',      name:'Sistemas Operacionais Embarcados',        code:'EEN81',  period:8,  hours:'60h',  pre:['een_prog2'],   unlocks:['een_testsw','een_progvm','een_tempo_real']},
  {id:'een_microelet',   name:'Microeletrônica',                         code:'EEN82',  period:8,  hours:'60h',  pre:['een_circlog'], unlocks:[]},
  {id:'een_autoind',     name:'Automação Industrial',                    code:'EEN83',  period:8,  hours:'60h',  pre:[],              unlocks:[]},
  {id:'een_matelet',     name:'Ciência e Tecnologia dos Materiais Eletr.',code:'EEN84', period:8,  hours:'60h',  pre:[],              unlocks:[]},
  {id:'een_estagio',     name:'Estágio Supervisionado',                  code:'EEN108', period:8,  hours:'390h', pre:['een_fmat1','een_fund_eletmec','een_avet','een_lmat1','een_prog1','een_soc1','een_exgraf','een_ciamb','een_fmat2','een_teoria_em','een_fcirc','een_lmat2','een_econ','een_comexp','een_eletroquim','een_sinais','een_ftransp1','een_din_ond','een_lelet1','een_proc_esto','een_circ1','een_adm','een_ams1','een_ftransp2','een_circlog','een_lelet2','een_fund_elet','een_circ2','een_cad','een_constr','een_ams2','een_eletromag','een_micro','een_lelet3','een_soc2','een_eletap1','een_redes','een_metnum','een_eletric1','een_sensor','een_lelet4','een_eletpot','een_eletap2','een_gerproj'], unlocks:[]},
  // 9º Período
  {id:'een_robotica',    name:'Robótica Aplicada',                       code:'EEN90',  period:9,  hours:'60h',  pre:['een_controle'], unlocks:[]},
  {id:'een_testsw',      name:'Testabilidade e Seg. de Software Emb.',   code:'EEN91',  period:9,  hours:'60h',  pre:['een_so_emb'],  unlocks:[]},
  {id:'een_audio',       name:'Sistemas Eletrônicos de Áudio',           code:'EEN92',  period:9,  hours:'60h',  pre:[],              unlocks:[]},
  {id:'een_progvm',      name:'Programação Orientada a Máquinas Virtuais',code:'EEN93', period:9,  hours:'60h',  pre:['een_so_emb'],  unlocks:[]},
  {id:'een_seg_el',      name:'Segurança em Instalações Elétricas',      code:'EEN94',  period:9,  hours:'60h',  pre:[],              unlocks:[]},
  {id:'een_tcc1',        name:'TCC I',                                   code:'EEN95',  period:9,  hours:'45h',  pre:['een_fmat1','een_fund_eletmec','een_avet','een_lmat1','een_prog1','een_soc1','een_exgraf','een_ciamb','een_fmat2','een_teoria_em','een_fcirc','een_lmat2','een_econ','een_comexp','een_eletroquim','een_sinais','een_ftransp1','een_din_ond','een_lelet1','een_proc_esto','een_circ1','een_adm','een_ams1','een_ftransp2','een_circlog','een_lelet2','een_fund_elet','een_circ2','een_cad','een_constr','een_ams2','een_eletromag','een_micro','een_lelet3','een_soc2','een_eletap1','een_redes','een_metnum','een_eletric1','een_sensor','een_lelet4','een_eletpot','een_eletap2','een_gerproj','een_controle','een_eletric2','een_projmicro','een_cmdelet','een_mecsol','een_tecmod','een_teoinfo','een_so_emb','een_microelet','een_autoind','een_matelet'], unlocks:['een_tcc2']},
  {id:'een_opt1',        name:'Optativa I',                              code:'—',      period:9,  hours:'—',    pre:[],              unlocks:[], optional:true},
  {id:'een_opt2',        name:'Optativa II',                             code:'—',      period:9,  hours:'—',    pre:[],              unlocks:[], optional:true},
  // 10º Período
  {id:'een_tempo_real',  name:'Sistemas Eletrônicos de Tempo-Real',      code:'EEN100', period:10, hours:'60h',  pre:['een_so_emb'],  unlocks:[]},
  {id:'een_auto_manuf',  name:'Automação de Manufatura',                 code:'EEN101', period:10, hours:'60h',  pre:[],              unlocks:[]},
  {id:'een_imagens',     name:'Sistemas Eletrônicos de Imagens',         code:'EEN102', period:10, hours:'60h',  pre:[],              unlocks:[]},
  {id:'een_emi',         name:'Interferência Eletromagnética',           code:'EEN103', period:10, hours:'60h',  pre:[],              unlocks:[]},
  {id:'een_pds',         name:'Processamento Digital de Sinais',         code:'EEN104', period:10, hours:'60h',  pre:[],              unlocks:[]},
  {id:'een_confiab',     name:'Confiabilidade em Sistemas Eletrônicos',  code:'EEN105', period:10, hours:'60h',  pre:[],              unlocks:[]},
  {id:'een_gps',         name:'Sistemas de Geo-Localização por Satélites',code:'EEN106',period:10, hours:'60h',  pre:[],              unlocks:[]},
  {id:'een_tcc2',        name:'TCC II',                                  code:'EEN107', period:10, hours:'45h',  pre:['een_tcc1'],    unlocks:[]},
];

// ── OPTATIVAS CATALOG (Grade EEN 2015 — EST30MEEN EEN_2015) ─────────────────
const OPT_EEN={
  'EEN0001':{name:'Redes sem Fio',                                      hours:'—', pre:[]},
  'EEN0002':{name:'Propagação e Antenas para Sistemas Embarcados',      hours:'—', pre:[]},
  'EEN0003':{name:'Regulação em Telecomunicações',                      hours:'—', pre:[]},
  'EEN0004':{name:'Tópicos Avançados em Sistemas Embarcados',           hours:'—', pre:[]},
  'EEN0005':{name:'Smart Grids',                                        hours:'—', pre:[]},
  'EEN0006':{name:'Sistemas Supervisórios',                             hours:'—', pre:[]},
  'EEN0007':{name:'Redes de Automação Industrial',                      hours:'—', pre:[]},
  'EEN0008':{name:'Língua Brasileira de Sinais (Libras)',               hours:'—', pre:[]},
};

// ── CODE MAP (histórico code → subject id in EEN_2015) ──────────────────────
const CM_EEN={
  // 1º Período
  'EEN01':'een_fmat1',       'EEN02':'een_fund_eletmec', 'EEN03':'een_avet',
  'EEN04':'een_lmat1',       'EEN05':'een_prog1',        'EEN06':'een_soc1',
  'EEN07':'een_exgraf',      'EEN08':'een_ciamb',
  // 2º Período
  'EEN26':'een_comexp',      'EEN27':'een_eletroquim',   'EEN20':'een_fmat2',
  'EEN21':'een_teoria_em',   'EEN22':'een_fcirc',        'EEN23':'een_lmat2',
  'EEN24':'een_prog2',       'EEN25':'een_econ',
  // 3º Período
  'EEN30':'een_sinais',      'EEN31':'een_ftransp1',     'EEN32':'een_din_ond',
  'EEN33':'een_lelet1',      'EEN34':'een_proc_esto',    'EEN35':'een_circ1',
  'EEN36':'een_adm',
  // 4º Período
  'EEN40':'een_ams1',        'EEN41':'een_ftransp2',     'EEN42':'een_circlog',
  'EEN43':'een_lelet2',      'EEN44':'een_fund_elet',    'EEN45':'een_circ2',
  'EEN46':'een_cad',         'EEN47':'een_constr',
  // 5º Período
  'EEN50':'een_ams2',        'EEN51':'een_eletromag',    'EEN52':'een_micro',
  'EEN53':'een_lelet3',      'EEN54':'een_soc2',         'EEN55':'een_eletap1',
  'EEN56':'een_redes',
  // 6º Período
  'EEN60':'een_metnum',      'EEN61':'een_eletric1',     'EEN62':'een_sensor',
  'EEN63':'een_lelet4',      'EEN64':'een_eletpot',      'EEN65':'een_eletap2',
  'EEN66':'een_gerproj',
  // 7º Período
  'EEN70':'een_controle',    'EEN71':'een_eletric2',     'EEN72':'een_projmicro',
  'EEN73':'een_cmdelet',     'EEN74':'een_mecsol',       'EEN75':'een_tecmod',
  // 8º Período
  'EEN80':'een_teoinfo',     'EEN81':'een_so_emb',       'EEN82':'een_microelet',
  'EEN83':'een_autoind',     'EEN84':'een_matelet',      'EEN108':'een_estagio',
  // 9º Período
  'EEN90':'een_robotica',    'EEN91':'een_testsw',       'EEN92':'een_audio',
  'EEN93':'een_progvm',      'EEN94':'een_seg_el',       'EEN95':'een_tcc1',
  // 10º Período
  'EEN100':'een_tempo_real', 'EEN101':'een_auto_manuf',  'EEN102':'een_imagens',
  'EEN103':'een_emi',        'EEN104':'een_pds',         'EEN105':'een_confiab',
  'EEN106':'een_gps',        'EEN107':'een_tcc2',
};

// ── EQM_2014 (Engenharia Química 2014) ────────────────────────────────────────
DATA['EQM_2014']=[
  // 1º Período
  {id:'eqm_alglin1',        name:'Álgebra Linear I',                            code:'ESTBAS001', period:1, hours:'60h', pre:[],                                                                                     unlocks:['eqm_alglin2']},
  {id:'eqm_calc1',          name:'Cálculo I',                                   code:'ESTBAS002', period:1, hours:'75h', pre:[],                                                                                     unlocks:['eqm_calc2','eqm_prob_est','eqm_calc_num']},
  {id:'eqm_intro_eng',      name:'Introdução à Engenharia',                     code:'ESTBAS003', period:1, hours:'30h', pre:[],                                                                                     unlocks:[]},
  {id:'eqm_comexp',         name:'Comunicação e Expressão',                     code:'ESTBAS006', period:1, hours:'60h', pre:[],                                                                                     unlocks:[]},
  {id:'eqm_quim_g',         name:'Química Geral',                               code:'ESTBAS005', period:1, hours:'60h', pre:[],                                                                                     unlocks:['eqm_quim_org','eqm_quim_inorg','eqm_eletroquim','eqm_quim_anal']},
  {id:'eqm_prog1',          name:'Linguagem de Programação I',                  code:'ESTECP001', period:1, hours:'60h', pre:[],                                                                                     unlocks:['eqm_prog2']},
  {id:'eqm_fis1',           name:'Física I',                                    code:'ESTBAS007', period:1, hours:'60h', pre:[],                                                                                     unlocks:['eqm_fis2','eqm_mec_sol']},
  {id:'eqm_ciamb',          name:'Introdução às Ciências do Ambiente',          code:'ESTBAS004', period:1, hours:'30h', pre:[],                                                                                     unlocks:[]},
  // 2º Período
  {id:'eqm_alglin2',        name:'Álgebra Linear II',                           code:'ESTBAS008', period:2, hours:'60h', pre:['eqm_alglin1'],                                                                       unlocks:['eqm_bal_massa']},
  {id:'eqm_calc2',          name:'Cálculo II',                                  code:'ESTBAS009', period:2, hours:'75h', pre:['eqm_calc1'],                                                                         unlocks:['eqm_calc3','eqm_fisquim1']},
  {id:'eqm_adm',            name:'Introdução à Administração',                  code:'ESTBAS011', period:2, hours:'45h', pre:[],                                                                                     unlocks:[]},
  {id:'eqm_prob_est',       name:'Probabilidade e Estatística',                 code:'ESTBAS012', period:2, hours:'60h', pre:['eqm_calc1'],                                                                         unlocks:['eqm_planej_exp']},
  {id:'eqm_fis2',           name:'Física II',                                   code:'ESTBAS013', period:2, hours:'60h', pre:['eqm_fis1'],                                                                          unlocks:['eqm_fis3','eqm_lab_fis1']},
  {id:'eqm_des_bas',        name:'Desenho Básico',                              code:'ESTBAS010', period:2, hours:'60h', pre:[],                                                                                     unlocks:[]},
  {id:'eqm_prog2',          name:'Linguagem de Programação II',                 code:'ESTECP002', period:2, hours:'60h', pre:['eqm_prog1'],                                                                         unlocks:[]},
  {id:'eqm_econ',           name:'Introdução à Economia',                       code:'ESTBAS017', period:2, hours:'45h', pre:[],                                                                                     unlocks:['eqm_eng_econ']},
  // 3º Período
  {id:'eqm_etica',          name:'Prática Profissional e Ética',                code:'ESTBAS022', period:3, hours:'60h', pre:[],                                                                                     unlocks:[]},
  {id:'eqm_lab_fis1',       name:'Laboratório de Física I',                     code:'ESTBAS016', period:3, hours:'30h', pre:['eqm_fis2'],                                                                          unlocks:[]},
  {id:'eqm_fis3',           name:'Física III',                                  code:'ESTBAS015', period:3, hours:'60h', pre:['eqm_fis2'],                                                                          unlocks:['eqm_fis4','eqm_lab_fis2','eqm_eletric_g']},
  {id:'eqm_calc3',          name:'Cálculo III',                                 code:'ESTBAS014', period:3, hours:'75h', pre:['eqm_calc2'],                                                                         unlocks:['eqm_calc4']},
  {id:'eqm_fisquim1',       name:'Físico-Química I',                            code:'ESTEQM004', period:3, hours:'60h', pre:['eqm_calc2'],                                                                         unlocks:['eqm_fisquim2','eqm_termodin1']},
  {id:'eqm_quim_org',       name:'Química Orgânica Teórica',                    code:'ESTEQM100', period:3, hours:'60h', pre:['eqm_quim_g'],                                                                        unlocks:['eqm_bioquim','eqm_cinetica','eqm_mat_eqm']},
  {id:'eqm_quim_inorg',     name:'Química Inorgânica Teórica',                  code:'ESTEQM001', period:3, hours:'60h', pre:['eqm_quim_g'],                                                                        unlocks:['eqm_quim_inorg_exp','eqm_quim_anal_exp','eqm_cinetica']},
  {id:'eqm_planej_exp',     name:'Planejamento Experimental Estatístico',       code:'ESTEQM107', period:3, hours:'60h', pre:['eqm_prob_est'],                                                                       unlocks:[]},
  // 4º Período
  {id:'eqm_eletroquim',     name:'Eletroquímica',                               code:'ESTEQM102', period:4, hours:'60h', pre:['eqm_quim_g'],                                                                        unlocks:['eqm_corrosao']},
  {id:'eqm_calc_num',       name:'Cálculo Numérico',                            code:'ESTBAS049', period:4, hours:'60h', pre:['eqm_calc1'],                                                                         unlocks:['eqm_mod_sim','eqm_proc_quim']},
  {id:'eqm_eletric_g',      name:'Eletricidade Geral',                          code:'ESTEEL055', period:4, hours:'60h', pre:['eqm_fis3'],                                                                          unlocks:[]},
  {id:'eqm_lab_fis2',       name:'Laboratório de Física II',                    code:'ESTBAS020', period:4, hours:'30h', pre:['eqm_fis3'],                                                                          unlocks:[]},
  {id:'eqm_fis4',           name:'Física IV',                                   code:'ESTBAS018', period:4, hours:'60h', pre:['eqm_fis3'],                                                                          unlocks:['eqm_fen_transp1']},
  {id:'eqm_quim_inorg_exp', name:'Química Geral e Inorgânica Experimental',     code:'ESTEQM101', period:4, hours:'30h', pre:['eqm_quim_inorg'],                                                                    unlocks:['eqm_quim_org_exp','eqm_fisquim_exp']},
  {id:'eqm_fisquim2',       name:'Físico Química II',                           code:'ESTEQM007', period:4, hours:'60h', pre:['eqm_fisquim1'],                                                                      unlocks:['eqm_fisquim_exp','eqm_fen_transp2','eqm_fen_transp3','eqm_cinetica','eqm_ou1']},
  {id:'eqm_bioquim',        name:'Bioquímica',                                  code:'ESTEQM103', period:4, hours:'60h', pre:['eqm_quim_org'],                                                                      unlocks:['eqm_quim_org_exp']},
  {id:'eqm_calc4',          name:'Cálculo IV',                                  code:'ESTBAS019', period:4, hours:'75h', pre:['eqm_calc3'],                                                                         unlocks:['eqm_bal_massa','eqm_fen_transp1']},
  // 5º Período
  {id:'eqm_bal_massa',      name:'Balanço de Massa e Energia',                  code:'ESTEQM106', period:5, hours:'60h', pre:['eqm_alglin2','eqm_calc4'],                                                           unlocks:['eqm_fen_transp2','eqm_termodin1']},
  {id:'eqm_quim_anal',      name:'Química Analítica Teórica',                   code:'ESTEQM003', period:5, hours:'60h', pre:['eqm_quim_g'],                                                                        unlocks:['eqm_quim_anal_exp','eqm_cinetica']},
  {id:'eqm_fen_transp1',    name:'Fenômenos de Transporte I',                   code:'ESTEQM008', period:5, hours:'60h', pre:['eqm_fis4','eqm_calc4'],                                                              unlocks:['eqm_fen_transp2']},
  {id:'eqm_quim_org_exp',   name:'Química Orgânica e Bioquímica Experimental',  code:'ESTEQM104', period:5, hours:'30h', pre:['eqm_bioquim','eqm_quim_inorg_exp'],                                                  unlocks:[]},
  {id:'eqm_fisquim_exp',    name:'Físico-Química Experimental',                 code:'ESTEQM105', period:5, hours:'30h', pre:['eqm_fisquim2','eqm_quim_inorg_exp'],                                                 unlocks:[]},
  {id:'eqm_corrosao',       name:'Corrosão Aplicada',                           code:'ESTEQM108', period:5, hours:'60h', pre:['eqm_eletroquim'],                                                                    unlocks:[]},
  {id:'eqm_eng_econ',       name:'Engenharia Econômica',                        code:'ESTEQM110', period:5, hours:'60h', pre:['eqm_econ'],                                                                          unlocks:[]},
  {id:'eqm_mec_sol',        name:'Introdução a Mecânica dos Sólidos',           code:'ESTEQM140', period:5, hours:'60h', pre:['eqm_fis1'],                                                                          unlocks:[]},
  // 6º Período
  {id:'eqm_hig_seg',        name:'Higiene e Segurança do Trabalho',             code:'ESTECI024', period:6, hours:'60h', pre:[],                                                                                     unlocks:[]},
  {id:'eqm_fen_transp2',    name:'Fenômenos de Transporte II',                  code:'ESTEQM016', period:6, hours:'60h', pre:['eqm_fen_transp1','eqm_bal_massa'],                                                   unlocks:['eqm_ou2','eqm_fen_transp3']},
  {id:'eqm_termodin1',      name:'Termodinâmica I',                             code:'ESTEQM109', period:6, hours:'60h', pre:['eqm_bal_massa','eqm_fisquim1'],                                                      unlocks:['eqm_termodin_q','eqm_reatores1']},
  {id:'eqm_cinetica',       name:'Cinética Aplicada',                           code:'ESTEQM232', period:6, hours:'60h', pre:['eqm_fisquim2','eqm_quim_org','eqm_quim_inorg','eqm_quim_anal'],                      unlocks:['eqm_eng_bioquim','eqm_reatores1']},
  {id:'eqm_ou1',            name:'Operações Unitárias Eng. Química I',          code:'ESTEQM233', period:6, hours:'60h', pre:['eqm_fen_transp1','eqm_fisquim2','eqm_bal_massa'],                                    unlocks:['eqm_ou2','eqm_eng_bioquim','eqm_top_esp']},
  {id:'eqm_microbio',       name:'Microbiologia Industrial',                    code:'ESTEQM112', period:6, hours:'60h', pre:['eqm_quim_org_exp'],                                                                  unlocks:['eqm_eng_bioquim']},
  {id:'eqm_instrum',        name:'Instrumentação na Indústria Química',         code:'ESTEQM036', period:6, hours:'60h', pre:['eqm_bal_massa'],                                                                     unlocks:['eqm_controle']},
  {id:'eqm_mat_eqm',        name:'Materiais para Engenharia Química',           code:'ESTEQM237', period:6, hours:'60h', pre:['eqm_quim_org'],                                                                      unlocks:[]},
  {id:'eqm_quim_anal_exp',  name:'Química Analítica Experimental',              code:'ESTEQM014', period:6, hours:'30h', pre:['eqm_quim_anal','eqm_quim_inorg'],                                                    unlocks:[]},
  // 7º Período
  {id:'eqm_ou2',            name:'Operações Unitárias Eng. Química II',         code:'ESTEQM234', period:7, hours:'60h', pre:['eqm_ou1','eqm_fen_transp2'],                                                         unlocks:['eqm_mod_sim','eqm_ou3','eqm_proc_quim']},
  {id:'eqm_controle',       name:'Controle de Processos',                       code:'ESTEQM020', period:7, hours:'60h', pre:['eqm_instrum'],                                                                       unlocks:['eqm_mod_sim','eqm_proc_quim']},
  {id:'eqm_termodin_q',     name:'Termodinâmica Química',                       code:'ESTEQM115', period:7, hours:'60h', pre:['eqm_termodin1'],                                                                     unlocks:[]},
  {id:'eqm_fen_transp3',    name:'Fenômenos de Transporte III',                 code:'ESTEQM026', period:7, hours:'60h', pre:['eqm_fen_transp2','eqm_fisquim2'],                                                    unlocks:['eqm_mod_sim','eqm_ou3','eqm_proc_quim']},
  {id:'eqm_eng_bioquim',    name:'Engenharia Bioquímica',                       code:'ESTEQM122', period:7, hours:'60h', pre:['eqm_microbio','eqm_cinetica','eqm_ou1'],                                             unlocks:['eqm_trat_agua']},
  {id:'eqm_reatores1',      name:'Reatores Químicos Homogêneos',                code:'ESTEQM119', period:7, hours:'60h', pre:['eqm_cinetica','eqm_termodin1'],                                                      unlocks:['eqm_reatores2']},
  {id:'eqm_estagio1',       name:'Estágio Supervisionado Eng. Química I',       code:'ESTEQM130', period:7, hours:'390h', pre:['eqm_alglin1','eqm_calc1','eqm_intro_eng','eqm_comexp','eqm_quim_g','eqm_prog1','eqm_fis1','eqm_ciamb','eqm_alglin2','eqm_calc2','eqm_adm','eqm_prob_est','eqm_fis2','eqm_des_bas','eqm_prog2','eqm_econ','eqm_etica','eqm_lab_fis1','eqm_fis3','eqm_calc3','eqm_fisquim1','eqm_quim_org','eqm_quim_inorg','eqm_planej_exp','eqm_eletroquim','eqm_calc_num','eqm_eletric_g','eqm_lab_fis2','eqm_fis4','eqm_quim_inorg_exp','eqm_fisquim2','eqm_bioquim','eqm_calc4','eqm_bal_massa','eqm_quim_anal','eqm_fen_transp1','eqm_quim_org_exp','eqm_fisquim_exp','eqm_corrosao','eqm_eng_econ','eqm_mec_sol','eqm_hig_seg','eqm_fen_transp2','eqm_termodin1','eqm_cinetica','eqm_ou1','eqm_microbio','eqm_instrum','eqm_mat_eqm','eqm_quim_anal_exp'], unlocks:['eqm_estagio2']},
  // 8º Período
  {id:'eqm_estagio2',       name:'Estágio Supervisionado Eng. Química II',      code:'ESTEQM131', period:8, hours:'390h', pre:['eqm_estagio1'],                                                                     unlocks:[]},
  {id:'eqm_mod_sim',        name:'Modelagem, Simulação e Otimização de Proc.',  code:'ESTEQM116', period:8, hours:'60h', pre:['eqm_controle','eqm_ou2','eqm_fen_transp3','eqm_calc_num'],                           unlocks:[]},
  {id:'eqm_ou3',            name:'Operações Unitárias Eng. Química III',        code:'ESTEQM235', period:8, hours:'60h', pre:['eqm_ou2','eqm_fen_transp3'],                                                         unlocks:['eqm_proj_ind','eqm_ou4']},
  {id:'eqm_proc_quim',      name:'Engenharia de Processos Químicos',            code:'ESTEQM120', period:8, hours:'60h', pre:['eqm_ou2','eqm_controle','eqm_fen_transp3','eqm_calc_num'],                           unlocks:[]},
  // 9º Período
  {id:'eqm_trat_agua',      name:'Tratamento de Água e Efluentes',              code:'ESTEQM121', period:9, hours:'60h', pre:['eqm_eng_bioquim','eqm_ou1'],                                                         unlocks:['eqm_imp_amb']},
  {id:'eqm_proj_ind',       name:'Projeto da Indústria Química',                code:'ESTEQM238', period:9, hours:'60h', pre:['eqm_ou3'],                                                                           unlocks:[]},
  {id:'eqm_ou4',            name:'Operações Unitárias Eng. Química IV',         code:'ESTEQM236', period:9, hours:'60h', pre:['eqm_ou3'],                                                                           unlocks:[]},
  {id:'eqm_reatores2',      name:'Reatores Químicos Heterogêneos',              code:'ESTEQM124', period:9, hours:'60h', pre:['eqm_reatores1'],                                                                     unlocks:[]},
  {id:'eqm_tcc1',           name:'TCC I - Engenharia Química',                  code:'ESTEQM057', period:9, hours:'45h', pre:['eqm_alglin1','eqm_calc1','eqm_intro_eng','eqm_comexp','eqm_quim_g','eqm_prog1','eqm_fis1','eqm_ciamb','eqm_alglin2','eqm_calc2','eqm_adm','eqm_prob_est','eqm_fis2','eqm_des_bas','eqm_prog2','eqm_econ','eqm_etica','eqm_lab_fis1','eqm_fis3','eqm_calc3','eqm_fisquim1','eqm_quim_org','eqm_quim_inorg','eqm_planej_exp','eqm_eletroquim','eqm_calc_num','eqm_eletric_g','eqm_lab_fis2','eqm_fis4','eqm_quim_inorg_exp','eqm_fisquim2','eqm_bioquim','eqm_calc4','eqm_bal_massa','eqm_quim_anal','eqm_fen_transp1','eqm_quim_org_exp','eqm_fisquim_exp','eqm_corrosao','eqm_eng_econ','eqm_mec_sol','eqm_hig_seg','eqm_fen_transp2','eqm_termodin1','eqm_cinetica','eqm_ou1','eqm_microbio','eqm_instrum','eqm_mat_eqm','eqm_quim_anal_exp'], unlocks:['eqm_tcc2']},
  // 10º Período
  {id:'eqm_tcc2',           name:'TCC II - Engenharia Química',                 code:'ESTEQM061', period:10, hours:'45h', pre:['eqm_tcc1'],                                                                         unlocks:[]},
  {id:'eqm_imp_amb',        name:'Análise de Impacto Ambiental',                code:'ESTEQM125', period:10, hours:'60h', pre:['eqm_trat_agua'],                                                                    unlocks:[]},
  {id:'eqm_top_esp',        name:'Tópicos Especiais em Eng. Química',           code:'ESTEQM062', period:10, hours:'60h', pre:['eqm_ou1'],                                                                          unlocks:[]},
  {id:'eqm_opt1',           name:'Optativa I',                                  code:'—',         period:10, hours:'—',   pre:[],                                                                                    unlocks:[], optional:true},
  {id:'eqm_opt2',           name:'Optativa II',                                 code:'—',         period:10, hours:'—',   pre:[],                                                                                    unlocks:[], optional:true},
  {id:'eqm_opt3',           name:'Optativa III',                                code:'—',         period:10, hours:'—',   pre:[],                                                                                    unlocks:[], optional:true},
];

// ── OPTATIVAS CATALOG (Grade EQM 2014 — EST14MQMD EQM_2014) ──────────────────
const OPT_EQM={
  'ESTEQM010':{name:'Introdução a Métodos de Pesquisa Científica e Tecnológica',hours:'—',pre:['ESTEQM233']},
  'ESTEQM030':{name:'Petroquímica',                                             hours:'—',pre:['ESTEQM233']},
  'ESTEQM042':{name:'Introdução ao Processamento de Polímeros',                 hours:'—',pre:['ESTEQM233']},
  'ESTEQM070':{name:'Ciência, Tecnologia e Sociedade',                          hours:'—',pre:['ESTEQM233']},
  'ESTEQM071':{name:'Cinética e Reatores de Polimerização',                     hours:'—',pre:['ESTEQM233']},
  'ESTEQM076':{name:'Inglês I',                                                 hours:'—',pre:['ESTEQM233']},
  'ESTEQM078':{name:'Introdução à Engenharia Biotecnológica',                   hours:'—',pre:['ESTEQM233']},
  'ESTEQM079':{name:'Introdução à Engenharia de Alimentos',                     hours:'—',pre:['ESTEQM233']},
  'ESTEQM084':{name:'Otimização de Processos de Separação e Impactos Ambientais',hours:'—',pre:['ESTEQM233']},
  'ESTEQM086':{name:'Qualidade na Engenharia Química',                          hours:'—',pre:['ESTEQM233']},
  'ESTEQM087':{name:'Tecnologia da Fluidização',                                hours:'—',pre:['ESTEQM233']},
  'ESTEQM088':{name:'Tópicos de Termodinâmica Aplicada',                        hours:'—',pre:['ESTEQM233']},
  'ESTEQM091':{name:'Tópicos em Catálise',                                      hours:'—',pre:['ESTEQM233']},
  'ESTEQM093':{name:'Tópicos em Energia',                                       hours:'—',pre:['ESTEQM233']},
  'ESTEQM098':{name:'Tópicos em Sistemas Particulados',                         hours:'—',pre:['ESTEQM233']},
  'ESTEQM099':{name:'Otimização de Processos Químicos',                         hours:'—',pre:['ESTEQM233']},
  'ESTEQM117':{name:'Projeto Mecânico',                                         hours:'—',pre:['ESTEQM233']},
  'ESTEQM127':{name:'Tópicos Especiais: Termoeconomia',                         hours:'—',pre:['ESTEQM233']},
  'ESTEQM200':{name:'Fundamentos de Biologia Molecular e Engenharia Genética',  hours:'—',pre:['ESTEQM233']},
  'ESTEQM201':{name:'Separação e Purificação de Bioprodutos',                   hours:'—',pre:['ESTEQM233']},
  'ESTEQM202':{name:'Biorreatores',                                             hours:'—',pre:['ESTEQM233']},
  'ESTEQM203':{name:'Controle de Bioprocessos',                                 hours:'—',pre:['ESTEQM233']},
  'ESTEQM204':{name:'Engenharia de Refino de Petróleo',                         hours:'—',pre:['ESTEQM233']},
  'ESTEQM205':{name:'Tecnologia do Gás Natural',                                hours:'—',pre:['ESTEQM233']},
  'ESTEQM206':{name:'Craqueamento Catalítico',                                  hours:'—',pre:['ESTEQM233']},
  'ESTEQM207':{name:'Análise e Controle de Processos na Indústria de Petróleo e Gás',hours:'—',pre:['ESTEQM233']},
  'ESTEQM208':{name:'Propriedades dos Fluídos Derivados de Petróleo',           hours:'—',pre:['ESTEQM233']},
  'ESTEQM209':{name:'Introdução a Engenharia de Alimentos',                     hours:'—',pre:['ESTEQM233']},
  'ESTEQM210':{name:'Análise de Alimentos',                                     hours:'—',pre:['ESTEQM233']},
  'ESTEQM211':{name:'Conservação e Armazenamento de Alimentos',                 hours:'—',pre:['ESTEQM233']},
  'ESTEQM212':{name:'Microbiologia de Alimentos',                               hours:'—',pre:['ESTEQM233']},
  'ESTEQM213':{name:'Tecnologia de Fermentações',                               hours:'—',pre:['ESTEQM233']},
  'ESTEQM214':{name:'Secagem de Alimentos',                                     hours:'—',pre:['ESTEQM233']},
  'ESTEQM215':{name:'Cinética e Reatores de Polimerização',                     hours:'—',pre:['ESTEQM233']},
  'ESTEQM216':{name:'Fundamentos de Nanotecnologia',                            hours:'—',pre:['ESTEQM233']},
  'ESTEQM217':{name:'Polímeros Biodegradáveis e Biopolímeros',                  hours:'—',pre:['ESTEQM233']},
  'ESTEQM218':{name:'Análise e Caracterização de Polímeros',                    hours:'—',pre:['ESTEQM233']},
  'ESTEQM219':{name:'Novos Materiais',                                          hours:'—',pre:['ESTEQM233']},
  'ESTEQM220':{name:'Gestão Ambiental',                                         hours:'—',pre:['ESTEQM233']},
  'ESTEQM221':{name:'Incineração Térmica de Resíduos Perigosos',                hours:'—',pre:['ESTEQM233']},
  'ESTEQM222':{name:'Energias Alternativas',                                    hours:'—',pre:['ESTEQM233']},
  'ESTEQM223':{name:'Tecnologias Limpas nos Processos Industriais',             hours:'—',pre:['ESTEQM233']},
  'ESTEQM224':{name:'Tecnologias Sustentáveis',                                 hours:'—',pre:['ESTEQM233']},
  'ESTEQM225':{name:'Projeto do Produto e de Fábrica Química',                  hours:'—',pre:['ESTEQM233']},
  'ESTEQM226':{name:'Empreendedorismo em Engenharia',                           hours:'—',pre:['ESTEQM233']},
  'ESTEQM227':{name:'Qualidade na Engenharia Química',                          hours:'—',pre:['ESTEQM233']},
  'ESTEQM228':{name:'Tópicos Especiais: Processos Tecnológicos da Ind. Química',hours:'—',pre:['ESTEQM233']},
  'ESTEQM229':{name:'Modelagem de Biorreatores e Bioprocessos',                 hours:'—',pre:['ESTEQM233']},
  'ESTEQM230':{name:'Processos Biotecnológicos',                                hours:'—',pre:['ESTEQM233']},
  'ESTEQM231':{name:'Biotecnologia Ambiental',                                  hours:'—',pre:['ESTEQM233']},
  'ESTEQM239':{name:'Tópicos Especiais em Meio Ambiente',                       hours:'—',pre:['ESTEQM233']},
  'ESTEQM240':{name:'Química Analítica Avançada',                               hours:'—',pre:['ESTEQM233']},
  'ESTEQM241':{name:'Processos Tecnológicos da Indústria Química',              hours:'—',pre:['ESTEQM233']},
  'ESTEQM242':{name:'Tópicos Especiais: Tecnologias Aplicadas à Eng. Química',  hours:'—',pre:['ESTEQM233']},
  'ESTEQM243':{name:'Tópicos Especiais: Processamento de Resíduos e Energia',   hours:'—',pre:['ESTEQM233']},
};

// ── CODE MAP (histórico code → subject id in EQM_2014) ───────────────────────
const CM_EQM={
  // Bases P1-P2
  'ESTBAS001':'eqm_alglin1',    'ESTBAS002':'eqm_calc1',        'ESTBAS003':'eqm_intro_eng',
  'ESTBAS006':'eqm_comexp',     'ESTBAS005':'eqm_quim_g',       'ESTECP001':'eqm_prog1',
  'ESTBAS007':'eqm_fis1',       'ESTBAS004':'eqm_ciamb',
  'ESTBAS008':'eqm_alglin2',    'ESTBAS009':'eqm_calc2',        'ESTBAS011':'eqm_adm',
  'ESTBAS012':'eqm_prob_est',   'ESTBAS013':'eqm_fis2',         'ESTBAS010':'eqm_des_bas',
  'ESTECP002':'eqm_prog2',      'ESTBAS017':'eqm_econ',
  // P3-P4
  'ESTBAS022':'eqm_etica',      'ESTBAS016':'eqm_lab_fis1',     'ESTBAS015':'eqm_fis3',
  'ESTBAS014':'eqm_calc3',      'ESTEQM004':'eqm_fisquim1',     'ESTEQM100':'eqm_quim_org',
  'ESTEQM001':'eqm_quim_inorg', 'ESTEQM107':'eqm_planej_exp',
  'ESTEQM102':'eqm_eletroquim', 'ESTBAS049':'eqm_calc_num',     'ESTEEL055':'eqm_eletric_g',
  'ESTBAS020':'eqm_lab_fis2',   'ESTBAS018':'eqm_fis4',         'ESTEQM101':'eqm_quim_inorg_exp',
  'ESTEQM007':'eqm_fisquim2',   'ESTEQM103':'eqm_bioquim',      'ESTBAS019':'eqm_calc4',
  // P5-P6
  'ESTEQM106':'eqm_bal_massa',  'ESTEQM003':'eqm_quim_anal',    'ESTEQM008':'eqm_fen_transp1',
  'ESTEQM104':'eqm_quim_org_exp','ESTEQM105':'eqm_fisquim_exp', 'ESTEQM108':'eqm_corrosao',
  'ESTEQM110':'eqm_eng_econ',   'ESTEQM140':'eqm_mec_sol',
  'ESTECI024':'eqm_hig_seg',    'ESTEQM016':'eqm_fen_transp2',  'ESTEQM109':'eqm_termodin1',
  'ESTEQM232':'eqm_cinetica',   'ESTEQM233':'eqm_ou1',          'ESTEQM112':'eqm_microbio',
  'ESTEQM036':'eqm_instrum',    'ESTEQM237':'eqm_mat_eqm',      'ESTEQM014':'eqm_quim_anal_exp',
  // P7-P8
  'ESTEQM234':'eqm_ou2',        'ESTEQM020':'eqm_controle',     'ESTEQM115':'eqm_termodin_q',
  'ESTEQM026':'eqm_fen_transp3','ESTEQM122':'eqm_eng_bioquim',  'ESTEQM119':'eqm_reatores1',
  'ESTEQM130':'eqm_estagio1',
  'ESTEQM131':'eqm_estagio2',   'ESTEQM116':'eqm_mod_sim',      'ESTEQM235':'eqm_ou3',
  'ESTEQM120':'eqm_proc_quim',
  // P9-P10
  'ESTEQM121':'eqm_trat_agua',  'ESTEQM238':'eqm_proj_ind',     'ESTEQM236':'eqm_ou4',
  'ESTEQM124':'eqm_reatores2',  'ESTEQM057':'eqm_tcc1',
  'ESTEQM061':'eqm_tcc2',       'ESTEQM125':'eqm_imp_amb',      'ESTEQM062':'eqm_top_esp',
};

// ── GRADES METADATA ───────────────────────────────────────────────────────────
const GRADES={
  'ECA_2014':{cm:CM_ECA, opt:OPT_ECA, equiv:EQUIV_ECA},
  'ECA_2023':{cm:CM_ECA_2023},
  'CMP_2018':{cm:CM_CMP, opt:OPT_CMP},
  'EEL_2014':{cm:CM_EEL, opt:OPT_EEL},
  'EEN_2015':{cm:CM_EEN, opt:OPT_EEN},
  'EQM_2014':{cm:CM_EQM, opt:OPT_EQM},
};
