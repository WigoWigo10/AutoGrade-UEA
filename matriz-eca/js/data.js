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
"2014":[
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
  {id:'tcc1',      name:'TCC I',                                  code:'ESTMA036',  period:9,  hours:'45h',  pre:['com_exp','fis1','quim','alglin1','prog1','intro_amb','intro_eca','calc1','intro_econ','fis2','intro_adm','alglin2','prog2','des_bas','prob_est','calc2','mec1','fis3','lab_fis1','mec_flu','prat_prof','intro_mat','empreend','calc3','intro_ca','mec_sol','fis4','lab_fis2','circ1','lab_circ1','calc_num','sist_din','calc4','cont1','lab_cont1','circ2','elet_ana','inst_ind','lab_inst','lab_circ2','lab_elet_ana','sinais','cont2','lab_cont2','sist_pot','elet_dig','lab_elet_dig','proc_trans','eletromag','mod_sim','cont3','lab_cont3','hig_seg','opt1_14','maq_elet','lab_maq','opt2_14','opt3_14','cmd_elet','opt4_14','gest_op'], unlocks:['tcc2']},
  {id:'top_esp1',  name:'Tópicos Especiais em ECA I',             code:'ESTMA100',  period:9,  hours:'60h',  pre:['com_exp','fis1','quim','alglin1','prog1','intro_amb','intro_eca','calc1','intro_econ','fis2','intro_adm','alglin2','prog2','des_bas','prob_est','calc2','mec1','fis3','lab_fis1','mec_flu','prat_prof','intro_mat','empreend','calc3','intro_ca','mec_sol','fis4','lab_fis2','circ1','lab_circ1','calc_num','sist_din','calc4','cont1','lab_cont1','circ2','elet_ana','inst_ind','lab_inst','lab_circ2','lab_elet_ana','sinais','cont2','lab_cont2','sist_pot','elet_dig','lab_elet_dig','proc_trans','eletromag','mod_sim'], unlocks:['top_esp2']},
  {id:'opt5_14',   name:'Optativa V',                             code:'—',         period:9,  hours:'—',    pre:[],                              unlocks:[],  optional:true},
  {id:'lab_cmd',   name:'Lab. Comandos Eletropneumáticos e Hid.', code:'ESTMA820',  period:9,  hours:'30h',  pre:['cmd_elet'],                    unlocks:[]},
  {id:'opt6_14',   name:'Optativa VI',                            code:'—',         period:9,  hours:'—',    pre:[],                              unlocks:[],  optional:true},
  {id:'opt7_14',   name:'Optativa VII',                           code:'—',         period:9,  hours:'—',    pre:[],                              unlocks:[],  optional:true},
  {id:'auto_sup',  name:'Automação e Supervisão de Proc.',        code:'ESTMA026',  period:9,  hours:'45h',  pre:['mod_sim'],                     unlocks:[]},

  // ── 10º PERÍODO ──
  {id:'tcc2',      name:'TCC II',                                 code:'ESTEMA046', period:10, hours:'45h',  pre:['tcc1'],                        unlocks:[]},
  {id:'top_esp2',  name:'Tópicos Especiais em ECA II',            code:'ESTEMA102', period:10, hours:'60h',  pre:['top_esp1'],                    unlocks:[]},
  {id:'opt8_14',   name:'Optativa VIII',                          code:'—',         period:10, hours:'—',    pre:[],                              unlocks:[],  optional:true},
  {id:'opt9_14',   name:'Optativa IX',                            code:'—',         period:10, hours:'—',    pre:[],                              unlocks:[],  optional:true},
  {id:'opt10_14',  name:'Optativa X',                             code:'—',         period:10, hours:'—',    pre:[],                              unlocks:[],  optional:true},
],
"2023":[
  {id:'com_exp_23',  name:'Comunicação e Expressão',        code:'ESTBAS006', period:1,hours:'60h', pre:[],unlocks:['prat_prof_23']},
  {id:'intro_eca_23',name:'Intro. Eng. Controle e Aut.',    code:'ESTEMA103', period:1,hours:'30h', pre:[],unlocks:[]},
  {id:'intro_amb_23',name:'Intro. Ciências do Ambiente',    code:'ESTEBAS004',period:1,hours:'30h', pre:[],unlocks:[]},
  {id:'fis1_23',     name:'Física I',                       code:'ESTBAS007', period:1,hours:'60h', pre:[],unlocks:['fis2_23','lab_fis1_23','mec_sol_23']},
  {id:'quim_23',     name:'Química Geral',                  code:'ESTBAS005', period:1,hours:'60h', pre:[],unlocks:['intro_mat_23']},
  {id:'alglin1_23',  name:'Álgebra Linear I',               code:'ESTBAS001', period:1,hours:'60h', pre:[],unlocks:['alglin2_23']},
  {id:'prog1_23',    name:'Ling. de Programação I',         code:'ESTECP001', period:1,hours:'60h', pre:[],unlocks:['prog2_23']},
  {id:'calc1_23',    name:'Cálculo I',                      code:'ESTBAS002', period:1,hours:'90h', pre:[],unlocks:['calc2_23','prob_est_23']},
  {id:'intro_econ_23',name:'Introdução à Economia',         code:'ESTBAS017', period:1,hours:'45h', pre:[],unlocks:[]},
  {id:'fis2_23',     name:'Física II',                      code:'ESTBAS013', period:2,hours:'60h', pre:['fis1_23'],unlocks:['fis3_23','lab_fis2_23','fen_trans_23']},
  {id:'alglin2_23',  name:'Álgebra Linear II',              code:'ESTBAS008', period:2,hours:'60h', pre:['alglin1_23'],unlocks:['met_mat_23']},
  {id:'prog2_23',    name:'Ling. de Programação II',        code:'ESTECP002', period:2,hours:'60h', pre:['prog1_23'],unlocks:['calc_num_23']},
  {id:'prob_est_23', name:'Probabilidade e Estatística',    code:'ESTBAS012', period:2,hours:'60h', pre:['calc1_23'],unlocks:[]},
  {id:'calc2_23',    name:'Cálculo II',                     code:'ESTBAS009', period:2,hours:'75h', pre:['calc1_23'],unlocks:['met_mat_23','calc_vet_23']},
  {id:'des_tec_23',  name:'Desenho Técnico Ass. Comp.',     code:'ESTEMA201', period:2,hours:'60h', pre:[],unlocks:[]},
  {id:'intro_adm_23',name:'Introdução à Administração',     code:'ESTBAS011', period:2,hours:'45h', pre:[],unlocks:[]},
  {id:'fis3_23',     name:'Física III',                     code:'ESTBAS015', period:3,hours:'60h', pre:['fis2_23'],unlocks:['fis4_23','circ1_23']},
  {id:'lab_fis1_23', name:'Lab. Física I',                  code:'ESTBAS016', period:3,hours:'30h', pre:['fis1_23'],unlocks:[]},
  {id:'mec_sol_23',  name:'Mecânica dos Sólidos',           code:'ESTEMA301', period:3,hours:'60h', pre:['fis1_23'],unlocks:[]},
  {id:'fen_trans_23',name:'Fenômenos de Transporte',        code:'ESTEMA302', period:3,hours:'60h', pre:['fis2_23'],unlocks:['proc_fab_23']},
  {id:'intro_mat_23',name:'Intro. Ciências dos Materiais',  code:'ESTEMA305', period:3,hours:'60h', pre:['quim_23'],unlocks:[]},
  {id:'inst_bas_23', name:'Instrumentação Básica',          code:'ESTEMA304', period:3,hours:'45h', pre:[],unlocks:['inst_ind_23']},
  {id:'intro_ca_23', name:'Intro. Controle e Automação',    code:'ESTEMA303', period:3,hours:'30h', pre:[],unlocks:[]},
  {id:'met_mat_23',  name:'Métodos Matemáticos',            code:'ESTEMA300', period:3,hours:'60h', pre:['calc2_23','alglin2_23'],unlocks:['sist_din_23']},
  {id:'prat_prof_23',name:'Prática Profissional e Ética',   code:'ESTBAS022', period:3,hours:'60h', pre:['com_exp_23'],unlocks:[]},
  {id:'fis4_23',     name:'Física IV',                      code:'ESTBAS018', period:4,hours:'60h', pre:['fis3_23'],unlocks:[]},
  {id:'lab_fis2_23', name:'Lab. Física II',                 code:'ESTBAS020', period:4,hours:'30h', pre:['fis2_23'],unlocks:[]},
  {id:'circ1_23',    name:'Circuitos Elétricos I',          code:'ESTEEL001', period:4,hours:'60h', pre:['fis3_23'],unlocks:['circ2_23','lab_circ1_23','elet_ana_23']},
  {id:'lab_circ1_23',name:'Lab. Circuitos Elétricos I',     code:'ESTEMA403', period:4,hours:'30h', pre:['circ1_23'],unlocks:['lab_circ2_23']},
  {id:'calc_vet_23', name:'Cálculo Vetorial',               code:'ESTEMA400', period:4,hours:'75h', pre:['calc2_23'],unlocks:['sinais_23']},
  {id:'sinais_23',   name:'Sinais e Sistemas',              code:'ESTEMA401', period:4,hours:'60h', pre:['calc_vet_23'],unlocks:['elet_dig_23','sist_ev_23']},
  {id:'sist_din_23', name:'Sistemas Dinâmicos',             code:'ESTEMA007', period:4,hours:'60h', pre:['met_mat_23'],unlocks:['cont1_23']},
  {id:'calc_num_23', name:'Cálculo Numérico',               code:'ESTBAS049', period:4,hours:'60h', pre:['prog2_23'],unlocks:[]},
  {id:'circ2_23',    name:'Circuitos Elétricos II',         code:'ESTEEL003', period:5,hours:'60h', pre:['circ1_23'],unlocks:['sist_pot_23','lab_circ2_23']},
  {id:'elet_ana_23', name:'Eletrônica Analógica',           code:'ESTEMA003', period:5,hours:'60h', pre:['circ1_23'],unlocks:['lab_elet_ana_23','sist_pot_23','elet_dig_23']},
  {id:'inst_ind_23', name:'Instrumentação Industrial',      code:'ESTEMA005', period:5,hours:'60h', pre:['inst_bas_23'],unlocks:['lab_inst_23']},
  {id:'cont1_23',    name:'Controle I',                     code:'ESTEMA500', period:5,hours:'60h', pre:['sist_din_23'],unlocks:['cont2_23','lab_cont1_23','auto_sist1_23']},
  {id:'lab_cont1_23',name:'Lab. Controle I',                code:'ESTEMA501', period:5,hours:'45h', pre:['cont1_23'],unlocks:['lab_cont2_23']},
  {id:'sist_ev_23',  name:'Sist. a Eventos Discretos',      code:'ESTEMA402', period:5,hours:'60h', pre:['sinais_23'],unlocks:[]},
  {id:'lab_circ2_23',name:'Lab. Circuitos Elétricos II',    code:'ESTEEL004', period:6,hours:'30h', pre:['circ2_23','lab_circ1_23'],unlocks:[]},
  {id:'lab_elet_ana_23',name:'Lab. Eletrônica Analógica',   code:'ESTEMA004', period:6,hours:'45h', pre:['elet_ana_23'],unlocks:[]},
  {id:'lab_inst_23', name:'Lab. Instrumentação Industrial', code:'ESTEMA006', period:6,hours:'30h', pre:['inst_ind_23'],unlocks:[]},
  {id:'sist_pot_23', name:'Sist. Eletrônicos de Potência',  code:'ESTEMA006B',period:6,hours:'60h', pre:['circ2_23','elet_ana_23'],unlocks:['maq_elet_23']},
  {id:'elet_dig_23', name:'Eletrônica Digital',             code:'ESTEMA009', period:6,hours:'60h', pre:['elet_ana_23','sinais_23'],unlocks:['lab_elet_dig_23','micro_23']},
  {id:'hig_seg_23',  name:'Higiene e Segurança',            code:'ESTECI024', period:6,hours:'60h', pre:[],unlocks:[]},
  {id:'proc_fab_23', name:'Proc. de Fabricação Mecânica',   code:'ESTEMA502', period:6,hours:'60h', pre:['fen_trans_23'],unlocks:[]},
  {id:'cont2_23',    name:'Controle II',                    code:'ESTEMA600', period:6,hours:'60h', pre:['cont1_23'],unlocks:['cont3_23','lab_cont2_23']},
  {id:'auto_sist1_23',name:'Automação de Sistemas I',       code:'ESTEMA503', period:6,hours:'60h', pre:['cont1_23'],unlocks:['auto_sist2_23']},
  {id:'lab_elet_dig_23',name:'Lab. Eletrônica Digital',     code:'ESTEMA061', period:7,hours:'45h', pre:['elet_dig_23'],unlocks:[]},
  {id:'maq_elet_23', name:'Máquinas Elétricas e Acion.',    code:'ESTEEL027', period:7,hours:'60h', pre:['sist_pot_23'],unlocks:['lab_maq_23']},
  {id:'micro_23',    name:'Microcontroladores',             code:'ESTEMA700', period:7,hours:'45h', pre:['elet_dig_23'],unlocks:[]},
  {id:'lab_cont2_23',name:'Lab. Controle II',               code:'ESTEMA601', period:7,hours:'30h', pre:['cont2_23','lab_cont1_23'],unlocks:['lab_cont3_23']},
  {id:'cont3_23',    name:'Controle III',                   code:'ESTEMA701', period:7,hours:'60h', pre:['cont2_23'],unlocks:['lab_cont3_23','cont_dig_23','robotica_23','cont_proc_23']},
  {id:'estagio1_23', name:'Estágio Supervisionado I em ECA',code:'ESTEMA602', period:7,hours:'390h',pre:[],unlocks:['estagio2_23']},
  {id:'auto_sist2_23',name:'Automação de Sistemas II',      code:'ESTEMA802', period:7,hours:'45h', pre:['auto_sist1_23'],unlocks:['auto_sist3_23']},
  {id:'lab_maq_23',  name:'Lab. Máq. Elétricas e Acion.',   code:'ESTEMA704', period:8,hours:'45h', pre:['maq_elet_23'],unlocks:[]},
  {id:'lab_cont3_23',name:'Lab. Controle III',              code:'ESTEMA702', period:8,hours:'30h', pre:['cont3_23'],unlocks:[]},
  {id:'cmd_pn_23',   name:'Comandos Pneumáticos e Hid.',    code:'ESTMA603',  period:8,hours:'60h', pre:[],unlocks:['lab_cmd_23']},
  {id:'lab_cmd_23',  name:'Lab. Comandos Eletropneumáticos',code:'ESTEMA020', period:8,hours:'30h', pre:['cmd_pn_23'],unlocks:[]},
  {id:'cont_dig_23', name:'Controle Digital',               code:'ESTEMA705', period:8,hours:'60h', pre:['cont3_23'],unlocks:[]},
  {id:'gest_op_23',  name:'Gestão de Operações de Manuf.',  code:'ESTEMA801', period:8,hours:'30h', pre:[],unlocks:[]},
  {id:'estagio2_23', name:'Estágio Supervisionado II em ECA',code:'ESTEMA703',period:8,hours:'390h',pre:['estagio1_23'],unlocks:[]},
  {id:'opt1_23',     name:'Optativa I',                     code:'—',         period:8,hours:'—',   pre:[],unlocks:[]},
  {id:'tcc1_23',     name:'TCC I',                          code:'ESTMA803',  period:9,hours:'45h', pre:[],unlocks:['tcc2_23']},
  {id:'redes_ind_23',name:'Redes Industriais de Comunic.',  code:'ESTEMA024', period:9,hours:'60h', pre:[],unlocks:[]},
  {id:'auto_sist3_23',name:'Automação de Sistemas III',     code:'ESTEMA900', period:9,hours:'60h', pre:['auto_sist2_23'],unlocks:[]},
  {id:'top_esp1_23', name:'Tópicos Especiais em ECA I',     code:'ESTMA804',  period:9,hours:'60h', pre:[],unlocks:[]},
  {id:'empr_23',     name:'Empreendedorismo e Inovação',    code:'ESTEMA904', period:9,hours:'60h', pre:[],unlocks:[]},
  {id:'opt2_23',     name:'Optativa II',                    code:'—',         period:9,hours:'—',   pre:[],unlocks:[]},
  {id:'opt3_23',     name:'Optativa III',                   code:'—',         period:9,hours:'—',   pre:[],unlocks:[]},
  {id:'tcc2_23',     name:'TCC II',                         code:'ESTEMA902', period:10,hours:'45h',pre:['tcc1_23'],unlocks:[]},
  {id:'cont_proc_23',name:'Controle de Processos',          code:'ESTEMA901', period:10,hours:'60h',pre:['cont3_23'],unlocks:[]},
  {id:'gest_proj_23',name:'Gestão de Projetos',             code:'ESTEMT048', period:10,hours:'60h',pre:[],unlocks:[]},
  {id:'robotica_23', name:'Robótica Industrial',            code:'ESTEMT015', period:10,hours:'60h',pre:['cont3_23'],unlocks:[]},
  {id:'top_esp2_23', name:'Tópicos Especiais em ECA II',    code:'ESTEMA903', period:10,hours:'60h',pre:[],unlocks:[]},
  {id:'opt4_23',     name:'Optativa IV',                    code:'—',         period:10,hours:'—',  pre:[],unlocks:[]},
  {id:'opt5_23',     name:'Optativa V',                     code:'—',         period:10,hours:'—',  pre:[],unlocks:[]},
]
};

