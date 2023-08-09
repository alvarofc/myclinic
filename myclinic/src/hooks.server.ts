import { getSubdomain, isValidTenant } from "$lib"
import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
    const url = new URL(event.request.url);
    const subdomain = getSubdomain(url.host)
    console.log('subdomain', subdomain )
    if (subdomain && subdomain !== 'www' && url.pathname === '/') {
        const isValid = await isValidTenant(subdomain)
        if (isValid) {
            return {
                status: 302,
                headers: {
                    location: `/appointments`
                }
            }
        }
        return {
            status: 404,
            error: new Error('Invalid tenant')
        }
    }   

    const response = await resolve(event);
    return response
}) satisfies Handle;