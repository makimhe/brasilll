/* ══════════════════════════════════════
   DATA
══════════════════════════════════════ */
var GROUPS = {
  "FLAMENGO":{
    korean:"Rio de Janeiro",agency:"Clube Brasileiro",debut:"1895",type:"Time de Futebol",members_count:11,
    photo:"img/flamengo.jpg",
    about:"O Flamengo é um dos maiores clubes do Brasil, conhecido pela sua torcida gigante e tradição no futebol.",
    members:[
      {name:"Gabigol", age:27,pos:["Atacante"],nat:"Brasil",pers:["Decisivo","Provocador"],desc:"Um dos principais jogadores do Flamengo, conhecido pelos gols em finais."},
      {name:"Arrascaeta", age:30,pos:["Meia"],nat:"Uruguai",pers:["Criativo","Calmo"],desc:"Responsável por criar jogadas e dar assistências."},
     {name:"Rossi", age:28,pos:["Goleiro"],nat:"Argentina",pers:["Seguro","Ágil"],desc:"Goleiro titular conhecido por defesas importantes."},
  {name:"Matheuzinho", age:23,pos:["Lateral Direito"],nat:"Brasil",pers:["Rápido","Ofensivo"],desc:"Lateral que apoia bastante no ataque."},
  {name:"Fabrício Bruno", age:28,pos:["Zagueiro"],nat:"Brasil",pers:["Forte","Consistente"],desc:"Zagueiro sólido na defesa do Flamengo."},
  {name:"Léo Pereira", age:28,pos:["Zagueiro"],nat:"Brasil",pers:["Calmo","Técnico"],desc:"Defensor com boa saída de bola."},
  {name:"Ayrton Lucas", age:26,pos:["Lateral Esquerdo"],nat:"Brasil",pers:["Explosivo","Ofensivo"],desc:"Muito veloz e perigoso no ataque."},
  {name:"Pulgar", age:30,pos:["Volante"],nat:"Chile",pers:["Marcador","Experiente"],desc:"Responsável pela proteção da defesa."},
  {name:"Gerson", age:27,pos:["Meia"],nat:"Brasil",pers:["Versátil","Habilidoso"],desc:"Meio-campista completo que ajuda na criação."},
  {name:"Everton Cebolinha", age:28,pos:["Ponta"],nat:"Brasil",pers:["Driblador","Rápido"],desc:"Atacante habilidoso pelas pontas."},
  {name:"Bruno Henrique", age:33,pos:["Atacante"],nat:"Brasil",pers:["Veloz","Decisivo"],desc:"Perigoso em contra-ataques e bolas aéreas."},
]
  },
  "CORINTHIANS":{
    korean:"São Paulo",agency:"Clube Brasileiro",debut:"1910",type:"Time de Futebol",
    photo:"img/corinthians/corinthianss.png",
    about:"O Corinthians é um dos clubes mais populares do Brasil, com uma torcida extremamente fiel.",
    members:[
    {name:"Carlos Miguel",photo:"img/corinthians/breno.webp", age:25,pos:["Goleiro"],nat:"Brasil",pers:["Alto","Seguro"],desc:"Goleiro que assumiu após a saída de Cássio."},
  {name:"Matheus Donelli",photo:"img/corinthians/matheus.webp", age:22,pos:["Goleiro"],nat:"Brasil",pers:["Jovem","Promissor"],desc:"Opção da base no gol."},
  {name:"Fagner",photo:"img/corinthians/hugo.webp", age:34,pos:["Lateral Direito"],nat:"Brasil",pers:["Experiente","Raçudo"],desc:"Um dos líderes do elenco."},
  {name:"Matheus Bidu",photo:"img/corinthians/bidu.webp", age:24,pos:["Lateral Esquerdo"],nat:"Brasil",pers:["Rápido","Ofensivo"],desc:"Apoia bastante no ataque."},
  {name:"Félix Torres",photo:"img/corinthians/tchoca.webp", age:27,pos:["Zagueiro"],nat:"Equador",pers:["Forte","Rápido"],desc:"Titular da defesa."},
  {name:"Cacá",photo:"img/corinthians/theuzin.webp", age:25,pos:["Zagueiro"],nat:"Brasil",pers:["Marcador","Físico"],desc:"Ganhando espaço no time."},
  {name:"Raniele",photo:"img/corinthians/hugobranco.webp", age:27,pos:["Volante"],nat:"Brasil",pers:["Marcador","Intenso"],desc:"Protege a defesa."},
  {name:"Maycon",photo:"img/corinthians/gustavo.webp", age:26,pos:["Meia"],nat:"Brasil",pers:["Versátil","Técnico"],desc:"Importante na transição."},
  {name:"Rodrigo Garro",photo:"img/corinthians/gabriel.webp", age:26,pos:["Meia"],nat:"Argentina",pers:["Criativo","Habilidoso"],desc:"Principal armador do time."},
  {name:"Wesley",photo:"img/corinthians/breno.webp", age:19,pos:["Ponta"],nat:"Brasil",pers:["Rápido","Driblador"],desc:"Jovem destaque ofensivo."},
  {name:"Memphis Depay",photo:"img/corinthians/memphis.webp", age:30,pos:["Atacante"],nat:"Holanda",pers:["Habilidoso","Decisivo"],desc:"Craque internacional, referência ofensiva do time."},
  {name:"Yuri Alberto",photo:"img/corinthians/yurialberto.webp", age:23,pos:["Atacante"],nat:"Brasil",pers:["Rápido","Finalizador"],desc:"Atacante principal e parceiro no ataque."},
  {name:"Ángel Romero",photo:"img/corinthians/andre.webp", age:31,pos:["Atacante"],nat:"Paraguai",pers:["Raçudo","Decisivo"],desc:"Atacante experiente e brigador."}
]
  },
  "PALMEIRAS":{
    korean:"São Paulo",agency:"Clube Brasileiro",debut:"1914",type:"Time de Futebol",
    photo:"img/palmeiras.jpg",
    about:"O Palmeiras é um dos clubes mais vitoriosos do Brasil.",
    members:[
      {name:"Weverton", age:36,pos:["Goleiro"],nat:"Brasil",pers:["Seguro","Experiente"],desc:"Goleiro titular e um dos líderes do time."},
  {name:"Marcelo Lomba", age:37,pos:["Goleiro"],nat:"Brasil",pers:["Experiente","Confiável"],desc:"Reserva experiente."},
  {name:"Mayke", age:31,pos:["Lateral Direito"],nat:"Brasil",pers:["Ofensivo","Consistente"],desc:"Lateral importante no esquema."},
  {name:"Marcos Rocha", age:35,pos:["Lateral Direito"],nat:"Brasil",pers:["Experiente","Tático"],desc:"Opção sólida na lateral."},
  {name:"Murilo", age:27,pos:["Zagueiro"],nat:"Brasil",pers:["Forte","Decisivo"],desc:"Zagueiro titular e perigoso no ataque."},
  {name:"Gustavo Gómez", age:31,pos:["Zagueiro"],nat:"Paraguai",pers:["Líder","Raçudo"],desc:"Capitão e referência defensiva."},
  {name:"Luan", age:31,pos:["Zagueiro"],nat:"Brasil",pers:["Técnico","Experiente"],desc:"Opção confiável na defesa."},
  {name:"Piquerez", age:26,pos:["Lateral Esquerdo"],nat:"Uruguai",pers:["Ofensivo","Regular"],desc:"Lateral titular pela esquerda."},
  {name:"Vanderlan", age:22,pos:["Lateral Esquerdo"],nat:"Brasil",pers:["Jovem","Rápido"],desc:"Promessa da base."},
  {name:"Zé Rafael", age:30,pos:["Volante"],nat:"Brasil",pers:["Versátil","Forte"],desc:"Peça-chave no meio-campo."},
  {name:"Richard Ríos", age:24,pos:["Meia"],nat:"Colômbia",pers:["Intenso","Habilidoso"],desc:"Meio-campista moderno e dinâmico."},
  {name:"Gabriel Menino", age:23,pos:["Meia"],nat:"Brasil",pers:["Versátil","Técnico"],desc:"Pode atuar em várias posições."},
  {name:"Raphael Veiga", age:29,pos:["Meia"],nat:"Brasil",pers:["Decisivo","Técnico"],desc:"Principal criador e cobrador de pênaltis."},
  {name:"Dudu", age:32,pos:["Ponta"],nat:"Brasil",pers:["Ídolo","Driblador"],desc:"Um dos maiores ídolos recentes do clube."},
  {name:"Rony", age:29,pos:["Atacante"],nat:"Brasil",pers:["Veloz","Raçudo"],desc:"Atacante incansável e decisivo."},
  {name:"Flaco López", age:23,pos:["Atacante"],nat:"Argentina",pers:["Alto","Finalizador"],desc:"Centroavante de presença na área."}
]
  }
  ,
  "SANTOS":{
    korean:"São Paulo",agency:"Clube Brasileiro",debut:"1914",type:"Time de Futebol",
    photo:"img/santos.jpg",
    about:"O Santos é um dos clubes mais vitoriosos do Brasil.",
    members:[
      {name:"João Paulo", age:29,pos:["Goleiro"],nat:"Brasil",pers:["Seguro","Líder"],desc:"Capitão e principal destaque do time."},
  {name:"Vladimir", age:35,pos:["Goleiro"],nat:"Brasil",pers:["Experiente","Regular"],desc:"Goleiro reserva experiente."},
  {name:"Aderlan", age:33,pos:["Lateral Direito"],nat:"Brasil",pers:["Ofensivo","Experiente"],desc:"Lateral com apoio constante ao ataque."},
  {name:"Hayner", age:28,pos:["Lateral Direito"],nat:"Brasil",pers:["Rápido","Ofensivo"],desc:"Alternativa pela direita."},
  {name:"Gil", age:36,pos:["Zagueiro"],nat:"Brasil",pers:["Experiente","Forte"],desc:"Zagueiro experiente que lidera a defesa."},
  {name:"Joaquim", age:25,pos:["Zagueiro"],nat:"Brasil",pers:["Físico","Seguro"],desc:"Defensor jovem e consistente."},
  {name:"Felipe Jonatan", age:26,pos:["Lateral Esquerdo"],nat:"Brasil",pers:["Técnico","Ofensivo"],desc:"Importante no apoio ao ataque."},
  {name:"Dodô", age:32,pos:["Lateral Esquerdo"],nat:"Brasil",pers:["Experiente","Regular"],desc:"Opção experiente na lateral."},
  {name:"Tomás Rincón", age:36,pos:["Volante"],nat:"Venezuela",pers:["Marcador","Líder"],desc:"Volante experiente e capitão ocasional."},
  {name:"Diego Pituca", age:31,pos:["Meia"],nat:"Brasil",pers:["Incansável","Tático"],desc:"Meio-campista muito importante no esquema."},
  {name:"Jean Lucas", age:26,pos:["Meia"],nat:"Brasil",pers:["Forte","Dinâmico"],desc:"Ajuda na transição e marcação."},
  {name:"Giuliano", age:33,pos:["Meia"],nat:"Brasil",pers:["Experiente","Técnico"],desc:"Meia com visão de jogo."},
  {name:"Otero", age:32,pos:["Ponta"],nat:"Venezuela",pers:["Chute forte","Ofensivo"],desc:"Perigoso em bolas paradas."},
  {name:"Guilherme", age:29,pos:["Ponta"],nat:"Brasil",pers:["Rápido","Objetivo"],desc:"Atacante de lado veloz."},
  {name:"Marcos Leonardo", age:21,pos:["Atacante"],nat:"Brasil",pers:["Finalizador","Inteligente"],desc:"Principal goleador recente do Santos."}
]
  }
  ,
  "SÃO PAULO":{
    korean:"São Paulo",agency:"Clube Brasileiro",debut:"1914",type:"Time de Futebol",
    photo:"img/sao-paulo.jpg",
    about:"O São Paulo é um dos clubes mais vitoriosos do Brasil.",
    members:[{name:"Rafael", age:34,pos:["Goleiro"],nat:"Brasil",pers:["Seguro","Experiente"],desc:"Goleiro titular e confiável."},
      {name:"Jandrei", age:31,pos:["Goleiro"],nat:"Brasil",pers:["Regular","Experiente"],desc:"Opção no banco."},
      {name:"Rafinha", age:38,pos:["Lateral Direito"],nat:"Brasil",pers:["Experiente","Líder"],desc:"Veterano com muita bagagem."},
      {name:"Igor Vinícius", age:27,pos:["Lateral Direito"],nat:"Brasil",pers:["Rápido","Ofensivo"],desc:"Apoia bem no ataque."},
      {name:"Arboleda", age:32,pos:["Zagueiro"],nat:"Equador",pers:["Forte","Seguro"],desc:"Pilar da defesa."},
      {name:"Diego Costa", age:25,pos:["Zagueiro"],nat:"Brasil",pers:["Físico","Marcador"],desc:"Zagueiro jovem e consistente."},
      {name:"Alan Franco", age:27,pos:["Zagueiro"],nat:"Argentina",pers:["Técnico","Calmo"],desc:"Boa saída de bola."},
      {name:"Wellington", age:23,pos:["Lateral Esquerdo"],nat:"Brasil",pers:["Rápido","Ofensivo"],desc:"Lateral titular pela esquerda."},
      {name:"Patryck", age:21,pos:["Lateral Esquerdo"],nat:"Brasil",pers:["Jovem","Promissor"],desc:"Opção da base."},
      {name:"Pablo Maia", age:22,pos:["Volante"],nat:"Brasil",pers:["Marcador","Intenso"],desc:"Fundamental na proteção da zaga."},
      {name:"Alisson", age:30,pos:["Meia"],nat:"Brasil",pers:["Versátil","Tático"],desc:"Importante na recomposição."},
      {name:"Rodrigo Nestor", age:24,pos:["Meia"],nat:"Brasil",pers:["Técnico","Criativo"],desc:"Ajuda na construção."},
      {name:"Lucas Moura", age:32,pos:["Ponta"],nat:"Brasil",pers:["Rápido","Decisivo"],desc:"Ídolo recente e muito perigoso no ataque."},
      {name:"Ferreirinha", age:26,pos:["Ponta"],nat:"Brasil",pers:["Driblador","Rápido"],desc:"Atacante habilidoso pelas pontas."},
      {name:"Calleri", age:31,pos:["Atacante"],nat:"Argentina",pers:["Finalizador","Raçudo"],desc:"Centroavante e referência ofensiva."},
      {name:"Luciano", age:31,pos:["Atacante"],nat:"Brasil",pers:["Decisivo","Versátil"],desc:"Importante no ataque e criação."}
    ]
  }
  ,
  "GREMIO":{
    korean:"São Paulo",agency:"Clube Brasileiro",debut:"1914",type:"Time de Futebol",
    photo:"img/gremio.jpg",
    about:"O Grêmio é um dos clubes mais vitoriosos do Brasil.",
    members:[ {name:"Marchesín", age:36,pos:["Goleiro"],nat:"Argentina",pers:["Experiente","Seguro"],desc:"Goleiro titular com experiência internacional."},
      {name:"Caíque", age:26,pos:["Goleiro"],nat:"Brasil",pers:["Ágil","Reservado"],desc:"Opção no banco."},
      {name:"João Pedro", age:27,pos:["Lateral Direito"],nat:"Brasil",pers:["Ofensivo","Regular"],desc:"Apoia bastante pelo lado direito."},
      {name:"Fábio", age:33,pos:["Lateral Direito"],nat:"Brasil",pers:["Experiente","Tático"],desc:"Alternativa mais defensiva."},
      {name:"Geromel", age:38,pos:["Zagueiro"],nat:"Brasil",pers:["Líder","Experiente"],desc:"Ídolo do clube e referência defensiva."},
      {name:"Kannemann", age:33,pos:["Zagueiro"],nat:"Argentina",pers:["Raçudo","Forte"],desc:"Zagueiro intenso e marcador."},
      {name:"Rodrigo Ely", age:31,pos:["Zagueiro"],nat:"Brasil",pers:["Físico","Seguro"],desc:"Opção sólida na zaga."},
      {name:"Reinaldo", age:34,pos:["Lateral Esquerdo"],nat:"Brasil",pers:["Ofensivo","Experiente"],desc:"Perigoso em bolas paradas."},
      {name:"Cuiabano", age:21,pos:["Lateral Esquerdo"],nat:"Brasil",pers:["Rápido","Jovem"],desc:"Promessa da base."},
      {name:"Villasanti", age:27,pos:["Volante"],nat:"Paraguai",pers:["Incansável","Marcador"],desc:"Motor do meio-campo."},
      {name:"Pepê", age:26,pos:["Meia"],nat:"Brasil",pers:["Dinâmico","Versátil"],desc:"Ajuda na criação e marcação."},
      {name:"Cristaldo", age:28,pos:["Meia"],nat:"Argentina",pers:["Criativo","Técnico"],desc:"Responsável pelas jogadas ofensivas."},
      {name:"Pavón", age:28,pos:["Ponta"],nat:"Argentina",pers:["Rápido","Driblador"],desc:"Atacante veloz pelas pontas."},
      {name:"Gustavo Nunes", age:19,pos:["Ponta"],nat:"Brasil",pers:["Jovem","Habilidoso"],desc:"Promessa do clube."},
      {name:"Diego Costa", age:35,pos:["Atacante"],nat:"Espanha",pers:["Experiente","Forte"],desc:"Centroavante de presença física."},
      {name:"JP Galvão", age:31,pos:["Atacante"],nat:"Brasil",pers:["Esforçado","Regular"],desc:"Opção no ataque."}
    ]
  }
  ,
  "VASCO":{
    korean:"São Paulo",agency:"Clube Brasileiro",debut:"1914",type:"Time de Futebol",
    photo:"img/palmeiras.jpg",
    about:"O Palmeiras é um dos clubes mais vitoriosos do Brasil.",
    members:[{name:"Léo Jardim", age:29,pos:["Goleiro"],nat:"Brasil",pers:["Ágil","Seguro"],desc:"Goleiro titular e um dos destaques do time."},
      {name:"Keiller", age:28,pos:["Goleiro"],nat:"Brasil",pers:["Experiente","Confiável"],desc:"Opção no banco."},
      {name:"Paulo Henrique", age:27,pos:["Lateral Direito"],nat:"Brasil",pers:["Rápido","Ofensivo"],desc:"Lateral que apoia bastante no ataque."},
      {name:"Puma Rodríguez", age:27,pos:["Lateral Direito"],nat:"Uruguai",pers:["Ofensivo","Intenso"],desc:"Boa alternativa pela direita."},
      {name:"Léo", age:28,pos:["Zagueiro"],nat:"Brasil",pers:["Forte","Regular"],desc:"Zagueiro titular da defesa."},
      {name:"Maicon", age:35,pos:["Zagueiro"],nat:"Brasil",pers:["Experiente","Líder"],desc:"Ajuda com experiência na zaga."},
      {name:"Medel", age:36,pos:["Zagueiro"],nat:"Chile",pers:["Raçudo","Marcador"],desc:"Defensor intenso e experiente."},
      {name:"Lucas Piton", age:24,pos:["Lateral Esquerdo"],nat:"Brasil",pers:["Ofensivo","Técnico"],desc:"Um dos melhores na criação pela lateral."},
      {name:"Zé Gabriel", age:25,pos:["Volante"],nat:"Brasil",pers:["Marcador","Tático"],desc:"Ajuda na proteção defensiva."},
      {name:"Mateus Carvalho", age:22,pos:["Volante"],nat:"Brasil",pers:["Intenso","Jovem"],desc:"Promessa no meio-campo."},
      {name:"Payet", age:37,pos:["Meia"],nat:"França",pers:["Criativo","Experiente"],desc:"Principal cérebro do time."},
      {name:"David", age:29,pos:["Ponta"],nat:"Brasil",pers:["Rápido","Objetivo"],desc:"Atacante de velocidade."},
      {name:"Adson", age:24,pos:["Ponta"],nat:"Brasil",pers:["Driblador","Ágil"],desc:"Ajuda na criação pelas pontas."},
      {name:"Vegetti", age:35,pos:["Atacante"],nat:"Argentina",pers:["Finalizador","Forte"],desc:"Referência ofensiva e goleador."},
      {name:"Rayan", age:18,pos:["Atacante"],nat:"Brasil",pers:["Jovem","Promissor"],desc:"Grande promessa da base."}
    ]
  }
  ,
  "BAHIA":{
    korean:"São Paulo",agency:"Clube Brasileiro",debut:"1914",type:"Time de Futebol",
    photo:"img/palmeiras.jpg",
    about:"O Palmeiras é um dos clubes mais vitoriosos do Brasil.",
    members:[{name:"Marcos Felipe", age:28,pos:["Goleiro"],nat:"Brasil",pers:["Seguro","Ágil"],desc:"Goleiro titular confiável."},
      {name:"Danilo Fernandes", age:36,pos:["Goleiro"],nat:"Brasil",pers:["Experiente","Líder"],desc:"Reserva experiente."},
      {name:"Gilberto", age:30,pos:["Lateral Direito"],nat:"Brasil",pers:["Ofensivo","Regular"],desc:"Apoia bem pelo lado direito."},
      {name:"Arias", age:22,pos:["Lateral Direito"],nat:"Colômbia",pers:["Rápido","Jovem"],desc:"Opção jovem na posição."},
      {name:"Kanu", age:27,pos:["Zagueiro"],nat:"Brasil",pers:["Forte","Marcador"],desc:"Zagueiro titular da defesa."},
      {name:"Vitor Hugo", age:32,pos:["Zagueiro"],nat:"Brasil",pers:["Experiente","Seguro"],desc:"Ajuda com liderança."},
      {name:"Gabriel Xavier", age:23,pos:["Zagueiro"],nat:"Brasil",pers:["Técnico","Jovem"],desc:"Boa saída de bola."},
      {name:"Luciano Juba", age:24,pos:["Lateral Esquerdo"],nat:"Brasil",pers:["Ofensivo","Criativo"],desc:"Muito participativo no ataque."},
      {name:"Caio Alexandre", age:25,pos:["Volante"],nat:"Brasil",pers:["Técnico","Inteligente"],desc:"Organiza o meio-campo."},
      {name:"Jean Lucas", age:26,pos:["Meia"],nat:"Brasil",pers:["Forte","Dinâmico"],desc:"Ajuda na transição."},
      {name:"Everton Ribeiro", age:35,pos:["Meia"],nat:"Brasil",pers:["Experiente","Criativo"],desc:"Cérebro do time."},
      {name:"Biel", age:23,pos:["Ponta"],nat:"Brasil",pers:["Rápido","Driblador"],desc:"Muito perigoso pelas pontas."},
      {name:"Ademir", age:29,pos:["Ponta"],nat:"Brasil",pers:["Velocidade","Objetivo"],desc:"Atacante de velocidade."},
      {name:"Everaldo", age:32,pos:["Atacante"],nat:"Brasil",pers:["Finalizador","Experiente"],desc:"Referência ofensiva."},
      {name:"Thaciano", age:29,pos:["Atacante"],nat:"Brasil",pers:["Versátil","Inteligente"],desc:"Atua em várias funções no ataque."}
    ]
  }
   ,
  "FORTALEZA":{
    korean:"São Paulo",agency:"Clube Brasileiro",debut:"1914",type:"Time de Futebol",
    photo:"img/palmeiras.jpg",
    about:"O Palmeiras é um dos clubes mais vitoriosos do Brasil.",
    members:[ {name:"João Ricardo", age:35,pos:["Goleiro"],nat:"Brasil",pers:["Experiente","Seguro"],desc:"Goleiro titular do Fortaleza, conhecido por defesas importantes."},
      {name:"Tinga", age:31,pos:["Lateral-direito"],nat:"Brasil",pers:["Raçudo","Versátil"],desc:"Capitão do time, muito importante na marcação e apoio ao ataque."},
      {name:"Brítez", age:32,pos:["Zagueiro"],nat:"Paraguai",pers:["Forte","Consistente"],desc:"Zagueiro sólido, peça-chave na defesa do Fortaleza."},
      {name:"Titi", age:36,pos:["Zagueiro"],nat:"Brasil",pers:["Experiente","Líder"],desc:"Defensor experiente, traz segurança e liderança ao sistema defensivo."},
      {name:"Bruno Pacheco", age:33,pos:["Lateral-esquerdo"],nat:"Brasil",pers:["Ofensivo","Regular"],desc:"Lateral que apoia bastante o ataque com cruzamentos."},
      {name:"Zé Welison", age:30,pos:["Volante"],nat:"Brasil",pers:["Marcador","Intenso"],desc:"Responsável pela marcação forte no meio-campo."},
      {name:"Caio Alexandre", age:25,pos:["Volante"],nat:"Brasil",pers:["Técnico","Organizador"],desc:"Um dos principais jogadores do time, dita o ritmo do jogo."},
      {name:"Pochettino", age:28,pos:["Meia"],nat:"Argentina",pers:["Criativo","Habilidoso"],desc:"Meia ofensivo com boa visão e finalização de fora da área."},
      {name:"Machuca", age:25,pos:["Atacante"],nat:"Argentina",pers:["Rápido","Driblador"],desc:"Atacante veloz que joga pelas pontas."},
      {name:"Marinho", age:34,pos:["Atacante"],nat:"Brasil",pers:["Habilidoso","Irreverente"],desc:"Jogador experiente, conhecido pelos dribles e chutes fortes."},
      {name:"Lucero", age:32,pos:["Atacante"],nat:"Argentina",pers:["Finalizador","Oportunista"],desc:"Centroavante e principal referência de gols do time."}
    ]
  }
   ,
  "CRUZEIRO":{
    korean:"São Paulo",agency:"Clube Brasileiro",debut:"1914",type:"Time de Futebol",
    photo:"img/palmeiras.jpg",
    about:"O Palmeiras é um dos clubes mais vitoriosos do Brasil.",
    members:[ {name:"Rafael Cabral", age:34,pos:["Goleiro"],nat:"Brasil",pers:["Experiente","Seguro"],desc:"Goleiro titular por muito tempo, conhecido pela liderança e defesas importantes."},
      {name:"William", age:29,pos:["Lateral-direito"],nat:"Brasil",pers:["Ofensivo","Rápido"],desc:"Lateral que apoia bastante o ataque e participa de jogadas ofensivas."},
      {name:"Neris", age:32,pos:["Zagueiro"],nat:"Brasil",pers:["Forte","Marcador"],desc:"Zagueiro físico, importante na defesa aérea."},
      {name:"Zé Ivaldo", age:27,pos:["Zagueiro"],nat:"Brasil",pers:["Raçudo","Intenso"],desc:"Defensor com muita entrega e presença defensiva."},
      {name:"Marlon", age:26,pos:["Lateral-esquerdo"],nat:"Brasil",pers:["Técnico","Ofensivo"],desc:"Lateral com boa qualidade no apoio ao ataque."},
      {name:"Lucas Romero", age:30,pos:["Volante"],nat:"Argentina",pers:["Marcador","Líder"],desc:"Volante experiente, forte na marcação e organização."},
      {name:"Ramiro", age:31,pos:["Volante"],nat:"Brasil",pers:["Versátil","Disciplinado"],desc:"Jogador tático, ajuda tanto na defesa quanto no ataque."},
      {name:"Matheus Pereira", age:28,pos:["Meia"],nat:"Brasil",pers:["Criativo","Habilidoso"],desc:"Principal armador do time, responsável por assistências e jogadas ofensivas."},
      {name:"Arthur Gomes", age:26,pos:["Atacante"],nat:"Brasil",pers:["Rápido","Driblador"],desc:"Atacante de lado de campo, usa velocidade e drible."},
      {name:"Rafael Elias", age:25,pos:["Atacante"],nat:"Brasil",pers:["Finalizador","Oportunista"],desc:"Centroavante que busca sempre o gol dentro da área."},
      {name:"Wesley", age:25,pos:["Atacante"],nat:"Brasil",pers:["Habilidoso","Irregular"],desc:"Jogador de velocidade e drible, pode decidir jogos quando está em boa fase."}
    ]
  }
};

