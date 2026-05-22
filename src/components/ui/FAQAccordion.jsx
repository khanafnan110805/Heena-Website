import { FAQ_ITEMS } from '../../data/contentData.js'
import AccordionItem from './AccordionItem.jsx'

export default function FAQAccordion({ limit }) {
  const items = limit ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS

  if (limit) {
    return (
      <div>
        {items.map(item => (
          <AccordionItem key={item.id} question={item.question} answer={item.answer} />
        ))}
      </div>
    )
  }

  // Grouped for full FAQ page
  const groups = items.reduce((acc, item) => {
    if (!acc[item.group]) acc[item.group] = []
    acc[item.group].push(item)
    return acc
  }, {})

  return (
    <div className="space-y-10">
      {Object.entries(groups).map(([group, groupItems]) => (
        <div key={group}>
          <h3 className="font-body text-xs text-gold-primary uppercase tracking-widest mb-4">{group}</h3>
          <div>
            {groupItems.map(item => (
              <AccordionItem key={item.id} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
