// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import FileDownload from 'js-file-download'
export default async function handler(req, res) {
  const response = await fetch(req.url)

  const blob = await response.blob()
  FileDownload(blob, `${req.name}.pdf`)
}
