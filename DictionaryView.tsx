/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Users, Box, Hammer, MapPin, Play, Map, Navigation, Command, Info, Ruler, FileText } from 'lucide-react';

export default function DictionaryView() {
  const categories = [
    {
      title: "Մարդիկ (Personas)",
      icon: <Users className="text-brand-green" />,
      items: [
        { hy: "աշխատող", es: "obrero" },
        { hy: "շինարար", es: "constructor" },
        { hy: "ճարտարապետ", es: "arquitecto" },
        { hy: "ինժեներ", es: "ingeniero" },
        { hy: "շինարարական վարպետ", es: "maestro de obra" },
      ]
    },
    {
      title: "Նյութեր (Materiales)",
      icon: <Box className="text-brand-brown" />,
      items: [
        { hy: "ցեմենտ", es: "cemento" },
        { hy: "բետոն", es: "hormigón" },
        { hy: "աղյուս", es: "ladrillo" },
        { hy: "փայտ", es: "madera" },
        { hy: "մետաղ", es: "metal" },
        { hy: "ավազ", es: "arena" },
      ]
    },
    {
      title: "Գործիքներ (Herramientas)",
      icon: <Hammer className="text-brand-orange" />,
      items: [
        { hy: "մուրճ", es: "martillo" },
        { hy: "սղոց", es: "sierra" },
        { hy: "փորիչ", es: "taladro" },
        { hy: "մակարդակաչափ", es: "nivel" },
        { hy: "մեխ", es: "clavo" },
      ]
    },
    {
      title: "Տեղեր (Lugares)",
      icon: <MapPin className="text-brand-green" />,
      items: [
        { hy: "շինհրապարակ", es: "obra" },
        { hy: "շենք", es: "edificio" },
        { hy: "տուն", es: "casa" },
        { hy: "սենյակ", es: "habitación" },
        { hy: "պատ", es: "pared" },
        { hy: "հատակ", es: "suelo" },
        { hy: "առաստաղ", es: "techo" },
      ]
    },
    {
      title: "Բայեր (Verbos)",
      icon: <Play className="text-brand-orange" />,
      items: [
        { hy: "կառուցել", es: "construir" },
        { hy: "աշխատել", es: "trabajar" },
        { hy: "չափել", es: "medir" },
        { hy: "կտրել", es: "cortar" },
        { hy: "դնել", es: "poner" },
        { hy: "տանել", es: "llevar" },
        { hy: "ավարտել", es: "terminar" },
        { hy: "սկսել", es: "empezar / comenzar" },
      ]
    },
    {
      title: "Տեղի նախդիրներ (Preposiciones)",
      icon: <Map className="text-brand-brown" />,
      items: [
        { hy: "մեջ", es: "en" },
        { hy: "վրա", es: "sobre / encima de" },
        { hy: "տակ", es: "debajo de" },
        { hy: "կողքին", es: "al lado de" },
        { hy: "միջև", es: "entre" },
        { hy: "առջև", es: "delante de" },
        { hy: "հետևում", es: "detrás de" },
      ]
    },
    {
      title: "Ուղղություններ (Direcciones)",
      icon: <Navigation className="text-brand-green" />,
      items: [
        { hy: "ձախ", es: "a la izquierda" },
        { hy: "աջ", es: "a la derecha" },
        { hy: "ուղիղ", es: "todo recto" },
        { hy: "թեքվիր ձախ", es: "gira a la izquierda" },
        { hy: "թեքվիր աջ", es: "gira a la derecha" },
      ]
    },
    {
      title: "Աշխատանքային հրամաններ",
      icon: <Command className="text-brand-orange" />,
      items: [
        { hy: "Դիր այստեղ", es: "Pon aquí" },
        { hy: "Դիր ձախ", es: "Pon a la izquierda" },
        { hy: "Դիր աջ", es: "Pon a la derecha" },
        { hy: "Չափիր պատը", es: "Mide la pared" },
      ]
    },
    {
      title: "Հեռավորություն և Չափեր",
      icon: <Ruler className="text-brand-brown" />,
      items: [
        { hy: "մոտ", es: "cerca de" },
        { hy: "հեռու", es: "lejos de" },
        { hy: "բարձր", es: "alto" },
        { hy: "լայն", es: "ancho" },
        { hy: "երկար", es: "largo" },
        { hy: "կարճ", es: "corto" },
      ]
    }
  ];

  const examples = [
    { es: "La pared está a la izquierda", hy: "Պատը ձախ է" },
    { es: "La puerta está a la derecha de la pared", hy: "Դուռը պատի աջ կողմում է" },
    { es: "Ve todo recto", hy: "Գնա ուղիղ" },
    { es: "El martillo está en la mesa", hy: "Մուրճը սեղանի վրա է" },
    { es: "El ladrillo está debajo de la mesa", hy: "Աղյուսը սեղանի տակ է" },
    { es: "La obra está cerca de la casa", hy: "Շինհրապարակը տան մոտ է" },
    { es: "Construimos una casa", hy: "Մենք տուն ենք կառուցում" },
    { es: "El obrero trabaja en la obra", hy: "Աշխատողը աշխատում է շինհրապարակում" },
    { es: "Necesitamos cemento", hy: "Մեզ ցեմենտ է պետք" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <header className="text-center space-y-4">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-white/90 backdrop-blur-md rounded-[32px] shadow-xl border-4 border-brand-orange/20 mx-auto flex items-center justify-center text-5xl"
        >
          🏗️
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-slate-900 uppercase">
          ՇԻՆԱՐԱՐՈՒԹՅԱՆ <span className="text-brand-brown underline decoration-brand-green">ԲԱՌԱՐԱՆ</span>
        </h1>
        <p className="text-slate-500 text-xl font-bold uppercase tracking-widest italic drop-shadow-sm">
          CONSTRUCCIÓN • VOCABULARIO
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div 
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="lesson-card p-6 border-t-4 border-brand-brown"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-slate-50 rounded-2xl shadow-inner">
                {cat.icon}
              </div>
              <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight leading-none">
                {cat.title}
              </h2>
            </div>
            <div className="space-y-3">
              {cat.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center group">
                  <span className="text-slate-500 font-bold text-sm tracking-tight">{item.hy}</span>
                  <div className="flex-1 border-b border-dotted border-slate-200 mx-2 mb-1" />
                  <span className="text-brand-brown font-black italic group-hover:text-brand-orange transition-colors">
                    {item.es}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="lesson-card p-8 md:p-12 border-l-8 border-brand-green bg-brand-green/5"
      >
        <h2 className="text-3xl font-black text-slate-800 uppercase mb-8 flex items-center gap-3">
          <FileText className="text-brand-green" /> ՕՐԻՆԱԿՆԵՐ (FRASES)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {examples.map((ex, i) => (
            <div key={i} className="p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xl font-black text-brand-green italic mb-1">{ex.es}</p>
              <p className="text-slate-500 font-bold">{ex.hy}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
