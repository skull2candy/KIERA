import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  try {
    const filename = params.filename

    const uploadedFile = await prisma.uploadedFile.findFirst({
      where: {
        filename: filename
      }
    })

    if (!uploadedFile) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }

    const buffer = Buffer.from(uploadedFile.data, 'base64')
    const headers = new Headers()
    headers.set('Content-Type', uploadedFile.mimeType)
    headers.set('Content-Length', buffer.length.toString())
    headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    headers.set('Content-Disposition', `inline; filename="${uploadedFile.originalName}"`)

    return new NextResponse(buffer, {
      status: 200,
      headers
    })
  } catch (error) {
    console.error('File API error:', error)
    return NextResponse.json({ error: 'Failed to serve file' }, { status: 500 })
  }
}
