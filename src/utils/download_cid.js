// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import FileDownload from 'js-file-download'
export async function downloadCid(req, res) {
  const base_url = 'https://ipfs.io/ipfs/'
  const response = await fetch(base_url + req.cid)

  const blob = await response.blob()
  FileDownload(blob, `${req.title}.pdf`)
}
