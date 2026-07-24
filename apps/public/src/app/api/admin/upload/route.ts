import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })

    const buffer = Buffer.from(await file.arrayBuffer())
    const fileName = `${Date.now()}-${file.name.replace(/\s/g, '_')}`

    const { data, error } = await supabase.storage.from('images').upload(fileName, buffer, { contentType: file.type, upsert: true })
    if (error) return NextResponse.json({ error: error.message }, { status: 400 })

    const { data: urlData } = supabase.storage.from('images').getPublicUrl(fileName)
    return NextResponse.json({ data: { url: urlData.publicUrl } })
  } catch {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}