export type ServiceType = 'bridal' | 'arabic' | 'floral' | 'indian' | 'group' | 'other'
export type OccasionType = 'bridal' | 'eid' | 'event' | 'casual' | 'other'

export interface BookingFormData {
  name: string
  phone: string
  email?: string
  serviceType: ServiceType
  occasionType: OccasionType
  preferredDate: string
  preferredTime: string
  isHomeService: boolean
  address?: string
  guestCount?: string
  specialRequests?: string
  designVision?: string
}

export interface BookingSubmissionResponse {
  success: boolean
  message: string
}