/* ══════════════════════════════════════
   STATE & BOOTSTRAP MODAL
══════════════════════════════════════ */
var currentGroup = null;
var isDark = true;
var bsModal = null;
document.addEventListener('DOMContentLoaded', function(){
  bsModal = new bootstrap.Modal(document.getElementById('memberModal'));
  init();
});

/* ══════════════════════════════════════
   THEME
══════════════════════════════════════ */
function toggleTheme() {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  document.getElementById('toggleLabel').textContent = isDark ? 'Modo Claro' : 'Modo Escuro';
}

/* ══════════════════════════════════════
   INIT — build pills
══════════════════════════════════════ */
function init() {
  var wrap = document.getElementById('groupPills');
  Object.keys(GROUPS).forEach(function(name) {
    var btn = document.createElement('button');
    btn.className = 'gpill';
    btn.innerHTML = '<span>' + name + '</span>';
    btn.onclick = (function(n,b){ return function(){ selectGroup(n,b); }; })(name, btn);
    wrap.appendChild(btn);
  });
}

/* ══════════════════════════════════════
   SELECT GROUP
══════════════════════════════════════ */
function selectGroup(name, btn) {
  document.querySelectorAll('.gpill').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  currentGroup = name;
  var g = GROUPS[name];

  /* photo */
  var col = document.getElementById('heroPhotoCol');
  col.innerHTML = '';
  if (g.photo) {
    var img = new Image();
    img.alt = name;
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
    img.onerror = function(){
      col.innerHTML = '<div class="photo-placeholder" style="min-height:280px;display:flex;align-items:center;justify-content:center;font-family:\'Bebas Neue\',cursive;font-size:80px;color:var(--p1);opacity:.4">' + name.charAt(0) + '</div>';
    };
    img.src = g.photo;
    col.appendChild(img);
  } else {
    col.innerHTML = '<div class="photo-placeholder">' + name.charAt(0) + '</div>';
  }

  document.getElementById('heroName').textContent = name;
  document.getElementById('heroKorean').textContent = g.korean;
  document.getElementById('heroBadges').innerHTML =
    '<span class="kbadge kb-pink"><i class="bi bi-building me-1"></i>' + g.agency + '</span>' +
    '<span class="kbadge kb-purp"><i class="bi bi-calendar3 me-1"></i>fundação: ' + g.debut + '</span>' +
    '<span class="kbadge kb-cyan"><i class="bi bi-people me-1"></i>' + g.type + '</span>';

  /* stat stripe */
  document.getElementById('statStripe').innerHTML =
    '<div class="stat-cell"><div class="sc-label"><i class="bi bi-people-fill me-1"></i>Jogadores</div><div class="sc-value">' + g.members.length + '</div></div>' +
    '<div class="stat-cell"><div class="sc-label"><i class="bi bi-building me-1"></i>Organização</div><div class="sc-value">' + g.agency + '</div></div>' +
    '<div class="stat-cell"><div class="sc-label"><i class="bi bi-calendar-event me-1"></i>Fundação</div><div class="sc-value">' + g.debut + '</div></div>' +
    '<div class="stat-cell"><div class="sc-label"><i class="bi bi-tag me-1"></i>Tipo</div><div class="sc-value">' + g.type + '</div></div>';

  document.getElementById('memberCount').textContent = g.members.length + ' Jogadores';

  renderMembers(g.members);
  renderAbout(g);

  document.getElementById('emptyState').style.display = 'none';
  var panel = document.getElementById('group-panel');
  panel.style.display = 'block';
  panel.classList.remove('fade-up');
  void panel.offsetWidth;
  panel.classList.add('fade-up');
  showTab('members');
  setTimeout(function(){ panel.scrollIntoView({behavior:'smooth',block:'start'}); }, 80);
}

