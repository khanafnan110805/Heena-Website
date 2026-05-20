import type { Campaign } from '../../../data/campaigns.data'
import { WhatsAppCTA } from '../WhatsAppCTA'
import { Badge } from '../../atoms/Badge'

interface CampaignBannerProps {
  campaign: Campaign
}

export function CampaignBanner({ campaign }: CampaignBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-sm min-h-[320px] md:min-h-[400px] flex items-end">
      {/* Background image */}
      <img
        src={campaign.imageUrl}
        alt={campaign.title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-base/90 via-bg-base/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 max-w-lg">
        {campaign.badgeText && (
          <Badge variant="gold" className="mb-4">
            {campaign.badgeText}
          </Badge>
        )}
        <p className="font-body text-xs text-gold-primary tracking-widest uppercase mb-2">
          {campaign.subtitle}
        </p>
        <h3 className="font-display text-4xl md:text-5xl text-text-primary font-light leading-tight mb-4">
          {campaign.title}
        </h3>
        <p className="font-body text-text-secondary text-base mb-6 leading-relaxed max-w-sm">
          {campaign.description}
        </p>
        <WhatsAppCTA
          message={campaign.whatsappMessage}
          label={campaign.ctaLabel}
          size="md"
          pulse
        />
      </div>
    </div>
  )
}