// ── OPTATIVAS CATALOG (Grade 2014 — EST18MCAD EMA_2014) ─────────────────────
// pre arrays use UEA official codes; patchOptSlots() resolves them to IDs at runtime.
// Codes referencing OTHER optativas use the OPT14 key; obrigatórias use their CM code.
const OPT14={
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
const EQUIV14={
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
};

// ── CODE MAP (histórico code → subject id in grade 2014) ────────────────────
const CM={
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
  'ESTMA036':'tcc1',      'ESTEMA036':'tcc1',     'ESTMA100':'top_esp1',
  'ESTEMA100':'top_esp1', 'ESTMA820':'lab_cmd',
  'ESTMA026':'auto_sup',  'ESTEMA026':'auto_sup',
  // 10º Período
  'ESTEMA046':'tcc2',     'ESTEMA102':'top_esp2',
  // Disciplinas fora da grade 2014 → null (optativas / grade 2023)
  // Nota: ESTEMA502 foi removido daqui — é tratado por EQUIV14 (grade 2014)
  //       e pelo fallback DATA[G] (grade 2023 → proc_fab_23)
  'ESTEMA300':null, 'ESTEMA302':null, 'ESTEEL0503':null, 'ESTEEL063':null,
  'ESTEMA033':null, 'ESTEMA039':null, 'ESTEEL021':null,  'ESTEMA030':null,
  'ESTEMT013':null, 'ESTEMT024':null, 'ESTEMA603':null,
};
