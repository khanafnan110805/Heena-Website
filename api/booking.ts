/**
 * Booking API Handler
 *
 * This is a reference implementation for server-side booking form processing.
 * For static hosting (Vercel, Netlify, etc.), replace with your platform's
 * serverless function format.
 *
 * The frontend BookingForm component POSTs to /api/booking.
 * If the endpoint is unavailable, the form still shows success (graceful fallback).
 *
 * Typical integrations:
 *  - Send email notification via nodemailer / SendGrid / Resend
 *  - Post to Google Sheets via Sheets API
 *  - Trigger a WhatsApp Business API message
 *  - Write to a database (Supabase, PlanetScale, etc.)
 */

export interface BookingPayload {
  name: string
  phone: string
  email?: string
  serviceType: string
  occasionType: string
  preferredDate: string
  preferredTime: string
  isHomeService: boolean
  address?: string
  guestCount?: string
  specialRequests?: string
  designVision?: string
}

export interface BookingResponse {
  success: boolean
  message: string
  id?: string
}

// Example: Vercel Edge Function handler
// export const config = { runtime: 'edge' }
// export default async function handler(req: Request): Promise<Response> {
//   if (req.method !== 'POST') {
//     return new Response('Method not allowed', { status: 405 })
//   }
//
//   try {
//     const data: BookingPayload = await req.json()
//
//     // Validate required fields
//     if (!data.name || !data.phone || !data.serviceType) {
//       return new Response(
//         JSON.stringify({ success: false, message: 'Missing required fields' }),
//         { status: 400, headers: { 'Content-Type': 'application/json' } }
//       )
//     }
//
//     // Send notification (example with Resend)
//     // await resend.emails.send({
//     //   from: 'noreply@hennabyartist.com',
//     //   to: 'hello@hennabyartist.com',
//     //   subject: `New Booking Request — ${data.name}`,
//     //   html: formatBookingEmail(data),
//     // })
//
//     return new Response(
//       JSON.stringify({ success: true, message: 'Booking request received' }),
//       { status: 200, headers: { 'Content-Type': 'application/json' } }
//     )
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ success: false, message: 'Server error' }),
//       { status: 500, headers: { 'Content-Type': 'application/json' } }
//     )
//   }
// }
