import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import path from 'path'

export const size = { width: 512, height: 512 }
export const contentType = 'image/png'

export default function Icon() {
  const pngBuffer = readFileSync(path.join(process.cwd(), 'public/logo_hillanic.png'))
  const src = `data:image/png;base64,${pngBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2D9E8E 0%, #1A4A6A 100%)',
          padding: 18,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: 'white',
            overflow: 'hidden',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            width={420}
            height={420}
            style={{ objectFit: 'contain' }}
            alt=""
          />
        </div>
      </div>
    ),
    { width: 512, height: 512 }
  )
}
