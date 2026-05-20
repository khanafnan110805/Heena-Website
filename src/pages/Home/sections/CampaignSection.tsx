import { ACTIVE_CAMPAIGNS } from '../../../data/campaigns.data'
import { CampaignBanner } from '../../../components/molecules/CampaignBanner'
import { ScrollReveal } from '../../../components/atoms/ScrollReveal'

export function CampaignSection() {
  if (ACTIVE_CAMPAIGNS.length === 0) return null

  return (
    <section id="campaigns" className="section-padding bg-bg-elevated">
      <div className="container-width space-y-5">
        {ACTIVE_CAMPAIGNS.map((campaign, i) => (
          <ScrollReveal key={campaign.id} delay={i * 100}>
            <CampaignBanner campaign={campaign} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