/* ══════════════════════════════════════
   MEMBERS
══════════════════════════════════════ */
function renderMembers(members) {
  var grid = document.getElementById('membersGrid');
  grid.innerHTML = '';
  members.forEach(function(m) {
    var card = document.createElement('div');
    card.className = 'mcard';
    card.innerHTML =
      '<div class="mcard-avatar">' +
  (m.photo 
    ? '<img src="'+m.photo+'" class="player-img">'
    : m.name.charAt(0)
  ) +
        '<div class="mcard-pos">' + m.pos[0] + '</div>' +
      '</div>' +
      '<div class="mcard-body">' +
        '<div class="mcard-name">' + m.name + '</div>' +
        '<div class="mcard-kor">' + m.korean + '</div>' +
        '<div class="mcard-stats">' +
          '<div class="ms-row"><span class="ms-l">Idade</span><span class="ms-v">' + m.age + ' anos</span></div>' +
          '<div class="ms-row"><span class="ms-l">Nac.</span><span class="ms-v">' + m.nat + '</span></div>' +
          '<div class="ms-row"><span class="ms-l">Personalidade</span><span class="ms-v">' + m.pers[0] + '</span></div>' +
        '</div>' +
        '<div class="mcard-cta"><i class="bi bi-person-lines-fill"></i> Ver perfil completo</div>' +
      '</div>';
    card.onclick = (function(mem){ return function(){ openModal(mem); }; })(m);
    grid.appendChild(card);
  });
}

