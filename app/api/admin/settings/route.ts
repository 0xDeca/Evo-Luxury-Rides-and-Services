import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  const { data, error } = await supabase.from('settings').select('*')
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  const settings: Record<string, string> = {}
  data?.forEach((s: { key: string; value: string }) => { settings[s.key] = s.value })
  return NextResponse.json({ data: settings })
}

export async function PUT(req: Request) {
  const body = await req.json()
  const errors: string[] = []
  for (const [key, value] of Object.entries(body)) {
    const { error } = await supabase.from('settings').upsert({ key, value: value as string }, { onConflict: 'key' })
    if (error) errors.push(error.message)
  }
  if (errors.length) return NextResponse.json({ error: errors.join(', ') }, { status: 400 })
  return NextResponse.json({ success: true })
}