export function getInitials(name: string): string {
	// Split the name into words
	const words = name.split(' ');
	// Get the first letter of each word, capitalize it, and join them
	const initials = words.map((word) => word[0].toUpperCase()).join('');
	return initials;
}

export const TITLE = "Agentes e Módulos Disponíveis";

export const CHARGES_AVALIABLE = [
	{
		title: 'Secretária',
		type: 'Agente',
		list: [
			'Compreende a demanda inicial',
			'Encaminha para o setor ou Agente de IA responsável',
			
		],
	},
	{
		title: 'SDR - Pré Vendedor(a)',
		type: 'Agente',
		list: [
			'Investiga a viabilidade do caso',
			'Entende a situação do potencial cliente',
			'Faz o processo de qualificação',
			'Convida e encaminha o cliente para o agendamento',
		],
	},
	{
		title: 'Suporte - Consulta de Processos',
		type: 'Agente',
		list: [
			'Faz a consulta de dados no PJE',
			'Retorna informações sobre o processo sem jurisdiquês',
			'Responde todas as dúvidas do cliente',
			'Acompanha a movimentação processual em tempo real',
			
		],
	},
	{
		title: 'Social Selling',
		type: 'Agente',
		list: [
			'Identifica a demanda',
			'Compreende a demanda inicial',
			'Encaminha para o setor ou Agente de IA responsável',
			'Recolhe o contato e faz contato ativo no whatsapp',
		],
	},
	{
		title: 'Agendamento Automático',
		type: 'Módulo',
		list: [
			'Agenda, cancela e remarcar reuniões',
			'Organiza a Agenda da Equipe',
		],
	},
	{
		title: 'Follow UP',
		type: 'Módulo',
		list: [
		'Envia lembretes automáticos para leads que ainda não responderam',
		'Realiza tentativas de retorno com abordagens personalizadas',
		'Retoma conversas pausadas de forma contextualizada',
		],
	},
];
export const PLANS_AVALIABLE = [
  {
    title: 'Escritório Essencial',
    monthlyPrice: 700,
    periods: [
      { months: 1, discount: 0, label: '1 mes', installments: 1 },
      { months: 3, discount: 0.05, label: '3 meses', installments: 3 },
      { months: 6, discount: 0.10, label: '6 meses', installments: 6 },
      { months: 9, discount: 0.15, label: '9 meses', installments: 9 },
      { months: 12, discount: 0.20, label: '1 ano', installments: 12 },
    ],
    list: [
      'Até 5 acessos e 5 mil contatos na plataforma',
      'WhatsApp QR Code, WhatsApp Oficial, Instagram/Direct e mais',
      'Todos os recursos avançados da plataforma + CRM Jurídico',
      'Agente SDR',
      '4 tentativas de Follow-UP (FUP) fluido e personalizado',
      'Bônus de R$300 de API para até 4.000 mil mensagens enviadas pelo seu Agente',
    ],
  },
  {
    title: 'Escritório Avançado',
    monthlyPrice: 999,
    periods: [
      { months: 1, discount: 0, label: '1 mês', installments: 1 },
      { months: 3, discount: 0.05, label: '3 meses', installments: 3 },
      { months: 6, discount: 0.10, label: '6 meses', installments: 6 },
      { months: 9, discount: 0.15, label: '9 meses', installments: 9 },
      { months: 12, discount: 0.20, label: '1 ano', installments: 12 },
    ],
    list: [
      'Tudo do plano Escritório Essencial, mais:',
      'Agente de consulta de processo',
      'Bônus de R$300 de API para até 4.000 mil mensagens enviadas pelo seu Agente',
    ],
    buttonText: 'Teste grátis 7 dias',
  },
  {
    title: 'Escritório Personalizado',
    price: 'A definir',
    list: [
      'Personalize o seu plano de acordo com a sua necessidade.',
    ],
  },
];

export const LINK_CTA_WHATSAPP =
	'https://wa.me/5581991656423?text=Gostaria+de+saber+mais+sobre+a+ConverseIA+Direito';

export const LINK_VIDEO =
	'https://res.cloudinary.com/djlmnni49/video/upload/v1744822684/p5v7xcegbarzgevauk54.mp4';

export const LINK_AFFILIATES = '#';

export const LINK_LOGIN = '#';

export const LINK_NAVIGATE = [
	{
		href: '#inicio',
		label: 'Início',
	},
	{
		href: '#sobre',
		label: 'Sobre',
	},
	{
		href: '#recursos',
		label: 'Recursos',
	},
	{
		href: '#planos',
		label: 'Planos',
	},
	{
		href: 'https://converseia.gitbook.io/converseia-docs', 
		label: 'Documentação',
	},
	{
		href: '#parceiros',
		label: 'Parceiros',
	},
];

export const LINK_FOR_LINKEDIN = 'https://www.linkedin.com/company/converseia-direito';

export const LINK_FOR_INSTAGRAM = 'https://www.instagram.com/converse.ia/';


