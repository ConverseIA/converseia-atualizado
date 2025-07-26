'use client';

import { useState } from 'react';
import { LINK_CTA_WHATSAPP, PLANS_AVALIABLE } from '@/lib/constants';
import { Button } from './ui/button';

export const Plans = () => {
  const [selectedPeriodIndex, setSelectedPeriodIndex] = useState(0);

  return (
    <div className="space-y-8">
      <h1 className="text-white text-center font-bold text-4xl">
        Escolha o <span className="text-secondary">plano sob medida</span> para você:
      </h1>

      <div className="flex justify-center gap-4 mb-8">
        {PLANS_AVALIABLE[0].periods && PLANS_AVALIABLE[0].periods.map((period, index) => (
          <button
            key={period.label}
            onClick={() => setSelectedPeriodIndex(index)}
            className={`py-2 px-4 rounded-full text-white font-semibold transition-colors duration-300
              ${selectedPeriodIndex === index ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
          >
            {period.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-8 items-center">
        <div className="grid base:grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-screen-lg">
          {PLANS_AVALIABLE.map((plan, index) => {
            const currentPeriod = plan.periods ? plan.periods[selectedPeriodIndex] : null;
            const calculatedTotalPrice = (plan.monthlyPrice !== undefined && currentPeriod) ? 
              (plan.monthlyPrice * currentPeriod.months * (1 - currentPeriod.discount)).toFixed(2) : null;
            const calculatedMonthlyPrice = (plan.monthlyPrice !== undefined && currentPeriod) ? 
              (plan.monthlyPrice * (1 - currentPeriod.discount)).toFixed(2) : null;
            const discountCash = currentPeriod && currentPeriod.months > 1 ? 0.05 : 0; // 5% de desconto à vista para planos cumulativos
            const priceWithCashDiscount = calculatedTotalPrice ? (parseFloat(calculatedTotalPrice) * (1 - discountCash)).toFixed(2) : null;

            return (
              <div
                key={plan.title}
                className="bg-gradient-to-b from-[#004bb5] to-[#003a8c] p-8 flex flex-col gap-6 rounded-xl shadow-xl transform transition-transform hover:scale-[1.05]"
              >
                <h3 className="text-center font-extrabold text-3xl text-white transition-colors duration-300 hover:text-yellow-400">
                  {plan.title}
                </h3>
                
                {plan.title !== 'Escritório Personalizado' && calculatedTotalPrice && (
                  <div className="flex flex-col items-center mt-2">
                    <span className="text-white text-2xl font-bold">R${calculatedMonthlyPrice?.replace('.', ',')} /mês</span>
                    {currentPeriod && currentPeriod.months > 1 && (
                      <p className="text-gray-300 text-sm mt-1">
                        Total: R${calculatedTotalPrice?.replace('.', ',')} em {currentPeriod.installments}x de R${(parseFloat(calculatedTotalPrice) / currentPeriod.installments).toFixed(2).replace('.', ',')}
                      </p>
                    )}
                    {currentPeriod && currentPeriod.months > 1 && (
                      <p className="text-green-400 text-sm mt-1 font-semibold">
                        À vista: R${priceWithCashDiscount?.replace('.', ',')} (+5% de desconto)
                      </p>
                    )}
                  </div>
                )}

                {plan.title === 'Escritório Personalizado' && (
                  <div className="flex justify-center items-baseline mt-2 transition-transform duration-300 hover:scale-[1.1]">
                    <span className="text-white text-2xl font-bold">{plan.price}</span>
                  </div>
                )}

                <ul className="list-disc list-inside space-y-2 text-gray-100 custom-font leading-relaxed">
                  {plan.list?.map((charge, idx) => (
                    <li key={`${plan.title}-${idx}`} className="flex items-start gap-2">
                      <img src="/icons/verify-white.svg" alt="verify-icon" />
                      {charge}
                    </li>
                  ))}
                </ul>

                {index < 2 && (
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-6 rounded-full mt-auto shadow-md transform transition-transform hover:scale-105"
                    asChild
                  >
                    <a href="https://forms.gle/83EQjA4E7xEL9kSPA" target="_blank" rel="noreferrer">
                      Teste grátis 7 dias
                    </a>
                  </Button>
                )}

                {index === 2 && (
                  <div className="mt-auto">
                    <Button
                      className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-6 rounded-full shadow-md transform transition-transform hover:scale-105"
                      asChild
                    >
                      <a href={LINK_CTA_WHATSAPP} target="_blank" rel="noreferrer">
                        Fale conosco
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
