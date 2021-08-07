addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { headers, url } = request

  const userAgent = headers.get('user-agent') || ""
  if (!userAgent.includes('Twitterbot')) {
    return await fetch(request)
  }

  if (!url.includes('dev.events/conferences/')) {
    return await fetch(request)
  }

  const redirectUrl = url.replace('/conferences/', '/api/events/og/')
  return Response.redirect(redirectUrl, 302)
}