/* ══════════════════════════════════════
   ABOUT
══════════════════════════════════════ */
function renderAbout(g) {
  document.getElementById('viewAbout').innerHTML =
    '<div class="about-card mb-3">' +
      '<h6><i class="bi bi-stars"></i> Sobre o Time</h6>' +
      '<p>' + g.about + '</p>' +
    '</div>' +
    '<div class="about-card">' +
      '<h6><i class="bi bi-info-circle"></i> Informações</h6>' +
      '<div class="info-grid">' +
        '<div class="info-item"><div class="ii-label">Organização</div><div class="ii-val">' + g.agency + '</div></div>' +
        '<div class="info-item"><div class="ii-label">Fundação</div><div class="ii-val">' + g.debut + '</div></div>' +

        '<div class="info-item"><div class="ii-label">Tipo</div><div class="ii-val">' + g.type + '</div></div>' +
        '<div class="info-item"><div class="ii-label">Jogadores</div><div class="ii-val">' + GROUPS[currentGroup].members.length + ' membros</div></div>' +
      '</div>' +
    '</div>';
}

/* ══════════════════════════════════════
   TABS
══════════════════════════════════════ */
function showTab(tab) {
  document.getElementById('tabMem').classList.toggle('active', tab === 'members');
  document.getElementById('tabAbout').classList.toggle('active', tab === 'about');
  document.getElementById('viewMembers').style.display = tab === 'members' ? 'block' : 'none';
  document.getElementById('viewAbout').style.display   = tab === 'about'   ? 'block' : 'none';
}

