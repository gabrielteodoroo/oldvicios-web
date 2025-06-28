import React from 'react';

const rules = [
  <>
    <strong>Extremamente proibido vender/anunciar/oferecer qualquer tipo de Service ou RWT</strong> (venda de cash, conta do jogo).
  </>,
  <>
    <strong>Tratar a todos com respeito.</strong> Nenhum tipo de assédio ou ameaças, "caça às bruxas", sexismo, racismo ou discurso de ódio será tolerado.
  </>,
  <>
    Em nossa comunidade é <strong>proibido qualquer tipo de apologia ao crime organizado, terrorismo ou ideologias radicais.</strong>
  </>,
  <>
    <strong>Não tenha atitudes babacas</strong> em qualquer tipo de interação com o clã. Utilize do bom senso e tenha respeito.
  </>,
  <>
    <strong>Se você presenciar algo que quebre as regras</strong>, ou algo que te faça sentir insegurança, <strong>avise a Staff.</strong> Queremos que o OldVicios seja um espaço acolhedor!
  </>,
];

const Rules: React.FC = () => (
  <section id="rules" className="py-24 bg-black/30">
    <div className="container max-w-3xl mx-auto px-5">
      <h2 className="text-4xl md:text-5xl mb-8 text-yellow-400 text-center">Regras do Clã</h2>
      <ol className="list-decimal list-inside space-y-6 text-lg text-[#b8bcc8] bg-white/5 rounded-2xl p-8 border border-yellow-400/20 shadow-lg">
        {rules.map((rule, i) => (
          <li key={i}>{rule}</li>
        ))}
      </ol>
    </div>
  </section>
);

export default Rules; 