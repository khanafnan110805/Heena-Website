import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function AccordionItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-border-dark">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group focus-visible:outline-none focus-visible:text-gold-primary"
        aria-expanded={isOpen}
      >
        <span className={`font-body text-base transition-colors duration-200 ${isOpen ? 'text-gold-champagne' : 'text-text-primary group-hover:text-gold-champagne'}`}>
          {question}
        </span>
        <ChevronDown size={18} className={`shrink-0 text-gold-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold-primary' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="font-body text-text-secondary leading-relaxed text-[15px]">{answer}</p>
      </div>
    </div>
  )
}
