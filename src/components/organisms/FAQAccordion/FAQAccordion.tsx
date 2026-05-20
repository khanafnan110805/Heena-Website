import { FAQ_ITEMS } from '../../../data/faq.data'
import { AccordionItem } from '../../molecules/AccordionItem'

interface FAQAccordionProps {
  limit?: number
}

export function FAQAccordion({ limit }: FAQAccordionProps) {
  const items = limit ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS

  // Group by category
  const groups = items.reduce<Record<string, typeof items>>((acc, item) => {
    if (!acc[item.group]) acc[item.group] = []
    acc[item.group].push(item)
    return acc
  }, {})

  if (limit) {
    // Flat list for preview
    return (
      <div>
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    )
  }

  // Grouped list for full FAQ page
  return (
    <div className="space-y-10">
      {Object.entries(groups).map(([group, groupItems]) => (
        <div key={group}>
          <h3 className="font-body text-xs text-gold-primary uppercase tracking-widest mb-4">
            {group}
          </h3>
          <div>
            {groupItems.map((item) => (
              <AccordionItem
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
