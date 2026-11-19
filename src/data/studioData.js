// ==============================================================================
// CONFIGURAÇÃO CENTRAL DA CLIENTE: RAFAELA BARBALHO NAIL DESIGNER (JOÃO PESSOA)
// Toda a personalização do site fica neste arquivo.
// Fontes: bio e destaques do Instagram @rafabarbalhonails (serviços, endereço)
// e post "Promoção de inauguração" (WhatsApp e Spa dos pés + manicure a R$ 100).
// ATENÇÃO: com exceção do Spa dos pés + manicure, os valores abaixo são uma
// estimativa para a demo. O horário também é estimado. Trocar pelos reais
// da Rafaela antes da entrega.
// ==============================================================================

export const studioConfig = {
  name: "Rafaela Barbalho",
  nameSuffix: "Nail Designer",
  fullName: "Rafaela Barbalho Nail Designer",
  tagline: "Esmalteria em Manaíra, João Pessoa",
  subtitle:
    "Molde F1, esmaltação em gel, blindagem e spa dos pés, num espaço pensado para você sair renovada. Escolha o serviço, veja o valor e reserve seu horário em poucos toques.",
  city: "João Pessoa, PB",
  neighborhood: "Manaíra",
  addressShort: "Av. Eutiquiano Barreto, 512, sala 203",
  address: "Av. Eutiquiano Barreto, 512, sala 203, Ed. Marenostrum, Manaíra, João Pessoa - PB",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Eutiquiano+Barreto,+512+Manaíra,+João+Pessoa+-+PB",
  whatsappNumber: "5583988785429", // Apenas dígitos com DDI e DDD
  whatsappDisplay: "(83) 98878-5429",
  instagramHandle: "@rafabarbalhonails",
  instagramUrl: "https://www.instagram.com/rafabarbalhonails",
  // Link do Calendly. Na demo usamos a agenda de teste; na entrega vai o da Rafaela.
  calendlyUrl: "https://calendly.com/carbosalarissa/30min",
  workingHours: [
    { days: "Segunda a Sexta", hours: "08h às 18h" },
    { days: "Sábado", hours: "08h às 14h" },
  ],
  workingHoursShort: "Seg. a sáb., a partir das 08h",
  // Dias sem atendimento (0 = domingo ... 6 = sábado). Vazio = abre todos os dias.
  closedWeekdays: [0],
  periods: [
    { id: "Manhã (08h às 12h)", label: "Manhã", sub: "08h às 12h" },
    { id: "Tarde (13h às 18h)", label: "Tarde", sub: "13h às 18h" },
  ],
  paymentNote: "O horário fica reservado assim que a Rafaela confirmar pelo WhatsApp.",
  // Avisos que a cliente confirma antes de agendar
  bookingNotes: [
    "Chegue 5 minutinhos antes. O prédio é o Ed. Marenostrum, sala 203.",
    "Se precisar desmarcar, avise com um dia de antecedência.",
    "Atrasos acima de 15 minutos podem precisar ser remarcados.",
  ],
  decoratedNote: "Decorações e nail art têm valor sob consulta. É só escrever nas observações.",

  // Categorias de serviço (cada uma com suas opções e valores)
  categories: [
    {
      id: "molde-f1",
      title: "Molde F1",
      short: "Molde F1",
      description: "Alongamento com molde F1: unhas finas, simétricas e resistentes, no formato que combina com a sua mão.",
      image: "/images/francesinha-quadrada.webp",
      duration: "2h a 2h30",
      maintenance: "Manutenção indicada a cada 20 a 25 dias",
      notes: [
        "Inclui cutilagem",
        "Formatos: quadrado, amendoado, bailarina ou stiletto",
      ],
      items: [
        { id: "f1-classico", title: "Aplicação em molde F1", price: 140, popular: true },
        { id: "f1-francesinha", title: "Molde F1 com francesinha", price: 160 },
        { id: "f1-gel", title: "Molde F1 com esmaltação em gel", price: 160 },
      ],
    },
    {
      id: "manutencao",
      title: "Manutenção",
      short: "Manutenção",
      description: "Manutenção no prazo certo para o alongamento continuar bonito e firme até a próxima visita.",
      image: "/images/francesinha-preta.webp",
      duration: "1h30 a 2h",
      maintenance: "Indicada a cada 20 a 25 dias",
      notes: ["Inclui cutilagem", "Unha quebrada é cobrada à parte"],
      items: [
        { id: "manut-classica", title: "Manutenção do molde F1", price: 90, popular: true },
        { id: "manut-francesinha", title: "Manutenção com francesinha", price: 105 },
        { id: "manut-gel", title: "Manutenção com esmaltação em gel", price: 105 },
      ],
    },
    {
      id: "esmaltacao-gel",
      title: "Esmaltação em Gel",
      short: "Esmaltação em Gel",
      description: "Cor e brilho que duram semanas na unha natural, sem descascar.",
      image: "/images/vermelho-classico.webp",
      duration: "1h a 1h30",
      maintenance: "Dura de 15 a 20 dias",
      notes: ["Inclui cutilagem"],
      items: [
        { id: "gel-mao", title: "Esmaltação em gel na mão", price: 60 },
        { id: "gel-mao-pe", title: "Esmaltação em gel na mão e no pé", price: 100 },
      ],
    },
    {
      id: "blindagem",
      title: "Blindagem",
      short: "Blindagem",
      description: "Camada protetora sobre a unha natural. Ela cresce forte, sem lascar, e o brilho fica por semanas.",
      image: "/images/perolado-natural.webp",
      duration: "1h30",
      maintenance: "Manutenção indicada a cada 20 a 25 dias",
      notes: ["Inclui cutilagem"],
      items: [
        { id: "blindagem", title: "Blindagem", price: 80 },
        { id: "blindagem-gel", title: "Blindagem com esmaltação em gel", price: 95 },
      ],
    },
    {
      id: "spa-pes",
      title: "Spa dos Pés",
      short: "Spa dos Pés",
      description: "Escalda-pés, esfoliação e hidratação para relaxar de verdade. Combine com a manicure e saia com mãos e pés impecáveis.",
      image: "/images/nude-rosado.webp",
      duration: "1h30",
      maintenance: "",
      notes: ["Spa + manicure inclui cutilagem e esmaltação das mãos"],
      items: [
        { id: "spa-manicure", title: "Spa dos pés + manicure", price: 100, popular: true },
        { id: "spa", title: "Spa dos pés", price: 70 },
      ],
    },
    {
      id: "manicure",
      title: "Manicure e Pedicure",
      short: "Pé e Mão",
      description: "O cuidado do dia a dia, com cutilagem caprichada e esmaltação comum.",
      image: "/images/preto-stiletto.webp",
      duration: "1h",
      maintenance: "",
      notes: ["Esmaltação comum inclusa"],
      items: [
        { id: "mao", title: "Manicure (mão)", price: 30 },
        { id: "pe", title: "Pedicure (pé)", price: 35 },
        { id: "pe-mao", title: "Pé e mão", price: 60 },
      ],
    },
  ],

  // Adicionais que podem ser somados no agendamento
  addons: [
    { id: "nail-art", name: "Decoração simples (por unha)", price: 5 },
    { id: "quebrada", name: "Unha quebrada no alongamento (por unha)", price: 15 },
    { id: "remocao", name: "Remoção de alongamento ou gel", price: 30 },
  ],

  // Informações importantes
  policies: [
    {
      title: "Onde fica",
      description: "Ed. Marenostrum, sala 203, na Av. Eutiquiano Barreto, 512, em Manaíra.",
    },
    {
      title: "Pontualidade",
      description: "Chegue 5 minutinhos antes. Atrasos acima de 15 minutos podem precisar ser remarcados.",
    },
    {
      title: "Desistência",
      description: "Imprevistos acontecem. Só pedimos que avise com um dia de antecedência para liberar o horário.",
    },
    {
      title: "Decorações",
      description: "Nail art, pedrarias e decorações especiais têm valor sob consulta. Mande a foto da inspiração.",
    },
  ],

  // Galeria de fotos de resultados (fotos reais do Instagram da Rafaela)
  gallery: [
    { url: "/images/francesinha-quadrada.webp", tag: "Francesinha no molde F1" },
    { url: "/images/vermelho-classico.webp", tag: "Vermelho clássico" },
    { url: "/images/francesinha-preta.webp", tag: "Francesinha preta amendoada" },
    { url: "/images/perolado-natural.webp", tag: "Perolado natural" },
    { url: "/images/nude-rosado.webp", tag: "Nude rosado" },
    { url: "/images/preto-stiletto.webp", tag: "Preto stiletto" },
  ],
};

// Lista "achatada" de todos os serviços, usada no agendamento
export const allServices = studioConfig.categories.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    category: cat.title,
    categoryId: cat.id,
    duration: item.duration || cat.duration,
  }))
);

export const formatPrice = (value) =>
  `R$ ${Number(value).toFixed(2).replace(".", ",")}`;