/* ══════════════════════════════════════
   MODAL
══════════════════════════════════════ */
function openModal(m) {
  var posTags = m.pos.map(function(p, i) {
    var c = i === 0 ? 'mpos-main' : i === 1 ? 'mpos-lead' : 'mpos-def';
    return '<span class="mpos ' + c + '">' + p + '</span>';
  }).join('');
  var pTags = m.pers.map(function(p){ return '<span class="ptag">' + p + '</span>'; }).join('');

  document.getElementById('modalBody').innerHTML = '<div class="d-flex gap-3 align-items-start mb-4">' + '<div class="m-avatar">' + m.name.charAt(0) + '</div>' + '<div>' + '<div class="m-name">' + m.name + '</div>' + '<div class="m-kor">' + m.korean + '</div>' + '<div class="m-pos-wrap">' + posTags + '</div>' + '</div>' + '</div>' +
    '</div>' +
    '<div class="m-detail-grid">' +
      '<div class="m-detail"><div class="dl"><i class="bi bi-calendar3 me-1"></i>Idade</div><div class="dv">' + m.age + ' anos</div></div>' +
      '<div class="m-detail"><div class="dl"><i class="bi bi-globe me-1"></i>Nacionalidade</div><div class="dv">' + m.nat + '</div></div>' +
      '<div class="m-detail"><div class="dl"><i class="bi bi-star me-1"></i>Posição</div><div class="dv">' + m.pos[0] + '</div></div>' +
    '</div>' +
    '<div class="pers-sec-title"><i class="bi bi-emoji-smile me-1"></i> Personalidade</div>' +
    '<div class="pers-tags">' + pTags + '</div>' +
    '<p class="pers-desc">' + m.desc + '</p>';

  bsModal.show();
}
